import assert from "node:assert/strict";
import test from "node:test";

import {
  compileHealthTrainingAuthorQuestion,
  validateHealthTrainingAuthorQuestion,
  type HealthTrainingAuthorQuestion,
} from "../../src/core/questions";

test("Reims 5 choices rule: validates 5-choice QRU, QRM, QRP when strict5Choices context option is true", () => {
  const qru5: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Parmi ces propositions, laquelle est exacte ?",
    choices: [
      { content: "Proposition A", correct: true },
      { content: "Proposition B", correct: false },
      { content: "Proposition C", correct: false },
      { content: "Proposition D", correct: false },
      { content: "Proposition E", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru5, { strict5Choices: true });
  assert.equal(validation.isValid, true, validation.issues.join("\n"));
});

test("Reims 5 choices rule: fails QRU with 4 choices when strict5Choices is true", () => {
  const qru4: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Parmi ces propositions, laquelle est exacte ?",
    choices: [
      { content: "Proposition A", correct: true },
      { content: "Proposition B", correct: false },
      { content: "Proposition C", correct: false },
      { content: "Proposition D", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru4, { strict5Choices: true });
  assert.equal(validation.isValid, false);
  assert.ok(validation.issues.some((issue) => issue.includes("Reims 5 items")));
});

test("Reims 5 choices rule: maintains backward compatibility for historical 4-choice questions when strict5Choices is false", () => {
  const qru4: HealthTrainingAuthorQuestion = {
    order: 1,
    difficulty: "EASY",
    format: "QRU",
    question: "Parmi ces propositions, laquelle est exacte ?",
    choices: [
      { content: "Proposition A", correct: true },
      { content: "Proposition B", correct: false },
      { content: "Proposition C", correct: false },
      { content: "Proposition D", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qru4);
  assert.equal(validation.isValid, true, validation.issues.join("\n"));
});

test("Reims 5 choices rule: validates reims5Items property on question itself", () => {
  const qrm4: HealthTrainingAuthorQuestion = {
    order: 2,
    difficulty: "MEDIUM",
    format: "QRM",
    reims5Items: true,
    question: "Quelles sont les affirmations exactes ?",
    choices: [
      { content: "A", correct: true },
      { content: "B", correct: false },
      { content: "C", correct: true },
      { content: "D", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(qrm4);
  assert.equal(validation.isValid, false);
  assert.ok(validation.issues.some((issue) => issue.includes("Reims 5 items")));
});

test("Autonomy rule: detects forbidden external source references ('selon la fiche', etc.)", () => {
  const invalidQuestion: HealthTrainingAuthorQuestion = {
    order: 3,
    difficulty: "MEDIUM",
    format: "QRU",
    question: "Selon la fiche du cours, quel est le pH du sang ?",
    choices: [
      { content: "7,4", correct: true },
      { content: "6,5", correct: false },
      { content: "8,0", correct: false },
    ],
  };

  const validation = validateHealthTrainingAuthorQuestion(invalidQuestion, { checkAutonomy: true });
  assert.equal(validation.isValid, false);
  assert.ok(validation.issues.some((issue) => /selon la fiche/i.test(issue)));
});

test("Exempt formats: QROC, QZONE, QRPL are exempt from 5 choices rule", () => {
  const qroc: HealthTrainingAuthorQuestion = {
    order: 4,
    difficulty: "EASY",
    format: "QROC",
    question: "Quel est le symbole chimique du carbone ?",
    answer: { type: "text", acceptedAnswers: ["C"] },
  };

  const valQroc = validateHealthTrainingAuthorQuestion(qroc, { strict5Choices: true });
  assert.equal(valQroc.isValid, true, valQroc.issues.join("\n"));

  const qrpl: HealthTrainingAuthorQuestion = {
    order: 5,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 2,
    question: "Sélectionnez 2 éléments dans la liste.",
    choices: [
      { content: "1", correct: true },
      { content: "2", correct: false },
      { content: "3", correct: true },
      { content: "4", correct: false },
      { content: "5", correct: false },
      { content: "6", correct: false },
      { content: "7", correct: false },
    ],
  };

  const valQrpl = validateHealthTrainingAuthorQuestion(qrpl, { strict5Choices: true });
  assert.equal(valQrpl.isValid, true, valQrpl.issues.join("\n"));
});
