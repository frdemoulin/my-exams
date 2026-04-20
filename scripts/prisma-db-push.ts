import { spawnSync } from 'node:child_process';
import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['prisma', 'db', 'push', ...process.argv.slice(2)];

const result = spawnSync(command, args, {
  stdio: 'inherit',
  env: process.env,
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);