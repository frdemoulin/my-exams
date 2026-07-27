import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_DISCOVERY_QUESTION_ORDERS,
  SECTION_A_PRACTICE_QUESTION_ORDERS,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.section-a.seed';
import {
  SECTION_B_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_PRACTICE_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.section-b.seed';
import {
  SECTION_C_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_PRACTICE_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.section-c.seed';
import {
  SECTION_D_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_PRACTICE_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.section-d.seed';
import {
  SECTION_E_DISCOVERY_QUESTION_ORDERS,
  SECTION_E_PRACTICE_QUESTION_ORDERS,
  SECTION_E_QUESTIONS,
  SECTION_E_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.section-e.seed';
import {
  SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS,
  SYNTHESIS_EXAM_QUESTION_ORDERS,
  SYNTHESIS_QUESTIONS,
  SYNTHESIS_QUIZZES,
} from './health-training-ue14-isomerie-enantiomerie.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'isomerie-enantiomerie';

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
    `Isomérie : définitions, fonctions, positions et tautomérie`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_A_PRACTICE_QUESTION_ORDERS,
    `Isomérie : comparaison de structures et classement des relations`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_DISCOVERY_QUESTION_ORDERS,
    `Isomérie géométrique : conditions, vocabulaire E/Z et cas simples`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_PRACTICE_QUESTION_ORDERS,
    `Isomérie géométrique : priorités CIP et attribution E/Z`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_DISCOVERY_QUESTION_ORDERS,
    `Chiralité : centres asymétriques, énantiomères et molécules chirales`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_PRACTICE_QUESTION_ORDERS,
    `Chiralité : plusieurs centres, diastéréoisomères et composés méso`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_DISCOVERY_QUESTION_ORDERS,
    `Configuration absolue R/S : priorités CIP et attribution directe`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_PRACTICE_QUESTION_ORDERS,
    `Configuration absolue R/S : substituants complexes et centres multiples`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_DISCOVERY_QUESTION_ORDERS,
    `Pouvoir rotatoire : polarimétrie, dextrogyre, lévogyre et racémique`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_E_PRACTICE_QUESTION_ORDERS,
    `Pouvoir rotatoire : excès énantiomérique et interprétation des mélanges`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS,
    `Synthèse : isomérie, E/Z, R/S, chiralité et polarimétrie`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_EXAM_QUESTION_ORDERS,
    `Synthèse : entraînement transversal type examen`
  ),
};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Les différentes formes d'isomérie`,
    description:
      `Introduction aux principales formes d'isomérie rencontrées en chimie organique.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Isomérie géométrique : configurations E et Z`,
    description:
      `Reconnaissance de l'isomérie géométrique et attribution des configurations E et Z.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Chiralité, énantiomères et diastéréoisomères`,
    description:
      `Identification d'un centre chiral et distinction entre énantiomères et diastéréoisomères.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Configuration absolue R/S et règles de Cahn-Ingold-Prelog`,
    description:
      `Application des règles de priorité de Cahn-Ingold-Prelog pour attribuer une configuration absolue R ou S.`,
    kind: 'THEME',
  },
  {
    order: SECTION_E_ORDER,
    title: `Pouvoir rotatoire et composition des mélanges`,
    description:
      `Lien entre chiralité, activité optique, mélange racémique et composition d'un mélange d'énantiomères.`,
    kind: 'THEME',
  },
  {
    order: SYNTHESIS_SECTION_ORDER,
    title: `Synthèse`,
    description:
      `Consolidation transversale sur les différentes formes d'isomérie, l'attribution E/Z et R/S, la chiralité et le pouvoir rotatoire.`,
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

export async function seedHealthTrainingUe14IsomerieEnantiomerie(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 6 (chimie organique 2)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
  });
}
