import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SUBJECT = 'Sciences physiques';
const SOURCE_DOMAIN = 'Mécanique';
const TARGET_DOMAIN = 'Mouvement et interactions';

async function main() {
  const subject = await prisma.subject.findFirst({
    where: { longDescription: SUBJECT },
    select: { id: true },
  });

  if (!subject) {
    throw new Error(`Sujet introuvable: ${SUBJECT}`);
  }

  const target = await prisma.domain.findFirst({
    where: {
      subjectId: subject.id,
      longDescription: TARGET_DOMAIN,
    },
    select: { id: true, longDescription: true, _count: { select: { themes: true, scopes: true } } },
  });

  if (target) {
    console.log(
      JSON.stringify(
        {
          renamed: false,
          reason: 'target-already-exists',
          target,
        },
        null,
        2
      )
    );
    return;
  }

  const source = await prisma.domain.findFirst({
    where: {
      subjectId: subject.id,
      longDescription: SOURCE_DOMAIN,
    },
    select: { id: true, longDescription: true, shortDescription: true, order: true },
  });

  if (!source) {
    console.log(
      JSON.stringify(
        {
          renamed: false,
          reason: 'source-missing',
        },
        null,
        2
      )
    );
    return;
  }

  const renamed = await prisma.domain.update({
    where: { id: source.id },
    data: {
      longDescription: TARGET_DOMAIN,
      shortDescription: TARGET_DOMAIN,
      order: 4,
    },
    select: {
      id: true,
      longDescription: true,
      shortDescription: true,
      order: true,
      _count: { select: { themes: true, scopes: true } },
    },
  });

  console.log(
    JSON.stringify(
      {
        renamed: true,
        domain: renamed,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error('Erreur lors du renommage du domaine de mécanique :', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
