import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

async function testHomeData() {
  console.log('🏠 Test des données pour la page d\'accueil\n');

  // Tester fetchSpecialties
  const specialties = await prisma.teaching.findMany({
    where: {
      longDescription: {
        startsWith: 'Spécialité',
      },
      grade: {
        shortDescription: {
          in: ['1re', 'Tle'],
        },
      },
    },
    include: {
      grade: true,
      subject: true,
    },
    orderBy: [
      {
        grade: {
          shortDescription: 'desc',
        },
      },
      {
        longDescription: 'asc',
      },
    ],
  });

  console.log(`✅ ${specialties.length} spécialités trouvées:\n`);
  
  specialties.slice(0, 8).forEach((course) => {
    const label = course.shortDescription ?? course.longDescription;
    console.log(`   ${label} (${course.grade.shortDescription}) - ${course.subject.shortDescription}`);
  });

  // Tester les matières
  const subjects = await prisma.subject.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  console.log(`\n✅ ${subjects.length} matières trouvées:\n`);
  subjects.forEach((subject) => {
    console.log(`   - ${subject.shortDescription}`);
  });

  // Compter les cours par niveau
  const coursesByGrade = await prisma.teaching.groupBy({
    by: ['gradeId'],
    _count: true,
  });

  console.log('\n📊 Répartition des cours par niveau:\n');
  for (const group of coursesByGrade) {
    const grade = await prisma.grade.findUnique({
      where: { id: group.gradeId },
    });
    console.log(`   ${grade?.shortDescription} (${grade?.longDescription}): ${group._count} cours`);
  }

  await prisma.$disconnect();
}

testHomeData().catch(console.error);
