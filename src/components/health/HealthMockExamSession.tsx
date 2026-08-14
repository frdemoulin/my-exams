"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flag,
  Menu,
  Send,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuestionFormatBadge } from "@/components/training/question-format-badge";
import { TrainingChoiceContentView } from "@/components/training/training-choice-content-view";
import { TrainingQuestionContentView } from "@/components/training/training-question-content-view";
import { MathContent } from "@/components/training/math-content";
import type {
  HealthMockExamPassage,
  HealthMockExamPassageQuestion,
} from "@/core/health-mock-exam/health-mock-exam.types";
import {
  getChoiceIdFromIndex,
  getQuestionFormatStudentInstruction,
  getQuestionSelectionLimit,
  type HotspotPoint,
  type HotspotQuestion,
  type StudentAnswer,
} from "@/core/questions";
import { HotspotQuestionView } from "@/components/training/hotspot-question-view";
import { LongChoiceListView } from "@/components/training/long-choice-list-view";
import { cn } from "@/lib/utils";

type HealthMockExamSessionProps = {
  courseUnitId: string;
  examSlug: string;
  passage: HealthMockExamPassage;
  mode?: "exam" | "tutorial";
  onLocalSubmit?: (
    answersByAttemptQuestionId: Record<string, HealthMockExamSessionAnswer>,
    elapsedSeconds: number,
  ) => void | Promise<void>;
};

export type HealthMockExamSessionAnswer = {
  selectedChoiceIndexes: number[];
  responsePayload: StudentAnswer | null;
  markedForReview: boolean;
};

function formatRemainingTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;
}

function getRemainingSeconds(deadlineAt: string) {
  return Math.max(0, Math.ceil((new Date(deadlineAt).getTime() - Date.now()) / 1000));
}

function getShortAnswerValue(answer: HealthMockExamSessionAnswer | undefined) {
  return answer?.responsePayload?.type === "short-answer"
    ? answer.responsePayload.rawValue
    : "";
}

function getHotspotPoint(answer: HealthMockExamSessionAnswer | undefined): HotspotPoint | null {
  if (answer?.responsePayload?.type === "hotspot" && answer.responsePayload.points.length > 0) {
    return answer.responsePayload.points[0] ?? null;
  }
  return null;
}

function isAnswerRecorded(
  question: HealthMockExamPassageQuestion,
  answer: HealthMockExamSessionAnswer | undefined,
) {
  if (!answer) return false;

  if (question.questionType === "short-answer") {
    return getShortAnswerValue(answer).trim().length > 0;
  }

  if (question.questionType === "hotspot" || question.canonicalQuestion.type === "hotspot") {
    return getHotspotPoint(answer) !== null;
  }

  return answer.selectedChoiceIndexes.length > 0;
}

function createMcqResponsePayload(
  questionId: string,
  selectedChoiceIndexes: readonly number[],
): StudentAnswer {
  return {
    questionId,
    type: "mcq",
    selectedChoiceIds: selectedChoiceIndexes.map((choiceIndex) =>
      getChoiceIdFromIndex(choiceIndex),
    ),
  };
}

