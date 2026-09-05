import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import {
  createAndLockUserAcademicEnrollment,
  getCurrentUserAcademicEnrollment,
  createAcademicEnrollmentFromSession,
  AcademicEnrollmentError,
} from '../../src/core/academic-enrollment/academic-enrollment.service';
import { createCurrentUserAcademicEnrollmentFromOnboarding } from '../../src/core/academic-enrollment/academic-enrollment.actions';
import {
  resolveSecondarySchoolSegment,
} from '../../src/core/academic-enrollment/academic-enrollment.segments';
import {
  getAvailableAcademicEnrollmentOptions,
} from '../../src/core/academic-enrollment/academic-enrollment.options';
import {
  getSafeCallbackUrl,
  resolveEnrollmentHomePath,
  isPathCompatibleWithEnrollment,
  resolvePostAuthenticationDestination,
} from '../../src/core/academic-enrollment/academic-enrollment.routing';
import { fetchAuthorizedRecentExercisesForEnrollment } from '../../src/core/user/user-profile.queries';
import type { Session } from 'next-auth';

const TEST_EMAIL_ONBOARDING_1 = 'test-onboarding-user-1@example.com';
const TEST_EMAIL_ONBOARDING_2 = 'test-onboarding-user-2@example.com';
const TEST_EMAIL_ONBOARDING_3 = 'test-onboarding-user-3@example.com';

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
    await prisma.userExerciseHistory.deleteMany({
      where: { userId: { in: userIds } },
    });
    await prisma.user.deleteMany({
      where: { id: { in: userIds } },
    });
  }
}

test('Segmentation Secondaire: resolveSecondarySchoolSegment classifie rigoureusement Collège et Lycée et rejette BTS', async () => {
  const grades = await prisma.grade.findMany();
  for (const grade of grades) {
    const segment = resolveSecondarySchoolSegment(grade);
    const short = grade.shortDescription.toLowerCase();
    if (['6e', '5e', '4e', '3e'].includes(short)) {
      assert.equal(segment, 'COLLEGE', `Grade ${grade.shortDescription} doit être COLLEGE`);
    } else if (['2de', '1re', 'tle'].includes(short)) {
      assert.equal(segment, 'LYCEE', `Grade ${grade.shortDescription} doit être LYCEE`);
    } else {
      assert.equal(segment, null, `Grade ${grade.shortDescription} (ex: BTS) doit être hors segment`);
    }
  }
});

test('getAvailableAcademicEnrollmentOptions: ne contient que les Grades exploitables et des entités Santé actives/publiées', async () => {
  const options = await getAvailableAcademicEnrollmentOptions();

  // Secondaire
  assert.ok(options.secondary.grades.length > 0);
  for (const g of options.secondary.grades) {
    assert.ok(g.segment === 'COLLEGE' || g.segment === 'LYCEE');
    assert.notEqual(g.shortDescription.toLowerCase(), 'bts');
  }

  // Santé : PASS / LAS sont portés par HealthProgram.type et non HealthPathway
  for (const inst of options.health.institutions) {
    for (const v of inst.programVersions) {
      assert.ok(['PASS', 'LAS', 'LAS_SPS', 'OTHER'].includes(v.program.type), 'PASS/LAS doit être le type de programme');
      assert.equal(v.academicYear, options.academicYear.code);
      for (const p of v.pathways) {
        assert.ok(p.id, 'Chaque parcours possède un id');
        assert.ok(p.name, 'Chaque parcours possède un nom');
      }
    }
  }
});

test('Sécurité Onboarding: OnboardingEnrollmentChoicesInput n’accepte aucun date côté client', async () => {
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_1 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_1, name: 'Onboarding Test 1' },
  });

  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);

  // Appel à createCurrentUserAcademicEnrollmentFromOnboarding avec injection de session
  const mockSession: Session = {
    user: {
      id: user.id,
      email: user.email,
      role: 'USER',
    },
    expires: new Date(Date.now() + 3600000).toISOString(),
  };

  // Typage strict TS : OnboardingEnrollmentChoicesInput n'a pas de propriété date
  // Forçons un payload avec une date arbitraire passée via cast pour simuler un client malveillant
  const maliciousInput = {
    audience: 'SECONDARY' as const,
    secondaryGradeId: gradeTle.id,
    date: new Date('2020-01-01'), // Tentative d'imposer une date ancienne
  };

  // L'helper de session interne doit ignorer toute date injectée et résoudre new Date() autoritativement
  const created = await createAcademicEnrollmentFromSession(mockSession, maliciousInput as any);
  assert.ok(created);

  const activeYear = await prisma.academicYear.findUnique({ where: { code: '2026-2027' } });
  assert.ok(activeYear);

  assert.equal(created.academicYearId, activeYear.id, 'Doit être rattaché à l’année active courante');

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_1]);
});

