import 'dotenv/config';
import { PrismaClient, type DomainDiscipline, type Prisma } from '@prisma/client';

const prisma = new PrismaClient();

function getDatabaseName(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set.');
  }

  const parsed = new URL(url);
  const dbName = parsed.pathname.replace('/', '').trim();
  if (!dbName) {
    throw new Error('DATABASE_URL must include a database name.');
  }
  return dbName;
}

async function hasCollection(name: string): Promise<boolean> {
  const result = (await prisma.$runCommandRaw({
    listCollections: 1,
    nameOnly: true,
  })) as {
    cursor?: { firstBatch?: Array<{ name: string }> };
  };

  const collections = result?.cursor?.firstBatch ?? [];
  return collections.some((col) => col.name === name);
}

async function renameCollection(dbName: string) {
  const chapterExists = await hasCollection('Chapter');
  if (!chapterExists) {
    console.log('ℹ️  Collection Chapter introuvable, rien à renommer.');
    return;
  }

  const domainExists = await hasCollection('Domain');
  if (domainExists) {
    throw new Error('La collection Domain existe déjà. Stop pour éviter un écrasement.');
  }

  await prisma.$runCommandRaw({
    renameCollection: `${dbName}.Chapter`,
    to: `${dbName}.Domain`,
    dropTarget: false,
  });
  console.log('✅ Collection Chapter renommée en Domain.');
}

async function renameFields() {
  await prisma.$runCommandRaw({
    update: 'Theme',
    updates: [
      {
        q: { chapterId: { $exists: true }, domainId: { $exists: false } },
        u: { $rename: { chapterId: 'domainId' } },
        multi: true,
      },
    ],
  });
  console.log('✅ Champ Theme.chapterId renommé en Theme.domainId.');

  await prisma.$runCommandRaw({
    update: 'ExamPaper',
    updates: [
      {
        q: { chapterIds: { $exists: true }, domainIds: { $exists: false } },
        u: { $rename: { chapterIds: 'domainIds' } },
        multi: true,
      },
    ],
  });
  console.log('✅ Champ ExamPaper.chapterIds renommé en ExamPaper.domainIds.');
}

function isRenameCollectionUnauthorized(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const message = String(
    (error as { meta?: { message?: string } })?.meta?.message ?? (error as Error).message ?? ''
  );

  return message.includes('renameCollection may only be run against the admin database');
}

type RawObjectId = { $oid?: string };

function asObjectIdString(value: unknown): string | null {
  if (typeof value === 'string') {
    return value;
  }
  if (value && typeof value === 'object') {
    const oid = (value as RawObjectId).$oid;
    if (oid) {
      return oid;
    }
    if ('toString' in value && typeof (value as { toString?: () => string }).toString === 'function') {
      return (value as { toString: () => string }).toString();
    }
  }
  return null;
}

const disciplineValues = new Set<DomainDiscipline>(['PHYSIQUE', 'CHIMIE', 'TRANSVERSAL']);

function parseDiscipline(value: unknown): DomainDiscipline | null {
  if (typeof value !== 'string') {
    return null;
  }

  if (disciplineValues.has(value as DomainDiscipline)) {
    return value as DomainDiscipline;
  }

  return null;
}

async function copyChapterToDomain() {
  const chapterExists = await hasCollection('Chapter');
  if (!chapterExists) {
    console.log('ℹ️  Collection Chapter introuvable, rien à copier.');
    return;
  }

  const domainExists = await hasCollection('Domain');
  if (domainExists) {
    const domainCountResult = (await prisma.$runCommandRaw({
      count: 'Domain',
    })) as { n?: number };

    if (domainCountResult?.n && domainCountResult.n > 0) {
      console.log('ℹ️  Collection Domain déjà remplie, copie ignorée.');
      return;
    }
  }

  const result = (await prisma.$runCommandRaw({
    find: 'Chapter',
    filter: {},
  })) as { cursor?: { firstBatch?: Record<string, unknown>[] } };

  const documents = result?.cursor?.firstBatch ?? [];

  if (documents.length === 0) {
    console.log('ℹ️  Aucun document Chapter à copier.');
    return;
  }

  const mapped: Prisma.DomainCreateManyInput[] = [];

  for (const doc of documents) {
    const id = asObjectIdString(doc._id);
    const subjectId = asObjectIdString(doc.subjectId);

    if (!id || !subjectId) {
      continue;
    }

    const longDescription = String(doc.longDescription ?? '');
    const shortDescription = String(doc.shortDescription ?? longDescription);

    mapped.push({
      id,
      longDescription,
      shortDescription,
      subjectId,
      order: typeof doc.order === 'number' ? doc.order : null,
      discipline: parseDiscipline(doc.discipline),
    });
  }

  if (mapped.length === 0) {
    console.log('ℹ️  Aucun document Chapter valide à copier.');
    return;
  }

  await prisma.domain.createMany({
    data: mapped,
  });

  console.log('✅ Collection Chapter copiée vers Domain (sans renommage).');
}

async function main() {
  const dbName = getDatabaseName();

  console.log('🔄 Migration Chapter → Domain (MongoDB)');
  try {
    await renameCollection(dbName);
  } catch (error) {
    if (isRenameCollectionUnauthorized(error)) {
      console.warn('⚠️  renameCollection interdit (droits insuffisants). Copie des données vers Domain.');
      await copyChapterToDomain();
    } else {
      throw error;
    }
  }
  await renameFields();
}

main()
  .catch((error) => {
    console.error('❌ Erreur pendant la migration Chapter → Domain:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
