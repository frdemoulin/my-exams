import type { PrismaClient } from '@prisma/client';

export async function seedChapters(prisma: PrismaClient) {
  console.log('📚 Seeding Chapters...');

  // Récupérer les matières
  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true },
  });

  const subjectByName = Object.fromEntries(
    subjects.map((s) => [s.longDescription, s.id])
  );

  const chapters = [
    // Mathématiques - Collège
    {
      longDescription: 'Nombres et calculs',
      shortDescription: 'Nombres',
      subjectId: subjectByName['Mathématiques'],
      order: 1,
    },
    {
      longDescription: 'Géométrie plane',
      shortDescription: 'Géométrie',
      subjectId: subjectByName['Mathématiques'],
      order: 2,
    },
    {
      longDescription: 'Gestion de données',
      shortDescription: 'Données',
      subjectId: subjectByName['Mathématiques'],
      order: 3,
    },
    // Mathématiques - Lycée
    {
      longDescription: 'Analyse',
      shortDescription: 'Analyse',
      subjectId: subjectByName['Mathématiques'],
      order: 4,
    },
    {
      longDescription: 'Suites numériques',
      shortDescription: 'Suites',
      subjectId: subjectByName['Mathématiques'],
      order: 5,
    },
    {
      longDescription: 'Fonctions',
      shortDescription: 'Fonctions',
      subjectId: subjectByName['Mathématiques'],
      order: 6,
    },
    {
      longDescription: 'Géométrie analytique',
      shortDescription: 'Géo. analyt.',
      subjectId: subjectByName['Mathématiques'],
      order: 7,
    },
    {
      longDescription: 'Probabilités et statistiques',
      shortDescription: 'Probas/Stats',
      subjectId: subjectByName['Mathématiques'],
      order: 8,
    },
    // Sciences physiques - Collège
    {
      longDescription: 'Matière et ses états',
      shortDescription: 'Matière',
      subjectId: subjectByName['Sciences physiques'],
      order: 1,
    },
    {
      longDescription: 'Électricité',
      shortDescription: 'Électricité',
      subjectId: subjectByName['Sciences physiques'],
      order: 2,
    },
    {
      longDescription: 'Lumière et vision',
      shortDescription: 'Lumière',
      subjectId: subjectByName['Sciences physiques'],
      order: 3,
    },
    {
      longDescription: 'Mouvement et forces',
      shortDescription: 'Mouvement',
      subjectId: subjectByName['Sciences physiques'],
      order: 4,
    },
    // Sciences physiques - Lycée
    {
      longDescription: 'Mécanique',
      shortDescription: 'Mécanique',
      subjectId: subjectByName['Sciences physiques'],
      order: 5,
    },
    {
      longDescription: 'Ondes et signaux',
      shortDescription: 'Ondes',
      subjectId: subjectByName['Sciences physiques'],
      order: 6,
    },
    {
      longDescription: 'Constitution et transformations de la matière',
      shortDescription: 'Chimie',
      subjectId: subjectByName['Sciences physiques'],
      order: 7,
    },
    {
      longDescription: 'Énergie',
      shortDescription: 'Énergie',
      subjectId: subjectByName['Sciences physiques'],
      order: 8,
    },
  ];

  let createdCount = 0;

  for (const chapter of chapters) {
    if (!chapter.subjectId) continue;

    // Chercher si le chapitre existe déjà
    const existingChapter = await prisma.chapter.findFirst({
      where: {
        longDescription: chapter.longDescription,
        subjectId: chapter.subjectId,
      },
    });

    if (existingChapter) {
      // Mettre à jour si existe
      await prisma.chapter.update({
        where: { id: existingChapter.id },
        data: {
          shortDescription: chapter.shortDescription,
          order: chapter.order,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.chapter.create({
        data: chapter,
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} chapitres créés`);
}
