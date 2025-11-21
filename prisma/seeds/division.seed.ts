import type { PrismaClient } from '@prisma/client';

export async function seedDivisions(prisma: PrismaClient) {
  console.log('🏛️ Seeding Divisions...');

  const divisions = [
    { longDescription: 'Sciences', shortDescription: 'Sciences' },
    { longDescription: 'Lettres', shortDescription: 'Lettres' },
    { longDescription: 'Économie', shortDescription: 'Éco' },
    { longDescription: 'Technologie', shortDescription: 'Techno' },
    { longDescription: 'Professionnel', shortDescription: 'Pro' },
  ];

  for (const division of divisions) {
    await prisma.division.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: division.longDescription,
          shortDescription: division.shortDescription,
        },
      },
      update: {},
      create: division,
    });
  }

  console.log(`✓ ${divisions.length} filières créées`);
}