test('Signature Server Action publique: createCurrentUserAcademicEnrollmentFromOnboarding n’accepte aucun argument de session ou identité', () => {
  // Arity : exactement 1 paramètre (le payload des choix pédagogiques de l'onboarding)
  assert.equal(createCurrentUserAcademicEnrollmentFromOnboarding.length, 1);
});

test('Sécurité Onboarding: Grade existant en BDD mais non proposé (ex: BTS) est refusé avec INVALID_SCOPE', async () => {
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_1 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_1, name: 'Onboarding Test 1' },
  });

  const gradeBts = await prisma.grade.findFirst({ where: { shortDescription: 'BTS' } });
  if (gradeBts) {
    await assert.rejects(
      () =>
        createAndLockUserAcademicEnrollment({
          userId: user.id,
          audience: 'SECONDARY',
          secondaryGradeId: gradeBts.id,
          createdBy: 'SELF_ONBOARDING',
        }),
      (err: unknown) => {
        assert.ok(err instanceof AcademicEnrollmentError);
        assert.equal(err.code, 'INVALID_SCOPE');
        return true;
      }
    );
  }

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_1]);
});

test('Sécurité Onboarding: ProgramVersion non publiée ou mauvaise année est refusée avec INVALID_SCOPE', async () => {
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_1 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_1, name: 'Onboarding Test 1' },
  });

  // Chercher ou simuler une version non publiée ou d'une autre année
  const otherYearVersion = await prisma.healthProgramVersion.findFirst({
    where: { academicYear: { not: '2026-2027' } },
  });

  if (otherYearVersion) {
    await assert.rejects(
      () =>
        createAndLockUserAcademicEnrollment({
          userId: user.id,
          audience: 'HEALTH',
          healthProgramVersionId: otherYearVersion.id,
          createdBy: 'SELF_ONBOARDING',
        }),
      (err: unknown) => {
        assert.ok(err instanceof AcademicEnrollmentError);
        assert.equal(err.code, 'INVALID_SCOPE');
        return true;
      }
    );
  }

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_1]);
});

test('Sécurité Onboarding: Impersonation ADMIN refuse SELF_ONBOARDING', async () => {
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_1 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_1, name: 'Onboarding Test 1' },
  });
  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);

  const impersonatedSession: any = {
    user: {
      id: user.id,
      email: user.email,
      role: 'USER',
    },
    impersonation: {
      isActive: true,
      viewerId: user.id,
      viewerRole: 'USER',
    },
    actor: {
      id: 'admin_real_id',
      role: 'ADMIN',
    },
    expires: new Date(Date.now() + 3600000).toISOString(),
  };

  await assert.rejects(
    () =>
      createAcademicEnrollmentFromSession(
        impersonatedSession,
        {
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
        }
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_1]);
});

