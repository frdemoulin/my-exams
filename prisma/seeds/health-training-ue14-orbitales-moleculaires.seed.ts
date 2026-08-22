import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.synthesis.seed';
import {
  UE14_CH3_V2_QUIZ_MAP,
  UE14_CH3_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-orbitales-moleculaires.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'orbitales-moleculaires';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Orbitales moléculaires et liaisons σ/π`,
    description:
      `Construction des orbitales moléculaires et distinction entre liaisons $\\sigma$ et $\\pi$.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Hybridation et géométrie des molécules simples`,
    description:
      `Hybridation des orbitales atomiques et géométrie des molécules simples.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Liaisons multiples, carbone et aromaticité`,
    description:
      `Liaisons multiples, carbone insaturé et premières notions d'aromaticité.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Règle de Gillespie et géométrie moléculaire`,
    description:
      `Application de la règle de Gillespie à la géométrie moléculaire.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les orbitales moléculaires et la géométrie moléculaire.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH3_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14OrbitalesMoleculaires(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 3',
    questionThemeLabelsByOrder: UE14_CH3_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [1, 2, 3, 4, 5],
  });
}
