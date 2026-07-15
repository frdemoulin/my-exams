import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { fetchSciencePhysicsTrainingPathProgressForChapter } from '@/core/training';

type TrainingPathProgressPayload = {
  attemptsCount?: number;
  chapterId?: string;
  chapterSlug?: string;
  cumulativeSuccessRate?: number;
  minSuccessRate?: number;
  quizId?: string;
  score?: number;
  targetScore?: number;
  totalQuestions?: number;
};

const parseTrainingPathProgressPayload = async (request: Request) => {
  try {
    return (await request.json()) as TrainingPathProgressPayload;
  } catch {
    return null;
  }
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

  const payload = await parseTrainingPathProgressPayload(request);

  if (!payload) {
    return NextResponse.json(
      { success: false, message: 'Requête invalide.' },
      { status: 400 }
    );
  }

  const chapterId = typeof payload.chapterId === 'string' ? payload.chapterId : null;
  const chapterSlug =
    typeof payload.chapterSlug === 'string' ? payload.chapterSlug : null;
  const quizId = typeof payload.quizId === 'string' ? payload.quizId : null;
  const score = typeof payload.score === 'number' ? payload.score : null;
  const attemptsCount =
    typeof payload.attemptsCount === 'number' ? payload.attemptsCount : 1;
  const payloadMinSuccessRate =
    typeof payload.minSuccessRate === 'number' ? payload.minSuccessRate : null;
  const payloadCumulativeSuccessRate =
    typeof payload.cumulativeSuccessRate === 'number'
      ? payload.cumulativeSuccessRate
      : null;
  const targetScore =
    typeof payload.targetScore === 'number' ? payload.targetScore : null;
  const totalQuestions =
    typeof payload.totalQuestions === 'number' ? payload.totalQuestions : null;

  if (
    !chapterId ||
    !chapterSlug ||
    !quizId ||
    score === null ||
    attemptsCount < 1 ||
    targetScore === null ||
    totalQuestions === null ||
    totalQuestions < 0
  ) {
    return NextResponse.json(
      { success: false, message: 'Paramètres incomplets.' },
      { status: 400 }
    );
  }

  const quiz = await prisma.trainingQuiz.findFirst({
    where: {
      chapterId,
      id: quizId,
      isPublished: true,
    },
    select: {
      id: true,
    },
  });

  if (!quiz) {
    return NextResponse.json(
      { success: false, message: 'QCM introuvable.' },
      { status: 404 }
    );
  }

  const existingProgress = await prisma.userTrainingQuizProgress.findUnique({
    where: {
      userId_quizId: {
        userId,
        quizId,
      },
    },
    select: {
      attemptsCount: true,
      bestScore: true,
      cumulativeSuccessRate: true,
      masteredAt: true,
      minSuccessRate: true,
      successRate: true,
    },
  });

  const now = new Date();
  const successRate =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);
  const incomingMinSuccessRate = Math.max(
    0,
    Math.min(100, payloadMinSuccessRate ?? successRate)
  );
  const incomingCumulativeSuccessRate = Math.max(
    0,
    payloadCumulativeSuccessRate ?? successRate * attemptsCount
  );
  const bestScore = Math.max(existingProgress?.bestScore ?? 0, score);
  const bestSuccessRate = Math.max(existingProgress?.successRate ?? 0, successRate);
  const currentMinSuccessRate =
    existingProgress?.attemptsCount && (existingProgress.minSuccessRate > 0 || existingProgress.successRate === 0)
      ? existingProgress.minSuccessRate
      : existingProgress?.successRate ?? incomingMinSuccessRate;
  const currentCumulativeSuccessRate =
    existingProgress?.attemptsCount &&
    (existingProgress.cumulativeSuccessRate > 0 || existingProgress.successRate === 0)
      ? existingProgress.cumulativeSuccessRate
      : (existingProgress?.successRate ?? 0) * (existingProgress?.attemptsCount ?? 0);
  const minSuccessRate = Math.min(
    currentMinSuccessRate,
    incomingMinSuccessRate
  );
  const masteredAt =
    bestSuccessRate >= targetScore ? existingProgress?.masteredAt ?? now : null;

  await prisma.userTrainingQuizProgress.upsert({
    where: {
      userId_quizId: {
        userId,
        quizId,
      },
    },
    update: {
      attemptsCount: {
        increment: attemptsCount,
      },
      bestScore,
      chapterId,
      cumulativeSuccessRate: currentCumulativeSuccessRate + incomingCumulativeSuccessRate,
      lastAttemptAt: now,
      masteredAt,
      minSuccessRate,
      successRate: bestSuccessRate,
      totalQuestions,
    },
    create: {
      attemptsCount,
      bestScore,
      chapterId,
      cumulativeSuccessRate: incomingCumulativeSuccessRate,
      lastAttemptAt: now,
      masteredAt,
      minSuccessRate: incomingMinSuccessRate,
      quizId,
      successRate: bestSuccessRate,
      totalQuestions,
      userId,
    },
  });

  const progress = await fetchSciencePhysicsTrainingPathProgressForChapter({
    chapterId,
    chapterSlug,
    userId,
  });

  return NextResponse.json({
    success: true,
    progress,
  });
}

export async function DELETE(request: Request) {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json(
      { success: false, message: 'Non authentifié.' },
      { status: 401 }
    );
  }

  const payload = await parseTrainingPathProgressPayload(request);

  if (!payload) {
    return NextResponse.json(
      { success: false, message: 'Requête invalide.' },
      { status: 400 }
    );
  }

  const chapterId = typeof payload.chapterId === 'string' ? payload.chapterId : null;
  const chapterSlug =
    typeof payload.chapterSlug === 'string' ? payload.chapterSlug : null;

  if (!chapterId || !chapterSlug) {
    return NextResponse.json(
      { success: false, message: 'Paramètres incomplets.' },
      { status: 400 }
    );
  }

  await prisma.userTrainingQuizProgress.deleteMany({
    where: {
      chapterId,
      userId,
    },
  });

  const progress = await fetchSciencePhysicsTrainingPathProgressForChapter({
    chapterId,
    chapterSlug,
    userId,
  });

  return NextResponse.json({
    success: true,
    progress,
  });
}
