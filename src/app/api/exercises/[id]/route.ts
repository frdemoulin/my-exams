/**
 * API Route: Récupérer un exercice par son ID
 * GET /api/exercises/[id]
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchExerciseById, fetchExercisesByExamPaperId } from '@/core/exercise';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { assertUserCanAccessExercise, PedagogicalAccessError } from '@/lib/auth/assert-pedagogical-access';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const session = await auth();
    const userId = getSessionEffectiveUserId(session);
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Authentification requise pour accéder à cet exercice.',
        },
        { status: 401 }
      );
    }

    await assertUserCanAccessExercise({ userId, exerciseId: id });

    // Récupérer l'exercice
    const exercise = await fetchExerciseById(id);

    if (!exercise) {
      return NextResponse.json(
        {
          success: false,
          error: 'Exercise not found',
        },
        { status: 404 }
      );
    }

    // Récupérer les autres exercices du même sujet
    const relatedExercises = await fetchExercisesByExamPaperId(
      exercise.examPaper.id
    );

    // Filtrer pour exclure l'exercice actuel
    const otherExercises = relatedExercises.filter((ex) => ex.id !== id);

    return NextResponse.json({
      success: true,
      exercise,
      otherExercises,
    });
  } catch (error) {
    if (error instanceof PedagogicalAccessError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: error.code,
        },
        { status: error.statusCode }
      );
    }
    console.error('Error fetching exercise:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch exercise',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
