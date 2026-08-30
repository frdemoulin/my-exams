import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { startOrResumeTrainingQuizSession } from '@/core/training/training-quiz-session.service';

export async function POST(request: Request) {
  try {
    const session = await auth();
    const userId = getSessionEffectiveUserId(session);
    const body = await request.json();

    const { chapterId, quizId } = body ?? {};

    if (!chapterId || !quizId) {
      return NextResponse.json(
        { success: false, message: 'Paramètres chapterId et quizId requis.' },
        { status: 400 },
      );
    }

    const result = await startOrResumeTrainingQuizSession({
      chapterId,
      quizId,
      userId,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors du démarrage du quiz.';
    return NextResponse.json(
      { success: false, message },
      { status: 400 },
    );
  }
}
