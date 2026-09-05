import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { canImpersonateRole } from '@/lib/auth/roles';
import { getCurrentInternalSessionContext } from '@/lib/auth/current-session';
import { validateSensitiveMutationRequest } from '@/lib/auth/auth-config-validator';

export async function POST(request: Request) {
  // 1. Validation de l'Origin, du Host et de x-forwarded-host (fail-closed en production)
  const validation = validateSensitiveMutationRequest(request);
  if (!validation.isValid) {
    return NextResponse.json(
      { error: validation.error ?? 'Requête non autorisée.' },
      { status: 403 }
    );
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

  // 3. Réinitialisation transactionnelle atomique des champs d'impersonation et journalisation
  await prisma.$transaction(async (tx) => {
    await tx.session.update({
      where: { sessionToken: sessionContext.sessionToken },
      data: {
        impersonatedUserId: null,
        impersonationStartedAt: null,
        impersonationReason: null,
      },
    });

    await tx.authLog.create({
      data: {
        userId: sessionContext.actorId,
        action: 'IMPERSONATION_STOP',
        targetUserId,
        reason: null,
        provider: null,
      },
    });
  });

  return NextResponse.json({
    success: true,
  });
}
