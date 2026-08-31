import type { QuizDifficulty } from "@prisma/client";
import type { TrainingChoiceContent } from "@/core/training/training-choice-content";
import type { PersistedQuestionInput } from "./question-persistence";
import type { ShortAnswerNormalizationOptions } from "./question.types";

export type HealthAuthorChoice = {
  content: TrainingChoiceContent;
  correct: boolean;
  explanation?: string;
};

export type BaseHealthAuthorQuestion = {
  order: number;
  difficulty: QuizDifficulty | "EASY" | "MEDIUM" | "HARD";
  question: string;
  explanation?: string | null;
  questionDiagram?: unknown;
  points?: number;
  tags?: string[];
  source?: string;
  reims5Items?: boolean;
};

export type HealthTrainingAuthorQruQuestion = BaseHealthAuthorQuestion & {
  format: "QRU";
  choices: HealthAuthorChoice[];
};

export type HealthTrainingAuthorQrmQuestion = BaseHealthAuthorQuestion & {
  format: "QRM";
  choices: HealthAuthorChoice[];
};

export type HealthTrainingAuthorQrpQuestion = BaseHealthAuthorQuestion & {
  format: "QRP";
  requiredSelectionCount: number;
  choices: HealthAuthorChoice[];
};

export type HealthTrainingAuthorQrplQuestion = BaseHealthAuthorQuestion & {
  format: "QRPL";
  requiredSelectionCount: number;
  choices: HealthAuthorChoice[];
};

export type AuthorQrocTextAnswer = {
  type: "text";
  acceptedAnswers: string[];
  normalization?: ShortAnswerNormalizationOptions;
};

export type AuthorQrocNumberAnswer = {
  type: "number";
  value?: number;
  tolerance?: number;

  /**
   * Unité canonique/métier.
   * Exemple : "g/mol", "%", "mol/L".
   * Elle n'est PAS à saisir par l'étudiant.
   */
  unit?: string;

  /**
   * Fragment TeX utilisé pour l'affichage près du champ de réponse.
   * Ne pas inclure les délimiteurs $...$.
   * Exemple : \\mathrm{g}\\cdot\\mathrm{mol}^{-1}
   */
  displayUnit?: string;

  /**
   * Compatibilité avec les anciens seeds uniquement.
   * À considérer comme déprécié pour les nouveaux contenus.
   */
  acceptedUnits?: string[];

  /**
   * Format imbriqué utilisé par certains seeds auteurs (ex : EB02).
   */
  numericAnswer?: {
    value: number;
    tolerance?: number;
    unit?: string;
    displayUnit?: string;
    acceptedUnits?: string[];
  };
};

export type HealthTrainingAuthorQrocQuestion = BaseHealthAuthorQuestion & {
  format: "QROC";
  answer: AuthorQrocTextAnswer | AuthorQrocNumberAnswer;
};

export type AuthorQzoneImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type AuthorQzoneExpectedZone = {
  id?: string;
  label?: string;
  x: number;
  y: number;
  tolerance?: number;
};

export type HealthTrainingAuthorQzoneQuestion = BaseHealthAuthorQuestion & {
  format: "QZONE";
  image: AuthorQzoneImage;
  expectedZones: AuthorQzoneExpectedZone[];
  defaultTolerance?: number;
};

export type HealthTrainingAuthorQuestion =
  | HealthTrainingAuthorQruQuestion
  | HealthTrainingAuthorQrmQuestion
  | HealthTrainingAuthorQrpQuestion
  | HealthTrainingAuthorQrplQuestion
  | HealthTrainingAuthorQrocQuestion
  | HealthTrainingAuthorQzoneQuestion;

export type LegacySeedQuestionInput = Omit<PersistedQuestionInput, "id"> & {
  id?: string;
  order: number;
  difficulty: QuizDifficulty | "EASY" | "MEDIUM" | "HARD";
  question: string;
  choices?: unknown;
  correctChoiceIndexes?: number[];
  choiceExplanations?: string[];
  questionDiagram?: unknown;
  answerFormat?: unknown;
  questionType?: string;
  answerPayload?: unknown;
};

export type HealthSeedQuestion = LegacySeedQuestionInput | HealthTrainingAuthorQuestion;

export function isHealthTrainingAuthorQuestion(
  value: unknown,
): value is HealthTrainingAuthorQuestion {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  const format = candidate.format;

  if (typeof format !== "string") {
    return false;
  }

  return ["QRU", "QRM", "QRP", "QRPL", "QROC", "QZONE"].includes(format);
}