test('Concurrence et Idempotence: deux créations identiques retournent l’Enrollment sans P2002', async () => {
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_2 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_2, name: 'Onboarding Concurrency' },
  });
  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);

  // Première création
  const first = await createAndLockUserAcademicEnrollment({
    userId: user.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Deuxième création strictement identique (ex: double-clic ou requête concurrente)
  const second = await createAndLockUserAcademicEnrollment({
    userId: user.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  assert.equal(first.id, second.id, 'Idempotence: doit retourner le même Enrollment');

  // Troisième création avec un choix différent -> ALREADY_ENROLLED
  const grade1re = await prisma.grade.findFirst({ where: { shortDescription: '1re' } });
  assert.ok(grade1re);

  await assert.rejects(
    () =>
      createAndLockUserAcademicEnrollment({
        userId: user.id,
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

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_2]);
});

test('Sécurité Routing: getSafeCallbackUrl rejette les URLs malveillantes', () => {
  assert.equal(getSafeCallbackUrl('//evil.example.com'), null);
  assert.equal(getSafeCallbackUrl('https://evil.example.com/test'), null);
  assert.equal(getSafeCallbackUrl('http://evil.example.com/test'), null);
  assert.equal(getSafeCallbackUrl('/\\evil.example.com'), null);
  assert.equal(getSafeCallbackUrl('javascript:alert(1)'), null);
  assert.equal(getSafeCallbackUrl('/log-in'), null);
  assert.equal(getSafeCallbackUrl('/onboarding'), null);
  assert.equal(getSafeCallbackUrl('/auth/continue'), null);

  // URLs valides
  assert.equal(getSafeCallbackUrl('/lycee'), '/lycee');
  assert.equal(getSafeCallbackUrl('/sante/ue/ue14'), '/sante/ue/ue14');
  assert.equal(getSafeCallbackUrl('/dashboard'), '/dashboard');
});

test('Sécurité CallbackUrl: validation pédagogique fine via isPathCompatibleWithEnrollment', async () => {
  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  const grade1re = await prisma.grade.findFirst({ where: { shortDescription: '1re' } });
  assert.ok(gradeTle && grade1re);

  const mockTleEnrollment: any = {
    id: 'mock_tle_enr',
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    healthProgramVersionId: null,
    healthPathwayId: null,
    secondaryGrade: gradeTle,
  };

  // Hubs
  assert.equal(await isPathCompatibleWithEnrollment({ path: '/lycee', enrollment: mockTleEnrollment }), true);
  assert.equal(await isPathCompatibleWithEnrollment({ path: '/college', enrollment: mockTleEnrollment }), false);
  assert.equal(await isPathCompatibleWithEnrollment({ path: '/sante', enrollment: mockTleEnrollment }), false);

  // Contenu d'un niveau précis (sciences physiques niveaux)
  assert.equal(
    await isPathCompatibleWithEnrollment({
      path: '/entrainement/sciences-physiques/niveaux/terminale',
      enrollment: mockTleEnrollment,
    }),
    true
  );
  assert.equal(
    await isPathCompatibleWithEnrollment({
      path: '/entrainement/sciences-physiques/niveaux/premiere',
      enrollment: mockTleEnrollment,
    }),
    false
  );
});

test('resolvePostAuthenticationDestination: aiguille correctement vers onboarding ou destination', async () => {
  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_3]);
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_3 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_3, name: 'Auth Test' },
  });

  // Sans enrollment -> /onboarding avec callback préservé
  const destNoEnr = await resolvePostAuthenticationDestination({
    userId: user.id,
    callbackUrl: '/lycee',
  });
  assert.equal(destNoEnr.destination, '/onboarding?callbackUrl=%2Flycee');
  assert.equal(destNoEnr.isOnboardingRequired, true);

  // Avec enrollment Terminale
  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);
  await createAndLockUserAcademicEnrollment({
    userId: user.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Callback compatible -> callback
  const destWithCompatible = await resolvePostAuthenticationDestination({
    userId: user.id,
    callbackUrl: '/lycee',
  });
  assert.equal(destWithCompatible.destination, '/lycee');

  // Callback incompatible -> home de l'enrollment (/lycee)
  const destWithIncompatible = await resolvePostAuthenticationDestination({
    userId: user.id,
    callbackUrl: '/sante',
  });
  assert.equal(destWithIncompatible.destination, '/lycee');

  // Callback dangereux -> home de l'enrollment (/lycee)
  const destWithMalicious = await resolvePostAuthenticationDestination({
    userId: user.id,
    callbackUrl: '//evil.example.com',
  });
  assert.equal(destWithMalicious.destination, '/lycee');

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_3]);
});

