export const unessQuestionFormatCodes = [
  "QRU",
  "QRM",
  "QRP",
  "QRPL",
  "QROC",
  "QROL",
  "QZONE",
  "QTCS",
] as const;

export type UnessQuestionFormatCode = (typeof unessQuestionFormatCodes)[number];
export type MyExamsQuestionFormatCode = "matching";
export type QuestionFormatCode = UnessQuestionFormatCode | MyExamsQuestionFormatCode;

export const editableChoiceQuestionFormatCodes = ["QRU", "QRM", "QRP"] as const;
export type EditableChoiceQuestionFormatCode =
  (typeof editableChoiceQuestionFormatCodes)[number];
export const editableQuestionFormatCodes = [
  ...editableChoiceQuestionFormatCodes,
  "QROC",
] as const;
export type EditableQuestionFormatCode =
  (typeof editableQuestionFormatCodes)[number];

export type QuestionFormatFamily =
  | "QCM"
  | "open-answer"
  | "zone"
  | "script-concordance"
  | "my-exams-extension";

export type QuestionEngineKind =
  | "choice"
  | "short-answer"
  | "long-answer"
  | "zone"
  | "script-concordance"
  | "matching";

export type QuestionRuntimeType =
  | "mcq"
  | "short-answer"
  | "hotspot"
  | "matching"
  | "long-answer";

export type QuestionFormatSupportStatus =
  | "supported"
  | "priority"
  | "planned"
  | "future"
  | "extension";

export type QuestionFormatDefinition = {
  code: QuestionFormatCode;
  label: string;
  shortLabel: string;
  displayLabel: string;
  family: QuestionFormatFamily;
  engineKind: QuestionEngineKind;
  runtimeType: QuestionRuntimeType;
  supportStatus: QuestionFormatSupportStatus;
  isUness: boolean;
};

export const questionFormatRegistry = {
  QRU: {
    code: "QRU",
    label: "Question à réponse unique",
    shortLabel: "Réponse unique",
    displayLabel: "QRU — Question à réponse unique",
    family: "QCM",
    engineKind: "choice",
    runtimeType: "mcq",
    supportStatus: "supported",
    isUness: true,
  },
  QRM: {
    code: "QRM",
    label: "Question à réponses multiples",
    shortLabel: "Réponses multiples",
    displayLabel: "QRM — Question à réponses multiples",
    family: "QCM",
    engineKind: "choice",
    runtimeType: "mcq",
    supportStatus: "supported",
    isUness: true,
  },
  QRP: {
    code: "QRP",
    label: "Question à nombre de réponses précisé",
    shortLabel: "Nombre de réponses précisé",
    displayLabel: "QRP — Question à nombre de réponses précisé",
    family: "QCM",
    engineKind: "choice",
    runtimeType: "mcq",
    supportStatus: "supported",
    isUness: true,
  },
  QRPL: {
    code: "QRPL",
    label: "Question à nombre de réponses précisé longue",
    shortLabel: "Nombre de réponses précisé, liste longue",
    displayLabel: "QRPL — Question à nombre de réponses précisé longue",
    family: "QCM",
    engineKind: "choice",
    runtimeType: "mcq",
    supportStatus: "planned",
    isUness: true,
  },
  QROC: {
    code: "QROC",
    label: "Question ouverte à rédaction courte",
    shortLabel: "Question ouverte courte",
    displayLabel: "QROC — Question ouverte à rédaction courte",
    family: "open-answer",
    engineKind: "short-answer",
    runtimeType: "short-answer",
    supportStatus: "supported",
    isUness: true,
  },
  QROL: {
    code: "QROL",
    label: "Question ouverte à rédaction longue",
    shortLabel: "Question ouverte longue",
    displayLabel: "QROL — Question ouverte à rédaction longue",
    family: "open-answer",
    engineKind: "long-answer",
    runtimeType: "long-answer",
    supportStatus: "planned",
    isUness: true,
  },
  QZONE: {
    code: "QZONE",
    label: "Question à zone à pointer",
    shortLabel: "Zone à pointer",
    displayLabel: "QZONE — Question à zone à pointer",
    family: "zone",
    engineKind: "zone",
    runtimeType: "hotspot",
    supportStatus: "priority",
    isUness: true,
  },
  QTCS: {
    code: "QTCS",
    label: "Question test de concordance de script",
    shortLabel: "Test de concordance de script",
    displayLabel: "QTCS — Question test de concordance de script",
    family: "script-concordance",
    engineKind: "script-concordance",
    runtimeType: "matching",
    supportStatus: "future",
    isUness: true,
  },
  matching: {
    code: "matching",
    label: "Association",
    shortLabel: "Association",
    displayLabel: "Association",
    family: "my-exams-extension",
    engineKind: "matching",
    runtimeType: "matching",
    supportStatus: "extension",
    isUness: false,
  },
} satisfies Record<QuestionFormatCode, QuestionFormatDefinition>;

export const questionFormatCodes = Object.keys(
  questionFormatRegistry,
) as QuestionFormatCode[];

