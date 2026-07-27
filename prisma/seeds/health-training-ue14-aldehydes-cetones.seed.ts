import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_FUNCTIONS_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_OXIDATION_PRACTICE_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
  SECTION_A_REDUCTION_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-aldehydes-cetones.section-a.seed';
import {
  SECTION_B_GRIGNARD_MASTER_QUESTION_ORDERS,
  SECTION_B_HYDRIDE_PRACTICE_QUESTION_ORDERS,
  SECTION_B_POLARITY_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
} from './health-training-ue14-aldehydes-cetones.section-b.seed';
import {
  SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_ELECTROPHILES_PRACTICE_QUESTION_ORDERS,
  SECTION_C_OXIDATION_MASTER_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-aldehydes-cetones.section-c.seed';
import {
  SECTION_D_CYCLIZATION_MASTER_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
  SECTION_D_REPRESENTATIONS_PRACTICE_QUESTION_ORDERS,
  SECTION_D_SUGARS_DISCOVERY_QUESTION_ORDERS,
} from './health-training-ue14-aldehydes-cetones.section-d.seed';
import {
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
  SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
  SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
} from './health-training-ue14-aldehydes-cetones.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'aldehydes-cetones';

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
    SECTION_A_FUNCTIONS_DISCOVERY_QUESTION_ORDERS,
    `Aldéhydes et cétones : reconnaissance`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_OXIDATION_PRACTICE_QUESTION_ORDERS,
    `Aldéhydes et cétones : préparation par oxydation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_REDUCTION_MASTER_QUESTION_ORDERS,
    `Aldéhydes : préparation par réduction de dérivés d'acide`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_POLARITY_DISCOVERY_QUESTION_ORDERS,
    `Carbonyle : polarité et carbones voisins`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_HYDRIDE_PRACTICE_QUESTION_ORDERS,
    `Aldéhydes et cétones : réduction par hydrures`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_GRIGNARD_MASTER_QUESTION_ORDERS,
    `Aldéhydes et cétones : addition d'organomagnésiens`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS,
    `Aldéhydes et cétones : réactions avec les amines`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_ELECTROPHILES_PRACTICE_QUESTION_ORDERS,
    `Aldéhydes et cétones : fonctionnalisation en position alpha`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_OXIDATION_MASTER_QUESTION_ORDERS,
    `Aldéhydes et cétones : oxydabilité et transformations`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_SUGARS_DISCOVERY_QUESTION_ORDERS,
    `Sucres : caractère réducteur et forme linéaire`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_REPRESENTATIONS_PRACTICE_QUESTION_ORDERS,
    `Sucres : représentations plane et tridimensionnelle`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CYCLIZATION_MASTER_QUESTION_ORDERS,
    `Sucres : cyclisation et hémiacétals`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
    `Synthèse : aldéhydes et cétones`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
    `Synthèse : composés carbonylés et sucres`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Aldéhydes et cétones : reconnaissance et préparation`,
    description:
      `Reconnaissance des fonctions carbonylées, préparation par oxydation d'alcools ou d'alcènes et réduction contrôlée de dérivés d'acide.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Polarité du carbonyle, réductions par hydrures et additions d'organomagnésiens`,
    description:
      `Polarisation de la liaison carbonyle, attaque d'hydrures, additions d'organomagnésiens et formation d'alcools.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Réactions avec les amines, fonctionnalisation en position alpha et oxydabilité`,
    description:
      `Formation d'imines ou d'iminiums, activation de la position alpha et comparaison de l'oxydabilité des aldéhydes et des cétones.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Application aux sucres : caractère réducteur, représentations et cyclisation`,
    description:
      `Lecture des formes linéaires du glucose et du fructose, caractère réducteur, représentations conventionnelles et cyclisation en hémiacétal.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Consolidation transversale sur les aldéhydes, cétones, additions nucléophiles, oxydoréductions, réactions avec les amines et sucres.`,
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

export async function seedHealthTrainingUe14AldehydesCetones(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 10 (chimie organique 6)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
