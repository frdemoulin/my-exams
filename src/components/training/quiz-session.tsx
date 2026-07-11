'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ListChecks,
  Pencil,
  Target,
  XCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { areChoiceIndexSetsEqual } from '@/core/quiz/quiz-answer-format';
import type { TrainingQuestion } from '@/core/training';
import type { TrainingChoiceContent } from '@/core/training/training-choice-content';
import {
  isCatchAllChoice,
  reorderCatchAllChoices,
} from '@/core/training/training-choice-ordering';
import { cn } from '@/lib/utils';
import { MathContent } from './math-content';
import { TrainingChoiceContentView } from './training-choice-content-view';
import { TrainingQuestionContentView } from './training-question-content-view';

type QuizSessionProps = {
  questions: TrainingQuestion[];
  pathContext?: QuizSessionPathContext;
  correctionMode?: 'instant' | 'final';
  canEditQuestions?: boolean;
};

type QuizSessionPathContext = {
  chapterHref: string;
  hasLockedSections: boolean;
  isAuthenticated: boolean;
  nextQuizHref: string | null;
  targetScore: number;
  onAttemptComplete?: (payload: {
    score: number;
    targetScore: number;
    totalQuestions: number;
  }) => void | Promise<void>;
  unlockHref?: string | null;
};

type SummaryFeedback = {
  title: string;
  message: string;
  toneClassName: string;
};

type QuestionReviewItem = {
  index: number;
  question: TrainingQuestion;
};

type QuestionNavigationStatus =
  | 'current'
  | 'correct'
  | 'incorrect'
  | 'answered'
  | 'unanswered';

type QuizViewMode = 'taking' | 'summary' | 'review';

const questionNavigationStatusLabels: Record<QuestionNavigationStatus, string> = {
  current: 'Question en cours',
  correct: 'Réponse correcte',
  incorrect: 'Réponse à revoir',
  answered: 'Réponse enregistrée',
  unanswered: 'Non répondue',
};

const getQuestionNavigationStatus = ({
  correctionMode,
  isReviewMode,
  isAnswered,
  selectedChoiceIndexes,
  correctChoiceIndexes,
  index,
  currentIndex,
}: {
  correctionMode: 'instant' | 'final';
  isReviewMode: boolean;
  isAnswered: boolean;
  selectedChoiceIndexes: number[];
  correctChoiceIndexes: number[];
  index: number;
  currentIndex: number;
}): QuestionNavigationStatus => {
  if (index === currentIndex) {
    return 'current';
  }

  if (!isAnswered) {
    return 'unanswered';
  }

  if (correctionMode === 'final' && !isReviewMode) {
    return 'answered';
  }

  return areChoiceIndexSetsEqual(selectedChoiceIndexes, correctChoiceIndexes)
    ? 'correct'
    : 'incorrect';
};

const getQuestionNavigationButtonClassName = (
  status: QuestionNavigationStatus
) => {
  switch (status) {
    case 'current':
      return 'border-brand bg-brand text-white hover:bg-brand-strong hover:text-white';
    case 'correct':
      return 'bg-success text-white shadow-xs hover:bg-success-strong hover:text-white';
    case 'incorrect':
      return 'bg-danger text-white shadow-xs hover:bg-danger-strong hover:text-white';
    case 'answered':
      return 'bg-slate-300 text-slate-950 hover:bg-slate-400 hover:text-slate-950 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-500 dark:hover:text-white';
    case 'unanswered':
    default:
      return 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200';
  }
};

const instantQuestionNavigationLegendItems: Array<{
  status: QuestionNavigationStatus;
  toneClassName: string;
}> = [
  {
    status: 'current',
    toneClassName: 'bg-brand',
  },
  {
    status: 'correct',
    toneClassName: 'bg-success',
  },
  {
    status: 'incorrect',
    toneClassName: 'bg-danger',
  },
  {
    status: 'unanswered',
    toneClassName: 'bg-neutral-secondary-medium',
  },
];

const finalQuestionNavigationLegendItems: Array<{
  status: QuestionNavigationStatus;
  toneClassName: string;
}> = [
  {
    status: 'current',
    toneClassName: 'bg-brand',
  },
  {
    status: 'answered',
    toneClassName: 'bg-slate-400 dark:bg-slate-500',
  },
  {
    status: 'unanswered',
    toneClassName: 'border border-slate-300 bg-transparent dark:border-slate-600 dark:bg-transparent',
  },
];

