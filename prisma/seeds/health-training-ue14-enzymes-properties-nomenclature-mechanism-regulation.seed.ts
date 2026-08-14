import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.synthesis.seed';
import {
  UE14_BIOCH_CH14_V2_QUIZ_MAP,
  UE14_BIOCH_CH14_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'enzymes-proprietes-nomenclature-mecanisme-action-regulation';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Catalyseurs, propriétés et spécificité enzymatique',
    description:
      'Catalyse biologique, puissance catalytique, spécificité, affinité et exemples de protéases.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Cofacteurs, coenzymes, nomenclature et isoenzymes',
    description:
      'Apoenzyme, holoenzyme, vitamines, nomenclature fonctionnelle et officielle, classes EC et isoenzymes.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Interaction, énergie d’activation et site actif',
    description:
      'Modèles de reconnaissance, diagramme énergétique, complexes ES/EP et mécanisme de la chymotrypsine.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Régulation de l’activité enzymatique',
    description:
      'Allostérie, sous-unités régulatrices, modifications covalentes, protéasome et protéolyse limitée.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale de l\u2019ensemble du chapitre.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH14_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation(
  prisma: PrismaClient,
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel:
      'UE14 Biochimie — Enzymes : propriétés, nomenclature, mécanisme d’action et régulation',
    questionThemeLabelsByOrder: UE14_BIOCH_CH14_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
