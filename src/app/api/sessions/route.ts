import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/db/prisma';
import { includesNormalizedSearch } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get('diploma') || undefined;
    const subject = searchParams.get('subject') || undefined;
    const teachingId = searchParams.get('teachingId') || undefined;

    const where: Prisma.ExamPaperWhereInput = {
      diploma: { isActive: { not: false } },
      teaching: {
        isActive: { not: false },
        subject: { isActive: { not: false } },
      },
    };

    const teachingFilter: Prisma.TeachingWhereInput = {};
    if (teachingId) {
      teachingFilter.id = teachingId;
    }
    if (Object.keys(teachingFilter).length > 0) {
      where.teaching = {
        ...(where.teaching as Prisma.TeachingWhereInput),
        ...teachingFilter,
      };
    }

    const examPapers = await prisma.examPaper.findMany({
      where,
      select: {
        sessionYear: true,
        diploma: {
          select: {
            shortDescription: true,
            longDescription: true,
          },
        },
        teaching: {
          select: {
            subject: {
              select: {
                shortDescription: true,
                longDescription: true,
              },
            },
          },
        },
      },
      orderBy: { sessionYear: 'desc' },
    });

    const sessions = Array.from(
      new Set(
        examPapers
          .filter((paper) => {
            const matchesDiploma = includesNormalizedSearch(
              [paper.diploma.shortDescription, paper.diploma.longDescription],
              diploma
            );
            const matchesSubject = includesNormalizedSearch(
              [paper.teaching.subject.shortDescription, paper.teaching.subject.longDescription],
              subject
            );
            return matchesDiploma && matchesSubject;
          })
          .map((paper) => paper.sessionYear)
      )
    );

    return NextResponse.json({ success: true, sessions });
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return NextResponse.json(
      {
        success: false,
        sessions: [],
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
