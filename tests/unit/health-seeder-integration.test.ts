import assert from "node:assert/strict";
import test from "node:test";

import {
  compileHealthTrainingAuthorQuestion,
  evaluateQuestion,
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
    points: 1,
    tags: ["cytologie"],
    source: "Cours Reims",
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
    points: 2,
    tags: ["biochimie", "lipides"],
    source: "Annales 2023",
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
    points: 2,
    tags: ["biochimie"],
  },
  {
    order: 4,
    difficulty: "MEDIUM",
    format: "QRPL",
    requiredSelectionCount: 3,
    question: "Sélectionnez 3 éléments dans cette liste de 10.",
    choices: [
      { content: "Item 1", correct: true },
      { content: "Item 2", correct: false },
      { content: "Item 3", correct: true },
      { content: "Item 4", correct: true },
      { content: "Item 5", correct: false },
      { content: "Item 6", correct: false },
      { content: "Item 7", correct: false },
      { content: "Item 8", correct: false },
      { content: "Item 9", correct: false },
      { content: "Item 10", correct: false },
    ],
    explanation: "Items 1, 3 et 4.",
    points: 3,
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
    points: 1,
    source: "Annales 2024",
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
    points: 1,
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
    points: 2,
  },
  {
    order: 8,
    difficulty: "HARD",
    format: "QZONE",
    question: "Cliquez sur un des trois lymphocytes présents sur le frottis.",
    image: {
      src: "/images/frottis.png",
      alt: "Frottis sanguin",
    },
    expectedZones: [
      { id: "lympho-1", label: "Lymphocyte A", x: 0.2, y: 0.2, tolerance: 0.05 },
      { id: "lympho-2", label: "Lymphocyte B", x: 0.5, y: 0.5, tolerance: 0.05 },
      { id: "lympho-3", label: "Lymphocyte C", x: 0.8, y: 0.8, tolerance: 0.05 },
    ],
    explanation: "Trois lymphocytes sont identifiables sur la préparation.",
    points: 2,
  },
];

/**
 * Simule la transformation de données effectuée par `seedHealthTrainingChapter` lors de l'enregistrement dans Prisma DB.
 */
