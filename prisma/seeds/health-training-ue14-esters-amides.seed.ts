import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_FUNCTIONS_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_PEPTIDE_MASTER_QUESTION_ORDERS,
  SECTION_A_PREPARATION_PRACTICE_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
} from './health-training-ue14-esters-amides.section-a.seed';
import {
  SECTION_B_HYDROLYSIS_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_POLARITY_PRACTICE_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
  SECTION_B_REACTIVITY_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-esters-amides.section-b.seed';
import {
  SECTION_C_ENZYMES_PRACTICE_QUESTION_ORDERS,
  SECTION_C_HYDROLYSIS_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
  SECTION_C_RESONANCE_MASTER_QUESTION_ORDERS,
} from './health-training-ue14-esters-amides.section-c.seed';
import {
  SECTION_D_ACETYLCOA_MASTER_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
  SECTION_D_REACTIVITY_PRACTICE_QUESTION_ORDERS,
  SECTION_D_STRUCTURE_DISCOVERY_QUESTION_ORDERS,
} from './health-training-ue14-esters-amides.section-d.seed';
import {
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
  SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
  SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
} from './health-training-ue14-esters-amides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'esters-amides';

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
    `Fonctions ester et amide : reconnaissance`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_PREPARATION_PRACTICE_QUESTION_ORDERS,
    `Esters et amides : préparation à partir d'acides activés`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_PEPTIDE_MASTER_QUESTION_ORDERS,
    `Amides : liaison peptidique et résidu proline`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_HYDROLYSIS_DISCOVERY_QUESTION_ORDERS,
    `Esters : hydrolyse acide et saponification`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_POLARITY_PRACTICE_QUESTION_ORDERS,
    `Esters : polarisation et centres réactifs`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_REACTIVITY_MASTER_QUESTION_ORDERS,
    `Esters : réactivité du carbonyle et carbone alpha`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_HYDROLYSIS_DISCOVERY_QUESTION_ORDERS,
    `Amides : hydrolyse et sélectivité`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_ENZYMES_PRACTICE_QUESTION_ORDERS,
    `Hydrolyses enzymatiques : estérases et protéases`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_RESONANCE_MASTER_QUESTION_ORDERS,
    `Amides : résonance et double liaison partielle`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_STRUCTURE_DISCOVERY_QUESTION_ORDERS,
    `Thioesters : structure et préparation`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_REACTIVITY_PRACTICE_QUESTION_ORDERS,
    `Thioesters : hydrolyse et réactivité`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_ACETYLCOA_MASTER_QUESTION_ORDERS,
    `Thioesters : acétyl-CoA et coenzyme A-SH`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_PRACTICE_QUESTION_ORDERS,
    `Synthèse : esters, amides et thioesters`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_SYNTHESIS_MASTER_QUESTION_ORDERS,
    `Synthèse : dérivés d'acide, sélectivité et acétyl-CoA`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Fonctions ester et amide : structure, préparation et intérêt biologique`,
    description:
      `Reconnaissance des fonctions ester et amide, préparation à partir d'acides activés, intérêt biologique des amides et liaison peptidique.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Esters : hydrolyse, polarisation et réactivité`,
    description:
      `Hydrolyse acide, saponification, polarisation de la fonction ester et principaux centres réactifs.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Amides : hydrolyse, sélectivité et propriétés électroniques`,
    description:
      `Hydrolyse des amides, sélectivité vis-à-vis des esters, hydrolyses enzymatiques et délocalisation du doublet de l'azote.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Thioesters et acétyl-CoA`,
    description:
      `Structure, préparation, hydrolyse et réactivité des thioesters, avec l'exemple biologique de l'acétyl-CoA.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Consolidation transversale sur les esters, amides, thioesters, hydrolyses, sélectivités et dérivés d'acide d'intérêt biologique.`,
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

export async function seedHealthTrainingUe14EstersAmides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 9 (chimie organique 5)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
