import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH5_SECTION_B_V2_QUESTIONS } from './health-training-ue14-biologie-cellulaire-systeme-endomembranaire-2.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH5_SECTION_B_V2_QUESTIONS;

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-appareil-de-golgi`,
    title: `Appareil de Golgi`,
    description: `Organisation et maturation golgiennes.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-tri-et-exportation-golgiens`,
    title: `Tri et exportation golgiens`,
    description: `TGN, sécrétion et adressage.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  }
];
