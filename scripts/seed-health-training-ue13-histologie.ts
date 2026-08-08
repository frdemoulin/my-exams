import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

async function main() {
  const [{ default: prisma }, { seedHealthTrainingUe13Histologie }] = await Promise.all([
    import('../src/lib/db/prisma'),
    import('../prisma/seeds/health-training-ue13.seed'),
  ]);

  try {
    await seedHealthTrainingUe13Histologie(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Erreur lors du seed UE13 Histologie :', error);
  process.exit(1);
});
