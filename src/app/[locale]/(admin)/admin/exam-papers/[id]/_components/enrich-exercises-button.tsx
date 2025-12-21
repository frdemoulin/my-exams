"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enrichExercisesByExamPaper } from "@/core/exercise";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import toast from "react-hot-toast";

interface EnrichExercisesButtonProps {
  examPaperId: string;
  exerciseCount: number;
  pendingCount: number;
  failedCount: number;
}

export function EnrichExercisesButton({
  examPaperId,
  exerciseCount,
  pendingCount,
  failedCount,
}: EnrichExercisesButtonProps) {
  const [isEnriching, setIsEnriching] = useState(false);
  const pendingTotal = pendingCount + failedCount;
  const completedCount = Math.max(exerciseCount - pendingTotal, 0);
  const shouldReenrichAll = pendingTotal === 0;

  if (exerciseCount === 0) return null;

  const handleEnrich = async () => {
    setIsEnriching(true);
    try {
      const result = await enrichExercisesByExamPaper(examPaperId, {
        includeCompleted: shouldReenrichAll,
      });
      if (!result.success) {
        toast.error(result.error || "Erreur lors de l'enrichissement");
        return;
      }

      if (result.total === 0) {
        toast.success("Aucun exercice à enrichir");
        return;
      }

      if (result.failed && result.failed > 0) {
        const firstError = result.failures?.[0]?.error;
        const suffix = result.failed > 1 ? ` (${result.failed} échecs)` : '';
        toast.error(
          firstError
            ? `Échec : ${firstError}${suffix}`
            : `${result.failed} exercice(s) en échec sur ${result.total} (voir logs)`
        );
      } else {
        toast.success(`${result.processed} exercice(s) enrichi(s)`);
      }
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "digest" in error &&
        String(error.digest).startsWith("NEXT_REDIRECT")
      ) {
        throw error;
      }
      toast.error("Erreur lors de l'enrichissement");
    } finally {
      setIsEnriching(false);
    }
  };

  const description = shouldReenrichAll
    ? `Relancer l'enrichissement pour ${exerciseCount} exercice${exerciseCount > 1 ? 's' : ''} déjà enrichi${exerciseCount > 1 ? 's' : ''} ?`
    : pendingTotal === 1
      ? "Lancer l'enrichissement pour 1 exercice ?"
      : `Lancer l'enrichissement pour ${pendingTotal} exercices${completedCount > 0 ? ' en attente/échec' : ''} ?`;
  const buttonLabel = shouldReenrichAll ? "Relancer l'enrichissement" : "Enrichir les exercices";
  const confirmLabel = shouldReenrichAll ? "Relancer l'enrichissement" : "Lancer l'enrichissement";
  const confirmLoadingLabel = shouldReenrichAll ? "Relance..." : "Enrichissement...";

  return (
    <ConfirmDeleteDialog
      onConfirm={handleEnrich}
      title={`${confirmLabel} ?`}
      description={description}
      confirmLabel={confirmLabel}
      confirmLoadingLabel={confirmLoadingLabel}
      confirmVariant="default"
      tooltip={buttonLabel}
      trigger={
        <Button
          variant="default"
          disabled={isEnriching}
          aria-label={buttonLabel}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isEnriching ? confirmLoadingLabel : buttonLabel}
        </Button>
      }
    />
  );
}
