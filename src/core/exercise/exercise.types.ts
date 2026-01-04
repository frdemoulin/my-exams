import { z } from 'zod';

export const exerciseTypeSchema = z.enum(['NORMAL', 'QCM', 'TRUE_FALSE', 'OTHER']);
export type ExerciseType = z.infer<typeof exerciseTypeSchema>;

/**
 * Schéma de validation pour la création d'un exercice
 */
const baseExerciseSchema = z.object({
  examPaperId: z.string().min(1, 'Le sujet parent est requis'),
  exerciseNumber: z.number().int().positive('Le numéro doit être positif'),
  label: z.string().optional(),
  points: z.number().int().positive().optional(),
  pageStart: z.number().int().positive().optional(),
  pageEnd: z.number().int().positive().optional(),
  exerciseType: exerciseTypeSchema.optional(),
  title: z.string().optional(),
  statement: z.string().optional(),
  themeIds: z.array(z.string()).default([]),
  exerciseUrl: z.string().url().optional().or(z.literal('')),
  estimatedDuration: z.number().int().positive().optional(),
  estimatedDifficulty: z.number().int().min(1).max(5).optional(),
  summary: z.string().optional(),
  keywords: z.array(z.string()).default([]),
});

const withPageRangeValidation = <T extends z.ZodTypeAny>(schema: T) =>
  schema.superRefine((data, ctx) => {
    const hasStart = typeof data.pageStart === 'number';
    const hasEnd = typeof data.pageEnd === 'number';

    if (hasStart !== hasEnd) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'pageStart et pageEnd doivent etre renseignes ensemble',
        path: ['pageStart'],
      });
    }

    if (hasStart && hasEnd && data.pageStart! > data.pageEnd!) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'pageStart doit etre inferieur ou egal a pageEnd',
        path: ['pageStart'],
      });
    }
  });

export const createExerciseSchema = withPageRangeValidation(baseExerciseSchema);

export type CreateExerciseInput = z.infer<typeof createExerciseSchema>;

/**
 * Schéma de validation pour la mise à jour d'un exercice
 */
export const updateExerciseSchema = withPageRangeValidation(
  baseExerciseSchema.partial().extend({
    id: z.string().min(1, "L'identifiant est requis"),
  })
);

export type UpdateExerciseInput = z.infer<typeof updateExerciseSchema>;
