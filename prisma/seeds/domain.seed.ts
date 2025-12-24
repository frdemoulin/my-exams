import type { PrismaClient, DomainDiscipline } from '@prisma/client';

type SeedDomain = {
  longDescription: string;
  shortDescription: string;
  subjectId: string;
  order: number;
  discipline?: DomainDiscipline;
};

export async function seedDomains(prisma: PrismaClient) {
  console.log('📚 Seeding Domains...');

  // Récupérer les matières
  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true },
  });

  const subjectByName = Object.fromEntries(
    subjects.map((s) => [s.longDescription, s.id])
  );

  const domains: SeedDomain[] = [
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
      discipline: 'CHIMIE',
      order: 1,
    },
    {
      longDescription: 'Électricité',
      shortDescription: 'Électricité',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 2,
    },
    {
      longDescription: 'Lumière et vision',
      shortDescription: 'Lumière',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 3,
    },
    {
      longDescription: 'Mouvement et forces',
      shortDescription: 'Mouvement',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 4,
    },
    // Sciences physiques - Lycée
    {
      longDescription: 'Mécanique',
      shortDescription: 'Mécanique',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 5,
    },
    {
      longDescription: 'Ondes et signaux',
      shortDescription: 'Ondes',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 6,
    },
    {
      longDescription: 'Constitution et transformations de la matière',
      shortDescription: 'Chimie',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'CHIMIE',
      order: 7,
    },
    {
      longDescription: 'Énergie',
      shortDescription: 'Énergie',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'TRANSVERSAL',
      order: 8,
    },
  ];

  let createdCount = 0;

  for (const domain of domains) {
    if (!domain.subjectId) continue;

    // Chercher si le domaine existe déjà
    const existingDomain = await prisma.domain.findFirst({
      where: {
        longDescription: domain.longDescription,
        subjectId: domain.subjectId,
      },
    });

    if (existingDomain) {
      // Mettre à jour si existe
      await prisma.domain.update({
        where: { id: existingDomain.id },
        data: {
          shortDescription: domain.shortDescription,
          order: domain.order,
          discipline: domain.discipline ?? null,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.domain.create({
        data: domain,
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} domaines créés`);
}
