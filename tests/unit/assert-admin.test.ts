import assert from 'node:assert/strict';
import test from 'node:test';

import {
  assertAdminFromSession,
  UnauthorizedAdminError,
} from '../../src/lib/auth/assert-admin';

test('assertAdmin: refuse un utilisateur anonyme (session null)', () => {
  assert.throws(
    () => {
      assertAdminFromSession(null);
    },
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      assert.equal((err as Error).message, 'Accès administrateur requis.');
      return true;
    }
  );
});

test('assertAdmin: refuse une session sans utilisateur (session.user undefined)', () => {
  assert.throws(
    () => {
      assertAdminFromSession({} as any);
    },
    (err: unknown) => {
      assert.ok(err instanceof UnauthorizedAdminError);
      return true;
    }
  );
});

test('assertAdmin: refuse un utilisateur standard (role USER)', () => {
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

test('assertAdmin: bloque les opérations de mutation avant tout accès aux données', async () => {
  let dbMutationExecuted = false;

  const mockMutation = async (session: any) => {
    assertAdminFromSession(session);
    dbMutationExecuted = true;
  };

  // 1. Appel avec session non autorisée
  await assert.rejects(
    async () => {
      await mockMutation({ user: { id: 'u1', role: 'USER' } });
    },
    { name: 'UnauthorizedAdminError' }
  );

  // La mutation n'a jamais été atteinte
  assert.equal(dbMutationExecuted, false);

  // 2. Appel avec session admin valide
  await mockMutation({ user: { id: 'admin1', role: 'ADMIN' } });
  assert.equal(dbMutationExecuted, true);
});
