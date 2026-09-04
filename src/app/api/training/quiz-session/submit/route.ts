import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { submitTrainingQuizSession } from '@/core/training/training-quiz-session.service';

export async function POST(request: Request) {
  try {
    const session = await auth();
    const userId = getSessionEffectiveUserId(session);

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          code: 'UNAUTHENTICATED',
          message: 'Authentification requise pour soumettre un quiz.',
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const { sessionId, answers, targetScore } = body ?? {};

    if (!sessionId || !Array.isArray(answers)) {
      return NextResponse.json(
        { success: false, message: 'Paramètres sessionId et answers requis.' },
        { status: 400 },
      );
    }

    const result = await submitTrainingQuizSession({
      sessionId,
      userId,
      targetScore,
      answers,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la soumission du quiz.';
    const status = message.includes('non autorisé') ? 403 : message.includes('introuvable') ? 404 : 400;
    return NextResponse.json(
      { success: false, message },
      { status },
    );
  }
}
