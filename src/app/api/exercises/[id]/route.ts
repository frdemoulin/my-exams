/**
 * API Route: Récupérer un exercice par son ID
 * GET /api/exercises/[id]
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchExerciseById, fetchExercisesByExamPaperId } from '@/core/exercise';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

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
