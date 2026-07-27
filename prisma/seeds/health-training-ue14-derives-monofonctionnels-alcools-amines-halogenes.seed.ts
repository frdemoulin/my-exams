import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_HYDRATION_REDUCTION_PRACTICE_QUESTION_ORDERS,
  SECTION_A_ORGANOMAGNESIUM_MASTER_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-a.seed';
import {
  SECTION_B_DEHYDRATION_MASTER_QUESTION_ORDERS,
  SECTION_B_ESTERIFICATION_HEMIACETALS_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_OXIDATION_PRACTICE_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-b.seed';
import {
  SECTION_C_AMIDIFICATION_PRACTICE_QUESTION_ORDERS,
  SECTION_C_AMINES_ALKYLATION_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_IMINES_IMINIUM_MASTER_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-c.seed';
import {
  SECTION_D_HALOGENES_GRIGNARD_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
  SECTION_D_SN1_PRACTICE_QUESTION_ORDERS,
  SECTION_D_SN2_COMPARISON_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-d.seed';
import {
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
  SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
  SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'derives-monofonctionnels-alcools-amines-halogenes';

const SECTION_A_ORDER = 1;
const SECTION_B_ORDER = 2;
const SECTION_C_ORDER = 3;
const SECTION_D_ORDER = 4;
const SECTION_E_ORDER = 5;

const buildThemeLabelsByOrder = (
  questionOrders: number[],
  themeLabel: string
): Record<number, string[]> =>
  Object.fromEntries(questionOrders.map((order) => [order, [themeLabel]]));

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  ...buildThemeLabelsByOrder(
    SECTION_A_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
    `Alcools : fonction, propriétés et classes`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_HYDRATION_REDUCTION_PRACTICE_QUESTION_ORDERS,
    `Alcools : préparation par hydratation et réduction`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_ORGANOMAGNESIUM_MASTER_QUESTION_ORDERS,
    `Alcools : préparation par organomagnésiens`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_ESTERIFICATION_HEMIACETALS_DISCOVERY_QUESTION_ORDERS,
    `Réactivité des alcools : estérification et hémiacétals`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_OXIDATION_PRACTICE_QUESTION_ORDERS,
    `Réactivité des alcools : oxydation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_DEHYDRATION_MASTER_QUESTION_ORDERS,
    `Réactivité des alcools : déshydratation et transformations`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMINES_ALKYLATION_DISCOVERY_QUESTION_ORDERS,
    `Amines : classes, nucléophilie et alkylation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMIDIFICATION_PRACTICE_QUESTION_ORDERS,
    `Amines : amidification`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_IMINES_IMINIUM_MASTER_QUESTION_ORDERS,
    `Amines : imines, iminium et composés carbonylés`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_HALOGENES_GRIGNARD_DISCOVERY_QUESTION_ORDERS,
    `Dérivés halogénés : propriétés, préparation et organomagnésiens`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_SN1_PRACTICE_QUESTION_ORDERS,
    `Substitutions nucléophiles : mécanisme SN1`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_SN2_COMPARISON_MASTER_QUESTION_ORDERS,
    `Substitutions nucléophiles : mécanisme SN2 et comparaison`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
    `Synthèse : alcools, amines et dérivés halogénés`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
    `Synthèse : transformations et stéréochimie`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Alcools : propriétés et préparation`,
    description:
      `Définition de la fonction alcool, propriétés physiques majeures, classification des alcools et voies usuelles de préparation.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Réactivité des alcools`,
    description:
      `Transformations caractéristiques des alcools, notamment oxydation, déshydratation et substitution du groupe hydroxyle.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Amines : structure et réactivité`,
    description:
      `Structure des amines, caractère basique, nucléophilie de l'azote et réactions usuelles associées.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Dérivés halogénés et substitutions nucléophiles`,
    description:
      `Reconnaissance des dérivés halogénés, polarisation de la liaison carbone-halogène et mécanismes de substitution nucléophile.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Vue d'ensemble sur les alcools, amines et dérivés halogénés, avec mise en relation des propriétés, préparations et réactivités.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SECTION_E_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = [
  ...SECTION_A_QUIZZES,
  ...SECTION_B_QUIZZES,
  ...SECTION_C_QUIZZES,
  ...SECTION_D_QUIZZES,
  ...SECTION_E_QUIZZES,
];

export async function seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 8 (chimie organique 4)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
