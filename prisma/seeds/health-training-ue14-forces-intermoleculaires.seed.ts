import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-forces-intermoleculaires.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-forces-intermoleculaires.section-b.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-forces-intermoleculaires.synthesis.seed';
import {
  UE14_CH4_V2_QUIZ_MAP,
  UE14_CH4_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-forces-intermoleculaires.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'forces-intermoleculaires';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Polarité des molécules`,
    description: `Polarisation des liaisons et polarité globale des molécules.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Interactions entre molécules`,
    description: `Principales interactions intermoléculaires et conséquences physico-chimiques.`,
    kind: 'THEME',
  },
  {
    order: 3,
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

const quizSeeds: SeedQuiz[] = UE14_CH4_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14ForcesIntermoleculaires(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 4',
    questionThemeLabelsByOrder: UE14_CH4_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [1, 2, 3],
  });
}
