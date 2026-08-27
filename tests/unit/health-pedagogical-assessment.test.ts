import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { buildHealthMockExamPedagogicalAssessment } from "@/core/health-mock-exam/health-mock-exam.pedagogy";
import type { HealthMockExamResultQuestion } from "@/core/health-mock-exam/health-mock-exam.types";

function createMockResultQuestion(params: {
  id: string;
  order: number;
  score: number;
  maxScore: number;
  tags?: string[];
  groupTitle?: string | null;
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
    group: params.groupTitle ? { id: `group-${params.id}`, title: params.groupTitle, sharedStatement: "", order: 1 } : null,
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
      // Theme A: 2 questions, 2/2 points = 100% -> Strength
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:isotopes", "chapter:1.1"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:isotopes", "chapter:1.1"] }),

      // Theme B: 2 questions, 0.5/2 points (1 partial, 1 incorrect) = 25% -> To Review
      createMockResultQuestion({ id: "3", order: 3, score: 0.5, maxScore: 1, tags: ["theme:sigma-pi", "chapter:1.3"] }),
      createMockResultQuestion({ id: "4", order: 4, score: 0, maxScore: 1, tags: ["theme:sigma-pi", "chapter:1.3"] }),

      // Theme C: 2 questions, 1.4/2 points (0.7 each) = 70% -> Intermediate (neither strength nor to review)
      createMockResultQuestion({ id: "5", order: 5, score: 0.7, maxScore: 1, tags: ["theme:VSEPR", "chapter:1.3"] }),
      createMockResultQuestion({ id: "6", order: 6, score: 0.7, maxScore: 1, tags: ["theme:VSEPR", "chapter:1.3"] }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].id, "theme:isotopes");
    assert.equal(assessment.strengths[0].masteryPercentage, 100);
    assert.equal(assessment.strengths[0].questionCount, 2);

    assert.equal(assessment.toReview.length, 1);
    assert.equal(assessment.toReview[0].id, "theme:sigma-pi");
    assert.equal(assessment.toReview[0].masteryPercentage, 25);
    assert.equal(assessment.toReview[0].questionCount, 2);
  });

  it("exclut un thème isolé (1 seule question) et remonte au niveau chapitre si le chapitre a >= 2 questions", () => {
    const questions: HealthMockExamResultQuestion[] = [
      // 2 different themes in chapter 1.2 with 1 question each -> grouped by chapter:1.2
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:ions", "chapter:1.2"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:coordination-bond", "chapter:1.2"] }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 1);
    assert.equal(assessment.strengths[0].id, "chapter:1.2");
    assert.equal(assessment.strengths[0].masteryPercentage, 100);
    assert.equal(assessment.strengths[0].questionCount, 2);
  });

  it("gère les crédits partiels UNESS (0.5 et 0.2) dans le calcul exact de maîtrise", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 0.5, maxScore: 1, tags: ["theme:nuclide"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 0.2, maxScore: 1, tags: ["theme:nuclide"] }),
      createMockResultQuestion({ id: "3", order: 3, score: 1.0, maxScore: 1, tags: ["theme:nuclide"] }),
    ];

    // Total: 1.7 / 3 = 56.66% -> rounded to 57% (< 60%) -> toReview
    const assessment = buildHealthMockExamPedagogicalAssessment(questions);

    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 1);
    assert.equal(assessment.toReview[0].id, "theme:nuclide");
    assert.equal(assessment.toReview[0].masteryPercentage, 57);
    assert.equal(assessment.toReview[0].score, 1.7);
    assert.equal(assessment.toReview[0].maxScore, 3);
  });

  it("affiche un message neutre si aucun thème n'est éligible", () => {
    const questions: HealthMockExamResultQuestion[] = [
      // 1 single question total -> not reliable
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:isotopes"] }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 0);
    assert.ok(assessment.neutralMessage !== null);
  });

  it("utilise le niveau theme uniquement si un libellé explicite existe, sinon roll-up chapter", () => {
    const questionsWithExplicitTheme: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:isotopes", "chapter:1.1"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:isotopes", "chapter:1.1"] }),
    ];

    const assessmentExplicit = buildHealthMockExamPedagogicalAssessment(questionsWithExplicitTheme);
    assert.equal(assessmentExplicit.strengths[0].id, "theme:isotopes");
    assert.equal(assessmentExplicit.strengths[0].label, "Isotopes & abondance");

    const questionsWithUnknownTheme: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:tag-inconnu-123", "chapter:1.1"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:tag-inconnu-123", "chapter:1.1"] }),
    ];

    const assessmentUnknown = buildHealthMockExamPedagogicalAssessment(questionsWithUnknownTheme);
    assert.equal(assessmentUnknown.strengths[0].id, "chapter:1.1");
    assert.equal(assessmentUnknown.strengths[0].label, "Ch. 1 · Éléments chimiques et classification");
  });

  it("fait un roll-up vers EC si theme et chapter n'ont pas de libellé explicite", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:inconnu", "chapter:inconnu", "ec:CHIMIE"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:inconnu", "chapter:inconnu", "ec:CHIMIE"] }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths[0].id, "ec:CHIMIE");
    assert.equal(assessment.strengths[0].label, "Chimie générale");
  });

  it("ne fabrique aucune conclusion ni groupe si aucun niveau ne dispose d'un libellé explicite", () => {
    const questions: HealthMockExamResultQuestion[] = [
      createMockResultQuestion({ id: "1", order: 1, score: 1, maxScore: 1, tags: ["theme:inconnu", "chapter:inconnu", "ec:inconnu"] }),
      createMockResultQuestion({ id: "2", order: 2, score: 1, maxScore: 1, tags: ["theme:inconnu", "chapter:inconnu", "ec:inconnu"] }),
    ];

    const assessment = buildHealthMockExamPedagogicalAssessment(questions);
    assert.equal(assessment.strengths.length, 0);
    assert.equal(assessment.toReview.length, 0);
    assert.ok(assessment.neutralMessage !== null);
  });
});
