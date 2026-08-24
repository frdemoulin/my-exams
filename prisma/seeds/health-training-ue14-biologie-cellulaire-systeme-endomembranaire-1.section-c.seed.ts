import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH4_SECTION_C_V2_QUESTIONS } from './health-training-ue14-systeme-endomembranaire-1-endocytose-exocytose.section-c.v2.author.seed';

export const SECTION_C_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH4_SECTION_C_V2_QUESTIONS;

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-principes-de-l-endocytose`,
    title: `Principes de l’endocytose`,
    description: `Pinocytose, phagocytose et voies par récepteurs.`,
    stage: 'DISCOVER',
    sectionOrder: 3,
    questionOrders: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-flux-vesiculaires-endocytose-exocytose-endosomes-et-recyclage`,
    title: `Endosomes et recyclage`,
    description: `Tri endosomal, LDL, transferrine et recyclage membranaire.`,
    stage: 'PRACTICE',
    sectionOrder: 3,
    questionOrders: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
  }
];
