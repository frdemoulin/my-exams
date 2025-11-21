import type { PrismaClient } from '@prisma/client';

export async function seedSubjects(prisma: PrismaClient) {
  console.log('📖 Seeding Subjects...');

  // Récupérer quelques topics par leurs longDescription
  const needTopics = ['Algèbre', 'Géométrie', 'Analyse', 'Probabilités'];
  const topicRecords = await prisma.topic.findMany({
    where: { longDescription: { in: needTopics } },
    select: { id: true, longDescription: true },
  });

  const byName: Record<string, string> = Object.fromEntries(
    topicRecords.map((t) => [t.longDescription, t.id])
  );

  const subjects = [
    {
      longDescription: 'Mathématiques',
      shortDescription: 'Maths',
      topicIDs: [byName['Algèbre'], byName['Géométrie'], byName['Analyse'], byName['Probabilités']].filter(Boolean) as string[],
    },
    {
      longDescription: 'Français',
      shortDescription: 'Franç.',
      topicIDs: [],
    },
  ];

  for (const subject of subjects) {
    await prisma.subject.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: subject.longDescription,
          shortDescription: subject.shortDescription,
        },
      },
      update: {
        topicIDs: subject.topicIDs,
      },
      create: subject,
    });
  }

  console.log(`✓ ${subjects.length} matières créées`);
}
