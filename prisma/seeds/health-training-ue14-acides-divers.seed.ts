import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-acides-divers.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-acides-divers.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-acides-divers.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-acides-divers.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-acides-divers.synthesis.seed';
import {
  UE14_CH11_V2_QUIZ_MAP,
  UE14_CH11_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-acides-divers.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'acides-carboxyliques-fonctions-diverses';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Acides carboxyliques : structure, nomenclature, acidité et dérivés activés`,
    description: `Reconnaissance de la fonction acide carboxylique, noms usuels et systématiques, acidité, carboxylate, mésomérie et activation en dérivés d'acides.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Préparation des acides : oxydation, hydrolyses, nitriles et carboxylation des organomagnésiens`,
    description: `Voies de préparation des acides carboxyliques par oxydation, hydrolyse d'esters, d'amides ou de nitriles, et carboxylation par le dioxyde de carbone.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Décarboxylation : bilan carbone, structures favorables et applications biochimiques`,
    description: `Perte de dioxyde de carbone, suivi du bilan carbone, effet des carbonyles voisins et exemples chimiques ou enzymatiques.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Acides, bases et acides nucléiques : bases nucléiques, nucléosides, nucléotides et toxicologie`,
    description: `Définitions électroniques des acides et bases, nucléophilie des bases nucléiques, nucléosides, nucléotides et réactivité des dérivés halogénés électrophiles.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Consolidation transversale sur les acides carboxyliques, leurs préparations, leurs dérivés, la décarboxylation et les acides nucléiques.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH11_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14AcidesDivers(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 11 (chimie organique 7)',
    questionThemeLabelsByOrder: UE14_CH11_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
