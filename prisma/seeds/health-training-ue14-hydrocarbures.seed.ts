import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_PRACTICE_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
} from './health-training-ue14-hydrocarbures.section-a.seed';
import {
  SECTION_B_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_PRACTICE_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
} from './health-training-ue14-hydrocarbures.section-b.seed';
import {
  SECTION_C_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_PRACTICE_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-hydrocarbures.section-c.seed';
import {
  SECTION_D_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_PRACTICE_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
} from './health-training-ue14-hydrocarbures.section-d.seed';
import {
  SECTION_E_DISCOVERY_QUESTION_ORDERS,
  SECTION_E_PRACTICE_QUESTION_ORDERS,
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
} from './health-training-ue14-hydrocarbures.section-e.seed';
import {
  SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS,
  SYNTHESIS_EXAM_QUESTION_ORDERS,
  SYNTHESIS_QUESTIONS,
  SYNTHESIS_QUIZZES,
} from './health-training-ue14-hydrocarbures.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'hydrocarbures';

const SECTION_A_ORDER = 1;
const SECTION_B_ORDER = 2;
const SECTION_C_ORDER = 3;
const SECTION_D_ORDER = 4;
const SECTION_E_ORDER = 5;
const SYNTHESIS_SECTION_ORDER = 6;

const buildThemeLabelsByOrder = (
  questionOrders: number[],
  themeLabel: string
): Record<number, string[]> =>
  Object.fromEntries(questionOrders.map((order) => [order, [themeLabel]]));

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  ...buildThemeLabelsByOrder(
    SECTION_A_DISCOVERY_QUESTION_ORDERS,
    `Hydrocarbures : alcanes, cyclanes et formules générales`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_PRACTICE_QUESTION_ORDERS,
    `Alcanes et cyclanes : formules, structures et stabilité`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_DISCOVERY_QUESTION_ORDERS,
    `Alcènes : structure, formule générale, nomenclature et isomérie`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_PRACTICE_QUESTION_ORDERS,
    `Alcènes : préparation par élimination et hydrogénation partielle`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_DISCOVERY_QUESTION_ORDERS,
    `Alcènes : principe des additions, hydrogénation et halogénation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_PRACTICE_QUESTION_ORDERS,
    `Alcènes : hydrohalogénation, Markovnikov et hydratation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_DISCOVERY_QUESTION_ORDERS,
    `Alcènes : oxydations douce, modérée et forte`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_PRACTICE_QUESTION_ORDERS,
    `Alcènes : produits d'oxydation et coupure carbonylée`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_DISCOVERY_QUESTION_ORDERS,
    `Alcynes : structure, nomenclature et hydrogénation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_PRACTICE_QUESTION_ORDERS,
    `Alcynes : additions successives, hydratation et tautomérie`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS,
    `Synthèse : familles d'hydrocarbures et réactions des alcènes`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_EXAM_QUESTION_ORDERS,
    `Synthèse : transformations, coupure oxydante et réactivité des alcynes`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Alcanes et cyclanes`,
    description:
      `Structure, formule générale, nomenclature et propriétés de base des alcanes et cyclanes.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Alcènes : structure, nomenclature et préparation`,
    description:
      `Structure des alcènes, nomenclature, isomérie de position et méthodes usuelles de préparation.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Réactions d'addition sur les alcènes`,
    description:
      `Réactivité de la double liaison et principales réactions d'addition sur les alcènes.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Oxydation des alcènes`,
    description:
      `Oxydations douces et fortes des alcènes, produits attendus et interprétation structurale.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Alcynes : structure, nomenclature et réactivité`,
    description:
      `Structure linéaire des alcynes, nomenclature, acidité relative et réactions caractéristiques.`,
    kind: 'THEME',
  },
  {
    order: SYNTHESIS_SECTION_ORDER,
    title: `Synthèse : alcanes, alcènes et alcynes`,
    description:
      `Questions transversales sur la structure, la nomenclature et la réactivité des hydrocarbures saturés et insaturés.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SECTION_E_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = [
  ...SECTION_A_QUIZZES,
  ...SECTION_B_QUIZZES,
  ...SECTION_C_QUIZZES,
  ...SECTION_D_QUIZZES,
  ...SECTION_E_QUIZZES,
  ...SYNTHESIS_QUIZZES,
];

export async function seedHealthTrainingUe14Hydrocarbures(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 7 (chimie organique 3)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
