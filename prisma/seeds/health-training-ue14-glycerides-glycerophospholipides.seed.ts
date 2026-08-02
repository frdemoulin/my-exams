import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-glycerides-glycerophospholipides.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-glycerides-glycerophospholipides.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-glycerides-glycerophospholipides.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-glycerides-glycerophospholipides.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-glycerides-glycerophospholipides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';
const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = "glycerides-glycerophospholipides";
const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: "Glycérol et acylglycérols", description: "Structure du glycérol et classification des mono-, di- et triacylglycérols.", kind: 'THEME' },
  { order: SECTION_B_ORDER, title: "Triacylglycérols : propriétés, stockage et rôles", description: "Propriétés physiques, réserve énergétique, protection et huile de palme.", kind: 'THEME' },
  { order: SECTION_C_ORDER, title: "Acide phosphatidique et classes de glycérophospholipides", description: "Structure, têtes polaires et principales séries.", kind: 'THEME' },
  { order: SECTION_D_ORDER, title: "Membranes, phospholipases, signalisation et plasmalogènes", description: "Bicouches, liposomes, sites enzymatiques, PIP2, PI3K-AKT et PAF.", kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: "Synthèse du chapitre", description: "Révision transversale de l’ensemble du chapitre.", kind: 'SYNTHESIS' },
];
const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number,string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };
export async function seedHealthTrainingUe14GlyceridesGlycerophospholipides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({ prisma, subjectLongDescription: SUBJECT_LONG_DESCRIPTION, chapterSlug: CHAPTER_SLUG, logLabel: "UE14 Biochimie – Glycérides et glycérophospholipides", questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER, questions, sections, quizSeeds, cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER] });
}
