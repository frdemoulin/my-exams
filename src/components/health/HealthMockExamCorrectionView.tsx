"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import type {
  HealthMockExamResultQuestion,
  HealthMockExamResults,
} from "@/core/health-mock-exam/health-mock-exam.types";
import { getQuestionFormatStudentInstruction, type HotspotQuestion } from "@/core/questions";
import { cn } from "@/lib/utils";

type HealthMockExamCorrectionViewProps = {
  result: HealthMockExamResults;
  bilanHref: string;
  restartHref: string;
  isColle?: boolean;
};

type FilterMode = "all" | "errors" | "correct";

function formatScore(score: number): string {
  if (Number.isInteger(score)) {
    return score.toString();
  }
  return score.toFixed(2).replace(".", ",");
}

function formatChoiceLetters(choiceIndexes: readonly number[]) {
  return choiceIndexes.length > 0
    ? choiceIndexes.map((choiceIndex) => String.fromCharCode(65 + choiceIndex)).join(", ")
    : "Aucune";
}

export function HealthMockExamCorrectionView({
  result,
  bilanHref,
  restartHref,
  isColle = true,
}: HealthMockExamCorrectionViewProps) {
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [blockIndex, setBlockIndex] = useState<number>(0);
  const paginationContainerRef = useRef<HTMLDivElement>(null);

  // Responsive page size for navigation
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 640) {
        setPageSize(5);
      } else if (window.innerWidth < 1024) {
        setPageSize(8);
      } else {
        setPageSize(10);
      }
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const fullCreditQuestions = useMemo(
    () =>
      result.questions.filter(
        (q) => q.score === q.maxScore && q.evaluationStatus === "correct"
      ),
    [result.questions]
  );

  const reviewQuestions = useMemo(
    () =>
      result.questions.filter(
        (q) => q.score < q.maxScore || q.evaluationStatus !== "correct"
      ),
    [result.questions]
  );

  const filteredQuestions = useMemo(() => {
    if (filterMode === "correct") return fullCreditQuestions;
    if (filterMode === "errors") return reviewQuestions;
    return result.questions;
  }, [filterMode, fullCreditQuestions, reviewQuestions, result.questions]);

  // Ensure current question index is valid when filter changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setBlockIndex(0);
  }, [filterMode]);

  // Keep block in sync with current question index
  useEffect(() => {
    const newBlock = Math.floor(currentQuestionIndex / pageSize);
    setBlockIndex(newBlock);
  }, [currentQuestionIndex, pageSize]);

  const activeQuestion: HealthMockExamResultQuestion | undefined =
    filteredQuestions[currentQuestionIndex];

  const totalQuestions = filteredQuestions.length;
  const totalBlocks = Math.max(1, Math.ceil(totalQuestions / pageSize));
  const startQuestionIndex = blockIndex * pageSize;
  const endQuestionIndex = Math.min(startQuestionIndex + pageSize, totalQuestions);
  const visibleQuestions = filteredQuestions.slice(startQuestionIndex, endQuestionIndex);

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-6" data-testid="health-mock-exam-correction">
      {/* Header bar with Back to Bilan */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <Button asChild variant="outline" size="sm" className="gap-2">
          <Link href={bilanHref}>
            <ArrowLeft className="h-4 w-4" />
            Retour au bilan
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs">
            {result.score} / {result.maxScore} pts ({result.percentage} %)
          </Badge>
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
            <Link href={restartHref}>
              Recommencer
            </Link>
          </Button>
        </div>
      </div>

      {/* Filter Tabs / Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
            Filtres :
          </span>
          <Button
            type="button"
            variant={filterMode === "all" ? "default" : "outline"}
            size="sm"
            className="h-8 text-xs font-medium"
            onClick={() => setFilterMode("all")}
          >
            Toutes ({result.questions.length})
          </Button>
          <Button
            type="button"
            variant={filterMode === "errors" ? "default" : "outline"}
            size="sm"
            className={cn(
              "h-8 text-xs font-medium",
              filterMode === "errors"
                ? "bg-rose-600 hover:bg-rose-700 text-white"
                : "border-rose-300 text-rose-800 hover:bg-rose-50 dark:border-rose-900/60 dark:text-rose-300 dark:hover:bg-rose-950/30"
            )}
            onClick={() => setFilterMode("errors")}
          >
            À revoir ({reviewQuestions.length})
          </Button>
          <Button
            type="button"
            variant={filterMode === "correct" ? "default" : "outline"}
            size="sm"
            className={cn(
              "h-8 text-xs font-medium",
              filterMode === "correct"
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "border-emerald-300 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-900/60 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
            )}
            onClick={() => setFilterMode("correct")}
          >
            Plein crédit ({fullCreditQuestions.length})
          </Button>
        </div>

        <span className="text-xs text-muted-foreground font-medium">
          Question {currentQuestionIndex + 1} sur {totalQuestions}
        </span>
      </div>

      {/* Question by question navigation bar */}
      <div className="relative rounded-2xl border border-border bg-card/70 p-2 sm:p-3 shadow-xs">
        <div className="flex items-center justify-between gap-1 sm:gap-2" ref={paginationContainerRef}>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 shrink-0"
            disabled={blockIndex === 0}
            onClick={() => setBlockIndex((prev) => Math.max(0, prev - 1))}
            aria-label="Bloc de questions précédent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2">
            {visibleQuestions.map((q, idx) => {
              const questionIdx = startQuestionIndex + idx;
              const isSelected = questionIdx === currentQuestionIndex;
              const isCorrect = q.score === q.maxScore && q.evaluationStatus === "correct";
              const isPartial = q.score > 0 && q.score < q.maxScore;

              return (
                <button
                  key={q.attemptQuestionId}
                  type="button"
                  onClick={() => setCurrentQuestionIndex(questionIdx)}
                  className={cn(
                    "flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-xs font-semibold transition-all",
                    isSelected
                      ? "ring-2 ring-brand ring-offset-2 ring-offset-background font-bold scale-105 shadow-xs"
                      : "opacity-85 hover:opacity-100 hover:scale-105",
                    isCorrect
                      ? "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-500/30"
                      : isPartial
                        ? "bg-amber-500/15 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-500/30"
                        : "bg-rose-500/15 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-500/30"
                  )}
                  aria-label={`Question ${q.globalOrder}`}
                >
                  {q.globalOrder}
                </button>
              );
            })}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 shrink-0"
            disabled={blockIndex >= totalBlocks - 1}
            onClick={() => setBlockIndex((prev) => Math.min(totalBlocks - 1, prev + 1))}
            aria-label="Bloc de questions suivant"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Active Question Detail Card */}
      {activeQuestion ? (
        <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xs">
          <div className="border-b border-border bg-neutral-secondary-soft/50 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-heading">
                  Question {activeQuestion.globalOrder}
                </span>
                <QuestionFormatBadge
                  format={activeQuestion.scoringDetails?.format ?? "QRM"}
                  className="text-xs"
                />
              </div>

              <div className="flex items-center gap-2">
                {activeQuestion.score === activeQuestion.maxScore &&
                activeQuestion.evaluationStatus === "correct" ? (
                  <Badge className="bg-emerald-600 text-white gap-1 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    +{formatScore(activeQuestion.score)} / {activeQuestion.maxScore} pt
                  </Badge>
                ) : activeQuestion.score > 0 ? (
                  <Badge className="bg-amber-600 text-white gap-1 text-xs">
                    <AlertCircle className="h-3.5 w-3.5" />
                    +{formatScore(activeQuestion.score)} / {activeQuestion.maxScore} pt
                  </Badge>
                ) : (
                  <Badge className="bg-rose-600 text-white gap-1 text-xs">
                    <XCircle className="h-3.5 w-3.5" />
                    0 / {activeQuestion.maxScore} pt
                  </Badge>
                )}
              </div>
            </div>

            {/* Instruction if available */}
            <p className="mt-2 text-xs italic text-muted-foreground">
              {getQuestionFormatStudentInstruction(activeQuestion.canonicalQuestion)}
            </p>
          </div>

          <CardContent className="space-y-6 p-4 sm:p-6">
            {/* Statement */}
            <div className="text-sm sm:text-base font-medium leading-relaxed text-heading">
              <TrainingQuestionContentView
                question={activeQuestion.question}
                questionDiagram={activeQuestion.questionDiagram}
              />
            </div>

            {/* Choices / Responses */}
            {activeQuestion.questionType === "mcq" && (
              <div className="space-y-2.5">
                {activeQuestion.choices.map((choice, choiceIdx) => {
                  const letter = String.fromCharCode(65 + choiceIdx);
                  const isSelected = activeQuestion.selectedChoiceIndexes.includes(choiceIdx);
                  const isCorrect = activeQuestion.correctChoiceIndexes.includes(choiceIdx);

                  // 4 visual states:
                  // 1. Correctly selected (Vraie cochée) -> Green
                  // 2. Correctly omitted (Fausse non cochée) -> Neutral/Subtle Green border
                  // 3. Incorrectly selected (Fausse cochée) -> Red
                  // 4. Incorrectly omitted (Vraie non cochée) -> Orange/Amber
                  const isTrueSelected = isCorrect && isSelected;
                  const isFalseOmitted = !isCorrect && !isSelected;
                  const isFalseSelected = !isCorrect && isSelected;
                  const isTrueOmitted = isCorrect && !isSelected;

                  let borderClass = "border-border bg-background/60";
                  let badgeText = "";
                  let badgeColor = "";

                  if (isTrueSelected) {
                    borderClass = "border-emerald-400 bg-emerald-500/10 dark:border-emerald-800 dark:bg-emerald-950/20";
                    badgeText = "Exacte (sélectionnée)";
                    badgeColor = "bg-emerald-600 text-white";
                  } else if (isFalseSelected) {
                    borderClass = "border-rose-400 bg-rose-500/10 dark:border-rose-800 dark:bg-rose-950/20";
                    badgeText = "Inexacte (sélectionnée à tort)";
                    badgeColor = "bg-rose-600 text-white";
                  } else if (isTrueOmitted) {
                    borderClass = "border-amber-400 bg-amber-500/10 dark:border-amber-800 dark:bg-amber-950/20";
                    badgeText = "Exacte (omise)";
                    badgeColor = "bg-amber-600 text-white";
                  } else if (isFalseOmitted) {
                    borderClass = "border-border/70 bg-card/40 opacity-80";
                    badgeText = "Inexacte (non sélectionnée)";
                    badgeColor = "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300";
                  }

                  const choiceExplanation = activeQuestion.choiceExplanations[choiceIdx];

                  return (
                    <div
                      key={choiceIdx}
                      className={cn(
                        "rounded-xl border p-3.5 transition-colors space-y-2",
                        borderClass
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-200/70 text-xs font-bold text-heading dark:bg-neutral-800">
                            {letter}
                          </span>
                          <div className="pt-0.5 text-sm text-foreground">
                            <TrainingChoiceContentView choice={choice} />
                          </div>
                        </div>

                        <span className={cn("shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold", badgeColor)}>
                          {badgeText}
                        </span>
                      </div>

                      {choiceExplanation ? (
                        <div className="ml-8 text-xs text-muted-foreground bg-background/50 rounded-lg p-2 border border-border/50">
                          <MathContent value={choiceExplanation} />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}

            {/* QROC short answer view */}
            {activeQuestion.questionType === "short-answer" && (
              <div className="space-y-3 rounded-xl border border-border p-4 bg-neutral-secondary-soft/30">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-heading">Votre réponse :</span>
                  <span className="font-mono font-medium">
                    {getShortAnswerRawValue(activeQuestion.responsePayload) || "(Aucune saisie)"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm border-t border-border/60 pt-2">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                    Réponse attendue :
                  </span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
                    {formatShortAnswerExpectedAnswer(activeQuestion.canonicalQuestion as any)}
                  </span>
                </div>
              </div>
            )}

            {/* QZONE hotspot view */}
            {activeQuestion.questionType === "hotspot" && (
              <div className="space-y-3">
                <HotspotQuestionView
                  question={activeQuestion.canonicalQuestion as HotspotQuestion}
                  selectedPoint={getHotspotPoints(activeQuestion.responsePayload)[0] ?? null}
                  readOnly={true}
                  showCorrection={true}
                />
              </div>
            )}

            {/* UNESS Discordances / scoring info box */}
            {activeQuestion.scoringDetails && (
              <div className="rounded-xl border border-border bg-neutral-secondary-soft/40 p-3.5 text-xs space-y-1">
                <p className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground">
                  Détail de la notation UNESS :
                </p>
                {activeQuestion.scoringDetails.discordanceCount !== undefined ? (
                  <p className="text-muted-foreground">
                    Nombre de discordance(s) :{" "}
                    <span className="font-bold text-heading">
                      {activeQuestion.scoringDetails.discordanceCount}
                    </span>{" "}
                    (Erreur par omission ou addition) → Barème appliqué :{" "}
                    <span className="font-bold text-heading">
                      {Math.round((activeQuestion.scoringDetails.scoreRatio ?? 0) * 100)} %
                    </span>{" "}
                    des points.
                  </p>
                ) : null}
                <p className="text-muted-foreground">
                  Vos choix :{" "}
                  <span className="font-medium text-heading">
                    {formatChoiceLetters(activeQuestion.selectedChoiceIndexes)}
                  </span>{" "}
                  · Réponse correcte :{" "}
                  <span className="font-medium text-emerald-700 dark:text-emerald-400">
                    {formatChoiceLetters(activeQuestion.correctChoiceIndexes)}
                  </span>
                </p>
              </div>
            )}

            {/* Detailed Scientific Explanation */}
            {activeQuestion.explanation ? (
              <div className="rounded-xl border border-brand/20 bg-brand-soft/10 p-4 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">
                  Explication scientifique :
                </p>
                <div className="text-xs sm:text-sm leading-relaxed text-foreground">
                  <MathContent value={activeQuestion.explanation} />
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ) : null}

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Question précédente
        </Button>

        <Button asChild variant="ghost" size="sm" className="gap-2 text-xs">
          <Link href={bilanHref}>
            <ArrowLeft className="h-4 w-4" />
            Retour au bilan de la colle
          </Link>
        </Button>

        <Button
          type="button"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex >= totalQuestions - 1}
          className="gap-2"
        >
          Question suivante
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
