"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flag,
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
import {
  HealthQuestionNavigator,
  type QuestionNavigatorSessionItem,
  type SessionQuestionState,
} from "@/components/health/HealthQuestionNavigator";
import { QuestionFormatBadge } from "@/components/training/question-format-badge";
import { TrainingChoiceContentView } from "@/components/training/training-choice-content-view";
import { TrainingQuestionContentView } from "@/components/training/training-question-content-view";
import { MathContent } from "@/components/training/math-content";
import { SharedQuestionGroupPanel } from "@/components/training/shared-question-group-panel";
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
  type ShortAnswerQuestion,
  type StudentAnswer,
} from "@/core/questions";
import { HotspotQuestionView } from "@/components/training/hotspot-question-view";
import { LongChoiceListView } from "@/components/training/long-choice-list-view";
import { cn } from "@/lib/utils";

import { ProtectedAssessmentContent } from "@/components/shared/ProtectedAssessmentContent";

type HealthMockExamSessionProps = {
  courseUnitId: string;
  examSlug: string;
  passage: HealthMockExamPassage;
  mode?: "exam" | "tutorial";
  resultsHref?: string;
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

type QuestionNavStatus = "current" | "marked" | "answered" | "unanswered";

function formatRemainingTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
  resultsHref: customResultsHref,
  onLocalSubmit,
}: HealthMockExamSessionProps) {
  const router = useRouter();
  const isTutorial = mode === "tutorial";
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const resultsHref =
    customResultsHref ??
    `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${passage.attemptId}`;

  const isColle = passage.type === "COLLE";
  const submitButtonLabel = isTutorial
    ? "Terminer le tutoriel"
    : isColle
    ? "Terminer la colle"
    : "Terminer l'examen blanc";
  const submitDialogTitle = isTutorial
    ? "Terminer le tutoriel ?"
    : isColle
    ? "Terminer la colle ?"
    : "Terminer l'examen blanc ?";
  const submitCancelLabel = isTutorial
    ? "Continuer le tutoriel"
    : isColle
    ? "Continuer la colle"
    : "Continuer l'examen";
  const submitConfirmLabel = isTutorial
    ? "Voir le récapitulatif"
    : "Terminer et voir les résultats";

  const currentQuestion = passage.questions[currentIndex];
  const currentAnswer = answersByAttemptQuestionId[currentQuestion.attemptQuestionId];
  const currentFormatInstruction = getQuestionFormatStudentInstruction(
    currentQuestion.canonicalQuestion,
  );
  const currentSelectionLimit = getQuestionSelectionLimit(currentQuestion.canonicalQuestion);

  const answeredCount = passage.questions.filter((question) =>
    isAnswerRecorded(question, answersByAttemptQuestionId[question.attemptQuestionId]),
  ).length;
  const markedCount = Object.values(answersByAttemptQuestionId).filter(
    (answer) => answer.markedForReview,
  ).length;
  const unansweredCount = passage.questionCount - answeredCount;

  const formatSubmitDialogDescription = () => {
    if (isTutorial) {
      return "Vous pourrez refaire ce tutoriel librement.";
    }

    const parts: string[] = [];
    if (unansweredCount > 0) {
      parts.push(`${unansweredCount} question${unansweredCount > 1 ? "s" : ""} sans réponse`);
    }
    if (markedCount > 0) {
      parts.push(`${markedCount} question${markedCount > 1 ? "s" : ""} marquée${markedCount > 1 ? "s" : ""} à revoir`);
    }

    if (parts.length === 0) {
      return isColle
        ? "Terminer la colle et afficher les résultats ?"
        : "Terminer l'examen blanc et afficher les résultats ?";
    }

    return `Il reste ${parts.join(" et ")}.`;
  };

  const persistAnswer = (
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
    persistAnswer(currentQuestion.attemptQuestionId, nextAnswer);
  };

  const toggleChoice = (choiceIndex: number) => {
    const selectedChoiceIndexes = currentAnswer.selectedChoiceIndexes;
    const isSingleChoice = currentQuestion.answerFormat === "SINGLE";

    let nextSelectedIndexes: number[];
    if (isSingleChoice) {
      nextSelectedIndexes = selectedChoiceIndexes.includes(choiceIndex) ? [] : [choiceIndex];
    } else {
      nextSelectedIndexes = selectedChoiceIndexes.includes(choiceIndex)
        ? selectedChoiceIndexes.filter((index) => index !== choiceIndex)
        : [...selectedChoiceIndexes, choiceIndex];
    }

    const nextAnswer: HealthMockExamSessionAnswer = {
      ...currentAnswer,
      selectedChoiceIndexes: nextSelectedIndexes,
      responsePayload: createMcqResponsePayload(currentQuestion.id, nextSelectedIndexes),
    };

    updateCurrentAnswer(nextAnswer);
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
  };

  const getQuestionStatus = (index: number): SessionQuestionState => {
    const question = passage.questions[index];
    const answer = answersByAttemptQuestionId[question.attemptQuestionId];
    if (answer?.markedForReview) return "marked";
    if (isAnswerRecorded(question, answer)) return "answered";
    return "unanswered";
  };

  const navigatorItems: QuestionNavigatorSessionItem[] = passage.questions.map(
    (question, index) => {
      const status = getQuestionStatus(index);
      const formatCode =
        question.canonicalQuestion?.format ?? question.questionType.toUpperCase();
      return {
        id: question.attemptQuestionId,
        order: index + 1,
        formatCode,
        state: status,
        markedForReview: status === "marked",
        testId: `health-mock-exam-nav-${index + 1}`,
        ariaLabel: `Question ${index + 1} sur ${passage.questionCount} — ${formatCode}`,
      };
    },
  );

  return (
    <ProtectedAssessmentContent watermarkCode={passage.watermarkCode}>
      <section className="space-y-6" data-testid="health-mock-exam-taking">
      {/* 1. BARRE DE NAVIGATION DES QUESTIONS (STYLE PLAYER SANTÉ V2) */}
      <HealthQuestionNavigator
        mode="session"
        items={navigatorItems}
        currentIndex={currentIndex}
        onSelectIndex={goToQuestion}
        counterText={`Répondues : ${answeredCount}/${passage.questionCount}`}
        ariaLabel="Navigation des questions"
        testId="health-mock-exam-taking-nav"
      />

      {/* 2. EN-TÊTE ET CONTEXTE DE LA QUESTION COURANTE */}
      <div className="space-y-2 pt-1">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <p
              data-testid="health-mock-exam-question-counter"
              className="text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              Question {currentIndex + 1} / {passage.questionCount}
            </p>
            <QuestionFormatBadge question={currentQuestion.canonicalQuestion} />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant={remainingSeconds <= 300 ? "destructive" : "outline"}
              className="gap-1.5 tabular-nums text-xs"
              aria-live="polite"
            >
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              Temps restant {formatRemainingTime(remainingSeconds)}
            </Badge>

            <Badge variant="secondary" className="w-fit text-xs">
              {answeredCount}/{passage.questionCount} répondues
            </Badge>

            <Button
              type="button"
              variant={currentAnswer.markedForReview ? "warning" : "outline"}
              size="xs"
              onClick={toggleMarkedForReview}
              aria-pressed={currentAnswer.markedForReview}
              className="gap-1.5 text-xs h-7 px-2.5"
            >
              <Flag className="h-3.5 w-3.5" aria-hidden="true" />
              {currentAnswer.markedForReview ? "À revoir" : "Marquer à revoir"}
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="default"
                  size="xs"
                  disabled={isSubmitting}
                  className="gap-1.5 text-xs h-7 px-2.5"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  {submitButtonLabel}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{submitDialogTitle}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {formatSubmitDialogDescription()}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{submitCancelLabel}</AlertDialogCancel>
                  <AlertDialogAction onClick={() => void submitAttempt()} disabled={isSubmitting}>
                    {isSubmitting ? "Soumission..." : submitConfirmLabel}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {currentFormatInstruction ? (
          <p className="text-sm font-medium text-muted-foreground">
            {currentFormatInstruction}
          </p>
        ) : null}
      </div>

      {currentQuestion.group ? (
        <SharedQuestionGroupPanel
          questionNumbers={passage.questions.flatMap((q, idx) =>
            q.group?.id === currentQuestion.group?.id ? [idx + 1] : []
          )}
          title={currentQuestion.group.title}
          sharedStatement={currentQuestion.group.sharedStatement}
          sharedMedia={currentQuestion.group.sharedMedia}
          hideSharedMedia={
            currentQuestion.canonicalQuestion.type === "hotspot" &&
            currentQuestion.group.sharedMedia?.src ===
              (currentQuestion.canonicalQuestion as HotspotQuestion).image?.src
          }
        />
      ) : null}

      {/* 3. PANNEAU DE L'ÉNONCÉ */}
      <div
        data-testid="health-mock-exam-question-panel"
        className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-heading"
      >
        <TrainingQuestionContentView
          question={currentQuestion.question}
          questionDiagram={currentQuestion.questionDiagram}
        />
      </div>

      {/* 4. PROPOSITIONS ET FORMES DE RÉPONSES */}
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
          <div className="flex items-center gap-2">
            <Input
              id={`health-mock-exam-short-answer-${currentQuestion.attemptQuestionId}`}
              value={getShortAnswerValue(currentAnswer)}
              onChange={(event) => updateCurrentShortAnswer(event.target.value)}
              data-testid="health-mock-exam-short-answer-input"
              placeholder={
                (currentQuestion.canonicalQuestion as ShortAnswerQuestion).answerType === "number"
                  ? "Saisissez la valeur numérique"
                  : "Saisissez votre réponse courte"
              }
              autoComplete="off"
              className="flex-1"
            />
            {(currentQuestion.canonicalQuestion as ShortAnswerQuestion).answerType === "number" && (
              (currentQuestion.canonicalQuestion as ShortAnswerQuestion).numericAnswer?.displayUnit ? (
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  <MathContent
                    value={`$${(currentQuestion.canonicalQuestion as ShortAnswerQuestion).numericAnswer!.displayUnit!}$`}
                  />
                </span>
              ) : (currentQuestion.canonicalQuestion as ShortAnswerQuestion).numericAnswer?.unit ? (
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {(currentQuestion.canonicalQuestion as ShortAnswerQuestion).numericAnswer!.unit}
                </span>
              ) : null
            )}
          </div>
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
                disabled={isDisabledBySelectionLimit || isSubmitting}
                data-testid={`health-mock-exam-choice-${choiceIndex}`}
                className={cn(
                  "flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors",
                  "hover:border-brand/50 hover:bg-neutral-secondary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isSelected && "border-brand bg-brand-soft/15 ring-2 ring-brand/20",
                  isDisabledBySelectionLimit && "cursor-not-allowed opacity-50 hover:border-border hover:bg-background",
                )}
              >
                <span className="flex min-w-0 flex-1 items-baseline gap-3">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center self-baseline rounded-full border border-brand bg-brand text-xs font-semibold leading-none text-white shadow-xs",
                      typeof choice !== "string" && "self-center",
                    )}
                  >
                    {String.fromCharCode(65 + choiceIndex)}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 self-baseline",
                      typeof choice !== "string" && "self-center",
                    )}
                  >
                    <TrainingChoiceContentView choice={choice} />
                  </span>
                </span>

                {isSelected ? (
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-label="Sélectionné" />
                ) : null}
              </button>
            );
          })}
        </div>
      )}

      {currentQuestion.questionType === "mcq" && currentQuestion.answerFormat === "MULTIPLE" ? (
        <div>
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
        </div>
      ) : null}

      {/* 5. BAS DE PAGE & NAVIGATION PRÉCÉDENTE / SUIVANTE / REMISE */}
      <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {answeredCount} réponse{answeredCount > 1 ? "s" : ""} enregistrée{answeredCount > 1 ? "s" : ""} · {markedCount} à revoir
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            disabled={currentIndex === 0}
            className="gap-1.5"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Précédente
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentIndex((index) => Math.min(passage.questions.length - 1, index + 1))}
            disabled={currentIndex === passage.questions.length - 1}
            className="gap-1.5"
          >
            Suivante
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {saveError ? (
        <p role="alert" className="rounded-xl border border-danger/40 bg-danger/10 p-3 text-sm text-danger">
          {saveError}
        </p>
      ) : null}
    </section>
  </ProtectedAssessmentContent>
  );
}
