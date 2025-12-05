import { z } from 'zod';

/**
 * Schéma de validation pour la création d'un exercice
 */
export const createExerciseSchema = z.object({
  examPaperId: z.string().min(1, 'Le sujet parent est requis'),
  exerciseNumber: z.number().int().positive('Le numéro doit être positif'),
  label: z.string().optional(),
  points: z.number().int().positive().optional(),
  title: z.string().optional(),
  statement: z.string().optional(),
  themeIds: z.array(z.string()).default([]),
  exerciseUrl: z.string().url().optional().or(z.literal('')),
  correctionUrl: z.string().url().optional().or(z.literal('')),
  estimatedDuration: z.number().int().positive().optional(),
  estimatedDifficulty: z.number().int().min(1).max(5).optional(),
  summary: z.string().optional(),
  keywords: z.array(z.string()).default([]),
});

export type CreateExerciseInput = z.infer<typeof createExerciseSchema>;

/**
 * Schéma de validation pour la mise à jour d'un exercice
 */
export const updateExerciseSchema = createExerciseSchema.partial().extend({
  id: z.string().min(1, "L'identifiant est requis"),
});

export type UpdateExerciseInput = z.infer<typeof updateExerciseSchema>;
