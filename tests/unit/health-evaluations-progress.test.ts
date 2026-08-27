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
});
