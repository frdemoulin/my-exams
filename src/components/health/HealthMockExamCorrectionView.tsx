"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HealthQuestionNavigator,
  type QuestionNavigatorCorrectionItem,
  type CorrectionQuestionState,
} from "@/components/health/HealthQuestionNavigator";
import { HealthEvaluationColorLegend } from "@/components/health/HealthEvaluationColorLegend";
import { QuestionFormatBadge } from "@/components/training/question-format-badge";
import { TrainingChoiceContentView } from "@/components/training/training-choice-content-view";
import { TrainingQuestionContentView } from "@/components/training/training-question-content-view";
import { MathContent } from "@/components/training/math-content";
import { SharedQuestionGroupPanel } from "@/components/training/shared-question-group-panel";
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
  return Number.isInteger(score) ? score.toString() : score.toFixed(2);
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
  }, [filterMode]);

  const activeQuestion: HealthMockExamResultQuestion | undefined =
    filteredQuestions[currentQuestionIndex];

  const totalQuestions = filteredQuestions.length;

  const navigatorItems: QuestionNavigatorCorrectionItem[] = useMemo(() => {
    return filteredQuestions.map((q) => {
      const isCorrect = q.score === q.maxScore && q.evaluationStatus === "correct";
      const isPartial = q.score > 0 && q.score < q.maxScore;
      const isUnanswered = q.evaluationStatus === "unanswered";
      const state: CorrectionQuestionState = isCorrect
        ? "full_credit"
        : isPartial
          ? "partial_credit"
          : isUnanswered
            ? "unanswered"
            : "incorrect";

      const formatCode =
        q.canonicalQuestion?.format ?? q.questionType.toUpperCase();

      return {
        id: q.attemptQuestionId,
        order: q.globalOrder,
        formatCode,
        state,
        score: q.score,
        maxScore: q.maxScore,
        testId: `health-mock-exam-correction-nav-${q.globalOrder}`,
        ariaLabel: `Question ${q.globalOrder} sur ${result.questions.length} — ${formatCode}`,
      };
    });
  }, [filteredQuestions, result.questions.length]);

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

        <HealthEvaluationColorLegend />
      </div>

      {/* Question by question navigation bar */}
      <HealthQuestionNavigator
        mode="correction"
        items={navigatorItems}
        currentIndex={currentQuestionIndex}
        onSelectIndex={setCurrentQuestionIndex}
        counterText={`Question ${totalQuestions > 0 ? currentQuestionIndex + 1 : 0} sur ${totalQuestions}`}
        ariaLabel="Navigation de la correction détaillée"
        testId="health-mock-exam-correction-nav"
      />

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
            {/* Shared group banner */}
            {activeQuestion.group ? (
              <SharedQuestionGroupPanel
                questionNumbers={result.questions.flatMap((q) =>
                  q.group?.id === activeQuestion.group?.id ? [q.globalOrder] : []
                )}
                title={activeQuestion.group.title}
                sharedStatement={activeQuestion.group.sharedStatement}
                sharedMedia={activeQuestion.group.sharedMedia}
                hideSharedMedia={
                  activeQuestion.questionType === "hotspot" &&
                  activeQuestion.group.sharedMedia?.src ===
                    (activeQuestion.canonicalQuestion as HotspotQuestion).image?.src
                }
              />
            ) : null}

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
