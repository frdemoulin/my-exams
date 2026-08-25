"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  ListChecks,
  RotateCcw,
  Target,
  XCircle,
  AlertCircle,
  Check,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionFormatBadge } from "@/components/training/question-format-badge";
import { TrainingChoiceContentView } from "@/components/training/training-choice-content-view";
import { TrainingQuestionContentView } from "@/components/training/training-question-content-view";
import { MathContent } from "@/components/training/math-content";
import { HotspotQuestionView } from "@/components/training/hotspot-question-view";
import {
  formatShortAnswerExpectedAnswer,
  getHotspotPoints,
  getShortAnswerRawValue,
} from "@/core/health-mock-exam/health-mock-exam.question";
import type { HealthMockExamResults } from "@/core/health-mock-exam/health-mock-exam.types";
import { getQuestionFormatStudentInstruction, type HotspotQuestion } from "@/core/questions";
import { cn } from "@/lib/utils";

type HealthMockExamResultsProps = {
  result: HealthMockExamResults;
  restartHref: string;
  headingLabel?: string;
  restartLabel?: string;
};

type FilterMode = "all" | "errors" | "correct";

function formatElapsedTime(elapsedSeconds: number) {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = totalSecondsModulo(elapsedSeconds, 60);

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function totalSecondsModulo(seconds: number, mod: number) {
  return seconds % mod;
}

function formatChoiceLetters(choiceIndexes: readonly number[]) {
  return choiceIndexes.length > 0
    ? choiceIndexes.map((choiceIndex) => String.fromCharCode(65 + choiceIndex)).join(", ")
    : "Aucune";
}

function getFeedbackMessage(percentage: number) {
  if (percentage >= 80) {
    return {
      title: "Excellent travail !",
      message:
        "Vous maîtrisez très bien les notions évaluées dans cette colle. Vos discordances sont minimes.",
      toneClassName:
        "border-emerald-300/70 bg-emerald-500/10 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
      progressClassName: "bg-emerald-600 dark:bg-emerald-500",
    };
  }
  if (percentage >= 60) {
    return {
      title: "Bonne performance !",
      message:
        "Vous avez de solides bases sur ce programme. Quelques précisions sont à consolider sur la correction.",
      toneClassName:
        "border-brand/30 bg-brand-soft/15 text-heading dark:border-brand/40 dark:bg-brand-soft/20",
      progressClassName: "bg-brand",
    };
  }
  if (percentage >= 40) {
    return {
      title: "Résultat encourageant, des notions à retravailler",
      message:
        "Prenez le temps d'analyser la correction détaillée pour comprendre les discordances et propositions attendues.",
      toneClassName:
        "border-amber-300/70 bg-amber-500/10 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
      progressClassName: "bg-amber-500",
    };
  }
  return {
    title: "Notions fondamentales à revoir",
    message:
      "Cette colle a révélé des notions à approfondir. Consultez chaque explication et réentraînez-vous sur les chapitres correspondants.",
    toneClassName:
      "border-rose-300/70 bg-rose-500/10 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100",
    progressClassName: "bg-rose-500",
  };
}

export function HealthMockExamResults({
  result,
  restartHref,
  headingLabel = "Bilan de l'évaluation",
  restartLabel = "Recommencer la colle",
}: HealthMockExamResultsProps) {
  const [filterMode, setFilterMode] = useState<FilterMode>("all");

  const answeredQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus !== "unanswered",
  ).length;
  const correctQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus === "correct",
  ).length;
  const partialQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus === "partial",
  ).length;
  const incorrectQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus === "incorrect" || question.evaluationStatus === "unanswered",
  ).length;

  const feedback = getFeedbackMessage(result.percentage);

  const filteredQuestions = useMemo(() => {
    if (filterMode === "errors") {
      return result.questions.filter(
        (q) => q.evaluationStatus === "incorrect" || q.evaluationStatus === "partial" || q.evaluationStatus === "unanswered",
      );
    }
    if (filterMode === "correct") {
      return result.questions.filter((q) => q.evaluationStatus === "correct");
    }
    return result.questions;
  }, [result.questions, filterMode]);

  return (
    <section className="space-y-8" data-testid="health-mock-exam-results">
      {/* 1. CARTE BILAN & RÉCAPITULATIF (STYLE QUIZ PLAYER SANTÉ V2) */}
      <Card className="rounded-3xl border-border bg-card shadow-sm hover:bg-card">
        <CardHeader className="p-5 md:p-6 pb-2">
          <div className={cn("overflow-hidden rounded-2xl border p-5 md:p-6 space-y-5", feedback.toneClassName)}>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-current/80">
                  <Target className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-wider">{headingLabel}</p>
                </div>
                <h1 className="text-2xl font-bold text-heading">{feedback.title}</h1>
                <p className="text-sm leading-6 text-muted-foreground">{feedback.message}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2.5 self-start">
                <Button asChild size="sm" variant="outline" className="gap-1.5 shadow-xs">
                  <Link href={restartHref}>
                    <RotateCcw className="h-4 w-4" />
                    {restartLabel}
                  </Link>
                </Button>
              </div>
            </div>

            {/* BADGES RÉSUMÉ */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="secondary" className="font-bold text-sm">
                Score {result.score}/{result.maxScore}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {correctQuestionCount}/{result.questions.length} questions correctes
              </Badge>
              <Badge variant="outline" className="text-xs font-semibold">
                {result.percentage}% de réussite
              </Badge>
              <Badge variant="outline" className="text-xs gap-1 tabular-nums">
                <Clock3 className="h-3 w-3" />
                Durée {formatElapsedTime(result.elapsedSeconds)}
              </Badge>
              {result.status === "EXPIRED" ? (
                <Badge variant="destructive" className="text-xs">
                  Temps limite atteint
                </Badge>
              ) : null}
            </div>

            {/* PROGRESSION VISUELLE */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide opacity-80">
                <span>Score global UNESS</span>
                <span>{result.percentage}%</span>
              </div>
              <div className="relative h-3 rounded-full bg-background/80 overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-500", feedback.progressClassName)}
                  style={{ width: `${Math.max(0, Math.min(result.percentage, 100))}%` }}
                />
              </div>
            </div>

            {/* GRILLE DES 4 MÉTRIQUES CLÉS */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 pt-2">
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Score
                </p>
                <p className="mt-2 text-2xl font-bold text-heading">
                  {result.score}/{result.maxScore}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Exactes (100%)
                </p>
                <p className="mt-2 text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  {correctQuestionCount}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  À retravailler
                </p>
                <p className="mt-2 text-2xl font-bold text-rose-700 dark:text-rose-300">
                  {incorrectQuestionCount}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Durée
                </p>
                <p className="mt-2 text-2xl font-bold text-heading">
                  {formatElapsedTime(result.elapsedSeconds)}
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 2. SECTION CORRECTION DÉTAILLÉE AVEC FILTRES D'AFFICHAGE */}
      <section className="space-y-6" aria-labelledby="colle-correction-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
          <div>
            <h2 id="colle-correction-heading" className="text-xl font-bold text-heading">
              Correction détaillée
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Consultez les explications et discordances question par question.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-secondary-soft p-1 rounded-xl border border-border">
            <Button
              type="button"
              variant={filterMode === "all" ? "default" : "ghost"}
              size="xs"
              onClick={() => setFilterMode("all")}
              className="text-xs h-7 px-3"
            >
              Toutes ({result.questions.length})
            </Button>
            <Button
              type="button"
              variant={filterMode === "errors" ? "default" : "ghost"}
              size="xs"
              onClick={() => setFilterMode("errors")}
              className="text-xs h-7 px-3"
            >
              À revoir ({partialQuestionCount + incorrectQuestionCount})
            </Button>
            <Button
              type="button"
              variant={filterMode === "correct" ? "default" : "ghost"}
              size="xs"
              onClick={() => setFilterMode("correct")}
              className="text-xs h-7 px-3"
            >
              Correctes ({correctQuestionCount})
            </Button>
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center rounded-2xl border border-dashed border-border bg-card">
            <p className="text-sm text-muted-foreground">
              Aucune question ne correspond à ce filtre.
            </p>
          </div>
        ) : (
          filteredQuestions.map((question) => {
            const isCorrect = question.evaluationStatus === "correct";
            const isPartial = question.evaluationStatus === "partial";
            const isUnanswered = question.evaluationStatus === "unanswered";
            const isHotspot = question.canonicalQuestion.type === "hotspot";
            const hotspotPoint = isHotspot ? getHotspotPoints(question.responsePayload)[0] ?? null : null;
            const shortAnswerExpectedAnswer =
              question.canonicalQuestion.type === "short-answer"
                ? formatShortAnswerExpectedAnswer(question.canonicalQuestion)
                : null;
            const isShortAnswer = shortAnswerExpectedAnswer !== null;
            const shortAnswerValue = getShortAnswerRawValue(question.responsePayload);
            const formatInstruction = getQuestionFormatStudentInstruction(question.canonicalQuestion);

            const extraChoiceIndexes = question.selectedChoiceIndexes.filter(
              (idx) => !question.correctChoiceIndexes.includes(idx),
            );
            const missedChoiceIndexes = question.correctChoiceIndexes.filter(
              (idx) => !question.selectedChoiceIndexes.includes(idx),
            );
            const discordanceCount = missedChoiceIndexes.length + extraChoiceIndexes.length;

            return (
              <Card
                key={question.attemptQuestionId}
                className={cn(
                  "rounded-3xl border-border bg-card hover:bg-card transition-all",
                  isCorrect && "border-emerald-200 dark:border-emerald-950",
                  isPartial && "border-amber-200 dark:border-amber-950",
                  !isCorrect && !isPartial && "border-rose-200 dark:border-rose-950",
                )}
              >
                <CardHeader className="gap-3 pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        Question {question.globalOrder} / {result.questions.length}
                      </p>
                      <QuestionFormatBadge question={question.canonicalQuestion} />
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {isCorrect ? (
                        <Badge
                          variant="outline"
                          className="border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200 font-semibold"
                        >
                          +{question.maxScore.toFixed(1).replace(".", ",")} pt · Exacte
                        </Badge>
                      ) : isPartial ? (
                        <Badge
                          variant="outline"
                          className="border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200 font-semibold"
                        >
                          +{question.score.toFixed(1).replace(".", ",")} pt · {discordanceCount} discordance{discordanceCount > 1 ? "s" : ""} (UNESS)
                        </Badge>
                      ) : isUnanswered ? (
                        <Badge variant="secondary">0,0 pt · Sans réponse</Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200 font-semibold"
                        >
                          0,0 pt · {discordanceCount > 0 ? `${discordanceCount} discordances (UNESS)` : "À revoir"}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {formatInstruction ? (
                    <p className="text-xs font-medium text-muted-foreground">{formatInstruction}</p>
                  ) : null}

                  {question.group ? (
                    <div className="rounded-xl border border-brand/15 bg-brand-soft/10 p-4 text-sm text-heading">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {question.group.title ?? "Énoncé commun"}
                      </p>
                      <div className="mt-2 leading-6">
                        <MathContent value={question.group.sharedStatement} blockMathVariant="compact" />
                      </div>
                    </div>
                  ) : null}
                </CardHeader>

                <CardContent className="space-y-5 pt-0">
                  {/* ÉNONCÉ DE LA QUESTION */}
                  <div className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-heading">
                    <TrainingQuestionContentView
                      question={question.question}
                      questionDiagram={question.questionDiagram}
                    />
                  </div>

                  {/* COMPARATIF « TA RÉPONSE » vs « RÉPONSE ATTENDUE » (STYLE QUIZ) */}
                  {!isHotspot && !isShortAnswer && (
                    <div className="grid gap-3 rounded-xl border border-border bg-neutral-secondary-soft/50 p-4 text-sm md:grid-cols-2">
                      <div className="rounded-lg border border-brand/25 bg-brand-soft/10 p-3 space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Ta réponse
                        </p>
                        <p className="text-base font-bold text-heading">
                          {question.selectedChoiceIndexes.length > 0
                            ? formatChoiceLetters(question.selectedChoiceIndexes)
                            : "Aucune sélection"}
                        </p>
                        {extraChoiceIndexes.length > 0 ? (
                          <p className="text-xs text-rose-700 dark:text-rose-300 font-medium">
                            Proposition{extraChoiceIndexes.length > 1 ? "s" : ""} en trop ({extraChoiceIndexes.length} discordance{extraChoiceIndexes.length > 1 ? "s" : ""}) : {formatChoiceLetters(extraChoiceIndexes)}.
                          </p>
                        ) : null}
                      </div>

                      <div className="rounded-lg border border-emerald-300/60 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950/40 space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
                          Réponse attendue
                        </p>
                        <p className="text-base font-bold text-emerald-950 dark:text-emerald-100">
                          {formatChoiceLetters(question.correctChoiceIndexes)}
                        </p>
                        {missedChoiceIndexes.length > 0 ? (
                          <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                            Proposition{missedChoiceIndexes.length > 1 ? "s" : ""} omise{missedChoiceIndexes.length > 1 ? "s" : ""} ({missedChoiceIndexes.length} discordance{missedChoiceIndexes.length > 1 ? "s" : ""}) : {formatChoiceLetters(missedChoiceIndexes)}.
                          </p>
                        ) : null}
                      </div>
                    </div>
                  )}

                  {isShortAnswer && (
                    <div
                      data-testid="health-mock-exam-short-answer-result"
                      className="grid gap-3 rounded-xl border border-border bg-neutral-secondary-soft/50 p-4 text-sm md:grid-cols-2"
                    >
                      <div className="rounded-lg border border-brand/25 bg-brand-soft/10 p-3 space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Ta réponse
                        </p>
                        <p className="text-base font-bold text-heading">
                          {shortAnswerValue.trim() ? shortAnswerValue : "Sans réponse"}
                        </p>
                      </div>

                      <div className="rounded-lg border border-emerald-300/60 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950/40 space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
                          Réponse attendue
                        </p>
                        <p className="text-base font-bold text-emerald-950 dark:text-emerald-100">
                          <MathContent value={shortAnswerExpectedAnswer} />
                        </p>
                      </div>
                    </div>
                  )}

                  {/* PROPOSITIONS DÉTAILLÉES AVEC EXPLICATIONS PAR ITEM (VOCABULAIRE ET STYLE QUIZ) */}
                  {isHotspot ? (
                    <HotspotQuestionView
                      question={question.canonicalQuestion as HotspotQuestion}
                      selectedPoint={hotspotPoint}
                      readOnly={true}
                      showCorrection={true}
                      evaluationResult={{
                        questionId: question.id,
                        status:
                          question.evaluationStatus === "correct"
                            ? "correct"
                            : question.evaluationStatus === "incorrect"
                              ? "incorrect"
                              : "unanswered",
                        score: question.score,
                        maxScore: question.maxScore,
                      }}
                      showHeader={false}
                    />
                  ) : !isShortAnswer ? (
                    <div className="grid gap-2.5">
                      {question.choices.map((choice, choiceIndex) => {
                        const selected = question.selectedChoiceIndexes.includes(choiceIndex);
                        const expected = question.correctChoiceIndexes.includes(choiceIndex);
                        const explanation = question.choiceExplanations[choiceIndex];

                        const showAsCorrect = selected && expected;
                        const showSelectedAsIncorrect = selected && !expected;
                        const showAsMissedExpected = !selected && expected;

                        return (
                          <div
                            key={`${question.attemptQuestionId}-${choiceIndex}`}
                            className={cn(
                              "rounded-xl border p-3.5 text-sm transition-colors",
                              showAsCorrect && "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
                              showSelectedAsIncorrect && "border-rose-300 bg-rose-50 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100",
                              showAsMissedExpected && "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100",
                              !selected && !expected && "border-border bg-background text-body",
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={cn(
                                  "flex h-6 w-6 shrink-0 items-center justify-center self-baseline rounded-full border text-xs font-semibold leading-none shadow-xs",
                                  showAsCorrect
                                    ? "border-emerald-600 bg-emerald-600 text-white"
                                    : showSelectedAsIncorrect
                                      ? "border-rose-600 bg-rose-600 text-white"
                                      : showAsMissedExpected
                                        ? "border-amber-500 bg-amber-500 text-white"
                                        : "border-border bg-neutral-secondary-soft text-muted-foreground",
                                )}
                              >
                                {String.fromCharCode(65 + choiceIndex)}
                              </span>

                              <div className="min-w-0 flex-1 space-y-1.5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="font-medium">
                                    <TrainingChoiceContentView choice={choice} />
                                  </div>
                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {showAsCorrect && (
                                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                    )}
                                    {showSelectedAsIncorrect && (
                                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                                    )}
                                    {selected ? (
                                      <Badge
                                        variant="outline"
                                        className={cn(
                                          "text-[11px]",
                                          expected
                                            ? "border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100"
                                            : "border-rose-400 bg-rose-100 text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-100",
                                        )}
                                      >
                                        Ton choix
                                      </Badge>
                                    ) : null}
                                    {expected ? (
                                      <Badge
                                        variant="outline"
                                        className={cn(
                                          "text-[11px]",
                                          selected
                                            ? "border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100"
                                            : "border-amber-400 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",
                                        )}
                                      >
                                        Attendue
                                      </Badge>
                                    ) : null}
                                  </div>
                                </div>

                                {explanation ? (
                                  <div className="border-t border-current/15 pt-2 text-xs leading-relaxed text-muted-foreground dark:text-muted-foreground/90">
                                    <MathContent value={explanation} />
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {/* EXPLICATION GÉNÉRALE DE LA QUESTION */}
                  {question.explanation ? (
                    <div className="rounded-xl border border-brand/20 bg-brand-soft/10 p-4 text-sm text-heading space-y-1">
                      <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                        Explication générale
                      </p>
                      <div className="leading-6">
                        <MathContent value={question.explanation} />
                      </div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            );
          })
        )}
      </section>
    </section>
  );
}
