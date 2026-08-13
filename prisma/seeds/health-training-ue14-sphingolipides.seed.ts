import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-sphingolipides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-sphingolipides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-sphingolipides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-sphingolipides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-sphingolipides.synthesis.seed';
import {
  UE14_BIOCH_CH7_V2_QUIZ_MAP,
  UE14_BIOCH_CH7_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-sphingolipides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'sphingolipides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Sphingosine et céramides',
    description: 'Structure de la sphingosine, formation et fonctions des céramides.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Sphingomyéline et phosphosphingolipides',
    description: 'Structure, dégradation et rôles dans le tissu nerveux.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Glycosphingolipides, cérébrosides et gangliosides',
    description: 'Têtes glucidiques, exemples et nomenclature.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Métabolisme et sphingolipidoses',
    description: 'Catabolisme, médiateurs et maladies d\u2019accumulation.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH7_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14Sphingolipides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie – Les sphingolipides',
    questionThemeLabelsByOrder: UE14_BIOCH_CH7_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
