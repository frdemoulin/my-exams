import { PrismaClient } from '@prisma/client';

const PLAN = {
    code: 'FREE',
    name: 'Accès gratuit',
    description: 'Plan gratuit (sans restriction applicative pour le moment)',
};

const ENTITLEMENT_CODES = [
    'ACCESS_EXERCISES',
    'ACCESS_EXAM_PAPERS',
    'ACCESS_CORRECTIONS',
    'ACCESS_ADMIN',
];

export async function seedSubscriptionPlans(prisma: PrismaClient) {
    console.log('🧩 Seeding Subscription Plans...');

    const plan = await prisma.subscriptionPlan.upsert({
        where: { code: PLAN.code },
        update: {
            name: PLAN.name,
            description: PLAN.description,
            isActive: true,
        },
        create: {
            ...PLAN,
            isActive: true,
        },
    });

    const entitlements = await prisma.entitlement.findMany({
        where: { code: { in: ENTITLEMENT_CODES } },
        select: { id: true, code: true },
    });

    if (entitlements.length === 0) {
        console.log('⚠️  Aucun entitlement trouvé, seed des plans ignoré.');
        return;
    }

    await Promise.all(
        entitlements.map((entitlement) =>
            prisma.subscriptionPlanEntitlement.upsert({
                where: {
                    planId_entitlementId: {
                        planId: plan.id,
                        entitlementId: entitlement.id,
                    },
                },
                update: {},
                create: {
                    planId: plan.id,
                    entitlementId: entitlement.id,
                },
            })
        )
    );

    console.log(`✓ Plan ${PLAN.code} relié à ${entitlements.length} droit(s)`);
}
