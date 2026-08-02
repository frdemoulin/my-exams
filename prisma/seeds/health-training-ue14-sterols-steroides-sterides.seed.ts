import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-sterols-steroides-sterides.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-sterols-steroides-sterides.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-sterols-steroides-sterides.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-sterols-steroides-sterides.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-sterols-steroides-sterides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';
const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = "sterols-steroides-sterides";
const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: "Noyau stérane, stérols, stérides et stéroïdes", description: "Architecture du noyau et distinction des familles.", kind: 'THEME' },
  { order: SECTION_B_ORDER, title: "Cholestérol et dérivés", description: "Structure, formes, fonctions, transport, acides biliaires et vitamine D.", kind: 'THEME' },
  { order: SECTION_C_ORDER, title: "Hormones stéroïdiennes : noyaux et origines", description: "Synthèse endocrine, lipophilie et classification estrane/androstane/prégnane.", kind: 'THEME' },
  { order: SECTION_D_ORDER, title: "Fonctions des corticostéroïdes et hormones sexuelles", description: "Aldostérone, cortisol, androgènes, œstrogènes et progestérone.", kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: "Synthèse du chapitre", description: "Révision transversale de l’ensemble du chapitre.", kind: 'SYNTHESIS' },
];
const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number,string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };
export async function seedHealthTrainingUe14SterolsSteroidesSterides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({ prisma, subjectLongDescription: SUBJECT_LONG_DESCRIPTION, chapterSlug: CHAPTER_SLUG, logLabel: "UE14 Biochimie – Stérols, stéroïdes et stérides", questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER, questions, sections, quizSeeds, cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER] });
}
