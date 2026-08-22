import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.section-d.seed';
import { SECTION_E_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.section-e.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-isomerie-enantiomerie.synthesis.seed';
import {
  UE14_CH6_V2_QUIZ_MAP,
  UE14_CH6_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-isomerie-enantiomerie.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'isomerie-enantiomerie';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Les différentes formes d'isomérie`,
    description: `Introduction aux principales formes d'isomérie rencontrées en chimie organique.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Isomérie géométrique : configurations E et Z`,
    description: `Reconnaissance de l'isomérie géométrique et attribution des configurations E et Z.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Chiralité, énantiomères et diastéréoisomères`,
    description: `Identification d'un centre chiral et distinction entre énantiomères et diastéréoisomères.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Configuration absolue R/S et règles de Cahn-Ingold-Prelog`,
    description: `Application des règles de priorité de Cahn-Ingold-Prelog pour attribuer une configuration absolue R ou S.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Pouvoir rotatoire et composition des mélanges`,
    description: `Lien entre chiralité, activité optique, mélange racémique et composition d'un mélange d'énantiomères.`,
    kind: 'THEME',
  },
  {
    order: 6,
    title: `Synthèse`,
    description: `Consolidation transversale sur les différentes formes d'isomérie, l'attribution E/Z et R/S, la chiralité et le pouvoir rotatoire.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SECTION_E_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = UE14_CH6_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14IsomerieEnantiomerie(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 6 (chimie organique 2)',
    questionThemeLabelsByOrder: UE14_CH6_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
  });
}
