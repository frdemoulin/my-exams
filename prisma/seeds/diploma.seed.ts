import { PrismaClient } from '@prisma/client';

export async function seedDiplomas(prisma: PrismaClient) {
    console.log('📚 Seeding Diplomas...');

    const diplomas = [
        {
            longDescription: 'Baccalauréat général',
            shortDescription: 'Bac général',
        },
        {
            longDescription: 'Baccalauréat professionnel',
            shortDescription: 'Bac pro',
        },
        {
            longDescription: 'Baccalauréat technologique',
            shortDescription: 'Bac techno',
        },
        {
            longDescription: 'Brevet des collèges',
            shortDescription: 'DNB',
        },
        {
            longDescription: 'Brevet de technicien supérieur',
            shortDescription: 'BTS',
        },
        {
            longDescription: 'Certificat d\'aptitude professionnelle',
            shortDescription: 'CAP',
        },
    ];

    for (const diploma of diplomas) {
        await prisma.diploma.upsert({
            where: {
                longDescription_shortDescription: {
                    longDescription: diploma.longDescription,
                    shortDescription: diploma.shortDescription,
                },
            },
            update: {},
            create: diploma,
        });
    }

    console.log(`✓ ${diplomas.length} diplômes créés`);
}
