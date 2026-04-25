'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ListChecks,
  Target,
  XCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { TrainingQuestion } from '@/core/training';
import {
  isCatchAllChoice,
  reorderCatchAllChoices,
} from '@/core/training/training-choice-ordering';
import { cn } from '@/lib/utils';
import { MathContent } from './math-content';

type QuizSessionProps = {
  questions: TrainingQuestion[];
  pathContext?: QuizSessionPathContext;
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
  selectedChoice: string | null;
  correctChoice: string | null;
};

type QuestionNavigationStatus = 'current' | 'correct' | 'incorrect' | 'unanswered';

const difficultyFocusLabels = {
  EASY: 'Fondamentaux',
  MEDIUM: 'Mise en pratique',
  HARD: 'Raisonnement',
} as const;

const questionNavigationStatusLabels: Record<QuestionNavigationStatus, string> = {
  current: 'Question en cours',
  correct: 'Réponse correcte',
  incorrect: 'Réponse à revoir',
  unanswered: 'Non répondue',
};

const getQuestionNavigationStatus = ({
  answer,
  correctChoiceIndex,
  index,
  currentIndex,
}: {
  answer: number | null;
  correctChoiceIndex: number;
  index: number;
  currentIndex: number;
}): QuestionNavigationStatus => {
  if (index === currentIndex) {
    return 'current';
  }

  if (answer === null) {
    return 'unanswered';
  }

  return answer === correctChoiceIndex ? 'correct' : 'incorrect';
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
    case 'unanswered':
    default:
      return 'bg-neutral-secondary-medium text-body hover:bg-neutral-tertiary-medium hover:text-heading';
  }
};

