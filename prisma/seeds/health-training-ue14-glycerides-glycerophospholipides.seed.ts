import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-glycerides-glycerophospholipides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-glycerides-glycerophospholipides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-glycerides-glycerophospholipides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-glycerides-glycerophospholipides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-glycerides-glycerophospholipides.synthesis.seed';
import {
  UE14_BIOCH_CH6_V2_QUIZ_MAP,
  UE14_BIOCH_CH6_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glycerides-glycerophospholipides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'glycerides-glycerophospholipides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Glycérol et acylglycérols',
    description: 'Structure du glycérol et classification des mono-, di- et triacylglycérols.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Triacylglycérols : propriétés, stockage et rôles',
    description: 'Propriétés physiques, réserve énergétique, protection et huile de palme.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Acide phosphatidique et classes de glycérophospholipides',
    description: 'Structure, têtes polaires et principales séries.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Membranes, phospholipases, signalisation et plasmalogènes',
    description: 'Bicouches, liposomes, sites enzymatiques, PIP2, PI3K-AKT et PAF.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH6_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14GlyceridesGlycerophospholipides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie – Glycérides et glycérophospholipides',
    questionThemeLabelsByOrder: UE14_BIOCH_CH6_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
