import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import {
  createAndLockUserAcademicEnrollment,
  correctUserAcademicEnrollmentByAdmin,
  deleteUserAcademicEnrollmentByAdmin,
  AcademicEnrollmentError,
} from '../../src/core/academic-enrollment/academic-enrollment.service';
import { submitTrainingQuizSession } from '../../src/core/training/training-quiz-session.service';
import { UnauthorizedAdminError } from '../../src/lib/auth/assert-admin';

const TEST_EMAIL_A = 'test-enrollment-user-a@example.com';
const TEST_EMAIL_B = 'test-enrollment-user-b@example.com';
const ADMIN_ACTOR_ID = '6a2c2b111af36bd83ac27ef9';

const adminSession = {
  user: {
    id: ADMIN_ACTOR_ID,
    role: 'ADMIN',
    email: 'admin-actor@example.com',
  },
};

const nonAdminSession = {
  user: {
    id: 'user_intruder',
    role: 'USER',
    email: 'intruder@example.com',
  },
};

async function setupTestContext() {
  const activeYear = await prisma.academicYear.findUnique({
    where: { code: '2026-2027' },
  });
  assert.ok(activeYear, 'Année 2026-2027 requise');

  const gradeTle = await prisma.grade.findFirst({
    where: { shortDescription: 'Tle' },
  });
  assert.ok(gradeTle, 'Grade Tle requis');

  const grade1re = await prisma.grade.findFirst({
    where: { shortDescription: '1re' },
  });
  assert.ok(grade1re, 'Grade 1re requis');

  const healthVersion = await prisma.healthProgramVersion.findFirst({
    include: { pathways: true },
  });
  assert.ok(healthVersion, 'Version santé requise');

  const userA = await prisma.user.upsert({
    where: { email: TEST_EMAIL_A },
    update: {},
    create: {
      email: TEST_EMAIL_A,
      name: 'Test Enrollment User A',
    },
  });

  const userB = await prisma.user.upsert({
    where: { email: TEST_EMAIL_B },
    update: {},
    create: {
      email: TEST_EMAIL_B,
      name: 'Test Enrollment User B',
    },
  });

  // Nettoyer les corrections et affectations existantes de ces utilisateurs de test
  const existingEnrollments = await prisma.userAcademicEnrollment.findMany({
    where: { userId: { in: [userA.id, userB.id] } },
    select: { id: true },
  });
  const enrollmentIds = existingEnrollments.map((e) => e.id);
  if (enrollmentIds.length > 0) {
    await prisma.userAcademicEnrollmentCorrection.deleteMany({
      where: { enrollmentId: { in: enrollmentIds } },
    });
    await prisma.userTrainingQuizAttempt.deleteMany({
      where: { academicEnrollmentId: { in: enrollmentIds } },
    });
    await prisma.userAcademicEnrollment.deleteMany({
      where: { id: { in: enrollmentIds } },
    });
  }

  return { activeYear, gradeTle, grade1re, healthVersion, userA, userB };
}

test('createAndLockUserAcademicEnrollment: crée une affectation immédiatement verrouillée (lockedAt renseigné)', async () => {
  const { activeYear, gradeTle, userA } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  assert.equal(enrollment.userId, userA.id);
  assert.equal(enrollment.academicYearId, activeYear.id);
  assert.equal(enrollment.audience, 'SECONDARY');
  assert.equal(enrollment.secondaryGradeId, gradeTle.id);
  assert.ok(enrollment.lockedAt instanceof Date);
  assert.equal(enrollment.createdBy, 'SELF_ONBOARDING');
});

test('createAndLockUserAcademicEnrollment: refuse une seconde affectation contradictoire pour la même année (ALREADY_ENROLLED)', async () => {
  const { gradeTle, grade1re, userA } = await setupTestContext();

  await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  await assert.rejects(
    () =>
      createAndLockUserAcademicEnrollment({
        userId: userA.id,
        audience: 'SECONDARY',
        secondaryGradeId: grade1re.id,
        createdBy: 'SELF_ONBOARDING',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'ALREADY_ENROLLED');
      return true;
    }
  );
});

test('createAndLockUserAcademicEnrollment: validation Secondaire - refuse si gradeId manquant', async () => {
  const { userA } = await setupTestContext();

  await assert.rejects(
    () =>
      createAndLockUserAcademicEnrollment({
        userId: userA.id,
        audience: 'SECONDARY',
        secondaryGradeId: null,
        createdBy: 'SELF_ONBOARDING',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );
});

test('createAndLockUserAcademicEnrollment: validation Santé - refuse si versionId manquant', async () => {
  const { userA } = await setupTestContext();

  await assert.rejects(
    () =>
      createAndLockUserAcademicEnrollment({
        userId: userA.id,
        audience: 'HEALTH',
        healthProgramVersionId: null,
        createdBy: 'SELF_ONBOARDING',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );
});

test('correctUserAcademicEnrollmentByAdmin: refuse si l’acteur n’est pas ADMIN (403)', async () => {
  const { gradeTle, userA } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
          reason: 'Correction sans droits',
        },
        nonAdminSession
      ),
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal(err.statusCode, 403);
      return true;
    }
  );
});

