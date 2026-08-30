import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH4_SYNTHESIS_V2_QUESTIONS } from './health-training-ue14-systeme-endomembranaire-1-endocytose-exocytose.synthesis.v2.author.seed';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH4_SYNTHESIS_V2_QUESTIONS;

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-synthese-systeme-endomembranaire-i`,
    title: `Synthèse — système endomembranaire I`,
    description: `Révision transversale du chapitre.`,
    stage: 'PRACTICE',
    sectionOrder: 5,
    questionOrders: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-maitrise-systeme-endomembranaire-i`,
    title: `Maîtrise — système endomembranaire I`,
    description: `Questions de synthèse proches d’une situation d’examen.`,
    stage: 'MASTER',
    sectionOrder: 5,
    questionOrders: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],
  }
];
