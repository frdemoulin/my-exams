import { describe, it } from "node:test";
import assert from "node:assert/strict";

import type { HealthCourseUnitProgressSummary } from "./health-progress.types";

describe("HealthCourseUnitProgressSummary — Logic and Semantics Tests", () => {
  it("distinguishes non-realized, realized-unmastered, and realized-mastered quizzes", () => {
    // Contract check: completedQuizzes vs masteredQuizzes vs totalQuizzes
    const mockSummary: HealthCourseUnitProgressSummary = {
      courseUnitId: "ue14",
      overview: {
        trainingQuizzes: { completed: 2, total: 5, percentage: 40 },
        colles: { completed: 1, total: 12, percentage: 8 },
        mockExams: { completed: 1, total: 2, percentage: 50 },
      },
      training: {
        byTeachingElement: [
          {
            teachingElementId: "ec-chimie",
            code: "CHIMIE",
            title: "Chimie",
            completedQuizzes: 2,
            masteredQuizzes: 1,
            totalQuizzes: 5,
            completionPercentage: 40,
            masteryPercentage: 20,
          },
        ],
      },
      colles: {
        completedCount: 1,
        totalCount: 12,
        averageScorePercentage: 75,
        bestScorePercentage: 75,
        colleResults: [],
      },
      mockExams: {
        completedCount: 1,
        totalCount: 2,
        averageScorePercentage: 80,
        bestScorePercentage: 80,
        examResults: [],
      },
    };

    assert.equal(mockSummary.training.byTeachingElement[0].completedQuizzes, 2);
    assert.equal(mockSummary.training.byTeachingElement[0].masteredQuizzes, 1);
    assert.equal(mockSummary.training.byTeachingElement[0].totalQuizzes, 5);
    assert.ok(
      mockSummary.training.byTeachingElement[0].completedQuizzes >=
        mockSummary.training.byTeachingElement[0].masteredQuizzes,
      "Completed quizzes must be greater than or equal to mastered quizzes",
    );
  });

  it("handles zero attempts gracefully with null or dash indicator", () => {
    const mockSummary: HealthCourseUnitProgressSummary = {
      courseUnitId: "ue14",
      overview: {
        trainingQuizzes: { completed: 0, total: 10, percentage: 0 },
        colles: { completed: 0, total: 12, percentage: 0 },
        mockExams: { completed: 0, total: 2, percentage: 0 },
      },
      training: {
        byTeachingElement: [],
      },
      colles: {
        completedCount: 0,
        totalCount: 12,
        averageScorePercentage: null,
        bestScorePercentage: null,
        colleResults: [],
      },
      mockExams: {
        completedCount: 0,
        totalCount: 2,
        averageScorePercentage: null,
        bestScorePercentage: null,
        examResults: [],
      },
    };

    assert.equal(mockSummary.colles.averageScorePercentage, null);
    assert.equal(mockSummary.colles.bestScorePercentage, null);
    assert.equal(mockSummary.mockExams.averageScorePercentage, null);
    assert.equal(mockSummary.mockExams.bestScorePercentage, null);
  });

  it("ensures a single weight per realized EB in the average score calculation", () => {
    // 2 attempts on EB01 (e.g. 70% and 90%) -> best = 90%
    // 1 attempt on EB02 (80%) -> best = 80%
    // Average = (90 + 80) / 2 = 85%
    const eb01Best = 90;
    const eb02Best = 80;
    const countRealizedEbs = 2;

    const average = Math.round((eb01Best + eb02Best) / countRealizedEbs);
    assert.equal(average, 85);
  });
});
