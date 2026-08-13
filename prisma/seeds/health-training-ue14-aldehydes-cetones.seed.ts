import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-aldehydes-cetones.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-aldehydes-cetones.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-aldehydes-cetones.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-aldehydes-cetones.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-aldehydes-cetones.synthesis.seed';
import {
  UE14_CH10_V2_QUIZ_MAP,
  UE14_CH10_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-aldehydes-cetones.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'aldehydes-cetones';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Aldéhydes et cétones : reconnaissance et préparation`,
    description: `Reconnaissance des fonctions carbonylées, préparation par oxydation d'alcools ou d'alcènes et réduction contrôlée de dérivés d'acide.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Polarité du carbonyle, réductions par hydrures et additions d'organomagnésiens`,
    description: `Polarisation de la liaison carbonyle, attaque d'hydrures, additions d'organomagnésiens et formation d'alcools.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Réactions avec les amines, fonctionnalisation en position alpha et oxydabilité`,
    description: `Formation d'imines ou d'iminiums, activation de la position alpha et comparaison de l'oxydabilité des aldéhydes et des cétones.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Application aux sucres : caractère réducteur, représentations et cyclisation`,
    description: `Lecture des formes linéaires du glucose et du fructose, caractère réducteur, représentations conventionnelles et cyclisation en hémiacétal.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Consolidation transversale sur les aldéhydes, cétones, additions nucléophiles, oxydoréductions, réactions avec les amines et sucres.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH10_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14AldehydesCetones(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 10 (chimie organique 6)',
    questionThemeLabelsByOrder: UE14_CH10_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
