import { defineConfig } from 'prisma/config';
import { loadProjectEnv } from './scripts/lib/load-env';

loadProjectEnv();

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    seed: 'ts-node prisma/seed.ts',
  },
  datasource: {
    // Keep this optional so generate/typecheck commands still work when no DB URL is needed.
    url: process.env.DATABASE_URL ?? '',
  },
});