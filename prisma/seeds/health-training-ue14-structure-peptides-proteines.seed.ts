import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-structure-peptides-proteines.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-structure-peptides-proteines.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-structure-peptides-proteines.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-structure-peptides-proteines.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-structure-peptides-proteines.synthesis.seed';
import {
  UE14_BIOCH_CH10_V2_QUIZ_MAP,
  UE14_BIOCH_CH10_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-structure-peptides-proteines.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'structure-peptides-proteines';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Liaison peptidique, nomenclature et classification',
    description:
      'Formation des chaînes, extrémités N/C, taille, dénaturation et classes de protéines.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Structure primaire et modifications post-traductionnelles',
    description:
      'Séquence, rigidité de la liaison peptidique, angles φ/ψ, hydroxylation, carboxylation, clivage et ponts disulfure.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Structures secondaire et tertiaire',
    description:
      'Hélices α, feuillets β, coudes, interactions tertiaires, domaines et organisation globulaire.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Structure quaternaire et exemples de complexes',
    description:
      'Sous-unités, homo- et hétéropolymères, créatine kinase, protéines G, LDH et hémoglobine.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH10_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14StructurePeptidesProteines(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Structure des peptides et protéines',
    questionThemeLabelsByOrder: UE14_BIOCH_CH10_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
