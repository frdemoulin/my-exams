import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

async function testCourseRelations() {
  console.log('🔍 Test des relations Course...\n');

  // 1. Compter les cours par niveau
  const coursesByGrade = await prisma.teaching.groupBy({
    by: ['gradeId'],
    _count: true,
  });
  
  console.log('📊 Cours par niveau:');
  for (const group of coursesByGrade) {
    const grade = await prisma.grade.findUnique({
      where: { id: group.gradeId },
    });
    console.log(`   ${grade?.shortDescription}: ${group._count} cours`);
  }

  // 2. Exemple de cours avec relations
  console.log('\n📘 Exemple: Spécialité Mathématiques Terminale:');
  const speMathesTle = await prisma.teaching.findFirst({
    where: {
      longDescription: 'Spécialité Mathématiques',
      grade: { shortDescription: 'Tle' },
    },
    include: {
      grade: true,
      subject: true,
    },
  });
  
  if (speMathesTle) {
    console.log(`   Nom: ${speMathesTle.longDescription}`);
    console.log(`   Niveau: ${speMathesTle.grade.longDescription}`);
    console.log(`   Matière: ${speMathesTle.subject.longDescription}`);
  }

  // 3. Lister les spécialités de Première
  console.log('\n🎯 Spécialités de Première:');
  const spesPremiere = await prisma.teaching.findMany({
    where: {
      grade: { shortDescription: '1re' },
      longDescription: { startsWith: 'Spécialité' },
    },
    include: {
      subject: true,
    },
    orderBy: { longDescription: 'asc' },
  });
  
  spesPremiere.forEach((course) => {
    console.log(`   - ${course.shortDescription} (${course.subject.shortDescription})`);
  });

  // 4. Options de Terminale
  console.log('\n🎨 Options de Terminale:');
  const optionsTerminale = await prisma.teaching.findMany({
    where: {
      grade: { shortDescription: 'Tle' },
      longDescription: { startsWith: 'Option' },
    },
    include: {
      subject: true,
    },
  });
  
  optionsTerminale.forEach((course) => {
    console.log(`   - ${course.longDescription} (${course.subject.shortDescription})`);
  });

  await prisma.$disconnect();
}

testCourseRelations().catch(console.error);
