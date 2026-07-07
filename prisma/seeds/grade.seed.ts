import type { PrismaClient } from '@prisma/client';

export async function seedGrades(prisma: PrismaClient) {
  console.log('🎓 Seeding Grades...');

  const grades = [
    { longDescription: 'Sixième', shortDescription: '6e' },
    { longDescription: 'Cinquième', shortDescription: '5e' },
    { longDescription: 'Quatrième', shortDescription: '4e' },
    { longDescription: 'Troisième', shortDescription: '3e' },
    { longDescription: 'Seconde', shortDescription: '2de' },
    { longDescription: 'Première', shortDescription: '1re' },
    { longDescription: 'Terminale', shortDescription: 'Tle' },
    { longDescription: 'Brevet de technicien supérieur', shortDescription: 'BTS' },
  ];

  for (const grade of grades) {
    await prisma.grade.upsert({
      where: {
        longDescription_shortDescription: {
          longDescription: grade.longDescription,
          shortDescription: grade.shortDescription,
        },
      },
      update: {},
      create: grade,
    });
  }

  console.log(`   ✓ ${grades.length} niveaux créés`);
}
