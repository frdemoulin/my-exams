import assert from 'node:assert/strict';
import test from 'node:test';

import {
  assertAdminFromSession,
  UnauthorizedAdminError,
} from '../../src/lib/auth/assert-admin';

test('assertAdmin: refuse un utilisateur anonyme (session null) avec statut 401', () => {
  assert.throws(
    () => {
      assertAdminFromSession(null);
    },
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal((err as UnauthorizedAdminError).statusCode, 401);
      assert.equal((err as Error).message, 'Non authentifié.');
      return true;
    }
  );
});

test('assertAdmin: refuse une session sans utilisateur (session.user undefined) avec statut 401', () => {
  assert.throws(
    () => {
      assertAdminFromSession({} as any);
    },
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal((err as UnauthorizedAdminError).statusCode, 401);
      return true;
    }
  );
});

test('assertAdmin: refuse un utilisateur standard (role USER) avec statut 403', () => {
  const session = {
    user: {
      id: 'user_regular_1',
      role: 'USER' as const,
      email: 'student@example.com',
    },
  };

  assert.throws(
    () => {
      assertAdminFromSession(session);
    },
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal((err as UnauthorizedAdminError).statusCode, 403);
      assert.equal((err as Error).message, 'Accès administrateur requis.');
      return true;
    }
  );
});

test('assertAdmin: autorise un utilisateur administrateur (role ADMIN)', () => {
  const session = {
    user: {
      id: 'admin_1',
      role: 'ADMIN' as const,
      email: 'admin@example.com',
    },
  };

  const result = assertAdminFromSession(session);
  assert.equal(result.actorId, 'admin_1');
  assert.equal(result.session, session);
});

test('assertAdmin: autorise un ADMIN impersonnant un USER (actorRole ADMIN, viewerRole USER)', () => {
  const session = {
    user: {
      id: 'user_target_456',
      role: 'USER' as const,
      email: 'student@example.com',
    },
    actor: {
      id: 'admin_real_123',
      role: 'ADMIN' as const,
      email: 'admin@example.com',
    },
    impersonation: {
      isActive: true,
      actorId: 'admin_real_123',
      actorRole: 'ADMIN' as const,
      viewerId: 'user_target_456',
      viewerRole: 'USER' as const,
    },
  };

  const result = assertAdminFromSession(session);
  // L'acteur réel ADMIN est bien reconnu et conserve ses privilèges d'administration CMS
  assert.equal(result.actorId, 'admin_real_123');
  assert.equal(result.session, session);
});

test('assertAdmin: intégration mutation CMS simple — Prisma jamais appelé si non autorisé', async () => {
  let prismaCalled = false;

  const mockPrismaCreateChapter = async () => {
    prismaCalled = true;
    return { id: 'chap_new' };
  };

  const executeCreateChapterMutation = async (session: any) => {
    assertAdminFromSession(session);
    return await mockPrismaCreateChapter();
  };

  // 1. Appel anonyme -> rejet 401, Prisma jamais touché
  await assert.rejects(
    async () => {
      await executeCreateChapterMutation(null);
    },
    (err: any) => err instanceof UnauthorizedAdminError && err.statusCode === 401
  );
  assert.equal(prismaCalled, false);

  // 2. Appel rôle USER -> rejet 403, Prisma jamais touché
  await assert.rejects(
    async () => {
      await executeCreateChapterMutation({ user: { id: 'u1', role: 'USER' } });
    },
    (err: any) => err instanceof UnauthorizedAdminError && err.statusCode === 403
  );
  assert.equal(prismaCalled, false);

  // 3. Appel ADMIN -> autorisé, Prisma appelé
  await executeCreateChapterMutation({ user: { id: 'adm1', role: 'ADMIN' } });
  assert.equal(prismaCalled, true);
});

test('assertAdmin: intégration mutation Santé — vérifie actorRole sur ADMIN impersonnant USER', async () => {
  let healthEntityDeleted = false;

  const mockDeleteHealthEntity = async () => {
    healthEntityDeleted = true;
  };

  const executeDeleteHealthMutation = async (session: any) => {
    assertAdminFromSession(session);
    await mockDeleteHealthEntity();
  };

  const impersonatedSession = {
    user: { id: 'user_impersonated', role: 'USER' },
    actor: { id: 'admin_actor', role: 'ADMIN' },
    impersonation: {
      isActive: true,
      actorId: 'admin_actor',
      actorRole: 'ADMIN' as const,
      viewerId: 'user_impersonated',
      viewerRole: 'USER' as const,
    },
  };

  // L'action santé utilisant le guard canonique autorise l'admin acteur
  await executeDeleteHealthMutation(impersonatedSession);
  assert.equal(healthEntityDeleted, true);
});

test('assertAdmin: intégration route upload PDF — renvoie 401 anonyme et 403 USER avant parsing', () => {
  const simulateUploadHandler = (session: any) => {
    try {
      assertAdminFromSession(session);
      return { status: 200, body: { url: '/uploads/test.pdf' } };
    } catch (error) {
      if (error instanceof UnauthorizedAdminError) {
        return { status: error.statusCode, body: { error: error.message } };
      }
      return { status: 500, body: { error: 'Internal error' } };
    }
  };

  // Anonyme => 401
  const anonRes = simulateUploadHandler(null);
  assert.equal(anonRes.status, 401);
  assert.equal(anonRes.body.error, 'Non authentifié.');

  // USER => 403
  const userRes = simulateUploadHandler({ user: { id: 'u1', role: 'USER' } });
  assert.equal(userRes.status, 403);
  assert.equal(userRes.body.error, 'Accès administrateur requis.');

  // ADMIN => 200
  const adminRes = simulateUploadHandler({ user: { id: 'adm', role: 'ADMIN' } });
  assert.equal(adminRes.status, 200);
});
