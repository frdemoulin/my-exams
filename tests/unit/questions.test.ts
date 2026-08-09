import assert from "node:assert/strict";
import test from "node:test";

import {
  areChoiceIdSetsEqual,
  createMcqStudentAnswerFromIndexes,
  evaluateHotspotQuestion,
  evaluateMcqIndexAnswer,
  evaluateMcqQuestion,
  evaluateQuestion,
  evaluateShortAnswerQuestion,
  getChoiceIdFromIndex,
  getChoiceIndexFromId,
  getCorrectChoiceIds,
  getQuestionFormatStudentInstruction,
  getQuestionFormatDefinition,
  getQuestionFormatEngineKind,
  getQuestionFormatDisplayLabel,
  getQuestionSelectionLimit,
  normalizeShortAnswerText,
  normalizeQuestionFormatCode,
  parseNumericShortAnswer,
  normalizeLegacyMcqQuestion,
  normalizePersistedQuestionFormat,
  normalizePersistedQuestion,
  normalizePersistedQuestionType,
  type HotspotQuestion,
  type ShortAnswerQuestion,
} from "../../src/core/questions";

test("exposes the canonical UNESS question format registry", () => {
  assert.equal(getQuestionFormatDisplayLabel("QRU"), "QRU — Question à réponse unique");
  assert.equal(getQuestionFormatDefinition("QRM").family, "QCM");
  assert.equal(getQuestionFormatEngineKind("QROC"), "short-answer");
  assert.equal(getQuestionFormatDefinition("matching").isUness, false);
  assert.equal(normalizeQuestionFormatCode("QCM"), null);
});

test("exposes student instructions for UNESS question formats", () => {
  const qruQuestion = normalizeLegacyMcqQuestion({
    id: "instruction-qru",
    question: "QRU",
    choices: ["A", "B", "C", "D"],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [0],
    explanation: "",
  });
  const qrpQuestion = normalizeLegacyMcqQuestion({
    id: "instruction-qrp",
    question: "QRP",
    choices: ["A", "B", "C", "D"],
    answerFormat: "MULTIPLE",
    requiredSelectionCount: 2,
    correctChoiceIndexes: [0, 2],
    explanation: "",
  });
  const qrocQuestion = normalizePersistedQuestion({
    id: "instruction-qroc",
    questionType: "QROC",
    question: "QROC",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [],
    correctChoiceIndex: 0,
    explanation: "",
    answerPayload: {
      answerType: "number",
      numericAnswer: {
        value: 3,
      },
    },
  });

  assert.equal(
    getQuestionFormatStudentInstruction(qruQuestion),
    "Sélectionnez une seule proposition.",
  );
  assert.equal(
    getQuestionFormatStudentInstruction(qrpQuestion),
    "Sélectionnez exactement 2 propositions.",
  );
  assert.equal(getQuestionSelectionLimit(qrpQuestion), 2);
  assert.equal(
    getQuestionFormatStudentInstruction(qrocQuestion),
    "Saisissez une réponse numérique courte, en chiffres.",
  );
});

test("normalizes legacy QRU questions into canonical MCQ questions", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "legacy-qru",
    question: "Quelle proposition est correcte ?",
    choices: ["A", "B", "C", "D"],
    answerFormat: "SINGLE",
    correctChoiceIndex: 2,
    correctChoiceIndexes: [],
    explanation: "Correction globale.",
    choiceExplanations: ["Non", "Non", "Oui", "Non"],
  });

  assert.equal(question.type, "mcq");
  assert.equal(question.format, "QRU");
  assert.equal(question.selectionMode, "single");
  assert.equal(question.statement, "Quelle proposition est correcte ?");
  assert.deepEqual(question.choices.map((choice) => choice.id), ["A", "B", "C", "D"]);
  assert.deepEqual(getCorrectChoiceIds(question), ["C"]);
  assert.equal(question.choices[2].explanation, "Oui");
});

test("normalizes legacy QRM questions with variable choice counts", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "legacy-qrm",
    question: "Sélection multiple.",
    choices: ["A", "B", "C", "D", "E"],
    answerFormat: "MULTIPLE",
    correctChoiceIndexes: [0, 4],
    explanation: "",
    choiceExplanations: ["Oui", "Non", "Non", "Non", "Oui"],
  });

  assert.equal(question.selectionMode, "multiple");
  assert.equal(question.format, "QRM");
  assert.deepEqual(question.choices.map((choice) => choice.id), ["A", "B", "C", "D", "E"]);
  assert.deepEqual(getCorrectChoiceIds(question), ["A", "E"]);
});

