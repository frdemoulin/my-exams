import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH2_LIAISONS_DISCOVER_V2_QUESTIONS,
  UE14_CH2_LIAISONS_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-b.v2.author.seed';

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH2_LIAISONS_DISCOVER_V2_QUESTIONS,
  ...UE14_CH2_LIAISONS_PRACTICE_V2_QUESTIONS,
];
