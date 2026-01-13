import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth/auth';
import { fetchEntitlementsForUser } from '@/lib/entitlements';

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    const entitlements = await fetchEntitlementsForUser('baseline');
    return NextResponse.json({
      success: true,
      entitlements,
      source: 'baseline',
    });
  }

  const entitlements = await fetchEntitlementsForUser(userId);

  return NextResponse.json({
    success: true,
    entitlements,
    source: 'user',
  });
}
