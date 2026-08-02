import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import {
  SECTION_A_ORDER,
  SECTION_A_QUESTIONS,
  SECTION_A_QUIZZES,
  SECTION_A_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.section-a.seed';
import {
  SECTION_B_ORDER,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
  SECTION_B_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.section-b.seed';
import {
  SECTION_C_ORDER,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
  SECTION_C_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.section-c.seed';
import {
  SECTION_D_ORDER,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
  SECTION_D_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.section-d.seed';
import {
  SYNTHESIS_SECTION_ORDER,
  SYNTHESIS_QUESTIONS,
  SYNTHESIS_QUIZZES,
  SYNTHESIS_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'glucides-generalites-structure';

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Généralités, structure et nomenclature des oses`,
    description:
      `Rôles biologiques des glucides, structure générale des oses, formule brute, aldoses, cétoses et nomenclature selon le nombre de carbones.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Chiralité, représentations et filiation`,
    description:
      `Carbones asymétriques, projections de Newman et de Fischer, séries D/L, filiation et calcul du nombre de stéréoisomères.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Isomérie, énantiomérie et épimérie`,
    description:
      `Isomérie de fonction, stéréoisomérie, énantiomères, diastéréoisomères, épimères et conséquences enzymatiques.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Cyclisation, interconversion et pouvoir rotatoire`,
    description:
      `Pyranoses, furanoses, conformations, anomères, équilibre des formes, mutarotation et pouvoir rotatoire.`,
    kind: 'THEME',
  },
  {
    order: SYNTHESIS_SECTION_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Révision transversale de la structure, de la stéréochimie, de la cyclisation, des interconversions et du pouvoir rotatoire des oses.`,
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

const quizSeeds: SeedQuiz[] = [
  ...SECTION_A_QUIZZES,
  ...SECTION_B_QUIZZES,
  ...SECTION_C_QUIZZES,
  ...SECTION_D_QUIZZES,
  ...SYNTHESIS_QUIZZES,
];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  ...SECTION_A_THEME_LABELS_BY_ORDER,
  ...SECTION_B_THEME_LABELS_BY_ORDER,
  ...SECTION_C_THEME_LABELS_BY_ORDER,
  ...SECTION_D_THEME_LABELS_BY_ORDER,
  ...SYNTHESIS_THEME_LABELS_BY_ORDER,
};

export async function seedHealthTrainingUe14GlucidesGeneralitesStructure(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie chapitre 1 – Glucides : généralités et structure',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [
      SECTION_A_ORDER,
      SECTION_B_ORDER,
      SECTION_C_ORDER,
      SECTION_D_ORDER,
      SYNTHESIS_SECTION_ORDER,
    ],
  });
}
