import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

const envFiles = [
  '.env.local',
  '.env',
  '.env.prod.local',
  '.env.production.local',
];

export function loadProjectEnv() {
  for (const relativePath of envFiles) {
    const filePath = path.resolve(process.cwd(), relativePath);
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath, quiet: true });
    }
  }

  if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL =
      process.env.DATABASE_URL_DEV ??
      process.env.MONGODB_URI_DEV ??
      process.env.MONGODB_URI;
  }
}