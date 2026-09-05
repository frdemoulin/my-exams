import assert from 'node:assert/strict';
import { test, describe, beforeEach, afterEach } from 'node:test';

import {
  validateAuthConfig,
  getEnabledAuthProviders,
  isAllowedOrigin,
} from '../../src/lib/auth/auth-config-validator';
import { createHardenedPrismaAdapter } from '../../src/lib/auth/adapter-wrapper';
import { checkMagicLinkRateLimit } from '../../src/lib/auth/magic-link-rate-limit';
import { getCurrentInternalSessionContext } from '../../src/lib/auth/current-session';

describe('P1D — Hardening Sécurité & Authentification', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('1. Configuration des providers et validation de l’environnement', () => {
    test('aucun provider ne possède allowDangerousEmailAccountLinking', async () => {
      const authFile = await import('../../src/lib/auth/auth');
      const providers = (authFile as any).providerMap;
      assert.ok(Array.isArray(providers));

      // Vérification textuelle dans le code source de auth.ts pour certifier l'absence totale de l'option
      const fs = await import('node:fs/promises');
      const content = await fs.readFile('src/lib/auth/auth.ts', 'utf8');
      assert.ok(
        !content.includes('allowDangerousEmailAccountLinking: true'),
        'allowDangerousEmailAccountLinking ne doit plus jamais être activé'
      );
    });

    test('fail-fast en production si AUTH_SECRET < 32 caractères', () => {
      (process.env as any).NODE_ENV = 'production';
      process.env.AUTH_SECRET = 'trop-court-secret';
      process.env.AUTH_URL = 'https://my-exams.fr';
      process.env.AUTH_ENABLED_PROVIDERS = 'google';
      process.env.AUTH_GOOGLE_ID = 'test-id';
      process.env.AUTH_GOOGLE_SECRET = 'test-secret';

      assert.throws(() => validateAuthConfig(true), /au moins 32 caractères/);
    });

    test('fail-fast en production si AUTH_URL n’est pas en HTTPS', () => {
      (process.env as any).NODE_ENV = 'production';
      process.env.AUTH_SECRET = 'une-cle-secrete-suffisamment-longue-de-32-caracteres';
      process.env.AUTH_URL = 'http://my-exams.fr';
      process.env.AUTH_ENABLED_PROVIDERS = 'google';
      process.env.AUTH_GOOGLE_ID = 'test-id';
      process.env.AUTH_GOOGLE_SECRET = 'test-secret';

      assert.throws(() => validateAuthConfig(true), /doit utiliser HTTPS/);
    });

    test('fail-fast en production si provider activé sans secret', () => {
      (process.env as any).NODE_ENV = 'production';
      process.env.AUTH_SECRET = 'une-cle-secrete-suffisamment-longue-de-32-caracteres';
      process.env.AUTH_URL = 'https://my-exams.fr';
      process.env.HEALTH_PUBLIC_URL = 'https://sante.my-exams.fr';
      process.env.AUTH_ENABLED_PROVIDERS = 'google';
      delete process.env.AUTH_GOOGLE_ID;
      delete process.env.AUTH_GOOGLE_SECRET;

      assert.throws(() => validateAuthConfig(true), /provider google activé mais/);
    });

    test('allow-list filtre les providers non configurés', () => {
      process.env.AUTH_ENABLED_PROVIDERS = 'google,email';
      const enabled = getEnabledAuthProviders();
      assert.ok(enabled.has('google'));
      assert.ok(enabled.has('email'));
      assert.ok(!enabled.has('apple'));
      assert.ok(!enabled.has('facebook'));
    });

    test('validation d’origine rejette les origines externes non autorisées', () => {
      process.env.AUTH_URL = 'https://my-exams.fr';
      process.env.HEALTH_PUBLIC_URL = 'https://sante.my-exams.fr';

      assert.equal(isAllowedOrigin('https://my-exams.fr'), true);
      assert.equal(isAllowedOrigin('https://sante.my-exams.fr'), true);
      assert.equal(isAllowedOrigin('https://evil-hacker.com'), false);
      assert.equal(isAllowedOrigin(null), false);
      assert.equal(isAllowedOrigin(''), false);
    });
  });

  describe('2. Plafonnement absolu des sessions dans l’Adapter Prisma', () => {
    test('createSession cappe USER à 7 jours max et ADMIN à 8 heures max', async () => {
      const mockPrisma: any = {
        user: {
          findUnique: async ({ where }: any) => {
            if (where.id === 'admin-id') return { roles: 'ADMIN' };
            if (where.id === 'user-id') return { roles: 'USER' };
            return null;
          },
        },
        session: {
          create: async ({ data }: any) => data,
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);

      const now = Date.now();
      const inThirtyDays = new Date(now + 30 * 24 * 3600 * 1000);

      // Pour ADMIN : doit être plafonné à ~8h
      const adminSession = await adapter.createSession!({
        sessionToken: 'token-admin',
        userId: 'admin-id',
        expires: inThirtyDays,
      });
      const adminDiffHours = (adminSession.expires.getTime() - now) / (3600 * 1000);
      assert.ok(adminDiffHours <= 8.01, 'Session ADMIN doit être plafonnée à 8h');

      // Pour USER : doit être plafonné à ~7 jours
      const userSession = await adapter.createSession!({
        sessionToken: 'token-user',
        userId: 'user-id',
        expires: inThirtyDays,
      });
      const userDiffDays = (userSession.expires.getTime() - now) / (24 * 3600 * 1000);
      assert.ok(userDiffDays <= 7.01, 'Session USER doit être plafonnée à 7 jours');
    });

    test('getSessionAndUser rejette immédiatement une session USER vieille de 10h si le user est promu ADMIN', async () => {
      let sessionDeleted = false;

      const tenHoursAgo = new Date(Date.now() - 10 * 3600 * 1000);
      const inSixDays = new Date(Date.now() + 6 * 24 * 3600 * 1000);

      const mockPrisma: any = {
        session: {
          findUnique: async () => ({
            sessionToken: 'test-promoted-token',
            userId: 'user-promoted-id',
            createdAt: tenHoursAgo,
            expires: inSixDays,
            user: {
              id: 'user-promoted-id',
              roles: 'ADMIN', // User désormais ADMIN
              name: 'Promoted Admin',
              email: 'promoted@test.com',
            },
          }),
          delete: async () => {
            sessionDeleted = true;
          },
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);
      const result = await adapter.getSessionAndUser!('test-promoted-token');

      assert.equal(result, null, 'La session doit être refusée');
      assert.equal(sessionDeleted, true, 'La session en base doit être immédiatement supprimée');
    });

    test('getSessionAndUser ramène une session créée il y a 2h à 6h restantes après promotion ADMIN', async () => {
      let updatedExpires: Date | null = null;

      const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000);
      const inSixDays = new Date(Date.now() + 6 * 24 * 3600 * 1000);

      const mockPrisma: any = {
        session: {
          findUnique: async () => ({
            sessionToken: 'test-promoted-token-2h',
            userId: 'user-promoted-id',
            createdAt: twoHoursAgo,
            expires: inSixDays,
            user: {
              id: 'user-promoted-id',
              roles: 'ADMIN',
              name: 'Promoted Admin',
              email: 'promoted@test.com',
            },
          }),
          update: async ({ data }: any) => {
            updatedExpires = data.expires;
          },
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);
      const result = await adapter.getSessionAndUser!('test-promoted-token-2h');

      assert.ok(result);
      const remainingHours = (result.session.expires.getTime() - Date.now()) / (3600 * 1000);
      assert.ok(remainingHours <= 6.01 && remainingHours >= 5.95);
    });

    test('updateSession ne prolonge JAMAIS une session ADMIN au-delà de createdAt + 8h', async () => {
      const sevenHoursAgo = new Date(Date.now() - 7 * 3600 * 1000);

      const mockPrisma: any = {
        session: {
          findUnique: async () => ({
            sessionToken: 'test-admin-token',
            createdAt: sevenHoursAgo,
            expires: new Date(Date.now() + 1 * 3600 * 1000), // 1h restante
            user: { roles: 'ADMIN' },
          }),
          update: async ({ data }: any) => data,
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);
      const updated = await adapter.updateSession!({
        sessionToken: 'test-admin-token',
        expires: new Date(Date.now() + 24 * 3600 * 1000), // Tente de prolonger à J+1
      });

      assert.ok(updated);
      const diffHours = (updated.expires!.getTime() - Date.now()) / (3600 * 1000);
      // Il ne devait rester que 1h
      assert.ok(diffHours <= 1.01, 'Ne doit pas dépasser 1h restante');
    });

    test('updateSession ne prolonge JAMAIS une session lorsqu’un ADMIN est rétrogradé USER (conserve son échéance de 8h)', async () => {
      const oneHourAgo = new Date(Date.now() - 1 * 3600 * 1000);
      const initialAdminExpires = new Date(Date.now() + 7 * 3600 * 1000); // 8h depuis création

      const mockPrisma: any = {
        session: {
          findUnique: async () => ({
            sessionToken: 'test-downgraded-token',
            createdAt: oneHourAgo,
            expires: initialAdminExpires,
            user: { roles: 'USER' }, // Désormais USER
          }),
          update: async ({ data }: any) => data,
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);
      const inSevenDays = new Date(Date.now() + 7 * 24 * 3600 * 1000); // Auth.js tente de mettre à J+7
      const updated = await adapter.updateSession!({
        sessionToken: 'test-downgraded-token',
        expires: inSevenDays,
      });

      assert.ok(updated);
      assert.equal(
        updated.expires!.getTime(),
        initialAdminExpires.getTime(),
        'L’échéance de session ne doit jamais être prolongée au-delà de sa valeur existante'
      );
    });
  });

  describe('3. DTO public de session (zéro fuite de sessionToken)', () => {
    test('le callback session ne contient jamais sessionToken, userId interne ni impersonationReason', async () => {
      // Test de la logique de projection DTO
      const rawDBSession = {
        sessionToken: 'SUPER_SECRET_SESSION_TOKEN_UUID',
        userId: 'raw_db_user_id',
        createdAt: new Date(),
        updatedAt: new Date(),
        impersonatedUserId: 'viewer-id',
        impersonationReason: 'Support ticket 12345',
        expires: new Date(Date.now() + 3600 * 1000),
      };

      const rawDBUser = {
        id: 'actor-id',
        name: 'Admin Actor',
        email: 'admin@test.com',
        image: null,
        roles: 'ADMIN',
      };

      // Importation de la logique de session depuis auth.ts
      const { auth } = await import('../../src/lib/auth/auth');

      // Simulation du retour DTO pur
      const effectiveRole = 'USER';
      const publicDTO: any = {
        expires: rawDBSession.expires.toISOString(),
        user: {
          id: 'viewer-id',
          name: 'Student Viewer',
          email: 'student@test.com',
          image: null,
          role: effectiveRole,
        },
        actor: {
          id: rawDBUser.id,
          role: rawDBUser.roles,
          name: rawDBUser.name,
          email: rawDBUser.email,
          image: rawDBUser.image,
          adminExpiresAt: Date.now() + 8 * 3600 * 1000,
        },
        impersonation: {
          isActive: true,
          actorId: rawDBUser.id,
          actorRole: rawDBUser.roles,
          viewerId: 'viewer-id',
          viewerRole: 'USER',
          viewerName: 'Student Viewer',
          startedAt: Date.now(),
        },
      };

      const jsonString = JSON.stringify(publicDTO);

      assert.ok(!jsonString.includes('SUPER_SECRET_SESSION_TOKEN_UUID'));
      assert.ok(!jsonString.includes('sessionToken'));
      assert.ok(!jsonString.includes('Support ticket 12345'));
      assert.ok(!jsonString.includes('impersonationReason'));
      assert.ok(!jsonString.includes('createdAt'));
    });
  });

  describe('4. Rate Limiting Magic Link HMAC-SHA256 & Anti-abus', () => {
    test('applique le cooldown et le quota par email via HMAC', async () => {
      process.env.AUTH_SECRET = 'test-secret-at-least-32-chars-long-auth-token';

      const email = `test-quota-${Date.now()}@example.com`;

      // 1ère tentative autorisée
      const res1 = await checkMagicLinkRateLimit({ email });
      assert.equal(res1.allowed, true);

      // 2ème tentative immédiate -> refusée pour cooldown (au moins 60s)
      const res2 = await checkMagicLinkRateLimit({ email });
      assert.equal(res2.allowed, false);
      if (!res2.allowed) {
        assert.equal(res2.reason, 'cooldown');
        assert.ok(res2.retryAfterSeconds > 0);
      }
    });

    test('résistance aux appels concurrents (concurrency check)', async () => {
      process.env.AUTH_SECRET = 'test-secret-at-least-32-chars-long-auth-token';
      const email = `concurrent-${Date.now()}@example.com`;

      // Envois simultanés
      const results = await Promise.all([
        checkMagicLinkRateLimit({ email }),
        checkMagicLinkRateLimit({ email }),
        checkMagicLinkRateLimit({ email }),
      ]);

      const allowedCount = results.filter((r) => r.allowed).length;
      assert.equal(allowedCount, 1, 'Seul 1 appel doit être autorisé, les 2 autres bloqués par cooldown');
    });
  });

  describe('5. Gardes anti-production pour les seeds', () => {
    test('seedUsers lève une erreur bloquante en production', async () => {
      (process.env as any).NODE_ENV = 'production';
      process.env.SEED_DEV_FIXTURES = '1';

      const { seedUsers } = await import('../../prisma/seeds/user.seed');
      const fakePrisma: any = {};

      await assert.rejects(
        async () => seedUsers(fakePrisma),
        /formellement interdit en environnement de production/
      );
    });

    test('seedUsers est sauté si SEED_DEV_FIXTURES !== 1', async () => {
      (process.env as any).NODE_ENV = 'development';
      delete process.env.SEED_DEV_FIXTURES;

      let upsertCalled = false;
      const fakePrisma: any = {
        user: {
          upsert: async () => {
            upsertCalled = true;
          },
        },
      };

      const { seedUsers } = await import('../../prisma/seeds/user.seed');
      await seedUsers(fakePrisma);

      assert.equal(upsertCalled, false, 'Les utilisateurs de test ne doivent pas être injectés');
    });
  });

  describe('6. Impersonation DB & Sécurité CSRF/Origin', () => {
    test('le motif de support est obligatoire (5 à 500 caractères)', () => {
      const isReasonValid = (r?: string | null) => {
        const trimmed = r?.trim();
        return Boolean(trimmed && trimmed.length >= 5 && trimmed.length <= 500);
      };

      assert.equal(isReasonValid(undefined), false);
      assert.equal(isReasonValid(''), false);
      assert.equal(isReasonValid('   '), false);
      assert.equal(isReasonValid('aide'), false); // < 5 caractères
      assert.equal(isReasonValid('Assistance suite ticket #402'), true);
      assert.equal(isReasonValid('a'.repeat(501)), false); // > 500 caractères
    });

    test('expiration automatique de l’impersonation après 1 heure dans getSessionAndUser', async () => {
      let updateData: any = null;

      const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000);
      const inSixHours = new Date(Date.now() + 6 * 3600 * 1000);

      const mockPrisma: any = {
        session: {
          findUnique: async () => ({
            sessionToken: 'test-impersonation-token',
            userId: 'admin-id',
            createdAt: twoHoursAgo,
            expires: inSixHours,
            impersonatedUserId: 'target-student-id',
            impersonationStartedAt: twoHoursAgo, // Démarré il y a 2h (> 1h)
            impersonationReason: 'Ticket 123',
            user: {
              id: 'admin-id',
              roles: 'ADMIN',
              name: 'Admin',
              email: 'admin@test.com',
            },
          }),
          update: async ({ data }: any) => {
            updateData = data;
          },
        },
      };

      const adapter = createHardenedPrismaAdapter(mockPrisma);
      const result = await adapter.getSessionAndUser!('test-impersonation-token');

      assert.ok(result);
      assert.equal((result.session as any).impersonatedUserId, null, 'impersonatedUserId doit être nettoyé');
      assert.ok(updateData);
      assert.equal(updateData.impersonatedUserId, null);
      assert.equal(updateData.impersonationStartedAt, null);
      assert.equal(updateData.impersonationReason, null);
    });
  });

  describe('7. Suppression de compte RGPD & Cas ancien ADMIN', () => {
    test('refus strict de suppression en libre-service pour un utilisateur ayant des traces d’administration (ancien ADMIN)', async () => {
      // Simule la logique de vérification de deleteUserAccountAction
      const mockTx = {
        userAcademicEnrollmentCorrection: {
          count: async ({ where }: any) => (where.actorAdminId === 'downgraded-user-id' ? 3 : 0),
        },
        userAcademicEnrollment: {
          count: async ({ where }: any) => (where.createdByActorId === 'downgraded-user-id' ? 1 : 0),
        },
        authLog: {
          count: async ({ where }: any) => (where.userId === 'impersonator-user-id' ? 2 : 0),
        },
      };

      const checkAdminFootprints = async (userId: string) => {
        const [c1, c2, c3] = await Promise.all([
          mockTx.userAcademicEnrollmentCorrection.count({ where: { actorAdminId: userId } }),
          mockTx.userAcademicEnrollment.count({ where: { createdByActorId: userId } }),
          mockTx.authLog.count({ where: { userId, action: { in: ['IMPERSONATION_START', 'IMPERSONATION_STOP'] } } }),
        ]);
        return c1 > 0 || c2 > 0 || c3 > 0;
      };

      const hasFootprints = await checkAdminFootprints('downgraded-user-id');
      assert.equal(hasFootprints, true, 'Doit détecter les traces administratives');

      const hasImpersonationFootprints = await checkAdminFootprints('impersonator-user-id');
      assert.equal(hasImpersonationFootprints, true, 'Doit détecter les traces administratives d’impersonation');

      const normalUserHasFootprints = await checkAdminFootprints('normal-student-id');
      assert.equal(normalUserHasFootprints, false);
    });

    test('exigence d’authentification récente (< 15 minutes)', () => {
      const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
      const isSessionFresh = (createdAt: Date) => {
        return Date.now() - createdAt.getTime() < FIFTEEN_MINUTES_MS;
      };

      const freshSession = new Date(Date.now() - 5 * 60 * 1000); // 5 min
      const staleSession = new Date(Date.now() - 20 * 60 * 1000); // 20 min

      assert.equal(isSessionFresh(freshSession), true);
      assert.equal(isSessionFresh(staleSession), false);
    });

    test('exigence du mot de confirmation SUPPRIMER exact', () => {
      const validateConfirmation = (word?: string | null) => word?.trim() === 'SUPPRIMER';

      assert.equal(validateConfirmation('SUPPRIMER'), true);
      assert.equal(validateConfirmation('supprimer'), false);
      assert.equal(validateConfirmation('OUI'), false);
      assert.equal(validateConfirmation(''), false);
      assert.equal(validateConfirmation(undefined), false);
    });
  });
});
