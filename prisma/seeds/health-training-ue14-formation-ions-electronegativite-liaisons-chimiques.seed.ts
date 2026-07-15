import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'formation-ions-electronegativite-liaisons-chimiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Formation des ions`,
    description:
      `Formation des cations et des anions, stabilité électronique et écriture des ions.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Électronégativité`,
    description:
      `Notion d'électronégativité et comparaison de l'aptitude des atomes à attirer les électrons.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Liaisons chimiques`,
    description:
      `Liaisons ioniques, covalentes et premiers repères structuraux autour des liaisons chimiques.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les ions, l'électronégativité et les liaisons chimiques.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: 'decouvrir-formation-ions',
    title: `Découvrir – Formation des ions`,
    description:
      `Premier niveau d'entraînement sur la section A – Formation des ions.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [],
  },
  {
    order: 2,
    slug: 'sentrainer-formation-ions',
    title: `S'entraîner – Formation des ions`,
    description:
      `Niveau intermédiaire d'entraînement sur la section A – Formation des ions.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [],
  },
  {
    order: 1,
    slug: 'decouvrir-electronegativite',
    title: `Découvrir – Électronégativité`,
    description:
      `Premier niveau d'entraînement sur la section B – Électronégativité.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [],
  },
  {
    order: 2,
    slug: 'sentrainer-electronegativite',
    title: `S'entraîner – Électronégativité`,
    description:
      `Niveau intermédiaire d'entraînement sur la section B – Électronégativité.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [],
  },
  {
    order: 1,
    slug: 'decouvrir-liaisons-chimiques',
    title: `Découvrir – Liaisons chimiques`,
    description:
      `Premier niveau d'entraînement sur la section C – Liaisons chimiques.`,
    stage: 'DISCOVER',
    sectionOrder: 3,
    questionOrders: [],
  },
  {
    order: 2,
    slug: 'sentrainer-liaisons-chimiques',
    title: `S'entraîner – Liaisons chimiques`,
    description:
      `Niveau intermédiaire d'entraînement sur la section C – Liaisons chimiques.`,
    stage: 'PRACTICE',
    sectionOrder: 3,
    questionOrders: [],
  },
  {
    order: 1,
    slug: 'synthese-ions-electronegativite-liaisons-chimiques',
    title: `Synthèse – Ions et liaisons chimiques`,
    description:
      `QCM de synthèse transversal sur les ions, l'électronégativité et les liaisons chimiques.`,
    stage: 'MASTER',
    sectionOrder: 4,
    questionOrders: [],
  },
];

export async function seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 2',
    questionThemeLabelsByOrder: {},
    questions,
    sections,
    quizSeeds,
  });
}
