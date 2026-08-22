import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH4_SYNTHESIS_MASTER_V2_QUESTIONS,
  UE14_CH4_SYNTHESIS_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-forces-intermoleculaires.synthesis.v2.author.seed';

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH4_SYNTHESIS_PRACTICE_V2_QUESTIONS,
  ...UE14_CH4_SYNTHESIS_MASTER_V2_QUESTIONS,
];
