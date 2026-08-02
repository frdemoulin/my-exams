import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-structure-peptides-proteines.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-structure-peptides-proteines.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-structure-peptides-proteines.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-structure-peptides-proteines.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-structure-peptides-proteines.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = "structure-peptides-proteines";

const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: "Liaison peptidique, nomenclature et classification", description: "Formation des chaînes, extrémités N/C, taille, dénaturation et classes de protéines.", kind: 'THEME' },
  { order: SECTION_B_ORDER, title: "Structure primaire et modifications post-traductionnelles", description: "Séquence, rigidité de la liaison peptidique, angles φ/ψ, hydroxylation, carboxylation, clivage et ponts disulfure.", kind: 'THEME' },
  { order: SECTION_C_ORDER, title: "Structures secondaire et tertiaire", description: "Hélices α, feuillets β, coudes, interactions tertiaires, domaines et organisation globulaire.", kind: 'THEME' },
  { order: SECTION_D_ORDER, title: "Structure quaternaire et exemples de complexes", description: "Sous-unités, homo- et hétéropolymères, créatine kinase, protéines G, LDH et hémoglobine.", kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: "Synthèse du chapitre", description: "Révision transversale de l’ensemble du chapitre.", kind: 'SYNTHESIS' },
];

const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14StructurePeptidesProteines(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: "UE14 Biochimie — Structure des peptides et protéines",
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
