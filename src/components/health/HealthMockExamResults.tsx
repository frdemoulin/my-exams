import Link from "next/link";
import { CheckCircle2, Clock3, RotateCcw, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionFormatBadge } from "@/components/training/question-format-badge";
import { TrainingChoiceContentView } from "@/components/training/training-choice-content-view";
import { TrainingQuestionContentView } from "@/components/training/training-question-content-view";
import { MathContent } from "@/components/training/math-content";
import {
  formatShortAnswerExpectedAnswer,
  getShortAnswerRawValue,
} from "@/core/health-mock-exam/health-mock-exam.question";
import type { HealthMockExamResults } from "@/core/health-mock-exam/health-mock-exam.types";
import { getQuestionFormatStudentInstruction } from "@/core/questions";
import { cn } from "@/lib/utils";

type HealthMockExamResultsProps = {
  result: HealthMockExamResults;
  restartHref: string;
  headingLabel?: string;
  restartLabel?: string;
};

function formatElapsedTime(elapsedSeconds: number) {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;
}

function formatChoiceLetters(choiceIndexes: readonly number[]) {
  return choiceIndexes.length > 0
    ? choiceIndexes.map((choiceIndex) => String.fromCharCode(65 + choiceIndex)).join(", ")
    : "Aucune réponse";
}

function formatEvaluationStatus(status: HealthMockExamResults["questions"][number]["evaluationStatus"]) {
  if (status === "correct") return "Correcte";
  if (status === "partial") return "Partielle";
  if (status === "unanswered") return "Sans réponse";
  return "À revoir";
}

