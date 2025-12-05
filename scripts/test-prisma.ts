// Charge les variables d'environnement (.env.local) avant d'initialiser Prisma
require('dotenv').config({ path: '.env.local' });
// Import Prisma client singleton
const prisma = require("../src/lib/db").default;

async function run() {
  console.log("== Début test Prisma ==");

  // Nettoyage ciblé pour éviter les doublons lors de tests successifs
  await prisma.diploma.deleteMany({
    where: {
      shortDescription: { in: ["Diplôme Test Court"] }
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

  // 5. Relations Topic / Subject (listes d'ObjectId)
  const topic = await prisma.topic.create({
    data: {
      longDescription: "Topic Long",
      shortDescription: "Topic Court",
      subjectIDs: [],
    }
  });

  const subject = await prisma.subject.create({
    data: {
      longDescription: "Subject Long",
      shortDescription: "Subject Court",
      topicIDs: [topic.id],
    }
  });

  // Mise à jour réciproque du topic
  await prisma.topic.update({
    where: { id: topic.id },
    data: { subjectIDs: [subject.id] }
  });

  const subjectWithTopics = await prisma.subject.findUnique({
    where: { id: subject.id },
    include: { topics: true }
  });
  console.log("Subject avec topics:", subjectWithTopics);

  // 6. Transaction (test Replica Set)
  const tx = await prisma.$transaction([
    prisma.grade.create({ data: { longDescription: "Grade Long A", shortDescription: "Grade Court A" } }),
    prisma.grade.create({ data: { longDescription: "Grade Long B", shortDescription: "Grade Court B" } }),
  ]);
  console.log("Transaction OK (grades créés):", tx.map((g: any) => g.id));

  // 7. DELETE
  await prisma.diploma.delete({ where: { id: diploma.id } });
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
