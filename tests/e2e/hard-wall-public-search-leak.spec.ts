import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "@/lib/auth/session-cookie";
import { getActiveAcademicYear } from "@/core/academic-year";

/**
 * Inspecte récursivement un objet JSON pour détecter :
 * 1. La présence de clés interdites (statement, exerciseUrl, subjectUrl, corrections, url)
 * 2. La présence de valeurs sensibles (fichiers d'annales, URLs de PDF, sites sources)
 */
function findForbiddenKeysAndValues(obj: unknown, path = ""): string[] {
  const leaks: string[] = [];
  if (obj === null || obj === undefined) return leaks;

  if (typeof obj === "string") {
    if (/\/uploads\/exam-papers\//i.test(obj)) {
      leaks.push(`Value leak at ${path}: contains /uploads/exam-papers/ ("${obj}")`);
    }
    if (/\.pdf(\?|$)/i.test(obj)) {
      leaks.push(`Value leak at ${path}: contains .pdf ("${obj}")`);
    }
    if (/labolycee\.org/i.test(obj)) {
      leaks.push(`Value leak at ${path}: contains labolycee.org ("${obj}")`);
    }
    if (/apmep\.fr/i.test(obj)) {
      leaks.push(`Value leak at ${path}: contains apmep.fr ("${obj}")`);
    }
    return leaks;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      leaks.push(...findForbiddenKeysAndValues(item, `${path}[${idx}]`));
    });
    return leaks;
  }

  if (typeof obj === "object") {
    const forbiddenKeyNames = ["statement", "exerciseUrl", "subjectUrl", "corrections"];
    for (const [key, val] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (forbiddenKeyNames.includes(key)) {
        leaks.push(`Forbidden key '${key}' found at ${currentPath}`);
      }
      if (key.toLowerCase() === "url") {
        leaks.push(`Forbidden generic 'url' key found at ${currentPath}: ${String(val)}`);
      }
      leaks.push(...findForbiddenKeysAndValues(val, currentPath));
    }
  }

  return leaks;
}

