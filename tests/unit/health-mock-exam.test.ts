import assert from "node:assert/strict";
import test from "node:test";

import {
  evaluateHealthAssessmentQuestion,
  scoreHealthMockExamAttempt,
  validateHealthMockExamForPublication,
  type HealthMockExamValidationInput,
} from "../../src/core/health-mock-exam";

function makeQuestion(globalOrder: number, order: number) {
  return {
    id: `question-${globalOrder}`,
    slug: `reims-ue14-mock-01-q${String(globalOrder).padStart(3, "0")}`,
    order,
    globalOrder,
    groupId: null,
    isPublished: true,
    questionType: "mcq",
    question: `Énoncé original ${globalOrder}.`,
    choices: ["A", "B", "C", "D"],
    answerFormat: "SINGLE" as const,
    correctChoiceIndex: 0,
    correctChoiceIndexes: [0],
    answerPayload: null,
    explanation: "Explication transversale.",
    choiceExplanations: ["A", "B", "C", "D"],
  };
}

function makeValidExam(): HealthMockExamValidationInput {
  const sections = [
    {
      id: "chemistry",
      teachingElementId: "chemistry",
      teachingElementSlug: "chimie",
      title: "Chimie",
      order: 1,
      questionCount: 28,
      firstQuestion: 1,
      lastQuestion: 28,
    },
    {
      id: "biochemistry",
      teachingElementId: "biochemistry",
      teachingElementSlug: "biochimie",
      title: "Biochimie",
      order: 2,
      questionCount: 34,
      firstQuestion: 29,
      lastQuestion: 62,
    },
    {
      id: "cell-biology",
      teachingElementId: "cell-biology",
      teachingElementSlug: "biologie-cellulaire",
      title: "Biologie cellulaire",
      order: 3,
      questionCount: 38,
      firstQuestion: 63,
      lastQuestion: 100,
    },
  ];

  return {
    courseUnitId: "ue14",
    courseUnitSlug: "ue14-biochimie-biologie-cellulaire-chimie",
    durationMinutes: 150,
    questionCount: 100,
    sections: sections.map((section) => ({
      ...section,
      groups: [],
      questions: Array.from({ length: section.questionCount }, (_, index) =>
        makeQuestion(section.firstQuestion + index, index + 1),
      ),
    })),
  };
}

test("la maquette UE14 28/34/38 complète est publiable", () => {
  const result = validateHealthMockExamForPublication(makeValidExam());
  assert.equal(result.isValid, true, result.issues.join("\n"));
});

test("la validation accepte une QROC avec une réponse attendue configurée", () => {
  const exam = makeValidExam();
  exam.sections[0].questions[0] = {
    ...exam.sections[0].questions[0],
    questionType: "short-answer",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndex: -1,
    correctChoiceIndexes: [],
    answerPayload: {
      answerType: "number",
      numericAnswer: {
        value: 7.4,
        tolerance: 0.1,
        unit: "pH",
      },
    },
    choiceExplanations: [],
  };

  const result = validateHealthMockExamForPublication(exam);
  assert.equal(result.isValid, true, result.issues.join("\n"));
});

test("la validation refuse une QROC sans réponse attendue", () => {
  const exam = makeValidExam();
  exam.sections[0].questions[0] = {
    ...exam.sections[0].questions[0],
    questionType: "short-answer",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndex: -1,
    correctChoiceIndexes: [],
    answerPayload: {
      answerType: "text",
      acceptedAnswers: [],
    },
    choiceExplanations: [],
  };

  assert.equal(validateHealthMockExamForPublication(exam).isValid, false);
});

test("la validation refuse les erreurs de structure et les groupes liés incomplets", () => {
  const missingQuestion = makeValidExam();
  missingQuestion.sections[2].questions.pop();
  assert.equal(validateHealthMockExamForPublication(missingQuestion).isValid, false);

  const wrongDuration = makeValidExam();
  wrongDuration.durationMinutes = 120;
  assert.equal(validateHealthMockExamForPublication(wrongDuration).isValid, false);

  const wrongQuota = makeValidExam();
  wrongQuota.sections[1].questionCount = 39;
  assert.equal(validateHealthMockExamForPublication(wrongQuota).isValid, false);

  const missingPosition = makeValidExam();
  missingPosition.sections[2].questions[0].globalOrder = 99;
  assert.equal(validateHealthMockExamForPublication(missingPosition).isValid, false);

  const wrongTeachingElement = makeValidExam();
  wrongTeachingElement.sections[2].teachingElementSlug = "chimie";
  assert.equal(validateHealthMockExamForPublication(wrongTeachingElement).isValid, false);

  const incompleteGroup = makeValidExam();
  incompleteGroup.sections[0].groups = [
    { id: "group-1", sharedStatement: "Énoncé commun.", order: 1 },
  ];
  incompleteGroup.sections[0].questions[0].groupId = "group-1";
  assert.equal(validateHealthMockExamForPublication(incompleteGroup).isValid, false);
});

test("la notation applique une réponse exacte sans point partiel", () => {
  const result = scoreHealthMockExamAttempt([
    {
      examSectionId: "chemistry",
      questions: [
        { selectedChoiceIndexes: [0, 2], correctChoiceIndexes: [0, 2] },
        { selectedChoiceIndexes: [0], correctChoiceIndexes: [0, 2] },
        { selectedChoiceIndexes: [0, 1, 2], correctChoiceIndexes: [0, 2] },
        { selectedChoiceIndexes: [], correctChoiceIndexes: [3] },
      ],
    },
  ]);

  assert.equal(result.score, 1);
  assert.equal(result.maxScore, 4);
  assert.equal(result.percentage, 25);
  assert.equal(result.correctQuestionCount, 1);
  assert.equal(result.incorrectQuestionCount, 2);
  assert.equal(result.unansweredQuestionCount, 1);
  assert.deepEqual(result.sections[0], {
    examSectionId: "chemistry",
    score: 1,
    maxScore: 4,
    percentage: 25,
  });
});

