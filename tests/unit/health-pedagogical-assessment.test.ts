import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { buildHealthMockExamPedagogicalAssessment } from "@/core/health-mock-exam/health-mock-exam.pedagogy";
import type { HealthMockExamResultQuestion } from "@/core/health-mock-exam/health-mock-exam.types";

function createMockResultQuestion(params: {
  id: string;
  order: number;
  score: number;
  maxScore: number;
  themes?: Array<{ id: string; label: string }>;
  tags?: string[];
}): HealthMockExamResultQuestion {
  return {
    attemptQuestionId: `att-q-${params.id}`,
    id: params.id,
    globalOrder: params.order,
    order: params.order,
    questionType: "mcq",
    answerFormat: "SINGLE",
    question: `Question ${params.id}`,
    questionDiagram: null,
    choices: [],
    answerPayload: { tags: params.tags ?? [] },
    canonicalQuestion: {
      id: params.id,
      type: "mcq",
      statement: `Question ${params.id}`,
      selectionMode: "single",
      choices: [],
      scoring: { strategy: "all-or-nothing" },
    },
    group: null,
    themes: params.themes ?? [],
    selectedChoiceIndexes: [0],
    responsePayload: null,
    markedForReview: false,
    correctChoiceIndexes: [0],
    explanation: "",
    choiceExplanations: [],
    evaluationStatus: params.score === params.maxScore ? "correct" : params.score > 0 ? "partial" : "incorrect",
    score: params.score,
    maxScore: params.maxScore,
  };
}

describe("Health Pedagogical Assessment Engine", () => {
  it("classifie correctement les thèmes à >= 80% en points forts et < 60% en points à retravailler", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-isotopes", label: "Isotopes & abondance" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-isotopes", label: "Isotopes & abondance" }],
      }),
      createMockResultQuestion({
        id: "3",
        order: 3,
        score: 0.5,
        maxScore: 1,
        themes: [{ id: "theme-sigma-pi", label: "Liaisons sigma et pi" }],
      }),
      createMockResultQuestion({
        id: "4",
        order: 4,
        score: 0,
        maxScore: 1,
        themes: [{ id: "theme-sigma-pi", label: "Liaisons sigma et pi" }],
      }),
      createMockResultQuestion({
        id: "5",
        order: 5,
        score: 0.7,
        maxScore: 1,
        themes: [{ id: "theme-vsepr", label: "Geometrie moleculaire VSEPR" }],
      }),
      createMockResultQuestion({
        id: "6",
        order: 6,
        score: 0.7,
        maxScore: 1,
        themes: [{ id: "theme-vsepr", label: "Geometrie moleculaire VSEPR" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].id, "theme-isotopes");
    assert.equal(assessment.strengths[0].label, "Isotopes & abondance");
    assert.equal(assessment.strengths[0].masteryPercentage, 100);
    assert.equal(assessment.strengths[0].questionCount, 2);

    assert.equal(assessment.toReview.length, 1);
    assert.equal(assessment.toReview[0].id, "theme-sigma-pi");
    assert.equal(assessment.toReview[0].label, "Liaisons sigma et pi");
    assert.equal(assessment.toReview[0].masteryPercentage, 25);
    assert.equal(assessment.toReview[0].questionCount, 2);
  });

  it("utilise exactement shortTitle quand un vrai Theme en dispose", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-shared", label: "Hybridation et geometrie moleculaire" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-shared", label: "Hybridation et geometrie moleculaire" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].label, "Hybridation et geometrie moleculaire");
  });

  it("utilise title quand shortTitle est absent", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-title-fallback", label: "Titre long du theme" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-title-fallback", label: "Titre long du theme" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].label, "Titre long du theme");
  });

  it("gère les crédits partiels UNESS dans le calcul exact de maîtrise", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 0.5,
        maxScore: 1,
        themes: [{ id: "theme-nuclide", label: "Nucleides et composition atomique" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 0.2,
        maxScore: 1,
        themes: [{ id: "theme-nuclide", label: "Nucleides et composition atomique" }],
      }),
      createMockResultQuestion({
        id: "3",
        order: 3,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-nuclide", label: "Nucleides et composition atomique" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 1);
    assert.equal(assessment.toReview[0].id, "theme-nuclide");
    assert.equal(assessment.toReview[0].masteryPercentage, 57);
    assert.equal(assessment.toReview[0].score, 1.7);
    assert.equal(assessment.toReview[0].maxScore, 3);
  });

  it("laisse le score global intact mais n'alimente aucun thème si la question n'a aucun Theme", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1 }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 0);
    assert.ok(assessment.neutralMessage !== null);
  });

  it("ignore les tags theme:* textuels si aucun Theme structure n'est rattache", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        tags: ["theme:foo-bar"],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 0,
        maxScore: 1,
        tags: ["theme:foo-bar"],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 0);
    assert.ok(assessment.neutralMessage !== null);
  });

  it("fait contribuer exactement un score partiel QRP au Theme", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 0.5,
        maxScore: 1,
        themes: [{ id: "theme-qrp", label: "Roles des glucides" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-qrp", label: "Roles des glucides" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 0);
    assert.ok(assessment.neutralMessage !== null);
  });

  it("fait contribuer une meme question a chacun de ses Themes sans division artificielle", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [
          { id: "theme-a", label: "Theme A" },
          { id: "theme-b", label: "Theme B" },
        ],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-a", label: "Theme A" }],
      }),
      createMockResultQuestion({
        id: "3",
        order: 3,
        score: 0,
        maxScore: 1,
        themes: [{ id: "theme-b", label: "Theme B" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.deepEqual(assessment.strengths, [
      {
        id: "theme-a",
        label: "Theme A",
        masteryPercentage: 100,
        score: 2,
        maxScore: 2,
        questionCount: 2,
      },
    ]);
    assert.deepEqual(assessment.toReview, [
      {
        id: "theme-b",
        label: "Theme B",
        masteryPercentage: 50,
        score: 1,
        maxScore: 2,
        questionCount: 2,
      },
    ]);
  });
});
