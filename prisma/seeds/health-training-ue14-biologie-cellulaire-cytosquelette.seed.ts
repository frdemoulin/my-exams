import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.synthesis.seed';
import {
  UE14_CELL_CH3_V2_QUIZ_MAP,
  UE14_CELL_CH3_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-biologie-cellulaire-cytosquelette.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'cytosquelette';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Généralités, structure et organisation des microtubules',
    description:
      'Trois réseaux du cytosquelette, structure des microtubules, centrosome, polarité et structures à microtubules stabilisés.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Polymérisation, fonctions des microtubules et protéines motrices',
    description:
      'Tubuline α/β, GTP, polymérisation, cils et flagelles, transport par kinésine/dynéine et fuseau mitotique.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Microfilaments d’actine : structure, dynamique et fonctions',
    description:
      'Actine G/F, polymérisation ATP-dépendante, protéines associées, microvillosités, anneau contractile et sarcomère.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Migration cellulaire et filaments intermédiaires',
    description:
      'Lamellipodes, filopodes, front migratoire, adhésions focales, filaments intermédiaires, résistance mécanique et cytokératines.',
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

const quizSeeds: SeedQuiz[] = UE14_CELL_CH3_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14BiologieCellulaireCytosquelette(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biologie cellulaire — chapitre 3',
    questionThemeLabelsByOrder: UE14_CELL_CH3_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}