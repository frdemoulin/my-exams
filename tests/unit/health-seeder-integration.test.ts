import assert from "node:assert/strict";
import test from "node:test";

import {
  compileHealthTrainingAuthorQuestion,
  normalizePersistedQuestion,
  validateHealthTrainingAuthorQuestion,
  type HealthTrainingAuthorQuestion,
} from "../../src/core/questions";

const testQuizAuthorQuestions: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Quel est le rôle principal de la mitochondrie ?",
    choices: [
      { content: "Synthèse d'ATP", correct: true, explanation: "Vrai par phosphorylation oxydative." },
      { content: "Synthèse de lipides", correct: false },
      { content: "Stockage de glycogène", correct: false },
    ],
    explanation: "La mitochondrie produit l'ATP.",
  },
  {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRM",
    question: "Parmi les propositions suivantes, lesquelles sont exactes ?",
    choices: [
      { content: "Prop A", correct: true },
      { content: "Prop B", correct: false },
      { content: "Prop C", correct: true },
    ],
    explanation: "A et C sont vraies.",
  },
  {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRP",
    requiredSelectionCount: 2,
    question: "Sélectionnez exactement 2 éléments exacts.",
    choices: [
      { content: "Choix 1", correct: true },
      { content: "Choix 2", correct: false },
      { content: "Choix 3", correct: true },
      { content: "Choix 4", correct: false },
    ],
    explanation: "Choix 1 et 3.",
  },
  {
    order: 4,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 2,
    question: "Sélectionnez 2 éléments dans cette liste de 10.",
    choices: [
      { content: "Item 1", correct: true },
      { content: "Item 2", correct: false },
      { content: "Item 3", correct: true },
      { content: "Item 4", correct: false },
      { content: "Item 5", correct: false },
      { content: "Item 6", correct: false },
      { content: "Item 7", correct: false },
      { content: "Item 8", correct: false },
      { content: "Item 9", correct: false },
      { content: "Item 10", correct: false },
    ],
    explanation: "Items 1 et 3.",
  },
  {
    order: 5,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Nommez l'organite de N-glycosylation.",
    answer: {
      type: "text",
      acceptedAnswers: ["RER", "REG"],
    },
    explanation: "RER / REG.",
  },
  {
    order: 6,
    difficulty: "MEDIUM",
    format: "QROC",
    question: "Valeur du pH sanguin ?",
    answer: {
      type: "number",
      value: 7.4,
      tolerance: 0.05,
    },
    explanation: "7.4.",
  },
  {
    order: 7,
    difficulty: "HARD",
    format: "QZONE",
    question: "Cliquez sur la cellule.",
    image: {
      src: "/images/cell.png",
      alt: "Schéma",
    },
    expectedZones: [
      { id: "z1", x: 0.4, y: 0.6, tolerance: 0.05 },
    ],
    explanation: "Zone ciblée.",
  },
];

test("traversée complète du pipeline de seeding Santé pour les 7 formats UNESS", () => {
  assert.equal(testQuizAuthorQuestions.length, 7);

  const compiledPersistenceInputs = testQuizAuthorQuestions.map((authorQuestion) => {
    const validation = validateHealthTrainingAuthorQuestion(authorQuestion, {
      chapterSlug: "integration-test-chapter",
      quizSlug: "integration-test-quiz",
    });
    assert.equal(
      validation.isValid,
      true,
      `Validation de la question ${authorQuestion.order} (${authorQuestion.format}) a échoué: ${validation.issues.join(", ")}`,
    );

    return compileHealthTrainingAuthorQuestion(authorQuestion, {
      chapterSlug: "integration-test-chapter",
    });
  });

  const canonicalRuntimeQuestions = compiledPersistenceInputs.map((compiledInput) => {
    return normalizePersistedQuestion(compiledInput);
  });

  assert.equal(canonicalRuntimeQuestions.length, 7);

  // QRU
  assert.equal(canonicalRuntimeQuestions[0].format, "QRU");
  assert.equal(canonicalRuntimeQuestions[0].type, "mcq");

  // QRM
  assert.equal(canonicalRuntimeQuestions[1].format, "QRM");
  assert.equal(canonicalRuntimeQuestions[1].type, "mcq");

  // QRP
  assert.equal(canonicalRuntimeQuestions[2].format, "QRP");
  assert.equal(canonicalRuntimeQuestions[2].type, "mcq");
  if (canonicalRuntimeQuestions[2].type === "mcq") {
    assert.equal(canonicalRuntimeQuestions[2].requiredSelectionCount, 2);
  }

  // QRPL
  assert.equal(canonicalRuntimeQuestions[3].format, "QRPL");
  assert.equal(canonicalRuntimeQuestions[3].type, "mcq");
  if (canonicalRuntimeQuestions[3].type === "mcq") {
    assert.equal(canonicalRuntimeQuestions[3].requiredSelectionCount, 2);
    assert.equal(canonicalRuntimeQuestions[3].choices.length, 10);
  }

  // QROC text
  assert.equal(canonicalRuntimeQuestions[4].format, "QROC");
  assert.equal(canonicalRuntimeQuestions[4].type, "short-answer");
  if (canonicalRuntimeQuestions[4].type === "short-answer") {
    assert.equal(canonicalRuntimeQuestions[4].answerType, "text");
    assert.equal(canonicalRuntimeQuestions[4].acceptedAnswers?.length, 2);
  }

  // QROC number
  assert.equal(canonicalRuntimeQuestions[5].format, "QROC");
  assert.equal(canonicalRuntimeQuestions[5].type, "short-answer");
  if (canonicalRuntimeQuestions[5].type === "short-answer") {
    assert.equal(canonicalRuntimeQuestions[5].answerType, "number");
    assert.equal(canonicalRuntimeQuestions[5].numericAnswer?.value, 7.4);
  }

  // QZONE V1
  assert.equal(canonicalRuntimeQuestions[6].format, "QZONE");
  assert.equal(canonicalRuntimeQuestions[6].type, "hotspot");
  if (canonicalRuntimeQuestions[6].type === "hotspot") {
    assert.equal(canonicalRuntimeQuestions[6].image?.src, "/images/cell.png");
    assert.equal(canonicalRuntimeQuestions[6].expectedZones.length, 1);
  }
});