test('Dashboard N+1: fetchAuthorizedRecentExercisesForEnrollment ne filtre que les exercices autorisés', async () => {
  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_3]);
  const user = await prisma.user.upsert({
    where: { email: TEST_EMAIL_ONBOARDING_3 },
    update: {},
    create: { email: TEST_EMAIL_ONBOARDING_3, name: 'Dashboard History Test' },
  });

  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);

  const enrollment = await createAndLockUserAcademicEnrollment({
    userId: user.id,
    audience: 'SECONDARY',
    secondaryGradeId: gradeTle.id,
    createdBy: 'SELF_ONBOARDING',
  });

  // Trouver un exercice Terminale et un exercice non Terminale
  const tleExercise = await prisma.exercise.findFirst({
    where: { examPaper: { gradeId: gradeTle.id } },
    select: { id: true },
  });

  const otherExercise = await prisma.exercise.findFirst({
    where: { examPaper: { gradeId: { not: gradeTle.id } } },
    select: { id: true },
  });

  if (tleExercise && otherExercise) {
    // Insérer dans l'historique les deux exercices
    await prisma.userExerciseHistory.createMany({
      data: [
        { userId: user.id, exerciseId: tleExercise.id, lastViewedAt: new Date(Date.now() - 1000) },
        { userId: user.id, exerciseId: otherExercise.id, lastViewedAt: new Date() },
      ],
    });

    const recent = await fetchAuthorizedRecentExercisesForEnrollment(user.id, enrollment);

    // L'exercice non Terminale ne doit JAMAIS apparaître
    assert.ok(recent.every((item) => item.exercise.id !== otherExercise.id));
    assert.ok(recent.some((item) => item.exercise.id === tleExercise.id));
  }

  await cleanupTestUsers([TEST_EMAIL_ONBOARDING_3]);
});

test('Scénario Année N (2026-2027) -> Année N+1 (2027-2028) : redoublement et conservation de l’historique antérieur', async () => {
  const emailRedoublement = 'test-redoublement@example.com';
  await cleanupTestUsers([emailRedoublement]);

  const ephemeral2027 = await prisma.academicYear.upsert({
    where: { code: '2027-2028' },
    update: {
      label: 'Année scolaire 2027-2028 (Fixture)',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
    create: {
      code: '2027-2028',
      label: 'Année scolaire 2027-2028 (Fixture)',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
  });

  const user = await prisma.user.upsert({
    where: { email: emailRedoublement },
    update: {},
    create: { email: emailRedoublement, name: 'Redoublant Test' },
  });

  try {
    const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
    assert.ok(gradeTle);

    const dateN = new Date('2026-10-15');
    const dateNPlus1 = new Date('2027-10-15');

    // 1. Année N : Choix de Terminale et verrouillage
    const enrollmentN = await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      createdBy: 'SELF_ONBOARDING',
      date: dateN,
    });
    assert.ok(enrollmentN);

    // Vérification de la présence en année N
    const currentN = await getCurrentUserAcademicEnrollment(user.id, dateN);
    assert.ok(currentN);
    assert.equal(currentN.id, enrollmentN.id);

    // 2. Rentrée N+1 : Aucun Enrollment actif pour 2027-2028
    const currentNPlus1Before = await getCurrentUserAcademicEnrollment(user.id, dateNPlus1);
    assert.equal(currentNPlus1Before, null, 'Doit retourner null en rentrée N+1 (déclencheur ONBOARDING_REQUIRED)');

    // Routage post-authentification en N+1 doit orienter vers l’onboarding
    const { destination: destNPlus1, isOnboardingRequired } = await resolvePostAuthenticationDestination({
      userId: user.id,
      callbackUrl: '/lycee',
      date: dateNPlus1,
    });
    assert.equal(isOnboardingRequired, true);
    assert.equal(destNPlus1, '/onboarding?callbackUrl=%2Flycee');

    // 3. Choix en N+1 : Redoublement en Terminale
    const enrollmentNPlus1 = await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      createdBy: 'SELF_ONBOARDING',
      date: dateNPlus1,
    });
    assert.ok(enrollmentNPlus1);
    assert.notEqual(enrollmentNPlus1.id, enrollmentN.id);

    // 4. Les deux Enrollments distincts coexistent en base
    const allEnrollments = await prisma.userAcademicEnrollment.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'asc' },
    });
    assert.equal(allEnrollments.length, 2, 'Deux affectations distinctes doivent être conservées');
    assert.equal(allEnrollments[0].id, enrollmentN.id, 'L’affectation N reste intacte et inchangée');
    assert.equal(allEnrollments[1].id, enrollmentNPlus1.id, 'L’affectation N+1 est créée et active');
  } finally {
    await prisma.userAcademicEnrollment.deleteMany({ where: { userId: user.id } });
    await prisma.academicYear.deleteMany({ where: { id: ephemeral2027.id } });
    await cleanupTestUsers([emailRedoublement]);
  }
});

