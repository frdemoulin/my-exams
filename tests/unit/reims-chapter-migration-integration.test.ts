import assert from "node:assert/strict";
import test from "node:test";

import {
  validateHealthTrainingAuthorQuestion,
  type HealthTrainingAuthorQuestion,
} from "../../src/core/questions";

test("Integration: Historical unmigrated Reims chapter ('derives-monofonctionnels') accepts 4-item QRU and QRM", () => {
  const qru4: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Quelle est la formule du méthanol ?",
    choices: [
      { content: "CH3OH", correct: true },
      { content: "CH3COOH", correct: false },
      { content: "CH3CHO", correct: false },
      { content: "CH4", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru4, {
    chapterSlug: "derives-monofonctionnels",
  });
  assert.equal(validation.isValid, true, validation.issues.join("\n"));
});

test("Integration: Declared migrated Reims chapters ('nomenclature-chimique-fonctions-organiques', 'isomerie-enantiomerie', 'hydrocarbures') reject 4-item QRU, QRM and QRP", () => {
  const migratedSlugs = [
    "nomenclature-chimique-fonctions-organiques",
    "isomerie-enantiomerie",
    "hydrocarbures",
  ];

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

  const qrm4: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Quelles affirmations sont exactes ?",
    choices: [
      { content: "Option A", correct: true },
      { content: "Option B", correct: true },
      { content: "Option C", correct: false },
      { content: "Option D", correct: false },
    ],
  };

  const qrp4: HealthTrainingAuthorQuestion = {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 2,
    question: "Sélectionner exactement 2 propositions exactes.",
    choices: [
      { content: "Option A", correct: true },
      { content: "Option B", correct: true },
      { content: "Option C", correct: false },
      { content: "Option D", correct: false },
    ],
  };

  for (const chapterSlug of migratedSlugs) {
    const questionsToTest: HealthTrainingAuthorQuestion[] = [qru4, qrm4, qrp4];
    for (const q of questionsToTest) {
      const val = validateHealthTrainingAuthorQuestion(q, { chapterSlug });
      assert.equal(val.isValid, false, `Should reject 4-choice ${q.format} for chapter ${chapterSlug}`);
      assert.ok(
        val.issues.some((issue) => issue.includes("Reims 5 items")),
        `Should mention Reims 5 items rule for ${q.format} in ${chapterSlug}`,
      );
    }
  }
});

test("Integration: Declared migrated Reims chapters accept 5-item QRU, QRM and QRP", () => {
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

  const qrm5: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Quelles sont les propositions exactes ?",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: true },
      { content: "C", correct: false },
      { content: "D", correct: false },
      { content: "E", correct: false },
    ],
  };

  const qrp5: HealthTrainingAuthorQuestion = {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 2,
    question: "Sélectionner 2 éléments exacts.",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: true },
      { content: "C", correct: false },
      { content: "D", correct: false },
      { content: "E", correct: false },
    ],
  };

  for (const chapterSlug of ["nomenclature-chimique-fonctions-organiques", "isomerie-enantiomerie", "hydrocarbures"]) {
    const questionsToTest: HealthTrainingAuthorQuestion[] = [qru5, qrm5, qrp5];
    for (const q of questionsToTest) {
      const val = validateHealthTrainingAuthorQuestion(q, { chapterSlug });
      assert.equal(val.isValid, true, val.issues.join("\n"));
    }
  }
});

test("Integration: QROC, QZONE, QRPL on migrated chapter are exempt from 5 choices rule", () => {
  const qrocText: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QROC",
    question: "Donner le nom de l'alcane à 1 carbone.",
    answer: { type: "text", acceptedAnswers: ["méthane"] },
  };

  const qzone: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QZONE",
    question: "Cliquer sur l'atome de carbone.",
    image: { src: "molecule.png" },
    expectedZones: [
      { x: 0.5, y: 0.5, tolerance: 0.1 },
    ],
  };

  const qrpl: HealthTrainingAuthorQuestion = {
    order: 3,
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

  for (const q of [qrocText, qzone, qrpl]) {
    const val = validateHealthTrainingAuthorQuestion(q, {
      chapterSlug: "hydrocarbures",
    });
    assert.equal(val.isValid, true, val.issues.join("\n"));
  }
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
      chapterSlug: "hydrocarbures",
    }).isValid,
    true,
  );

  // 2 correct / 3 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, false, false, false]), {
      chapterSlug: "hydrocarbures",
    }).isValid,
    true,
  );

  // 3 correct / 2 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, true, false, false]), {
      chapterSlug: "hydrocarbures",
    }).isValid,
    true,
  );

  // 4 correct / 1 incorrect
  assert.equal(
    validateHealthTrainingAuthorQuestion(makeQrm([true, true, true, true, false]), {
      chapterSlug: "hydrocarbures",
    }).isValid,
    true,
  );
});
