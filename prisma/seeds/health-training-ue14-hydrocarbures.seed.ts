import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-hydrocarbures.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-hydrocarbures.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-hydrocarbures.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-hydrocarbures.section-d.seed';
import { SECTION_E_QUESTIONS } from './health-training-ue14-hydrocarbures.section-e.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-hydrocarbures.synthesis.seed';
import {
  UE14_CH7_V2_QUIZ_MAP,
  UE14_CH7_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-hydrocarbures.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'hydrocarbures';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Alcanes et cyclanes`,
    description: `Structure, formule générale, nomenclature et propriétés de base des alcanes et cyclanes.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Alcènes : structure, nomenclature et préparation`,
    description: `Structure des alcènes, nomenclature, isomérie de position et méthodes usuelles de préparation.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Réactions d'addition sur les alcènes`,
    description: `Réactivité de la double liaison et principales réactions d'addition sur les alcènes.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Oxydation des alcènes`,
    description: `Oxydations douces et fortes des alcènes, produits attendus et interprétation structurale.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Alcynes : structure, nomenclature et réactivité`,
    description: `Structure linéaire des alcynes, nomenclature, acidité relative et réactions caractéristiques.`,
    kind: 'THEME',
  },
  {
    order: 6,
    title: `Synthèse : alcanes, alcènes et alcynes`,
    description: `Questions transversales sur la structure, la nomenclature et la réactivité des hydrocarbures saturés et insaturés.`,
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

const quizSeeds: SeedQuiz[] = UE14_CH7_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14Hydrocarbures(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 7 (chimie organique 3)',
    questionThemeLabelsByOrder: UE14_CH7_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
  });
}
