import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/db/prisma';
import { includesNormalizedSearch } from '@/lib/utils';

type TeachingOption = {
  value: string;
  label: string;
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get('diploma') || undefined;
    const subject = searchParams.get('subject') || undefined;
    const session = searchParams.get('session') || undefined;

    const sessionYear = session ? Number(session) : undefined;

    const where: Prisma.ExamPaperWhereInput = {
      diploma: { isActive: { not: false } },
      teaching: {
        isActive: { not: false },
        subject: { isActive: { not: false } },
      },
    };

    if (sessionYear) {
      where.sessionYear = sessionYear;
    }

    const examPapers = await prisma.examPaper.findMany({
      where,
      select: {
        diploma: {
          select: {
            shortDescription: true,
            longDescription: true,
          },
        },
        teaching: {
          select: {
            id: true,
            longDescription: true,
            shortDescription: true,
            subject: {
              select: {
                shortDescription: true,
                longDescription: true,
              },
            },
            grade: {
              select: {
                shortDescription: true,
              },
            },
          },
        },
      },
    });

    const filteredExamPapers = examPapers.filter((paper) => {
      const matchesDiploma = includesNormalizedSearch(
        [paper.diploma.shortDescription, paper.diploma.longDescription],
        diploma
      );
      const matchesSubject = includesNormalizedSearch(
        [paper.teaching.subject.shortDescription, paper.teaching.subject.longDescription],
        subject
      );
      return matchesDiploma && matchesSubject;
    });

    const optionsMap = new Map<string, TeachingOption>();

    for (const paper of filteredExamPapers) {
      const teaching = paper.teaching;
      if (!teaching) continue;

      const gradeLabel = teaching.grade?.shortDescription ?? '';
      const label = gradeLabel
        ? `${teaching.longDescription} (${gradeLabel})`
        : teaching.longDescription;

      if (!optionsMap.has(teaching.id)) {
        optionsMap.set(teaching.id, { value: teaching.id, label });
      }
    }

    const options = Array.from(optionsMap.values()).sort((a, b) =>
      a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' })
    );

    return NextResponse.json({ success: true, options });
  } catch (error) {
    console.error('Error fetching teachings:', error);
    return NextResponse.json(
      {
        success: false,
        options: [],
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
