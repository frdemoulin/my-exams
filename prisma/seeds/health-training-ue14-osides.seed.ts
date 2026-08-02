import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-osides.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-osides.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-osides.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-osides.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-osides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'osides';

const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: 'Définitions, liaisons glycosidiques et diholosides', description: 'Classification des osides, condensation, hydrolyse, lactose, saccharose et maltose.', kind: 'THEME' },
  { order: SECTION_B_ORDER, title: 'Homoglycanes de réserve : amidon et glycogène', description: 'Polyosides, amylose, amylopectine, amidon, glycogène et digestion.', kind: 'THEME' },
  { order: SECTION_C_ORDER, title: 'Cellulose et principes structuraux des GAG', description: 'Cellulose, fibres végétales, structure générale des GAG, acide hyaluronique et chondroïtine sulfate.', kind: 'THEME' },
  { order: SECTION_D_ORDER, title: 'GAG sulfatés et hétérosides', description: 'Dermatane, kératane, héparane, héparine, protéoglycanes et glycoprotéines.', kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: 'Synthèse du chapitre', description: 'Révision transversale des structures, liaisons, propriétés et rôles biologiques des osides.', kind: 'SYNTHESIS' },
];

const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14Osides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie chapitre 3 – Les osides',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
