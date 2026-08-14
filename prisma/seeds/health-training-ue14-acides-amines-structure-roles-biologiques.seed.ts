import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-acides-amines-structure-roles-biologiques.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-acides-amines-structure-roles-biologiques.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-acides-amines-structure-roles-biologiques.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-acides-amines-structure-roles-biologiques.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-acides-amines-structure-roles-biologiques.synthesis.seed';
import {
  UE14_BIOCH_CH9_V2_QUIZ_MAP,
  UE14_BIOCH_CH9_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-acides-amines-structure-roles-biologiques.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'acides-amines-structure-roles-biologiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Généralités, structure commune et nomenclature',
    description:
      'Acides aminés protéinogènes, structure α-aminée, radical R, nomenclature et caractère essentiel.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Classification selon la nature du radical',
    description:
      'Acides aminés aliphatiques, branchés, hydroxylés, soufrés, acides, amides et basiques.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Aromatiques, proline, polarité et chiralité',
    description:
      'Acides aminés aromatiques, proline, classes de polarité, solubilité et stéréochimie.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Propriétés spectrales, ionisation et réactions chimiques',
    description:
      'Absorption UV, amphotérie, zwitterion, point isoélectrique et réaction à la ninhydrine.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH9_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14AcidesAminesStructureRolesBiologiques(
  prisma: PrismaClient,
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Acides aminés : structure et rôles biologiques',
    questionThemeLabelsByOrder: UE14_BIOCH_CH9_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
