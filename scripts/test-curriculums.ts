import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testCurriculums() {
  console.log('📚 Test des Programmes Scolaires\n');

  // 1. Lister tous les programmes
  const curriculums = await prisma.curriculum.findMany({
    orderBy: [
      { startYear: 'desc' },
      { name: 'asc' },
    ],
  });

  console.log(`✅ ${curriculums.length} programmes trouvés:\n`);

  for (const curriculum of curriculums) {
    const status = curriculum.isActive ? '🟢 Actif' : '🔴 Inactif';
    const period = curriculum.endYear 
      ? `${curriculum.startYear}-${curriculum.endYear}`
      : `${curriculum.startYear}→`;
    
    console.log(`${status} ${curriculum.name} (${period})`);
    console.log(`   📝 ${curriculum.description}`);
    console.log(`   📅 Début: ${curriculum.startYear}/${curriculum.startMonth || '?'}`);
    if (curriculum.endYear) {
      console.log(`   📅 Fin: ${curriculum.endYear}/${curriculum.endMonth || '?'}`);
    }
    console.log(`   🎯 ${curriculum.courseIds.length} cours associés`);
    if (curriculum.notes) {
      console.log(`   💡 ${curriculum.notes}`);
    }
    console.log('');
  }

  // 2. Exemple: Programme de Terminale avec ses cours
  console.log('\n📘 Exemple: Réforme Bac 2021 - Terminale\n');
  
  const reformeTerminale = await prisma.curriculum.findFirst({
    where: {
      name: 'Réforme Bac 2021 - Terminale',
    },
  });

  if (reformeTerminale) {
    const courses = await prisma.course.findMany({
      where: {
        id: { in: reformeTerminale.courseIds },
      },
      include: {
        grade: true,
        subject: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    console.log(`Programme: ${reformeTerminale.name}`);
    console.log(`Période: ${reformeTerminale.startYear}/0${reformeTerminale.startMonth} → en cours`);
    console.log(`\nCours inclus (${courses.length}):\n`);

    courses.forEach((course) => {
      console.log(`   - ${course.name} (${course.subject.shortDescription})`);
    });
  }

  // 3. Programmes actifs
  console.log('\n\n🟢 Programmes actuellement en vigueur:\n');
  
  const activePrograms = await prisma.curriculum.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      startYear: 'desc',
    },
  });

  activePrograms.forEach((program) => {
    console.log(`   ${program.name} (depuis ${program.startYear})`);
    console.log(`      → ${program.courseIds.length} cours`);
  });

  // 4. Timeline des programmes
  console.log('\n\n📅 Timeline des programmes:\n');
  
  const timeline = curriculums
    .sort((a, b) => a.startYear - b.startYear)
    .map(c => ({
      year: c.startYear,
      name: c.name,
      type: c.endYear ? 'ancien' : 'actuel',
    }));

  timeline.forEach(({ year, name, type }) => {
    const icon = type === 'actuel' ? '🟢' : '⚪';
    console.log(`   ${icon} ${year}: ${name}`);
  });

  await prisma.$disconnect();
}

testCurriculums().catch(console.error);
