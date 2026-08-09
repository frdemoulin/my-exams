import type {
  EvaluationResult,
  HotspotExpectedZone,
  HotspotQuestion,
  HotspotStudentAnswer,
  McqStudentAnswer,
  MultipleChoiceQuestion,
  Question,
  ShortAnswerNormalizationOptions,
  ShortAnswerQuestion,
  ShortAnswerStudentAnswer,
  StudentAnswer,
} from "./question.types";
import {
  createMcqStudentAnswerFromIndexes,
  getChoiceIdFromIndex,
  getCorrectChoiceIds,
  inferChoiceCountFromIndexes,
  normalizeChoiceIndexes,
} from "./question-normalization";

export function areChoiceIdSetsEqual(
  left: readonly string[],
  right: readonly string[],
) {
  if (left.length !== right.length) return false;

  const sortedLeft = [...left].sort();
  const sortedRight = [...right].sort();

  return sortedLeft.every((value, index) => value === sortedRight[index]);
}

export function evaluateMcqQuestion(
  question: MultipleChoiceQuestion,
  answer: McqStudentAnswer | null | undefined,
): EvaluationResult {
  const maxScore = question.points ?? 1;
  const correctChoiceIds = getCorrectChoiceIds(question);
  const selectedChoiceIds = Array.from(
    new Set(answer?.type === "mcq" ? answer.selectedChoiceIds : []),
  ).filter((choiceId) => question.choices.some((choice) => choice.id === choiceId));

  if (selectedChoiceIds.length === 0) {
    return {
      questionId: question.id,
      status: "unanswered",
      score: 0,
      maxScore,
      details: {
        selectedChoiceIds,
        correctChoiceIds,
      },
    };
  }

  const hasExpectedSelectionCount =
    question.requiredSelectionCount === undefined ||
    selectedChoiceIds.length === question.requiredSelectionCount;
  const isCorrect =
    hasExpectedSelectionCount &&
    areChoiceIdSetsEqual(selectedChoiceIds, correctChoiceIds);
  const missingChoiceIds = correctChoiceIds.filter(
    (choiceId) => !selectedChoiceIds.includes(choiceId),
  );
  const extraChoiceIds = selectedChoiceIds.filter(
    (choiceId) => !correctChoiceIds.includes(choiceId),
  );

  return {
    questionId: question.id,
    status: isCorrect ? "correct" : "incorrect",
    score: isCorrect ? maxScore : 0,
    maxScore,
    details: {
      selectedChoiceIds,
      correctChoiceIds,
      missingChoiceIds,
      extraChoiceIds,
      expectedSelectionCount: question.requiredSelectionCount ?? null,
    },
  };
}

const defaultShortAnswerNormalization: Required<ShortAnswerNormalizationOptions> = {
  trim: true,
  collapseWhitespace: true,
  caseSensitive: false,
  ignoreAccents: true,
  normalizeUnicode: true,
  normalizeApostrophes: true,
  normalizePunctuationSpacing: true,
};

