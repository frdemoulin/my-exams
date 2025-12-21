"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enrichExerciseById } from "@/core/exercise";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import toast from "react-hot-toast";

interface ReenrichExerciseButtonProps {
  exerciseId: string;
  exerciseNumber: number;
  enrichmentStatus: "pending" | "failed" | "completed";
}

export function ReenrichExerciseButton({
  exerciseId,
  exerciseNumber,
  enrichmentStatus,
}: ReenrichExerciseButtonProps) {
  const verb = enrichmentStatus === "completed" ? "Relancer" : "Lancer";

  const handleEnrich = async () => {
    try {
      const result = await enrichExerciseById(exerciseId);
      if (!result.success) {
        toast.error(result.error || "Erreur lors de l'enrichissement");
        return;
      }

      toast.success(
        enrichmentStatus === "completed"
          ? "Enrichissement relancé"
          : "Exercice enrichi"
      );
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
    }
  };

  return (
    <ConfirmDeleteDialog
      onConfirm={handleEnrich}
      title={`${verb} l'enrichissement ?`}
      description={`Confirmer l'enrichissement de l'exercice ${exerciseNumber}.`}
      confirmLabel={`${verb} l'enrichissement`}
      confirmLoadingLabel={verb === "Relancer" ? "Relance..." : "Enrichissement..."}
      confirmVariant="default"
      tooltip={`${verb} l'enrichissement`}
      trigger={
        <Button
          variant="default"
          size="sm"
          aria-label={`${verb} l'enrichissement`}
          title={`${verb} l'enrichissement`}
        >
          <Sparkles className="h-4 w-4" />
        </Button>
      }
    />
  );
}
