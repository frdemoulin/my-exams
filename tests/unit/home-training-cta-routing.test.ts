import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import { resolveHomeTrainingCtaDestination } from '../../src/core/academic-enrollment/academic-enrollment.routing';
import { createAndLockUserAcademicEnrollment } from '../../src/core/academic-enrollment/academic-enrollment.service';
import { getAvailableAcademicEnrollmentOptions } from '../../src/core/academic-enrollment/academic-enrollment.options';
import { getSessionEffectiveUserId } from '../../src/lib/auth/session';
import type { Session } from 'next-auth';

const TEST_EMAIL_PUBLIC = 'test-home-public@example.com';
const TEST_EMAIL_NO_ENROLLMENT = 'test-home-no-enrollment@example.com';
const TEST_EMAIL_HEALTH = 'test-home-health@example.com';
const TEST_EMAIL_LYCEE = 'test-home-lycee@example.com';
const TEST_EMAIL_COLLEGE = 'test-home-college@example.com';
const TEST_EMAIL_LEGACY = 'test-home-legacy-profile@example.com';

async function cleanupTestUsers(emails: string[]) {
  const users = await prisma.user.findMany({
    where: { email: { in: emails } },
    select: { id: true },
  });
  const userIds = users.map((u) => u.id);
  if (userIds.length > 0) {
    const enrollments = await prisma.userAcademicEnrollment.findMany({
      where: { userId: { in: userIds } },
      select: { id: true },
    });
    const enrollmentIds = enrollments.map((e) => e.id);
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
    await prisma.userPedagogicalProfile.deleteMany({
      where: { userId: { in: userIds } },
    });
    await prisma.userExerciseHistory.deleteMany({
      where: { userId: { in: userIds } },
    });
    await prisma.user.deleteMany({
      where: { id: { in: userIds } },
    });
  }
}

test('Home CTA Routing — 1. Visiteur public (non authentifié) redirige vers /entrainement', async () => {
  const destNull = await resolveHomeTrainingCtaDestination({ userId: null });
  assert.equal(destNull, '/entrainement');

  const destUndefined = await resolveHomeTrainingCtaDestination({});
  assert.equal(destUndefined, '/entrainement');

  const destEmpty = await resolveHomeTrainingCtaDestination({ userId: '' });
  assert.equal(destEmpty, '/entrainement');
});

test('Home CTA Routing — 2. Utilisateur authentifié sans Enrollment actif redirige vers /onboarding', async () => {
  await cleanupTestUsers([TEST_EMAIL_NO_ENROLLMENT]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_NO_ENROLLMENT,
      name: 'User Without Enrollment',
      roles: 'USER',
    },
  });

  try {
    const dest = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(dest, '/onboarding');
  } finally {
    await cleanupTestUsers([TEST_EMAIL_NO_ENROLLMENT]);
  }
});

test('Home CTA Routing — 3. Utilisateur HEALTH redirige vers /sante', async () => {
  await cleanupTestUsers([TEST_EMAIL_HEALTH]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_HEALTH,
      name: 'User Health',
      roles: 'USER',
    },
  });

  try {
    const options = await getAvailableAcademicEnrollmentOptions();
    const programVersion = options.health.institutions[0]?.programVersions[0];
    assert.ok(programVersion, 'Une version de programme Santé active doit exister pour l’année active');

    await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'HEALTH',
      healthProgramVersionId: programVersion.id,
      healthPathwayId: programVersion.pathways[0]?.id ?? null,
      createdBy: 'SELF_ONBOARDING',
    });

    const dest = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(dest, '/sante');
  } finally {
    await cleanupTestUsers([TEST_EMAIL_HEALTH]);
  }
});

test('Home CTA Routing — 4. Utilisateur SECONDARY Lycée redirige vers /lycee', async () => {
  await cleanupTestUsers([TEST_EMAIL_LYCEE]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_LYCEE,
      name: 'User Lycee',
      roles: 'USER',
    },
  });

  try {
    const gradeTle = await prisma.grade.findFirst({
      where: { shortDescription: 'Tle' },
      select: { id: true },
    });
    assert.ok(gradeTle, 'Le niveau Terminale doit exister');

    await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      createdBy: 'SELF_ONBOARDING',
    });

    const dest = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(dest, '/lycee');
  } finally {
    await cleanupTestUsers([TEST_EMAIL_LYCEE]);
  }
});

test('Home CTA Routing — 5. Utilisateur SECONDARY Collège redirige vers /college', async () => {
  await cleanupTestUsers([TEST_EMAIL_COLLEGE]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_COLLEGE,
      name: 'User College',
      roles: 'USER',
    },
  });

  try {
    const grade3e = await prisma.grade.findFirst({
      where: { shortDescription: '3e' },
      select: { id: true },
    });
    assert.ok(grade3e, 'Le niveau 3e doit exister');

    await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'SECONDARY',
      secondaryGradeId: grade3e.id,
      createdBy: 'SELF_ONBOARDING',
    });

    const dest = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(dest, '/college');
  } finally {
    await cleanupTestUsers([TEST_EMAIL_COLLEGE]);
  }
});

