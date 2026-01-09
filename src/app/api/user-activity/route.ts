import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { upsertUserActivity } from '@/core/user-activity';
import { normalizeExamPaperLabel } from '@/lib/utils';

type UserActivityPayload = {
  examPaperId?: string | null;
  exerciseId?: string | null;
  subjectId?: string | null;
  sessionYear?: number | string | null;
};

export async function POST(request: Request) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json(
      { success: false, message: 'Non authentifié.' },
      { status: 401 }
    );
  }

  let payload: UserActivityPayload;
  try {
    payload = (await request.json()) as UserActivityPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: 'Requête invalide.' },
      { status: 400 }
    );
  }

  const sessionYearRaw = payload?.sessionYear;
  const parsedSessionYear =
    typeof sessionYearRaw === 'number'
      ? sessionYearRaw
      : typeof sessionYearRaw === 'string' && sessionYearRaw.trim() !== ''
        ? Number(sessionYearRaw)
        : null;
  const sessionYear = Number.isNaN(parsedSessionYear) ? null : parsedSessionYear;

  await upsertUserActivity({
    userId,
    examPaperId: typeof payload?.examPaperId === 'string' ? payload.examPaperId : null,
    exerciseId: typeof payload?.exerciseId === 'string' ? payload.exerciseId : null,
    subjectId: typeof payload?.subjectId === 'string' ? payload.subjectId : null,
    sessionYear,
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json(
      { success: false, message: 'Non authentifié.' },
      { status: 401 }
    );
  }

  const activity = await prisma.userActivity.findUnique({
    where: { userId },
  });

  if (!activity) {
    return NextResponse.json({ success: true, activity: null });
  }

  if (activity.lastExerciseId) {
    const exercise = await prisma.exercise.findUnique({
      where: { id: activity.lastExerciseId },
      select: {
        id: true,
        title: true,
        label: true,
        exerciseNumber: true,
        examPaper: {
          select: {
            id: true,
            label: true,
            sessionYear: true,
            diplomaId: true,
            teaching: {
              select: {
                subject: {
                  select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (exercise) {
      const subject = exercise.examPaper?.teaching?.subject;
      const subjectLabel = subject?.longDescription || subject?.shortDescription || '';
      const paperLabel =
        normalizeExamPaperLabel(exercise.examPaper.label) || exercise.examPaper.label;
      const returnTo = subject
        ? `/diplomes/${exercise.examPaper.diplomaId}/matieres/${subject.id}/sessions/${exercise.examPaper.sessionYear}`
        : null;
      const href = returnTo
        ? `/exercises/${exercise.id}?returnTo=${encodeURIComponent(returnTo)}`
        : `/exercises/${exercise.id}`;
      const title =
        exercise.title ||
        exercise.label ||
        `Exercice ${exercise.exerciseNumber}`;
      const context = [subjectLabel, paperLabel].filter(Boolean).join(' · ');

      return NextResponse.json({
        success: true,
        activity: {
          kind: 'exercise',
          href,
          title,
          context,
        },
      });
    }
  }

  if (activity.lastExamPaperId) {
    const examPaper = await prisma.examPaper.findUnique({
      where: { id: activity.lastExamPaperId },
      select: {
        id: true,
        label: true,
        sessionYear: true,
        diplomaId: true,
        teaching: {
          select: {
            subject: {
              select: {
                id: true,
                longDescription: true,
                shortDescription: true,
              },
            },
          },
        },
      },
    });

    if (examPaper) {
      const subject = examPaper.teaching?.subject;
      const subjectLabel = subject?.longDescription || subject?.shortDescription || '';
      const paperLabel = normalizeExamPaperLabel(examPaper.label) || examPaper.label;
      const returnTo = subject
        ? `/diplomes/${examPaper.diplomaId}/matieres/${subject.id}/sessions/${examPaper.sessionYear}`
        : null;
      const href = returnTo
        ? `/sujets/${examPaper.id}?returnTo=${encodeURIComponent(returnTo)}`
        : `/sujets/${examPaper.id}`;
      const context = [subjectLabel, `Session ${examPaper.sessionYear}`]
        .filter(Boolean)
        .join(' · ');

      return NextResponse.json({
        success: true,
        activity: {
          kind: 'examPaper',
          href,
          title: paperLabel,
          context,
        },
      });
    }
  }

  return NextResponse.json({ success: true, activity: null });
}
