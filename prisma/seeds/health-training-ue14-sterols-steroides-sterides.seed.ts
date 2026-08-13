import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-sterols-steroides-sterides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-sterols-steroides-sterides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-sterols-steroides-sterides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-sterols-steroides-sterides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-sterols-steroides-sterides.synthesis.seed';
import {
  UE14_BIOCH_CH8_V2_QUIZ_MAP,
  UE14_BIOCH_CH8_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-sterols-steroides-sterides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'sterols-steroides-sterides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Noyau stérane, stérols, stérides et stéroïdes',
    description: 'Architecture du noyau et distinction des familles.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Cholestérol et dérivés',
    description: 'Structure, formes, fonctions, transport, acides biliaires et vitamine D.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Hormones stéroïdiennes : noyaux et origines',
    description: 'Synthèse endocrine, lipophilie et classification estrane/androstane/prégnane.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Fonctions des corticostéroïdes et hormones sexuelles',
    description: 'Aldostérone, cortisol, androgènes, œstrogènes et progestérone.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale de l\u2019ensemble du chapitre.',
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH8_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14SterolsSteroidesSterides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie – Stérols, stéroïdes et stérides',
    questionThemeLabelsByOrder: UE14_BIOCH_CH8_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