test("evaluates QRU answers deterministically", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "qru",
    question: "QRU",
    choices: ["A", "B", "C", "D"],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [1],
    explanation: "",
  });

  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qru",
      type: "mcq",
      selectedChoiceIds: ["B"],
    }).status,
    "correct",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qru",
      type: "mcq",
      selectedChoiceIds: ["A"],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qru",
      type: "mcq",
      selectedChoiceIds: [],
    }).status,
    "unanswered",
  );
});

test("evaluates QRM answers with exact all-or-nothing scoring", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "qrm",
    question: "QRM",
    choices: ["A", "B", "C", "D"],
    answerFormat: "MULTIPLE",
    correctChoiceIndexes: [0, 2],
    explanation: "",
  });

  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrm",
      type: "mcq",
      selectedChoiceIds: ["A", "C"],
    }).status,
    "correct",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrm",
      type: "mcq",
      selectedChoiceIds: ["A"],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrm",
      type: "mcq",
      selectedChoiceIds: ["A", "B", "C"],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrm",
      type: "mcq",
      selectedChoiceIds: [],
    }).status,
    "unanswered",
  );
});

test("evaluates QRP required selection count before correctness", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "qrp",
    question: "Sélectionnez exactement deux réponses.",
    choices: ["A", "B", "C", "D"],
    answerFormat: "MULTIPLE",
    requiredSelectionCount: 2,
    correctChoiceIndexes: [0, 2],
    explanation: "",
  });

  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrp",
      type: "mcq",
      selectedChoiceIds: ["A", "C"],
    }).status,
    "correct",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrp",
      type: "mcq",
      selectedChoiceIds: ["A"],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrp",
      type: "mcq",
      selectedChoiceIds: ["A", "B", "C"],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqQuestion(question, {
      questionId: "qrp",
      type: "mcq",
      selectedChoiceIds: ["A", "B"],
    }).status,
    "incorrect",
  );
});

test("bridges legacy choice indexes and canonical choice ids", () => {
  const question = normalizeLegacyMcqQuestion({
    id: "legacy-indexes",
    question: "Index bridge",
    choices: ["A", "B", "C", "D"],
    answerFormat: "MULTIPLE",
    correctChoiceIndexes: [0, 3],
    explanation: "",
  });
  const answer = createMcqStudentAnswerFromIndexes({
    question,
    selectedChoiceIndexes: [3, 0, 0],
  });

  assert.deepEqual(answer.selectedChoiceIds, ["A", "D"]);
  assert.equal(getChoiceIdFromIndex(0), "A");
  assert.equal(getChoiceIdFromIndex(25), "Z");
  assert.equal(getChoiceIdFromIndex(26), "AA");
  assert.equal(getChoiceIndexFromId("AA"), 26);
});

