import type { PrismaClient } from '@prisma/client';
import type {
  SeedQuestion,
  SeedQuiz,
  SeedSection,
} from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-forces-intermoleculaires.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-forces-intermoleculaires.section-b.seed';
import {
  SYNTHESIS_MASTER_QUESTION_ORDERS,
  SYNTHESIS_QUESTIONS,
} from './health-training-ue14-forces-intermoleculaires.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'forces-intermoleculaires';
const SECTION_A_ORDER = 1;
const SECTION_B_ORDER = 2;
const SYNTHESIS_SECTION_ORDER = 3;
const DISCOVER_QUIZ_ORDER = 1;
const PRACTICE_QUIZ_ORDER = 2;
const MASTER_QUIZ_ORDER = 1;
const SECTION_A_DISCOVER_QUIZ_SLUG = 'decouvrir-polarite-molecules';
const SECTION_A_PRACTICE_QUIZ_SLUG = 'sentrainer-polarite-molecules';
const SECTION_B_DISCOVER_QUIZ_SLUG = 'decouvrir-interactions-molecules';
const SECTION_B_PRACTICE_QUIZ_SLUG = 'sentrainer-interactions-molecules';
const SYNTHESIS_MASTER_QUIZ_SLUG = 'maitriser-synthese-forces-intermoleculaires';

const SECTION_A_DISCOVER_QUESTION_ORDERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SECTION_A_PRACTICE_QUESTION_ORDERS = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const SECTION_B_DISCOVER_QUESTION_ORDERS = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const SECTION_B_PRACTICE_QUESTION_ORDERS = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {};

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Polarité des molécules`,
    description: `Polarisation des liaisons et polarité globale des molécules.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Interactions entre molécules`,
    description: `Principales interactions intermoléculaires et conséquences physico-chimiques.`,
    kind: 'THEME',
  },
  {
    order: SYNTHESIS_SECTION_ORDER,
    title: `Synthèse`,
    description: `Consolidation transversale sur la polarité et les interactions intermoléculaires.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = [
  {
    order: DISCOVER_QUIZ_ORDER,
    slug: SECTION_A_DISCOVER_QUIZ_SLUG,
    title: `Polarité des molécules`,
    description: `Découverte de la polarité des molécules et des moments dipolaires.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_DISCOVER_QUESTION_ORDERS,
  },
  {
    order: PRACTICE_QUIZ_ORDER,
    slug: SECTION_A_PRACTICE_QUIZ_SLUG,
    title: `Polarité des molécules`,
    description: `Exercices sur la polarité et la géométrie des molécules.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: DISCOVER_QUIZ_ORDER,
    slug: SECTION_B_DISCOVER_QUIZ_SLUG,
    title: `Interactions entre molécules`,
    description: `Interactions de van der Waals et liaisons hydrogène.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_DISCOVER_QUESTION_ORDERS,
  },
  {
    order: PRACTICE_QUIZ_ORDER,
    slug: SECTION_B_PRACTICE_QUIZ_SLUG,
    title: `Interactions entre molécules`,
    description: `Exercices d'application sur les forces intermoléculaires.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: MASTER_QUIZ_ORDER,
    slug: SYNTHESIS_MASTER_QUIZ_SLUG,
    title: `Synthèse`,
    description: `QCM de synthèse avancée sur la polarité des molécules et les interactions intermoléculaires.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    questionOrders: SYNTHESIS_MASTER_QUESTION_ORDERS,
  },
];

export async function seedHealthTrainingUe14ForcesIntermoleculaires(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 4',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
