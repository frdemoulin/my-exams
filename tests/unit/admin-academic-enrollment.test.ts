import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import {
  createAndLockUserAcademicEnrollment,
  correctUserAcademicEnrollmentByAdmin,
  createUserAcademicEnrollmentByAdmin,
  AcademicEnrollmentError,
} from '../../src/core/academic-enrollment/academic-enrollment.service';
import { assertUserCanAccessSecondaryContent } from '../../src/lib/auth/assert-pedagogical-access';
import { UnauthorizedAdminError } from '../../src/lib/auth/assert-admin-session';

const ADMIN_ACTOR_ID = '6a2c2b111af36bd83ac27ef9';
const TEST_ADMIN_SESSION = {
  user: {
    id: ADMIN_ACTOR_ID,
    role: 'ADMIN',
    email: 'admin-p1c@example.com',
  },
};

const TEST_IMPERSONATED_ADMIN_SESSION = {
  user: {
    id: 'impersonated_target_id',
    role: 'USER',
    email: 'user-impersonated@example.com',
  },
  actor: {
    id: ADMIN_ACTOR_ID,
    role: 'ADMIN',
    email: 'admin-p1c@example.com',
  },
  impersonation: {
    isActive: true,
    viewerId: 'impersonated_target_id',
    viewerRole: 'USER',
  },
};

const TEST_USER_SESSION = {
  user: {
    id: 'simple_user_id',
    role: 'USER',
    email: 'simple-user@example.com',
  },
};

const TEST_USER_EMAIL_1 = 'p1c-test-user-1@example.com';
const TEST_USER_EMAIL_2 = 'p1c-test-user-2@example.com';
const TEST_USER_EMAIL_3 = 'p1c-test-user-3@example.com';

async function setupP1CTestContext() {
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
    include: { pathways: true, program: true, institution: true },
  });
  assert.ok(healthVersion, 'Version santé requise');

  const [user1, user2, user3] = await Promise.all([
    prisma.user.upsert({
      where: { email: TEST_USER_EMAIL_1 },
      update: {},
      create: { email: TEST_USER_EMAIL_1, name: 'P1C Test User 1' },
    }),
    prisma.user.upsert({
      where: { email: TEST_USER_EMAIL_2 },
      update: {},
      create: { email: TEST_USER_EMAIL_2, name: 'P1C Test User 2' },
    }),
    prisma.user.upsert({
      where: { email: TEST_USER_EMAIL_3 },
      update: {},
      create: { email: TEST_USER_EMAIL_3, name: 'P1C Test User 3' },
    }),
  ]);

  const userIds = [user1.id, user2.id, user3.id];
  const existingEnrollments = await prisma.userAcademicEnrollment.findMany({
    where: { userId: { in: userIds } },
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
    await prisma.userTrainingQuizProgress.deleteMany({
      where: { academicEnrollmentId: { in: enrollmentIds } },
    });
    await prisma.userHealthMockExamAttempt.deleteMany({
      where: { academicEnrollmentId: { in: enrollmentIds } },
    });
    await prisma.userAcademicEnrollment.deleteMany({
      where: { id: { in: enrollmentIds } },
    });
  }

  return { activeYear, gradeTle, grade1re, healthVersion, user1, user2, user3 };
}

test('P1C Autorisation: USER est rejeté (403) sur la création et la correction ADMIN', async () => {
  const { gradeTle, user1 } = await setupP1CTestContext();

  // Création par USER -> 403
  await assert.rejects(
    () =>
      createUserAcademicEnrollmentByAdmin(
        {
          userId: user1.id,
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
        },
        TEST_USER_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal(err.statusCode, 403);
      return true;
    }
  );

  // Création légitime initiale
  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Correction par USER -> 403
  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
          reason: 'Tentative frauduleuse',
        },
        TEST_USER_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal(err.statusCode, 403);
      return true;
    }
  );
});

test('P1C Impersonation: ADMIN impersonnant un USER conserve ses droits et trace son actorAdminId réel', async () => {
  const { gradeTle, user1 } = await setupP1CTestContext();

  const created = await createUserAcademicEnrollmentByAdmin(
    {
      userId: user1.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
    },
    TEST_IMPERSONATED_ADMIN_SESSION
  );

  assert.equal(created.createdBy, 'ADMIN');
  assert.equal(created.createdByActorId, ADMIN_ACTOR_ID);
  assert.ok(created.lockedAt);
});

