export type HealthThemeMasteryStatus =
  | 'TO_REVIEW'
  | 'TO_CONSOLIDATE'
  | 'SOLID'
  | 'INSUFFICIENT_DATA';

export interface HealthThemeSourceMetrics {
  questionsEvaluated: number;
  percentage: number | null;
  correctAnswers?: number;
  score?: number;
  maxScore?: number;
}

export interface HealthThemeProgressItem {
  themeId: string;
  title: string;
  shortTitle: string | null;
  teachingElementIds: string[];
  status: HealthThemeMasteryStatus;
  totalQuestionsEvaluated: number;
  sources: {
    quiz: HealthThemeSourceMetrics | null;
    colles: HealthThemeSourceMetrics | null;
    mockExams: HealthThemeSourceMetrics | null;
  };
}

export interface HealthCourseUnitThemeProgressSummary {
  themes: HealthThemeProgressItem[];
  teachingElements: Array<{
    id: string;
    code: string;
    title: string;
  }>;
  totalFollowedThemes: number;
  hasEnoughDataForAnalysis: boolean;
  excludedDivergentQuestionsCount: number;
}

export type FetchHealthThemeProgressInput = {
  courseUnitId: string;
  teachingElements: Array<{
    id: string;
    code: string | null;
    shortTitle?: string | null;
    title: string;
  }>;
  mockExamIds: string[];
  userId?: string | null;
};
