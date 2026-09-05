import assert from 'node:assert/strict';
import { test, describe, beforeEach, afterEach } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

import { POST as testLoginPost } from '../../src/app/api/test-login/route';
import { seedDemoAccounts } from '../../scripts/seed-demo-accounts';
import { seedUsers } from '../../prisma/seeds/user.seed';

describe('Invariants de Sécurité — Comptes de Démonstration & Gardes Production', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  test('1. seedDemoAccounts() est strictement bloqué en environnement de production', async () => {
    (process.env as any).NODE_ENV = 'production';
    const fakePrisma: any = {};

    await assert.rejects(
      async () => seedDemoAccounts(fakePrisma),
      /formellement interdit en environnement de production/i
    );
  });

  test('2. seedUsers() est strictement bloqué en environnement de production', async () => {
    (process.env as any).NODE_ENV = 'production';
    process.env.SEED_DEV_FIXTURES = '1';
    const fakePrisma: any = {};

    await assert.rejects(
      async () => seedUsers(fakePrisma),
      /formellement interdit en environnement de production/i
    );
  });

  test('3. /api/test-login retourne 404 en environnement de production', async () => {
    (process.env as any).NODE_ENV = 'production';
    process.env.E2E_TEST_LOGIN_SECRET = 'test-secret';
    process.env.AUTH_SECRET = 'auth-secret';

    const req = new Request('http://localhost:3000/api/test-login', {
      method: 'POST',
      headers: {
        'x-e2e-test-login': 'test-secret',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'demo-college@my-exams.local' }),
    });

    const res = await testLoginPost(req);
    assert.equal(res.status, 404);
    const body = await res.json();
    assert.equal(body.error, 'E2E login disabled');
  });

  test('4. /api/test-login rejette avec 403 tout email hors de l’allow-list', async () => {
    (process.env as any).NODE_ENV = 'development';
    process.env.E2E_TEST_LOGIN_SECRET = 'test-secret';
    process.env.AUTH_SECRET = 'auth-secret';

    const req = new Request('http://localhost:3000/api/test-login', {
      method: 'POST',
      headers: {
        'x-e2e-test-login': 'test-secret',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'random-user@example.com' }),
    });

    const res = await testLoginPost(req);
    assert.equal(res.status, 403);
    const body = await res.json();
    assert.match(body.error, /non autorisé/i);
  });

  test('5. scripts/audit-prod-fixtures.ts inclut les 4 identités de démo (3 cibles + ancien demo)', () => {
    const auditFilePath = path.resolve(process.cwd(), 'scripts/audit-prod-fixtures.ts');
    const content = fs.readFileSync(auditFilePath, 'utf8');

    assert.ok(
      content.includes('demo-college@my-exams.local'),
      'demo-college doit figurer dans FIXTURE_EMAILS'
    );
    assert.ok(
      content.includes('demo-lycee@my-exams.local'),
      'demo-lycee doit figurer dans FIXTURE_EMAILS'
    );
    assert.ok(
      content.includes('demo-sante@my-exams.local'),
      'demo-sante doit figurer dans FIXTURE_EMAILS'
    );
    assert.ok(
      content.includes('demo@example.com'),
      'L’ancien compte demo@example.com doit figurer dans FIXTURE_EMAILS pour détecter toute régression'
    );
  });

  test('6. scripts/seed-prod.ts désactive formellement SEED_DEV_FIXTURES et ne référence aucun compte demo', () => {
    const seedProdPath = path.resolve(process.cwd(), 'scripts/seed-prod.ts');
    const content = fs.readFileSync(seedProdPath, 'utf8');

    assert.ok(
      content.includes('process.env.SEED_DEV_FIXTURES = "0"'),
      'seed-prod.ts doit forcer SEED_DEV_FIXTURES à "0"'
    );
    assert.ok(
      !content.includes('demo-college@my-exams.local'),
      'seed-prod.ts ne doit pas référencer demo-college'
    );
    assert.ok(
      !content.includes('demo-lycee@my-exams.local'),
      'seed-prod.ts ne doit pas référencer demo-lycee'
    );
    assert.ok(
      !content.includes('demo-sante@my-exams.local'),
      'seed-prod.ts ne doit pas référencer demo-sante'
    );
    assert.ok(
      !content.includes('demo@example.com'),
      'seed-prod.ts ne doit pas référencer demo@example.com'
    );
  });

  test('7. prisma/seeds/user.seed.ts ne contient plus l’ancien compte demo@example.com', () => {
    const userSeedPath = path.resolve(process.cwd(), 'prisma/seeds/user.seed.ts');
    const content = fs.readFileSync(userSeedPath, 'utf8');

    assert.ok(
      !content.includes('demo@example.com'),
      'user.seed.ts ne doit plus référencer demo@example.com'
    );
  });
});
