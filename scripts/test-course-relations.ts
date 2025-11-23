import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testCourseRelations() {
  console.log('🔍 Test des relations Course...\n');

  // 1. Compter les cours par niveau
  const coursesByGrade = await prisma.course.groupBy({
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
  const speMathesTle = await prisma.course.findFirst({
    where: {
      name: 'Spécialité Mathématiques',
      grade: { shortDescription: 'Tle' },
    },
    include: {
      grade: true,
      subject: true,
    },
  });
  
  if (speMathesTle) {
    console.log(`   Nom: ${speMathesTle.name}`);
    console.log(`   Niveau: ${speMathesTle.grade.longDescription}`);
    console.log(`   Matière: ${speMathesTle.subject.longDescription}`);
  }

  // 3. Lister les spécialités de Première
  console.log('\n🎯 Spécialités de Première:');
  const spesPremiere = await prisma.course.findMany({
    where: {
      grade: { shortDescription: '1re' },
      name: { startsWith: 'Spécialité' },
    },
    include: {
      subject: true,
    },
    orderBy: { name: 'asc' },
  });
  
  spesPremiere.forEach((course) => {
    console.log(`   - ${course.shortName} (${course.subject.shortDescription})`);
  });

  // 4. Options de Terminale
  console.log('\n🎨 Options de Terminale:');
  const optionsTerminale = await prisma.course.findMany({
    where: {
      grade: { shortDescription: 'Tle' },
      name: { startsWith: 'Option' },
    },
    include: {
      subject: true,
    },
  });
  
  optionsTerminale.forEach((course) => {
    console.log(`   - ${course.name} (${course.subject.shortDescription})`);
  });

  await prisma.$disconnect();
}

testCourseRelations().catch(console.error);