const hashString = (value: string) => {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash || 1;
};

const formatChoiceLetters = (choiceIndexes: number[]) =>
  choiceIndexes.length > 0
    ? choiceIndexes
        .map((choiceIndex) => String.fromCharCode(65 + choiceIndex))
        .join(', ')
    : 'Aucune';

const getAdminQuestionEditHref = (questionId: string) =>
  `/admin/training/quiz-questions/${questionId}/edit`;

const seededShuffle = <T,>(items: T[], seed: number) => {
  const nextItems = [...items];
  let state = seed;

  const nextRandom = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(nextRandom() * (index + 1));
    [nextItems[index], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[index]];
  }

  return nextItems;
};

const rotateQuestionChoices = (
  choices: TrainingChoiceContent[],
  correctChoiceIndexes: number[],
  variant: number
) => {
  if (variant === 0) {
    return { choices, correctChoiceIndexes };
  }

  const regularChoices = choices.filter((choice) => !isCatchAllChoice(choice));
  const catchAllChoices = choices.filter((choice) => isCatchAllChoice(choice));

  if (regularChoices.length <= 1) {
    return { choices: [...regularChoices, ...catchAllChoices], correctChoiceIndexes };
  }

  const rotationOffset = variant % regularChoices.length;

  if (rotationOffset === 0) {
    return { choices: [...regularChoices, ...catchAllChoices], correctChoiceIndexes };
  }

  const rotatedRegularChoices = regularChoices.map(
    (_, index) =>
      regularChoices[
        (index - rotationOffset + regularChoices.length) % regularChoices.length
      ]
  );

  return {
    choices: [...rotatedRegularChoices, ...catchAllChoices],
    correctChoiceIndexes: correctChoiceIndexes
      .map((correctChoiceIndex) =>
        correctChoiceIndex < regularChoices.length
          ? (correctChoiceIndex + rotationOffset) % regularChoices.length
          : correctChoiceIndex
      )
      .sort((left, right) => left - right),
  };
};

const prepareQuestions = (questions: TrainingQuestion[], variant: number) => {
  return questions.map((question, questionIndex) => {
    const indexedChoices = question.choices.map((choice, choiceIndex) => ({
      choice,
      choiceIndex,
    }));
    const shuffledChoices = seededShuffle(
      indexedChoices,
      hashString(`${question.id}-${questionIndex}`)
    );
    const reorderedShuffledChoices = reorderCatchAllChoices(
      shuffledChoices.map(({ choice }) => choice),
      shuffledChoices
        .filter(({ choiceIndex }) => question.correctChoiceIndexes.includes(choiceIndex))
        .map((entry) => shuffledChoices.indexOf(entry))
    );
    const rotatedQuestionChoices = rotateQuestionChoices(
      reorderedShuffledChoices.choices,
      reorderedShuffledChoices.correctChoiceIndexes,
      variant
    );

    return {
      ...question,
      choices: rotatedQuestionChoices.choices,
      correctChoiceIndexes: rotatedQuestionChoices.correctChoiceIndexes,
    };
  });
};

const getSummaryFeedback = (
  score: number,
  totalQuestions: number
): SummaryFeedback => {
  const ratio = totalQuestions === 0 ? 0 : score / totalQuestions;

  if (ratio === 1) {
    return {
      title: 'Maîtrise très solide.',
      message: 'Toutes les réponses sont justes. Les notions de ce QCM sont bien installées.',
      toneClassName:
        'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
    };
  }

  if (ratio >= 0.8) {
    return {
      title: 'Très bonne maîtrise.',
      message: 'L’essentiel est acquis. Revois seulement les hésitations restantes pour gagner en sûreté.',
      toneClassName:
        'border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-100',
    };
  }

  if (ratio >= 0.6) {
    return {
      title: 'Bases en place.',
      message: 'Les idées importantes sont là, mais certaines étapes restent fragiles. Une nouvelle tentative t’aidera à les fixer.',
      toneClassName:
        'border-brand-soft bg-brand-soft/15 text-heading dark:border-brand/40 dark:bg-brand/10 dark:text-white',
    };
  }

  if (ratio >= 0.4) {
    return {
      title: 'Compréhension à consolider.',
      message: 'Tu commences à repérer les notions du chapitre, mais plusieurs points méritent une reprise attentive.',
      toneClassName:
        'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100',
    };
  }

  return {
    title: 'Repars pas à pas.',
    message: 'Relis calmement les explications, puis refais le QCM question par question pour reconstruire la méthode.',
    toneClassName:
      'border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-100',
  };
};