test.describe.serial("Hard Wall — Étanchéité des DTOs publics et contrôle d'accès", () => {
  test("1. GET /api/exercises/search (anonyme) : 200 OK avec DTO public sans fuite récursive (clés & valeurs)", async ({
    request,
  }) => {
    const response = await request.get("/api/exercises/search");
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.count).toBeGreaterThan(0);
    expect(Array.isArray(body.exercises)).toBe(true);
    expect(body.exercises.length).toBeGreaterThan(0);

    const leaks = findForbiddenKeysAndValues(body);
    expect(leaks).toEqual([]);

    // Contrôles sur les champs publics du premier exercice
    const ex = body.exercises[0];
    expect(ex).toHaveProperty("id");
    expect(ex).toHaveProperty("title");
    expect(ex).toHaveProperty("exerciseNumber");
    expect(ex).toHaveProperty("hasCorrection");
    expect(typeof ex.hasCorrection).toBe("boolean");
    expect(typeof ex.correctionCount).toBe("number");
    expect(ex.examPaper).toBeDefined();
    expect(ex.examPaper.label).toBeDefined();
    expect(ex.examPaper.sessionYear).toBeDefined();
    expect(ex.examPaper.diploma).toBeDefined();
    expect(ex.examPaper.teaching).toBeDefined();

    // Vérification formelle d'absence
    expect(ex.statement).toBeUndefined();
    expect(ex.exerciseUrl).toBeUndefined();
    expect(ex.examPaper.subjectUrl).toBeUndefined();
    expect(ex.examPaper.sourceUrl).toBeUndefined();
    expect(ex.corrections).toBeUndefined();
  });

  test("2. GET /api/exam-papers/search (anonyme) : 200 OK avec DTO public sans fuite récursive (clés & valeurs)", async ({
    request,
  }) => {
    const response = await request.get("/api/exam-papers/search");
    expect(response.status()).toBe(200);

    const papers = await response.json();
    expect(Array.isArray(papers)).toBe(true);
    expect(papers.length).toBeGreaterThan(0);

    const leaks = findForbiddenKeysAndValues(papers);
    expect(leaks).toEqual([]);

    const p = papers[0];
    expect(p).toHaveProperty("id");
    expect(p).toHaveProperty("label");
    expect(p).toHaveProperty("sessionYear");
    expect(p).toHaveProperty("hasSubjectPdf");
    expect(typeof p.hasSubjectPdf).toBe("boolean");
    expect(p).toHaveProperty("hasCorrection");
    expect(typeof p.hasCorrection).toBe("boolean");
    expect(typeof p.correctionCount).toBe("number");
    expect(typeof p.exerciseCount).toBe("number");

    // Vérification formelle d'absence
    expect(p.subjectUrl).toBeUndefined();
    expect(p.corrections).toBeUndefined();
  });

  test("3. GET /api/exercises/suggest (anonyme) : 200 OK sans fuite", async ({
    request,
  }) => {
    const response = await request.get("/api/exercises/suggest?q=physique");
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);

    const leaks = findForbiddenKeysAndValues(body);
    expect(leaks).toEqual([]);
  });

  test("4. GET /api/exercises/[id] : Hard Wall strict (401 anonyme, 403 mauvais niveau, 200 bon niveau avec statement)", async ({
    request,
  }) => {
    // 1. Trouver un exercice enrichi de Terminale avec statement
    const terminaleGrade = await prisma.grade.findFirst({
      where: { shortDescription: { in: ["Terminale", "Tle"] } },
    });
    expect(terminaleGrade).not.toBeNull();

    const secondeGrade = await prisma.grade.findFirst({
      where: { shortDescription: { in: ["Seconde", "2de"] } },
    });
    expect(secondeGrade).not.toBeNull();

    const exercise = await prisma.exercise.findFirst({
      where: {
        statement: { not: null },
        examPaper: { gradeId: terminaleGrade!.id },
      },
      select: { id: true, statement: true },
    });
    expect(exercise).not.toBeNull();

    // A. Anonyme -> 401
    const anonRes = await request.get(`/api/exercises/${exercise!.id}`);
    expect(anonRes.status()).toBe(401);

    // B. Utilisateur Seconde (mauvais niveau) -> 403
    const activeYear = await getActiveAcademicYear();
    expect(activeYear).not.toBeNull();

    const userSeconde = await prisma.user.upsert({
      where: { email: "student-seconde-test@example.com" },
      update: { roles: "USER" },
      create: {
        email: "student-seconde-test@example.com",
        name: "Élève Seconde",
        roles: "USER",
      },
    });

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: userSeconde.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: userSeconde.id,
        academicYearId: activeYear!.id,
        audience: "SECONDARY",
        secondaryGradeId: secondeGrade!.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const tokenSeconde = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: userSeconde.id,
          role: "USER",
          email: userSeconde.email,
          name: userSeconde.name ?? undefined,
        },
      }),
      { secure: false }
    );

    const badLevelRes = await request.get(`/api/exercises/${exercise!.id}`, {
      headers: { Cookie: `authjs.session-token=${tokenSeconde}` },
    });
    expect(badLevelRes.status()).toBe(403);

    // C. Utilisateur Terminale (bon niveau) -> 200 OK avec statement
    const userTerminale = await prisma.user.upsert({
      where: { email: "student-terminale-test@example.com" },
      update: { roles: "USER" },
      create: {
        email: "student-terminale-test@example.com",
        name: "Élève Terminale",
        roles: "USER",
      },
    });

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: userTerminale.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: userTerminale.id,
        academicYearId: activeYear!.id,
        audience: "SECONDARY",
        secondaryGradeId: terminaleGrade!.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const tokenTerminale = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: userTerminale.id,
          role: "USER",
          email: userTerminale.email,
          name: userTerminale.name ?? undefined,
        },
      }),
      { secure: false }
    );

    const goodLevelRes = await request.get(`/api/exercises/${exercise!.id}`, {
      headers: { Cookie: `authjs.session-token=${tokenTerminale}` },
    });
    expect(goodLevelRes.status()).toBe(200);
    const goodBody = await goodLevelRes.json();
    expect(goodBody.success).toBe(true);
    expect(goodBody.exercise).toBeDefined();
    expect(goodBody.exercise.statement).toBeTruthy();

    // Nettoyage
    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: { in: [userSeconde.id, userTerminale.id] } },
    });
    await prisma.user.deleteMany({
      where: { id: { in: [userSeconde.id, userTerminale.id] } },
    });
  });

  test("5. GET /uploads/exam-papers/[file] : Hard Wall strict (401 anonyme, 403 mauvais niveau, 200 bon niveau)", async ({
    request,
  }) => {
    const terminaleGrade = await prisma.grade.findFirst({
      where: { shortDescription: { in: ["Terminale", "Tle"] } },
    });
    const secondeGrade = await prisma.grade.findFirst({
      where: { shortDescription: { in: ["Seconde", "2de"] } },
    });
    expect(terminaleGrade).not.toBeNull();
    expect(secondeGrade).not.toBeNull();

    const activeYear = await getActiveAcademicYear();
    expect(activeYear).not.toBeNull();

    const fileName = "443415c7d0e37f82810e639b43b52eab6fe26fe4b9e8ad25846fcb57fc8592d6.pdf";

    // A. Anonyme -> 401
    const anonRes = await request.get(`/uploads/exam-papers/${fileName}`);
    expect(anonRes.status()).toBe(401);

    // B. Utilisateur Seconde (mauvais niveau) -> 403
    const userSeconde = await prisma.user.upsert({
      where: { email: "pdf-seconde-test@example.com" },
      update: { roles: "USER" },
      create: {
        email: "pdf-seconde-test@example.com",
        name: "Élève Seconde PDF",
        roles: "USER",
      },
    });

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: userSeconde.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: userSeconde.id,
        academicYearId: activeYear!.id,
        audience: "SECONDARY",
        secondaryGradeId: secondeGrade!.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const tokenSeconde = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: userSeconde.id,
          role: "USER",
          email: userSeconde.email,
          name: userSeconde.name ?? undefined,
        },
      }),
      { secure: false }
    );

    const badLevelRes = await request.get(`/uploads/exam-papers/${fileName}`, {
      headers: { Cookie: `authjs.session-token=${tokenSeconde}` },
    });
    expect(badLevelRes.status()).toBe(403);

    // C. Utilisateur Terminale (bon niveau) -> 200
    const userTerminale = await prisma.user.upsert({
      where: { email: "pdf-terminale-test@example.com" },
      update: { roles: "USER" },
      create: {
        email: "pdf-terminale-test@example.com",
        name: "Élève Terminale PDF",
        roles: "USER",
      },
    });

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: userTerminale.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: userTerminale.id,
        academicYearId: activeYear!.id,
        audience: "SECONDARY",
        secondaryGradeId: terminaleGrade!.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const tokenTerminale = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: userTerminale.id,
          role: "USER",
          email: userTerminale.email,
          name: userTerminale.name ?? undefined,
        },
      }),
      { secure: false }
    );

    const goodLevelRes = await request.get(`/uploads/exam-papers/${fileName}`, {
      headers: { Cookie: `authjs.session-token=${tokenTerminale}` },
    });
    expect(goodLevelRes.status()).toBe(200);
    expect(goodLevelRes.headers()["content-type"]).toContain("application/pdf");

    // Nettoyage
    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: { in: [userSeconde.id, userTerminale.id] } },
    });
    await prisma.user.deleteMany({
      where: { id: { in: [userSeconde.id, userTerminale.id] } },
    });
  });

  test("6. Navigation anonyme sur page publique : catalogue sans fuite, épreuve protégée", async ({
    page,
  }) => {
    // A. Page catalogue /annales
    const annalesRes = await page.goto("/annales");
    expect(annalesRes?.status()).toBe(200);
    await page.waitForLoadState("networkidle");

    const htmlAnnales = await page.content();
    expect(htmlAnnales).not.toContain("/uploads/exam-papers/");
    expect(htmlAnnales).not.toContain("labolycee.org/upload/");

    // B. Page épreuve /sujets/[id] anonyme
    const examPaper = await prisma.examPaper.findFirst({
      where: { subjectUrl: { not: null } },
      select: { id: true, subjectUrl: true },
    });
    expect(examPaper).not.toBeNull();

    await page.goto(`/sujets/${examPaper!.id}`);
    await page.waitForLoadState("networkidle");

    const htmlSujet = await page.content();
    // Ne doit pas contenir l'iframe pointant vers le PDF complet
    expect(htmlSujet).not.toContain(examPaper!.subjectUrl!);
    // Doit afficher le message d'invitation à se connecter
    expect(htmlSujet).toContain("Connectez-vous avec une affectation");
  });
});
