import type { PrismaClient } from '@prisma/client';

export async function seedExaminationCenters(prisma: PrismaClient) {
  console.log('🏫 Seeding Examination Centers...');

  const centers = [
    'Amérique du Nord',
    'Amérique du Sud',
    'Antilles',
    'Asie',
    'Centres étrangers',
    'France métropolitaine',
    'Guyane',
    'Inde',
    'Nouvelle-Calédonie',
    'Polynésie',
    'Réunion',
  ];

  for (const description of centers) {
    await prisma.examinationCenter.upsert({
      where: { description },
      update: {},
      create: { description },
    });
  }

  console.log(`✓ ${centers.length} centres d'examen créés`);
}
