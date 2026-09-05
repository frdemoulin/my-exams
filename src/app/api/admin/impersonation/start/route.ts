import { NextResponse } from 'next/server';

import prisma from '@/lib/db/prisma';
import { canImpersonateRole, isAdminRole } from '@/lib/auth/roles';
import { getCurrentInternalSessionContext } from '@/lib/auth/current-session';
import { validateSensitiveMutationRequest } from '@/lib/auth/auth-config-validator';

type StartImpersonationPayload = {
  userId?: string;
  reason?: string;
};

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

  let payload: StartImpersonationPayload | null = null;
  try {
    payload = (await request.json()) as StartImpersonationPayload;
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const userId = payload?.userId?.trim();
  const reason = payload?.reason?.trim();

  if (!userId) {
    return NextResponse.json({ error: 'Utilisateur manquant.' }, { status: 400 });
  }

  // 3. Validation stricte du motif de support (5 à 500 caractères)
  if (!reason || reason.length < 5 || reason.length > 500) {
    return NextResponse.json(
      { error: 'Un motif de support valide (entre 5 et 500 caractères) est obligatoire.' },
      { status: 400 }
    );
  }

  const [actor, target] = await Promise.all([
    prisma.user.findUnique({
      where: { id: sessionContext.actorId },
      select: { id: true, roles: true },
    }),
    prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, roles: true, email: true },
    }),
  ]);

  if (!actor || !canImpersonateRole(actor.roles)) {
    return NextResponse.json({ error: 'Acteur invalide.' }, { status: 403 });
  }

  if (!target) {
    return NextResponse.json({ error: 'Utilisateur introuvable.' }, { status: 404 });
  }

  if (target.id === actor.id) {
    return NextResponse.json(
      { error: 'Impossible de se basculer sur son propre compte.' },
      { status: 400 }
    );
  }

  // Interdiction d'élever vers un rôle ADMIN
  if (isAdminRole(target.roles)) {
    return NextResponse.json(
      { error: "Impossible d'impersoner un compte administrateur." },
      { status: 403 }
    );
  }

  // 4. Mutation atomique de la session DB et de l'AuthLog
  await prisma.$transaction(async (tx) => {
    await tx.session.update({
      where: { sessionToken: sessionContext.sessionToken },
      data: {
        impersonatedUserId: target.id,
        impersonationStartedAt: new Date(),
        impersonationReason: reason,
      },
    });

    await tx.authLog.create({
      data: {
        userId: actor.id,
        action: 'IMPERSONATION_START',
        targetUserId: target.id,
        reason,
        provider: null,
      },
    });
  });

  return NextResponse.json({
    success: true,
    redirectTo: '/dashboard',
  });
}
