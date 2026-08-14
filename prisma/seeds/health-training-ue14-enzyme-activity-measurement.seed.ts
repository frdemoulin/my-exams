import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-enzyme-activity-measurement.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-enzyme-activity-measurement.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-enzyme-activity-measurement.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-enzyme-activity-measurement.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-enzyme-activity-measurement.synthesis.seed';
import {
  UE14_BIOCH_CH15_V2_QUIZ_MAP,
  UE14_BIOCH_CH15_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-enzyme-activity-measurement.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'mesure-activite-enzymatique';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Déroulement d’une réaction et vitesse initiale',
    description:
      'Phases préstationnaire, stationnaire et post-stationnaire, concentrations et mesure spectrophotométrique.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Unités et paramètres d’activité enzymatique',
    description:
      'UI, katal, concentration catalytique, Kcat, activité spécifique et activité molaire spécifique.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Michaelis-Menten, Km, Vm et représentations',
    description:
      'Ordres de réaction, équation de Michaelis-Menten, saturation, affinité et représentation de Lineweaver-Burk.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Facteurs de variation et inhibiteurs',
    description:
      'Concentrations, pH, température, inhibitions compétitive, non compétitive, incompétitive et mixte.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH15_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14EnzymeActivityMeasurement(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Mesure de l’activité enzymatique',
    questionThemeLabelsByOrder: UE14_BIOCH_CH15_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
