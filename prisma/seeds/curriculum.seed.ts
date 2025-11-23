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
      name: 'Programme Collège 2016',
      description: 'Programme du cycle 3 et cycle 4 (réforme 2016)',
      startYear: 2016,
      endYear: null,
      startMonth: 9, // Septembre
      endMonth: null,
      isActive: true,
      notes: 'Cycle 3 (6e) et Cycle 4 (5e, 4e, 3e)',
      teachingIds: [] as string[],
    },

    // Programmes lycée - Réforme du bac 2021 (mise en place progressive 2019-2021)
    {
      name: 'Réforme Bac 2021 - Seconde',
      description: 'Nouveau programme de Seconde générale et technologique',
      startYear: 2019,
      endYear: null,
      startMonth: 9,
      endMonth: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Seconde à partir de septembre 2019',
      teachingIds: secondeCourses.map(c => c.id),
    },
    {
      name: 'Réforme Bac 2021 - Première',
      description: 'Nouveau programme de Première avec spécialités',
      startYear: 2019,
      endYear: null,
      startMonth: 9,
      endMonth: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Première à partir de septembre 2019. Première session du nouveau bac en 2021.',
      teachingIds: premiereCourses.map(c => c.id),
    },
    {
      name: 'Réforme Bac 2021 - Terminale',
      description: 'Nouveau programme de Terminale avec spécialités',
      startYear: 2020,
      endYear: null,
      startMonth: 9,
      endMonth: null,
      isActive: true,
      notes: 'Applicable aux élèves entrant en Terminale à partir de septembre 2020. Première session du nouveau bac en juin 2021.',
      teachingIds: terminaleCourses.map(c => c.id),
    },

    // Anciens programmes (avant réforme)
    {
      name: 'Programme Lycée 2010 - Série S',
      description: 'Programme du baccalauréat série S (avant réforme)',
      startYear: 2012,
      endYear: 2020,
      startMonth: 9,
      endMonth: 6,
      isActive: false,
      notes: 'Dernière session en juin 2020. Concerne les anciennes séries S, ES, L.',
      teachingIds: [] as string[],
    },
    {
      name: 'Programme Lycée 2010 - Série ES',
      description: 'Programme du baccalauréat série ES (avant réforme)',
      startYear: 2012,
      endYear: 2020,
      startMonth: 9,
      endMonth: 6,
      isActive: false,
      notes: 'Dernière session en juin 2020.',
      teachingIds: [] as string[],
    },
    {
      name: 'Programme Lycée 2010 - Série L',
      description: 'Programme du baccalauréat série L (avant réforme)',
      startYear: 2012,
      endYear: 2020,
      startMonth: 9,
      endMonth: 6,
      isActive: false,
      notes: 'Dernière session en juin 2020.',
      teachingIds: [] as string[],
    },

    // Programme 2023 pour certaines matières
    {
      name: 'Programme Mathématiques 2023',
      description: 'Ajustements du programme de mathématiques',
      startYear: 2023,
      endYear: null,
      startMonth: 9,
      endMonth: null,
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
        name: curriculum.name,
        startYear: curriculum.startYear,
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
