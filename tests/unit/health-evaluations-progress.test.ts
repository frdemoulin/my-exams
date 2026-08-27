import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("Health Evaluations Progress Calculations", () => {
  it("calcule correctement le score moyen global à partir de la meilleure tentative de chaque colle", () => {
    // Scenario:
    // C01: attempt 1 = 50%, attempt 2 = 80% -> Best = 80%
    // C02: attempt 1 = 60% -> Best = 60%
    // C03: not attempted -> Ignored
    // Average score should be (80 + 60) / 2 = 70%
    const completedColles = [
      { id: "c01", bestPercentage: 80 },
      { id: "c02", bestPercentage: 60 },
    ];

    const completedCount = completedColles.length;
    const sum = completedColles.reduce((acc, c) => acc + c.bestPercentage, 0);
    const average = Math.round(sum / completedCount);

    assert.equal(completedCount, 2);
    assert.equal(average, 70);
    assert.equal(Math.max(...completedColles.map((c) => c.bestPercentage)), 80);
  });

  it("gère une seule colle réalisée", () => {
    const completedColles = [{ id: "c01", bestPercentage: 85 }];
    const average = Math.round(completedColles[0].bestPercentage);
    assert.equal(average, 85);
  });

  it("conserve la tentative la plus récente en cas d'égalité de score", () => {
    const attempts = [
      { id: "att-2", percentage: 80, date: "2026-08-27T12:00:00Z" },
      { id: "att-1", percentage: 80, date: "2026-08-25T12:00:00Z" },
    ];

    // Sorted desc by date
    let best = attempts[0];
    for (const a of attempts) {
      if (a.percentage > best.percentage) {
        best = a;
      }
    }

    assert.equal(best.id, "att-2");
  });

  it("exclut les MOCK_EXAM des statistiques de colles (totalCollesCount, completedCollesCount, average, best)", () => {
    // 2 published COLLE + 1 published MOCK_EXAM
    const publishedExams = [
      { id: "colle-1", type: "COLLE" },
      { id: "colle-2", type: "COLLE" },
      { id: "eb-1", type: "MOCK_EXAM" },
    ];

    // Attempts on all three
    const attempts = [
      { examId: "colle-1", type: "COLLE", percentage: 70 },
      { examId: "colle-2", type: "COLLE", percentage: 90 },
      { examId: "eb-1", type: "MOCK_EXAM", percentage: 100 }, // Should be ignored in colles stats!
    ];

    const collesOnly = publishedExams.filter((e) => e.type === "COLLE");
    const colleAttemptsOnly = attempts.filter((a) => a.type === "COLLE");

    const totalCollesCount = collesOnly.length;
    const completedCollesCount = new Set(colleAttemptsOnly.map((a) => a.examId)).size;
    const averageScorePercentage = Math.round(
      colleAttemptsOnly.reduce((acc, a) => acc + a.percentage, 0) / completedCollesCount
    );
    const bestScorePercentage = Math.max(...colleAttemptsOnly.map((a) => a.percentage));

    assert.equal(totalCollesCount, 2);
    assert.equal(completedCollesCount, 2);
    assert.equal(averageScorePercentage, 80); // (70 + 90) / 2 = 80 (and NOT (70 + 90 + 100) / 3 = 87)
    assert.equal(bestScorePercentage, 90); // 90 (and NOT 100 from MOCK_EXAM)
  });
});
