import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH3_OM_DISCOVER_V2_QUESTIONS,
  UE14_CH3_OM_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-orbitales-moleculaires.section-a.v2.author.seed';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH3_OM_DISCOVER_V2_QUESTIONS,
  ...UE14_CH3_OM_PRACTICE_V2_QUESTIONS,
];
