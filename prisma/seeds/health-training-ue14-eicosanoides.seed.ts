import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-eicosanoides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-eicosanoides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-eicosanoides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-eicosanoides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-eicosanoides.synthesis.seed';
import {
  UE14_BIOCH_CH5_V2_QUIZ_MAP,
  UE14_BIOCH_CH5_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-eicosanoides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'eicosanoides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Généralités, acide arachidonique et voies COX/lipoxygénases',
    description: 'Familles d\u2019eicosanoïdes, structure et nomenclature de l\u2019acide arachidonique, voies COX et lipoxygénases.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Structure et nomenclature des prostanoïdes',
    description: 'Acide prostanoïque, noyau cyclopentane, groupes, séries et lecture des noms de prostaglandines.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Rôles biologiques, équilibre TXA\u2082/PGI\u2082 et thérapeutique',
    description: 'Médiateurs locaux, PGE\u2081/PGE\u2082, PGF\u2082\u03B1, misoprostol, TXA\u2082, PGI\u2082 et inhibition de la COX.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Leucotriènes, lipoxines et voies de LTA\u2084',
    description: 'Structure, cellules productrices, effets, LTA\u2084 et voies vers LXA\u2084, LTB\u2084, LTC\u2084, LTD\u2084 et LTE\u2084.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale des voies, structures, fonctions et applications thérapeutiques.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH5_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14Eicosanoides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie – Les eicosanoïdes',
    questionThemeLabelsByOrder: UE14_BIOCH_CH5_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
