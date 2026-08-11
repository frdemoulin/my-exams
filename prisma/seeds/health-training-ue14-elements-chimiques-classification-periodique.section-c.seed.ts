import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH1_CLASSIFICATION_DISCOVER_V2_QUESTIONS,
  UE14_CH1_CLASSIFICATION_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-elements-chimiques-classification-periodique.section-c.v2.author.seed';

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH1_CLASSIFICATION_DISCOVER_V2_QUESTIONS,
  ...UE14_CH1_CLASSIFICATION_PRACTICE_V2_QUESTIONS,
];
