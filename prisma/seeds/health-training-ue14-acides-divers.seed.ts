import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_ACIDITY_PRACTICE_QUESTION_ORDERS,
  SECTION_A_DERIVATIVES_MASTER_QUESTION_ORDERS,
  SECTION_A_NAMES_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
} from './health-training-ue14-acides-divers.section-a.seed';
import {
  SECTION_B_CLASSIC_ROUTES_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_NITRILES_PRACTICE_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
  SECTION_B_SYNTHESIS_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-acides-divers.section-b.seed';
import {
  SECTION_C_BIOCHEMISTRY_MASTER_QUESTION_ORDERS,
  SECTION_C_DECARBOXYLATION_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_FAVORED_STRUCTURES_PRACTICE_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-acides-divers.section-c.seed';
import {
  SECTION_D_LEWIS_BASES_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_NUCLEOSIDES_PRACTICE_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
  SECTION_D_TOXICOLOGY_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-acides-divers.section-d.seed';
import {
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
  SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
  SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
} from './health-training-ue14-acides-divers.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'acides-carboxyliques-fonctions-diverses';

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
    SECTION_A_NAMES_DISCOVERY_QUESTION_ORDERS,
    `Acides carboxyliques : structure et nomenclature`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_ACIDITY_PRACTICE_QUESTION_ORDERS,
    `Acides carboxyliques : acidité, carboxylate et mésomérie`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_DERIVATIVES_MASTER_QUESTION_ORDERS,
    `Acides carboxyliques : dérivés d'acides et activation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_CLASSIC_ROUTES_DISCOVERY_QUESTION_ORDERS,
    `Préparation des acides : oxydation et hydrolyses`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_NITRILES_PRACTICE_QUESTION_ORDERS,
    `Préparation des acides : hydrolyse des nitriles`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_SYNTHESIS_MASTER_QUESTION_ORDERS,
    `Préparation des acides : carboxylation des organomagnésiens`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_DECARBOXYLATION_DISCOVERY_QUESTION_ORDERS,
    `Décarboxylation : définition et bilan carbone`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_FAVORED_STRUCTURES_PRACTICE_QUESTION_ORDERS,
    `Décarboxylation : structures favorables et carbonyles`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_BIOCHEMISTRY_MASTER_QUESTION_ORDERS,
    `Décarboxylation : applications chimiques et biochimiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_LEWIS_BASES_DISCOVERY_QUESTION_ORDERS,
    `Bases nucléiques : basicité et nucléophilie`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_NUCLEOSIDES_PRACTICE_QUESTION_ORDERS,
    `Acides nucléiques : bases, nucléosides et nucléotides`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_TOXICOLOGY_MASTER_QUESTION_ORDERS,
    `Acides nucléiques : électrophiles, toxicologie et mutagénicité`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
    `Synthèse : acides et acides nucléiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
    `Synthèse : acides, dérivés et décarboxylation`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Acides carboxyliques : structure, nomenclature, acidité et dérivés activés`,
    description:
      `Reconnaissance de la fonction acide carboxylique, noms usuels et systématiques, acidité, carboxylate, mésomérie et activation en dérivés d'acides.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Préparation des acides : oxydation, hydrolyses, nitriles et carboxylation des organomagnésiens`,
    description:
      `Voies de préparation des acides carboxyliques par oxydation, hydrolyse d'esters, d'amides ou de nitriles, et carboxylation par le dioxyde de carbone.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Décarboxylation : bilan carbone, structures favorables et applications biochimiques`,
    description:
      `Perte de dioxyde de carbone, suivi du bilan carbone, effet des carbonyles voisins et exemples chimiques ou enzymatiques.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Acides, bases et acides nucléiques : bases nucléiques, nucléosides, nucléotides et toxicologie`,
    description:
      `Définitions électronique et protonique des acides et bases, bases nucléiques, nucléosides, nucléotides et réactivité d'électrophiles toxiques.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Consolidation transversale sur les acides carboxyliques, leurs préparations, leurs dérivés, la décarboxylation et les acides nucléiques.`,
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

export async function seedHealthTrainingUe14AcidesDivers(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 11 (chimie organique 7)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
