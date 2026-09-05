import assert from 'node:assert/strict';
import { test, describe, after } from 'node:test';
import prisma from '../../src/lib/db/prisma';
import type { Session } from 'next-auth';
import {
  resolvePostAuthenticationDestination,
  resolveHomeTrainingCtaDestination,
  createAcademicEnrollmentFromSession,
  AcademicEnrollmentError,
} from '../../src/core/academic-enrollment';

describe('ONBOARDING — Bypass ADMIN et invariants de sécurité', () => {
  const TEST_EMAILS = [
    'test-admin-bypass@example.com',
    'test-user-onboarding-bypass@example.com',
    'test-user-impersonated-bypass@example.com',
  ];

  after(async () => {
    const users = await prisma.user.findMany({
      where: { email: { in: TEST_EMAILS } },
      select: { id: true },
    });
    const ids = users.map((u) => u.id);
    if (ids.length > 0) {
      await prisma.userAcademicEnrollment.deleteMany({ where: { userId: { in: ids } } });
      await prisma.user.deleteMany({ where: { id: { in: ids } } });
    }
  });

  test('1. resolvePostAuthenticationDestination : ADMIN sans enrollment va vers /admin et isOnboardingRequired=false', async () => {
    const admin = await prisma.user.upsert({
      where: { email: 'test-admin-bypass@example.com' },
      update: { roles: 'ADMIN' },
      create: { email: 'test-admin-bypass@example.com', roles: 'ADMIN', name: 'Admin Test' },
    });

    // Sans callback
    const resNoCb = await resolvePostAuthenticationDestination({
      userId: admin.id,
      role: 'ADMIN',
    });
    assert.equal(resNoCb.destination, '/admin');
    assert.equal(resNoCb.isOnboardingRequired, false);

    // Résolution automatique du rôle en BDD si non transmis
    const resDbRole = await resolvePostAuthenticationDestination({
      userId: admin.id,
    });
    assert.equal(resDbRole.destination, '/admin');
    assert.equal(resDbRole.isOnboardingRequired, false);

    // Avec callback administratif autorisé
    const resAdminCb = await resolvePostAuthenticationDestination({
      userId: admin.id,
      role: 'ADMIN',
      callbackUrl: '/admin/exam-papers',
    });
    assert.equal(resAdminCb.destination, '/admin/exam-papers');
    assert.equal(resAdminCb.isOnboardingRequired, false);

    // Avec callback vers /onboarding -> ignoré, aiguillage vers /admin
    const resOnboardingCb = await resolvePostAuthenticationDestination({
      userId: admin.id,
      role: 'ADMIN',
      callbackUrl: '/onboarding',
    });
    assert.equal(resOnboardingCb.destination, '/admin');
    assert.equal(resOnboardingCb.isOnboardingRequired, false);

    // Avec callback vers /dashboard -> aiguillage vers /admin
    const resDashboardCb = await resolvePostAuthenticationDestination({
      userId: admin.id,
      role: 'ADMIN',
      callbackUrl: '/dashboard',
    });
    assert.equal(resDashboardCb.destination, '/admin');
    assert.equal(resDashboardCb.isOnboardingRequired, false);

    // Avec callback malveillant -> rejeté, aiguillage vers /admin
    const resEvilCb = await resolvePostAuthenticationDestination({
      userId: admin.id,
      role: 'ADMIN',
      callbackUrl: '//evil.com/hack',
    });
    assert.equal(resEvilCb.destination, '/admin');
    assert.equal(resEvilCb.isOnboardingRequired, false);
  });

  test('2. resolvePostAuthenticationDestination : USER sans enrollment va vers /onboarding', async () => {
    const user = await prisma.user.upsert({
      where: { email: 'test-user-onboarding-bypass@example.com' },
      update: { roles: 'USER' },
      create: { email: 'test-user-onboarding-bypass@example.com', roles: 'USER', name: 'User Test' },
    });

    const resUser = await resolvePostAuthenticationDestination({
      userId: user.id,
      role: 'USER',
      callbackUrl: '/lycee',
    });
    assert.equal(resUser.destination, '/onboarding?callbackUrl=%2Flycee');
    assert.equal(resUser.isOnboardingRequired, true);
  });

  test('3. resolveHomeTrainingCtaDestination : ADMIN dirigé vers /admin, jamais vers /onboarding', async () => {
    const admin = await prisma.user.findUniqueOrThrow({
      where: { email: 'test-admin-bypass@example.com' },
    });

    const dest = await resolveHomeTrainingCtaDestination({
      userId: admin.id,
      role: 'ADMIN',
    });
    assert.equal(dest, '/admin');

    // Même sans passer explicitement le rôle
    const destDb = await resolveHomeTrainingCtaDestination({
      userId: admin.id,
    });
    assert.equal(destDb, '/admin');
  });

  test('4. createAcademicEnrollmentFromSession : refuse catégoriquement l’acteur ADMIN (INVALID_SCOPE)', async () => {
    const admin = await prisma.user.findUniqueOrThrow({
      where: { email: 'test-admin-bypass@example.com' },
    });

    const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
    assert.ok(gradeTle);

    const adminSession: Session = {
      user: {
        id: admin.id,
        email: admin.email,
        role: 'ADMIN',
      },
      actor: {
        id: admin.id,
        email: admin.email,
        role: 'ADMIN',
      },
      expires: new Date(Date.now() + 3600000).toISOString(),
    };

    await assert.rejects(
      async () => {
        await createAcademicEnrollmentFromSession(adminSession, {
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
        });
      },
      (err: any) => {
        assert.ok(err instanceof AcademicEnrollmentError);
        assert.equal(err.code, 'INVALID_SCOPE');
        assert.match(err.message, /administrateurs ne créent pas d'affectation/i);
        return true;
      }
    );

    // Vérifier qu'aucun enrollment n'a été créé
    const enrollment = await prisma.userAcademicEnrollment.findFirst({
      where: { userId: admin.id },
    });
    assert.equal(enrollment, null);
  });

  test('5. createAcademicEnrollmentFromSession : refuse sous impersonation administrative (P1D)', async () => {
    const admin = await prisma.user.findUniqueOrThrow({
      where: { email: 'test-admin-bypass@example.com' },
    });
    const impersonatedUser = await prisma.user.upsert({
      where: { email: 'test-user-impersonated-bypass@example.com' },
      update: { roles: 'USER' },
      create: {
        email: 'test-user-impersonated-bypass@example.com',
        roles: 'USER',
        name: 'Impersonated User',
      },
    });

    const gradeTle = await prisma.grade.findFirst({ where: { shortDescription: 'Tle' } });
    assert.ok(gradeTle);

    const impersonatedSession: Session = {
      user: {
        id: impersonatedUser.id,
        email: impersonatedUser.email,
        role: 'USER',
      },
      actor: {
        id: admin.id,
        email: admin.email,
        role: 'ADMIN',
      },
      impersonation: {
        isActive: true,
        actorId: admin.id,
        actorRole: 'ADMIN',
        viewerId: impersonatedUser.id,
        viewerRole: 'USER',
      },
      expires: new Date(Date.now() + 3600000).toISOString(),
    };

    await assert.rejects(
      async () => {
        await createAcademicEnrollmentFromSession(impersonatedSession, {
          audience: 'SECONDARY',
          secondaryGradeId: gradeTle.id,
        });
      },
      (err: any) => {
        assert.ok(err instanceof AcademicEnrollmentError);
        assert.equal(err.code, 'INVALID_SCOPE');
        assert.match(err.message, /impersonation administrative/i);
        return true;
      }
    );

    // Aucun enrollment créé ni pour l'admin ni pour le viewer
    const adminEnr = await prisma.userAcademicEnrollment.findFirst({
      where: { userId: admin.id },
    });
    assert.equal(adminEnr, null);

    const viewerEnr = await prisma.userAcademicEnrollment.findFirst({
      where: { userId: impersonatedUser.id },
    });
    assert.equal(viewerEnr, null);
  });

  test('6. Modèle P1D : navigation sous impersonation suit l’effective user', async () => {
    const impersonatedUser = await prisma.user.findUniqueOrThrow({
      where: { email: 'test-user-impersonated-bypass@example.com' },
    });

    // L'effective user sans enrollment a besoin d'onboarding pour naviguer
    const resViewer = await resolvePostAuthenticationDestination({
      userId: impersonatedUser.id,
      role: 'USER',
    });
    assert.equal(resViewer.destination, '/onboarding');
    assert.equal(resViewer.isOnboardingRequired, true);
  });
});
