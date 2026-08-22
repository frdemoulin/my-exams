import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

async function main() {
  const [
    { default: prisma },
    { seedHealthTrainingUe14NomenclatureOrganique },
  ] = await Promise.all([
    import("../src/lib/db/prisma"),
    import("../prisma/seeds/health-training-ue14-nomenclature-organique.seed"),
  ]);

  try {
    await seedHealthTrainingUe14NomenclatureOrganique(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(async (error) => {
  console.error("Erreur lors du seed UE14 Nomenclature organique :", error);
  process.exit(1);
});
