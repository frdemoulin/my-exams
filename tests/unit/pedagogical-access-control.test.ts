import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import {
  assertUserCanAccessHealthContent,
  assertUserCanAccessSecondaryContent,
  PedagogicalAccessError,
} from '../../src/lib/auth/assert-pedagogical-access';
import { startOrResumeTrainingQuizSession } from '../../src/core/training/training-quiz-session.service';

const TEST_EMAIL_A = 'test-pedagogical-user-a@example.com';
const TEST_EMAIL_B = 'test-pedagogical-user-b@example.com';

async function setupTestUsers() {
  const activeYear = await prisma.academicYear.findUnique({
    where: { code: '2026-2027' },
  });
  assert.ok(activeYear, 'Année active 2026-2027 introuvable');

  const gradeTle = await prisma.grade.findFirst({
    where: { shortDescription: 'Tle' },
  });
  assert.ok(gradeTle, 'Grade Tle introuvable');

  const grade1ere = await prisma.grade.findFirst({
    where: { shortDescription: '1re' },
  });
  assert.ok(grade1ere, 'Grade 1ère introuvable');

  const healthVersion = await prisma.healthProgramVersion.findFirst({
    include: { pathways: true },
  });
  assert.ok(healthVersion, 'Version santé introuvable');

  const userA = await prisma.user.upsert({
    where: { email: TEST_EMAIL_A },
    update: {},
    create: {
      email: TEST_EMAIL_A,
      name: 'Test Pedagogical User A',
    },
  });

  const userB = await prisma.user.upsert({
    where: { email: TEST_EMAIL_B },
    update: {},
    create: {
      email: TEST_EMAIL_B,
      name: 'Test Pedagogical User B',
    },
  });

  return {
    activeYear,
    gradeTle,
    grade1ere,
    healthVersion,
    userA,
    userB,
  };
}

test('assertUserCanAccess: anonyme (userId = null) refuse avec UNAUTHENTICATED (401)', async () => {
  await assert.rejects(
    () =>
      assertUserCanAccessSecondaryContent({
        userId: null,
        gradeId: 'grade_dummy',
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'UNAUTHENTICATED');
      assert.equal(err.statusCode, 401);
      return true;
    }
  );

  await assert.rejects(
    () =>
      assertUserCanAccessHealthContent({
        userId: null,
        programVersionId: 'version_dummy',
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'UNAUTHENTICATED');
      assert.equal(err.statusCode, 401);
      return true;
    }
  );
});

test('assertUserCanAccess: utilisateur sans Enrollment refuse avec ONBOARDING_REQUIRED (403)', async () => {
  const { userA, activeYear } = await setupTestUsers();

  // Nettoyer tout Enrollment préalable
  await prisma.userAcademicEnrollment.deleteMany({
    where: { userId: userA.id },
  });

  await assert.rejects(
    () =>
      assertUserCanAccessSecondaryContent({
        userId: userA.id,
        gradeId: 'grade_dummy',
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'ONBOARDING_REQUIRED');
      assert.equal(err.statusCode, 403);
      return true;
    }
  );
});

