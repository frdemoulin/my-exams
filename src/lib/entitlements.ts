import prisma from '@/lib/db/prisma';

const FALLBACK_ENTITLEMENTS = [
  'ACCESS_EXERCISES',
  'ACCESS_EXAM_PAPERS',
  'ACCESS_CORRECTIONS',
  'ACCESS_ADMIN',
];

export type EntitlementCode = (typeof FALLBACK_ENTITLEMENTS)[number] | string;

export async function fetchEntitlementsForUser(userId: string) {
  const [userEntitlements, subscriptions, activeEntitlements] = await Promise.all([
    prisma.userEntitlement.findMany({
      where: { userId },
      select: { entitlement: { select: { code: true } } },
    }),
    prisma.userSubscription.findMany({
      where: { userId, status: 'ACTIVE' },
      select: {
        plan: {
          select: {
            entitlements: {
              select: {
                entitlement: { select: { code: true } },
              },
            },
          },
        },
      },
    }),
    prisma.entitlement.findMany({
      where: { isActive: true },
      select: { code: true },
    }),
  ]);

  const codes = new Set<string>();
  userEntitlements.forEach((item) => codes.add(item.entitlement.code));
  subscriptions.forEach((subscription) => {
    subscription.plan.entitlements.forEach((link) => {
      codes.add(link.entitlement.code);
    });
  });

  if (codes.size > 0) {
    return Array.from(codes);
  }

  if (activeEntitlements.length > 0) {
    return activeEntitlements.map((entitlement) => entitlement.code);
  }

  return FALLBACK_ENTITLEMENTS;
}

export async function assertEntitlement(userId: string, entitlement: EntitlementCode) {
  if (!userId) {
    throw new Error('NON_AUTHENTIFIE');
  }

  const entitlements = await fetchEntitlementsForUser(userId);
  if (!entitlements.includes(entitlement)) {
    throw new Error('ENTITLEMENT_MISSING');
  }
}