test('correctUserAcademicEnrollmentByAdmin: refuse si motif manquant (REASON_REQUIRED)', async () => {
  const { gradeTle, userA } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
          reason: '   ',
        },
        adminSession
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'REASON_REQUIRED');
      return true;
    }
  );
});

test('correctUserAcademicEnrollmentByAdmin: rectification ADMIN avec traçabilité append-only et actorId dérivé de la session', async () => {
  const { gradeTle, grade1re, userA } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const corrected = await correctUserAcademicEnrollmentByAdmin(
    {
      enrollmentId: enrollment.id,
      expectedUpdatedAt: enrollment.updatedAt.toISOString(),
      audience: 'SECONDARY',
      secondaryGradeId: grade1re.id,
      reason: 'Erreur d’inscription saisie par l’étudiant',
    },
    adminSession
  );

  assert.equal(corrected.secondaryGradeId, grade1re.id);

  // Vérification de la création d'audit
  const correctionLog = await prisma.userAcademicEnrollmentCorrection.findFirst({
    where: { enrollmentId: enrollment.id },
    orderBy: { createdAt: 'desc' },
  });

  assert.ok(correctionLog);
  assert.equal(correctionLog.actorAdminId, ADMIN_ACTOR_ID); // Strictement dérivé de adminSession
  assert.equal(correctionLog.reason, 'Erreur d’inscription saisie par l’étudiant');
});

test('deleteUserAcademicEnrollmentByAdmin: cas limite 8 - refuse la suppression si l’Enrollment possède un historique', async () => {
  const { gradeTle, userA } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const chapter = await prisma.chapter.findFirst({ select: { id: true } });
  const quiz = await prisma.trainingQuiz.findFirst({
    where: { isPublished: true },
    select: { id: true, chapterId: true },
  });

  if (chapter && quiz) {
    // Créer une tentative fictive rattachée à cet enrollment
    const attempt = await prisma.userTrainingQuizAttempt.create({
      data: {
        userId: userA.id,
        academicEnrollmentId: enrollment.id,
        chapterId: quiz.chapterId,
        quizId: quiz.id,
        status: 'IN_PROGRESS',
      },
    });

    // Tentative de suppression : doit être refusée
    await assert.rejects(
      () =>
        deleteUserAcademicEnrollmentByAdmin(
          { enrollmentId: enrollment.id },
          adminSession
        ),
      (err: unknown) => {
        assert.ok(err instanceof AcademicEnrollmentError);
        assert.equal(err.code, 'LOCKED');
        return true;
      }
    );

    // Nettoyer l'attempt de test
    await prisma.userTrainingQuizAttempt.delete({ where: { id: attempt.id } });
  }
});

test('deleteUserAcademicEnrollmentByAdmin: supprime l’Enrollment lorsqu’il est vierge de tout historique', async () => {
  const { gradeTle, userB } = await setupTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: userB.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'ADMIN',
  });

  await assert.doesNotReject(() =>
    deleteUserAcademicEnrollmentByAdmin(
      { enrollmentId: enrollment.id },
      adminSession
    )
  );

  const deleted = await prisma.userAcademicEnrollment.findUnique({
    where: { id: enrollment.id },
  });
  assert.equal(deleted, null);
});

test('Cohérence User / Enrollment: cas limite 7 - User B tentant de soumettre une session de User A est rejeté', async () => {
  const { gradeTle, userA, userB } = await setupTestContext();

  const enrollmentA = await createAndLockUserAcademicEnrollment({
    userId: userA.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const quiz = await prisma.trainingQuiz.findFirst({
    where: { isPublished: true },
    select: { id: true, chapterId: true },
  });

  if (quiz) {
    const attemptA = await prisma.userTrainingQuizAttempt.create({
      data: {
        userId: userA.id,
        academicEnrollmentId: enrollmentA.id,
        chapterId: quiz.chapterId,
        quizId: quiz.id,
        status: 'IN_PROGRESS',
      },
    });

    // User B essaie de soumettre la session de User A
    await assert.rejects(
      () =>
        submitTrainingQuizSession({
          sessionId: attemptA.id,
          userId: userB.id,
          answers: [],
        }),
      (err: unknown) => {
        assert.ok(err instanceof Error);
        assert.match(err.message, /Session introuvable ou accès non autorisé/);
        return true;
      }
    );

    await prisma.userTrainingQuizAttempt.delete({ where: { id: attemptA.id } });
  }
});
