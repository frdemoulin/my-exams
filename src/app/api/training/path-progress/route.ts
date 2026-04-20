import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { fetchSciencePhysicsTrainingPathProgressForChapter } from '@/core/training';

type TrainingPathProgressPayload = {
  chapterId?: string;
  chapterSlug?: string;
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
  const userId = session?.user?.id;

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
  const targetScore =
    typeof payload.targetScore === 'number' ? payload.targetScore : null;
  const totalQuestions =
    typeof payload.totalQuestions === 'number' ? payload.totalQuestions : null;

  if (
    !chapterId ||
    !chapterSlug ||
    !quizId ||
    score === null ||
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
      bestScore: true,
      masteredAt: true,
      successRate: true,
    },
  });

  const now = new Date();
  const successRate =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);
  const bestScore = Math.max(existingProgress?.bestScore ?? 0, score);
  const bestSuccessRate = Math.max(existingProgress?.successRate ?? 0, successRate);
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
        increment: 1,
      },
      bestScore,
      chapterId,
      lastAttemptAt: now,
      masteredAt,
      successRate: bestSuccessRate,
      totalQuestions,
    },
    create: {
      attemptsCount: 1,
      bestScore,
      chapterId,
      lastAttemptAt: now,
      masteredAt,
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
  const userId = session?.user?.id;

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