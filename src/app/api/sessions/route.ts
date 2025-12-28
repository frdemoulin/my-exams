import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

import prisma from '@/lib/db/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const diploma = searchParams.get('diploma') || undefined;
    const subject = searchParams.get('subject') || undefined;
    const teachingId = searchParams.get('teachingId') || undefined;

    const where: Prisma.ExamPaperWhereInput = {};

    const diplomaFilter: Prisma.DiplomaWhereInput = { isActive: { not: false } };
    if (diploma) {
      diplomaFilter.OR = [
        { shortDescription: { contains: diploma, mode: 'insensitive' } },
        { longDescription: { contains: diploma, mode: 'insensitive' } },
      ];
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
    if (teachingId) {
      teachingFilter.id = teachingId;
    }
    where.teaching = teachingFilter;

    const examPapers = await prisma.examPaper.findMany({
      where,
      select: { sessionYear: true },
      distinct: ['sessionYear'],
      orderBy: { sessionYear: 'desc' },
    });

    const sessions = examPapers.map((paper) => paper.sessionYear);

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
