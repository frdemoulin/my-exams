import type { TrainingChoiceContent } from "@/core/training/training-choice-content";

import type { QuestionFormatCode } from "./question-format";

export const questionTypeValues = [
  "mcq",
  "short-answer",
  "hotspot",
  "matching",
  "long-answer",
] as const;

export type QuestionType = (typeof questionTypeValues)[number];

export type QuestionMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }
  | {
      type: "formula";
      value: string;
    }
  | {
      type: "table";
      rows: string[][];
    };

export type BaseQuestion = {
  id: string;
  type: QuestionType;
  format?: QuestionFormatCode;
  statement: string;
  explanation?: string;
  media?: QuestionMedia[];
  points?: number;
  tags?: string[];
  source?: string;
};

export type QuestionScoringStrategy =
  | "all-or-nothing"
  | "per-choice"
  | "partial"
  | "discordance";

export type McqSelectionMode = "single" | "multiple";

export type McqChoice = {
  id: string;
  content: TrainingChoiceContent;
  correct: boolean;
  explanation?: string;
};

export type MultipleChoiceQuestion = BaseQuestion & {
  type: "mcq";
  selectionMode: McqSelectionMode;
  requiredSelectionCount?: number;
  choices: McqChoice[];
  scoring: {
    strategy: Extract<QuestionScoringStrategy, "all-or-nothing" | "discordance">;
  };
};

export type ShortAnswerNormalizationOptions = {
  trim?: boolean;
  collapseWhitespace?: boolean;
  caseSensitive?: boolean;
  ignoreAccents?: boolean;
  normalizeUnicode?: boolean;
  normalizeApostrophes?: boolean;
  normalizePunctuationSpacing?: boolean;
};

export type AcceptedShortAnswer = {
  value: string;
};

export type NumericShortAnswer = {
  value: number;
  tolerance?: number;
  unit?: string;
  displayUnit?: string;
  /** @deprecated Compatibilité anciens contenus. */
  acceptedUnits?: string[];
};

export type ShortAnswerQuestion = BaseQuestion & {
  type: "short-answer";
  answerType: "text" | "number";
  acceptedAnswers?: AcceptedShortAnswer[];
  numericAnswer?: NumericShortAnswer;
  normalization?: ShortAnswerNormalizationOptions;
  scoring: {
    strategy: Extract<QuestionScoringStrategy, "all-or-nothing">;
  };
};

export type HotspotPoint = {
  x: number;
  y: number;
};

export type HotspotImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HotspotExpectedZone = {
  id: string;
  label?: string;
  x: number;
  y: number;
  tolerance?: number;
};

export type HotspotQuestion = BaseQuestion & {
  type: "hotspot";
  image?: HotspotImage;
  expectedZones: HotspotExpectedZone[];
  defaultTolerance?: number;
  scoring: {
    strategy: Extract<QuestionScoringStrategy, "all-or-nothing">;
  };
};

export type MatchingQuestion = BaseQuestion & {
  type: "matching";
};

export type LongAnswerQuestion = BaseQuestion & {
  type: "long-answer";
};

export type Question =
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | HotspotQuestion
  | MatchingQuestion
  | LongAnswerQuestion;

export type McqStudentAnswer = {
  questionId: string;
  type: "mcq";
  selectedChoiceIds: string[];
};

export type ShortAnswerStudentAnswer = {
  questionId: string;
  type: "short-answer";
  rawValue: string;
};

export type HotspotStudentAnswer = {
  questionId: string;
  type: "hotspot";
  points: HotspotPoint[];
};

export type MatchingStudentAnswer = {
  questionId: string;
  type: "matching";
  associations: Array<{
    promptId: string;
    choiceId: string;
  }>;
};

export type LongAnswerStudentAnswer = {
  questionId: string;
  type: "long-answer";
  rawValue: string;
};

export type StudentAnswer =
  | McqStudentAnswer
  | ShortAnswerStudentAnswer
  | HotspotStudentAnswer
  | MatchingStudentAnswer
  | LongAnswerStudentAnswer;

export type EvaluationStatus =
  | "correct"
  | "partial"
  | "incorrect"
  | "unanswered";

export type EvaluationResult = {
  questionId: string;
  status: EvaluationStatus;
  score: number;
  maxScore: number;
  details?: Record<string, unknown>;
};
