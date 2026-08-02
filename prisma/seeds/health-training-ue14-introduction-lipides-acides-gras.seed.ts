import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-introduction-lipides-acides-gras.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-introduction-lipides-acides-gras.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-introduction-lipides-acides-gras.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-introduction-lipides-acides-gras.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-introduction-lipides-acides-gras.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'introduction-lipides-acides-gras';
const sections: SeedSection[] = [
  {
    "order": 1,
    "title": "Nature des lipides et structure des acides gras",
    "description": "Définition, classification, structure amphiphile, critères de classement et numérotation.",
    "kind": "THEME"
  },
  {
    "order": 2,
    "title": "Acides gras saturés et longueurs de chaîne",
    "description": "Formule générale, parité, acides gras de référence, classes de longueur et nomenclature.",
    "kind": "THEME"
  },
  {
    "order": 3,
    "title": "Acides gras désaturés : cis-trans, delta et oméga",
    "description": "Mono- et polydésaturation, configuration, positions delta, séries oméga et acides gras essentiels.",
    "kind": "THEME"
  },
  {
    "order": 4,
    "title": "Propriétés et rôles biologiques des acides gras",
    "description": "Densité, solubilité, interfaces, fusion, réactions, rôles biologiques, trans et oméga 3.",
    "kind": "THEME"
  },
  {
    "order": 5,
    "title": "Synthèse du chapitre",
    "description": "Révision transversale de la structure, de la nomenclature, des propriétés et des rôles des acides gras.",
    "kind": "SYNTHESIS"
  }
];
const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14IntroductionLipidesAcidesGras(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Introduction générale aux lipides et acides gras',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
