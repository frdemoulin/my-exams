import type { PrismaClient } from '@prisma/client';

export async function seedCorrections(prisma: PrismaClient) {
  console.log('📝 Seeding Corrections...');

  // Récupérer tous les ExamPapers existants
  const examPapers = await prisma.examPaper.findMany({
    where: {
      sessionYear: 2024,
    },
    select: {
      id: true,
      label: true,
      teaching: {
        select: {
          subject: {
            select: {
              shortDescription: true,
            },
          },
        },
      },
    },
  });

  if (examPapers.length === 0) {
    console.log('⚠️  Aucun ExamPaper trouvé, seeding des corrections annulé');
    return;
  }

  const corrections = [];

  // Créer des corrections mockées pour chaque ExamPaper
  for (const paper of examPapers) {
    const subject = paper.teaching?.subject?.shortDescription || 'Matière';
    const isPaperMaths = subject.toLowerCase().includes('math');
    const isPaperPhysique = subject.toLowerCase().includes('phys');

    // APMEP (surtout pour les maths)
    if (isPaperMaths) {
      corrections.push({
        examPaperId: paper.id,
        source: 'APMEP',
        url: `https://www.apmep.fr/corriges/${paper.label.toLowerCase().replace(/\s+/g, '-')}.pdf`,
        type: 'pdf',
        quality: 5,
        author: 'Association des Professeurs de Mathématiques',
      });
    }

    // LaboLycée (surtout pour la physique-chimie)
    if (isPaperPhysique) {
      corrections.push({
        examPaperId: paper.id,
        source: 'LaboLycée',
        url: `https://labolycee.org/corriges/${paper.label.toLowerCase().replace(/\s+/g, '-')}.pdf`,
        type: 'pdf',
        quality: 5,
        author: 'LaboLycée - Annales corrigées',
      });

      // Ajouter une correction vidéo pour certains sujets
      if (paper.label.includes('Métropole')) {
        corrections.push({
          examPaperId: paper.id,
          source: 'YouTube - Physique Chimie',
          url: `https://www.youtube.com/watch?v=example-${paper.id}`,
          type: 'video',
          quality: 4,
          author: 'Professeur en ligne',
        });
      }
    }

    // Correction générique (disponible pour tous)
    corrections.push({
      examPaperId: paper.id,
      source: 'Académie',
      url: `https://pedagogie.ac-example.fr/corriges/${paper.label.toLowerCase().replace(/\s+/g, '-')}.pdf`,
      type: 'pdf',
      quality: 4,
    });

    // Correction HTML pour les sujets Métropole
    if (paper.label.includes('Métropole')) {
      corrections.push({
        examPaperId: paper.id,
        source: 'Studyrama',
        url: `https://www.studyrama.com/revision-examen/bac/corriges/${paper.label.toLowerCase().replace(/\s+/g, '-')}.html`,
        type: 'html',
        quality: 3,
      });
    }
  }

  // Créer les corrections
  let createdCount = 0;
  for (const correction of corrections) {
    try {
      await prisma.correction.create({
        data: correction,
      });
      createdCount++;
    } catch (error) {
      // Ignorer les doublons (contrainte unique sur examPaperId + source + url)
      // console.log(`⚠️  Correction déjà existante ou erreur`);
    }
  }

  console.log(`✓ ${createdCount} corrections créées`);
}
