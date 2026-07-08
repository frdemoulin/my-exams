import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth/auth';
import prisma from '@/lib/db/prisma';
import { canImpersonateRole } from '@/lib/auth/roles';
import {
  applySessionTokenCookies,
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
  getAdminSessionExpiresAt,
} from '@/lib/auth/session-cookie';
import { getSessionActorId, getSessionActorRole } from '@/lib/auth/session';

type StartImpersonationPayload = {
  userId?: string;
};

export async function POST(request: Request) {
  const session = await auth();
  const actorRole = getSessionActorRole(session);
  const actorId = getSessionActorId(session);

  if (!session?.user || !actorId || !canImpersonateRole(actorRole)) {
    return NextResponse.json({ error: 'Accès refusé.' }, { status: 403 });
  }

  let payload: StartImpersonationPayload | null = null;
  try {
    payload = (await request.json()) as StartImpersonationPayload;
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const userId = payload?.userId?.trim();

  if (!userId) {
    return NextResponse.json({ error: 'Utilisateur manquant.' }, { status: 400 });
  }

  const [actor, target] = await Promise.all([
    prisma.user.findUnique({
      where: { id: actorId },
      select: {
        id: true,
        roles: true,
        name: true,
        email: true,
        image: true,
      },
    }),
    prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        roles: true,
        name: true,
        email: true,
        image: true,
      },
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

  const jwt = await encodeAppSessionToken(
    buildAppSessionTokenPayload({
      actor: {
        id: actor.id,
        role: actor.roles,
        name: actor.name,
        email: actor.email,
        image: actor.image,
      },
      viewer: {
        id: target.id,
        role: target.roles,
        name: target.name,
        email: target.email,
        image: target.image,
      },
      adminExpiresAt: session.actor?.adminExpiresAt ?? getAdminSessionExpiresAt(),
    })
  );

  const response = NextResponse.json({
    success: true,
    redirectTo: '/dashboard',
  });

  applySessionTokenCookies(response, jwt, request.url);

  await prisma.authLog.create({
    data: {
      userId: actor.id,
      action: 'IMPERSONATION_START',
      provider: target.email ?? target.id,
    },
  });

  return response;
}
