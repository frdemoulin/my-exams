import assert from "node:assert/strict";
import test from "node:test";

import {
  compileHealthTrainingAuthorQuestion,
  normalizePersistedQuestion,
  validateHealthTrainingAuthorQuestion,
  type HealthTrainingAuthorQuestion,
  type LegacySeedQuestionInput,
} from "../../src/core/questions";
import { healthTrainingDemoAuthorQuestions } from "../../prisma/seeds/health-training-demo-authoring.seed";

test("compiles a valid QRU author question to canonical persistence format", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Quelle est la capitale de la France ?",
    choices: [
      { content: "Lyon", correct: false },
      { content: "Paris", correct: true, explanation: "Paris est la capitale." },
      { content: "Marseille", correct: false },
    ],
    explanation: "Explication générale.",
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true, validation.issues.join("\n"));

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(compiled.questionFormat, "QRU");
  assert.equal(compiled.questionType, "mcq");
  assert.equal(compiled.answerFormat, "SINGLE");
  assert.deepEqual(compiled.correctChoiceIndexes, [1]);
  assert.deepEqual(compiled.choiceExplanations, ["", "Paris est la capitale.", ""]);

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QRU");
  assert.equal(canonical.type, "mcq");
});

test("compiles a valid QRM author question", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Quels sont les acides aminés aromatiques ?",
    choices: [
      { content: "Phénylalanine", correct: true },
      { content: "Alanine", correct: false },
      { content: "Tyrosine", correct: true },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(compiled.questionFormat, "QRM");
  assert.equal(compiled.answerFormat, "MULTIPLE");
  assert.deepEqual(compiled.correctChoiceIndexes, [0, 2]);

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QRM");
});

test("compiles a valid QRP author question with requiredSelectionCount", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement 2 éléments.",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: false },
      { content: "C", correct: true },
      { content: "D", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(compiled.questionFormat, "QRP");
  assert.equal(compiled.requiredSelectionCount, 2);

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QRP");
  if (canonical.type === "mcq") {
    assert.equal(canonical.requiredSelectionCount, 2);
  } else {
    assert.fail("Canonical question should be mcq");
  }
});

test("compiles a valid QRPL author question", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 4,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 2,
    question: "Sélectionnez 2 éléments dans cette liste longue.",
    choices: [
      { content: "Item 1", correct: true },
      { content: "Item 2", correct: false },
      { content: "Item 3", correct: true },
      { content: "Item 4", correct: false },
      { content: "Item 5", correct: false },
      { content: "Item 6", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(compiled.questionFormat, "QRPL");
  assert.equal(compiled.requiredSelectionCount, 2);

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QRPL");
});

test("compiles a valid QROC text author question", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 5,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel est l'organite de synthèse d'ATP ?",
    answer: {
      type: "text",
      acceptedAnswers: ["mitochondrie", "la mitochondrie"],
      normalization: { ignoreAccents: true, caseSensitive: false },
    },
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(compiled.questionFormat, "QROC");
  assert.equal(compiled.questionType, "short-answer");

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QROC");
  assert.equal(canonical.type, "short-answer");
  if (canonical.type === "short-answer") {
    assert.equal(canonical.answerType, "text");
    assert.equal(canonical.acceptedAnswers?.length, 2);
  }
});

test("compiles a valid QROC numeric author question", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 6,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Quel est le pH sanguin moyen ?",
    answer: {
      type: "number",
      value: 7.4,
      tolerance: 0.1,
      unit: "pH",
    },
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QROC");
  if (canonical.type === "short-answer") {
    assert.equal(canonical.answerType, "number");
    assert.equal(canonical.numericAnswer?.value, 7.4);
    assert.equal(canonical.numericAnswer?.tolerance, 0.1);
  }
});

test("compiles a valid QZONE V1 author question", () => {
  const authorQuestion: HealthTrainingAuthorQuestion = {
    order: 7,
    difficulty: "HARD",
    format: "QZONE",
    question: "Pointez la mitochondrie.",
    image: {
      src: "/images/cell.png",
      alt: "Cellule",
    },
    expectedZones: [
      {
        id: "z1",
        x: 0.5,
        y: 0.5,
        tolerance: 0.1,
      },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
  assert.equal(validation.isValid, true);

  const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QZONE");
  assert.equal(canonical.type, "hotspot");
  if (canonical.type === "hotspot") {
    assert.equal(canonical.image?.src, "/images/cell.png");
    assert.equal(canonical.expectedZones.length, 1);
    assert.equal(canonical.expectedZones[0].x, 0.5);
  }
});

test("validates author question errors correctly", () => {
  // QRU with 0 correct answers
  const invalidQru: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Test ?",
    choices: [
      { content: "A", correct: false },
      { content: "B", correct: false },
    ],
  };
  const val1 = validateHealthTrainingAuthorQuestion(invalidQru);
  assert.equal(val1.isValid, false);
  assert.match(val1.issues[0], /QRU/);

  // QRP with mismatch between correct choices and requiredSelectionCount
  const invalidQrp: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 3,
    question: "Test ?",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: true },
      { content: "C", correct: false },
    ],
  };
  const val2 = validateHealthTrainingAuthorQuestion(invalidQrp);
  assert.equal(val2.isValid, false);
  assert.match(val2.issues[0], /requiredSelectionCount/);

  // QRPL with less than 6 choices
  const invalidQrpl: HealthTrainingAuthorQuestion = {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 1,
    question: "Test ?",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: false },
      { content: "C", correct: false },
    ],
  };
  const val3 = validateHealthTrainingAuthorQuestion(invalidQrpl);
  assert.equal(val3.isValid, false);
  assert.match(val3.issues[0], /liste longue/);

  // QZONE with invalid coordinates (x > 1)
  const invalidQzone: HealthTrainingAuthorQuestion = {
    order: 4,
    difficulty: "HARD",
    format: "QZONE",
    question: "Pointez.",
    image: { src: "/test.png" },
    expectedZones: [{ x: 1.5, y: 0.5, tolerance: 0.1 }],
  };
  const val4 = validateHealthTrainingAuthorQuestion(invalidQzone);
  assert.equal(val4.isValid, false);
  assert.match(val4.issues[0], /coordonnée x/);
});

test("maintains legacy seed question compatibility", () => {
  const legacyQuestion: LegacySeedQuestionInput = {
    order: 10,
    difficulty: "EASY",
    question: "Question legacy QCM",
    choices: ["Option A", "Option B", "Option C"],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [0],
    explanation: "Explication legacy",
  };

  const compiled = compileHealthTrainingAuthorQuestion(legacyQuestion);
  assert.equal(compiled.order, 10);
  assert.equal(compiled.question, "Question legacy QCM");

  const canonical = normalizePersistedQuestion(compiled);
  assert.equal(canonical.format, "QRU");
  assert.equal(canonical.type, "mcq");
});

test("all questions in the authoring demo seed compile and validate cleanly", () => {
  assert.equal(healthTrainingDemoAuthorQuestions.length, 7);

  for (const authorQuestion of healthTrainingDemoAuthorQuestions) {
    const validation = validateHealthTrainingAuthorQuestion(authorQuestion);
    assert.equal(validation.isValid, true, `Validation failed for question ${authorQuestion.order}: ${validation.issues.join(", ")}`);

    const compiled = compileHealthTrainingAuthorQuestion(authorQuestion);
    const canonical = normalizePersistedQuestion(compiled);
    assert.equal(canonical.format, authorQuestion.format);
  }
});
