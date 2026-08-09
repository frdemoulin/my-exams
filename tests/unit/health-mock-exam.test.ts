import assert from "node:assert/strict";
import test from "node:test";

import {
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
      questionCount: 40,
      firstQuestion: 1,
      lastQuestion: 40,
    },
    {
      id: "biochemistry",
      teachingElementId: "biochemistry",
      teachingElementSlug: "biochimie",
      title: "Biochimie",
      order: 2,
      questionCount: 40,
      firstQuestion: 41,
      lastQuestion: 80,
    },
    {
      id: "cell-biology",
      teachingElementId: "cell-biology",
      teachingElementSlug: "biologie-cellulaire",
      title: "Biologie cellulaire",
      order: 3,
      questionCount: 20,
      firstQuestion: 81,
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

test("la maquette UE14 40/40/20 complète est publiable", () => {
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
