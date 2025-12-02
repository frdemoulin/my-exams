'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/db/prisma';
import { createExerciseSchema, updateExerciseSchema, type CreateExerciseInput, type UpdateExerciseInput } from './exercise.types';

/**
 * Créer un nouvel exercice
 */
export async function createExercise(data: CreateExerciseInput) {
  try {
    // Validation
    const validated = createExerciseSchema.parse(data);

    // Vérifier que l'ExamPaper existe
    const examPaper = await prisma.examPaper.findUnique({
      where: { id: validated.examPaperId },
    });

    if (!examPaper) {
      return {
        success: false,
        error: "Le sujet d'examen n'existe pas",
      };
    }

    // Vérifier que le numéro d'exercice n'existe pas déjà
    const existingExercise = await prisma.exercise.findUnique({
      where: {
        examPaperId_exerciseNumber: {
          examPaperId: validated.examPaperId,
          exerciseNumber: validated.exerciseNumber,
        },
      },
    });

    if (existingExercise) {
      return {
        success: false,
        error: `Un exercice avec le numéro ${validated.exerciseNumber} existe déjà pour ce sujet`,
      };
    }

    // Créer l'exercice
    const exercise = await prisma.exercise.create({
      data: {
        examPaperId: validated.examPaperId,
        exerciseNumber: validated.exerciseNumber,
        label: validated.label,
        points: validated.points,
        title: validated.title,
        statement: validated.statement,
        themeIds: validated.themeIds,
        exerciseUrl: validated.exerciseUrl || undefined,
        correctionUrl: validated.correctionUrl || undefined,
        estimatedDuration: validated.estimatedDuration,
        estimatedDifficulty: validated.estimatedDifficulty,
        summary: validated.summary,
        keywords: validated.keywords,
        enrichmentStatus: 'pending',
      },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${validated.examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
      data: exercise,
    };
  } catch (error) {
    console.error('Error creating exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la création',
    };
  }
}

/**
 * Mettre à jour un exercice existant
 */
export async function updateExercise(data: UpdateExerciseInput) {
  try {
    // Validation
    const validated = updateExerciseSchema.parse(data);
    const { id, ...updateData } = validated;

    // Vérifier que l'exercice existe
    const existing = await prisma.exercise.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        error: "L'exercice n'existe pas",
      };
    }

    // Si on change le numéro, vérifier qu'il n'existe pas déjà
    if (updateData.exerciseNumber && updateData.exerciseNumber !== existing.exerciseNumber) {
      const duplicate = await prisma.exercise.findUnique({
        where: {
          examPaperId_exerciseNumber: {
            examPaperId: existing.examPaperId,
            exerciseNumber: updateData.exerciseNumber,
          },
        },
      });

      if (duplicate) {
        return {
          success: false,
          error: `Un exercice avec le numéro ${updateData.exerciseNumber} existe déjà`,
        };
      }
    }

    // Mettre à jour
    const exercise = await prisma.exercise.update({
      where: { id },
      data: {
        ...updateData,
        exerciseUrl: updateData.exerciseUrl || undefined,
        correctionUrl: updateData.correctionUrl || undefined,
      },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${existing.examPaperId}`);
    revalidatePath(`/exercises/${id}`);
    revalidatePath('/');

    return {
      success: true,
      data: exercise,
    };
  } catch (error) {
    console.error('Error updating exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour',
    };
  }
}

/**
 * Supprimer un exercice
 */
export async function deleteExercise(id: string) {
  try {
    const exercise = await prisma.exercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      return {
        success: false,
        error: "L'exercice n'existe pas",
      };
    }

    await prisma.exercise.delete({
      where: { id },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${exercise.examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la suppression',
    };
  }
}

/**
 * Créer plusieurs exercices d'un coup (pour découpage d'un sujet)
 */
export async function createMultipleExercises(exercises: CreateExerciseInput[]) {
  try {
    const results = [];
    const errors = [];

    for (const exerciseData of exercises) {
      const result = await createExercise(exerciseData);
      if (result.success) {
        results.push(result.data);
      } else {
        errors.push({
          exerciseNumber: exerciseData.exerciseNumber,
          error: result.error,
        });
      }
    }

    return {
      success: errors.length === 0,
      created: results.length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    console.error('Error creating multiple exercises:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la création multiple',
    };
  }
}

/**
 * Supprimer tous les exercices d'un ExamPaper
 */
export async function deleteExercisesByExamPaper(examPaperId: string) {
  try {
    await prisma.exercise.deleteMany({
      where: { examPaperId },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${examPaperId}`);
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Error deleting exercises by examPaperId:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la suppression des exercices',
    };
  }
}
