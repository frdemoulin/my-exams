"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { deleteExercisesByExamPaper } from "@/core/exercise/exercise.actions";
import toast from "react-hot-toast";

interface DeleteAllExercisesButtonProps {
  examPaperId: string;
  exerciseCount: number;
}

export function DeleteAllExercisesButton({ examPaperId, exerciseCount }: DeleteAllExercisesButtonProps) {
  const handleDelete = async () => {
    try {
      const result = await deleteExercisesByExamPaper(examPaperId);
      if (!result.success) {
        toast.error(result.error || "Erreur lors de la suppression des exercices");
        return;
      }
      toast.success("Tous les exercices ont été supprimés");
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
        throw error;
      }
      toast.error("Erreur lors de la suppression des exercices");
    }
  };

  if (exerciseCount === 0) return null;

  return (
    <ConfirmDeleteDialog
      onConfirm={handleDelete}
      title="Supprimer tous les exercices"
      description={`Supprimer les ${exerciseCount} exercice(s) de ce sujet ? Cette action est irréversible.`}
      tooltip="Supprimer tous les exercices"
      trigger={
        <Button variant="destructive" size="sm" aria-label="Supprimer tous les exercices">
          <Trash2 className="h-4 w-4" />
        </Button>
      }
    />
  );
}
