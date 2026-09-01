import type { HealthCourseUnitEvaluationsProgress } from "@/core/health-mock-exam/health-mock-exam.types";
import type { HealthStudentCourseUnitDetail } from "./health.queries";

export interface HealthCourseUnitProgressSummary {
  courseUnitId: string;

  // 1. Vue d'ensemble (Avancements uniquement - pas de moyenne ni score agrégé)
  overview: {
    trainingQuizzes: {
      completed: number;
      total: number;
      percentage: number;
    };
    colles: {
      completed: number;
      total: number;
      percentage: number;
    };
    mockExams: {
      completed: number;
      total: number;
      percentage: number;
    };
  };

  // 2. Section Entraînement par EC
  training: {
    byTeachingElement: Array<{
      teachingElementId: string;
      code: string;
      title: string;
      completedQuizzes: number;
      masteredQuizzes: number;
      totalQuizzes: number;
      completionPercentage: number;
      masteryPercentage: number;
    }>;
  };

  // 3. Section Colles
  colles: {
    completedCount: number;
    totalCount: number;
    averageScorePercentage: number | null;
    bestScorePercentage: number | null;
    colleResults: Array<{
      colleId: string;
      code: string;
      title: string;
      attemptCount: number;
      latestPercentage: number | null;
      bestPercentage: number | null;
    }>;
  };

  // 4. Section Examens Blancs
  mockExams: {
    completedCount: number;
    totalCount: number;
    averageScorePercentage: number | null;
    bestScorePercentage: number | null;
    examResults: Array<{
      examId: string;
      slug: string;
      title: string;
      attemptCount: number;
      latestPercentage: number | null;
      bestPercentage: number | null;
      bySection: Array<{
        sectionId: string;
        code: string;
        title: string;
        percentageOnBestAttempt: number | null;
      }>;
    }>;
  };
}

export type FetchHealthCourseUnitProgressInput = {
  courseUnit: HealthStudentCourseUnitDetail;
  evaluationsProgress: HealthCourseUnitEvaluationsProgress;
  userId?: string | null;
};
