import { PrismaClient } from '@prisma/client';

const ENTITLEMENTS = [
    {
        code: 'ACCESS_EXERCISES',
        name: 'Accès aux exercices',
        description: 'Accès aux exercices',
    },
    {
        code: 'ACCESS_EXAM_PAPERS',
        name: 'Accès aux sujets (PDF)',
        description: 'Accès aux sujets (PDF)',
    },
    {
        code: 'ACCESS_CORRECTIONS',
        name: 'Accès aux corrections',
        description: 'Accès aux corrections',
    },
    {
        code: 'ACCESS_ADMIN',
        name: 'Accès à l’administration',
        description: 'Accès à l’administration',
    },
];

export async function seedEntitlements(prisma: PrismaClient) {
    console.log('🔐 Seeding Entitlements...');

    for (const entitlement of ENTITLEMENTS) {
        await prisma.entitlement.upsert({
            where: { code: entitlement.code },
            update: {
                name: entitlement.name,
                description: entitlement.description,
                isActive: true,
            },
            create: {
                ...entitlement,
                isActive: true,
            },
        });
    }

    console.log(`✓ ${ENTITLEMENTS.length} droits créés`);
}
