import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH5_SYNTHESIS_V2_QUESTIONS } from './health-training-ue14-biologie-cellulaire-systeme-endomembranaire-2.synthesis.v2.author.seed';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH5_SYNTHESIS_V2_QUESTIONS;

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-synthese-systeme-endomembranaire-ii`,
    title: `Synthèse — système endomembranaire II`,
    description: `Révision transversale du chapitre.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-maitrise-systeme-endomembranaire-ii`,
    title: `Maîtrise — système endomembranaire II`,
    description: `Questions de synthèse proches d’une situation d’examen.`,
    stage: 'MASTER',
    sectionOrder: 5,
    questionOrders: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],
  }
];