test('Scénario Année N (Terminale) -> Année N+1 (Santé) : changement de verticale, scope actif et étanchéité', async () => {
  const emailChangement = 'test-changement-verticale@example.com';
  await cleanupTestUsers([emailChangement]);

  const ephemeral2027 = await prisma.academicYear.upsert({
    where: { code: '2027-2028' },
    update: {
      label: 'Année scolaire 2027-2028 (Fixture)',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
    create: {
      code: '2027-2028',
      label: 'Année scolaire 2027-2028 (Fixture)',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
  });

  const user = await prisma.user.upsert({
    where: { email: emailChangement },
    update: {},
    create: { email: emailChangement, name: 'Changement Verticale Test' },
  });

  const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
  assert.ok(gradeTle);

  const programVersion = await prisma.healthProgramVersion.findFirst({
    where: { slug: 'las-sps-2026-2027' },
  });
  assert.ok(programVersion);

  const dateN = new Date('2026-10-15');
  const dateNPlus1 = new Date('2027-10-15');

  try {
    // 1. Année N : Terminale
    const enrollmentN = await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'SECONDARY',
      secondaryGradeId: gradeTle.id,
      createdBy: 'SELF_ONBOARDING',
      date: dateN,
    });

    // Insérer un exercice de Terminale dans l'historique
    const tleExercise = await prisma.exercise.findFirst({
      where: { examPaper: { gradeId: gradeTle.id } },
      select: { id: true },
    });
    if (tleExercise) {
      await prisma.userExerciseHistory.create({
        data: {
          userId: user.id,
          exerciseId: tleExercise.id,
          lastViewedAt: dateN,
        },
      });
    }

    // 2. Année N+1 : Tentative invalide — réutiliser la maquette 2026-2027 en année active 2027-2028
    await assert.rejects(
      () =>
        createAndLockUserAcademicEnrollment({
          userId: user.id,
          audience: 'HEALTH',
          healthProgramVersionId: programVersion.id, // version 2026-2027
          createdBy: 'SELF_ONBOARDING',
          date: dateNPlus1, // active year 2027-2028
        }),
      (err: any) => {
        assert.equal(err.code, 'INVALID_SCOPE');
        return true;
      }
    );

    // 3. Année N+1 : Création d'une version Santé 2027-2028 isolée pour le test
    const versionNPlus1 = await prisma.healthProgramVersion.upsert({
      where: {
        institutionId_slug: {
          institutionId: programVersion.institutionId,
          slug: 'las-sps-2027-2028-test',
        },
      },
      update: {},
      create: {
        institutionId: programVersion.institutionId,
        programId: programVersion.programId,
        label: 'LAS SPS 2027-2028 (Fixture Test)',
        slug: 'las-sps-2027-2028-test',
        academicYear: '2027-2028',
        studyLevel: 'L1',
        isActive: true,
        isPublished: true,
      },
    });

    const enrollmentNPlus1 = await createAndLockUserAcademicEnrollment({
      userId: user.id,
      audience: 'HEALTH',
      healthProgramVersionId: versionNPlus1.id,
      createdBy: 'SELF_ONBOARDING',
      date: dateNPlus1,
    });

    // 4. En N+1, le home d'univers est /sante
    const homeNPlus1 = await resolveEnrollmentHomePath(enrollmentNPlus1);
    assert.equal(homeNPlus1, '/sante');

    // 5. En N+1, un callback vers /lycee n'est PAS compatible
    const isCompatibleLycee = await isPathCompatibleWithEnrollment({
      path: '/lycee',
      enrollment: enrollmentNPlus1,
    });
    assert.equal(isCompatibleLycee, false);

    // 6. En N+1, l'historique d'exercices récents ne restitue AUCUN exercice de Terminale
    const recentExercisesNPlus1 = await fetchAuthorizedRecentExercisesForEnrollment(
      user.id,
      enrollmentNPlus1
    );
    assert.equal(
      recentExercisesNPlus1.length,
      0,
      'Aucun exercice Terminale de l’année N ne doit fuiter dans le dashboard Santé N+1'
    );
  } finally {
    await prisma.userExerciseHistory.deleteMany({ where: { userId: user.id } });
    await prisma.userAcademicEnrollment.deleteMany({ where: { userId: user.id } });
    await prisma.healthProgramVersion.deleteMany({
      where: { slug: 'las-sps-2027-2028-test' },
    });
    await prisma.academicYear.deleteMany({ where: { id: ephemeral2027.id } });
    await cleanupTestUsers([emailChangement]);
  }
});

