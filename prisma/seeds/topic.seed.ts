import type { PrismaClient } from '@prisma/client';

export async function seedTopics(prisma: PrismaClient) {
  console.log('🧩 Seeding Topics...');

  const topics = [
    { longDescription: 'Algèbre', shortDescription: 'Algèb' },
    { longDescription: 'Géométrie', shortDescription: 'Géom.' },
    { longDescription: 'Analyse', shortDescription: 'Anal.' },
    { longDescription: 'Probabilités', shortDescription: 'Proba' },
    { longDescription: 'Grammaire', shortDescription: 'Gram.' },
    { longDescription: 'Littérature', shortDescription: 'Litt.' },
  ];

  for (const topic of topics) {
    await prisma.topic.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: topic.longDescription,
          shortDescription: topic.shortDescription ?? null,
        },
      },
      update: {},
      create: topic,
    });
  }

  console.log(`✓ ${topics.length} thèmes créés`);
}
