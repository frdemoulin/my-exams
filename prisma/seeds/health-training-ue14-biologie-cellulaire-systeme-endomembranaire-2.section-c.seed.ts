import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH5_SECTION_C_V2_QUESTIONS } from './health-training-ue14-biologie-cellulaire-systeme-endomembranaire-2.section-c.v2.author.seed';

export const SECTION_C_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH5_SECTION_C_V2_QUESTIONS;

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-lysosomes`,
    title: `Lysosomes`,
    description: `Hydrolases acides et fonctions lysosomales.`,
    stage: 'DISCOVER',
    sectionOrder: 3,
    questionOrders: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-adressage-lysosomal`,
    title: `Adressage lysosomal`,
    description: `M6P, endosomes et pathologies lysosomales.`,
    stage: 'PRACTICE',
    sectionOrder: 3,
    questionOrders: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
  }
];