const questionNavigationLegendItems: Array<{
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

const hashString = (value: string) => {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash || 1;
};

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
  choices: string[],
  correctChoiceIndex: number,
  variant: number
) => {
  if (variant === 0) {
    return { choices, correctChoiceIndex };
  }

  const regularChoices = choices.filter((choice) => !isCatchAllChoice(choice));
  const catchAllChoices = choices.filter((choice) => isCatchAllChoice(choice));

  if (regularChoices.length <= 1) {
    return { choices: [...regularChoices, ...catchAllChoices], correctChoiceIndex };
  }

  const rotationOffset = variant % regularChoices.length;

  if (rotationOffset === 0) {
    return { choices: [...regularChoices, ...catchAllChoices], correctChoiceIndex };
  }

  const rotatedRegularChoices = regularChoices.map(
    (_, index) =>
      regularChoices[
        (index - rotationOffset + regularChoices.length) % regularChoices.length
      ]
  );

  return {
    choices: [...rotatedRegularChoices, ...catchAllChoices],
    correctChoiceIndex:
      correctChoiceIndex < regularChoices.length
        ? (correctChoiceIndex + rotationOffset) % regularChoices.length
        : correctChoiceIndex,
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
      shuffledChoices.findIndex(
        ({ choiceIndex }) => choiceIndex === question.correctChoiceIndex
      )
    );
    const rotatedQuestionChoices = rotateQuestionChoices(
      reorderedShuffledChoices.choices,
      reorderedShuffledChoices.correctChoiceIndex,
      variant
    );

    return {
      ...question,
      choices: rotatedQuestionChoices.choices,
      correctChoiceIndex: rotatedQuestionChoices.correctChoiceIndex,
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

const getTopThemeLabels = (items: QuestionReviewItem[]) => {
  const counts = new Map<string, number>();

  items.forEach((item) => {
    Array.from(new Set(item.question.themeLabels)).forEach((label) => {
      counts.set(label, (counts.get(label) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }

      return left[0].localeCompare(right[0], 'fr-FR');
    })
    .slice(0, 3)
    .map(([label]) => label);
};

const getDominantDifficultyFocus = (items: QuestionReviewItem[]) => {
  if (items.length === 0) {
    return null;
  }

  const counts = items.reduce(
    (accumulator, item) => {
      accumulator[item.question.difficulty] += 1;
      return accumulator;
    },
    {
      EASY: 0,
      MEDIUM: 0,
      HARD: 0,
    }
  );

  const dominantDifficulty = (Object.entries(counts) as Array<
    [keyof typeof counts, number]
  >)
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }

      return ['EASY', 'MEDIUM', 'HARD'].indexOf(left[0]) - ['EASY', 'MEDIUM', 'HARD'].indexOf(right[0]);
    })[0]?.[0];

  return dominantDifficulty ? difficultyFocusLabels[dominantDifficulty] : null;
};

const getImprovementSuggestions = ({
  groupedErrorCount,
  hasReachedTarget,
  incorrectQuestions,
  isPathMode,
  topThemeLabels,
  targetScore,
}: {
  groupedErrorCount: number;
  hasReachedTarget: boolean;
  incorrectQuestions: QuestionReviewItem[];
  isPathMode: boolean;
  topThemeLabels: string[];
  targetScore: number;
}) => {
  if (incorrectQuestions.length === 0) {
    return [
      'Aucune erreur n’apparaît sur cette tentative : garde cette même rigueur de lecture et de vérification pour la suite.',
      'Si tu veux ancrer durablement les automatismes, refais ce QCM une seconde fois sans relire les corrections.',
    ];
  }

  const suggestions: string[] = [];
  const dominantDifficultyFocus = getDominantDifficultyFocus(incorrectQuestions);

  if (topThemeLabels.length > 0) {
    suggestions.push(
      `Concentre d’abord ta reprise sur ${topThemeLabels.join(', ')}.`
    );
  }

  if (dominantDifficultyFocus === 'Fondamentaux') {
    suggestions.push(
      'Reprends d’abord les définitions, conventions de signe et relations de base : les erreurs portent surtout sur les fondamentaux.'
    );
  }

  if (dominantDifficultyFocus === 'Mise en pratique') {
    suggestions.push(
      'Les bases sont là, mais leur mise en application reste à stabiliser : retravaille les questions intermédiaires avant une nouvelle tentative complète.'
    );
  }

  if (dominantDifficultyFocus === 'Raisonnement') {
    suggestions.push(
      'Les difficultés se concentrent sur les cas les plus exigeants : sécurise d’abord la méthode et les étapes du raisonnement avant d’y revenir.'
    );
  }

  if (groupedErrorCount > 0) {
    suggestions.push(
      'Relis attentivement les énoncés communs : une mauvaise lecture du contexte se répercute souvent sur plusieurs réponses.'
    );
  }

  if (isPathMode && !hasReachedTarget) {
    suggestions.push(
      `Commence par relire les corrections ci-dessous, puis refais ce QCM pour viser ${targetScore}% et ouvrir la suite du parcours.`
    );
  }

  if (isPathMode && hasReachedTarget) {
    suggestions.push(
      'La suite est accessible, mais une nouvelle tentative peut être utile pour stabiliser les points encore fragiles avant d’avancer.'
    );
  }

  if (!isPathMode) {
    suggestions.push(
      'Après relecture des corrections, refais une tentative complète sans aide pour vérifier que les erreurs d’aujourd’hui sont bien levées.'
    );
  }

  return suggestions.slice(0, 3);
};

export function QuizSession({ questions, pathContext }: QuizSessionProps) {
  const [questionOrderVariant, setQuestionOrderVariant] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState(() =>
    prepareQuestions(questions, 0)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(
    () => questions.map(() => null)
  );
  const [showSummary, setShowSummary] = useState(false);

  if (sessionQuestions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        Aucun QCM publi&eacute; pour ce chapitre pour le moment.
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];
  const currentGroup = currentQuestion.group;
  const currentAnswer = answers[currentIndex] ?? null;
  const hasAnswered = currentAnswer !== null;
  const isCorrect = currentAnswer === currentQuestion.correctChoiceIndex;
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const score = sessionQuestions.reduce((total, question, index) => {
    return answers[index] === question.correctChoiceIndex ? total + 1 : total;
  }, 0);
  const isComplete = answeredCount === sessionQuestions.length;
  const successRate = Math.round((score / sessionQuestions.length) * 100);
  const clampedSuccessRate = Math.max(0, Math.min(successRate, 100));
  const isPathMode = Boolean(pathContext);
  const targetScore = pathContext?.targetScore ?? 70;
  const hasReachedTarget = successRate >= targetScore;
  const incorrectQuestions: QuestionReviewItem[] = sessionQuestions.flatMap((question, index) => {
    const selectedChoiceIndex = answers[index];

    if (selectedChoiceIndex === question.correctChoiceIndex) {
      return [];
    }

    return [
      {
        index,
        question,
        selectedChoice:
          selectedChoiceIndex === null ? null : question.choices[selectedChoiceIndex] ?? null,
        correctChoice: question.choices[question.correctChoiceIndex] ?? null,
      },
    ];
  });
  const groupedErrorCount = incorrectQuestions.filter(
    (item) => item.question.group !== null
  ).length;
  const dominantErrorDifficultyFocus = getDominantDifficultyFocus(incorrectQuestions);
  const topFailedThemeLabels = getTopThemeLabels(incorrectQuestions);
  const improvementSuggestions = getImprovementSuggestions({
    groupedErrorCount,
    hasReachedTarget,
    incorrectQuestions,
    isPathMode,
    topThemeLabels: topFailedThemeLabels,
    targetScore,
  });
  const diagnosisPoints = incorrectQuestions.length === 0
    ? [
        'Toutes les questions de ce QCM sont validées : aucun point faible immédiat n’apparaît sur cette tentative.',
        isPathMode
          ? 'Tu peux avancer sereinement dans le parcours et garder ce QCM comme repère de maîtrise.'
          : 'Tu peux passer à un autre QCM ou refaire celui-ci plus tard pour entretenir les automatismes.',
      ]
    : [
        `${score} réponse${score > 1 ? 's sont justes' : ' est juste'} sur ${sessionQuestions.length}. ${incorrectQuestions.length} question${incorrectQuestions.length > 1 ? 's demandent encore' : ' demande encore'} un retravail ciblé.`,
        topFailedThemeLabels.length > 0
          ? `Les notions qui reviennent le plus dans les erreurs sont : ${topFailedThemeLabels.join(', ')}.`
          : 'Aucune notion dominante claire ne se dégage encore des erreurs de cette tentative.',
        dominantErrorDifficultyFocus
          ? `Les erreurs se concentrent surtout sur ${dominantErrorDifficultyFocus.toLowerCase()}.`
          : 'Les erreurs se répartissent sur plusieurs types de questions.',
        groupedErrorCount > 0
          ? `${groupedErrorCount} erreur${groupedErrorCount > 1 ? 's sont liées' : ' est liée'} à un énoncé commun : relis d’abord le contexte avant de recalculer.`
          : 'Les erreurs portent surtout sur des questions isolées : un retravail ciblé devrait être efficace.',
      ];
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

  const selectAnswer = (choiceIndex: number) => {
    if (hasAnswered) return;

    setAnswers((previousAnswers) => {
      const nextAnswers = [...previousAnswers];
      nextAnswers[currentIndex] = choiceIndex;
      return nextAnswers;
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
    setAnswers(questions.map(() => null));
    setShowSummary(false);
  };

  const openSummary = () => {
    if (isPathMode && pathContext) {
      void pathContext.onAttemptComplete?.({
        score,
        targetScore,
        totalQuestions: sessionQuestions.length,
      });
    }

    setShowSummary(true);
  };

  if (showSummary && isComplete) {
    return (
      <section className="space-y-6 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
        <div className={cn('overflow-hidden rounded-2xl border', effectiveSummaryFeedback.toneClassName)}>
          <div className="space-y-5 p-5 md:p-6">
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
              {dominantErrorDifficultyFocus ? (
                <Badge variant="outline">
                  Zone à consolider : {dominantErrorDifficultyFocus}
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

            {topFailedThemeLabels.length > 0 ? (
              <div className="rounded-xl border border-current/15 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Notions à revoir
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topFailedThemeLabels.map((label) => (
                    <Badge key={label} variant="outline" className="bg-background/80">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center gap-2 text-heading">
              <span aria-hidden="true" className="text-lg leading-none">🧭</span>
              <h3 className="text-base font-semibold">Bilan de ta tentative</h3>
            </div>
            <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
              {diagnosisPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center gap-2 text-heading">
              <span aria-hidden="true" className="text-lg leading-none">💡</span>
              <h3 className="text-base font-semibold">Conseils pour progresser</h3>
            </div>
            <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
              {improvementSuggestions.map((suggestion) => (
                <p key={suggestion}>{suggestion}</p>
              ))}
            </div>
          </div>
        </div>

        {incorrectQuestions.length > 0 ? (
          <div className="space-y-4">
            <Separator />
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-heading">
                <ListChecks className="h-4 w-4" />
                <h3 className="text-base font-semibold">À retravailler en priorité</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Repars d’abord de ces questions avant de relancer une tentative complète.
              </p>
            </div>

            <div className="grid gap-4">
              {incorrectQuestions.map((item) => (
                <div
                  key={item.question.id}
                  className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-900 dark:bg-amber-950/20"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">Question {item.index + 1}</Badge>
                    <Badge variant="outline">
                      Repère {difficultyFocusLabels[item.question.difficulty]}
                    </Badge>
                    {item.question.group ? (
                      <Badge variant="outline">
                        {item.question.group.title?.trim() || 'Énoncé commun'}
                      </Badge>
                    ) : null}
                    {item.question.themeLabels.map((label) => (
                      <Badge key={`${item.question.id}-${label}`} variant="secondary">
                        {label}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-xl border border-border bg-background p-4 text-sm text-heading">
                      <MathContent value={item.question.question} />
                    </div>

                    <div className="grid gap-3 lg:grid-cols-2">
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-950 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-100">
                        <p className="font-semibold">Ta réponse</p>
                        <div className="mt-2 leading-6">
                          {item.selectedChoice ? (
                            <MathContent value={item.selectedChoice} />
                          ) : (
                            <span>Aucune réponse enregistrée.</span>
                          )}
                        </div>
                      </div>

                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
                        <p className="font-semibold">Réponse attendue</p>
                        <div className="mt-2 leading-6">
                          {item.correctChoice ? (
                            <MathContent value={item.correctChoice} />
                          ) : (
                            <span>Réponse correcte indisponible.</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
                      <p className="font-semibold text-heading">Explication à relire</p>
                      <div className="mt-2 leading-6">
                        <MathContent value={item.question.explanation} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentIndex(0);
              setShowSummary(false);
            }}
          >
            Revoir les corrections
          </Button>
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
              Question {currentIndex + 1} / {sessionQuestions.length}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              Score {score}/{sessionQuestions.length}
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
                  const answer = answers[index] ?? null;
                  const status = getQuestionNavigationStatus({
                    answer,
                    correctChoiceIndex: question.correctChoiceIndex,
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
              <span className="flex min-w-0 flex-1 items-baseline gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center self-baseline rounded-full border border-brand bg-brand text-xs font-semibold leading-none text-white shadow-xs">
                  {String.fromCharCode(65 + choiceIndex)}
                </span>
                <span className="min-w-0 flex-1 self-baseline">
                  <MathContent value={choice} />
                </span>
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
          {answeredCount} {answeredCount > 1 ? 'questions traitées.' : 'question traitée.'}
          {isComplete ? ` Score final : ${score}/${sessionQuestions.length}.` : null}
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
          {isComplete ? (
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
                Voir la synthèse
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
