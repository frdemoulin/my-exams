import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';
import { UE14_BIOCELL_CH5_SECTION_A_V2_QUESTIONS } from './health-training-ue14-biologie-cellulaire-systeme-endomembranaire-2.section-a.v2.author.seed';

export const SECTION_A_QUESTIONS: SeedQuestion[] = UE14_BIOCELL_CH5_SECTION_A_V2_QUESTIONS;

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-reticulum-endoplasmique`,
    title: `Réticulum endoplasmique`,
    description: `Adressage, translocation et maturation dans le RE.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    order: 2,
    slug: `systeme-endomembranaire-reticulum-endoplasmique-golgi-lysosomes-fonctions-specialisees-du-re`,
    title: `Fonctions spécialisées du RE`,
    description: `Contrôle qualité, lipides, calcium et autres fonctions du RE.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  }
];
