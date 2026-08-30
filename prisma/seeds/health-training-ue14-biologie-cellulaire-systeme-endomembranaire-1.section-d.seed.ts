import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH4_SECTION_D_V2_QUESTIONS } from './health-training-ue14-systeme-endomembranaire-1-endocytose-exocytose.section-d.v2.author.seed';

export const SECTION_D_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH4_SECTION_D_V2_QUESTIONS;

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-exocytose`,
    title: `Exocytose`,
    description: `Sécrétion constitutive et sécrétion régulée.`,
    stage: 'DISCOVER',
    sectionOrder: 4,
    questionOrders: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-voies-integrees`,
    title: `Voies intégrées`,
    description: `Transcytose et articulation des flux membranaires.`,
    stage: 'PRACTICE',
    sectionOrder: 4,
    questionOrders: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
  },
  {
    order: 3,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-maitriser-le-trafic-membranaire`,
    title: `Maîtriser le trafic membranaire`,
    description: `Raisonnement intégré sur l’adressage et les flux.`,
    stage: 'MASTER',
    sectionOrder: 4,
    questionOrders: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  }
];
