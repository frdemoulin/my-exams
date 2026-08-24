import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH4_SECTION_A_V2_QUESTIONS } from './health-training-ue14-systeme-endomembranaire-1-endocytose-exocytose.section-a.v2.author.seed';

export const SECTION_A_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH4_SECTION_A_V2_QUESTIONS;

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-compartiments-du-sem`,
    title: `Compartiments du SEM`,
    description: `Repères structuraux et topologiques du système endomembranaire.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-flux-membranaires`,
    title: `Flux membranaires`,
    description: `Appliquer les principales directions du trafic membranaire.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  }
];
