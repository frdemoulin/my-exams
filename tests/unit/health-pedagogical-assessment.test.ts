import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  buildHealthMockExamPedagogicalAssessment,
  calculateEvidenceWeight,
  calculateStrengthRank,
  calculateReviewRank,
  PEDAGOGICAL_SUMMARY_LIMIT,
} from "@/core/health-mock-exam/health-mock-exam.pedagogy";
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
  it("exporte la constante canonique PEDAGOGICAL_SUMMARY_LIMIT = 5 et les fonctions de rang", () => {
    assert.equal(PEDAGOGICAL_SUMMARY_LIMIT, 5);
    assert.equal(calculateEvidenceWeight(1), 1 / 3);
    assert.equal(calculateEvidenceWeight(2), 2 / 3);
    assert.equal(calculateEvidenceWeight(3), 1);
    assert.equal(calculateEvidenceWeight(5), 1);

    assert.equal(calculateStrengthRank(1.0, 1), 1 / 3);
    assert.equal(calculateStrengthRank(0.9, 5), 0.9);

    assert.equal(calculateReviewRank(0, 1), 1 / 3);
    assert.equal(calculateReviewRank(0.4, 4), 0.6);
  });

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

  it("classe 100% sur 1 q derrière 90% sur 5 q et 85% sur 3 q pour les points forts", () => {
    // Theme A: 100% sur 1 question (strengthRank = 1.0 * 1/3 = 0.3333)
    // Theme B: 90% sur 5 questions (strengthRank = 0.9 * 1.0 = 0.900)
    // Theme C: 85% sur 3 questions (strengthRank = 0.85 * 1.0 = 0.850)
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "q1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [{ id: "theme-a", label: "Theme A" }],
      }),
      ...Array.from({ length: 5 }, (_, i) =>
        createMockResultQuestion({
          id: `q-b-${i}`,
          order: i + 2,
          score: 0.9,
          maxScore: 1,
          themes: [{ id: "theme-b", label: "Theme B" }],
        })
      ),
      ...Array.from({ length: 3 }, (_, i) =>
        createMockResultQuestion({
          id: `q-c-${i}`,
          order: i + 7,
          score: 0.85,
          maxScore: 1,
          themes: [{ id: "theme-c", label: "Theme C" }],
        })
      ),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 3);
    assert.equal(assessment.strengths[0].id, "theme-b");
    assert.equal(assessment.strengths[1].id, "theme-c");
    assert.equal(assessment.strengths[2].id, "theme-a");
  });

  it("classe 0% sur 1 q derrière 40% sur 4 q et 20% sur 3 q pour les éléments à retravailler", () => {
    // Theme A: 0% sur 1 question (reviewRank = (1 - 0) * 1/3 = 0.3333)
    // Theme B: 40% sur 4 questions (reviewRank = (1 - 0.4) * 1.0 = 0.600)
    // Theme C: 20% sur 3 questions (reviewRank = (1 - 0.2) * 1.0 = 0.800)
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "q1",
        order: 1,
        score: 0,
        maxScore: 1,
        themes: [{ id: "theme-a", label: "Theme A" }],
      }),
      ...Array.from({ length: 4 }, (_, i) =>
        createMockResultQuestion({
          id: `q-b-${i}`,
          order: i + 2,
          score: 0.4,
          maxScore: 1,
          themes: [{ id: "theme-b", label: "Theme B" }],
        })
      ),
      ...Array.from({ length: 3 }, (_, i) =>
        createMockResultQuestion({
          id: `q-c-${i}`,
          order: i + 6,
          score: 0.2,
          maxScore: 1,
          themes: [{ id: "theme-c", label: "Theme C" }],
        })
      ),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.toReview.length, 3);
    assert.equal(assessment.toReview[0].id, "theme-c");
    assert.equal(assessment.toReview[1].id, "theme-b");
    assert.equal(assessment.toReview[2].id, "theme-a");
  });

  it("limite strictement les résultats à MAX 5 éléments par catégorie (0, 2, 5, 7 candidats)", () => {
    // Test avec 7 candidats points forts
    const questionsStrengths: HealthMockExamResultQuestion[] = [];
    for (let t = 1; t <= 7; t++) {
      for (let q = 1; q <= 3; q++) {
        questionsStrengths.push(
          createMockResultQuestion({
            id: `q-s-${t}-${q}`,
            order: (t - 1) * 3 + q,
            score: 1,
            maxScore: 1,
            themes: [{ id: `theme-strength-${t}`, label: `Theme Strength ${t}` }],
          })
        );
      }
    }

    const assessmentStrengths = buildHealthMockExamPedagogicalAssessment(questionsStrengths);
    assert.equal(assessmentStrengths.strengths.length, 5);

    // Test avec 7 candidats à retravailler
    const questionsReview: HealthMockExamResultQuestion[] = [];
    for (let t = 1; t <= 7; t++) {
      for (let q = 1; q <= 3; q++) {
        questionsReview.push(
          createMockResultQuestion({
            id: `q-r-${t}-${q}`,
            order: (t - 1) * 3 + q,
            score: 0.1,
            maxScore: 1,
            themes: [{ id: `theme-review-${t}`, label: `Theme Review ${t}` }],
          })
        );
      }
    }

    const assessmentReview = buildHealthMockExamPedagogicalAssessment(questionsReview);
    assert.equal(assessmentReview.toReview.length, 5);
  });

  it("utilise l'ID du thème comme tie-break déterministe en cas d'égalité exacte", () => {
    // 2 thèmes avec le même nombre de questions et même score
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 1,
        maxScore: 1,
        themes: [
          { id: "theme-z", label: "Alpha Label" },
          { id: "theme-a", label: "Omega Label" },
        ],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 1,
        maxScore: 1,
        themes: [
          { id: "theme-z", label: "Alpha Label" },
          { id: "theme-a", label: "Omega Label" },
        ],
      }),
      createMockResultQuestion({
        id: "3",
        order: 3,
        score: 1,
        maxScore: 1,
        themes: [
          { id: "theme-z", label: "Alpha Label" },
          { id: "theme-a", label: "Omega Label" },
        ],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 2);
    // Doit être trié par id : theme-a avant theme-z, malgré les libellés inversés
    assert.equal(assessment.strengths[0].id, "theme-a");
    assert.equal(assessment.strengths[1].id, "theme-z");
  });

  it("respecte la précision des seuils de maîtrise (79% pas point fort, 80% point fort)", () => {
    // 79% (7.9/10) -> pas point fort (zone neutre 60-79%)
    // 80% (8/10) -> point fort
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({
        id: "1",
        order: 1,
        score: 7.9,
        maxScore: 10,
        themes: [{ id: "theme-79", label: "Seuil 79%" }],
      }),
      createMockResultQuestion({
        id: "2",
        order: 2,
        score: 8,
        maxScore: 10,
        themes: [{ id: "theme-80", label: "Seuil 80%" }],
      }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].id, "theme-80");
    assert.equal(assessment.toReview.length, 0);
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
});

