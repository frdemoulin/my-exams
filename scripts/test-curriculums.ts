import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

async function testCurriculums() {
  console.log('📚 Test des Programmes Scolaires\n');

  // 1. Lister tous les programmes
  const curriculums = await prisma.curriculum.findMany({
    orderBy: [
      { startDate: 'desc' },
      { longDescription: 'asc' },
    ],
  });

  console.log(`✅ ${curriculums.length} programmes trouvés:\n`);

  for (const curriculum of curriculums) {
    const status = curriculum.isActive ? '🟢 Actif' : '🔴 Inactif';
    console.log(`${status} ${curriculum.longDescription} (${curriculum.shortDescription ?? ''})`);
    console.log(`   📅 Début: ${curriculum.startDate?.toISOString().split('T')[0] || '?'}`);
    console.log(`   🎯 ${curriculum.teachingIds.length} cours associés`);
    if (curriculum.notes) {
      console.log(`   💡 ${curriculum.notes}`);
    }
    console.log('');
  }

  // 2. Exemple: Programme de Terminale avec ses cours
  console.log('\n📘 Exemple: Réforme Bac 2021 - Terminale\n');
  
  const reformeTerminale = await prisma.curriculum.findFirst({
    where: {
      longDescription: {
        contains: 'Réforme Bac 2021 - Terminale',
      },
    },
  });

  if (reformeTerminale) {
    const courses = await prisma.teaching.findMany({
      where: {
        id: { in: reformeTerminale.teachingIds },
      },
      include: {
        grade: true,
        subject: true,
      },
      orderBy: {
        longDescription: 'asc',
      },
    });

    console.log(`Programme: ${reformeTerminale.longDescription}`);
    console.log(`Période: ${reformeTerminale.startDate?.toISOString().split('T')[0] ?? '?'} → en cours`);
    console.log(`\nCours inclus (${courses.length}):\n`);

    courses.forEach((course) => {
      console.log(`   - ${course.longDescription} (${course.subject.shortDescription})`);
    });
  }

  // 3. Programmes actifs
  console.log('\n\n🟢 Programmes actuellement en vigueur:\n');
  
  const activePrograms = await prisma.curriculum.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      startDate: 'desc',
    },
  });

  activePrograms.forEach((program) => {
    console.log(`   ${program.longDescription} (depuis ${program.startDate?.getFullYear() ?? '?'})`);
    console.log(`      → ${program.teachingIds.length} cours`);
  });

  // 4. Timeline des programmes
  console.log('\n\n📅 Timeline des programmes:\n');
  
  const timeline = curriculums
    .sort((a, b) => (a.startDate?.getTime() ?? 0) - (b.startDate?.getTime() ?? 0))
    .map((c) => ({
      year: c.startDate?.getFullYear() ?? 'N/A',
      name: c.longDescription,
      type: c.endDate ? 'ancien' : 'actuel',
    }));

  timeline.forEach(({ year, name, type }) => {
    const icon = type === 'actuel' ? '🟢' : '⚪';
    console.log(`   ${icon} ${year}: ${name}`);
  });

  await prisma.$disconnect();
}

testCurriculums().catch(console.error);