const getSummaryProgressBarClassName = (successRate: number) => {
  if (successRate >= 80) {
    return 'bg-emerald-500 dark:bg-emerald-400';
  }

  if (successRate >= 60) {
    return 'bg-brand';
  }

  if (successRate >= 40) {
    return 'bg-amber-500 dark:bg-amber-400';
  }

  return 'bg-rose-500 dark:bg-rose-400';
};

const getThemePerformance = ({
  correctItems,
  incorrectItems,
}: {
  correctItems: QuestionReviewItem[];
  incorrectItems: QuestionReviewItem[];
}) => {
  const performanceByTheme = new Map<string, {
    correctQuestionNumbers: number[];
    incorrectQuestionNumbers: number[];
  }>();

  const increment = (
    items: QuestionReviewItem[],
    key: 'correctQuestionNumbers' | 'incorrectQuestionNumbers'
  ) => {
    items.forEach((item) => {
      const labels = item.question.themeLabels.length > 0
        ? item.question.themeLabels
        : ['Notion non renseignée'];

      Array.from(new Set(labels)).forEach((label) => {
        const performance = performanceByTheme.get(label) ?? {
          correctQuestionNumbers: [],
          incorrectQuestionNumbers: [],
        };
        performance[key].push(item.index + 1);
        performanceByTheme.set(label, performance);
      });
    });
  };

  increment(correctItems, 'correctQuestionNumbers');
  increment(incorrectItems, 'incorrectQuestionNumbers');

  const items = Array.from(performanceByTheme.entries())
    .map(([label, performance]) => {
      const correct = performance.correctQuestionNumbers.length;
      const incorrect = performance.incorrectQuestionNumbers.length;
      const total = correct + incorrect;

      return {
        label,
        correct,
        incorrect,
        total,
        successRate: total > 0 ? Math.round((correct / total) * 100) : 0,
        correctQuestionNumbers: performance.correctQuestionNumbers,
        incorrectQuestionNumbers: performance.incorrectQuestionNumbers,
      };
    })
    .sort((left, right) =>
      right.incorrect - left.incorrect ||
      left.successRate - right.successRate ||
      left.label.localeCompare(right.label, 'fr-FR')
    );

  return {
    items,
    validatedThemes: items
      .filter((item) => item.correct > 0 && item.incorrect === 0)
      .slice(0, 3)
      .map((item) => item.label),
    themesToReview: items
      .filter((item) => item.incorrect > 0)
      .slice(0, 3)
      .map((item) => item.label),
  };
};

