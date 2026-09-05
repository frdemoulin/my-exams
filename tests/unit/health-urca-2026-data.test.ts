import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import { getAvailableAcademicEnrollmentOptions } from '../../src/core/academic-enrollment/academic-enrollment.options';

test('DATA-URCA-2026: Établissement URCA unique et valide', async () => {
  const urcaInstitutions = await prisma.healthInstitution.findMany({
    where: {
      OR: [
        { uaiCode: '0511296G' },
        { slug: 'universite-de-reims-champagne-ardenne' },
      ],
    },
  });
  assert.equal(urcaInstitutions.length, 1, 'URCA doit être présent de façon unique');
  const urca = urcaInstitutions[0];
  assert.equal(urca.uaiCode, '0511296G');
  assert.equal(urca.isActive, true);
  assert.equal(urca.isPublished, true);
});

test('DATA-URCA-2026: Programme LAS_SPS et Version 2026-2027 active/courante', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });

  const program = await prisma.healthProgram.findUnique({
    where: { code: 'LAS_SPS' },
  });
  assert.ok(program);
  assert.equal(program.type, 'LAS_SPS');
  assert.equal(program.isPublished, true);

  const pv2026 = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: urca.id,
        slug: 'las-sps-2026-2027',
      },
    },
  });
  assert.ok(pv2026);
  assert.equal(pv2026.academicYear, '2026-2027');
  assert.equal(pv2026.studyLevel, 'L1');
  assert.equal(pv2026.isCurrent, true, 'las-sps-2026-2027 doit être isCurrent = true');
  assert.equal(pv2026.isActive, true);
  assert.equal(pv2026.isPublished, true);

  // Historisation 2025
  const pv2025 = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: urca.id,
        slug: 'las-2025-2026',
      },
    },
  });
  if (pv2025) {
    assert.equal(pv2025.isCurrent, false, 'las-2025-2026 pour URCA doit être historisé (isCurrent = false)');
  }
});

test('DATA-URCA-2026: Les 10 parcours officiels URCA LAS-SPS 2026-2027 avec campus', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });
  const pv2026 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-sps-2026-2027' },
    include: { pathways: { orderBy: { order: 'asc' } } },
  });

  assert.equal(pv2026.pathways.length, 10, 'Attendu exactement 10 parcours officiels');

  const expectedPathways = [
    { slug: 'sciences-appliquees-a-la-sante-salsa', name: 'Sciences appliquées à la santé', campus: 'Reims' },
    { slug: 'staps', name: 'STAPS', campus: 'Reims' },
    { slug: 'psychologie', name: 'Psychologie', campus: 'Reims' },
    { slug: 'economie-et-gestion-reims', name: 'Économie et gestion', campus: 'Reims' },
    { slug: 'sciences-sanitaires-et-sociales', name: 'Sciences sanitaires et sociales', campus: 'Reims' },
    { slug: 'sciences-de-la-vie', name: 'Sciences de la vie', campus: 'Reims' },
    { slug: 'sciences-de-la-vie-et-de-la-terre', name: 'Sciences de la vie et de la Terre', campus: 'Reims' },
    { slug: 'physique-chimie', name: 'Physique-Chimie', campus: 'Reims' },
    { slug: 'economie-et-gestion-troyes', name: 'Économie et gestion', campus: 'Troyes' },
    { slug: 'sciences-pour-l-ingenieur', name: "Sciences pour l'ingénieur", campus: 'Charleville-Mézières' },
  ];

  for (const expected of expectedPathways) {
    const found = pv2026.pathways.find((p) => p.slug === expected.slug);
    assert.ok(found, `Parcours ${expected.slug} doit exister`);
    assert.equal(found.name, expected.name);
    assert.equal(found.campus, expected.campus);
  }

  // Vérification de l'absence stricte de parcours obsolètes ou erronés
  const forbiddenSlugs = [
    'droit',
    'chimie',
    'mathematiques',
    'staps-reims',
    'metiers-du-medicament',
    'sciences-du-langage',
    'philosophie',
    'mathematiques-appliquees-et-sciences-sociales-mass',
  ];
  for (const forbidden of forbiddenSlugs) {
    const found = pv2026.pathways.find((p) => p.slug === forbidden);
    assert.equal(found, undefined, `Le parcours erroné ${forbidden} ne doit pas exister`);
  }
});

