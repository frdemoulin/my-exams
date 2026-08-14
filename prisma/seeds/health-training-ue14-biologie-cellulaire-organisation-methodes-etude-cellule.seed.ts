import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.synthesis.seed';
import {
  UE14_CELL_CH1_V2_QUIZ_MAP,
  UE14_CELL_CH1_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'organisation-methodes-etude-cellule';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Généralités sur la cellule',
    description:
      'Définition de la cellule, composition chimique, grandes structures cellulaires, fonctions cellulaires majeures et spécificités selon les types cellulaires.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Culture cellulaire : principes',
    description:
      'Définition, intérêt, conditions de culture, matériel, environnement, culture primaire, confluence, passage cellulaire, cultures secondaires et lignées cellulaires.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Types de cultures et modèles',
    description:
      'Cellules circulantes ou issues de tissus, explants, cellules dissociées, modèles 2D, modèles 3D et interface air-liquide.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Marquages moléculaires',
    description:
      'Objectifs des marquages, immunomarquage, hybridation in situ, protéines autofluorescentes, micro-injection de protéines marquées, cellules fixées et cellules vivantes.',
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

const quizSeeds: SeedQuiz[] = UE14_CELL_CH1_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14BiologieCellulaireOrganisationMethodesEtudeCellule(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biologie cellulaire — chapitre 1',
    questionThemeLabelsByOrder: UE14_CELL_CH1_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