export function QuizSession({
  questions,
  pathContext,
  correctionMode = 'instant',
  canEditQuestions = false,
}: QuizSessionProps) {
  const [questionOrderVariant, setQuestionOrderVariant] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState(() =>
    prepareQuestions(questions, 0)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceIndexesByQuestion, setSelectedChoiceIndexesByQuestion] = useState<Array<number[]>>(
    () => questions.map(() => [])
  );
  const [submittedAnswers, setSubmittedAnswers] = useState<boolean[]>(
    () => questions.map(() => false)
  );
  const [viewMode, setViewMode] = useState<QuizViewMode>('taking');

  if (sessionQuestions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        Aucun QCM publi&eacute; pour ce chapitre pour le moment.
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];
  const currentGroup = currentQuestion.group;
  const isPathMode = Boolean(pathContext);
  const isFinalCorrectionOnly = correctionMode === 'final';
  const isReviewMode = viewMode === 'review';
  const effectiveAnsweredByQuestion = isFinalCorrectionOnly
    ? selectedChoiceIndexesByQuestion.map((selections) => selections.length > 0)
    : submittedAnswers;
  const currentSelections = selectedChoiceIndexesByQuestion[currentIndex] ?? [];
  const hasAnswered = effectiveAnsweredByQuestion[currentIndex] ?? false;
  const missedChoiceIndexes = currentQuestion.correctChoiceIndexes.filter(
    (choiceIndex) => !currentSelections.includes(choiceIndex)
  );
  const extraChoiceIndexes = currentSelections.filter(
    (choiceIndex) => !currentQuestion.correctChoiceIndexes.includes(choiceIndex)
  );
  const isAnswerLocked =
    isReviewMode || (!isFinalCorrectionOnly && (submittedAnswers[currentIndex] ?? false));
  const isCorrect = areChoiceIndexSetsEqual(
    currentSelections,
    currentQuestion.correctChoiceIndexes
  );
  const answeredCount = effectiveAnsweredByQuestion.filter(Boolean).length;
  const score = sessionQuestions.reduce((total, question, index) => {
    return effectiveAnsweredByQuestion[index] &&
      areChoiceIndexSetsEqual(
        selectedChoiceIndexesByQuestion[index] ?? [],
        question.correctChoiceIndexes
      )
      ? total + 1
      : total;
  }, 0);
  const isComplete = answeredCount === sessionQuestions.length;
  const successRate = Math.round((score / sessionQuestions.length) * 100);
  const clampedSuccessRate = Math.max(0, Math.min(successRate, 100));
  const questionNavigationLegendItems = isFinalCorrectionOnly && !isReviewMode
    ? finalQuestionNavigationLegendItems
    : instantQuestionNavigationLegendItems;
  const selectedChoiceClassName =
    'border-brand bg-brand-soft/15 !text-foreground shadow-xs ring-2 ring-brand/20 dark:border-brand/70 dark:bg-brand/10 dark:!text-white dark:ring-brand/30';
  const targetScore = pathContext?.targetScore ?? 70;
  const hasReachedTarget = successRate >= targetScore;
  const incorrectQuestions: QuestionReviewItem[] = sessionQuestions.flatMap((question, index) => {
    const selectedChoiceIndexes = selectedChoiceIndexesByQuestion[index] ?? [];

    if (
      effectiveAnsweredByQuestion[index] &&
      areChoiceIndexSetsEqual(selectedChoiceIndexes, question.correctChoiceIndexes)
    ) {
      return [];
    }

    return [
      {
        index,
        question,
      },
    ];
  });
  const correctQuestions: QuestionReviewItem[] = sessionQuestions.flatMap((question, index) => {
    const selectedChoiceIndexes = selectedChoiceIndexesByQuestion[index] ?? [];

    if (
      !effectiveAnsweredByQuestion[index] ||
      !areChoiceIndexSetsEqual(selectedChoiceIndexes, question.correctChoiceIndexes)
    ) {
      return [];
    }

    return [
      {
        index,
        question,
      },
    ];
  });
  const groupedErrorCount = incorrectQuestions.filter(
    (item) => item.question.group !== null
  ).length;
  const {
    items: themePerformanceItems,
    themesToReview: topFailedThemeLabels,
    validatedThemes: topValidatedThemeLabels,
  } = getThemePerformance({
    correctItems: correctQuestions,
    incorrectItems: incorrectQuestions,
  });
  const summaryFeedback = getSummaryFeedback(score, sessionQuestions.length);
  const effectiveSummaryFeedback = isPathMode
    ? hasReachedTarget
      ? {
          title: 'Seuil atteint.',
          message: pathContext?.nextQuizHref
            ? `🏆 Tu as atteint ${targetScore}% sur ce QCM. Tu peux passer à la suite, après avoir relu les éventuels points encore fragiles.`
            : !pathContext?.isAuthenticated && pathContext?.hasLockedSections
              ? `🏆 Tu as atteint ${targetScore}% sur ce QCM. Connecte-toi pour poursuivre le chapitre et conserver ta progression.`
            : `🏆 Tu as atteint ${targetScore}% sur ce QCM. Le chapitre est terminé pour cette étape.`,
          toneClassName:
            'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
        }
      : {
          title: 'Seuil non atteint.',
          message: `Tu n’as pas encore atteint ${targetScore}% sur ce QCM. Reprends les corrections et retravaille les questions ratées avant une nouvelle tentative.`,
          toneClassName:
            'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100',
        }
    : summaryFeedback;

  const updateCurrentSelections = (nextSelections: number[]) => {
    setSelectedChoiceIndexesByQuestion((previousSelections) => {
      const nextSelectionsByQuestion = [...previousSelections];
      nextSelectionsByQuestion[currentIndex] = nextSelections;
      return nextSelectionsByQuestion;
    });
  };

  const submitCurrentAnswer = () => {
    if (isFinalCorrectionOnly || isAnswerLocked) return;

    setSubmittedAnswers((previousAnswers) => {
      const nextAnswers = [...previousAnswers];
      nextAnswers[currentIndex] = true;
      return nextAnswers;
    });
  };

  const selectAnswer = (choiceIndex: number) => {
    if (isAnswerLocked) return;

    if (currentQuestion.answerFormat === 'SINGLE') {
      updateCurrentSelections([choiceIndex]);

      if (!isFinalCorrectionOnly) {
        setSubmittedAnswers((previousAnswers) => {
          const nextAnswers = [...previousAnswers];
          nextAnswers[currentIndex] = true;
          return nextAnswers;
        });
      }

      return;
    }

    updateCurrentSelections(
      currentSelections.includes(choiceIndex)
        ? currentSelections.filter((value) => value !== choiceIndex)
        : [...currentSelections, choiceIndex].sort((left, right) => left - right)
    );
  };

  const clearCurrentSelections = () => {
    if (isAnswerLocked) return;

    setSelectedChoiceIndexesByQuestion((previousSelections) => {
      const nextSelections = [...previousSelections];
      nextSelections[currentIndex] = [];
      return nextSelections;
    });
  };

  const goToNextQuestion = () => {
    setCurrentIndex((index) => Math.min(index + 1, sessionQuestions.length - 1));
  };

  const goToPreviousQuestion = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  const resetQuiz = () => {
    const nextVariant = questionOrderVariant + 1;

    setQuestionOrderVariant(nextVariant);
    setSessionQuestions(prepareQuestions(questions, nextVariant));
    setCurrentIndex(0);
    setSelectedChoiceIndexesByQuestion(questions.map(() => []));
    setSubmittedAnswers(questions.map(() => false));
    setViewMode('taking');
  };

  const openSummary = () => {
    if (isPathMode && pathContext) {
      void pathContext.onAttemptComplete?.({
        score,
        targetScore,
        totalQuestions: sessionQuestions.length,
      });
    }

    setViewMode('summary');
  };

  const openReview = () => {
    setCurrentIndex(incorrectQuestions[0]?.index ?? 0);
    setViewMode('review');
  };

  if (viewMode === 'summary' && isComplete) {
    return (
      <section className="space-y-6 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
        <div className={cn('overflow-hidden rounded-2xl border', effectiveSummaryFeedback.toneClassName)}>
          <div className="space-y-5 p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-current/80">
                  <Target className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-wide">Bilan du QCM</p>
                </div>
                <h2 className="text-xl font-semibold text-heading">
                  {effectiveSummaryFeedback.title}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {effectiveSummaryFeedback.message}
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                onClick={openReview}
                className="shrink-0 self-start shadow-sm"
              >
                <ListChecks className="h-4 w-4" />
                Revoir les questions et les corrections
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                Score {score}/{sessionQuestions.length}
              </Badge>
              <Badge variant="outline">{successRate}% de réussite</Badge>
              {isPathMode ? (
                <Badge variant={hasReachedTarget ? 'secondary' : 'outline'}>
                  {hasReachedTarget ? 'Étape validée' : `Objectif ${targetScore}%`}
                </Badge>
              ) : null}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide opacity-70">
                <span>Progression sur ce QCM</span>
                <span>{successRate}%</span>
              </div>
              <div className="relative h-2.5 rounded-full bg-background/70">
                <div
                  className={cn(
                    'h-full rounded-full transition-[width]',
                    getSummaryProgressBarClassName(successRate)
                  )}
                  style={{ width: `${clampedSuccessRate}%` }}
                />
                {isPathMode ? (
                  <div
                    className="absolute inset-y-[-2px] w-px rounded-full bg-current/40"
                    style={{ left: `${Math.max(0, Math.min(targetScore, 100))}%` }}
                  />
                ) : null}
              </div>
              {isPathMode ? (
                <p className="text-xs text-muted-foreground">
                  Repère du parcours : {targetScore}% pour valider cette étape.
                </p>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-xl border border-current/15 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Bonnes réponses
                </p>
                <p className="mt-2 text-2xl font-semibold">{score}</p>
              </div>
              <div className="rounded-xl border border-current/15 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Questions à retravailler
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {sessionQuestions.length - score}
                </p>
              </div>
              <div className="rounded-xl border border-current/15 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Questions
                </p>
                <p className="mt-2 text-2xl font-semibold">{sessionQuestions.length}</p>
              </div>
              <div className="rounded-xl border border-current/15 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Erreurs liées
                </p>
                <p className="mt-2 text-2xl font-semibold">{groupedErrorCount}</p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-300/70 bg-emerald-50/80 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
                  Points validés
                </p>
                {topValidatedThemeLabels.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topValidatedThemeLabels.map((label) => (
                      <Badge key={label} variant="outline" className="border-emerald-300 bg-background/80 dark:border-emerald-800">
                        {label}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Aucun thème n’est encore validé sur cette tentative.
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-amber-300/70 bg-amber-50/80 p-4 dark:border-amber-900 dark:bg-amber-950/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
                  Points à retravailler
                </p>
                {topFailedThemeLabels.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topFailedThemeLabels.map((label) => (
                      <Badge key={label} variant="outline" className="border-amber-300 bg-background/80 dark:border-amber-800">
                        {label}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Aucun thème prioritaire à retravailler.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="rounded-2xl border border-border bg-background p-5">
          <div className="flex items-start gap-3 text-heading">
            <Target className="mt-0.5 h-5 w-5 text-brand" />
            <div>
              <h3 className="text-base font-semibold">Maîtrise par notion</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ce bilan est calculé directement à partir des notions associées aux questions.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {themePerformanceItems.map((item) => {
              const isValidated = item.incorrect === 0;
              const isPartiallyValidated = item.correct > 0 && item.incorrect > 0;
              const statusLabel = isValidated
                ? 'Notion validée'
                : isPartiallyValidated
                  ? 'À consolider'
                  : 'À reprendre';

              return (
                <div
                  key={item.label}
                  className={cn(
                    'rounded-xl border p-4',
                    isValidated
                      ? 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20'
                      : isPartiallyValidated
                        ? 'border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20'
                        : 'border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20'
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="font-semibold text-heading">{item.label}</p>
                    <Badge variant="outline">
                      {item.correct}/{item.total} · {statusLabel}
                    </Badge>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-background">
                    <div
                      className={cn(
                        'h-full rounded-full',
                        getSummaryProgressBarClassName(item.successRate)
                      )}
                      style={{ width: `${item.successRate}%` }}
                    />
                  </div>
                  <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {item.correctQuestionNumbers.length > 0 ? (
                      <p>
                        Réussie{item.correctQuestionNumbers.length > 1 ? 's' : ''} : question{item.correctQuestionNumbers.length > 1 ? 's' : ''} {item.correctQuestionNumbers.join(', ')}.
                      </p>
                    ) : null}
                    {item.incorrectQuestionNumbers.length > 0 ? (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p>
                          À revoir : question{item.incorrectQuestionNumbers.length > 1 ? 's' : ''} {item.incorrectQuestionNumbers.join(', ')}.
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="xs"
                          onClick={() => {
                            setCurrentIndex(item.incorrectQuestionNumbers[0] - 1);
                            setViewMode('review');
                          }}
                        >
                          <ListChecks className="h-3.5 w-3.5" />
                          Revoir
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {themePerformanceItems.some((item) => item.incorrect > 0) ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="text-base font-semibold text-heading">Plan de reprise</h3>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              {themePerformanceItems
                .filter((item) => item.incorrect > 0)
                .map((item, index) => (
                  <li key={item.label}>
                    <span className="font-semibold text-heading">{index + 1}. {item.label}</span>
                    {' '}– reprendre la correction des questions {item.incorrectQuestionNumbers.join(', ')}.
                  </li>
                ))}
            </ol>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={resetQuiz}>
            {isPathMode ? 'Recommencer ce QCM' : 'Recommencer'}
          </Button>
          {isPathMode && pathContext?.nextQuizHref && hasReachedTarget ? (
            <Button asChild size="sm">
              <Link href={pathContext.nextQuizHref}>Continuer le parcours</Link>
            </Button>
          ) : null}
          {isPathMode && !pathContext?.isAuthenticated && pathContext?.hasLockedSections && hasReachedTarget && pathContext.unlockHref ? (
            <Button asChild size="sm">
              <Link href={pathContext.unlockHref}>Débloquer la suite</Link>
            </Button>
          ) : null}
          {isPathMode ? (
            <Button asChild variant="outline" size="sm">
              <Link href={pathContext?.chapterHref ?? '/entrainement'}>
                Retour au parcours
              </Link>
            </Button>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="space-y-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {isReviewMode ? 'Correction · ' : ''}Question {currentIndex + 1} / {sessionQuestions.length}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              {isReviewMode
                ? isCorrect
                  ? 'Réponse correcte'
                  : 'Réponse à revoir'
                : isFinalCorrectionOnly
                ? `${answeredCount}/${sessionQuestions.length} traitée${answeredCount > 1 ? 's' : ''}`
                : `Score ${score}/${sessionQuestions.length}`}
            </Badge>
          </div>
        </div>

        <nav
          aria-label="Navigation entre les questions du QCM"
          className="space-y-2"
        >
          <div className="flex overflow-hidden rounded-xl border border-border bg-background">
            <button
              type="button"
              onClick={goToPreviousQuestion}
              disabled={currentIndex === 0}
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center border-r border-border text-sm font-medium text-body transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-auto md:w-auto md:px-3',
                currentIndex === 0
                  ? 'cursor-not-allowed bg-neutral-primary-soft text-muted-foreground'
                  : 'bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading'
              )}
            >
              <ChevronLeft className="h-4 w-4 md:hidden" />
              <span className="sr-only md:not-sr-only">Précédent</span>
            </button>

            <div className="flex-1 overflow-x-auto">
              <ol className="flex min-w-full">
                {sessionQuestions.map((question, index) => {
                  const status = getQuestionNavigationStatus({
                    correctionMode,
                    isReviewMode,
                    isAnswered: effectiveAnsweredByQuestion[index] ?? false,
                    selectedChoiceIndexes:
                      selectedChoiceIndexesByQuestion[index] ?? [],
                    correctChoiceIndexes: question.correctChoiceIndexes,
                    index,
                    currentIndex,
                  });
                  const statusLabel = questionNavigationStatusLabels[status];

                  return (
                    <li
                      key={question.id}
                      className="min-w-11 flex-1 border-r border-border last:border-r-0"
                    >
                      <button
                        type="button"
                        onClick={() => goToQuestion(index)}
                        aria-current={status === 'current' ? 'page' : undefined}
                        aria-label={`Aller à la question ${index + 1} (${statusLabel.toLowerCase()})`}
                        className={cn(
                          'flex h-10 w-full items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset',
                          getQuestionNavigationButtonClassName(status)
                        )}
                      >
                        {index + 1}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <button
              type="button"
              onClick={goToNextQuestion}
              disabled={currentIndex === sessionQuestions.length - 1}
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center border-l border-border text-sm font-medium text-body transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-auto md:w-auto md:px-3',
                currentIndex === sessionQuestions.length - 1
                  ? 'cursor-not-allowed bg-neutral-primary-soft text-muted-foreground'
                  : 'bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading'
              )}
            >
              <span className="sr-only md:not-sr-only">Suivant</span>
              <ChevronRight className="h-4 w-4 md:hidden" />
            </button>
          </div>

          <div className="hidden flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground md:flex">
            {questionNavigationLegendItems.map((item) => (
              <span key={item.status} className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn('h-2.5 w-2.5 rounded-full', item.toneClassName)}
                />
                {questionNavigationStatusLabels[item.status]}
              </span>
            ))}
          </div>
        </nav>
      </div>

      {currentGroup ? (
        <div className="rounded-xl border border-brand/15 bg-brand-soft/10 p-4 text-sm text-heading">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {currentGroup.title?.trim() ? currentGroup.title : 'Énoncé commun'}
          </p>
          <div className="mt-2 leading-6">
            <MathContent value={currentGroup.sharedStatement} />
          </div>
        </div>
      ) : null}

      <div className="rounded-xl border border-border bg-background p-4 text-base font-medium text-heading">
        {canEditQuestions ? (
          <div className="mb-3 flex justify-end">
            <Button asChild variant="outline" size="xs">
              <Link href={getAdminQuestionEditHref(currentQuestion.id)}>
                <Pencil className="h-3.5 w-3.5" />
                Éditer la question
              </Link>
            </Button>
          </div>
        ) : null}
        <TrainingQuestionContentView
          question={currentQuestion.question}
          questionDiagram={currentQuestion.questionDiagram}
        />
      </div>

      {isReviewMode ? (
        <div className="grid gap-3 rounded-xl border border-border bg-card p-4 text-sm md:grid-cols-2">
          <div className="rounded-lg border border-brand/25 bg-brand-soft/10 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Ta réponse
            </p>
            <p className="mt-2 text-base font-semibold text-heading">
              {formatChoiceLetters(currentSelections)}
            </p>
            {extraChoiceIndexes.length > 0 ? (
              <p className="mt-1 text-xs text-rose-700 dark:text-rose-300">
                Choix en trop : {formatChoiceLetters(extraChoiceIndexes)}.
              </p>
            ) : null}
          </div>
          <div className="rounded-lg border border-emerald-300/60 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
              Réponse attendue
            </p>
            <p className="mt-2 text-base font-semibold text-emerald-950 dark:text-emerald-100">
              {formatChoiceLetters(currentQuestion.correctChoiceIndexes)}
            </p>
            {missedChoiceIndexes.length > 0 ? (
              <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                À cocher aussi : {formatChoiceLetters(missedChoiceIndexes)}.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="grid gap-3">
        {currentQuestion.choices.map((choice, choiceIndex) => {
          const isSelected = currentSelections.includes(choiceIndex);
          const isRightChoice = currentQuestion.correctChoiceIndexes.includes(choiceIndex);
          const showSelectedAsIncorrect =
            hasAnswered && isSelected && !isRightChoice &&
            (isReviewMode || !isFinalCorrectionOnly);
          const showSelectedAsAnswered =
            isFinalCorrectionOnly && !isReviewMode && hasAnswered && isSelected;
          const showAsCorrect =
            isRightChoice &&
            ((isReviewMode && isSelected) || (!isReviewMode && !isFinalCorrectionOnly && isAnswerLocked));
          const showAsMissedExpected = isReviewMode && isRightChoice && !isSelected;

          return (
            <button
              key={`${currentQuestion.id}-${choiceIndex}`}
              type="button"
              disabled={isAnswerLocked}
              onClick={() => selectAnswer(choiceIndex)}
              className={cn(
                'flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                !isAnswerLocked && 'hover:border-brand/50 hover:bg-neutral-secondary-soft',
                showAsCorrect && 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
                isReviewMode && isSelected && isRightChoice && 'ring-2 ring-emerald-400/70',
                showAsMissedExpected && 'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100',
                showSelectedAsIncorrect && 'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-100',
                showSelectedAsAnswered && selectedChoiceClassName,
                !isAnswerLocked && isSelected && selectedChoiceClassName
              )}
            >
              <span className="flex min-w-0 flex-1 items-baseline gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center self-baseline rounded-full border border-brand bg-brand text-xs font-semibold leading-none text-white shadow-xs">
                  {String.fromCharCode(65 + choiceIndex)}
                </span>
                <span className="min-w-0 flex-1 self-baseline">
                  <TrainingChoiceContentView choice={choice} />
                </span>
              </span>
              {showAsCorrect ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              ) : null}
              {showSelectedAsIncorrect ? (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
              ) : null}
              {isReviewMode ? (
                <span className="flex shrink-0 flex-wrap justify-end gap-1 self-start">
                  {isSelected ? (
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-[11px]',
                        isRightChoice
                          ? 'border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100'
                          : 'border-rose-400 bg-rose-100 text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-100'
                      )}
                    >
                      Ton choix
                    </Badge>
                  ) : null}
                  {isRightChoice ? (
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-[11px]',
                        isSelected
                          ? 'border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100'
                          : 'border-amber-400 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100'
                      )}
                    >
                      Attendue
                    </Badge>
                  ) : null}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {(isReviewMode || (isAnswerLocked && !isFinalCorrectionOnly)) ? (
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
          {answeredCount} {answeredCount > 1 ? 'questions traitées.' : 'question traitée.'}
          {isComplete
            ? isFinalCorrectionOnly
              ? ' QCM terminé.'
              : ` Score final : ${score}/${sessionQuestions.length}.`
            : null}
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
          {!isAnswerLocked && currentQuestion.answerFormat === 'MULTIPLE' ? (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={clearCurrentSelections}
                disabled={currentSelections.length === 0}
              >
                Effacer la sélection
              </Button>
              {!isFinalCorrectionOnly ? (
                <Button
                  type="button"
                  size="sm"
                  onClick={submitCurrentAnswer}
                  disabled={currentSelections.length === 0}
                >
                  Valider la réponse
                </Button>
              ) : null}
            </>
          ) : null}
          {isReviewMode ? (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setViewMode('summary')}
              >
                Retour aux résultats
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={goToNextQuestion}
                disabled={currentIndex === sessionQuestions.length - 1}
              >
                Suivant
              </Button>
            </>
          ) : isComplete ? (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={goToNextQuestion}
                disabled={currentIndex === sessionQuestions.length - 1}
              >
                Suivant
              </Button>
              <Button type="button" size="sm" onClick={openSummary}>
                Voir les résultats
              </Button>
            </>
          ) : (
            <Button
              type="button"
              size="sm"
              onClick={goToNextQuestion}
              disabled={currentIndex === sessionQuestions.length - 1}
            >
              Suivant
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
