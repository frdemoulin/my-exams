import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-introduction-lipides-acides-gras.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-introduction-lipides-acides-gras.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-introduction-lipides-acides-gras.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-introduction-lipides-acides-gras.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-introduction-lipides-acides-gras.synthesis.seed';
import {
  UE14_BIOCH_CH4_V2_QUIZ_MAP,
  UE14_BIOCH_CH4_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-introduction-lipides-acides-gras.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'introduction-lipides-acides-gras';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Introduction aux lipides, structure et numérotation des acides gras',
    description: 'Définition, classification, structure amphiphile, critères de classement et numérotation.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Acides gras saturés et classes de longueur',
    description: 'Formule générale, parité, acides gras de référence, classes de longueur et nomenclature.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Acides gras désaturés, notations Δ et ω et acides gras indispensables',
    description: 'Mono- et polydésaturation, configuration, positions delta, séries oméga et acides gras essentiels.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Propriétés physiques, estérification et rôles biologiques',
    description: 'Densité, solubilité, interfaces, fusion, réactions, rôles biologiques, trans et oméga 3.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale de la structure, de la nomenclature, des propriétés et des rôles des acides gras.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH4_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14IntroductionLipidesAcidesGras(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Introduction générale aux lipides et acides gras',
    questionThemeLabelsByOrder: UE14_BIOCH_CH4_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
