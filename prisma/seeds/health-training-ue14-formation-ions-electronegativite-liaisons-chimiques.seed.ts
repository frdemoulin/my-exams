import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-b.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.synthesis.seed';
import {
  UE14_CH2_V2_QUIZ_MAP,
  UE14_CH2_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'formation-ions-electronegativite-liaisons-chimiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Formation des ions et électronégativité`,
    description:
      `Formation des cations et des anions, énergie d'ionisation, affinité électronique et comparaison de l'aptitude des atomes à attirer les électrons.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Liaisons chimiques`,
    description:
      `Liaisons ioniques, covalentes et premiers repères structuraux autour des liaisons chimiques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les ions, l'électronégativité et les liaisons chimiques.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = UE14_CH2_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 2',
    questionThemeLabelsByOrder: UE14_CH2_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [1, 2, 3],
  });
}
