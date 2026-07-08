import { loadProjectEnv } from "./lib/load-env";
import prisma from "../src/lib/db/prisma";
import { seedHealthTrainingUe14 } from "../prisma/seeds/health-training-ue14.seed";

loadProjectEnv();

async function main() {
  await seedHealthTrainingUe14(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Erreur lors du seed UE14 Santé :", error);
    await prisma.$disconnect();
    process.exit(1);
  });
