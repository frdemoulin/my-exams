import { PrismaClient } from '@prisma/client';

export async function seedDiplomas(prisma: PrismaClient) {
    console.log('📚 Seeding Diplomas...');

    const diplomas = [
        {
            longDescription: 'Baccalauréat Général',
            shortDescription: 'Bac Général',
        },
        {
            longDescription: 'Baccalauréat Technologique',
            shortDescription: 'Bac Techno',
        },
        {
            longDescription: 'Baccalauréat Professionnel',
            shortDescription: 'Bac Pro',
        },
        {
            longDescription: 'Brevet des Collèges',
            shortDescription: 'DNB',
        },
        {
            longDescription: 'Certificat d\'Aptitude Professionnelle',
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
