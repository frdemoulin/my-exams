import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { upsertUserActivity } from '@/core/user-activity';
import { RESUME_ACTIVITY_TTL_DAYS } from '@/config/app';
import { normalizeExamPaperLabel } from '@/lib/utils';

type UserActivityPayload = {
  examPaperId?: string | null;
  exerciseId?: string | null;
  subjectId?: string | null;
  sessionYear?: number | string | null;
  currentGoalLabel?: string | null;
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

  try {
    const exerciseId =
      typeof payload?.exerciseId === 'string' ? payload.exerciseId : null;
    await upsertUserActivity({
      userId,
      examPaperId: typeof payload?.examPaperId === 'string' ? payload.examPaperId : null,
      exerciseId,
      subjectId: typeof payload?.subjectId === 'string' ? payload.subjectId : null,
      sessionYear,
      currentGoalLabel:
        typeof payload?.currentGoalLabel === 'string'
          ? payload.currentGoalLabel
          : null,
    });

    if (exerciseId) {
      await prisma.userExerciseHistory.upsert({
        where: {
          userId_exerciseId: {
            userId,
            exerciseId,
          },
        },
        update: {
          lastViewedAt: new Date(),
        },
        create: {
          userId,
          exerciseId,
          lastViewedAt: new Date(),
        },
      });
    }
  } catch (error) {
    console.error('Erreur de suivi activité utilisateur:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur de suivi activité utilisateur.' },
      { status: 500 }
    );
  }

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

  const maxAgeMs = RESUME_ACTIVITY_TTL_DAYS * 24 * 60 * 60 * 1000;
  if (activity.updatedAt && Date.now() - activity.updatedAt.getTime() > maxAgeMs) {
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
        ? `/exercices/${exercise.id}?returnTo=${encodeURIComponent(returnTo)}`
        : `/exercices/${exercise.id}`;
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
