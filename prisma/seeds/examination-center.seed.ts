import type { PrismaClient } from '@prisma/client';

export async function seedExaminationCenters(prisma: PrismaClient) {
  console.log('🏫 Seeding Examination Centers...');

  const centers = [
    'Lycée Victor Hugo - Paris',
    'Collège Jean Moulin - Lyon',
    'Lycée Marie Curie - Marseille',
    'Collège Jules Ferry - Toulouse',
    'Lycée Louis Pasteur - Strasbourg',
  ];

  for (const description of centers) {
    await prisma.examinationCenter.upsert({
      where: { description },
      update: {},
      create: { description },
    });
  }

  console.log(`   ✓ ${centers.length} centres d'examen créés`);
}