test("la notation des examens blancs utilise le moteur global pour les QROC", () => {
  const question = {
    id: "qroc-number",
    type: "short-answer" as const,
    statement: "Donnez le pH physiologique.",
    answerType: "number" as const,
    numericAnswer: {
      value: 7.4,
      tolerance: 0.1,
    },
    scoring: {
      strategy: "all-or-nothing" as const,
    },
  };

  const result = scoreHealthMockExamAttempt([
    {
      examSectionId: "chemistry",
      questions: [
        {
          question,
          answer: {
            questionId: "qroc-number",
            type: "short-answer",
            rawValue: "7,4",
          },
        },
        {
          question,
          answer: {
            questionId: "qroc-number",
            type: "short-answer",
            rawValue: "8",
          },
        },
        {
          question,
          answer: {
            questionId: "qroc-number",
            type: "short-answer",
            rawValue: "",
          },
        },
      ],
    },
  ]);

  assert.equal(result.score, 1);
  assert.equal(result.maxScore, 3);
  assert.equal(result.percentage, 33);
  assert.equal(result.correctQuestionCount, 1);
  assert.equal(result.incorrectQuestionCount, 1);
  assert.equal(result.unansweredQuestionCount, 1);
});

function makeCanonicalChoiceQuestion({
  id,
  format,
  correctChoiceIndexes,
  requiredSelectionCount,
  choiceCount = 5,
}: {
  id: string;
  format: "QRU" | "QRM" | "QRP" | "QRPL";
  correctChoiceIndexes: number[];
  requiredSelectionCount?: number;
  choiceCount?: number;
}) {
  return {
    id,
    type: "mcq" as const,
    format,
    statement: id,
    selectionMode: format === "QRU" ? ("single" as const) : ("multiple" as const),
    requiredSelectionCount,
    choices: Array.from({ length: choiceCount }, (_, index) => ({
      id: String.fromCharCode(65 + index),
      content: `Choix ${index + 1}`,
      correct: correctChoiceIndexes.includes(index),
    })),
    scoring: {
      strategy: "all-or-nothing" as const,
    },
  };
}

function mcqAnswer(questionId: string, selectedChoiceIds: string[]) {
  return {
    questionId,
    type: "mcq" as const,
    selectedChoiceIds,
  };
}

test("la notation santé conserve les QRU en tout-ou-rien", () => {
  const question = makeCanonicalChoiceQuestion({
    id: "qru-uness",
    format: "QRU",
    correctChoiceIndexes: [1],
  });

  const evaluation = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A"]),
  );

  assert.equal(evaluation.status, "incorrect");
  assert.equal(evaluation.score, 0);
  assert.equal(evaluation.maxScore, 1);
});

test("la notation santé applique 50 puis 20 pour une et deux discordances QRM", () => {
  const question = makeCanonicalChoiceQuestion({
    id: "qrm-uness",
    format: "QRM",
    correctChoiceIndexes: [0, 2],
  });

  const oneDiscordance = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A"]),
  );
  const twoDiscordances = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A", "B"]),
  );

  assert.equal(oneDiscordance.status, "partial");
  assert.equal(oneDiscordance.score, 0.5);
  assert.equal(twoDiscordances.status, "partial");
  assert.equal(twoDiscordances.score, 0.2);
});

test("la notation santé applique le barème réponses justes x/n aux QRP", () => {
  const question = makeCanonicalChoiceQuestion({
    id: "qrp-uness",
    format: "QRP",
    correctChoiceIndexes: [0, 2],
    requiredSelectionCount: 2,
  });

  const partial = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A", "B"]),
  );
  const invalidCount = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A"]),
  );

  assert.equal(partial.status, "partial");
  assert.equal(partial.score, 0.5);
  assert.equal(invalidCount.status, "incorrect");
  assert.equal(invalidCount.score, 0);
});

test("la notation santé applique le barème réponses justes x/n aux QRPL", () => {
  const question = makeCanonicalChoiceQuestion({
    id: "qrpl-uness",
    format: "QRPL",
    correctChoiceIndexes: [0, 1, 2, 3, 4],
    requiredSelectionCount: 5,
    choiceCount: 10,
  });

  const evaluation = evaluateHealthAssessmentQuestion(
    question,
    mcqAnswer(question.id, ["A", "B", "C", "D", "F"]),
  );

  assert.equal(evaluation.status, "partial");
  assert.equal(evaluation.score, 0.8);
});

test("le score agrégé des évaluations santé conserve les décimales", () => {
  const qrm = makeCanonicalChoiceQuestion({
    id: "aggregate-qrm",
    format: "QRM",
    correctChoiceIndexes: [0, 2],
  });
  const qrp = makeCanonicalChoiceQuestion({
    id: "aggregate-qrp",
    format: "QRP",
    correctChoiceIndexes: [0, 2],
    requiredSelectionCount: 2,
  });

  const result = scoreHealthMockExamAttempt([
    {
      examSectionId: "chemistry",
      questions: [
        { question: qrm, answer: mcqAnswer(qrm.id, ["A"]) },
        { question: qrp, answer: mcqAnswer(qrp.id, ["A", "B"]) },
      ],
    },
  ]);

  assert.equal(result.score, 1);
  assert.equal(result.maxScore, 2);
  assert.equal(result.percentage, 50);
  assert.equal(result.sections[0]?.score, 1);
});
