'use client';

import { QuizSession } from '@/components/training/quiz-session';

type HealthChapterQuizSessionProps = {
  sessionId?: string;
  watermarkCode?: string;
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
  sessionId,
  watermarkCode,
  chapterId,
  chapterSlug,
  quizId,
  questions,
  correctionMode = 'final',
  canEditQuestions = false,
  isAuthenticated,
  targetScore = 70,
}: HealthChapterQuizSessionProps) {
  const handleSubmitAnswers: NonNullable<
    Parameters<typeof QuizSession>[0]['onSubmitAnswers']
  > = async ({ answers }) => {
    try {
      const response = await fetch('/api/training/quiz-session/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId || `guest_${quizId}`,
          chapterId,
          chapterSlug,
          quizId,
          answers,
          targetScore,
        }),
      });

      if (!response.ok) {
        throw new Error('La soumission du quiz a échoué.');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Erreur lors de la soumission du quiz:', err);
      throw err;
    }
  };

  const handleAttemptComplete: NonNullable<
    Parameters<typeof QuizSession>[0]['onAttemptComplete']
  > = async ({ score, totalQuestions }) => {
    // If we have a server sessionId, the progress is already recorded in submitTrainingQuizSession.
    // Otherwise, fallback to legacy path-progress route for guest synchronization.
    if (!sessionId && isAuthenticated) {
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
    }
  };

  return (
    <QuizSession
      questions={questions}
      watermarkCode={watermarkCode}
      correctionMode={correctionMode}
      canEditQuestions={canEditQuestions}
      onSubmitAnswers={handleSubmitAnswers}
      onAttemptComplete={handleAttemptComplete}
    />
  );
}

