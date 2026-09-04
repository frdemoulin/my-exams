import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import prisma from '@/lib/db/prisma';
import {
  getCurrentUserAcademicEnrollment,
  resolveSecondarySchoolSegment,
} from '@/core/academic-enrollment';

export async function GET() {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json({ success: true, audience: null, segment: null });
  }

  const enrollment = await getCurrentUserAcademicEnrollment(userId);

  if (!enrollment) {
    return NextResponse.json({ success: true, audience: null, segment: null });
  }

  let segment: 'COLLEGE' | 'LYCEE' | null = null;
  let gradeShort: string | null = null;

  if (enrollment.audience === 'SECONDARY' && enrollment.secondaryGradeId) {
    const grade = await prisma.grade.findUnique({
      where: { id: enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });
    gradeShort = grade?.shortDescription ?? null;
    segment = resolveSecondarySchoolSegment(grade);
  }

  return NextResponse.json({
    success: true,
    audience: enrollment.audience,
    segment,
    gradeShort,
  });
}
