import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/db/prisma';

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

    const where: Prisma.ExamPaperWhereInput = {};

    const diplomaFilter: Prisma.DiplomaWhereInput = { isActive: { not: false } };
    if (diploma) {
      diplomaFilter.shortDescription = {
        contains: diploma,
        mode: 'insensitive',
      };
    }
    where.diploma = diplomaFilter;

    const subjectFilter: Prisma.SubjectWhereInput = { isActive: { not: false } };
    if (subject) {
      subjectFilter.OR = [
        { shortDescription: { contains: subject, mode: 'insensitive' } },
        { longDescription: { contains: subject, mode: 'insensitive' } },
      ];
    }

    const teachingFilter: Prisma.TeachingWhereInput = {
      subject: subjectFilter,
      isActive: { not: false },
    };

    where.teaching = teachingFilter;

    if (sessionYear) {
      where.sessionYear = sessionYear;
    }

    const examPapers = await prisma.examPaper.findMany({
      where,
      select: {
        teaching: {
          select: {
            id: true,
            longDescription: true,
            shortDescription: true,
            grade: {
              select: {
                shortDescription: true,
              },
            },
          },
        },
      },
    });

    const optionsMap = new Map<string, TeachingOption>();

    for (const paper of examPapers) {
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
      a.label.localeCompare(b.label)
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