test('assertUserCanAccessSecondaryContent: élève Terminale accède à Terminale mais est refusé pour 1ère', async () => {
  const { userA, activeYear, gradeTle, grade1ere } = await setupTestUsers();

  await prisma.userAcademicEnrollment.deleteMany({ where: { userId: userA.id } });
  await prisma.userAcademicEnrollment.create({
    data: {
      userId: userA.id,
      academicYearId: activeYear.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      lockedAt: new Date(),
      createdBy: 'SELF_ONBOARDING',
    },
  });

  // Accès au bon niveau: OK
  const enrollment = await assertUserCanAccessSecondaryContent({
    userId: userA.id,
    gradeId: gradeTle.id,
  });
  assert.equal(enrollment.secondaryGradeId, gradeTle.id);

  // Accès à un mauvais niveau: refusé 403
  await assert.rejects(
    () =>
      assertUserCanAccessSecondaryContent({
        userId: userA.id,
        gradeId: grade1ere.id,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.equal(err.statusCode, 403);
      return true;
    }
  );
});

test('assertUserCanAccessHealthContent: cas limite 5 - UE non-commune avec pathwayId null lève FORBIDDEN_SCOPE', async () => {
  const { userA, activeYear, healthVersion } = await setupTestUsers();

  await prisma.userAcademicEnrollment.deleteMany({ where: { userId: userA.id } });
  await prisma.userAcademicEnrollment.create({
    data: {
      userId: userA.id,
      academicYearId: activeYear.id,
      audience: 'HEALTH',
      healthProgramVersionId: healthVersion.id,
      healthPathwayId: null,
      lockedAt: new Date(),
      createdBy: 'SELF_ONBOARDING',
    },
  });

  // UE non-commune sans pathway -> refus fail-closed strict
  await assert.rejects(
    () =>
      assertUserCanAccessHealthContent({
        userId: userA.id,
        programVersionId: healthVersion.id,
        isCommonToAllPathways: false,
        pathwayId: null,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      return true;
    }
  );
});

test('assertUserCanAccessHealthContent: cas limite 6 - étudiant sans parcours vs UE à parcours restreint lève FORBIDDEN_SCOPE', async () => {
  const { userA, activeYear, healthVersion } = await setupTestUsers();
  const pathway = healthVersion.pathways[0];
  assert.ok(pathway, 'Au moins un parcours requis pour ce test');

  await prisma.userAcademicEnrollment.deleteMany({ where: { userId: userA.id } });
  await prisma.userAcademicEnrollment.create({
    data: {
      userId: userA.id,
      academicYearId: activeYear.id,
      audience: 'HEALTH',
      healthProgramVersionId: healthVersion.id,
      healthPathwayId: null, // aucun parcours choisi
      lockedAt: new Date(),
      createdBy: 'SELF_ONBOARDING',
    },
  });

  await assert.rejects(
    () =>
      assertUserCanAccessHealthContent({
        userId: userA.id,
        programVersionId: healthVersion.id,
        isCommonToAllPathways: false,
        pathwayId: pathway.id,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      return true;
    }
  );
});

test('assertUserCanAccessHealthContent: étudiant avec parcours accède à son parcours et aux UE communes', async () => {
  const { userA, activeYear, healthVersion } = await setupTestUsers();
  const pathway = healthVersion.pathways[0];
  assert.ok(pathway, 'Au moins un parcours requis pour ce test');

  await prisma.userAcademicEnrollment.deleteMany({ where: { userId: userA.id } });
  await prisma.userAcademicEnrollment.create({
    data: {
      userId: userA.id,
      academicYearId: activeYear.id,
      audience: 'HEALTH',
      healthProgramVersionId: healthVersion.id,
      healthPathwayId: pathway.id,
      lockedAt: new Date(),
      createdBy: 'SELF_ONBOARDING',
    },
  });

  // Accès UE commune: OK
  const enrCommon = await assertUserCanAccessHealthContent({
    userId: userA.id,
    programVersionId: healthVersion.id,
    isCommonToAllPathways: true,
  });
  assert.equal(enrCommon.userId, userA.id);

  // Accès à son propre parcours: OK
  const enrPathway = await assertUserCanAccessHealthContent({
    userId: userA.id,
    programVersionId: healthVersion.id,
    isCommonToAllPathways: false,
    pathwayId: pathway.id,
  });
  assert.equal(enrPathway.healthPathwayId, pathway.id);
});

test('Hard Wall: cas limite 9 - session Training anonyme (userId = null) refuse avec UNAUTHENTICATED (401)', async () => {
  const chapter = await prisma.chapter.findFirst({ select: { id: true } });
  const quiz = await prisma.trainingQuiz.findFirst({
    where: { isPublished: true },
    select: { id: true, chapterId: true },
  });

  if (chapter && quiz) {
    await assert.rejects(
      () =>
        startOrResumeTrainingQuizSession({
          chapterId: quiz.chapterId,
          quizId: quiz.id,
          userId: null,
        }),
      (err: unknown) => {
        assert.ok(err instanceof PedagogicalAccessError);
        assert.equal(err.code, 'UNAUTHENTICATED');
        assert.equal(err.statusCode, 401);
        return true;
      }
    );
  }
});