const genericChoiceAliases = new Set(["choice", "mcq", "qcm"]);

const questionFormatAliases: Record<string, QuestionFormatCode> = {
  qru: "QRU",
  single: "QRU",
  singlechoice: "QRU",
  singlechoicequestion: "QRU",
  qrm: "QRM",
  multiple: "QRM",
  multiplechoice: "QRM",
  multiplechoicequestion: "QRM",
  qrp: "QRP",
  qrpl: "QRPL",
  qroc: "QROC",
  shortanswer: "QROC",
  shortanswerquestion: "QROC",
  qrol: "QROL",
  longanswer: "QROL",
  longanswerquestion: "QROL",
  qzone: "QZONE",
  zone: "QZONE",
  hotspot: "QZONE",
  qtcs: "QTCS",
  scriptconcordance: "QTCS",
  scriptconcordancequestion: "QTCS",
  matching: "matching",
  association: "matching",
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const normalizeFormatKey = (value: unknown) =>
  typeof value === "string"
    ? value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "")
    : "";

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

export function normalizeQuestionFormatCode(value: unknown) {
  const key = normalizeFormatKey(value);

  if (!key || genericChoiceAliases.has(key)) {
    return null;
  }

  return questionFormatAliases[key] ?? null;
}

export function isEditableChoiceQuestionFormatCode(
  value: unknown,
): value is EditableChoiceQuestionFormatCode {
  return editableChoiceQuestionFormatCodes.includes(
    value as EditableChoiceQuestionFormatCode,
  );
}

export function isEditableQuestionFormatCode(
  value: unknown,
): value is EditableQuestionFormatCode {
  return editableQuestionFormatCodes.includes(
    value as EditableQuestionFormatCode,
  );
}

export function normalizeEditableChoiceQuestionFormatCode(value: unknown) {
  const format = normalizeQuestionFormatCode(value);
  return isEditableChoiceQuestionFormatCode(format) ? format : null;
}

export function normalizeEditableQuestionFormatCode(value: unknown) {
  const format = normalizeQuestionFormatCode(value);
  return isEditableQuestionFormatCode(format) ? format : null;
}

export function getAnswerFormatForChoiceQuestionFormat(
  format: EditableChoiceQuestionFormatCode,
) {
  return format === "QRU" ? "SINGLE" : "MULTIPLE";
}

export function normalizeQuestionFormat(
  value: unknown,
  fallback: QuestionFormatCode = "QRU",
): QuestionFormatCode {
  return normalizeQuestionFormatCode(value) ?? fallback;
}

export function getQuestionFormatDefinition(format: QuestionFormatCode) {
  return questionFormatRegistry[format];
}

export function getQuestionFormatDisplayLabel(format: QuestionFormatCode) {
  return getQuestionFormatDefinition(format).displayLabel;
}

export function getQuestionFormatAdminLabel(format: QuestionFormatCode) {
  const definition = getQuestionFormatDefinition(format);
  return definition.isUness
    ? `${definition.code} — ${definition.shortLabel}`
    : definition.displayLabel;
}

export function getQuestionFormatRuntimeType(format: QuestionFormatCode) {
  return getQuestionFormatDefinition(format).runtimeType;
}

export function getQuestionFormatEngineKind(format: QuestionFormatCode) {
  return getQuestionFormatDefinition(format).engineKind;
}

export function isUnessQuestionFormat(format: QuestionFormatCode) {
  return getQuestionFormatDefinition(format).isUness;
}

export function inferChoiceQuestionFormat(input: {
  answerFormat?: unknown;
  requiredSelectionCount?: unknown;
  answerPayload?: unknown;
}): Extract<QuestionFormatCode, "QRU" | "QRM" | "QRP"> {
  const answerPayload = isRecord(input.answerPayload) ? input.answerPayload : {};
  const requiredSelectionCount =
    getOptionalNumber(input.requiredSelectionCount) ??
    getOptionalNumber(answerPayload.requiredSelectionCount);

  if (requiredSelectionCount !== undefined && requiredSelectionCount > 0) {
    return "QRP";
  }

  return typeof input.answerFormat === "string" &&
    input.answerFormat.trim().toUpperCase() === "MULTIPLE"
    ? "QRM"
    : "QRU";
}

export function resolvePersistedQuestionFormat(input: {
  questionFormat?: unknown;
  format?: unknown;
  questionType?: unknown;
  answerFormat?: unknown;
  requiredSelectionCount?: unknown;
  answerPayload?: unknown;
}): QuestionFormatCode {
  const explicitFormat =
    normalizeQuestionFormatCode(input.questionFormat) ??
    normalizeQuestionFormatCode(input.format);

  if (explicitFormat) {
    return explicitFormat;
  }

  const questionTypeKey = normalizeFormatKey(input.questionType);

  if (genericChoiceAliases.has(questionTypeKey) || !questionTypeKey) {
    return inferChoiceQuestionFormat(input);
  }

  return normalizeQuestionFormatCode(input.questionType) ?? inferChoiceQuestionFormat(input);
}
