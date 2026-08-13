import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.synthesis.seed';
import {
  UE14_CH8_V2_QUIZ_MAP,
  UE14_CH8_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'derives-monofonctionnels-alcools-amines-halogenes';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Alcools : propriétés et préparation`,
    description: `Définition de la fonction alcool, propriétés physiques majeures, classification des alcools et voies usuelles de préparation.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Réactivité des alcools`,
    description: `Transformations caractéristiques des alcools, notamment oxydation, déshydratation et substitution du groupe hydroxyle.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Amines : structure et réactivité`,
    description: `Structure des amines, caractère basique, nucléophilie de l'azote et réactions usuelles associées.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Dérivés halogénés et substitutions nucléophiles`,
    description: `Reconnaissance des dérivés halogénés, polarisation de la liaison carbone-halogène et mécanismes de substitution nucléophile.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Vue d'ensemble sur les alcools, amines et dérivés halogénés, avec mise en relation des propriétés, préparations et réactivités.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH8_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 8 (chimie organique 4)',
    questionThemeLabelsByOrder: UE14_CH8_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