test("keeps legacy index scoring compatible with previous exact matching", () => {
  assert.equal(
    evaluateMcqIndexAnswer({
      selectedChoiceIndexes: [0, 2],
      correctChoiceIndexes: [2, 0],
    }).status,
    "correct",
  );
  assert.equal(
    evaluateMcqIndexAnswer({
      selectedChoiceIndexes: [0, 1, 2],
      correctChoiceIndexes: [0, 2],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateMcqIndexAnswer({
      selectedChoiceIndexes: [],
      correctChoiceIndexes: [3],
    }).status,
    "unanswered",
  );
  assert.equal(areChoiceIdSetsEqual(["C", "A"], ["A", "C"]), true);
});

test("normalizes persisted questions without type as legacy MCQ questions", () => {
  const question = normalizePersistedQuestion({
    id: "persisted-legacy",
    questionType: null,
    question: "Champ historique sans type.",
    choices: ["A", "B", "C", "D"],
    answerFormat: "SINGLE",
    correctChoiceIndex: 1,
    correctChoiceIndexes: [],
    explanation: "Correction.",
    choiceExplanations: ["Non", "Oui", "Non", "Non"],
  });

  assert.equal(question.type, "mcq");
  assert.equal(question.format, "QRU");
  if (question.type !== "mcq") {
    throw new Error("Expected MCQ question.");
  }
  assert.deepEqual(getCorrectChoiceIds(question), ["B"]);
});

test("normalizes persisted textual QROC payloads into canonical questions", () => {
  const question = normalizePersistedQuestion({
    id: "persisted-qroc-text",
    questionType: "QROC",
    question: "Quel organite produit l'ATP ?",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [],
    explanation: "La mitochondrie produit l'ATP.",
    answerPayload: {
      answerType: "text",
      acceptedAnswers: ["mitochondrie", { value: "la mitochondrie" }],
      normalization: {
        ignoreAccents: true,
      },
    },
  });

  assert.equal(normalizePersistedQuestionType("QROC"), "short-answer");
  assert.equal(question.type, "short-answer");
  if (question.type !== "short-answer") {
    throw new Error("Expected short-answer question.");
  }
  assert.equal(question.answerType, "text");
  assert.deepEqual(question.acceptedAnswers, [
    { value: "mitochondrie" },
    { value: "la mitochondrie" },
  ]);
  assert.equal(question.normalization?.ignoreAccents, true);
});

test("normalizes persisted numeric QROC payloads into canonical questions", () => {
  const question = normalizePersistedQuestion({
    id: "persisted-qroc-number",
    questionType: "short-answer",
    question: "Donnez le pH.",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [],
    explanation: "Le pH attendu est 7,4.",
    answerPayload: {
      answerType: "number",
      numericAnswer: {
        value: "7,4",
        tolerance: "0,1",
        unit: "pH",
      },
    },
  });

  assert.equal(question.type, "short-answer");
  if (question.type !== "short-answer") {
    throw new Error("Expected short-answer question.");
  }
  assert.equal(question.answerType, "number");
  assert.deepEqual(question.numericAnswer, {
    value: 7.4,
    tolerance: 0.1,
    unit: "pH",
    acceptedUnits: [],
  });
});

test("keeps UNESS QRP persisted payloads as choice questions with a required answer count", () => {
  const question = normalizePersistedQuestion({
    id: "persisted-qrp",
    questionType: "QRP",
    question: "Sélectionnez exactement deux réponses.",
    choices: ["A", "B", "C", "D"],
    answerFormat: "MULTIPLE",
    correctChoiceIndexes: [0, 2],
    explanation: "Correction.",
    answerPayload: {
      requiredSelectionCount: 2,
    },
  });

  assert.equal(normalizePersistedQuestionType("QRP"), "mcq");
  assert.equal(normalizePersistedQuestionFormat({
    questionType: "mcq",
    answerFormat: "MULTIPLE",
  }), "QRM");
  assert.equal(normalizePersistedQuestionFormat({
    questionType: "mcq",
    answerPayload: {
      requiredSelectionCount: 2,
    },
  }), "QRP");
  assert.equal(normalizePersistedQuestionType("QRPL"), "mcq");
  assert.equal(normalizePersistedQuestionType("QROC"), "short-answer");
  assert.equal(normalizePersistedQuestionType("QROL"), "long-answer");
  assert.equal(normalizePersistedQuestionType("QZONE"), "hotspot");
  assert.equal(question.type, "mcq");
  assert.equal(question.format, "QRP");
  if (question.type !== "mcq") {
    throw new Error("Expected MCQ question.");
  }
  assert.equal(question.requiredSelectionCount, 2);
});

test("normalizes QROC text answers with case, accents, apostrophes and spaces", () => {
  assert.equal(
    normalizeShortAnswerText("  Réticulum   endoplasmique  rugueux  "),
    "reticulum endoplasmique rugueux",
  );
  assert.equal(
    normalizeShortAnswerText("L’appareil de Golgi"),
    "l'appareil de golgi",
  );
  assert.equal(
    normalizeShortAnswerText("Na + , Cl -", {
      normalizePunctuationSpacing: true,
    }),
    "na +, cl -",
  );
});

test("evaluates textual QROC answers with explicit accepted variants only", () => {
  const question: ShortAnswerQuestion = {
    id: "qroc-text",
    type: "short-answer",
    statement: "Quel organite produit l'ATP ?",
    answerType: "text",
    acceptedAnswers: [
      { value: "mitochondrie" },
      { value: "la mitochondrie" },
    ],
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  assert.deepEqual(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-text",
      type: "short-answer",
      rawValue: "  MITOCHONDRIE ",
    }).status,
    "correct",
  );
  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-text",
      type: "short-answer",
      rawValue: "mitochondries",
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-text",
      type: "short-answer",
      rawValue: " ",
    }).status,
    "unanswered",
  );
});

test("keeps QROC raw values while reporting normalized values", () => {
  const question: ShortAnswerQuestion = {
    id: "qroc-raw",
    type: "short-answer",
    statement: "Abréviation acceptée ?",
    answerType: "text",
    acceptedAnswers: [{ value: "RER" }],
    scoring: {
      strategy: "all-or-nothing",
    },
  };
  const result = evaluateShortAnswerQuestion(question, {
    questionId: "qroc-raw",
    type: "short-answer",
    rawValue: "  RÉR  ",
  });

  assert.equal(result.status, "correct");
  assert.equal(result.details?.rawValue, "  RÉR  ");
  assert.equal(result.details?.normalizedValue, "rer");
});

test("parses numeric QROC values with dot, comma and explicit units", () => {
  assert.deepEqual(parseNumericShortAnswer("7.4"), { value: 7.4, unit: null });
  assert.deepEqual(parseNumericShortAnswer("7,4"), { value: 7.4, unit: null });
  assert.deepEqual(
    parseNumericShortAnswer("120 mmol/L", ["mmol/L", "mmol·l-1"]),
    { value: 120, unit: "mmol/L" },
  );
  assert.equal(parseNumericShortAnswer("120 mg", ["mmol/L"]), null);
});

