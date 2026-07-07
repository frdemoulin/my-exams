import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import prisma from '@/lib/db/prisma';

export async function GET() {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    return NextResponse.json({ success: true, audience: null });
  }

  const profile = await prisma.userPedagogicalProfile.findUnique({
    where: { userId },
    select: { audience: true },
  });

  return NextResponse.json({
    success: true,
    audience: profile?.audience ?? null,
  });
}
