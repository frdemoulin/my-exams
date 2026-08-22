import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH1_ORGANISATION_DISCOVER_V2_QUESTIONS,
  UE14_CH1_ORGANISATION_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-elements-chimiques-classification-periodique.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH1_ORGANISATION_DISCOVER_V2_QUESTIONS,
  ...UE14_CH1_ORGANISATION_PRACTICE_V2_QUESTIONS,
];
