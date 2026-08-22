import type { PrismaClient } from '@prisma/client';
import type {
  SeedQuestion,
  SeedQuiz,
  SeedSection,
} from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-c.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.synthesis.seed';
import {
  UE14_CH1_V2_QUIZ_MAP,
  UE14_CH1_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-elements-chimiques-classification-periodique.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'elements-chimiques-classification-periodique';

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Structure et neutralité de l'atome`],
  2: [`Composition d'un nucléide à partir de A et Z`],
  3: [`Éléments naturels, transuraniens et radioactivité`],
  4: [`Calcul de masse atomique moyenne`],
  11: [`Définition et reconnaissance des isotopes`],
  12: [`Vocabulaire : nucléide`],
  13: [`Unités atomiques et conversions`],
  15: [`Ordres de grandeur de l'atome et du noyau`],
  21: [`Propriétés physiques et chimiques des isotopes`],
  22: [`Charges et masses des constituants de l'atome`],
  ...UE14_CH1_V2_THEME_LABELS_BY_ORDER,
};

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Atomes`,
    description:
      `Structure de l'atome, nucléides, isotopes et ordres de grandeur associés.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Organisation et configuration électronique`,
    description:
      `Couches, sous-couches, orbitales, nombres quantiques et configurations électroniques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Classification périodique des éléments`,
    description:
      `Organisation de la classification, familles chimiques et propriétés associées.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les atomes, l'organisation électronique et la classification périodique.`,
    kind: 'SYNTHESIS',
  },
];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: 'decouvrir-elements-chimiques-classification',
    title: `Atomes`,
    description:
      `Repères fondamentaux sur la structure de l'atome, les nucléides, les isotopes et les ordres de grandeur.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    items: [
      { type: 'QUESTION', questionOrder: 1 },
      { type: 'QUESTION', questionOrder: 22 },
      {
        type: 'GROUP',
        title: `Isotopes de l'iode`,
        sharedStatement:
          `En médecine nucléaire, l'iode 123 est notamment utilisé pour l'exploration scintigraphique de la thyroïde, tandis que l'iode 131 peut être utilisé à visée thérapeutique. On considère les nucléides $\\ce{^{123}_{53}I}$ et $\\ce{^{131}_{53}I}$.`,
        questionOrders: [2, 11],
      },
      { type: 'QUESTION', questionOrder: 12 },
      { type: 'QUESTION', questionOrder: 13 },
      { type: 'QUESTION', questionOrder: 21 },
      { type: 'QUESTION', questionOrder: 15 },
      { type: 'QUESTION', questionOrder: 3 },
      { type: 'QUESTION', questionOrder: 4 },
    ],
  },
  ...(UE14_CH1_V2_QUIZ_MAP as unknown as SeedQuiz[]),
];

export async function seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 1',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [2, 3],
  });
}
