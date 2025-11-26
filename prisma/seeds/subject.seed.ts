import type { PrismaClient } from '@prisma/client';

export async function seedSubjects(prisma: PrismaClient) {
  console.log('📖 Seeding Subjects...');

  const subjects = [
    {
      longDescription: 'Mathématiques',
      shortDescription: 'Maths',
    },
    {
      longDescription: 'Sciences physiques',
      shortDescription: 'Sciences physiques',
    },
    {
      longDescription: 'Français',
      shortDescription: 'Français',
    },
    {
      longDescription: 'Sciences de la Vie et de la Terre',
      shortDescription: 'SVT',
    },
    {
      longDescription: 'Histoire-Géographie',
      shortDescription: 'Histoire-Géo',
    },
    {
      longDescription: 'Sciences Économiques et Sociales',
      shortDescription: 'SES',
    },
    {
      longDescription: 'Informatique',
      shortDescription: 'Informatique',
    },
    {
      longDescription: 'Philosophie',
      shortDescription: 'Philosophie',
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
      update: {},
      create: subject,
    });
  }

  console.log(`   ✓ ${subjects.length} matières créées`);
}
