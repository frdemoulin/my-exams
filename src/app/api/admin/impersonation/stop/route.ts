import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { canImpersonateRole } from '@/lib/auth/roles';
import { getCurrentInternalSessionContext } from '@/lib/auth/current-session';
import { isAllowedOrigin } from '@/lib/auth/auth-config-validator';

export async function POST(request: Request) {
  // 1. Validation de l'Origin pour protection CSRF stricte
  const origin = request.headers.get('origin');
  if (process.env.NODE_ENV === 'production' && (!origin || !isAllowedOrigin(origin))) {
    return NextResponse.json({ error: 'Origine non autorisée.' }, { status: 403 });
  } else if (origin && !isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Origine non autorisée.' }, { status: 403 });
  }

  // 2. Contexte de session DB interne
  const sessionContext = await getCurrentInternalSessionContext();
  if (!sessionContext || !canImpersonateRole(sessionContext.actorRole)) {
    return NextResponse.json({ error: 'Accès refusé.' }, { status: 403 });
  }

  if (!sessionContext.impersonation?.isActive) {
    return NextResponse.json(
      { error: 'Aucune bascule active.' },
      { status: 400 }
    );
  }

  const targetUserId = sessionContext.impersonation.viewerId;

  // 3. Réinitialisation des champs d'impersonation sur la Session DB courante
  await prisma.session.update({
    where: { sessionToken: sessionContext.sessionToken },
    data: {
      impersonatedUserId: null,
      impersonationStartedAt: null,
      impersonationReason: null,
    },
  });

  // 4. Journalisation d'audit AuthLog
  await prisma.authLog.create({
    data: {
      userId: sessionContext.actorId,
      action: 'IMPERSONATION_STOP',
      targetUserId,
      reason: null,
      provider: null,
    },
  });

  return NextResponse.json({
    success: true,
  });
}
