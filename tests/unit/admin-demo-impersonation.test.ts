import assert from 'node:assert/strict';
import { test, describe, beforeEach, afterEach, after } from 'node:test';
import crypto from 'node:crypto';

import prisma from '../../src/lib/db/prisma';
import { POST as impersonationStartPost } from '../../src/app/api/admin/impersonation/start/route';
import {
  DEMO_ACCOUNT_EMAILS,
  DEMO_ACCOUNT_CANONICAL_REASONS,
  getCanonicalDemoImpersonationReason,
  isDemoAccountEmail,
} from '../../src/lib/auth/demo-accounts';

describe('BUG — Switch ADMIN vers comptes demo : motif canonique & sécurité', () => {
  const originalEnv = { ...process.env };
  const TEST_EMAILS = [
    'admin-test-demo-switch@example.com',
    'user-test-demo-switch@example.com',
    'ordinary-student-switch@example.com',
  ];

  let adminUser: { id: string; email: string | null };
  let normalUser: { id: string; email: string | null };
  let ordinaryStudent: { id: string; email: string | null };
  let demoCollegeUser: { id: string; email: string | null } | null = null;
  let demoLyceeUser: { id: string; email: string | null } | null = null;
  let demoSanteUser: { id: string; email: string | null } | null = null;

  beforeEach(async () => {
    process.env = { ...originalEnv };
    (process.env as any).NODE_ENV = 'development';

    // Récupération ou création des utilisateurs de test
    adminUser = await prisma.user.upsert({
      where: { email: 'admin-test-demo-switch@example.com' },
      update: { roles: 'ADMIN' },
      create: {
        email: 'admin-test-demo-switch@example.com',
        roles: 'ADMIN',
        name: 'Admin Test Switch',
      },
    });

    normalUser = await prisma.user.upsert({
      where: { email: 'user-test-demo-switch@example.com' },
      update: { roles: 'USER' },
      create: {
        email: 'user-test-demo-switch@example.com',
        roles: 'USER',
        name: 'Normal User',
      },
    });

    ordinaryStudent = await prisma.user.upsert({
      where: { email: 'ordinary-student-switch@example.com' },
      update: { roles: 'USER' },
      create: {
        email: 'ordinary-student-switch@example.com',
        roles: 'USER',
        name: 'Ordinary Student',
      },
    });

    demoCollegeUser = await prisma.user.findUnique({
      where: { email: DEMO_ACCOUNT_EMAILS.COLLEGE },
      select: { id: true, email: true },
    });

    demoLyceeUser = await prisma.user.findUnique({
      where: { email: DEMO_ACCOUNT_EMAILS.LYCEE },
      select: { id: true, email: true },
    });

    demoSanteUser = await prisma.user.findUnique({
      where: { email: DEMO_ACCOUNT_EMAILS.HEALTH },
      select: { id: true, email: true },
    });
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  after(async () => {
    process.env = { ...originalEnv };
    const users = await prisma.user.findMany({
      where: { email: { in: TEST_EMAILS } },
      select: { id: true },
    });
    const ids = users.map((u) => u.id);
    if (ids.length > 0) {
      await prisma.authLog.deleteMany({ where: { userId: { in: ids } } });
      await prisma.session.deleteMany({ where: { userId: { in: ids } } });
      await prisma.user.deleteMany({ where: { id: { in: ids } } });
    }
  });

  function createMockRequest(sessionToken: string, payload: Record<string, unknown>) {
    return new Request('http://localhost:3000/api/admin/impersonation/start', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
        host: 'localhost:3000',
        cookie: `authjs.session-token=${sessionToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  }

  test('7. Vérifier que les motifs canoniques automatiques font strictement entre 5 et 500 caractères', () => {
    for (const email of Object.values(DEMO_ACCOUNT_EMAILS)) {
      const isDemo = isDemoAccountEmail(email);
      assert.equal(isDemo, true, `L'email ${email} doit être reconnu comme compte demo`);

      const canonicalReason = getCanonicalDemoImpersonationReason(email);
      assert.ok(canonicalReason, `Un motif canonique doit être défini pour ${email}`);
      assert.ok(
        canonicalReason.length >= 5 && canonicalReason.length <= 500,
        `Le motif canonique "${canonicalReason}" (${canonicalReason.length} car.) doit faire entre 5 et 500 caractères`
      );
    }
  });

  test('1. ADMIN → demo-college sans motif saisi : impersonation réussie, motif canonique en AuthLog & redirection /college', async () => {
    assert.ok(demoCollegeUser, 'demo-college doit exister (db:seed:demo-accounts)');

    const token = `token-admin-college-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: adminUser.id,
        expires: new Date(Date.now() + 8 * 3600 * 1000),
      },
    });

    try {
      const req = createMockRequest(token, {
        userId: demoCollegeUser.id,
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.redirectTo, '/college');

      // Vérifier la session en BDD
      const session = await prisma.session.findUnique({
        where: { sessionToken: token },
      });
      assert.equal(session?.impersonatedUserId, demoCollegeUser.id);
      assert.equal(
        session?.impersonationReason,
        'Test DEV — compte de démonstration Collège'
      );

      // Vérifier le log d'audit AuthLog
      const log = await prisma.authLog.findFirst({
        where: {
          userId: adminUser.id,
          targetUserId: demoCollegeUser.id,
          action: 'IMPERSONATION_START',
        },
        orderBy: { createdAt: 'desc' },
      });
      assert.ok(log, 'AuthLog IMPERSONATION_START doit exister');
      assert.equal(log.reason, 'Test DEV — compte de démonstration Collège');
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });

  test('2. ADMIN → demo-lycee sans motif saisi : impersonation réussie, motif canonique en AuthLog & redirection /lycee', async () => {
    assert.ok(demoLyceeUser, 'demo-lycee doit exister (db:seed:demo-accounts)');

    const token = `token-admin-lycee-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: adminUser.id,
        expires: new Date(Date.now() + 8 * 3600 * 1000),
      },
    });

    try {
      const req = createMockRequest(token, {
        userId: demoLyceeUser.id,
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.redirectTo, '/lycee');

      // Vérifier la session en BDD
      const session = await prisma.session.findUnique({
        where: { sessionToken: token },
      });
      assert.equal(session?.impersonatedUserId, demoLyceeUser.id);
      assert.equal(
        session?.impersonationReason,
        'Test DEV — compte de démonstration Lycée'
      );

      // Vérifier le log d'audit AuthLog
      const log = await prisma.authLog.findFirst({
        where: {
          userId: adminUser.id,
          targetUserId: demoLyceeUser.id,
          action: 'IMPERSONATION_START',
        },
        orderBy: { createdAt: 'desc' },
      });
      assert.ok(log, 'AuthLog IMPERSONATION_START doit exister');
      assert.equal(log.reason, 'Test DEV — compte de démonstration Lycée');
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });

  test('3. ADMIN → demo-sante sans motif saisi : impersonation réussie, motif canonique en AuthLog & redirection /sante', async () => {
    assert.ok(demoSanteUser, 'demo-sante doit exister (db:seed:demo-accounts)');

    const token = `token-admin-sante-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: adminUser.id,
        expires: new Date(Date.now() + 8 * 3600 * 1000),
      },
    });

    try {
      const req = createMockRequest(token, {
        userId: demoSanteUser.id,
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.redirectTo, '/sante');

      // Vérifier la session en BDD
      const session = await prisma.session.findUnique({
        where: { sessionToken: token },
      });
      assert.equal(session?.impersonatedUserId, demoSanteUser.id);
      assert.equal(
        session?.impersonationReason,
        'Test DEV — compte de démonstration Santé'
      );

      // Vérifier le log d'audit AuthLog
      const log = await prisma.authLog.findFirst({
        where: {
          userId: adminUser.id,
          targetUserId: demoSanteUser.id,
          action: 'IMPERSONATION_START',
        },
        orderBy: { createdAt: 'desc' },
      });
      assert.ok(log, 'AuthLog IMPERSONATION_START doit exister');
      assert.equal(log.reason, 'Test DEV — compte de démonstration Santé');
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });

  test('4. ADMIN → USER ordinaire sans motif : toujours refusé (400)', async () => {
    const token = `token-admin-ordinary-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: adminUser.id,
        expires: new Date(Date.now() + 8 * 3600 * 1000),
      },
    });

    try {
      const req = createMockRequest(token, {
        userId: ordinaryStudent.id,
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 400);

      const data = await res.json();
      assert.equal(
        data.error,
        'Un motif de support valide (entre 5 et 500 caractères) est obligatoire.'
      );
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });

  test('5. USER → compte demo : strictement interdit (403)', async () => {
    assert.ok(demoCollegeUser);

    const token = `token-user-to-demo-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: normalUser.id,
        expires: new Date(Date.now() + 24 * 3600 * 1000),
      },
    });

    try {
      const req = createMockRequest(token, {
        userId: demoCollegeUser.id,
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 403);

      const data = await res.json();
      assert.equal(data.error, 'Accès refusé.');
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });

  test('6. Production : aucune exception demo disponible, motif obligatoire même pour compte demo', async () => {
    assert.ok(demoCollegeUser);

    (process.env as any).NODE_ENV = 'production';
    process.env.AUTH_URL = 'https://my-exams.fr';
    process.env.HEALTH_PUBLIC_URL = 'https://sante.my-exams.fr';

    const token = `token-admin-prod-demo-${crypto.randomUUID()}`;
    await prisma.session.create({
      data: {
        sessionToken: token,
        userId: adminUser.id,
        expires: new Date(Date.now() + 8 * 3600 * 1000),
      },
    });

    try {
      const req = new Request('https://my-exams.fr/api/admin/impersonation/start', {
        method: 'POST',
        headers: {
          origin: 'https://my-exams.fr',
          host: 'my-exams.fr',
          cookie: `authjs.session-token=${token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: demoCollegeUser.id,
        }),
      });

      const res = await impersonationStartPost(req);
      assert.equal(res.status, 400);

      const data = await res.json();
      assert.equal(
        data.error,
        'Un motif de support valide (entre 5 et 500 caractères) est obligatoire.'
      );
    } finally {
      await prisma.session.deleteMany({ where: { sessionToken: token } });
    }
  });
});
