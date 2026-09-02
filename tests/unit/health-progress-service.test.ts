import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  filterCompletedQuizIds,
  filterMasteredQuizIds,
  computeTrainingOverviewMetrics,
  computeTrainingElementMetrics,
  selectBestMockExamAttempt,
  computeMockExamOverviewMetrics,
} from "../../src/core/health/health-progress.service";

describe("HealthProgressService — Production Logic & Business Rules", () => {
  describe("Training Quiz Status Filtering", () => {
    it("considers ONLY attempts with status COMPLETED as realized", () => {
      const attempts = [
        { quizId: "quiz-1", status: "IN_PROGRESS" },
        { quizId: "quiz-2", status: "ABANDONED" },
        { quizId: "quiz-3", status: "COMPLETED" },
        { quizId: "quiz-4", status: "IN_PROGRESS" },
        { quizId: "quiz-4", status: "COMPLETED" }, // multi-attempts: 1 in progress + 1 completed
      ];

      const completedIds = filterCompletedQuizIds(attempts);

      assert.equal(completedIds.has("quiz-1"), false, "IN_PROGRESS alone must NOT be realized");
      assert.equal(completedIds.has("quiz-2"), false, "ABANDONED alone must NOT be realized");
      assert.equal(completedIds.has("quiz-3"), true, "COMPLETED must be realized");
      assert.equal(completedIds.has("quiz-4"), true, "At least one COMPLETED makes quiz realized");
      assert.equal(completedIds.size, 2);
    });

    it("treats realized and mastered as two orthogonal canonical states", () => {
      // Cas A: COMPLETED + masteredAt != null => réalisé et maîtrisé
      // Cas B: COMPLETED + masteredAt == null => réalisé mais non maîtrisé
      // Cas C: Pas de COMPLETED + masteredAt != null => non réalisé mais maîtrisé (état canonique préservé sans réécriture)
      const attempts = [{ quizId: "quiz-a", status: "COMPLETED" }, { quizId: "quiz-b", status: "COMPLETED" }];
      const progressEntries = [
        { quizId: "quiz-a", masteredAt: new Date("2026-01-01") },
        { quizId: "quiz-b", masteredAt: null },
        { quizId: "quiz-c", masteredAt: new Date("2026-01-02") },
      ];

      const completedSet = filterCompletedQuizIds(attempts);
      const masteredSet = filterMasteredQuizIds(progressEntries);

      // Quiz A
      assert.equal(completedSet.has("quiz-a"), true);
      assert.equal(masteredSet.has("quiz-a"), true);

      // Quiz B
      assert.equal(completedSet.has("quiz-b"), true);
      assert.equal(masteredSet.has("quiz-b"), false);

      // Quiz C (masteredAt != null sans tentative COMPLETED)
      assert.equal(completedSet.has("quiz-c"), false, "Quiz C has no COMPLETED attempt => realized is false");
      assert.equal(masteredSet.has("quiz-c"), true, "Quiz C has masteredAt !== null => mastered is true");
    });
  });

  describe("Training Deduplication and Overview Metrics", () => {
    it("deduplicates quizzes at UE level even if quizzes were referenced in multiple ECs", () => {
      const ec1Quizzes = ["quiz-shared", "quiz-ec1-only"];
      const ec2Quizzes = ["quiz-shared", "quiz-ec2-only"];

      // Union dédupliquée à l'échelle UE
      const allUniqueUeQuizIds = Array.from(new Set([...ec1Quizzes, ...ec2Quizzes]));
      assert.equal(allUniqueUeQuizIds.length, 3, "Total unique quizzes should be 3, not 4");

      const completedSet = new Set(["quiz-shared"]);
      const overview = computeTrainingOverviewMetrics(allUniqueUeQuizIds, completedSet);

      assert.equal(overview.total, 3);
      assert.equal(overview.completed, 1);
      assert.equal(overview.percentage, 33);
    });

    it("computes EC-specific metrics independently", () => {
      const ecQuizIds = ["q1", "q2", "q3", "q4"];
      const completedSet = new Set(["q1", "q2"]);
      const masteredSet = new Set(["q1"]);

      const metrics = computeTrainingElementMetrics(ecQuizIds, completedSet, masteredSet);

      assert.equal(metrics.totalQuizzes, 4);
      assert.equal(metrics.completedQuizzes, 2);
      assert.equal(metrics.masteredQuizzes, 1);
      assert.equal(metrics.completionPercentage, 50);
      assert.equal(metrics.masteryPercentage, 25);
    });
  });

  describe("Mock Exam Best Attempt Selection (Deterministic)", () => {
    it("selects the attempt with the highest percentage", () => {
      const attempts = [
        { id: "att-1", percentage: 65, submittedAt: "2026-02-01T10:00:00Z" },
        { id: "att-2", percentage: 85, submittedAt: "2026-02-02T10:00:00Z" },
        { id: "att-3", percentage: 75, submittedAt: "2026-02-03T10:00:00Z" },
      ];

      const best = selectBestMockExamAttempt(attempts);
      assert.ok(best);
      assert.equal(best.id, "att-2");
      assert.equal(best.percentage, 85);
    });

    it("uses submittedAt as tie-break when percentages are identical", () => {
      const attempts = [
        { id: "att-older", percentage: 80, submittedAt: "2026-02-01T10:00:00Z" },
        { id: "att-newer", percentage: 80, submittedAt: "2026-02-05T10:00:00Z" },
      ];

      const best = selectBestMockExamAttempt(attempts);
      assert.ok(best);
      assert.equal(best.id, "att-newer", "The more recent submitted attempt must be chosen");
    });

    it("uses createdAt and id as fallback stable tie-break when submittedAt are identical", () => {
      const attempts = [
        { id: "att-b", percentage: 80, submittedAt: "2026-02-01T10:00:00Z", createdAt: "2026-02-01T08:00:00Z" },
        { id: "att-a", percentage: 80, submittedAt: "2026-02-01T10:00:00Z", createdAt: "2026-02-01T08:00:00Z" },
      ];

      const best = selectBestMockExamAttempt(attempts);
      assert.ok(best);
      assert.equal(best.id, "att-b");
    });

    it("ignores attempts without percentage", () => {
      const attempts = [
        { id: "att-null", percentage: null, submittedAt: "2026-02-01T10:00:00Z" },
        { id: "att-valid", percentage: 70, submittedAt: "2026-02-01T09:00:00Z" },
      ];

      const best = selectBestMockExamAttempt(attempts);
      assert.ok(best);
      assert.equal(best.id, "att-valid");
    });
  });

  describe("Mock Exam Overview Metrics & Realized vs Scored Semantics", () => {
    it("counts an exam as realized if attemptCount > 0, independently of scores", () => {
      const exams = [
        { id: "eb-01", attemptCount: 2, bestPercentage: 80 },
        { id: "eb-02", attemptCount: 1, bestPercentage: null }, // Réalisé mais sans score exploitable
        { id: "eb-03", attemptCount: 0, bestPercentage: null }, // Non réalisé
      ];

      const overview = computeMockExamOverviewMetrics(exams);

      assert.equal(overview.totalCount, 3);
      assert.equal(overview.completedCount, 2, "eb-01 and eb-02 must be counted as realized");
      assert.equal(overview.percentage, 67); // 2/3 = 67%
    });

    it("calculates average score strictly over realized exams WITH a score (1 weight per EB, no 0% injection)", () => {
      const exams = [
        { id: "eb-01", attemptCount: 3, bestPercentage: 90 }, // best of 3 attempts = 90%
        { id: "eb-02", attemptCount: 1, bestPercentage: 70 }, // best of 1 attempt = 70%
        { id: "eb-03", attemptCount: 1, bestPercentage: null }, // Réalisé mais pas de score exploitable
        { id: "eb-04", attemptCount: 0, bestPercentage: null }, // Non réalisé
      ];

      const overview = computeMockExamOverviewMetrics(exams);

      // Moyenne = (90 + 70) / 2 = 80 %
      // Le dénominateur est 2 (les 2 EB disposant d'un score), pas 3 (completedCount) ni 4 (totalCount)
      assert.equal(overview.averageScorePercentage, 80);
      assert.equal(overview.bestScorePercentage, 90);
    });

    it("returns null for average and best score when no realized exam has a score", () => {
      const exams = [
        { id: "eb-01", attemptCount: 1, bestPercentage: null },
        { id: "eb-02", attemptCount: 0, bestPercentage: null },
      ];

      const overview = computeMockExamOverviewMetrics(exams);

      assert.equal(overview.completedCount, 1);
      assert.equal(overview.averageScorePercentage, null);
      assert.equal(overview.bestScorePercentage, null);
    });
  });
});
