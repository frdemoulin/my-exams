import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH3_HYBRIDATION_DISCOVER_V2_QUESTIONS,
  UE14_CH3_HYBRIDATION_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-orbitales-moleculaires.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH3_HYBRIDATION_DISCOVER_V2_QUESTIONS,
  ...UE14_CH3_HYBRIDATION_PRACTICE_V2_QUESTIONS,
];
