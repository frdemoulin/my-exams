/** UE14 – Biologie cellulaire – Chapitre 2 : Membrane plasmique — V2 active refonte finale */
import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.synthesis.seed';
import { UE14_CELL_CH2_V2_QUIZ_MAP, UE14_CELL_CH2_V2_THEME_LABELS_BY_ORDER } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';
const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'membrane-plasmique-communication-transports-membranaires';
const sections: SeedSection[] = [
  { order: 1, title: 'Structure et composition de la membrane', description: 'Bicouche, lipides, protéines, glucides, hématie et système ABO.', kind: 'THEME' },
  { order: 2, title: 'Fluidité, asymétrie et polarité membranaires', description: 'Fluidité, mouvements lipidiques, asymétrie, translocation et polarité épithéliale.', kind: 'THEME' },
  { order: 3, title: 'Communication cellulaire', description: 'Adhérence, matrice extracellulaire, RCPG, RTK et modes de communication.', kind: 'THEME' },
  { order: 4, title: 'Transport membranaire et transport du glucose', description: 'Diffusion, canaux, transporteurs, pompes, cotransports et glucose.', kind: 'THEME' },
  { order: 5, title: 'Synthèse du chapitre', description: 'Révision transversale de la membrane plasmique.', kind: 'SYNTHESIS' },
];
const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = UE14_CELL_CH2_V2_QUIZ_MAP as unknown as SeedQuiz[];
export async function seedHealthTrainingUe14BiologieCellulaireMembranePlasmique(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biologie cellulaire — chapitre 2',
    questionThemeLabelsByOrder: UE14_CELL_CH2_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
