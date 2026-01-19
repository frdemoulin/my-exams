import { z } from "zod";

export interface ExerciseCorrection {
  id: string;
  exerciseId: string;
  source: string;
  url: string;
  type: ExerciseCorrectionType;
  quality?: number;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ExerciseCorrectionType = "pdf" | "video" | "html";

export const createExerciseCorrectionSchema = z.object({
  exerciseId: z.string().min(1, "L'ID de l'exercice est requis"),
  source: z.string().min(1, "La source est requise"),
  url: z.string().url("L'URL doit être valide"),
  type: z.enum(["pdf", "video", "html"]).default("pdf"),
  quality: z.number().min(1).max(5).optional(),
  author: z.string().optional(),
});

export type CreateExerciseCorrectionValues = z.infer<typeof createExerciseCorrectionSchema>;
export type CreateExerciseCorrectionErrors = z.inferFormattedError<typeof createExerciseCorrectionSchema>;
