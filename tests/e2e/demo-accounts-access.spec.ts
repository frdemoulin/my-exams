import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "../helpers/session-fixture";

/**
 * Isolation fonctionnelle des 3 comptes de démonstration.
 *
 * Matrice :
 *   demo-college  → SECONDARY / 3e        → accès chapitres 3e OK, Santé et Lycée refusés
 *   demo-lycee    → SECONDARY / Tle        → accès chapitres Tle OK, Santé et Collège refusés
 *   demo-sante    → HEALTH / URCA LAS-SPS  → accès UE Santé OK, Secondary refusé
 *
 * Le test vérifie des ressources profondes (API quiz-session, pages UE), pas les pages d'accueil.
 */

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

// Helper: build a session token for an existing demo user (must be seeded)
async function sessionTokenForDemo(email: string): Promise<string> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error(`Compte démo introuvable en base : ${email}. Exécutez npm run db:seed:demo-accounts.`);

  const payload = buildAppSessionTokenPayload({
    actor: {
      id: user.id,
      role: user.roles,
      email: user.email,
      name: user.name ?? undefined,
    },
  });
  return encodeAppSessionToken(payload, { secure: false });
}

// Helper: fetch a Santé course unit ID from the seeded data
async function getHealthCourseUnitId(): Promise<string | null> {
  const cu = await prisma.healthCourseUnit.findFirst({ select: { id: true } });
  return cu?.id ?? null;
}

// Helper: fetch a published Terminale quiz with its chapter
async function getTerminaleQuiz(): Promise<{ quizId: string; chapterId: string } | null> {
  const quiz = await prisma.trainingQuiz.findFirst({
    where: { isPublished: true, chapter: { isPublished: true, level: "terminale" } },
    select: { id: true, chapterId: true },
  });
  return quiz ? { quizId: quiz.id, chapterId: quiz.chapterId } : null;
}

test.describe("Isolation fonctionnelle des comptes de démonstration", () => {
  // ─── demo-college ───────────────────────────────────────────────────────

  test("demo-college : profil pédagogique → SECONDARY / COLLEGE / 3e", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-college@my-exams.local");

    const res = await request.get(`${appBaseUrl}/api/me/viewer-profile`, {
      headers: { Cookie: `authjs.session-token=${token}` },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.audience).toBe("SECONDARY");
    expect(body.segment).toBe("COLLEGE");
    expect(body.gradeShort).toBe("3e");
  });

  test("demo-college : accès Santé UE → redirection (FORBIDDEN_SCOPE)", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-college@my-exams.local");
    const courseUnitId = await getHealthCourseUnitId();
    test.skip(!courseUnitId, "Aucune UE Santé en base.");

    const res = await request.get(`${appBaseUrl}/sante/ue/${courseUnitId}`, {
      headers: { Cookie: `authjs.session-token=${token}` },
      maxRedirects: 0,
    });

    // Un élève SECONDARY tentant d'accéder à Santé est redirigé vers le dashboard
    expect(res.status()).toBe(307);
    expect(res.headers()["location"]).toContain("/dashboard");
  });

  test("demo-college : démarrage quiz Terminale → refusé (FORBIDDEN_SCOPE)", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-college@my-exams.local");
    const tleQuiz = await getTerminaleQuiz();
    test.skip(!tleQuiz, "Aucun quiz Terminale en base.");

    const res = await request.post(`${appBaseUrl}/api/training/quiz-session/start`, {
      headers: {
        Cookie: `authjs.session-token=${token}`,
        "Content-Type": "application/json",
      },
      data: { chapterId: tleQuiz!.chapterId, quizId: tleQuiz!.quizId },
    });

    // Un élève de 3e ne peut pas démarrer un quiz Terminale
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.message).toMatch(/non autorisé|niveau scolaire/i);
  });

  // ─── demo-lycee ─────────────────────────────────────────────────────────

  test("demo-lycee : accès Santé UE → redirection (FORBIDDEN_SCOPE)", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-lycee@my-exams.local");
    const courseUnitId = await getHealthCourseUnitId();
    test.skip(!courseUnitId, "Aucune UE Santé en base.");

    const res = await request.get(`${appBaseUrl}/sante/ue/${courseUnitId}`, {
      headers: { Cookie: `authjs.session-token=${token}` },
      maxRedirects: 0,
    });

    expect(res.status()).toBe(307);
    expect(res.headers()["location"]).toContain("/dashboard");
  });

  test("demo-lycee : démarrage quiz Terminale → autorisé", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-lycee@my-exams.local");
    const tleQuiz = await getTerminaleQuiz();
    test.skip(!tleQuiz, "Aucun quiz Terminale en base.");

    const res = await request.post(`${appBaseUrl}/api/training/quiz-session/start`, {
      headers: {
        Cookie: `authjs.session-token=${token}`,
        "Content-Type": "application/json",
      },
      data: { chapterId: tleQuiz!.chapterId, quizId: tleQuiz!.quizId },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.sessionId).toBeDefined();

    // Cleanup : supprimer la tentative créée
    if (body.sessionId) {
      await prisma.userTrainingQuizAttempt.deleteMany({ where: { id: body.sessionId } });
    }
  });

  // ─── demo-sante ─────────────────────────────────────────────────────────

  test("demo-sante : accès UE Santé → autorisé (page se rend)", async ({ page }) => {
    const token = await sessionTokenForDemo("demo-sante@my-exams.local");
    const courseUnitId = await getHealthCourseUnitId();
    test.skip(!courseUnitId, "Aucune UE Santé en base.");

    await page.context().addCookies([{
      name: "authjs.session-token",
      value: token,
      domain: "localhost",
      path: "/",
    }]);

    await page.goto(`${appBaseUrl}/sante/ue/${courseUnitId}`);

    // La page UE se rend sans redirection (le h1 ou un titre de chapitre est visible)
    await expect(page.locator("h1, [data-testid='course-unit-title']")).toBeVisible({ timeout: 10000 });
  });

  test("demo-sante : démarrage quiz Terminale → refusé (FORBIDDEN_SCOPE)", async ({ request }) => {
    const token = await sessionTokenForDemo("demo-sante@my-exams.local");
    const tleQuiz = await getTerminaleQuiz();
    test.skip(!tleQuiz, "Aucun quiz Terminale en base.");

    const res = await request.post(`${appBaseUrl}/api/training/quiz-session/start`, {
      headers: {
        Cookie: `authjs.session-token=${token}`,
        "Content-Type": "application/json",
      },
      data: { chapterId: tleQuiz!.chapterId, quizId: tleQuiz!.quizId },
    });

    // Un étudiant Santé ne peut pas démarrer un quiz Secondaire
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.message).toMatch(/secondaire|non autorisé/i);
  });

  // ─── Ancien compte générique absent ─────────────────────────────────────

  test("demo@example.com est absent de la base après seed", async () => {
    const oldUser = await prisma.user.findUnique({ where: { email: "demo@example.com" } });
    expect(oldUser).toBeNull();
  });
});
