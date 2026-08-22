import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-esters-amides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-esters-amides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-esters-amides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-esters-amides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-esters-amides.synthesis.seed';
import {
  UE14_CH9_V2_QUIZ_MAP,
  UE14_CH9_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-esters-amides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'esters-amides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Fonctions ester et amide : structure, préparation et intérêt biologique`,
    description: `Reconnaissance des fonctions ester et amide, préparation à partir d'acides activés, intérêt biologique des amides et liaison peptidique.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Esters : hydrolyse, polarisation et réactivité`,
    description: `Hydrolyse acide, saponification, polarisation de la fonction ester et principaux centres réactifs.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Amides : hydrolyse, sélectivité et propriétés électroniques`,
    description: `Hydrolyse des amides, sélectivité vis-à-vis des esters, hydrolyses enzymatiques et délocalisation du doublet de l'azote.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Thioesters et acétyl-CoA`,
    description: `Structure, préparation, hydrolyse et réactivité des thioesters, avec l'exemple biologique de l'acétyl-CoA.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Consolidation transversale sur les esters, amides, thioesters, hydrolyses, sélectivités et dérivés d'acide d'intérêt biologique.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH9_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14EstersAmides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 9 (chimie organique 5)',
    questionThemeLabelsByOrder: UE14_CH9_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
