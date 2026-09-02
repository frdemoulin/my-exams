import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { upsertUserActivity } from '@/core/user-activity';
import { getCurrentUserAcademicEnrollment } from '@/core/academic-enrollment';
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
  const userId = getSessionEffectiveUserId(session);

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
      { success: false, message: 'Payload JSON invalide.' },
      { status: 400 }
    );
  }

  if (
    !payload.examPaperId &&
    !payload.exerciseId &&
    !payload.subjectId &&
    !payload.sessionYear &&
    !payload.currentGoalLabel
  ) {
    return NextResponse.json(
      { success: false, message: 'Au moins un identifiant ou objectif est requis.' },
      { status: 400 }
    );
  }

  try {
    const rawSessionYear = payload.sessionYear;
    let sessionYear: number | null = null;
    if (typeof rawSessionYear === 'number' && Number.isInteger(rawSessionYear)) {
      sessionYear = rawSessionYear;
    } else if (typeof rawSessionYear === 'string') {
      const parsedYear = Number.parseInt(rawSessionYear, 10);
      if (!Number.isNaN(parsedYear)) {
        sessionYear = parsedYear;
      }
    }

    const activity = await upsertUserActivity({
      userId,
      examPaperId: payload.examPaperId ?? null,
      exerciseId: payload.exerciseId ?? null,
      subjectId: payload.subjectId ?? null,
      sessionYear,
      currentGoalLabel: payload.currentGoalLabel ?? null,
    });

    if (payload.exerciseId) {
      await prisma.userExerciseHistory.upsert({
        where: {
          userId_exerciseId: {
            userId,
            exerciseId: payload.exerciseId,
          },
        },
        update: {
          lastViewedAt: new Date(),
        },
        create: {
          userId,
          exerciseId: payload.exerciseId,
          lastViewedAt: new Date(),
        },
      });
    }

    return NextResponse.json({
      success: true,
      activity: activity
        ? {
            id: activity.id,
            updatedAt: activity.updatedAt,
          }
        : null,
    });
  } catch (error) {
    console.error('Erreur lors de l’enregistrement de l’activité utilisateur:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json(
      { success: false, message: 'Non authentifié.' },
      { status: 401 }
    );
  }

  const enrollment = await getCurrentUserAcademicEnrollment(userId);

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
            gradeId: true,
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

    if (
      exercise &&
      (!enrollment ||
        (enrollment.audience === 'SECONDARY' &&
          enrollment.secondaryGradeId === exercise.examPaper.gradeId))
    ) {
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
        gradeId: true,
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

    if (
      examPaper &&
      (!enrollment ||
        (enrollment.audience === 'SECONDARY' &&
          enrollment.secondaryGradeId === examPaper.gradeId))
    ) {
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
