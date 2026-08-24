import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH4_SECTION_B_V2_QUESTIONS } from './health-training-ue14-systeme-endomembranaire-1-endocytose-exocytose.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH4_SECTION_B_V2_QUESTIONS;

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-transport-vesiculaire`,
    title: `Transport vésiculaire`,
    description: `Revêtements, scission, déshabillage et déplacement.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-amarrage-et-fusion`,
    title: `Amarrage et fusion`,
    description: `Reconnaissance des compartiments, SNARE et fusion membranaire.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  }
];
