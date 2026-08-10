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
  instructions: string | null;
  questionCount: number;
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

export type HealthMockExamResultQuestion = HealthMockExamPassageQuestion & {
  correctChoiceIndexes: number[];
  explanation: string;
  choiceExplanations: string[];
  evaluationStatus: EvaluationStatus;
  score: number;
  maxScore: number;
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