test('DATA-URCA-2026: Les 5 UEs et blocs (6 ECTS chacune, intitulés officiels, UE13/UE14 publiées, UE23/UE24/UE25 non publiées)', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });
  const pv2026 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-sps-2026-2027' },
    include: {
      blocks: true,
      courseUnits: {
        include: {
          block: true,
          teachingElements: true,
        },
      },
    },
  });

  assert.equal(pv2026.blocks.length, 2);
  assert.equal(pv2026.courseUnits.length, 5);

  // Chacune des 5 UE doit être valorisée à 6 ECTS
  for (const cu of pv2026.courseUnits) {
    assert.equal(cu.ects, 6, `L'unité ${cu.code} doit être valorisée à 6 ECTS`);
  }

  const ue13 = pv2026.courseUnits.find((cu) => cu.code === 'UE13');
  assert.ok(ue13);
  assert.equal(ue13.title, 'UE13 – Anatomie – histologie – physiologie');
  assert.equal(ue13.isPublished, true);
  assert.equal(ue13.teachingElements.length, 3);

  const ue14 = pv2026.courseUnits.find((cu) => cu.code === 'UE14');
  assert.ok(ue14);
  assert.equal(ue14.title, 'UE14 – Chimie – biochimie – biologie cellulaire');
  assert.equal(ue14.isPublished, true);
  assert.equal(ue14.teachingElements.length, 3);

  const ue23 = pv2026.courseUnits.find((cu) => cu.code === 'UE23');
  assert.ok(ue23);
  assert.equal(ue23.title, 'UE23 – Biologie moléculaire – Biophysique – Biostatistiques – Pharmacologie');
  assert.equal(ue23.isPublished, false, 'UE23 ne doit pas être publiée');

  const ue24 = pv2026.courseUnits.find((cu) => cu.code === 'UE24');
  assert.ok(ue24);
  assert.equal(ue24.title, 'UE24 – Santé 3 - 1 parcours obligatoire au choix, comprenant 3 EC (MMOPK)');
  assert.equal(ue24.isPublished, false, 'UE24 ne doit pas être publiée');

  const ue25 = pv2026.courseUnits.find((cu) => cu.code === 'UE25');
  assert.ok(ue25);
  assert.equal(ue25.title, 'UE25 – Transversale spécifique santé 2');
  assert.equal(ue25.isPublished, false, 'UE25 ne doit pas être publiée');
  assert.equal(ue25.block.slug, 'bloc-transversal');
});

test('DATA-URCA-2026: Projection dynamique des 41 ChapterAssignments sans duplication de Chapters', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });
  const pv2026 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-sps-2026-2027' },
    include: {
      courseUnits: {
        include: {
          teachingElements: true,
        },
      },
    },
  });

  const ue13 = pv2026.courseUnits.find((cu) => cu.code === 'UE13');
  const ue14 = pv2026.courseUnits.find((cu) => cu.code === 'UE14');
  assert.ok(ue13 && ue14);

  const ue13TeIds = ue13.teachingElements.map((te) => te.id);
  const ue13AssignmentsCount = await prisma.chapterAssignment.count({
    where: {
      contextType: 'HEALTH_TEACHING_ELEMENT',
      contextId: { in: ue13TeIds },
    },
  });
  assert.equal(ue13AssignmentsCount, 5, 'UE13 2026 doit avoir 5 ChapterAssignments (histologie)');

  const ue14TeIds = ue14.teachingElements.map((te) => te.id);
  const ue14AssignmentsCount = await prisma.chapterAssignment.count({
    where: {
      contextType: 'HEALTH_TEACHING_ELEMENT',
      contextId: { in: ue14TeIds },
    },
  });
  assert.equal(ue14AssignmentsCount, 36, 'UE14 2026 doit avoir 36 ChapterAssignments');

  const total2026Assignments = ue13AssignmentsCount + ue14AssignmentsCount;
  assert.equal(total2026Assignments, 41, 'Exactement 41 ChapterAssignments doivent être projetés');
});