test('P1C Création ADMIN: création réussie pour utilisateur sans Enrollment avec createdBy=ADMIN', async () => {
  const { gradeTle, user2 } = await setupP1CTestContext();

  const created = await createUserAcademicEnrollmentByAdmin(
    {
      userId: user2.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
    },
    TEST_ADMIN_SESSION
  );

  assert.equal(created.userId, user2.id);
  assert.equal(created.audience, 'SECONDARY');
  assert.equal(created.secondaryGradeId, gradeTle.id);
  assert.equal(created.createdBy, 'ADMIN');
  assert.equal(created.createdByActorId, ADMIN_ACTOR_ID);
  assert.ok(created.lockedAt);

  // Refus propre si l'utilisateur possède déjà une affectation
  await assert.rejects(
    () =>
      createUserAcademicEnrollmentByAdmin(
        {
          userId: user2.id,
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'ALREADY_ENROLLED');
      return true;
    }
  );
});

test('P1C Validation Scope: rejet si grade inexistant ou non proposé pour l’année active', async () => {
  const { user3 } = await setupP1CTestContext();

  await assert.rejects(
    () =>
      createUserAcademicEnrollmentByAdmin(
        {
          userId: user3.id,
          audience: 'SECONDARY',
          secondaryGradeId: '6a2c2b111af36bd83ac27ef0', // ID inexistant
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );
});

test('P1C Motif obligatoire: rejet si motif absent, vide ou inférieur à 5 caractères', async () => {
  const { gradeTle, grade1re, user1 } = await setupP1CTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Motif trop court
  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: grade1re.id,
          reason: 'Err',
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'REASON_REQUIRED');
      return true;
    }
  );

  // Motif espaces uniquement
  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: grade1re.id,
          reason: '      ',
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'REASON_REQUIRED');
      return true;
    }
  );
});

test('P1C Concurrence optimiste: détection de version obsolète (STALE_ENROLLMENT)', async () => {
  const { gradeTle, grade1re, user1 } = await setupP1CTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const staleDate = new Date(enrollment.updatedAt.getTime() - 60000).toISOString();

  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: staleDate,
          audience: 'SECONDARY',
          secondaryGradeId: grade1re.id,
          reason: 'Correction avec version périmée',
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'STALE_ENROLLMENT');
      return true;
    }
  );
});

test('P1C Rejet des fausses corrections: NO_CHANGE si la cible est identique à l’état actuel', async () => {
  const { gradeTle, user1 } = await setupP1CTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const countBefore = await prisma.userAcademicEnrollmentCorrection.count({
    where: { enrollmentId: enrollment.id },
  });

  await assert.rejects(
    () =>
      correctUserAcademicEnrollmentByAdmin(
        {
          enrollmentId: enrollment.id,
          expectedUpdatedAt: enrollment.updatedAt.toISOString(),
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id, // Même grade
          reason: 'Tentative sans changement',
        },
        TEST_ADMIN_SESSION
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'NO_CHANGE');
      return true;
    }
  );

  const countAfter = await prisma.userAcademicEnrollmentCorrection.count({
    where: { enrollmentId: enrollment.id },
  });
  assert.equal(countAfter, countBefore, 'Aucune ligne d’audit ne doit être créée lors d’un NO_CHANGE');
});

test('P1C Normalisation des verticales et snapshot d’audit enrichi', async () => {
  const { gradeTle, grade1re, user1 } = await setupP1CTestContext();

  // Simuler des enseignements de spécialités sur le secondaire
  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  await prisma.userAcademicEnrollment.update({
    where: { id: enrollment.id },
    data: {
      secondaryTeachingIds: ['6a2c2b111af36bd83ac27ef1', '6a2c2b111af36bd83ac27ef2'],
    },
  });

  const refreshed = await prisma.userAcademicEnrollment.findUniqueOrThrow({
    where: { id: enrollment.id },
  });

  const corrected = await correctUserAcademicEnrollmentByAdmin(
    {
      enrollmentId: refreshed.id,
      expectedUpdatedAt: refreshed.updatedAt.toISOString(),
      audience: 'SECONDARY',
      secondaryGradeId: grade1re.id,
      reason: 'Changement de niveau Terminale vers Première',
    },
    TEST_ADMIN_SESSION
  );

  assert.equal(corrected.secondaryGradeId, grade1re.id);
  assert.deepEqual(corrected.secondaryTeachingIds, [], 'Les spécialités doivent être réinitialisées lors d’un changement de niveau');

  const correction = await prisma.userAcademicEnrollmentCorrection.findFirst({
    where: { enrollmentId: enrollment.id },
    orderBy: { createdAt: 'desc' },
  });
  assert.ok(correction);
  assert.equal(correction.actorAdminId, ADMIN_ACTOR_ID);
  assert.equal(correction.reason, 'Changement de niveau Terminale vers Première');

  // Vérification de la présence du snapshot métier v1
  const bp = correction.beforePayload as any;
  const ap = correction.afterPayload as any;
  assert.ok(bp.snapshot, 'beforePayload doit contenir un snapshot lisible');
  assert.equal(bp.snapshot.schemaVersion, 1);
  assert.equal(bp.snapshot.audience, 'SECONDARY');
  assert.equal(bp.snapshot.secondaryGrade.code, 'Tle');

  assert.ok(ap.snapshot, 'afterPayload doit contenir un snapshot lisible');
  assert.equal(ap.snapshot.schemaVersion, 1);
  assert.equal(ap.snapshot.audience, 'SECONDARY');
  assert.equal(ap.snapshot.secondaryGrade.code, '1re');
});

