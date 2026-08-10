import { PrismaClient } from '@prisma/client';

// Bump this whenever Prisma models change so Turbopack does not retain a
// development singleton generated from an older schema after hot reload.
const prismaSchemaRevision = '2026-08-08-question-engine-v1';

function isMongoUrl(value: string | undefined) {
  return value?.startsWith('mongodb://') || value?.startsWith('mongodb+srv://');
}

const mongoDatabaseUrl = [
  process.env.DATABASE_URL,
  process.env.DATABASE_URL_DEV,
  process.env.MONGODB_URI_DEV,
  process.env.MONGODB_URI,
].find(isMongoUrl);

if (mongoDatabaseUrl && process.env.DATABASE_URL !== mongoDatabaseUrl) {
  process.env.DATABASE_URL = mongoDatabaseUrl;
}

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaGlobal = typeof globalThis & {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
  prismaGlobalSchemaRevision?: string;
};

const prismaGlobal = globalThis as PrismaGlobal;
const cachedPrisma =
  process.env.NODE_ENV !== 'production' &&
  prismaGlobal.prismaGlobalSchemaRevision === prismaSchemaRevision
    ? prismaGlobal.prismaGlobal
    : undefined;

const prisma = cachedPrisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  prismaGlobal.prismaGlobal = prisma;
  prismaGlobal.prismaGlobalSchemaRevision = prismaSchemaRevision;
}
