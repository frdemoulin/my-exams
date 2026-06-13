const { loadProjectEnv } = require('./lib/load-env');

loadProjectEnv();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  console.log("== Début test Prisma ==");

  const testSubject = {
    longDescription: "Subject Test Long",
    shortDescription: "Subject Test Court",
  };
  const testDomain = {
    longDescription: "Domain Test Long",
    shortDescription: "Domain Test Court",
  };
  const testTheme = {
    title: "Theme Test Title",
    shortTitle: "Theme Test Court",
  };
  const testGrades = [
    { longDescription: "Grade Long A", shortDescription: "Grade Court A" },
    { longDescription: "Grade Long B", shortDescription: "Grade Court B" },
  ];

  // Nettoyage ciblé pour éviter les doublons lors de tests successifs
  await prisma.diploma.deleteMany({
    where: {
      shortDescription: { in: ["Diplôme Test Court"] }
    }
  });
  await prisma.theme.deleteMany({
    where: { title: testTheme.title }
  });
  await prisma.domain.deleteMany({
    where: { longDescription: testDomain.longDescription }
  });
  await prisma.subject.deleteMany({
    where: {
      longDescription: testSubject.longDescription,
      shortDescription: testSubject.shortDescription,
    }
  });
  await prisma.grade.deleteMany({
    where: {
      OR: testGrades.map((grade) => ({
        longDescription: grade.longDescription,
        shortDescription: grade.shortDescription,
      })),
    }
  });

  // 1. CREATE
  const diploma = await prisma.diploma.create({
    data: {
      longDescription: "Diplôme Test Long",
      shortDescription: "Diplôme Test Court",
    }
  });
  console.log("Créé Diplôme:", diploma);

  // 2. READ
  const fetched = await prisma.diploma.findUnique({ where: { id: diploma.id } });
  console.log("Lecture Diplôme:", fetched);

  // 3. UPDATE
  const updated = await prisma.diploma.update({
    where: { id: diploma.id },
    data: { longDescription: "Diplôme Test Long MOD" }
  });
  console.log("Diplôme modifié:", updated);

  // 4. CONTRAINTE UNIQUE (doit échouer)
  try {
    await prisma.diploma.create({
      data: {
        longDescription: "Diplôme Test Long MOD",
        shortDescription: "Diplôme Test Court",
      }
    });
    console.log("ERREUR: la contrainte unique n'a pas fonctionné");
  } catch (e: any) {
    console.log("Contrainte unique OK:", e.code || e.message);
  }

  // 5. Relation Domain / Theme (N-N)
  const subject = await prisma.subject.create({ data: testSubject });
  const domain = await prisma.domain.create({
    data: {
      ...testDomain,
      subjectId: subject.id,
    }
  });
  await prisma.theme.create({
    data: {
      ...testTheme,
      domains: {
        connect: [{ id: domain.id }],
      },
    }
  });

  const domainWithThemes = await prisma.domain.findUnique({
    where: { id: domain.id },
    include: { subject: true, themes: true }
  });
  console.log("Domain avec themes:", domainWithThemes);

  // 6. Référentiel santé et relation UE / Theme
  const healthInstitution = await prisma.healthInstitution.create({
    data: {
      name: "Université Santé Test",
      slug: `universite-sante-test-${Date.now()}`,
    },
  });
  const healthProgram = await prisma.healthProgram.create({
    data: {
      type: "OTHER",
      code: `HEALTH_TEST_${Date.now()}`,
      label: "Programme santé test",
    },
  });
  const healthVersion = await prisma.healthProgramVersion.create({
    data: {
      institutionId: healthInstitution.id,
      programId: healthProgram.id,
      label: "Maquette santé test",
      slug: "maquette-sante-test",
      academicYear: "2025-2026",
      studyLevel: "L1",
    },
  });
  const healthPathway = await prisma.healthPathway.create({
    data: {
      programVersionId: healthVersion.id,
      name: "Parcours santé test",
      slug: "parcours-sante-test",
    },
  });
  const healthBlock = await prisma.healthBlock.create({
    data: {
      programVersionId: healthVersion.id,
      pathwayId: healthPathway.id,
      type: "HEALTH",
      title: "Bloc santé test",
      slug: "bloc-sante-test",
    },
  });
  const healthCourseUnit = await prisma.healthCourseUnit.create({
    data: {
      programVersion: { connect: { id: healthVersion.id } },
      pathway: { connect: { id: healthPathway.id } },
      block: { connect: { id: healthBlock.id } },
      title: "UE santé test",
      slug: "ue-sante-test",
      coverageStatus: "STRUCTURE_ONLY",
      themes: { connect: [{ id: domainWithThemes!.themes[0].id }] },
    },
    include: { themes: true },
  });
  const themeWithHealthUnits = await prisma.theme.findUnique({
    where: { id: domainWithThemes!.themes[0].id },
    include: { healthCourseUnits: true },
  });
  if (healthCourseUnit.themes.length !== 1 || themeWithHealthUnits?.healthCourseUnits.length !== 1) {
    throw new Error("La relation bidirectionnelle UE santé / Theme est invalide");
  }
  await prisma.healthInstitution.delete({ where: { id: healthInstitution.id } });
  await prisma.healthProgram.delete({ where: { id: healthProgram.id } });
  if (await prisma.healthCourseUnit.findUnique({ where: { id: healthCourseUnit.id } })) {
    throw new Error("La suppression en cascade de la maquette santé a échoué");
  }
  console.log("Référentiel santé et relation Theme OK");

  // 7. Transaction (test Replica Set)
  const tx = await prisma.$transaction([
    prisma.grade.create({ data: testGrades[0] }),
    prisma.grade.create({ data: testGrades[1] }),
  ]);
  console.log("Transaction OK (grades créés):", tx.map((g: any) => g.id));

  // 8. DELETE
  await prisma.diploma.delete({ where: { id: diploma.id } });
  await prisma.theme.deleteMany({ where: { domainIds: { has: domain.id } } });
  await prisma.domain.delete({ where: { id: domain.id } });
  await prisma.subject.delete({ where: { id: subject.id } });
  await prisma.grade.deleteMany({ where: { id: { in: tx.map((g: any) => g.id) } } });
  console.log("Diplôme supprimé");

  // 9. Déconnexion
  await prisma.$disconnect();
  console.log("== Fin test Prisma ==");
}

run().catch(async (e) => {
  console.error("Erreur test Prisma:", e);
  await prisma.$disconnect();
  process.exit(1);
});
