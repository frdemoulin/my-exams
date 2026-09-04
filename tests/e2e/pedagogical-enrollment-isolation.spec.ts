import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "@/lib/auth/session-cookie";

test.describe("Cloisonnement pédagogique et affectation annuelle", () => {
  test("1. Utilisateur sans affectation annuelle : API refuse et signale ONBOARDING_REQUIRED", async ({
    request,
  }) => {
    const email = "user-no-enrollment@example.com";
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: "USER" },
      create: { email, name: "Sans Enrollment", roles: "USER" },
    });

    // Supprimer tout éventuel enrollment préexistant
    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: "USER",
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    try {
      const response = await request.post("/api/training/path-progress", {
        headers: {
          Cookie: `authjs.session-token=${sessionToken}`,
        },
        data: {
          chapterId: "dummy_chapter",
          quizId: "dummy_quiz",
          score: 5,
          totalQuestions: 10,
        },
      });

      expect(response.status()).toBe(403);
      const body = await response.json();
      expect(body.message).toContain("Affectation scolaire requise");
    } finally {
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test("2. Cloisonnement : un élève de Terminale est redirigé s'il tente d'accéder à une UE Santé", async ({
    request,
  }) => {
    const email = "user-terminale@example.com";
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: "USER" },
      create: { email, name: "Élève Terminale", roles: "USER" },
    });

    const activeYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gte: new Date() },
      },
    });

    const gradeTle = await prisma.grade.findFirst({
      where: { shortDescription: "Tle" },
    });

    const courseUnit = await prisma.healthCourseUnit.findFirst({
      select: { id: true },
    });

    test.skip(!activeYear || !gradeTle || !courseUnit, "Prérequis BDD manquants pour le test.");
    if (!activeYear || !gradeTle || !courseUnit) return;

    // Créer une affectation Terminale pour cet élève
    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: "SECONDARY",
        secondaryGradeId: gradeTle.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: "USER",
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    try {
      // Tenter d'accéder à la page d'une UE Santé
      const response = await request.get(`/sante/ue/${courseUnit.id}`, {
        headers: {
          Cookie: `authjs.session-token=${sessionToken}`,
        },
        maxRedirects: 0,
      });

      // Doit rediriger vers le dashboard
      expect(response.status()).toBe(307);
      expect(response.headers()["location"]).toContain("/dashboard");
    } finally {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test("3. Démarrage de session : la tentative est obligatoirement liée à l’academicEnrollmentId de l'élève", async ({
    request,
  }) => {
    const email = "user-training-session@example.com";
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: "USER" },
      create: { email, name: "Élève Quiz", roles: "USER" },
    });

    const activeYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gte: new Date() },
      },
    });

    const gradeTle = await prisma.grade.findFirst({
      where: { shortDescription: "Tle" },
    });

    const quiz = await prisma.trainingQuiz.findFirst({
      where: {
        isPublished: true,
        chapter: {
          isPublished: true,
          level: "terminale",
        },
      },
      include: { chapter: true },
    });

    test.skip(!activeYear || !gradeTle || !quiz, "Quiz de Terminale introuvable pour le test.");
    if (!activeYear || !gradeTle || !quiz) return;

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    const enrollment = await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: "SECONDARY",
        secondaryGradeId: gradeTle.id,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: "USER",
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    let createdAttemptId: string | null = null;
    try {
      const response = await request.post("/api/training/quiz-session/start", {
        headers: {
          Cookie: `authjs.session-token=${sessionToken}`,
        },
        data: {
          chapterId: quiz.chapterId,
          quizId: quiz.id,
        },
      });

      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body.success).toBe(true);
      expect(body.sessionId).toBeDefined();
      createdAttemptId = body.sessionId;

      // Vérifier en BDD que la tentative a bien été créée avec academicEnrollmentId
      const attempt = await prisma.userTrainingQuizAttempt.findUnique({
        where: { id: createdAttemptId! },
      });

      expect(attempt).not.toBeNull();
      expect(attempt?.userId).toBe(user.id);
      expect(attempt?.academicEnrollmentId).toBe(enrollment.id);
    } finally {
      if (createdAttemptId) {
        await prisma.userTrainingQuizAttempt.deleteMany({
          where: { id: createdAttemptId },
        });
      }
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });
});
