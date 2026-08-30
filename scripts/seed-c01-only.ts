import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

async function main() {
  const [{ default: prisma }, { seedHealthColleUE14C01 }] = await Promise.all([
    import("../src/lib/db/prisma"),
    import("../prisma/seeds/health-colles/ue14/c01-chimie-fondamentaux.seed"),
  ]);

  try {
    console.log("Exécution du seed ciblé pour la colle C01 uniquement...");
    await seedHealthColleUE14C01(prisma);
    console.log("Colle C01 mise à jour avec succès en BDD !");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Erreur lors du seed ciblé C01 :", error);
  process.exit(1);
});
