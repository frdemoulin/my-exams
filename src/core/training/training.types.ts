import type { QuizDifficulty } from '@prisma/client';

export type TrainingChapterListItem = {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questionCount: number;
  difficulties: QuizDifficulty[];
};

export type TrainingQuestion = {
  id: string;
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
};

export type TrainingChapterDetail = {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questions: TrainingQuestion[];
  domainIds: string[];
};
