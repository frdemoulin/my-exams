/**
 * API Route: Recherche d'exercices
 * GET /api/exercises/search
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchExercises } from '@/core/exercise';
import prisma from '@/lib/db/prisma';

const MAX_SEARCH_TERM_LENGTH = 120;
const rawSlowThreshold = Number(process.env.API_SLOW_THRESHOLD_MS ?? '3000');
const API_SLOW_THRESHOLD_MS =
  Number.isFinite(rawSlowThreshold) && rawSlowThreshold > 0 ? rawSlowThreshold : 3000;

const normalizeSearchTerm = (value?: string) => {
  if (!value) return null;
  const trimmed = value.trim().replace(/\s+/g, ' ');
  if (!trimmed) return null;
  if (trimmed.includes('@')) return null; // évite de stocker des emails
  return trimmed.slice(0, MAX_SEARCH_TERM_LENGTH);
};

export async function GET(request: NextRequest) {
  const startedAt = Date.now();
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

    const durationMs = Date.now() - startedAt;
    const shouldLogSearch = !page || page === 1;
    if (shouldLogSearch) {
      try {
        const searchTerm = normalizeSearchTerm(search);
        await prisma.usageEvent.create({
          data: {
            type: 'SEARCH',
            searchTerm,
            resultsCount: result.total,
            diploma: diploma || null,
            subject: subject || null,
            teachingId: teachingId || null,
            sessionYear: year ?? null,
            themeIds: themes ?? [],
          },
        });
      } catch (error) {
        console.error('Error logging search usage event:', error);
      }
    }

    if (durationMs >= API_SLOW_THRESHOLD_MS) {
      try {
        await prisma.errorLog.create({
          data: {
            type: 'API_SLOW',
            path: request.nextUrl.pathname,
            durationMs,
            message: `search=${search ?? ''} diploma=${diploma ?? ''} subject=${subject ?? ''}`,
          },
        });
      } catch (error) {
        console.error('Error logging slow API:', error);
      }
    }

    return NextResponse.json({
      success: true,
      count: result.total,
      page: result.page,
      pageSize: result.pageSize,
      exercises: result.items,
    });
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    if (durationMs >= API_SLOW_THRESHOLD_MS) {
      try {
        await prisma.errorLog.create({
          data: {
            type: 'API_SLOW',
            path: request.nextUrl.pathname,
            durationMs,
            statusCode: 500,
          },
        });
      } catch (logError) {
        console.error('Error logging slow API after failure:', logError);
      }
    }
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
