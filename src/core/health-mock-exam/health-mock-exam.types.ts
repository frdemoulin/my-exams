import type { QuizAnswerFormatValue } from "@/core/quiz/quiz-answer-format";
import type {
  EvaluationStatus,
  Question,
  QuestionType,
  StudentAnswer,
} from "@/core/questions";
import type {
  TrainingChoiceContent,
  TrainingQuestionDiagramContent,
} from "@/core/training/training-choice-content";

export type HealthMockExamQuestionGroup = {
  id: string;
  title: string | null;
  sharedStatement: string;
  order: number;
};

export type HealthMockExamPassageQuestion = {
  attemptQuestionId: string;
  id: string;
  globalOrder: number;
  order: number;
  questionType: QuestionType;
  answerFormat: QuizAnswerFormatValue;
  question: string;
  questionDiagram: TrainingQuestionDiagramContent | null;
  choices: TrainingChoiceContent[];
  answerPayload: unknown | null;
  canonicalQuestion: Question;
  group: HealthMockExamQuestionGroup | null;
  selectedChoiceIndexes: number[];
  responsePayload: StudentAnswer | null;
  markedForReview: boolean;
};

export type HealthMockExamPassage = {
  attemptId: string;
  startedAt: string;
  deadlineAt: string;
  title: string;
  slug?: string;
  type?: "MOCK_EXAM" | "COLLE";
  description?: string | null;
  instructions: string | null;
  questionCount: number;
  courseUnit?: {
    id: string;
    code: string | null;
    title: string;
    slug: string;
  };
  sections: Array<{
    id: string;
    title: string;
    order: number;
    firstQuestion: number;
    lastQuestion: number;
  }>;
  questions: HealthMockExamPassageQuestion[];
};

export type HealthMockExamSummary = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  durationMinutes: number;
  durationSeconds?: number | null;
  questionCount: number;
  order: number;
  sections: Array<{
    teachingElementId: string;
    title: string;
    questionCount: number;
    firstQuestion: number;
    lastQuestion: number;
  }>;
  attemptCount: number;
  bestPercentage: number | null;
  latestSubmittedAttemptId: string | null;
  currentAttemptId: string | null;
};

export type HealthMockExamResultQuestionScoringDetails = {
  format: "QRU" | "QRM" | "QRP" | "QRPL" | "QROC" | "QZONE";
  scoringStrategy: "all-or-nothing" | "discordance" | "partial" | "custom";
  discordanceCount?: number;
  scoreRatio?: number;
  correctSelectionCount?: number;
  requiredSelectionCount?: number;
  selectionCountValid?: boolean;
};

export type HealthMockExamResultQuestion = HealthMockExamPassageQuestion & {
  correctChoiceIndexes: number[];
  explanation: string;
  choiceExplanations: string[];
  evaluationStatus: EvaluationStatus;
  score: number;
  maxScore: number;
  scoringDetails?: HealthMockExamResultQuestionScoringDetails;
};

export type PedagogicalAssessmentTheme = {
  id: string;
  label: string;
  masteryPercentage: number;
  score: number;
  maxScore: number;
  questionCount: number;
};

export type HealthMockExamPedagogicalAssessment = {
  strengths: PedagogicalAssessmentTheme[];
  toReview: PedagogicalAssessmentTheme[];
  neutralMessage: string | null;
};

export type HealthColleAttemptSummary = {
  id: string;
  score: number;
  maxScore: number;
  percentage: number;
  elapsedSeconds: number;
  submittedAt: string;
  createdAt: string;
};

export type HealthColleProgressItem = {
  colleId: string;
  colleSlug: string;
  attemptCount: number;
  latestAttempt: HealthColleAttemptSummary | null;
  bestAttempt: HealthColleAttemptSummary | null;
  attempts: HealthColleAttemptSummary[];
};

export type HealthCourseUnitEvaluationsProgress = {
  completedCollesCount: number;
  totalCollesCount: number;
  averageScorePercentage: number | null;
  bestScorePercentage: number | null;
  colles: Record<string, HealthColleProgressItem>;
};

export type HealthMockExamResults = {
  attemptId: string;
  status: "SUBMITTED" | "EXPIRED" | "ABANDONED";
  submittedAt: string | null;
  elapsedSeconds: number;
  score: number;
  maxScore: number;
  percentage: number;
  autoSubmitted: boolean;
  title: string;
  slug: string;
  courseUnitId: string;
  courseUnitTitle: string;
  pedagogicalAssessment?: HealthMockExamPedagogicalAssessment;
  questions: HealthMockExamResultQuestion[];
  sections: Array<{
    id: string;
    title: string;
    firstQuestion: number;
    lastQuestion: number;
    score: number;
    maxScore: number;
    percentage: number;
  }>;
};
