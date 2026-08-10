import type {
  HotspotExpectedZone,
  HotspotImage,
  HotspotQuestion,
  NumericShortAnswer,
  Question,
  QuestionType,
  ShortAnswerNormalizationOptions,
  ShortAnswerQuestion,
} from "./question.types";
import {
  getQuestionFormatRuntimeType,
  normalizeQuestionFormat,
  resolvePersistedQuestionFormat,
  type QuestionFormatCode,
} from "./question-format";
import {
  normalizeLegacyMcqQuestion,
  type LegacyMcqQuestionInput,
} from "./question-normalization";

export type PersistedQuestionInput = Omit<LegacyMcqQuestionInput, "id"> & {
  id?: string;
  questionFormat?: string | null;
  questionType?: string | null;
  format?: QuestionFormatCode | string | null;
  answerPayload?: unknown;
};

export type PersistedShortAnswerPayload = {
  answerType?: unknown;
  acceptedAnswers?: unknown;
  numericAnswer?: unknown;
  normalization?: unknown;
};

export type PersistedHotspotPayload = {
  image?: unknown;
  imageSrc?: unknown;
  imageAlt?: unknown;
  imageWidth?: unknown;
  imageHeight?: unknown;
  zones?: unknown;
  expectedZones?: unknown;
  defaultTolerance?: unknown;
  tolerance?: unknown;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const getOptionalString = (value: unknown) => {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : undefined;
};

const getOptionalBoolean = (value: unknown) =>
  typeof value === "boolean" ? value : undefined;

const getOptionalNumber = (value: unknown) => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsedValue = Number.parseFloat(value.replace(",", "."));
    return Number.isFinite(parsedValue) ? parsedValue : undefined;
  }

  return undefined;
};

const normalizeStringArray = (value: unknown) =>
  Array.isArray(value)
    ? value
        .map((entry) => getOptionalString(entry))
        .filter((entry): entry is string => Boolean(entry))
    : [];

const isNormalizedCoordinate = (value: number | undefined): value is number =>
  value !== undefined && value >= 0 && value <= 1;

const normalizePositiveNumber = (value: unknown) => {
  const parsedValue = getOptionalNumber(value);
  return parsedValue !== undefined && parsedValue > 0 ? parsedValue : undefined;
};

export function normalizePersistedQuestionType(value: unknown): QuestionType {
  return getQuestionFormatRuntimeType(normalizeQuestionFormat(value)) as QuestionType;
}

export function normalizePersistedQuestionFormat(value: unknown): QuestionFormatCode {
  if (isRecord(value)) {
    return resolvePersistedQuestionFormat({
      questionFormat: value.questionFormat,
      format: value.format,
      questionType: value.questionType,
      answerFormat: value.answerFormat,
      requiredSelectionCount: value.requiredSelectionCount,
      answerPayload: value.answerPayload,
    });
  }

  return normalizeQuestionFormat(value);
}

function normalizeShortAnswerNormalizationOptions(
  value: unknown,
): ShortAnswerNormalizationOptions | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  const normalization: ShortAnswerNormalizationOptions = {
    trim: getOptionalBoolean(value.trim),
    collapseWhitespace: getOptionalBoolean(value.collapseWhitespace),
    caseSensitive: getOptionalBoolean(value.caseSensitive),
    ignoreAccents: getOptionalBoolean(value.ignoreAccents),
    normalizeUnicode: getOptionalBoolean(value.normalizeUnicode),
    normalizeApostrophes: getOptionalBoolean(value.normalizeApostrophes),
    normalizePunctuationSpacing: getOptionalBoolean(value.normalizePunctuationSpacing),
  };
  const hasDefinedOption = Object.values(normalization).some(
    (entry) => entry !== undefined,
  );

  return hasDefinedOption ? normalization : undefined;
}

function normalizeAcceptedShortAnswers(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((entry) => {
    if (typeof entry === "string") {
      const answer = getOptionalString(entry);
      return answer ? [{ value: answer }] : [];
    }

    if (isRecord(entry)) {
      const answer = getOptionalString(entry.value);
      return answer ? [{ value: answer }] : [];
    }

    return [];
  });
}

function normalizeNumericShortAnswer(value: unknown): NumericShortAnswer | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  const answerValue = getOptionalNumber(value.value);
  if (answerValue === undefined) {
    return undefined;
  }

  const tolerance = getOptionalNumber(value.tolerance);

  return {
    value: answerValue,
    tolerance: tolerance !== undefined && tolerance >= 0 ? tolerance : undefined,
    unit: getOptionalString(value.unit),
    acceptedUnits: normalizeStringArray(value.acceptedUnits),
  };
}

