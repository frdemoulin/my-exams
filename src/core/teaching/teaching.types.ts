import { z } from 'zod';
import { Teaching, Grade, Subject } from '@prisma/client';

export type TeachingWithRelations = Teaching & {
  grade: Grade;
  subject: Subject;
};

export type TeachingsByGrade = {
  grade: Grade;
  teachings: TeachingWithRelations[];
};

// Zod schema pour validation
export const createTeachingSchema = z.object({
  longDescription: z.string().min(3, 'La description doit contenir au moins 3 caractères'),
  shortDescription: z.string().optional(),
  gradeId: z.string().min(1, 'Le niveau est requis'),
  subjectId: z.string().min(1, 'La matière est requise'),
});

export type CreateTeachingErrors = z.inferFlattenedErrors<typeof createTeachingSchema>;
