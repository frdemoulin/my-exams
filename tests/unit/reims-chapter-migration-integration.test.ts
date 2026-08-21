import assert from "node:assert/strict";
import test from "node:test";

import {
  validateHealthTrainingAuthorQuestion,
  type HealthTrainingAuthorQuestion,
} from "../../src/core/questions";

test("Integration: Historical unmigrated Reims chapter ('isomerie-enantiomerie') accepts 4-item QRU and QRM", () => {
  const qru4: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Quelle est la configuration de la molécule ?",
    choices: [
      { content: "R", correct: true },
      { content: "S", correct: false },
      { content: "E", correct: false },
      { content: "Z", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru4, {
    chapterSlug: "isomerie-enantiomerie",
  });
  assert.equal(validation.isValid, true, validation.issues.join("\n"));
});

test("Integration: Declared migrated Reims chapter ('nomenclature-chimique-fonctions-organiques') rejects 4-item QRU/QRM/QRP", () => {
  const qru4: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Parmi ces groupes, lequel est un alcool ?",
    choices: [
      { content: "OH", correct: true },
      { content: "COOH", correct: false },
      { content: "CHO", correct: false },
      { content: "SH", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru4, {
    chapterSlug: "nomenclature-chimique-fonctions-organiques",
  });
  assert.equal(validation.isValid, false);
  assert.ok(
    validation.issues.some((issue) => issue.includes("Reims 5 items")),
    "Should reject 4-choice QRU for declared migrated chapter",
  );
});

test("Integration: Declared migrated Reims chapter ('nomenclature-chimique-fonctions-organiques') accepts 5-item QRU/QRM/QRP", () => {
  const qru5: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Parmi ces groupes, lequel est un alcool ?",
    choices: [
      { content: "OH", correct: true },
      { content: "COOH", correct: false },
      { content: "CHO", correct: false },
      { content: "SH", correct: false },
      { content: "NH2", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru5, {
    chapterSlug: "nomenclature-chimique-fonctions-organiques",
  });
  assert.equal(validation.isValid, true, validation.issues.join("\n"));
});

test("Integration: QROC, QZONE, QRPL on migrated chapter are exempt from 5 choices rule", () => {
  const qroc: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QROC",
    question: "Donner le nombre de carbones du butane.",
    answer: { type: "number", value: 4 },
  };

  const valQroc = validateHealthTrainingAuthorQuestion(qroc, {
    chapterSlug: "nomenclature-chimique-fonctions-organiques",
  });
  assert.equal(valQroc.isValid, true, valQroc.issues.join("\n"));

  const qrpl: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 2,
    question: "Sélectionner 2 éléments de la liste.",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: false },
      { content: "C", correct: true },
      { content: "D", correct: false },
      { content: "E", correct: false },
      { content: "F", correct: false },
    ],
  };

  const valQrpl = validateHealthTrainingAuthorQuestion(qrpl, {
    chapterSlug: "nomenclature-chimique-fonctions-organiques",
  });
  assert.equal(valQrpl.isValid, true, valQrpl.issues.join("\n"));
});

test("Integration: QRM true/false distribution flexibility (1/4, 2/3, 3/2, 4/1 all valid)", () => {
  const makeQrm = (correctMask: boolean[]): HealthTrainingAuthorQuestion => ({
    order: 1,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Quelles sont les affirmations exactes ?",
    choices: correctMask.map((isCorrect, idx) => ({
      content: `Item ${idx + 1}`,
      correct: isCorrect,
    })),
  });

  // 1 correct / 4 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, false, false, false, false]), {
      chapterSlug: "nomenclature-chimique-fonctions-organiques",
    }).isValid,
    true,
  );

  // 2 correct / 3 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, false, false, false]), {
      chapterSlug: "nomenclature-chimique-fonctions-organiques",
    }).isValid,
    true,
  );

  // 3 correct / 2 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, true, false, false]), {
      chapterSlug: "nomenclature-chimique-fonctions-organiques",
    }).isValid,
    true,
  );

  // 4 correct / 1 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, true, true, false]), {
      chapterSlug: "nomenclature-chimique-fonctions-organiques",
    }).isValid,
    true,
  );
});
