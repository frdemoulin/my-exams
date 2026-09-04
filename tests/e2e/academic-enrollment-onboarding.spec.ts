import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "@/lib/auth/session-cookie";

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.describe.serial("P1B — Parcours Onboarding et Affectation Pédagogique Annuelle", () => {
  const createdUserIds: string[] = [];

  const createTestUserSession = async (prefix: string) => {
    const email = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@example.com`;
    const user = await prisma.user.create({
      data: {
        email,
        name: `Test ${prefix}`,
        roles: "USER",
      },
    });
    createdUserIds.push(user.id);

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: "USER",
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    const url = new URL(appBaseUrl);
    const cookies = [
      {
        name: "authjs.session-token",
        value: sessionToken,
        domain: url.hostname,
        path: "/",
      },
    ];

    return { user, cookies };
  };

  test.afterAll(async () => {
    if (createdUserIds.length > 0) {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: { in: createdUserIds } },
      });
      await prisma.userExerciseHistory.deleteMany({
        where: { userId: { in: createdUserIds } },
      });
      await prisma.user.deleteMany({
        where: { id: { in: createdUserIds } },
      });
    }
  });

  test("1. Redirection /onboarding : utilisateur sans affectation est intercepté", async ({
    page,
    context,
  }) => {
    const { cookies } = await createTestUserSession("onboarding-no-enr");
    await context.addCookies(cookies);

    // Tentative d'accès au dashboard sans enrollment -> redirige vers /onboarding
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/onboarding/);

    // L'écran d'onboarding affiche le choix de filière
    await expect(page.getByText("Quelle est votre situation")).toBeVisible();
    await expect(page.getByRole("button", { name: /Collège/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Lycée/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /L1 Santé/i })).toBeVisible();
  });

  test("2. Parcours complet Secondaire (Terminale) : choix, verrouillage annuel, redirection /lycee", async ({
    page,
    context,
  }) => {
    const { user, cookies } = await createTestUserSession("onboarding-terminale");
    await context.addCookies(cookies);

    await page.goto("/onboarding");

    // Étape 1 : Clic direct sur Lycée (avance automatiquement à l'étape 2)
    await page.getByRole("button", { name: /Lycée/i }).click();

    // Étape 2 : Choix du niveau Terminale
    await expect(page.getByText("Choisissez votre classe")).toBeVisible();
    await page.getByRole("button", { name: /Terminale/i }).click();
    await page.getByRole("button", { name: /Continuer/i }).click();

    // Étape 3 : Récapitulatif et avertissement de verrouillage annuel
    await expect(page.getByText("Confirmez votre affectation")).toBeVisible();
    await expect(page.getByText("Verrouillage annuel")).toBeVisible();

    // Validation
    await page.getByRole("button", { name: /Confirmer mon niveau/i }).click();

    // Redirection automatique vers /lycee
    await expect(page).toHaveURL(/\/lycee/, { timeout: 10000 });

    // Vérification BDD : Enrollment créé et verrouillé
    const enrollment = await prisma.userAcademicEnrollment.findFirst({
      where: { userId: user.id },
    });
    expect(enrollment).not.toBeNull();
    expect(enrollment?.audience).toBe("SECONDARY");
    expect(enrollment?.lockedAt).not.toBeNull();
    expect(enrollment?.createdBy).toBe("SELF_ONBOARDING");

    const grade = await prisma.grade.findUnique({
      where: { id: enrollment!.secondaryGradeId! },
    });
    expect(grade?.shortDescription).toBe("Tle");

    // Une nouvelle visite de /onboarding doit immédiatement rediriger vers /lycee
    await page.goto("/onboarding");
    await expect(page).toHaveURL(/\/lycee/);

    // Consultation du profil pédagogique sur le dashboard : lecture seule et verrouillé
    await page.goto("/dashboard/profil-pedagogique");
    await expect(page.getByText("Niveau verrouillé")).toBeVisible();
    await expect(page.getByText(/Signaler une erreur/i)).toBeVisible();
  });

  test("3. Parcours complet Santé : choix d'établissement et programme, redirection /sante", async ({
    page,
    context,
  }) => {
    const { user, cookies } = await createTestUserSession("onboarding-sante");
    await context.addCookies(cookies);

    await page.goto("/onboarding");

    // Étape 1 : Clic direct sur L1 Santé
    await page.getByRole("button", { name: /L1 Santé/i }).click();

    // Étape 2 : Établissement et formation
    await expect(page.getByText("Choisissez votre formation Santé")).toBeVisible();

    // Sélection de la première université proposée (si disponible)
    const institutionButtons = page.locator("button:has-text('Université')");
    const institutionCount = await institutionButtons.count();
    if (institutionCount > 0) {
      await institutionButtons.first().click();

      // Sélection d'une version de programme
      const programButtons = page.locator("button:has-text('PASS'), button:has-text('LAS')");
      if ((await programButtons.count()) > 0) {
        await programButtons.first().click();

        await page.getByRole("button", { name: /Continuer/i }).click();

        // Étape 3 : Confirmation
        await expect(page.getByText("Confirmez votre affectation")).toBeVisible();
        await expect(page.getByText("Verrouillage annuel")).toBeVisible();
        await page.getByRole("button", { name: /Confirmer mon inscription Santé/i }).click();

        // Redirection vers /sante
        await expect(page).toHaveURL(/\/sante/, { timeout: 10000 });

        const enrollment = await prisma.userAcademicEnrollment.findFirst({
          where: { userId: user.id },
        });
        expect(enrollment?.audience).toBe("HEALTH");
      }
    }
  });

  test("4. Continuation serveur /auth/continue et normalisation callbackUrl", async ({
    page,
    context,
  }) => {
    const { cookies } = await createTestUserSession("onboarding-continuation");
    await context.addCookies(cookies);

    // Visiter /auth/continue avec un callback interne légitime
    await page.goto("/auth/continue?callbackUrl=%2Flycee");
    // Sans enrollment, redirection forcée vers /onboarding avec callback préservé
    await expect(page).toHaveURL(/\/onboarding\?callbackUrl=%2Flycee/);

    // Visiter /auth/continue avec une URL externe malveillante
    await page.goto("/auth/continue?callbackUrl=%2F%2Fevil.example.com");
    // L'URL malveillante est épurée
    await expect(page).toHaveURL(/\/onboarding$/);
  });

  test("5. Responsive mobile (375px) et absence de scroll horizontal", async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const { cookies } = await createTestUserSession("onboarding-mobile");
    await context.addCookies(cookies);

    await page.goto("/onboarding");

    // Vérifier l'absence de débordement horizontal
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });
});
