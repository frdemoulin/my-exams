import type {
  ChapterSectionKind,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

export type TrainingPathStepStatus =
  | 'locked'
  | 'available'
  | 'in-progress'
  | 'mastered';

export type TrainingPathQuizProgress = {
  bestScore: number;
  totalQuestions: number;
  successRate: number;
  completedAt: string;
  validatedAt: string | null;
};

export type TrainingPathProgress = {
  version: 1;
  chapterSlug: string;
  quizProgressBySlug: Record<string, TrainingPathQuizProgress>;
  validatedQuizSlugs: string[];
  updatedAt: string;
};

export type TrainingPathOverviewQuiz = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  order: number;
  questionCount: number;
  stage: TrainingQuizStage | null;
  href: string;
};

export type TrainingPathOverviewSection = {
  id: string;
  title: string;
  description: string | null;
  kind: ChapterSectionKind;
  order: number;
  label: string;
  quizzes: TrainingPathOverviewQuiz[];
};

export type TrainingLevelListItem = {
  value: string;
  slug: string;
  label: string;
  chapterCount: number;
  questionCount: number;
  quizCount: number;
};

export type TrainingLevelDetail = TrainingLevelListItem & {
  chapters: TrainingChapterListItem[];
};

export type TrainingChapterListItem = {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questionCount: number;
  quizCount: number;
  stages: TrainingQuizStage[];
};

export type TrainingQuestion = {
  id: string;
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
  group: TrainingQuestionGroup | null;
  themeLabels: string[];
};

export type TrainingQuestionGroup = {
  id: string;
  title: string | null;
  sharedStatement: string;
  order: number;
};

export type TrainingQuiz = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  order: number;
  stage: TrainingQuizStage | null;
  questions: TrainingQuestion[];
};

export type TrainingChapterSection = {
  id: string;
  title: string;
  description: string | null;
  kind: ChapterSectionKind;
  order: number;
  themeIds: string[];
  quizzes: TrainingQuiz[];
};

export type TrainingChapterDetail = {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questionCount: number;
  quizCount: number;
  domainIds: string[];
  sections: TrainingChapterSection[];
};
