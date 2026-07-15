'use client';

import { QuizSession } from '@/components/training/quiz-session';

type HealthChapterQuizSessionProps = {
  chapterId: string;
  chapterSlug: string;
  quizId: string;
  questions: Parameters<typeof QuizSession>[0]['questions'];
  correctionMode?: Parameters<typeof QuizSession>[0]['correctionMode'];
  canEditQuestions?: boolean;
  isAuthenticated: boolean;
  targetScore?: number;
};

export function HealthChapterQuizSession({
  chapterId,
  chapterSlug,
  quizId,
  questions,
  correctionMode = 'final',
  canEditQuestions = false,
  isAuthenticated,
  targetScore = 70,
}: HealthChapterQuizSessionProps) {
  const handleAttemptComplete: NonNullable<
    Parameters<typeof QuizSession>[0]['onAttemptComplete']
  > = async ({ score, totalQuestions }) => {
    if (!isAuthenticated) {
      return;
    }

    try {
      await fetch('/api/training/path-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chapterId,
          chapterSlug,
          quizId,
          score,
          targetScore,
          totalQuestions,
        }),
      });
    } catch {
      return;
    }
  };

  return (
    <QuizSession
      questions={questions}
      correctionMode={correctionMode}
      canEditQuestions={canEditQuestions}
      onAttemptComplete={handleAttemptComplete}
    />
  );
}