export function normalizePersistedShortAnswerQuestion(
  input: PersistedQuestionInput,
): ShortAnswerQuestion {
  const payload = isRecord(input.answerPayload)
    ? (input.answerPayload as PersistedShortAnswerPayload & Record<string, unknown>)
    : {};
  const numericAnswer = normalizeNumericShortAnswer(payload.numericAnswer);
  const answerType =
    payload.answerType === "number" || payload.answerType === "numeric" || numericAnswer
      ? "number"
      : "text";
  const points = input.points ?? getOptionalNumber(payload.points) ?? 1;
  const rawTags = input.tags ?? payload.tags;
  const tags = Array.isArray(rawTags) ? normalizeStringArray(rawTags) : undefined;
  const source = input.source ?? getOptionalString(payload.source);

  return {
    id: input.id ?? "",
    type: "short-answer",
    format: normalizePersistedQuestionFormat(input),
    statement: input.statement ?? input.question ?? "",
    explanation: input.explanation ?? undefined,
    points,
    tags: tags && tags.length > 0 ? tags : undefined,
    source,
    answerType,
    acceptedAnswers: normalizeAcceptedShortAnswers(payload.acceptedAnswers),
    numericAnswer,
    normalization: normalizeShortAnswerNormalizationOptions(payload.normalization),
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}

function normalizeHotspotImage(payload: PersistedHotspotPayload): HotspotImage | undefined {
  const image = isRecord(payload.image) ? payload.image : {};
  const src = getOptionalString(image.src) ?? getOptionalString(payload.imageSrc);

  if (!src) {
    return undefined;
  }

  return {
    src,
    alt:
      getOptionalString(image.alt) ??
      getOptionalString(payload.imageAlt) ??
      "Zone à pointer",
    width: getOptionalNumber(image.width) ?? getOptionalNumber(payload.imageWidth),
    height: getOptionalNumber(image.height) ?? getOptionalNumber(payload.imageHeight),
  };
}

function normalizeHotspotZone(
  value: unknown,
  index: number,
  defaultTolerance?: number,
): HotspotExpectedZone | null {
  if (!isRecord(value)) {
    return null;
  }

  const center = isRecord(value.center)
    ? value.center
    : isRecord(value.point)
      ? value.point
      : value;
  const x = getOptionalNumber(center.x);
  const y = getOptionalNumber(center.y);

  if (!isNormalizedCoordinate(x) || !isNormalizedCoordinate(y)) {
    return null;
  }

  const tolerance =
    normalizePositiveNumber(value.tolerance) ??
    normalizePositiveNumber(value.radius) ??
    defaultTolerance;

  return {
    id: getOptionalString(value.id) ?? `zone-${index + 1}`,
    label: getOptionalString(value.label),
    x,
    y,
    tolerance,
  };
}

function normalizeHotspotZones(
  value: unknown,
  defaultTolerance?: number,
): HotspotExpectedZone[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry, index) => normalizeHotspotZone(entry, index, defaultTolerance))
    .filter((entry): entry is HotspotExpectedZone => Boolean(entry));
}

export function normalizePersistedHotspotQuestion(
  input: PersistedQuestionInput,
): HotspotQuestion {
  const payload = isRecord(input.answerPayload)
    ? (input.answerPayload as PersistedHotspotPayload & Record<string, unknown>)
    : {};
  const defaultTolerance =
    normalizePositiveNumber(payload.defaultTolerance) ??
    normalizePositiveNumber(payload.tolerance);

  const points = input.points ?? getOptionalNumber(payload.points) ?? 1;
  const rawTags = input.tags ?? payload.tags;
  const tags = Array.isArray(rawTags) ? normalizeStringArray(rawTags) : undefined;
  const source = input.source ?? getOptionalString(payload.source);

  return {
    id: input.id ?? "",
    type: "hotspot",
    format: normalizePersistedQuestionFormat(input),
    statement: input.statement ?? input.question ?? "",
    explanation: input.explanation ?? undefined,
    points,
    tags: tags && tags.length > 0 ? tags : undefined,
    source,
    image: normalizeHotspotImage(payload),
    expectedZones: normalizeHotspotZones(
      payload.zones ?? payload.expectedZones,
      defaultTolerance,
    ),
    defaultTolerance,
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}

export function normalizePersistedQuestion(input: PersistedQuestionInput): Question {
  const questionFormat = normalizePersistedQuestionFormat(input);
  const questionType = getQuestionFormatRuntimeType(questionFormat) as QuestionType;
  const answerPayload = isRecord(input.answerPayload) ? input.answerPayload : {};

  const points = input.points ?? getOptionalNumber(answerPayload.points) ?? 1;
  const rawTags = input.tags ?? answerPayload.tags;
  const tags = Array.isArray(rawTags) ? normalizeStringArray(rawTags) : undefined;
  const source = input.source ?? getOptionalString(answerPayload.source);

  const enrichedInput: PersistedQuestionInput = {
    ...input,
    points,
    tags: tags && tags.length > 0 ? tags : undefined,
    source,
  };

  if (questionType === "mcq") {
    const requiredSelectionCount =
      input.requiredSelectionCount ?? getOptionalNumber(answerPayload.requiredSelectionCount);

    return normalizeLegacyMcqQuestion({
      ...enrichedInput,
      id: input.id ?? "",
      format: questionFormat,
      requiredSelectionCount,
    });
  }

  if (questionType === "short-answer") {
    return normalizePersistedShortAnswerQuestion(enrichedInput);
  }

  if (questionType === "hotspot") {
    return normalizePersistedHotspotQuestion(enrichedInput);
  }

  return {
    id: input.id ?? "",
    type: questionType,
    format: questionFormat,
    statement: input.statement ?? input.question ?? "",
    explanation: input.explanation ?? undefined,
    points,
    tags: tags && tags.length > 0 ? tags : undefined,
    source,
  } as Question;
}
