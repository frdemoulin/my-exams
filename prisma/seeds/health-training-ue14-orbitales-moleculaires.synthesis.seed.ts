import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH3_SYNTHESIS_MASTER_V2_QUESTIONS,
  UE14_CH3_SYNTHESIS_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-orbitales-moleculaires.synthesis.v2.author.seed';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH3_SYNTHESIS_PRACTICE_V2_QUESTIONS,
  ...UE14_CH3_SYNTHESIS_MASTER_V2_QUESTIONS,
];
