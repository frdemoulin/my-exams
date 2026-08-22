import type { SeedQuestion } from './health-training-ue14.shared';
import {
  UE14_CH2_IONS_ELECTRONEG_DISCOVER_V2_QUESTIONS,
  UE14_CH2_IONS_ELECTRONEG_PRACTICE_V2_QUESTIONS,
} from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-a.v2.author.seed';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH2_IONS_ELECTRONEG_DISCOVER_V2_QUESTIONS,
  ...UE14_CH2_IONS_ELECTRONEG_PRACTICE_V2_QUESTIONS,
];