export function normalizeShortAnswerText(
  value: string,
  options: ShortAnswerNormalizationOptions = {},
) {
  const normalization = {
    ...defaultShortAnswerNormalization,
    ...options,
  };
  let normalizedValue = value;

  if (normalization.normalizeUnicode) {
    normalizedValue = normalizedValue
      .normalize("NFKC")
      .replace(/[\u00A0\u202F]/g, " ")
      .replace(/[–—]/g, "-");
  }
  if (normalization.normalizeApostrophes) {
    normalizedValue = normalizedValue.replace(/[’‘`´]/g, "'");
  }
  if (normalization.normalizePunctuationSpacing) {
    normalizedValue = normalizedValue
      .replace(/\s+([,.;:!?])/g, "$1")
      .replace(/([([{])\s+/g, "$1")
      .replace(/\s+([)\]}])/g, "$1");
  }
  if (normalization.collapseWhitespace) {
    normalizedValue = normalizedValue.replace(/\s+/g, " ");
  }
  if (normalization.trim) {
    normalizedValue = normalizedValue.trim();
  }
  if (normalization.ignoreAccents) {
    normalizedValue = normalizedValue
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  if (!normalization.caseSensitive) {
    normalizedValue = normalizedValue.toLocaleLowerCase("fr-FR");
  }

  return normalizedValue;
}

const escapedUnitPattern = (unit: string) =>
  unit.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function parseNumericShortAnswer(rawValue: string, acceptedUnits: readonly string[] = []) {
  const trimmedValue = rawValue.trim();
  const unitAlternatives = acceptedUnits
    .filter((unit) => unit.trim().length > 0)
    .map((unit) => escapedUnitPattern(unit.trim()))
    .sort((left, right) => right.length - left.length);
  const unitPattern =
    unitAlternatives.length > 0 ? `(?:\\s*(${unitAlternatives.join("|")}))?` : "";
  const match = trimmedValue.match(
    new RegExp(`^([+-]?\\d+(?:[.,]\\d+)?)${unitPattern}\\s*$`, "u"),
  );

  if (!match) {
    return null;
  }

  const value = Number.parseFloat((match[1] ?? "").replace(",", "."));
  if (!Number.isFinite(value)) {
    return null;
  }

  return {
    value,
    unit: match[2] ?? null,
  };
}

export function evaluateShortAnswerQuestion(
  question: ShortAnswerQuestion,
  answer: ShortAnswerStudentAnswer | null | undefined,
): EvaluationResult {
  const maxScore = question.points ?? 1;
  const rawValue = answer?.type === "short-answer" ? answer.rawValue : "";

  if (!rawValue.trim()) {
    return {
      questionId: question.id,
      status: "unanswered",
      score: 0,
      maxScore,
      details: {
        rawValue,
      },
    };
  }

  if (question.answerType === "text") {
    const normalizedValue = normalizeShortAnswerText(
      rawValue,
      question.normalization,
    );
    const acceptedAnswers = question.acceptedAnswers ?? [];
    const normalizedAcceptedAnswers = acceptedAnswers.map((acceptedAnswer) =>
      normalizeShortAnswerText(acceptedAnswer.value, question.normalization),
    );
    const isCorrect = normalizedAcceptedAnswers.includes(normalizedValue);

    return {
      questionId: question.id,
      status: isCorrect ? "correct" : "incorrect",
      score: isCorrect ? maxScore : 0,
      maxScore,
      details: {
        rawValue,
        normalizedValue,
        acceptedAnswers: acceptedAnswers.map((acceptedAnswer) => acceptedAnswer.value),
        normalizedAcceptedAnswers,
      },
    };
  }

  const numericAnswer = question.numericAnswer;
  if (!numericAnswer) {
    return {
      questionId: question.id,
      status: "incorrect",
      score: 0,
      maxScore,
      details: {
        rawValue,
        reason: "missing-numeric-answer",
      },
    };
  }

  const acceptedUnits = Array.from(
    new Set([numericAnswer.unit, ...(numericAnswer.acceptedUnits ?? [])].filter(
      (unit): unit is string => Boolean(unit?.trim()),
    )),
  );
  const parsedAnswer = parseNumericShortAnswer(rawValue, acceptedUnits);

  if (!parsedAnswer) {
    return {
      questionId: question.id,
      status: "incorrect",
      score: 0,
      maxScore,
      details: {
        rawValue,
        expectedValue: numericAnswer.value,
        acceptedUnits,
      },
    };
  }

  const tolerance = numericAnswer.tolerance ?? 0;
  const isWithinTolerance = Math.abs(parsedAnswer.value - numericAnswer.value) <= tolerance;
  const hasValidUnit =
    acceptedUnits.length === 0 ||
    (parsedAnswer.unit !== null && acceptedUnits.includes(parsedAnswer.unit));
  const isCorrect = isWithinTolerance && hasValidUnit;

  return {
    questionId: question.id,
    status: isCorrect ? "correct" : "incorrect",
    score: isCorrect ? maxScore : 0,
    maxScore,
    details: {
      rawValue,
      parsedValue: parsedAnswer.value,
      parsedUnit: parsedAnswer.unit,
      expectedValue: numericAnswer.value,
      tolerance,
      acceptedUnits,
      isWithinTolerance,
      hasValidUnit,
    },
  };
}

const DEFAULT_HOTSPOT_TOLERANCE = 0.03;

const isValidHotspotCoordinate = (value: number) =>
  Number.isFinite(value) && value >= 0 && value <= 1;

const getHotspotDistance = (
  point: { x: number; y: number },
  zone: HotspotExpectedZone,
) => Math.hypot(point.x - zone.x, point.y - zone.y);

export function evaluateHotspotQuestion(
  question: HotspotQuestion,
  answer: HotspotStudentAnswer | null | undefined,
): EvaluationResult {
  const maxScore = question.points ?? 1;
  const selectedPoints = (answer?.type === "hotspot" ? answer.points : [])
    .filter((point) =>
      isValidHotspotCoordinate(point.x) && isValidHotspotCoordinate(point.y),
    );
  const expectedZones = question.expectedZones;

  if (expectedZones.length === 0) {
    return {
      questionId: question.id,
      status: "incorrect",
      score: 0,
      maxScore,
      details: {
        reason: "missing-expected-zones",
        selectedPoints,
      },
    };
  }

  if (selectedPoints.length === 0) {
    return {
      questionId: question.id,
      status: "unanswered",
      score: 0,
      maxScore,
      details: {
        expectedZoneIds: expectedZones.map((zone) => zone.id),
        selectedPoints,
      },
    };
  }

  const matchedPointIndexes = new Set<number>();
  const matchedZones = expectedZones.flatMap((zone) => {
    const tolerance =
      zone.tolerance ?? question.defaultTolerance ?? DEFAULT_HOTSPOT_TOLERANCE;
    const candidates = selectedPoints
      .map((point, pointIndex) => ({
        point,
        pointIndex,
        distance: getHotspotDistance(point, zone),
      }))
      .filter(
        (candidate) =>
          !matchedPointIndexes.has(candidate.pointIndex) &&
          candidate.distance <= tolerance,
      )
      .sort((left, right) => left.distance - right.distance);
    const match = candidates[0];

    if (!match) {
      return [];
    }

    matchedPointIndexes.add(match.pointIndex);
    return [{
      zoneId: zone.id,
      label: zone.label ?? null,
      pointIndex: match.pointIndex,
      distance: match.distance,
      tolerance,
    }];
  });
  const matchedZoneIds = matchedZones.map((zone) => zone.zoneId);
  const missingZoneIds = expectedZones
    .map((zone) => zone.id)
    .filter((zoneId) => !matchedZoneIds.includes(zoneId));
  const extraPointIndexes = selectedPoints
    .map((_, pointIndex) => pointIndex)
    .filter((pointIndex) => !matchedPointIndexes.has(pointIndex));
  const isCorrect =
    missingZoneIds.length === 0 &&
    extraPointIndexes.length === 0 &&
    selectedPoints.length === expectedZones.length;

  return {
    questionId: question.id,
    status: isCorrect ? "correct" : "incorrect",
    score: isCorrect ? maxScore : 0,
    maxScore,
    details: {
      selectedPoints,
      expectedZones,
      matchedZones,
      missingZoneIds,
      extraPointIndexes,
    },
  };
}

export function evaluateQuestion(
  question: Question,
  answer: StudentAnswer | null | undefined,
): EvaluationResult {
  if (question.type === "mcq") {
    return evaluateMcqQuestion(
      question,
      answer?.type === "mcq" ? answer : null,
    );
  }
  if (question.type === "short-answer") {
    return evaluateShortAnswerQuestion(
      question,
      answer?.type === "short-answer" ? answer : null,
    );
  }
  if (question.type === "hotspot") {
    return evaluateHotspotQuestion(
      question,
      answer?.type === "hotspot" ? answer : null,
    );
  }

  throw new Error(`Question evaluator is not implemented for type "${question.type}".`);
}

export function evaluateMcqIndexAnswer({
  questionId = "question",
  selectedChoiceIndexes,
  correctChoiceIndexes,
  choiceCount,
  points = 1,
  requiredSelectionCount,
}: {
  questionId?: string;
  selectedChoiceIndexes: readonly number[];
  correctChoiceIndexes: readonly number[];
  choiceCount?: number;
  points?: number;
  requiredSelectionCount?: number;
}) {
  const inferredChoiceCount = inferChoiceCountFromIndexes(
    [...selectedChoiceIndexes],
    [...correctChoiceIndexes],
  );
  const resolvedChoiceCount = Math.max(choiceCount ?? 0, inferredChoiceCount);
  const safeChoiceCount = Math.max(resolvedChoiceCount, 1);
  const normalizedCorrectChoiceIndexes = normalizeChoiceIndexes(
    correctChoiceIndexes,
    safeChoiceCount,
  );
  const question: MultipleChoiceQuestion = {
    id: questionId,
    type: "mcq",
    statement: "",
    points,
    selectionMode: requiredSelectionCount === 1 ? "single" : "multiple",
    requiredSelectionCount,
    choices: Array.from({ length: safeChoiceCount }, (_, choiceIndex) => ({
      id: getChoiceIdFromIndex(choiceIndex),
      content: getChoiceIdFromIndex(choiceIndex),
      correct: normalizedCorrectChoiceIndexes.includes(choiceIndex),
    })),
    scoring: {
      strategy: "all-or-nothing",
    },
  };

  return evaluateMcqQuestion(
    question,
    createMcqStudentAnswerFromIndexes({
      question,
      selectedChoiceIndexes,
    }),
  );
}