test("evaluates numeric QROC answers with tolerance and unit allow-list", () => {
  const question: ShortAnswerQuestion = {
    id: "qroc-number",
    type: "short-answer",
    statement: "Donnez la concentration.",
    answerType: "number",
    numericAnswer: {
      value: 120,
      tolerance: 2,
      unit: "mmol/L",
      acceptedUnits: ["mmol·l-1"],
    },
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-number",
      type: "short-answer",
      rawValue: "121,5 mmol/L",
    }).status,
    "correct",
  );
  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-number",
      type: "short-answer",
      rawValue: "123 mmol/L",
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-number",
      type: "short-answer",
      rawValue: "121,5",
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateShortAnswerQuestion(question, {
      questionId: "qroc-number",
      type: "short-answer",
      rawValue: "121,5 mg/L",
    }).status,
    "incorrect",
  );
});

test("routes QROC through the generic question evaluator", () => {
  const question: ShortAnswerQuestion = {
    id: "qroc-generic",
    type: "short-answer",
    statement: "Combien font 2 + 2 ?",
    answerType: "number",
    numericAnswer: {
      value: 4,
    },
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  assert.equal(
    evaluateQuestion(question, {
      questionId: "qroc-generic",
      type: "short-answer",
      rawValue: "4",
    }).status,
    "correct",
  );
});

test("normalizes persisted QZONE payloads into canonical hotspot questions", () => {
  const question = normalizePersistedQuestion({
    id: "persisted-qzone",
    questionType: "QZONE",
    question: "Pointez le foie.",
    choices: [],
    answerFormat: "SINGLE",
    correctChoiceIndexes: [],
    explanation: "Le foie est situé dans l'hypochondre droit.",
    answerPayload: {
      image: {
        src: "/uploads/schema-abdomen.png",
        alt: "Schéma abdominal",
        width: "800",
        height: "600",
      },
      defaultTolerance: "0,04",
      zones: [
        {
          id: "liver",
          label: "Foie",
          x: "0,62",
          y: "0.34",
        },
      ],
    },
  });

  assert.equal(normalizePersistedQuestionType("QZONE"), "hotspot");
  assert.equal(question.type, "hotspot");
  assert.equal(question.format, "QZONE");
  if (question.type !== "hotspot") {
    throw new Error("Expected hotspot question.");
  }
  assert.deepEqual(question.image, {
    src: "/uploads/schema-abdomen.png",
    alt: "Schéma abdominal",
    width: 800,
    height: 600,
  });
  assert.deepEqual(question.expectedZones, [
    {
      id: "liver",
      label: "Foie",
      x: 0.62,
      y: 0.34,
      tolerance: 0.04,
    },
  ]);
});

test("evaluates QZONE answers with normalized coordinate tolerance", () => {
  const question: HotspotQuestion = {
    id: "qzone",
    type: "hotspot",
    format: "QZONE",
    statement: "Pointez la zone attendue.",
    expectedZones: [
      {
        id: "target",
        label: "Zone cible",
        x: 0.5,
        y: 0.5,
        tolerance: 0.05,
      },
    ],
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  assert.equal(
    evaluateHotspotQuestion(question, {
      questionId: "qzone",
      type: "hotspot",
      points: [{ x: 0.52, y: 0.51 }],
    }).status,
    "correct",
  );
  assert.equal(
    evaluateHotspotQuestion(question, {
      questionId: "qzone",
      type: "hotspot",
      points: [{ x: 0.7, y: 0.5 }],
    }).status,
    "incorrect",
  );
  assert.equal(
    evaluateHotspotQuestion(question, {
      questionId: "qzone",
      type: "hotspot",
      points: [],
    }).status,
    "unanswered",
  );
  assert.equal(
    evaluateHotspotQuestion(question, {
      questionId: "qzone",
      type: "hotspot",
      points: [
        { x: 0.52, y: 0.51 },
        { x: 0.1, y: 0.1 },
      ],
    }).status,
    "incorrect",
  );
});

test("routes QZONE through the generic question evaluator", () => {
  const question: HotspotQuestion = {
    id: "qzone-generic",
    type: "hotspot",
    format: "QZONE",
    statement: "Pointez la zone attendue.",
    expectedZones: [
      {
        id: "target",
        x: 0.25,
        y: 0.75,
        tolerance: 0.02,
      },
    ],
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  assert.equal(
    evaluateQuestion(question, {
      questionId: "qzone-generic",
      type: "hotspot",
      points: [{ x: 0.25, y: 0.75 }],
    }).status,
    "correct",
  );
});
