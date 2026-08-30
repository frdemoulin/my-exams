"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  RotateCcw,
  Target,
  XCircle,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  BookOpen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoTooltip } from "@/components/shared/info-tooltip";
import type {
  HealthMockExamResults,
} from "@/core/health-mock-exam/health-mock-exam.types";
import { cn } from "@/lib/utils";

type HealthMockExamResultsProps = {
  result: HealthMockExamResults;
  restartHref: string;
  correctionHref?: string;
  headingLabel?: string;
  restartLabel?: string;
};

function formatElapsedTime(elapsedSeconds: number) {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatScore(score: number, forceTwoDecimalsForFractions = true): string {
  if (Number.isInteger(score)) {
    return score.toString();
  }
  if (forceTwoDecimalsForFractions) {
    return score.toFixed(2).replace(".", ",");
  }
  const fixed = score.toFixed(2).replace(".", ",");
  return fixed.endsWith("0") ? fixed.slice(0, -1) : fixed;
}

function getFeedbackMessage(percentage: number) {
  if (percentage >= 80) {
    return {
      title: "Excellent travail !",
      message:
        "Vous maîtrisez très bien les notions évaluées dans cette épreuve. Vos résultats sont solides.",
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
  return {
    title: "Points à consolider",
    message:
      "Cette épreuve a mis en évidence des notions clés à revoir. Analysez la correction détaillée pour progresser.",
    toneClassName:
      "border-amber-300/80 bg-amber-500/10 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
    progressClassName: "bg-amber-600 dark:bg-amber-500",
  };
}

export function HealthMockExamResults({
  result,
  restartHref,
  correctionHref,
  headingLabel = "BILAN DE LA COLLE",
  restartLabel = "Recommencer la colle",
}: HealthMockExamResultsProps) {
  const feedback = useMemo(() => getFeedbackMessage(result.percentage), [result.percentage]);

  const fullCreditCount = useMemo(
    () =>
      result.questions.filter(
        (question) => question.score === question.maxScore && question.evaluationStatus === "correct",
      ).length,
    [result.questions],
  );

  const reviewCount = useMemo(
    () =>
      result.questions.filter(
        (question) => question.score < question.maxScore || question.evaluationStatus !== "correct",
      ).length,
    [result.questions],
  );

  const hasMultipleSections = result.sections.length > 1;
  const pedagogy = result.pedagogicalAssessment;

  return (
    <div className="space-y-6" data-testid="health-mock-exam-results">
      {/* 1. Carte Bilan Principal */}
      <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xs">
        <CardHeader className="space-y-4 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3 min-h-9">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Target className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>{headingLabel}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {result.autoSubmitted ? (
                <Badge variant="outline" className="border-amber-400 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                  <Clock3 className="mr-1 h-3 w-3" aria-hidden="true" />
                  Temps limite atteint
                </Badge>
              ) : null}
              {correctionHref ? (
                <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
                  <Link href={correctionHref}>
                    Voir la correction détaillée
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              ) : null}
              <Button asChild variant="outline" size="sm" className="gap-1.5 text-xs">
                <Link href={restartHref}>
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  {restartLabel}
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
            {/* 1. Score */}
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Score
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-heading">
                  {formatScore(result.score, false)}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  / {result.maxScore}
                </span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                soit {result.percentage} %
              </p>
            </div>

            {/* 2. Plein crédit */}
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Plein crédit
                </p>
                <InfoTooltip
                  content="Nombre de questions ayant obtenu 100 % des points (sans aucune erreur)."
                  label="Information sur le plein crédit"
                />
              </div>
              <p className="mt-2 text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                {fullCreditCount}
              </p>
              <p className="text-xs text-muted-foreground">
                {result.questions.length > 0 ? `${Math.round((fullCreditCount / result.questions.length) * 100)} % des questions` : ""}
              </p>
            </div>

            {/* 3. À revoir */}
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                À revoir
              </p>
              <p className="mt-2 text-2xl font-bold text-rose-700 dark:text-rose-300">
                {reviewCount}
              </p>
              <p className="text-xs text-muted-foreground">
                {reviewCount === 0 ? "Aucune erreur" : `${reviewCount} question${reviewCount > 1 ? "s" : ""}`}
              </p>
            </div>

            {/* 4. Durée */}
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Durée
              </p>
              <p className="mt-2 text-2xl font-bold text-heading">
                {formatElapsedTime(result.elapsedSeconds)}
              </p>
              <p className="text-xs text-muted-foreground">temps effectif</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span>Score global</span>
              <span>{result.percentage} %</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-secondary-soft dark:bg-neutral-800">
              <div
                className={cn("h-full transition-all duration-500", feedback.progressClassName)}
                style={{ width: `${Math.min(100, Math.max(0, result.percentage))}%` }}
              />
            </div>
          </div>

          <div className={cn("rounded-xl border p-4 text-xs sm:text-sm", feedback.toneClassName)}>
            <p className="font-bold">{feedback.title}</p>
            <p className="mt-1 leading-relaxed">{feedback.message}</p>
          </div>
        </CardContent>
      </Card>

      {/* 2. Multi-section synthesis table (e.g. C12 or Mock Exams) */}
      {hasMultipleSections ? (
        <Card className="rounded-2xl border-border bg-card shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Ventilation par section
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-secondary-soft/60 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Section</th>
                    <th className="px-4 py-3 font-semibold text-center">Questions</th>
                    <th className="px-4 py-3 font-semibold text-center">Score</th>
                    <th className="px-4 py-3 font-semibold text-right">Résultat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {result.sections.map((sec) => (
                    <tr key={sec.id} className="hover:bg-neutral-secondary-soft/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-heading">{sec.title}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">
                        Q{sec.firstQuestion} à Q{sec.lastQuestion}
                      </td>
                      <td className="px-4 py-3 text-center font-medium">
                        {formatScore(sec.score, false)} / {sec.maxScore}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-heading">
                        {sec.percentage} %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {/* 3. Bilan Pédagogique */}
      <Card className="rounded-2xl border-border bg-card shadow-xs">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-brand" aria-hidden="true" />
            <CardTitle className="text-base font-bold text-heading">
              Bilan pédagogique
            </CardTitle>
          </div>
          <p className="text-xs text-muted-foreground">
            Synthèse déterministe de votre maîtrise par notion et chapitre sur cette évaluation.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {pedagogy?.neutralMessage ? (
            <div className="rounded-xl border border-border bg-neutral-secondary-soft/40 p-4 text-xs text-muted-foreground leading-relaxed">
              {pedagogy.neutralMessage}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Points forts */}
              <div className="rounded-xl border border-emerald-200/60 bg-emerald-500/5 p-4 space-y-3 dark:border-emerald-900/40 dark:bg-emerald-950/15">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                    Points forts ({pedagogy?.strengths.length ?? 0})
                  </h4>
                </div>

                {pedagogy && pedagogy.strengths.length > 0 ? (
                  <div className="space-y-2">
                    {pedagogy.strengths.map((theme) => (
                      <div
                        key={theme.id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200/80 bg-background/80 p-2.5 dark:border-emerald-900/50"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <p className="text-xs font-semibold text-heading truncate">
                            {theme.label}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {theme.questionCount} question{theme.questionCount > 1 ? "s" : ""} · {formatScore(theme.score, false)} / {theme.maxScore} pt
                          </p>
                        </div>
                        <Badge className="bg-emerald-600 text-white font-bold text-xs shrink-0">
                          {theme.masteryPercentage} %
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground italic">
                    Aucun thème n&apos;atteint le seuil de maîtrise de 80 % sur cette tentative.
                  </p>
                )}
              </div>

              {/* À retravailler */}
              <div className="rounded-xl border border-rose-200/60 bg-rose-500/5 p-4 space-y-3 dark:border-rose-900/40 dark:bg-rose-950/15">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    À retravailler ({pedagogy?.toReview.length ?? 0})
                  </h4>
                </div>

                {pedagogy && pedagogy.toReview.length > 0 ? (
                  <div className="space-y-2">
                    {pedagogy.toReview.map((theme) => (
                      <div
                        key={theme.id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-rose-200/80 bg-background/80 p-2.5 dark:border-rose-900/50"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <p className="text-xs font-semibold text-heading truncate">
                            {theme.label}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {theme.questionCount} question{theme.questionCount > 1 ? "s" : ""} · {formatScore(theme.score, false)} / {theme.maxScore} pt
                          </p>
                        </div>
                        <Badge className="bg-rose-600 text-white font-bold text-xs shrink-0">
                          {theme.masteryPercentage} %
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground italic">
                    Aucun thème critique (&lt; 60 %) identifié sur cette tentative.
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

    </div>
  );
}
