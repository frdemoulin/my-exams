import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH5_SECTION_D_V2_QUESTIONS } from './health-training-ue14-biologie-cellulaire-systeme-endomembranaire-2.section-d.v2.author.seed';

export const SECTION_D_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH5_SECTION_D_V2_QUESTIONS;

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-flux-et-retention`,
    title: `Flux et rétention`,
    description: `Signaux de rétention et transport rétrograde.`,
    stage: 'DISCOVER',
    sectionOrder: 4,
    questionOrders: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-adressage-intracellulaire`,
    title: `Adressage intracellulaire`,
    description: `Articulation RE–Golgi–endosomes–lysosomes.`,
    stage: 'PRACTICE',
    sectionOrder: 4,
    questionOrders: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
  },
  {
    order: 3,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-maitriser-les-flux-du-sem`,
    title: `Maîtriser les flux du SEM`,
    description: `Raisonnement intégré sur les destinations protéiques.`,
    stage: 'MASTER',
    sectionOrder: 4,
    questionOrders: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  }
];