test('Home CTA Routing — 6. Respect de l’effective user en cas d’impersonation', async () => {
  await cleanupTestUsers([TEST_EMAIL_HEALTH]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_HEALTH,
      name: 'User Health Impersonated',
      roles: 'USER',
    },
  });

  try {
    const options = await getAvailableAcademicEnrollmentOptions();
    const programVersion = options.health.institutions[0]?.programVersions[0];
    assert.ok(programVersion);

    await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'HEALTH',
      healthProgramVersionId: programVersion.id,
      healthPathwayId: programVersion.pathways[0]?.id ?? null,
      createdBy: 'SELF_ONBOARDING',
    });

    // Session impersonée : l'administrateur a pour acteur admin-id mais viewerId = user.id
    const impersonatedSession: Session = {
      user: {
        id: user.id,
        email: user.email,
        role: 'USER',
      },
      actor: {
        id: 'real-admin-id',
        email: 'admin@example.com',
        role: 'ADMIN',
      },
      impersonation: {
        isActive: true,
        actorId: 'real-admin-id',
        actorRole: 'ADMIN',
        viewerId: user.id,
        viewerRole: 'USER',
      },
      expires: new Date(Date.now() + 3600000).toISOString(),
    };

    const effectiveUserId = getSessionEffectiveUserId(impersonatedSession);
    assert.equal(effectiveUserId, user.id);

    const dest = await resolveHomeTrainingCtaDestination({ userId: effectiveUserId });
    assert.equal(dest, '/sante');
  } finally {
    await cleanupTestUsers([TEST_EMAIL_HEALTH]);
  }
});

test('Home CTA Routing — 7. Aucun recours au UserPedagogicalProfile legacy pour le routage', async () => {
  await cleanupTestUsers([TEST_EMAIL_LEGACY]);
  const user = await prisma.user.create({
    data: {
      email: TEST_EMAIL_LEGACY,
      name: 'User Legacy Test',
      roles: 'USER',
    },
  });

  try {
    const gradeTle = await prisma.grade.findFirst({
      where: { shortDescription: 'Tle' },
      select: { id: true },
    });
    assert.ok(gradeTle);

    // Cas A : L'utilisateur a un UserPedagogicalProfile legacy Lycée mais AUCUN UserAcademicEnrollment actif
    await prisma.userPedagogicalProfile.create({
      data: {
        userId: user.id,
        audience: 'SECONDARY',
        secondaryGradeId: gradeTle.id,
      },
    });

    // Le routage doit refuser le profil legacy et aiguiller vers /onboarding
    const destWithoutEnrollment = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(
      destWithoutEnrollment,
      '/onboarding',
      'Un profil legacy sans UserAcademicEnrollment actif doit exiger /onboarding'
    );

    // Cas B : L'utilisateur a un UserPedagogicalProfile Lycée mais un UserAcademicEnrollment HEALTH
    const options = await getAvailableAcademicEnrollmentOptions();
    const programVersion = options.health.institutions[0]?.programVersions[0];
    assert.ok(programVersion);

    await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'HEALTH',
      healthProgramVersionId: programVersion.id,
      healthPathwayId: programVersion.pathways[0]?.id ?? null,
      createdBy: 'SELF_ONBOARDING',
    });

    // L'Enrollment fait autorité stricte : destination = /sante (et non /lycee)
    const destWithHealthEnrollment = await resolveHomeTrainingCtaDestination({ userId: user.id });
    assert.equal(
      destWithHealthEnrollment,
      '/sante',
      'L’affectation annuelle active doit primer et diriger vers /sante'
    );

    // Cas C : Vérification statique que academic-enrollment.routing.ts n’importe ni n’invoque UserPedagogicalProfile
    const routingFilePath = path.resolve(
      __dirname,
      '../../src/core/academic-enrollment/academic-enrollment.routing.ts'
    );
    const routingFileContent = fs.readFileSync(routingFilePath, 'utf-8');
    assert.ok(
      !routingFileContent.includes('userPedagogicalProfile'),
      'academic-enrollment.routing.ts ne doit pas requêter prisma.userPedagogicalProfile'
    );
    assert.ok(
      !routingFileContent.includes('import') || !routingFileContent.match(/import\s+.*?UserPedagogicalProfile/),
      'academic-enrollment.routing.ts ne doit pas importer UserPedagogicalProfile'
    );
  } finally {
    await cleanupTestUsers([TEST_EMAIL_LEGACY]);
  }
});
