/**
 * Script de migration : ExamPaper → Exercise
 * 
 * Transforme chaque sujet d'annales existant en un exercice unique
 * (en attendant le découpage manuel/automatique en plusieurs exercices)
 * 
 * Usage: npm run migrate:exercises
 */

import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Migration des ExamPapers vers Exercise...\n');

  // Récupérer tous les sujets existants
  const examPapers = await prisma.examPaper.findMany({
    include: {
      teaching: {
        include: {
          subject: true,
          grade: true,
        },
      },
      diploma: true,
    },
    orderBy: [
      { sessionYear: 'desc' },
      { label: 'asc' },
    ],
  });

  console.log(`📚 ${examPapers.length} sujets d'examen trouvés\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const paper of examPapers) {
    try {
      // Vérifier si un exercice existe déjà pour ce sujet
      const existingExercise = await prisma.exercise.findUnique({
        where: {
          examPaperId_exerciseNumber: {
            examPaperId: paper.id,
            exerciseNumber: 1,
          },
        },
      });

      if (existingExercise) {
        console.log(`⏭️  ${paper.label} ${paper.sessionYear} - Exercice déjà existant`);
        skipped++;
        continue;
      }

      // Créer un exercice unique représentant le sujet complet
      await prisma.exercise.create({
        data: {
          examPaperId: paper.id,
          exerciseNumber: 1,
          label: 'Sujet complet',
          points: paper.totalPoints || null,

          // Reprendre les métadonnées du sujet
          title: `${paper.diploma.shortDescription} ${paper.teaching.subject.shortDescription} ${paper.sessionYear}`,
          themeIds: paper.themeIds || [],

          // URLs (si disponibles)
          exerciseUrl: paper.subjectUrl,

          // Métadonnées enrichies
          estimatedDuration: paper.estimatedDuration,
          estimatedDifficulty: paper.estimatedDifficulty,
          summary: paper.summary,
          keywords: [], // À enrichir plus tard

          enrichmentStatus: paper.enrichmentStatus,
          enrichedAt: paper.enrichedAt,
        },
      });

      console.log(`✅ ${paper.label} ${paper.sessionYear} - Exercice créé`);
      created++;
    } catch (error) {
      console.error(`❌ Erreur pour ${paper.label} ${paper.sessionYear}:`, error);
      errors++;
    }
  }

  console.log('\n📊 Résumé de la migration:');
  console.log(`   ✅ ${created} exercices créés`);
  console.log(`   ⏭️  ${skipped} exercices déjà existants`);
  console.log(`   ❌ ${errors} erreurs`);
  console.log(`\n✅ Migration terminée !`);
}

main()
  .catch((e) => {
    console.error('💥 Erreur lors de la migration:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