function buildPrismaDbQuizQuestionRecord(
  compiled: ReturnType<typeof compileHealthTrainingAuthorQuestion>,
  index: number,
) {
  return {
    id: `db-question-id-${index + 1}`,
    chapterId: "test-chapter-id",
    difficulty: compiled.difficulty,
    questionType: compiled.questionFormat ?? compiled.format ?? compiled.questionType ?? "mcq",
    question: compiled.question,
    questionDiagram: compiled.questionDiagram ?? null,
    choices: compiled.choices ?? [],
    answerFormat: compiled.answerFormat ?? "SINGLE",
    correctChoiceIndexes: compiled.correctChoiceIndexes ?? [],
    correctChoiceIndex: compiled.correctChoiceIndexes?.[0] ?? 0,
    answerPayload: JSON.parse(JSON.stringify(compiled.answerPayload ?? null)),
    explanation: compiled.explanation ?? "",
    choiceExplanations: compiled.choiceExplanations ?? [],
    order: compiled.order,
    isPublished: true,
    themeIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

test("traversée complète du pipeline de seeding et round-trip DB pour tous les formats UNESS (avec zones alternatives)", () => {
  assert.equal(testQuizAuthorQuestions.length, 8);

  const dbRecords = testQuizAuthorQuestions.map((authorQuestion, index) => {
    const validation = validateHealthTrainingAuthorQuestion(authorQuestion, {
      chapterSlug: "integration-test-chapter",
      quizSlug: "integration-test-quiz",
    });
    assert.equal(
      validation.isValid,
      true,
      `Validation de la question ${authorQuestion.order} (${authorQuestion.format}) a échoué: ${validation.issues.join(", ")}`,
    );

    const compiled = compileHealthTrainingAuthorQuestion(authorQuestion, {
      chapterSlug: "integration-test-chapter",
    });

    return buildPrismaDbQuizQuestionRecord(compiled, index);
  });

  const canonicalRuntimeQuestions = dbRecords.map((dbRecord) => {
    return normalizePersistedQuestion(dbRecord);
  });

  assert.equal(canonicalRuntimeQuestions.length, 8);

  // QRU
  assert.equal(canonicalRuntimeQuestions[0].format, "QRU");
  assert.equal(canonicalRuntimeQuestions[0].type, "mcq");
  assert.equal(canonicalRuntimeQuestions[0].points, 1);
  assert.deepEqual(canonicalRuntimeQuestions[0].tags, ["cytologie"]);
  assert.equal(canonicalRuntimeQuestions[0].source, "Cours Reims");

  // QRM (points: 2, tags, source)
  assert.equal(canonicalRuntimeQuestions[1].format, "QRM");
  assert.equal(canonicalRuntimeQuestions[1].type, "mcq");
  assert.equal(canonicalRuntimeQuestions[1].points, 2);
  assert.deepEqual(canonicalRuntimeQuestions[1].tags, ["biochimie", "lipides"]);
  assert.equal(canonicalRuntimeQuestions[1].source, "Annales 2023");

  // QRP (requiredSelectionCount: 2 restauré depuis answerPayload)
  assert.equal(canonicalRuntimeQuestions[2].format, "QRP");
  assert.equal(canonicalRuntimeQuestions[2].type, "mcq");
  assert.equal(canonicalRuntimeQuestions[2].points, 2);
  if (canonicalRuntimeQuestions[2].type === "mcq") {
    assert.equal(canonicalRuntimeQuestions[2].requiredSelectionCount, 2);
  }

  // QRPL (requiredSelectionCount: 3 restauré depuis answerPayload, choices.length: 10)
  assert.equal(canonicalRuntimeQuestions[3].format, "QRPL");
  assert.equal(canonicalRuntimeQuestions[3].type, "mcq");
  assert.equal(canonicalRuntimeQuestions[3].points, 3);
  if (canonicalRuntimeQuestions[3].type === "mcq") {
    assert.equal(canonicalRuntimeQuestions[3].requiredSelectionCount, 3);
    assert.equal(canonicalRuntimeQuestions[3].choices.length, 10);
  }

  // QROC text (source: "Annales 2024")
  assert.equal(canonicalRuntimeQuestions[4].format, "QROC");
  assert.equal(canonicalRuntimeQuestions[4].type, "short-answer");
  assert.equal(canonicalRuntimeQuestions[4].source, "Annales 2024");
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

  // QZONE V1 simple (points: 2)
  assert.equal(canonicalRuntimeQuestions[6].format, "QZONE");
  assert.equal(canonicalRuntimeQuestions[6].type, "hotspot");
  assert.equal(canonicalRuntimeQuestions[6].points, 2);
  if (canonicalRuntimeQuestions[6].type === "hotspot") {
    assert.equal(canonicalRuntimeQuestions[6].image?.src, "/images/cell.png");
    assert.equal(canonicalRuntimeQuestions[6].expectedZones.length, 1);
  }

  // QZONE V1 à zones alternatives (order: 8)
  const qzoneMulti = canonicalRuntimeQuestions[7];
  assert.equal(qzoneMulti.format, "QZONE");
  assert.equal(qzoneMulti.type, "hotspot");
  if (qzoneMulti.type === "hotspot") {
    assert.equal(qzoneMulti.expectedZones.length, 3);

    // Round-trip evaluation check for each alternative zone
    const res1 = evaluateQuestion(qzoneMulti, { questionId: qzoneMulti.id, type: "hotspot", points: [{ x: 0.2, y: 0.2 }] });
    assert.equal(res1.status, "correct");

    const res2 = evaluateQuestion(qzoneMulti, { questionId: qzoneMulti.id, type: "hotspot", points: [{ x: 0.5, y: 0.5 }] });
    assert.equal(res2.status, "correct");

    const res3 = evaluateQuestion(qzoneMulti, { questionId: qzoneMulti.id, type: "hotspot", points: [{ x: 0.8, y: 0.8 }] });
    assert.equal(res3.status, "correct");

    const resMiss = evaluateQuestion(qzoneMulti, { questionId: qzoneMulti.id, type: "hotspot", points: [{ x: 0.1, y: 0.9 }] });
    assert.equal(resMiss.status, "incorrect");
  }
});
