// Charge les variables d'environnement (.env.local) avant d'initialiser Prisma
require('dotenv').config({ path: '.env.local' });
// Import Prisma client singleton
const prisma = require("../src/lib/db").default;

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
    longDescription: "Theme Test Long",
    shortDescription: "Theme Test Court",
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
    where: { longDescription: testTheme.longDescription }
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

  // 5. Relation Domain / Theme (1-N)
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
      domainId: domain.id,
    }
  });

  const domainWithThemes = await prisma.domain.findUnique({
    where: { id: domain.id },
    include: { subject: true, themes: true }
  });
  console.log("Domain avec themes:", domainWithThemes);

  // 6. Transaction (test Replica Set)
  const tx = await prisma.$transaction([
    prisma.grade.create({ data: testGrades[0] }),
    prisma.grade.create({ data: testGrades[1] }),
  ]);
  console.log("Transaction OK (grades créés):", tx.map((g: any) => g.id));

  // 7. DELETE
  await prisma.diploma.delete({ where: { id: diploma.id } });
  await prisma.theme.deleteMany({ where: { domainId: domain.id } });
  await prisma.domain.delete({ where: { id: domain.id } });
  await prisma.subject.delete({ where: { id: subject.id } });
  await prisma.grade.deleteMany({ where: { id: { in: tx.map((g: any) => g.id) } } });
  console.log("Diplôme supprimé");

  // 8. Déconnexion
  await prisma.$disconnect();
  console.log("== Fin test Prisma ==");
}

run().catch(async (e) => {
  console.error("Erreur test Prisma:", e);
  await prisma.$disconnect();
  process.exit(1);
});
