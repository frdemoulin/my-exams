import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "@/lib/auth/session-cookie";

test.describe("Sécurité et ownership des sessions Training & Server Actions", () => {
  test("API upload PDF d'annales distingue 401 (anonyme) et 403 (non-admin)", async ({
    request,
  }) => {
    // 1. Anonyme -> 401 Non authentifié
    const anonResponse = await request.post("/api/exam-papers/upload", {
      multipart: {
        file: {
          name: "test.pdf",
          mimeType: "application/pdf",
          buffer: Buffer.from("%PDF-1.4 test"),
        },
      },
    });

    expect(anonResponse.status()).toBe(401);
    const anonBody = await anonResponse.json();
    expect(anonBody.error).toContain("Non authentifié");

    // 2. Utilisateur avec rôle USER -> 403 Accès administrateur requis
    const userPayload = buildAppSessionTokenPayload({
      actor: {
        id: "64b8f0a0c9e77c1234567891",
        role: "USER",
        email: "student@example.com",
        name: "Student User",
      },
    });
    const userToken = await encodeAppSessionToken(userPayload, { secure: false });

    const userResponse = await request.post("/api/exam-papers/upload", {
      headers: {
        Cookie: `authjs.session-token=${userToken}`,
      },
      multipart: {
        file: {
          name: "test.pdf",
          mimeType: "application/pdf",
          buffer: Buffer.from("%PDF-1.4 test"),
        },
      },
    });

    expect(userResponse.status()).toBe(403);
    const userBody = await userResponse.json();
    expect(userBody.error).toContain("Accès administrateur requis");
  });

  test("Scénario d'attaque complet : Anonyme et Utilisateur B rejetés, tentative de A strictement inchangée", async ({
    request,
  }) => {
    // 1. Préparation des utilisateurs A et B en BDD
    const emailA = "test-ownership-a@example.com";
    const emailB = "test-ownership-b@example.com";

    const userA = await prisma.user.upsert({
      where: { email: emailA },
      update: { roles: "USER" },
      create: { email: emailA, name: "Victim A", roles: "USER" },
    });

    const userB = await prisma.user.upsert({
      where: { email: emailB },
      update: { roles: "USER" },
      create: { email: emailB, name: "Attacker B", roles: "USER" },
    });

    // 2. Recherche d'un chapitre et d'un quiz existant pour créer une tentative légitime pour A
    const quiz = await prisma.trainingQuiz.findFirst({
      where: {
        isPublished: true,
        chapter: { isPublished: true },
      },
      include: {
        chapter: true,
        questionLinks: { take: 2, include: { question: true } },
      },
    });

    test.skip(!quiz, "Aucun quiz d'entraînement publié disponible pour le test.");
    if (!quiz) return;

    const academicYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gte: new Date() },
      },
    });

    const version = await prisma.healthProgramVersion.findFirst({
      select: { id: true },
    });

    const grade = await prisma.grade.findFirst({
      where: { shortDescription: "Tle" },
      select: { id: true },
    });

    const enrollmentA = await prisma.userAcademicEnrollment.create({
      data: {
        userId: userA.id,
        academicYearId: academicYear!.id,
        audience: quiz.chapter.vertical === "HEALTH" ? "HEALTH" : "SECONDARY",
        healthProgramVersionId: quiz.chapter.vertical === "HEALTH" ? version?.id : null,
        secondaryGradeId: quiz.chapter.vertical === "SECONDARY" ? grade?.id : null,
        lockedAt: new Date(),
        createdBy: "SELF_ONBOARDING",
      },
    });

    // Création de la tentative persistante légitime de User A
    const attemptA = await prisma.userTrainingQuizAttempt.create({
      data: {
        userId: userA.id,
        academicEnrollmentId: enrollmentA.id,
        chapterId: quiz.chapterId,
        quizId: quiz.id,
        status: "IN_PROGRESS",
        maxScore: quiz.questionLinks.length,
        attemptQuestions: {
          create: quiz.questionLinks.map((link) => ({
            questionId: link.questionId,
            order: link.order,
            questionUpdatedAt: link.question.updatedAt,
          })),
        },
      },
      include: {
        attemptQuestions: true,
      },
    });

    const initialUpdatedAt = attemptA.updatedAt;

    try {
      // 3. Attaque 1 : Appel anonyme ciblant la tentative de A
      const anonAttackResponse = await request.post(
        "/api/training/quiz-session/submit",
        {
          data: {
            sessionId: attemptA.id,
            answers: [
              {
                questionId: quiz.questionLinks[0]?.questionId,
                selectedChoiceIndexes: [0],
              },
            ],
            targetScore: 80,
          },
        }
      );

      expect(anonAttackResponse.status()).toBe(401);
      const anonBody = await anonAttackResponse.json();
      expect(anonBody.success).toBe(false);
      expect(anonBody.code).toBe("UNAUTHENTICATED");

      // 4. Attaque 2 : Utilisateur B (authentifié) soumet l'ID de session de A
      const payloadB = buildAppSessionTokenPayload({
        actor: {
          id: userB.id,
          role: "USER",
          email: userB.email,
          name: userB.name,
        },
      });
      const tokenB = await encodeAppSessionToken(payloadB, { secure: false });

      const attackerBResponse = await request.post(
        "/api/training/quiz-session/submit",
        {
          headers: {
            Cookie: `authjs.session-token=${tokenB}`,
          },
          data: {
            sessionId: attemptA.id,
            answers: [
              {
                questionId: quiz.questionLinks[0]?.questionId,
                selectedChoiceIndexes: [0],
              },
            ],
            targetScore: 80,
          },
        }
      );

      expect(attackerBResponse.status()).toBe(403);
      const attackerBody = await attackerBResponse.json();
      expect(attackerBody.success).toBe(false);
      expect(attackerBody.message).toContain("Session introuvable ou accès non autorisé");

      // 5. Vérification BDD : la tentative de A est STRICTEMENT inchangée après les deux attaques
      const persistedAttemptA = await prisma.userTrainingQuizAttempt.findUnique({
        where: { id: attemptA.id },
        include: { attemptQuestions: true },
      });

      expect(persistedAttemptA).not.toBeNull();
      expect(persistedAttemptA!.status).toBe("IN_PROGRESS");
      expect(persistedAttemptA!.score).toBeNull();
      expect(persistedAttemptA!.successRate).toBeNull();
      expect(persistedAttemptA!.userId).toBe(userA.id);

      // Vérifier qu'aucune réponse n'a été injectée
      for (const aq of persistedAttemptA!.attemptQuestions) {
        expect(aq.responsePayload).toBeNull();
      }

      // Vérifier qu'aucune progression n'a été créée ou modifiée pour User A
      const progressA = await prisma.userTrainingQuizProgress.findFirst({
        where: {
          userId: userA.id,
          quizId: quiz.id,
        },
      });
      expect(progressA).toBeNull();
    } finally {
      // Nettoyage après le test
      await prisma.userTrainingQuizAttempt.deleteMany({
        where: { id: attemptA.id },
      });
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: userA.id },
      });
      await prisma.user.deleteMany({
        where: { id: { in: [userA.id, userB.id] } },
      });
    }
  });
});
