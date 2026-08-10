import assert from "node:assert/strict";
import test from "node:test";

import { createQuizQuestionSchema } from "../../src/lib/validation";

const baseQuestionPayload = {
  difficulty: "EASY" as const,
  question: "Quelle est la réponse attendue ?",
  explanation: "Correction globale.",
  order: 1,
  isPublished: true,
};

test("la validation admin accepte une QROC textuelle sans choix QCM", () => {
  const result = createQuizQuestionSchema.safeParse({
    ...baseQuestionPayload,
    questionFormat: "QROC",
    answerFormat: "SINGLE",
    choices: [],
    correctChoiceIndexes: [],
    choiceExplanations: [],
    shortAnswerType: "text",
    acceptedAnswers: "mitochondrie\nla mitochondrie",
  });

  assert.equal(result.success, true);
});

test("la validation admin accepte une QROC numérique avec tolérance", () => {
  const result = createQuizQuestionSchema.safeParse({
    ...baseQuestionPayload,
    questionFormat: "QROC",
    answerFormat: "SINGLE",
    choices: [],
    correctChoiceIndexes: [],
    choiceExplanations: [],
    shortAnswerType: "number",
    numericAnswerValue: "7,4",
    numericAnswerTolerance: "0,1",
    numericAnswerUnit: "pH",
  });

  assert.equal(result.success, true);
});

test("la validation admin refuse une QROC sans réponse attendue", () => {
  const result = createQuizQuestionSchema.safeParse({
    ...baseQuestionPayload,
    questionFormat: "QROC",
    answerFormat: "SINGLE",
    choices: [],
    correctChoiceIndexes: [],
    choiceExplanations: [],
    shortAnswerType: "text",
    acceptedAnswers: "",
  });

  assert.equal(result.success, false);
});

test("la validation admin accepte une question QZONE valide", () => {
  const result = createQuizQuestionSchema.safeParse({
    ...baseQuestionPayload,
    questionFormat: "QZONE",
    answerFormat: "SINGLE",
    choices: [],
    correctChoiceIndexes: [],
    choiceExplanations: [],
    hotspotImageSrc: "/uploads/organelle.png",
    hotspotImageAlt: "Schéma d'une cellule",
    hotspotTargetX: "0.45",
    hotspotTargetY: "0.60",
    hotspotTolerance: "0.05",
    hotspotTargetLabel: "Mitochondrie",
  });

  assert.equal(result.success, true);
});

test("la validation admin refuse une QZONE sans image support", () => {
  const result = createQuizQuestionSchema.safeParse({
    ...baseQuestionPayload,
    questionFormat: "QZONE",
    answerFormat: "SINGLE",
    choices: [],
    correctChoiceIndexes: [],
    choiceExplanations: [],
    hotspotImageSrc: "",
    hotspotTargetX: "0.45",
    hotspotTargetY: "0.60",
  });

  assert.equal(result.success, false);
});
