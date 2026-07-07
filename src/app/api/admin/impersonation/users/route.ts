import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';
import { getSessionActorId, getSessionActorRole } from '@/lib/auth/session';
import prisma from '@/lib/db/prisma';

export async function GET() {
  const session = await auth();
  const actorId = getSessionActorId(session);
  const actorRole = getSessionActorRole(session);

  if (!session?.user || !actorId || !isAdminRole(actorRole)) {
    return NextResponse.json({ error: 'Accès refusé.' }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    where: {
      id: { not: actorId },
    },
    select: {
      id: true,
      name: true,
      email: true,
      roles: true,
    },
    orderBy: [{ name: 'asc' }, { email: 'asc' }],
    take: 100,
  });

  return NextResponse.json({
    success: true,
    users: users.map((user) => ({
      id: user.id,
      label: user.name?.trim() || user.email || user.id,
      secondaryLabel: user.name?.trim() && user.email ? user.email : null,
      role: user.roles,
    })),
  });
}
