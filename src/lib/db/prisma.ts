import { PrismaClient } from '@prisma/client';

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

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;