export function HealthMockExamResults({
  result,
  restartHref,
  headingLabel = "Résultats de l'examen blanc",
  restartLabel = "Recommencer l'examen",
}: HealthMockExamResultsProps) {
  const answeredQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus !== "unanswered",
  ).length;
  const correctQuestionCount = result.questions.filter(
    (question) => question.evaluationStatus === "correct",
  ).length;
  const incorrectQuestionCount = answeredQuestionCount - correctQuestionCount;

  return (
    <section className="space-y-6">
      <Card className="rounded-base bg-card hover:bg-card">
        <CardHeader className="gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{headingLabel}</p>
              <CardTitle className="text-xl">{result.title}</CardTitle>
            </div>
            <Badge variant={result.status === "EXPIRED" ? "destructive" : "outline"}>
              {result.status === "EXPIRED" ? "Temps écoulé" : "Soumis"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Score</p>
              <p className="mt-1 text-2xl font-semibold text-heading">{result.score}/{result.maxScore}</p>
            </div>
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Pourcentage</p>
              <p className="mt-1 text-2xl font-semibold text-heading">{result.percentage}%</p>
            </div>
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Réponses</p>
              <p className="mt-1 text-sm text-heading">{correctQuestionCount} justes · {incorrectQuestionCount} fausses · {result.questions.length - answeredQuestionCount} sans réponse</p>
            </div>
            <div className="border border-border bg-background p-4">
              <p className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> Durée</p>
              <p className="mt-1 text-2xl font-semibold text-heading">{formatElapsedTime(result.elapsedSeconds)}</p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {result.sections.map((section) => (
              <div key={section.id} className="border-l-2 border-brand/40 bg-background p-4">
                <p className="font-semibold text-heading">{section.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">Questions {section.firstQuestion} à {section.lastQuestion}</p>
                <p className="mt-2 text-lg font-semibold text-heading">{section.score}/{section.maxScore} · {section.percentage}%</p>
              </div>
            ))}
          </div>

          <Button asChild>
            <Link href={restartHref}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {restartLabel}
            </Link>
          </Button>
        </CardContent>
      </Card>

      <section className="space-y-4" aria-labelledby="mock-exam-correction-heading">
        <h2 id="mock-exam-correction-heading" className="text-xl font-semibold text-heading">Correction détaillée</h2>
        {result.questions.map((question) => {
          const isCorrect = question.evaluationStatus === "correct";
          const shortAnswerExpectedAnswer =
            question.canonicalQuestion.type === "short-answer"
              ? formatShortAnswerExpectedAnswer(question.canonicalQuestion)
              : null;
          const isShortAnswer = shortAnswerExpectedAnswer !== null;
          const shortAnswerValue = getShortAnswerRawValue(question.responsePayload);
          const formatInstruction = getQuestionFormatStudentInstruction(question.canonicalQuestion);

          return (
            <Card key={question.attemptQuestionId} className="rounded-base bg-card hover:bg-card">
              <CardHeader className="gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">Question {question.globalOrder}</CardTitle>
                    <QuestionFormatBadge question={question.canonicalQuestion} />
                    <p className="max-w-2xl text-sm text-muted-foreground">
                      {formatInstruction}
                    </p>
                  </div>
                  <Badge
                    variant={
                      isCorrect
                        ? "outline"
                        : question.evaluationStatus === "unanswered"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {formatEvaluationStatus(question.evaluationStatus)}
                  </Badge>
                </div>
                {question.group ? (
                  <div className="border border-brand/20 bg-brand-soft/10 p-3 text-sm text-heading">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{question.group.title ?? "Énoncé commun"}</p>
                    <div className="mt-2"><MathContent value={question.group.sharedStatement} blockMathVariant="compact" /></div>
                  </div>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border bg-background p-4 text-sm font-medium text-heading">
                  <TrainingQuestionContentView question={question.question} questionDiagram={question.questionDiagram} />
                </div>

                {isShortAnswer ? (
                  <div
                    className={cn(
                      "grid gap-3 border p-4 text-sm",
                      isCorrect && "border-emerald-400 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100",
                      !isCorrect && question.evaluationStatus !== "unanswered" && "border-rose-400 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-100",
                      question.evaluationStatus === "unanswered" && "border-border bg-background text-body",
                    )}
                    data-testid="health-mock-exam-short-answer-result"
                  >
                    <div>
                      <p className="mb-1 font-semibold">Votre réponse</p>
                      <p>{shortAnswerValue.trim() ? shortAnswerValue : "Aucune réponse"}</p>
                    </div>
                    <div className="border-t border-current/15 pt-3">
                      <p className="mb-1 font-semibold">Réponse attendue</p>
                      <p>{shortAnswerExpectedAnswer}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-2">
                    {question.choices.map((choice, choiceIndex) => {
                      const selected = question.selectedChoiceIndexes.includes(choiceIndex);
                      const expected = question.correctChoiceIndexes.includes(choiceIndex);

                      return (
                        <div
                          key={`${question.attemptQuestionId}-${choiceIndex}`}
                          className={cn(
                            "flex gap-3 border p-3 text-sm",
                            expected && "border-emerald-400 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100",
                            selected && !expected && "border-rose-400 bg-rose-50 text-rose-950 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-100",
                            !selected && !expected && "border-border bg-background text-body",
                          )}
                        >
                          {expected ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-label="Réponse attendue" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" aria-label="Réponse non attendue" />}
                          <div className="min-w-0 flex-1">
                            <p className="mb-1 font-semibold">{String.fromCharCode(65 + choiceIndex)}{selected ? " · Votre choix" : ""}{expected ? " · Réponse attendue" : ""}</p>
                            <TrainingChoiceContentView choice={choice} />
                            <div className="mt-2 border-t border-current/15 pt-2 text-sm"><MathContent value={question.choiceExplanations[choiceIndex] ?? ""} /></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="border-l-2 border-brand/40 bg-brand-soft/10 p-4 text-sm text-heading">
                  <p className="font-semibold">Explication</p>
                  <div className="mt-1"><MathContent value={question.explanation} /></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isShortAnswer
                    ? `Votre réponse : ${shortAnswerValue.trim() ? shortAnswerValue : "Aucune réponse"} · Réponse attendue : ${shortAnswerExpectedAnswer}`
                    : `Votre réponse : ${formatChoiceLetters(question.selectedChoiceIndexes)} · Réponse attendue : ${formatChoiceLetters(question.correctChoiceIndexes)}`}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </section>
  );
}
