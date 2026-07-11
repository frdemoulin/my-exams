import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

async function main() {
  const [{ default: prisma }, { seedHealthTrainingUe14 }] = await Promise.all([
    import("../src/lib/db/prisma"),
    import("../prisma/seeds/health-training-ue14.seed"),
  ]);

  try {
    await seedHealthTrainingUe14(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(async (error) => {
    console.error("Erreur lors du seed UE14 Santé :", error);
    process.exit(1);
  });
