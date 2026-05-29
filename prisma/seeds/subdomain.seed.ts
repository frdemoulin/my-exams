import type { PrismaClient } from '@prisma/client';

import { physicsSubdomains } from './data/physics-subdomains';

export async function seedSubdomains(prisma: PrismaClient) {
  console.log('🧭 Seeding Subdomains...');

  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true, shortDescription: true },
  });

  const domains = await prisma.domain.findMany({
    select: { id: true, longDescription: true, subjectId: true },
  });

  const subjectIdByLong = new Map<string, string>();
  for (const subject of subjects) {
    subjectIdByLong.set(subject.longDescription, subject.id);
  }

  const domainKey = (subjectId: string, longDescription: string) =>
    `${subjectId}::${longDescription}`;
  const domainIdByKey = new Map<string, string>();
  for (const domain of domains) {
    domainIdByKey.set(domainKey(domain.subjectId, domain.longDescription), domain.id);
  }

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const entry of physicsSubdomains) {
    const subjectId = subjectIdByLong.get(entry.subjectLongDescription);
    if (!subjectId) {
      console.warn(
        `   ⚠ Sujet introuvable pour le sous-domaine "${entry.title}" (matière: ${entry.subjectLongDescription})`
      );
      skipped += 1;
      continue;
    }

    const domainId = domainIdByKey.get(domainKey(subjectId, entry.domainLongDescription));
    if (!domainId) {
      console.warn(
        `   ⚠ Domaine introuvable pour le sous-domaine "${entry.title}" (domaine: ${entry.domainLongDescription})`
      );
      skipped += 1;
      continue;
    }

    const existing = await prisma.subdomain.findFirst({
      where: { subjectId, slug: entry.slug },
      select: { id: true },
    });

    if (existing) {
      await prisma.subdomain.update({
        where: { id: existing.id },
        data: {
          title: entry.title,
          shortTitle: entry.shortTitle ?? null,
          description: entry.description ?? null,
          order: entry.order,
          domainId,
        },
      });
      updated += 1;
    } else {
      await prisma.subdomain.create({
        data: {
          slug: entry.slug,
          title: entry.title,
          shortTitle: entry.shortTitle ?? null,
          description: entry.description ?? null,
          order: entry.order,
          subjectId,
          domainId,
        },
      });
      created += 1;
    }
  }

  console.log(`   ✓ Sous-domaines : ${created} créés, ${updated} mis à jour, ${skipped} ignorés`);
}
