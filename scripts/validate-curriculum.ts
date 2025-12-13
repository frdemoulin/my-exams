import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function validateCurriculumModel() {
  console.log('🔍 Validation du modèle Curriculum\n');

  let errors = 0;
  let warnings = 0;

  // 1. Vérifier que tous les programmes actifs ont une date de début
  console.log('✓ Vérification des programmes actifs...');
  const activePrograms = await prisma.curriculum.findMany({
    where: { isActive: true },
  });

  activePrograms.forEach((program) => {
    if (!program.startDate) {
      console.error(`   ❌ ${program.longDescription} n'a pas de date de début`);
      errors++;
    }
    if (program.endDate) {
      console.warn(`   ⚠️  ${program.longDescription} est actif mais a une date de fin`);
      warnings++;
    }
  });

  console.log(`   → ${activePrograms.length} programmes actifs validés\n`);

  // 2. Vérifier que les programmes inactifs ont une date de fin
  console.log('✓ Vérification des programmes inactifs...');
  const inactivePrograms = await prisma.curriculum.findMany({
    where: { isActive: false },
  });

  inactivePrograms.forEach((program) => {
    if (!program.endDate) {
      console.warn(`   ⚠️  ${program.longDescription} est inactif mais n'a pas de date de fin`);
      warnings++;
    }
  });

  console.log(`   → ${inactivePrograms.length} programmes inactifs validés\n`);

  // 3. Vérifier les teachingIds
  console.log('✓ Vérification des cours associés...');
  const allPrograms = await prisma.curriculum.findMany();

  for (const program of allPrograms) {
    if (program.teachingIds.length > 0) {
      // Vérifier que tous les IDs existent
      const courses = await prisma.teaching.findMany({
        where: { id: { in: program.teachingIds } },
      });

      if (courses.length !== program.teachingIds.length) {
        console.error(`   ❌ ${program.longDescription}: ${program.teachingIds.length - courses.length} cours introuvables`);
        errors++;
      }
    } else if (program.isActive && !program.longDescription.includes('Collège')) {
      console.warn(`   ⚠️  ${program.longDescription} est actif mais n'a aucun cours associé`);
      warnings++;
    }
  }

  console.log(`   → Tous les teachingIds validés\n`);

  // 4. Vérifier les chevauchements temporels
  console.log('✓ Vérification des chevauchements...');
  const lyceePrograms = allPrograms.filter((p) =>
    p.longDescription.includes('Lycée') || p.longDescription.includes('Bac'),
  );

  for (let i = 0; i < lyceePrograms.length; i++) {
    for (let j = i + 1; j < lyceePrograms.length; j++) {
      const p1 = lyceePrograms[i];
      const p2 = lyceePrograms[j];

      const p1Start = p1.startDate?.getFullYear() ?? 0;
      const p2Start = p2.startDate?.getFullYear() ?? 0;
      const p1End = p1.endDate?.getFullYear() ?? new Date().getFullYear() + 10;
      const p2End = p2.endDate?.getFullYear() ?? new Date().getFullYear() + 10;

      // Chevauchement si p1 commence avant que p2 se termine ET p2 commence avant que p1 se termine
      if (p1Start < p2End && p2Start < p1End) {
        // Tolérance pour des niveaux différents
        if (p1.longDescription.includes('Seconde') && p2.longDescription.includes('Terminale')) {
          continue;
        }
        if (p1.longDescription.includes('Première') && p2.longDescription.includes('Terminale')) {
          continue;
        }

        console.log(`   ℹ️  Chevauchement détecté:`);
        console.log(`      ${p1.longDescription} (${p1Start}-${p1End})`);
        console.log(`      ${p2.longDescription} (${p2Start}-${p2End})`);
      }
    }
  }

  console.log('   → Chevauchements analysés\n');

  // 5. Statistiques
  console.log('📊 Statistiques:\n');
  console.log(`   Total de programmes: ${allPrograms.length}`);
  console.log(`   Programmes actifs: ${activePrograms.length}`);
  console.log(`   Programmes inactifs: ${inactivePrograms.length}`);

  const totalCourses = allPrograms.reduce((sum, p) => sum + p.teachingIds.length, 0);
  const uniqueCourses = new Set(allPrograms.flatMap((p) => p.teachingIds));

  console.log(`   Total associations cours: ${totalCourses}`);
  console.log(`   Cours uniques associés: ${uniqueCourses.size}`);

  // Timeline
  const startYears = allPrograms.map((p) => p.startDate?.getFullYear() ?? 0);
  const endYears = allPrograms.map((p) => p.endDate?.getFullYear() ?? new Date().getFullYear());
  const minYear = Math.min(...startYears);
  const maxYear = Math.max(...endYears);
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
