import type { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Refus par sécurité : seedUsers est formellement interdit en environnement de production.');
  }

  if (process.env.SEED_DEV_FIXTURES !== '1') {
    console.log('   ⏭️ seedUsers ignoré (fixtures désactivées par défaut, activer avec SEED_DEV_FIXTURES=1)');
    return;
  }

  console.log('👤 Seeding Users (Fixtures DEV)...');

  const users = [
    { name: 'Admin', email: 'admin@example.com', image: null, roles: 'ADMIN' as const },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { name: u.name, image: u.image ?? undefined, roles: u.roles },
      create: { name: u.name, email: u.email, image: u.image ?? undefined, roles: u.roles },
    });
  }

  console.log(`✓ ${users.length} utilisateurs fixtures créés/mis à jour`);
}
