import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-oses-simples-derives.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-oses-simples-derives.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-oses-simples-derives.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-oses-simples-derives.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-oses-simples-derives.synthesis.seed';
import {
  UE14_BIOCH_CH2_V2_QUIZ_MAP,
  UE14_BIOCH_CH2_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-oses-simples-derives.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'oses-simples-derives';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Principaux oses simples et propriétés',
    description: 'Glucose, galactose, mannose, fructose, ribose, trioses, propriétés physiques et pouvoir réducteur.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Oxydation, réduction et polyols',
    description: 'Acide glucuronique, glucuronoconjugaison, glycérol, mannitol et sorbitol.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Osamines et acides sialiques',
    description: 'Osamines, dérivés N-acétylés, chitine, NANA, charge et reconnaissance cellulaire.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Oses estérifiés et autres dérivés',
    description: 'Esters phosphoriques et sulfuriques, métabolites phosphorylés, vitamine C et streptomycine.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale des principaux oses, de leurs propriétés et de leurs dérivés biologiques.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH2_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14OsesSimplesDerives(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie chapitre 2 – Oses simples et dérivés',
    questionThemeLabelsByOrder: UE14_BIOCH_CH2_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
