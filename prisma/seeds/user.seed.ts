import type { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  console.log('👤 Seeding Users...');

  const users = [
    { name: 'Admin', email: 'admin@example.com', image: null },
    { name: 'Utilisateur Démo', email: 'demo@example.com', image: null },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { name: u.name, image: u.image ?? undefined },
      create: { name: u.name, email: u.email, image: u.image ?? undefined },
    });
  }

  console.log(`   ✓ ${users.length} utilisateurs créés/mis à jour`);
}
