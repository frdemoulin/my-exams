import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

async function main() {
  const [{ default: prisma }, { seedHealthMockExams }] = await Promise.all([
    import("../src/lib/db/prisma"),
    import("../prisma/seeds/health-mock-exams.seed"),
  ]);

  try {
    await seedHealthMockExams(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Erreur lors du seed des examens blancs Santé :", error);
  process.exit(1);
});
