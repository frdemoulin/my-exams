import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-eicosanoides.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-eicosanoides.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-eicosanoides.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-eicosanoides.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-eicosanoides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'eicosanoides';

const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: 'Définition, acide arachidonique et voies de synthèse', description: 'Familles d’eicosanoïdes, structure et nomenclature de l’acide arachidonique, voies COX et lipoxygénases.', kind: 'THEME' },
  { order: SECTION_B_ORDER, title: 'Prostanoïdes : structure, nomenclature et séries', description: 'Acide prostanoïque, noyau cyclopentane, groupes, séries et lecture des noms de prostaglandines.', kind: 'THEME' },
  { order: SECTION_C_ORDER, title: 'Rôles biologiques et thérapeutiques des prostanoïdes', description: 'Médiateurs locaux, PGE₁/PGE₂, PGF₂α, misoprostol, TXA₂, PGI₂ et inhibition de la COX.', kind: 'THEME' },
  { order: SECTION_D_ORDER, title: 'Leucotriènes et lipoxines', description: 'Structure, cellules productrices, effets, LTA₄ et voies vers LXA₄, LTB₄, LTC₄, LTD₄ et LTE₄.', kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: 'Synthèse du chapitre', description: 'Révision transversale des voies, structures, fonctions et applications thérapeutiques.', kind: 'SYNTHESIS' },
];

const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14Eicosanoides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie – Les eicosanoïdes',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
