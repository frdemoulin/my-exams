import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function validateCurriculumModel() {
  console.log('🔍 Validation du modèle Curriculum\n');

  let errors = 0;
  let warnings = 0;

  // 1. Vérifier que tous les programmes actifs ont un startYear
  console.log('✓ Vérification des programmes actifs...');
  const activePrograms = await prisma.curriculum.findMany({
    where: { isActive: true },
  });

  activePrograms.forEach((program) => {
    if (!program.startYear) {
      console.error(`   ❌ ${program.name} n'a pas de startYear`);
      errors++;
    }
    if (program.endYear) {
      console.warn(`   ⚠️  ${program.name} est actif mais a une endYear`);
      warnings++;
    }
  });

  console.log(`   → ${activePrograms.length} programmes actifs validés\n`);

  // 2. Vérifier que les programmes inactifs ont une endYear
  console.log('✓ Vérification des programmes inactifs...');
  const inactivePrograms = await prisma.curriculum.findMany({
    where: { isActive: false },
  });

  inactivePrograms.forEach((program) => {
    if (!program.endYear) {
      console.warn(`   ⚠️  ${program.name} est inactif mais n'a pas de endYear`);
      warnings++;
    }
  });

  console.log(`   → ${inactivePrograms.length} programmes inactifs validés\n`);

  // 3. Vérifier les courseIds
  console.log('✓ Vérification des cours associés...');
  const allPrograms = await prisma.curriculum.findMany();

  for (const program of allPrograms) {
    if (program.courseIds.length > 0) {
      // Vérifier que tous les IDs existent
      const courses = await prisma.course.findMany({
        where: { id: { in: program.courseIds } },
      });

      if (courses.length !== program.courseIds.length) {
        console.error(`   ❌ ${program.name}: ${program.courseIds.length - courses.length} cours introuvables`);
        errors++;
      }
    } else if (program.isActive && !program.name.includes('Collège')) {
      console.warn(`   ⚠️  ${program.name} est actif mais n'a aucun cours associé`);
      warnings++;
    }
  }

  console.log(`   → Tous les courseIds validés\n`);

  // 4. Vérifier les chevauchements temporels
  console.log('✓ Vérification des chevauchements...');
  const lyceePrograms = allPrograms.filter(p => 
    p.name.includes('Lycée') || p.name.includes('Bac')
  );

  for (let i = 0; i < lyceePrograms.length; i++) {
    for (let j = i + 1; j < lyceePrograms.length; j++) {
      const p1 = lyceePrograms[i];
      const p2 = lyceePrograms[j];

      const p1End = p1.endYear || new Date().getFullYear() + 10;
      const p2End = p2.endYear || new Date().getFullYear() + 10;

      // Chevauchement si p1 commence avant que p2 se termine
      // ET p2 commence avant que p1 se termine
      if (p1.startYear < p2End && p2.startYear < p1End) {
        // C'est normal pour des programmes de niveaux différents
        if (p1.name.includes('Seconde') && p2.name.includes('Terminale')) {
          continue;
        }
        if (p1.name.includes('Première') && p2.name.includes('Terminale')) {
          continue;
        }
        
        console.log(`   ℹ️  Chevauchement détecté:`);
        console.log(`      ${p1.name} (${p1.startYear}-${p1End})`);
        console.log(`      ${p2.name} (${p2.startYear}-${p2End})`);
      }
    }
  }

  console.log('   → Chevauchements analysés\n');

  // 5. Statistiques
  console.log('📊 Statistiques:\n');
  console.log(`   Total de programmes: ${allPrograms.length}`);
  console.log(`   Programmes actifs: ${activePrograms.length}`);
  console.log(`   Programmes inactifs: ${inactivePrograms.length}`);
  
  const totalCourses = allPrograms.reduce((sum, p) => sum + p.courseIds.length, 0);
  const uniqueCourses = new Set(allPrograms.flatMap(p => p.courseIds));
  
  console.log(`   Total associations cours: ${totalCourses}`);
  console.log(`   Cours uniques associés: ${uniqueCourses.size}`);

  // Timeline
  const minYear = Math.min(...allPrograms.map(p => p.startYear));
  const maxYear = Math.max(...allPrograms.map(p => p.endYear || new Date().getFullYear()));
  console.log(`   Période couverte: ${minYear} - ${maxYear}`);

  console.log('\n' + '='.repeat(50));
  console.log(`\n${errors === 0 ? '✅' : '❌'} ${errors} erreurs`);
  console.log(`${warnings === 0 ? '✅' : '⚠️ '} ${warnings} avertissements\n`);

  if (errors === 0 && warnings === 0) {
    console.log('🎉 Le modèle Curriculum est parfaitement configuré !');
  } else if (errors === 0) {
    console.log('✓ Le modèle Curriculum est fonctionnel (avertissements mineurs)');
  } else {
    console.log('⚠️  Des corrections sont nécessaires');
  }

  await prisma.$disconnect();
}

validateCurriculumModel().catch(console.error);
