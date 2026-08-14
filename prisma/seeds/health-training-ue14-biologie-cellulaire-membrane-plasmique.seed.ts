import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-biologie-cellulaire-membrane-plasmique.synthesis.seed';
import {
  UE14_CELL_CH2_V2_QUIZ_MAP,
  UE14_CELL_CH2_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-biologie-cellulaire-membrane-plasmique.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'membrane-plasmique-communication-transports-membranaires';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Structure et composition de la membrane',
    description:
      'Bicouche lipidique, phospholipides, cholestérol, protéines membranaires, modèle de la mosaïque fluide et glycocalyx.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Fluidité, asymétrie et polarité membranaires',
    description:
      'Mouvements lipidiques, flip-flop, asymétrie membranaire, flippases, scramblases et polarité cellulaire.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Communication cellulaire',
    description:
      'Modes de communication autocrine, paracrine, endocrine et synaptique, récepteurs membranaires, RCPG et cascades de signalisation.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Transport membranaire et transport du glucose',
    description:
      'Diffusion simple, perméases, canaux ioniques, pompes ATPasiques, transporteurs ABC et modèle entérocytaire du transport du glucose.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale de l’ensemble du chapitre.',
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

const quizSeeds: SeedQuiz[] = UE14_CELL_CH2_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14BiologieCellulaireMembranePlasmique(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biologie cellulaire — chapitre 2',
    questionThemeLabelsByOrder: UE14_CELL_CH2_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}