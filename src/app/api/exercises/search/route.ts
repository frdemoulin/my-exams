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
    const teachingId = searchParams.get('teachingId') || undefined;
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
    const page = searchParams.get('page')
      ? parseInt(searchParams.get('page')!)
      : undefined;
    const pageSize = searchParams.get('pageSize')
      ? parseInt(searchParams.get('pageSize')!)
      : undefined;

    // Thèmes (peut être multiple)
    const themesParam = searchParams.get('themes');
    const themes = themesParam ? themesParam.split(',') : undefined;

    // Recherche des exercices
    const result = await searchExercises({
      diploma,
      subject,
      teachingId,
      difficulty,
      themes,
      year,
      search,
      sortBy,
      sortOrder,
      limit,
      page,
      pageSize,
    });

    return NextResponse.json({
      success: true,
      count: result.total,
      page: result.page,
      pageSize: result.pageSize,
      exercises: result.items,
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
