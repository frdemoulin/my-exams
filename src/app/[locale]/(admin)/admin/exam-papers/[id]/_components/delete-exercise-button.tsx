"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { deleteExercise } from "@/core/exercise/exercise.actions";
import toast from "react-hot-toast";

interface DeleteExerciseButtonProps {
  exerciseId: string;
  exerciseNumber: number;
}

export function DeleteExerciseButton({ exerciseId, exerciseNumber }: DeleteExerciseButtonProps) {
  const handleDelete = async () => {
    try {
      const result = await deleteExercise(exerciseId);
      if (result.success) {
        toast.success("Exercice supprimé");
      } else {
        toast.error(result.error || "Erreur lors de la suppression");
      }
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
        throw error;
      }
      toast.error("Erreur lors de la suppression de l'exercice");
    }
  };

  return (
    <ConfirmDeleteDialog
      onConfirm={handleDelete}
      title="Supprimer l'exercice"
      description={`Êtes-vous sûr de vouloir supprimer l'exercice ${exerciseNumber} ? Cette action est irréversible.`}
      tooltip="Supprimer l'exercice"
      trigger={
        <Button variant="destructive" size="sm">
          <Trash2 className="h-4 w-4" />
        </Button>
      }
    />
  );
}
