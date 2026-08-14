import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-1.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-1.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-1.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-1.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-1.synthesis.seed';
import {
  UE14_BIOCH_CH12_V2_QUIZ_MAP,
  UE14_BIOCH_CH12_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-roles-biologiques-proteines-partie-1.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'roles-biologiques-proteines-partie-1';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Immunoglobulines et protection immunitaire',
    description:
      'Antigènes, épitopes, structure H2L2, classes, multimères et fragments Fab/Fc.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Récepteurs nucléaires, métabotropiques et RCPG',
    description:
      'Localisations, domaines, récepteur de l’insuline, protéines G, rhodopsine et récepteurs opioïdes.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Canaux, pompes et transporteurs ABC',
    description:
      'Récepteurs ionotropiques, gradients, Na+/K+-ATPase, P-glycoprotéine et CFTR.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Adhérence cellulaire et jonctions',
    description:
      'Sélectines, cadhérines, Ig-CAM, intégrines, plaques focales et connexines.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH12_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14RolesBiologiquesProteinesPartie1(
  prisma: PrismaClient,
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Rôles biologiques des protéines — partie 1',
    questionThemeLabelsByOrder: UE14_BIOCH_CH12_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
