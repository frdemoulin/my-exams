import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH4_INTERACTIONS_DISCOVER_V2_QUESTIONS,
  UE14_CH4_INTERACTIONS_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-forces-intermoleculaires.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH4_INTERACTIONS_DISCOVER_V2_QUESTIONS,
  ...UE14_CH4_INTERACTIONS_PRACTICE_V2_QUESTIONS,
];