export function HealthMockExamSession({
  courseUnitId,
  examSlug,
  passage,
  mode = "exam",
  onLocalSubmit,
}: HealthMockExamSessionProps) {
  const router = useRouter();
  const isTutorial = mode === "tutorial";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(() =>
    getRemainingSeconds(passage.deadlineAt),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [answersByAttemptQuestionId, setAnswersByAttemptQuestionId] = useState<
    Record<string, HealthMockExamSessionAnswer>
  >(() =>
    Object.fromEntries(
      passage.questions.map((question) => [
        question.attemptQuestionId,
        {
          selectedChoiceIndexes: question.selectedChoiceIndexes,
          responsePayload: question.responsePayload,
          markedForReview: question.markedForReview,
        },
      ]),
    ),
  );
  const pendingSaves = useRef(new Map<string, Promise<void>>());
  const hasTriggeredAutoSubmit = useRef(false);
  const submitAttemptRef = useRef<() => void>(() => undefined);
  const resultsHref = `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${passage.attemptId}`;
  const submitButtonLabel = isTutorial ? "Terminer le tutoriel" : "Soumettre l'examen";
  const submitDialogTitle = isTutorial
    ? "Terminer le tutoriel ?"
    : "Soumettre l'examen blanc ?";
  const submitConfirmLabel = isTutorial
    ? "Voir le récapitulatif"
    : "Confirmer la soumission";

  const currentQuestion = passage.questions[currentIndex];
  const currentAnswer = answersByAttemptQuestionId[currentQuestion.attemptQuestionId];
  const currentFormatInstruction = getQuestionFormatStudentInstruction(
    currentQuestion.canonicalQuestion,
  );
  const currentSelectionLimit = getQuestionSelectionLimit(currentQuestion.canonicalQuestion);
  const currentSection = passage.sections.find(
    (section) =>
      currentQuestion.globalOrder >= section.firstQuestion &&
      currentQuestion.globalOrder <= section.lastQuestion,
  );
  const answeredCount = passage.questions.filter((question) =>
    isAnswerRecorded(question, answersByAttemptQuestionId[question.attemptQuestionId]),
  ).length;
  const markedCount = Object.values(answersByAttemptQuestionId).filter(
    (answer) => answer.markedForReview,
  ).length;

  const questionsBySection = useMemo(
    () =>
      passage.sections.map((section) => ({
        section,
        questions: passage.questions.filter(
          (question) =>
            question.globalOrder >= section.firstQuestion &&
            question.globalOrder <= section.lastQuestion,
        ),
      })),
    [passage.questions, passage.sections],
  );

  const saveAnswer = (
    attemptQuestionId: string,
    nextAnswer: HealthMockExamSessionAnswer,
  ) => {
    if (isTutorial) {
      return;
    }

    const previousSave = pendingSaves.current.get(attemptQuestionId) ?? Promise.resolve();
    const nextSave = previousSave
      .catch(() => undefined)
      .then(async () => {
        const response = await fetch(
          `/api/health/mock-exams/attempts/${passage.attemptId}/answers`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ attemptQuestionId, ...nextAnswer }),
          },
        );

        if (response.status === 409) {
          router.push(resultsHref);
          return;
        }
        if (!response.ok) {
          throw new Error("La sauvegarde de la réponse a échoué.");
        }
      })
      .catch((error: unknown) => {
        setSaveError(error instanceof Error ? error.message : "La sauvegarde a échoué.");
        throw error;
      });

    pendingSaves.current.set(attemptQuestionId, nextSave);
    void nextSave.catch(() => undefined);
  };

  const updateCurrentAnswer = (nextAnswer: HealthMockExamSessionAnswer) => {
    setAnswersByAttemptQuestionId((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.attemptQuestionId]: nextAnswer,
    }));
    setSaveError(null);
    saveAnswer(currentQuestion.attemptQuestionId, nextAnswer);
  };

  const toggleChoice = (choiceIndex: number) => {
    if (currentQuestion.questionType !== "mcq") return;

    let selectedChoiceIndexes: number[];

    if (currentQuestion.answerFormat === "SINGLE") {
      selectedChoiceIndexes = [choiceIndex];
    } else if (currentAnswer.selectedChoiceIndexes.includes(choiceIndex)) {
      selectedChoiceIndexes = currentAnswer.selectedChoiceIndexes.filter(
        (index) => index !== choiceIndex,
      );
    } else if (
      currentSelectionLimit !== null &&
      currentAnswer.selectedChoiceIndexes.length >= currentSelectionLimit
    ) {
      return;
    } else {
      selectedChoiceIndexes = [...currentAnswer.selectedChoiceIndexes, choiceIndex].sort(
        (left, right) => left - right,
      );
    }

    updateCurrentAnswer({
      ...currentAnswer,
      selectedChoiceIndexes,
      responsePayload: createMcqResponsePayload(currentQuestion.id, selectedChoiceIndexes),
    });
  };

  const updateCurrentShortAnswer = (rawValue: string) => {
    updateCurrentAnswer({
      ...currentAnswer,
      selectedChoiceIndexes: [],
      responsePayload: {
        questionId: currentQuestion.id,
        type: "short-answer",
        rawValue,
      },
    });
  };

  const updateCurrentHotspotPoint = (point: HotspotPoint | null) => {
    updateCurrentAnswer({
      ...currentAnswer,
      selectedChoiceIndexes: [],
      responsePayload: {
        questionId: currentQuestion.id,
        type: "hotspot",
        points: point ? [point] : [],
      },
    });
  };

  const toggleMarkedForReview = () => {
    updateCurrentAnswer({ ...currentAnswer, markedForReview: !currentAnswer.markedForReview });
  };

  const submitAttempt = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (isTutorial) {
        const elapsedSeconds = Math.max(
          0,
          Math.floor((Date.now() - new Date(passage.startedAt).getTime()) / 1000),
        );
        await onLocalSubmit?.(answersByAttemptQuestionId, elapsedSeconds);
        setIsSubmitting(false);
        return;
      }

      await Promise.all([...pendingSaves.current.values()].map((save) => save.catch(() => undefined)));
      const response = await fetch(
        `/api/health/mock-exams/attempts/${passage.attemptId}/submit`,
        { method: "POST" },
      );

      if (!response.ok) {
        throw new Error("La soumission de l'examen a échoué.");
      }

      router.push(resultsHref);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "La soumission a échoué.");
      setIsSubmitting(false);
    }
  };

  submitAttemptRef.current = () => {
    void submitAttempt();
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextRemainingSeconds = getRemainingSeconds(passage.deadlineAt);
      setRemainingSeconds(nextRemainingSeconds);

      if (nextRemainingSeconds === 0 && !hasTriggeredAutoSubmit.current) {
        hasTriggeredAutoSubmit.current = true;
        submitAttemptRef.current();
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [passage.deadlineAt]);

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    setIsNavigationOpen(false);
  };

  return (
    <section className="space-y-5" data-testid="health-mock-exam-taking">
      <header className="sticky top-0 z-20 border border-border bg-background/95 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground">
              {isTutorial ? "Tutoriel d'interface" : "Conditions d'examen"}
            </p>
            <h1 className="truncate text-xl font-semibold text-heading">{passage.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">Question {currentQuestion.globalOrder} / {passage.questionCount}</Badge>
            <Badge variant="outline">{currentSection?.title ?? "UE"}</Badge>
            <Badge
              variant={remainingSeconds <= 300 ? "destructive" : "outline"}
              className="gap-1.5 tabular-nums"
              aria-live="polite"
            >
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              Temps restant {formatRemainingTime(remainingSeconds)}
            </Badge>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setIsNavigationOpen((value) => !value)}
              aria-label={isNavigationOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
              title={isNavigationOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>

      {passage.instructions ? (
        <div className="border-l-2 border-brand/40 bg-brand-soft/10 p-4 text-sm text-heading">
          <MathContent value={passage.instructions} blockMathVariant="compact" />
        </div>
      ) : null}

      {isNavigationOpen ? (
        <nav
          className="space-y-4 border border-border bg-card p-4"
          aria-label={isTutorial ? "Navigation du tutoriel d'interface" : "Navigation de l'examen blanc"}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span>Question actuelle</span>
            <span>Réponse enregistrée</span>
            <span>À revoir</span>
            <span>Sans réponse</span>
          </div>
          <div className="space-y-4">
            {questionsBySection.map(({ section, questions }) => (
              <div key={section.id} className="space-y-2">
                <p className="text-sm font-semibold text-heading">
                  {section.title} <span className="font-normal text-muted-foreground">{section.firstQuestion} à {section.lastQuestion}</span>
                </p>
                <div className="grid grid-cols-8 gap-2 sm:grid-cols-10 md:grid-cols-12">
                  {questions.map((question) => {
                    const answer = answersByAttemptQuestionId[question.attemptQuestionId];
                    const isMarkedForReview = answer?.markedForReview ?? false;
                    const hasRecordedAnswer = isAnswerRecorded(question, answer);
                    const isCurrent = question.attemptQuestionId === currentQuestion.attemptQuestionId;
                    const status = isCurrent
                      ? "Question actuelle"
                      : isMarkedForReview
                        ? "Question à revoir"
                        : hasRecordedAnswer
                          ? "Réponse enregistrée"
                          : "Question sans réponse";

                    return (
                      <button
                        key={question.attemptQuestionId}
                        type="button"
                        onClick={() => goToQuestion(passage.questions.indexOf(question))}
                        aria-current={isCurrent ? "page" : undefined}
                        aria-label={`Question ${question.globalOrder} : ${status.toLowerCase()}`}
                        className={cn(
                          "relative flex h-10 items-center justify-center border text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                          isCurrent && "border-brand bg-brand text-white",
                          !isCurrent && isMarkedForReview && "border-amber-500 bg-amber-50 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100",
                          !isCurrent && !isMarkedForReview && hasRecordedAnswer && "border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100",
                          !isCurrent && !isMarkedForReview && !hasRecordedAnswer && "border-border bg-background text-muted-foreground",
                        )}
                      >
                        {question.globalOrder}
                        {isMarkedForReview ? <Flag className="absolute right-1 top-1 h-3 w-3" aria-hidden="true" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      ) : null}

      {currentQuestion.group ? (
        <div className="border border-brand/20 bg-brand-soft/10 p-4 text-sm text-heading">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {currentQuestion.group.title ?? "Énoncé commun"}
          </p>
          <div className="mt-2">
            <MathContent value={currentQuestion.group.sharedStatement} blockMathVariant="compact" />
          </div>
        </div>
      ) : null}

      <article className="space-y-5 border border-border bg-card p-4 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-heading">Question {currentQuestion.globalOrder}</h2>
            <QuestionFormatBadge question={currentQuestion.canonicalQuestion} />
            <p className="max-w-2xl text-sm text-muted-foreground">
              {currentFormatInstruction}
            </p>
          </div>
          <Button
            type="button"
            variant={currentAnswer.markedForReview ? "warning" : "outline"}
            size="sm"
            onClick={toggleMarkedForReview}
            aria-pressed={currentAnswer.markedForReview}
          >
            <Flag className="h-4 w-4" aria-hidden="true" />
            {currentAnswer.markedForReview ? "À revoir" : "Marquer à revoir"}
          </Button>
        </div>

        <div className="border border-border bg-background p-4 text-sm font-medium text-heading">
          <TrainingQuestionContentView
            question={currentQuestion.question}
            questionDiagram={currentQuestion.questionDiagram}
          />
        </div>

        {currentQuestion.canonicalQuestion.type === "hotspot" ? (
          <HotspotQuestionView
            question={currentQuestion.canonicalQuestion as HotspotQuestion}
            selectedPoint={getHotspotPoint(currentAnswer)}
            onPointSelect={updateCurrentHotspotPoint}
            readOnly={isSubmitting}
            showHeader={false}
          />
        ) : currentQuestion.questionType === "short-answer" ? (
          <div className="space-y-2">
            <label
              htmlFor={`health-mock-exam-short-answer-${currentQuestion.attemptQuestionId}`}
              className="text-sm font-semibold text-heading"
            >
              Votre réponse
            </label>
            <Input
              id={`health-mock-exam-short-answer-${currentQuestion.attemptQuestionId}`}
              value={getShortAnswerValue(currentAnswer)}
              onChange={(event) => updateCurrentShortAnswer(event.target.value)}
              data-testid="health-mock-exam-short-answer-input"
              placeholder="Saisissez votre réponse courte"
              autoComplete="off"
            />
          </div>
        ) : currentQuestion.canonicalQuestion.format === "QRPL" || currentQuestion.choices.length > 5 ? (
          <LongChoiceListView
            choices={currentQuestion.choices}
            selectedIndexes={currentAnswer.selectedChoiceIndexes}
            selectionLimit={currentSelectionLimit}
            onSelectChoice={toggleChoice}
            isAnswerLocked={isSubmitting}
            testIdPrefix="health-mock-exam-choice"
          />
        ) : (
          <div className="grid gap-3">
            {currentQuestion.choices.map((choice, choiceIndex) => {
              const isSelected = currentAnswer.selectedChoiceIndexes.includes(choiceIndex);
              const isDisabledBySelectionLimit =
                !isSelected &&
                currentSelectionLimit !== null &&
                currentAnswer.selectedChoiceIndexes.length >= currentSelectionLimit;

              return (
                <button
                  key={`${currentQuestion.attemptQuestionId}-${choiceIndex}`}
                  type="button"
                  onClick={() => toggleChoice(choiceIndex)}
                  aria-pressed={isSelected}
                  disabled={isDisabledBySelectionLimit}
                  data-testid={`health-mock-exam-choice-${choiceIndex}`}
                  className={cn(
                    "flex items-start gap-3 border border-border bg-background px-4 py-3 text-left text-sm transition-colors",
                    "hover:border-brand/50 hover:bg-neutral-secondary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                    isSelected && "border-brand bg-brand-soft/15 ring-2 ring-brand/20",
                    isDisabledBySelectionLimit && "cursor-not-allowed opacity-50 hover:border-border hover:bg-background",
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-brand bg-brand text-xs font-semibold text-white">
                    {String.fromCharCode(65 + choiceIndex)}
                  </span>
                  <span className="min-w-0 flex-1"><TrainingChoiceContentView choice={choice} /></span>
                  {isSelected ? <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-label="Sélectionné" /> : null}
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.questionType === "mcq" && currentQuestion.answerFormat === "MULTIPLE" ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              updateCurrentAnswer({
                ...currentAnswer,
                selectedChoiceIndexes: [],
                responsePayload: createMcqResponsePayload(currentQuestion.id, []),
              })
            }
            disabled={currentAnswer.selectedChoiceIndexes.length === 0}
          >
            Effacer la sélection
          </Button>
        ) : null}

        <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {answeredCount} réponse{answeredCount > 1 ? 's' : ''} enregistrée{answeredCount > 1 ? 's' : ''} · {markedCount} à revoir
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Précédente
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentIndex((index) => Math.min(passage.questions.length - 1, index + 1))}
              disabled={currentIndex === passage.questions.length - 1}
            >
              Suivante
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </article>

      {saveError ? (
        <p role="alert" className="border border-danger/40 bg-danger/10 p-3 text-sm text-danger">
          {saveError}
        </p>
      ) : null}

      <div className="flex justify-end">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="button" variant="destructive" disabled={isSubmitting}>
              <Send className="h-4 w-4" aria-hidden="true" />
              {submitButtonLabel}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{submitDialogTitle}</AlertDialogTitle>
              <AlertDialogDescription>
                {answeredCount} question{answeredCount > 1 ? 's' : ''} répondue{answeredCount > 1 ? 's' : ''}, {passage.questionCount - answeredCount} sans réponse et {formatRemainingTime(remainingSeconds)} restante{remainingSeconds > 1 ? 's' : ''}. {isTutorial ? "Vous pourrez refaire ce tutoriel librement." : "Cette soumission est définitive."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Continuer l&apos;épreuve</AlertDialogCancel>
              <AlertDialogAction onClick={() => void submitAttempt()} disabled={isSubmitting}>
                {isSubmitting ? "Soumission..." : submitConfirmLabel}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
