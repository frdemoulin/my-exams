import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-osides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-osides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-osides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-osides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-osides.synthesis.seed';
import {
  UE14_BIOCH_CH3_V2_QUIZ_MAP,
  UE14_BIOCH_CH3_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-osides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'osides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Diholosides, liaisons glycosidiques et hydrolyse',
    description: 'Classification des osides, condensation, hydrolyse, lactose, saccharose et maltose.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Amidon et glycogène',
    description: 'Polyosides, amylose, amylopectine, amidon, glycogène et digestion.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Cellulose, fibres et premiers GAG',
    description: 'Cellulose, fibres végétales, structure générale des GAG, acide hyaluronique et chondroïtine sulfate.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'GAG sulfatés et glycoconjugués',
    description: 'Dermatane, kératane, héparane, héparine, protéoglycanes et glycoprotéines.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale des structures, liaisons, propriétés et rôles biologiques des osides.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH3_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14Osides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie chapitre 3 – Les osides',
    questionThemeLabelsByOrder: UE14_BIOCH_CH3_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
