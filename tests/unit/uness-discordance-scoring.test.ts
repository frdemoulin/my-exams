import assert from "node:assert/strict";
import test from "node:test";

import { evaluateQuestion, evaluateMcqQuestion, type MultipleChoiceQuestion } from "../../src/core/questions";

test("UNESS discordance scoring : 0 discordance donne 1.0 point (100%)", () => {
  const mcq: MultipleChoiceQuestion = {
    id: "q1",
    type: "mcq",
    statement: "QRM test",
    selectionMode: "multiple",
    choices: [
      { id: "choice-0", content: "A", correct: true },
      { id: "choice-1", content: "B", correct: false },
      { id: "choice-2", content: "C", correct: true },
      { id: "choice-3", content: "D", correct: false },
      { id: "choice-4", content: "E", correct: false },
    ],
    scoring: { strategy: "discordance" },
  };

  const result = evaluateMcqQuestion(mcq, {
    questionId: "q1",
    type: "mcq",
    selectedChoiceIds: ["choice-0", "choice-2"],
  });

  assert.equal(result.status, "correct");
  assert.equal(result.score, 1);
  assert.equal(result.details?.discordanceCount, 0);
});

test("UNESS discordance scoring : 1 discordance (erreur par omission) donne 0.5 point (50%)", () => {
  const mcq: MultipleChoiceQuestion = {
    id: "q1",
    type: "mcq",
    statement: "QRM test",
    selectionMode: "multiple",
    choices: [
      { id: "choice-0", content: "A", correct: true },
      { id: "choice-1", content: "B", correct: false },
      { id: "choice-2", content: "C", correct: true },
      { id: "choice-3", content: "D", correct: false },
      { id: "choice-4", content: "E", correct: false },
    ],
    scoring: { strategy: "discordance" },
  };

  // Oubli de choice-2 (1 omission)
  const result = evaluateMcqQuestion(mcq, {
    questionId: "q1",
    type: "mcq",
    selectedChoiceIds: ["choice-0"],
  });

  assert.equal(result.status, "partial");
  assert.equal(result.score, 0.5);
  assert.equal(result.details?.discordanceCount, 1);
});

test("UNESS discordance scoring : 2 discordances (1 omission + 1 addition) donnent 0.2 point (20%)", () => {
  const mcq: MultipleChoiceQuestion = {
    id: "q1",
    type: "mcq",
    statement: "QRM test",
    selectionMode: "multiple",
    choices: [
      { id: "choice-0", content: "A", correct: true },
      { id: "choice-1", content: "B", correct: false },
      { id: "choice-2", content: "C", correct: true },
      { id: "choice-3", content: "D", correct: false },
      { id: "choice-4", content: "E", correct: false },
    ],
    scoring: { strategy: "discordance" },
  };

  // Coché choice-1 (fausse) + oubli choice-2 (2 discordances)
  const result = evaluateMcqQuestion(mcq, {
    questionId: "q1",
    type: "mcq",
    selectedChoiceIds: ["choice-0", "choice-1"],
  });

  assert.equal(result.status, "partial");
  assert.equal(result.score, 0.2);
  assert.equal(result.details?.discordanceCount, 2);
});

test("UNESS discordance scoring : 3 discordances ou plus donnent 0 point", () => {
  const mcq: MultipleChoiceQuestion = {
    id: "q1",
    type: "mcq",
    statement: "QRM test",
    selectionMode: "multiple",
    choices: [
      { id: "choice-0", content: "A", correct: true },
      { id: "choice-1", content: "B", correct: false },
      { id: "choice-2", content: "C", correct: true },
      { id: "choice-3", content: "D", correct: false },
      { id: "choice-4", content: "E", correct: false },
    ],
    scoring: { strategy: "discordance" },
  };

  // Coché choice-1, choice-3, choice-4 (3 ajouts d'options fausses)
  const result = evaluateMcqQuestion(mcq, {
    questionId: "q1",
    type: "mcq",
    selectedChoiceIds: ["choice-1", "choice-3", "choice-4"],
  });

  assert.equal(result.status, "incorrect");
  assert.equal(result.score, 0);
  assert.equal(result.details?.discordanceCount, 5);
});
