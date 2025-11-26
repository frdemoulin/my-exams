import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedCurriculums() {
  console.log('📚 Seeding Curriculums...');

  // Récupérer les cours pour assigner les IDs
  const secondeCourses = await prisma.teaching.findMany({
    where: { grade: { shortDescription: '2de' } },
  });
  
  const premiereCourses = await prisma.teaching.findMany({
    where: { grade: { shortDescription: '1re' } },
  });
  
  const terminaleCourses = await prisma.teaching.findMany({
    where: { grade: { shortDescription: 'Tle' } },
  });

  const mathsCourses = await prisma.teaching.findMany({
    where: { 
      subject: { shortDescription: 'Maths' },
      grade: { shortDescription: { in: ['1re', 'Tle'] } }
    },
  });

  const curriculums = [
    // Programmes collège
    {
      longDescription: 'Programme Collège 2016',
      shortDescription: 'Programme du cycle 3 et cycle 4 (réforme 2016)',
      startDate: new Date(2016, 8, 1), // 1er septembre 2016
      endDate: null,
      isActive: true,
      notes: 'Cycle 3 (6e) et Cycle 4 (5e, 4e, 3e)',
      teachingIds: [] as string[],
    },

    // Programmes lycée - Réforme du bac 2021 (mise en place progressive 2019-2021)
    {
      longDescription: 'Réforme Bac 2021 - Seconde',
      shortDescription: 'Nouveau programme de Seconde générale et technologique',
      startDate: new Date(2019, 8, 1), // 1er septembre 2019
      endDate: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Seconde à partir de septembre 2019',
      teachingIds: secondeCourses.map(c => c.id),
    },
    {
      longDescription: 'Réforme Bac 2021 - Première',
      shortDescription: 'Nouveau programme de Première avec spécialités',
      startDate: new Date(2019, 8, 1), // 1er septembre 2019
      endDate: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Première à partir de septembre 2019. Première session du nouveau bac en 2021.',
      teachingIds: premiereCourses.map(c => c.id),
    },
    {
      longDescription: 'Réforme Bac 2021 - Terminale',
      shortDescription: 'Nouveau programme de Terminale avec spécialités',
      startDate: new Date(2020, 8, 1), // 1er septembre 2020
      endDate: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Terminale à partir de septembre 2020. Première session du nouveau bac en juin 2021.',
      teachingIds: terminaleCourses.map(c => c.id),
    },

    // Anciens programmes (avant réforme)
    {
      longDescription: 'Programme Lycée 2010 - Série S',
      shortDescription: 'Programme du baccalauréat série S (avant réforme)',
      startDate: new Date(2012, 8, 1), // 1er septembre 2012
      endDate: new Date(2020, 5, 30), // 30 juin 2020
      isActive: false,
      notes: 'Dernière session en juin 2020. Concerne les anciennes séries S, ES, L.',
      teachingIds: [] as string[],
    },
    {
      longDescription: 'Programme Lycée 2010 - Série ES',
      shortDescription: 'Programme du baccalauréat série ES (avant réforme)',
      startDate: new Date(2012, 8, 1), // 1er septembre 2012
      endDate: new Date(2020, 5, 30), // 30 juin 2020
      isActive: false,
      notes: 'Dernière session en juin 2020.',
      teachingIds: [] as string[],
    },
    {
      longDescription: 'Programme Lycée 2010 - Série L',
      shortDescription: 'Programme du baccalauréat série L (avant réforme)',
      startDate: new Date(2012, 8, 1), // 1er septembre 2012
      endDate: new Date(2020, 5, 30), // 30 juin 2020
      isActive: false,
      notes: 'Dernière session en juin 2020.',
      teachingIds: [] as string[],
    },

    // Programme 2023 pour certaines matières
    {
      longDescription: 'Programme Mathématiques 2023',
      shortDescription: 'Ajustements du programme de mathématiques',
      startDate: new Date(2023, 8, 1), // 1er septembre 2023
      endDate: null,
      isActive: true,
      notes: 'Modifications mineures apportées au programme de mathématiques de Première et Terminale',
      teachingIds: mathsCourses.map(c => c.id),
    },
  ];

  let createdCount = 0;

  for (const curriculum of curriculums) {
    // Vérifier si le curriculum existe déjà
    const existing = await prisma.curriculum.findFirst({
      where: {
        longDescription: curriculum.longDescription,
        startDate: curriculum.startDate,
      },
    });

    if (!existing) {
      await prisma.curriculum.create({
        data: curriculum,
      });
      createdCount++;
    } else {
      // Mettre à jour si nécessaire
      await prisma.curriculum.update({
        where: { id: existing.id },
        data: curriculum,
      });
    }
  }

  console.log(`   ✓ ${createdCount} programmes scolaires créés`);
}
