import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-2.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-2.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-2.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-2.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-roles-biologiques-proteines-partie-2.synthesis.seed';
import {
  UE14_BIOCH_CH13_V2_QUIZ_MAP,
  UE14_BIOCH_CH13_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-roles-biologiques-proteines-partie-2.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'roles-biologiques-proteines-partie-2';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Moteurs moléculaires et transport sanguin',
    description:
      'Myosines, hémoglobine, anomalies du transport de l’oxygène et albumine.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Énergie, matrice extracellulaire et collagènes',
    description:
      'Apolipoprotéines, rôle énergétique des protéines, matrice extracellulaire et principes généraux des collagènes.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Structure et assemblage des collagènes',
    description:
      'Chaîne α, triple hélice, fibrilles de type I, collagène IV et liaisons croisées.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Glycoprotéines matricielles et cytosquelette',
    description:
      'Glycoprotéines matricielles, actine, microtubules et fonctions mécaniques du cytosquelette.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH13_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14RolesBiologiquesProteinesPartie2(
  prisma: PrismaClient,
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Rôles biologiques des protéines — partie 2',
    questionThemeLabelsByOrder: UE14_BIOCH_CH13_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
