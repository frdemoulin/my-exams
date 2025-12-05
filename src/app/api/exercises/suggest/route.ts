/**
 * API Route: Suggestions d'exercices (autocomplete simple)
 * GET /api/exercises/suggest?q=...
 */

import { NextRequest, NextResponse } from 'next/server';
import { suggestExercises } from '@/core/exercise';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get('q') || '';
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : 8;

    const suggestions = await suggestExercises(q, limit);

    return NextResponse.json({
      success: true,
      count: suggestions.length,
      suggestions,
    });
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch suggestions',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
