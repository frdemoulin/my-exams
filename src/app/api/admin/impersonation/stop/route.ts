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
import {
  getSessionActorId,
  getSessionActorRole,
  isSessionImpersonating,
} from '@/lib/auth/session';

export async function POST(request: Request) {
  const session = await auth();
  const actorId = getSessionActorId(session);
  const actorRole = getSessionActorRole(session);

  if (!session?.user || !actorId || !canImpersonateRole(actorRole)) {
    return NextResponse.json({ error: 'Accès refusé.' }, { status: 403 });
  }

  if (!isSessionImpersonating(session)) {
    return NextResponse.json(
      { error: 'Aucune bascule active.' },
      { status: 400 }
    );
  }

  const actor = await prisma.user.findUnique({
    where: { id: actorId },
    select: {
      id: true,
      roles: true,
      name: true,
      email: true,
      image: true,
    },
  });

  if (!actor || !canImpersonateRole(actor.roles)) {
    return NextResponse.json({ error: 'Acteur invalide.' }, { status: 403 });
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
      adminExpiresAt: session.actor?.adminExpiresAt ?? getAdminSessionExpiresAt(),
    })
  );

  const response = NextResponse.json({
    success: true,
  });

  applySessionTokenCookies(response, jwt, request.url);

  await prisma.authLog.create({
    data: {
      userId: actor.id,
      action: 'IMPERSONATION_STOP',
      provider:
        session.impersonation?.viewerEmail ?? session.impersonation?.viewerId ?? null,
    },
  });

  return response;
}
