import type { Session } from 'next-auth';
import type { Role } from '@prisma/client';

export function getSessionEffectiveUserId(session?: Session | null) {
  return session?.impersonation?.viewerId ?? session?.user?.id ?? null;
}

export function getSessionEffectiveRole(session?: Session | null): Role | null {
  return session?.impersonation?.viewerRole ?? session?.user?.role ?? null;
}

export function getSessionActorId(session?: Session | null) {
  return session?.actor?.id ?? session?.user?.id ?? null;
}

export function getSessionActorRole(session?: Session | null) {
  return session?.actor?.role ?? session?.user?.role ?? null;
}

export function isSessionImpersonating(session?: Session | null) {
  return Boolean(session?.impersonation?.isActive);
}
