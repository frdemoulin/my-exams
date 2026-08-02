import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = "enzymes-proprietes-nomenclature-mecanisme-action-regulation";

const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: "Catalyseurs, propriétés et spécificité enzymatique", description: "Catalyse biologique, puissance catalytique, spécificité, affinité et exemples de protéases.", kind: 'THEME' },
  { order: SECTION_B_ORDER, title: "Cofacteurs, coenzymes, nomenclature et isoenzymes", description: "Apoenzyme, holoenzyme, vitamines, nomenclature fonctionnelle et officielle, classes EC et isoenzymes.", kind: 'THEME' },
  { order: SECTION_C_ORDER, title: "Interaction, énergie d’activation et site actif", description: "Modèles de reconnaissance, diagramme énergétique, complexes ES/EP et mécanisme de la chymotrypsine.", kind: 'THEME' },
  { order: SECTION_D_ORDER, title: "Régulation de l’activité enzymatique", description: "Allostérie, sous-unités régulatrices, modifications covalentes, protéasome et protéolyse limitée.", kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: "Synthèse du chapitre", description: "Révision transversale de l’ensemble du chapitre.", kind: 'SYNTHESIS' },
];

const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: "UE14 Biochimie — Enzymes : propriétés, nomenclature, mécanisme d’action et régulation",
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
