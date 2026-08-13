import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-glucides-generalites-structure.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-glucides-generalites-structure.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-glucides-generalites-structure.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-glucides-generalites-structure.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-glucides-generalites-structure.synthesis.seed';
import {
  UE14_BIOCH_CH1_V2_QUIZ_MAP,
  UE14_BIOCH_CH1_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-glucides-generalites-structure.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'glucides-generalites-structure';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Généralités, structure et nomenclature des oses`,
    description: `Rôles biologiques des glucides, structure générale des oses, formule brute, aldoses, cétoses et nomenclature selon le nombre de carbones.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Chiralité, représentations et filiation`,
    description: `Carbones asymétriques, projections de Newman et de Fischer, séries D/L, filiation et calcul du nombre de stéréoisomères.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Isomérie, énantiomérie et épimérie`,
    description: `Isomérie de fonction, stéréoisomérie, énantiomères, diastéréoisomères, épimères et conséquences enzymatiques.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Cyclisation, interconversion et pouvoir rotatoire`,
    description: `Pyranoses, furanoses, conformations, anomères, équilibre des formes, mutarotation et pouvoir rotatoire.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Révision transversale de la structure, de la stéréochimie, de la cyclisation, des interconversions et du pouvoir rotatoire des oses.`,
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH1_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14GlucidesGeneralitesStructure(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie chapitre 1 – Glucides : généralités et structure',
    questionThemeLabelsByOrder: UE14_BIOCH_CH1_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
