export type HealthColleBadgeType = 'TRANSVERSALE' | 'CUMULATIVE' | 'CUMULATIVE_EC' | 'GRANDE_COLLE';

export type HealthColleV1 = {
  id: string;
  code: string; // e.g. 'C01'
  title: string;
  dominantPerimeter: string; // e.g. 'Chimie générale Ch1→4'
  questionCount: number;
  durationMinutes: number;
  durationLabel: string; // e.g. '30 min' or '37 min 30'
  badgeType: HealthColleBadgeType;
  badgeLabel: string;
  ecCode?: string; // e.g. 'Chimie', 'Biochimie', 'Biologie cellulaire' or 'UE14'
  recommendedAfterChapter?: string;
  description?: string;
};
