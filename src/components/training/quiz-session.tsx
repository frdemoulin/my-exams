'use client';

import { useState } from 'react';
import type { QuizDifficulty } from '@prisma/client';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { TrainingQuestion } from '@/core/training';
import { cn } from '@/lib/utils';
import { MathContent } from './math-content';

type QuizSessionProps = {
  questions: TrainingQuestion[];
};

const difficultyLabels: Record<QuizDifficulty, string> = {
  EASY: 'Facile',
  MEDIUM: 'Moyen',
  HARD: 'Difficile',
};

const difficultyBadgeClassNames: Record<QuizDifficulty, string> = {
  EASY: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
  MEDIUM: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
  HARD: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300',
};

export function QuizSession({ questions }: QuizSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(
    () => questions.map(() => null)
  );

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        Aucun QCM publi&eacute; pour ce chapitre pour le moment.
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex] ?? null;
  const hasAnswered = currentAnswer !== null;
  const isCorrect = currentAnswer === currentQuestion.correctChoiceIndex;
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const score = questions.reduce((total, question, index) => {
    return answers[index] === question.correctChoiceIndex ? total + 1 : total;
  }, 0);
  const isComplete = answeredCount === questions.length;

  const selectAnswer = (choiceIndex: number) => {
    if (hasAnswered) return;

    setAnswers((previousAnswers) => {
      const nextAnswers = [...previousAnswers];
      nextAnswers[currentIndex] = choiceIndex;
      return nextAnswers;
    });
  };

  const goToNextQuestion = () => {
    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
  };

  const goToPreviousQuestion = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setAnswers(questions.map(() => null));
  };

  return (
    <section className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            QCM {currentIndex + 1} / {questions.length}
          </p>
          <h2 className="text-lg font-semibold text-heading">
            Question d&apos;entra&icirc;nement
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={cn(
              'w-fit',
              difficultyBadgeClassNames[currentQuestion.difficulty]
            )}
          >
            {difficultyLabels[currentQuestion.difficulty]}
          </Badge>
          <Badge variant="secondary">
            Score {score}/{questions.length}
          </Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-background p-4 text-base font-medium text-heading">
        <MathContent value={currentQuestion.question} />
      </div>

      <div className="grid gap-3">
        {currentQuestion.choices.map((choice, choiceIndex) => {
          const isSelected = currentAnswer === choiceIndex;
          const isRightChoice = currentQuestion.correctChoiceIndex === choiceIndex;

          return (
            <button
              key={`${currentQuestion.id}-${choiceIndex}`}
              type="button"
              disabled={hasAnswered}
              onClick={() => selectAnswer(choiceIndex)}
              className={cn(
                'flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                !hasAnswered && 'hover:border-brand/50 hover:bg-neutral-secondary-soft',
                hasAnswered && isRightChoice && 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
                hasAnswered && isSelected && !isRightChoice && 'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-100'
              )}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-semibold">
                {String.fromCharCode(65 + choiceIndex)}
              </span>
              <span className="flex-1">
                <MathContent value={choice} />
              </span>
              {hasAnswered && isRightChoice ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              ) : null}
              {hasAnswered && isSelected && !isRightChoice ? (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
              ) : null}
            </button>
          );
        })}
      </div>

      {hasAnswered ? (
        <div
          className={cn(
            'rounded-xl border p-4 text-sm',
            isCorrect
              ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100'
              : 'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100'
          )}
        >
          <p className="mb-1 font-semibold">
            {isCorrect ? 'Bonne réponse.' : 'Correction.'}
          </p>
          <MathContent value={currentQuestion.explanation} />
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-border pt-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          {answeredCount} question{answeredCount > 1 ? 's' : ''} trait&eacute;e
          {answeredCount > 1 ? 's' : ''}.
          {isComplete ? ` Score final : ${score}/${questions.length}.` : null}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={goToPreviousQuestion}
            disabled={currentIndex === 0}
          >
            Pr&eacute;c&eacute;dent
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={goToNextQuestion}
            disabled={currentIndex === questions.length - 1}
          >
            Suivant
          </Button>
          {isComplete ? (
            <Button type="button" variant="secondary" size="sm" onClick={resetQuiz}>
              Recommencer
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
