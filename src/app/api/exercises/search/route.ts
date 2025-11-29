/**
 * API Route: Recherche d'exercices
 * GET /api/exercises/search
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchExercises } from '@/core/exercise';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Extraction des paramètres
    const diploma = searchParams.get('diploma') || undefined;
    const subject = searchParams.get('subject') || undefined;
    const difficulty = searchParams.get('difficulty')
      ? parseInt(searchParams.get('difficulty')!)
      : undefined;
    const year = searchParams.get('year')
      ? parseInt(searchParams.get('year')!)
      : undefined;
    const search = searchParams.get('search') || undefined;
    const sortBy = (searchParams.get('sortBy') as 'year' | 'difficulty' | 'duration') || 'year';
    const sortOrder = (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc';
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : undefined;

    // Thèmes (peut être multiple)
    const themesParam = searchParams.get('themes');
    const themes = themesParam ? themesParam.split(',') : undefined;

    // Recherche des exercices
    const exercises = await searchExercises({
      diploma,
      subject,
      difficulty,
      themes,
      year,
      search,
      sortBy,
      sortOrder,
      limit,
    });

    return NextResponse.json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    console.error('Error searching exercises:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to search exercises',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