test('DATA-URCA-2026: Conteneurs 2025 et 2026 des Colles et Examens Blancs', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });

  // 2025
  const pv2025 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-2025-2026' },
    include: {
      courseUnits: {
        where: { code: 'UE14' },
        include: {
          mockExams: {
            include: {
              _count: { select: { attempts: true } },
            },
          },
        },
      },
    },
  });

  const ue14_2025 = pv2025.courseUnits[0];
  assert.ok(ue14_2025);
  assert.equal(ue14_2025.mockExams.length, 14, '2025 doit conserver ses 14 évaluations UE14');

  const totalAttempts2025 = ue14_2025.mockExams.reduce(
    (acc, m) => acc + m._count.attempts,
    0
  );
  assert.equal(
    totalAttempts2025,
    356,
    'L’invariant strict de 356 tentatives 2025 doit être respecté'
  );

  // 2026
  const pv2026 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-sps-2026-2027' },
    include: {
      courseUnits: {
        where: { code: 'UE14' },
        include: {
          mockExams: true,
        },
      },
    },
  });

  const ue14_2026 = pv2026.courseUnits[0];
  assert.ok(ue14_2026);
  assert.equal(
    ue14_2026.mockExams.length,
    14,
    '2026 doit posséder ses propres instances des 14 évaluations UE14'
  );

  const colles2026 = ue14_2026.mockExams.filter((m) => m.type === 'COLLE');
  assert.equal(colles2026.length, 12, '12 colles pour 2026');

  const eb2026 = ue14_2026.mockExams.filter((m) => m.type === 'MOCK_EXAM');
  assert.equal(eb2026.length, 2, '2 examens blancs (EB01, EB02) pour 2026');
});

test('DATA-URCA-2026: Réconciliation et cohérence stricte des 356 tentatives 2025', async () => {
  const urca = await prisma.healthInstitution.findFirstOrThrow({
    where: { uaiCode: '0511296G' },
  });
  const pv2025 = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { institutionId: urca.id, slug: 'las-2025-2026' },
  });
  const ue14 = await prisma.healthCourseUnit.findFirstOrThrow({
    where: { programVersionId: pv2025.id, code: 'UE14' },
    include: { mockExams: { select: { id: true } } },
  });
  const mockExamIds = ue14.mockExams.map((m) => m.id);

  const attempts = await prisma.userHealthMockExamAttempt.findMany({
    where: { mockExamId: { in: mockExamIds } },
    include: {
      academicEnrollment: {
        include: { academicYear: true },
      },
      mockExam: {
        include: {
          courseUnit: {
            include: { programVersion: true },
          },
        },
      },
    },
  });

  assert.equal(attempts.length, 356);

  for (const a of attempts) {
    assert.ok(a.academicEnrollmentId, 'academicEnrollmentId non null');
    assert.equal(a.userId, a.academicEnrollment.userId, 'userId match');
    assert.equal(
      a.academicEnrollment.academicYear.code,
      '2025-2026',
      'Enrollment academicYear code must be 2025-2026'
    );
    assert.equal(
      a.academicEnrollment.academicYear.code,
      a.mockExam.courseUnit.programVersion.academicYear,
      'Year code match'
    );
    assert.equal(
      a.academicEnrollment.healthProgramVersionId,
      pv2025.id,
      'ProgramVersion ID match'
    );
  }
});

test('DATA-URCA-2026: Onboarding options pour 2026-2027 présente URCA LAS-SPS avec campus et exclut la fixture', async () => {
  const date2026 = new Date('2026-10-15T10:00:00.000Z');
  const options = await getAvailableAcademicEnrollmentOptions(date2026);

  assert.ok(options.health);
  const urcaOpt = options.health.institutions.find(
    (inst) => inst.uaiCode === '0511296G' || inst.slug === 'universite-de-reims-champagne-ardenne'
  );
  assert.ok(urcaOpt, 'URCA doit être présente dans les options onboarding 2026-2027');

  const lasSps = urcaOpt.programVersions.find((pv) => pv.slug === 'las-sps-2026-2027');
  assert.ok(lasSps, 'las-sps-2026-2027 doit être proposée');
  assert.equal(lasSps.pathways.length, 10);

  const troyesPathway = lasSps.pathways.find((p) => p.slug === 'economie-et-gestion-troyes');
  assert.ok(troyesPathway);
  assert.equal(troyesPathway.campus, 'Troyes');

  // Exclusion stricte de la fixture Santé
  const fixtureInst = options.health.institutions.find(
    (inst) => inst.slug === 'my-exams-fixture-health-university'
  );
  assert.equal(fixtureInst, undefined, 'La fixture Santé technique ne doit pas être exposée dans l’onboarding');
});

test('DATA-URCA-2026: Aucune donnée AcademicYear ni HealthProgramVersion 2027-2028 en base produit', async () => {
  const ay2027 = await prisma.academicYear.findUnique({
    where: { code: '2027-2028' },
  });
  assert.equal(ay2027, null, 'AcademicYear 2027-2028 ne doit pas exister en BDD produit');

  const pv2027 = await prisma.healthProgramVersion.findMany({
    where: { academicYear: '2027-2028' },
  });
  assert.equal(pv2027.length, 0, 'Aucune HealthProgramVersion 2027-2028 en base produit');
});