test('P1C Immuabilité du journal: deux corrections successives créent deux entrées append-only', async () => {
  const { gradeTle, grade1re, user1 } = await setupP1CTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Correction 1 : Terminale -> Première
  const cor1 = await correctUserAcademicEnrollmentByAdmin(
    {
      enrollmentId: enrollment.id,
      expectedUpdatedAt: enrollment.updatedAt.toISOString(),
      audience: 'SECONDARY',
      secondaryGradeId: grade1re.id,
      reason: 'Première rectification administrative',
    },
    TEST_ADMIN_SESSION
  );

  // Correction 2 : Première -> Terminale
  const cor2 = await correctUserAcademicEnrollmentByAdmin(
    {
      enrollmentId: cor1.id,
      expectedUpdatedAt: cor1.updatedAt.toISOString(),
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      reason: 'Deuxième rectification administrative réversible',
    },
    TEST_ADMIN_SESSION
  );

  const allCorrections = await prisma.userAcademicEnrollmentCorrection.findMany({
    where: { enrollmentId: enrollment.id },
    orderBy: { createdAt: 'asc' },
  });

  assert.equal(allCorrections.length, 2);
  assert.equal(allCorrections[0].reason, 'Première rectification administrative');
  assert.equal(allCorrections[1].reason, 'Deuxième rectification administrative réversible');
});

test('P1C Données pédagogiques: tentatives conservées en BDD et scope corrigé appliqué par les ACL', async () => {
  const { gradeTle, grade1re, user1 } = await setupP1CTestContext();

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user1.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  const quiz = await prisma.trainingQuiz.findFirst({
    select: { id: true, chapterId: true },
  });
  assert.ok(quiz, 'Quiz requis pour le test');

  // Créer une tentative pédagogique pour cet utilisateur et cette affectation (scope Terminale)
  const dummyAttempt = await prisma.userTrainingQuizAttempt.create({
    data: {
      userId: user1.id,
      academicEnrollmentId: enrollment.id,
      chapterId: quiz.chapterId,
      quizId: quiz.id,
      status: 'COMPLETED',
      score: 18,
      maxScore: 20,
      totalQuestions: 10,
      successRate: 90,
    },
  });

  // Vérifier l’accès Terminale avant correction
  const initialAccess = await assertUserCanAccessSecondaryContent({
    userId: user1.id,
    gradeId: gradeTle.id,
  });
  assert.equal(initialAccess.secondaryGradeId, gradeTle.id);

  // Rectification vers Première
  await correctUserAcademicEnrollmentByAdmin(
    {
      enrollmentId: enrollment.id,
      expectedUpdatedAt: enrollment.updatedAt.toISOString(),
      audience: 'SECONDARY',
      secondaryGradeId: grade1re.id,
      reason: 'Réaffectation vers Première',
    },
    TEST_ADMIN_SESSION
  );

  // 1. La tentative pédagogique existe toujours en BDD, liée au même academicEnrollmentId
  const attemptStillInDb = await prisma.userTrainingQuizAttempt.findUnique({
    where: { id: dummyAttempt.id },
  });
  assert.ok(attemptStillInDb, 'La tentative ne doit JAMAIS être supprimée');
  assert.equal(attemptStillInDb.academicEnrollmentId, enrollment.id, 'Le lien academicEnrollmentId doit être conservé');

  // 2. Accès Terminale désormais rejeté par les ACL (FORBIDDEN_SCOPE)
  await assert.rejects(
    () =>
      assertUserCanAccessSecondaryContent({
        userId: user1.id,
        gradeId: gradeTle.id,
      }),
    (err: any) => {
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      return true;
    }
  );

  // 3. Accès Première désormais autorisé
  const updatedAccess = await assertUserCanAccessSecondaryContent({
    userId: user1.id,
    gradeId: grade1re.id,
  });
  assert.equal(updatedAccess.secondaryGradeId, grade1re.id);
});
