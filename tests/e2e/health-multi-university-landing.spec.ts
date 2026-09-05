import { expect, test } from '@playwright/test';
import prisma from '@/lib/db/prisma';
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from '../helpers/session-fixture';

const ARTIFACT_DIR =
  '/Users/frdemoulin/.gemini/antigravity-ide/brain/17f66413-cf89-49b2-bac4-f81073f218ec';

test.describe('Santé Multi-Universités — Landing publique et cloisonnement applicatif', () => {
  test('1. Visiteur anonyme : /sante rend la landing publique pure sans fuite de contenu', async ({
    page,
  }) => {
    await page.goto('/sante');

    // Vérification Fil d'ariane (Accueil > L1 Santé)
    const breadcrumb = page.getByRole('navigation', { name: 'breadcrumb' });
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb.getByText('L1 Santé')).toBeVisible();

    // Vérification Hero
    await expect(
      page.getByRole('heading', { level: 1, name: 'Entraîne-toi pour réussir ta L1 Santé' })
    ).toBeVisible();
    await expect(page.locator('section').first().getByText('L1 Santé', { exact: true })).toBeVisible();
    await expect(page.getByText('Entraînement universitaire en Santé')).toBeVisible();

    // Carte d'accès Santé dans le hero
    await expect(page.getByRole('heading', { level: 2, name: 'Ton espace L1 Santé' })).toBeVisible();
    await expect(page.getByText('Accès gratuit')).toBeVisible();

    // CTA public principal dans la carte d'accès -> /log-in
    const primaryCta = page.getByRole('link', { name: 'Créer mon compte gratuit' });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '/log-in');

    // Lien secondaire de connexion dans la carte d'accès -> /log-in
    const loginLink = page.getByRole('link', { name: /Déjà un compte \? Se connecter/i });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/log-in');

    // CTA secondaire public dans la colonne gauche -> ancre #fonctionnalites
    const secondaryCta = page.getByRole('link', { name: 'Découvrir les fonctionnalités' });
    await expect(secondaryCta).toBeVisible();
    await expect(secondaryCta).toHaveAttribute('href', '#fonctionnalites');

    // Section Fonctionnalités (5 cartes)
    await expect(page.locator('#fonctionnalites')).toBeVisible();
    await expect(
      page.getByText(
        'Une boîte à outils complète pour consolider tes connaissances et progresser tout au long du semestre.'
      )
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Quiz & entraînements' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Corrections détaillées' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Colles' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Examens blancs' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Suivi de progression' })).toBeVisible();

    // Section Personnalisation & multi-universités
    await expect(
      page.getByRole('heading', { name: 'Un parcours adapté à ton université' })
    ).toBeVisible();
    await expect(
      page.getByText('Première université disponible : Université de Reims Champagne-Ardenne')
    ).toBeVisible();
    await expect(page.getByText('Couverture 2026-2027')).toBeVisible();

    // Piliers d'architecture
    await expect(page.getByRole('heading', { name: 'Socle de contenus réutilisables' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Maquette universitaire' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Évaluations adaptées' })).toBeVisible();

    // STRICTITÉ PUBLIC : Ancien bloc CTA de bas de page supprimé
    await expect(page.getByText('Prêt à t’entraîner pour ta L1 Santé ?')).not.toBeVisible();

    // STRICTITÉ PUBLIC : Aucun élément applicatif ou pédagogique ne doit être affiché
    await expect(page.getByText('UE disponibles')).not.toBeVisible();
    await expect(page.getByText('Mon espace Santé')).not.toBeVisible();
    await expect(page.getByText('Affectation annuelle verrouillée')).not.toBeVisible();
    await expect(page.getByText('Modifier le profil')).not.toBeVisible();
    await expect(page.getByText('Voir mon affectation pédagogique')).not.toBeVisible();
    await expect(page.getByText('Accès rapides')).not.toBeVisible();
  });

  test('2. Deep links Santé : un visiteur anonyme est systématiquement redirigé vers /log-in avec callbackUrl interne', async ({
    request,
  }) => {
    // 2.1. Page d'une UE
    const ueRes = await request.get('/sante/ue/test-course-unit-id', {
      maxRedirects: 0,
    });
    expect(ueRes.status()).toBe(307);
    expect(ueRes.headers()['location']).toBe('/log-in?callbackUrl=%2Fsante%2Fue%2Ftest-course-unit-id');

    // 2.2. Page d'un chapitre
    const chapRes = await request.get('/sante/ue/test-course-unit-id/chapitres/test-chapter', {
      maxRedirects: 0,
    });
    expect(chapRes.status()).toBe(307);
    expect(chapRes.headers()['location']).toBe(
      '/log-in?callbackUrl=%2Fsante%2Fue%2Ftest-course-unit-id%2Fchapitres%2Ftest-chapter'
    );

    // 2.3. Page d'un quiz
    const quizRes = await request.get(
      '/sante/ue/test-course-unit-id/chapitres/test-chapter/qcm/test-quiz',
      { maxRedirects: 0 }
    );
    expect(quizRes.status()).toBe(307);
    expect(quizRes.headers()['location']).toBe(
      '/log-in?callbackUrl=%2Fsante%2Fue%2Ftest-course-unit-id%2Fchapitres%2Ftest-chapter%2Fqcm%2Ftest-quiz'
    );
  });

  test('3. Authentifié sans Enrollment : /sante redirige vers /onboarding', async ({
    request,
  }) => {
    const email = 'user-no-enrollment-sante@example.com';
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: 'USER' },
      create: { email, name: 'Sans Enrollment Santé', roles: 'USER' },
    });

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: 'USER',
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    try {
      const response = await request.get('/sante', {
        headers: {
          Cookie: `authjs.session-token=${sessionToken}`,
        },
        maxRedirects: 0,
      });

      expect(response.status()).toBe(307);
      expect(response.headers()['location']).toBe('/onboarding?callbackUrl=%2Fsante');
    } finally {
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test('4. Authentifié SECONDARY : accès refusé à /sante et redirection canonique vers son univers', async ({
    request,
  }) => {
    const email = 'user-secondary-on-sante@example.com';
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: 'USER' },
      create: { email, name: 'Élève Lycée', roles: 'USER' },
    });

    const activeYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gte: new Date() },
      },
    });

    const gradeTle = await prisma.grade.findFirst({
      where: { shortDescription: 'Tle' },
    });

    test.skip(!activeYear || !gradeTle, 'Prérequis BDD manquants.');
    if (!activeYear || !gradeTle) return;

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: 'SECONDARY',
        secondaryGradeId: gradeTle.id,
        lockedAt: new Date(),
        createdBy: 'SELF_ONBOARDING',
      },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: 'USER',
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    try {
      const response = await request.get('/sante', {
        headers: {
          Cookie: `authjs.session-token=${sessionToken}`,
        },
        maxRedirects: 0,
      });

      // Redirigé vers /lycee (ou /dashboard)
      expect(response.status()).toBe(307);
      expect(response.headers()['location']).toMatch(/\/(lycee|dashboard)/);
    } finally {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test('5. Authentifié HEALTH : /sante rend l’espace étudiant avec bandeau readonly', async ({
    page,
    context,
  }) => {
    const email = 'student-health-authenticated@example.com';
    const user = await prisma.user.upsert({
      where: { email },
      update: { roles: 'USER' },
      create: { email, name: 'Étudiant Santé', roles: 'USER' },
    });

    const activeYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gte: new Date() },
      },
    });

    const programVersion = await prisma.healthProgramVersion.findFirst({
      where: { isActive: true },
    });

    test.skip(!activeYear || !programVersion, 'Prérequis Santé BDD manquants.');
    if (!activeYear || !programVersion) return;

    await prisma.userAcademicEnrollment.deleteMany({
      where: { userId: user.id },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: 'HEALTH',
        healthProgramVersionId: programVersion.id,
        lockedAt: new Date(),
        createdBy: 'SELF_ONBOARDING',
      },
    });

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: 'USER',
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    await context.addCookies([
      {
        name: 'authjs.session-token',
        value: sessionToken,
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        sameSite: 'Lax',
      },
    ]);

    try {
      await page.goto('/sante');

      // Doit afficher l'espace étudiant
      await expect(
        page.getByRole('heading', { level: 1, name: 'Mon espace Santé' })
      ).toBeVisible();

      // Doit afficher l'affectation annuelle verrouillée
      await expect(page.getByText('Affectation annuelle verrouillée')).toBeVisible();

      // Doit afficher le lien readonly vers l'affectation pédagogique (JAMAIS "Modifier le profil")
      const readonlyLink = page.getByRole('link', { name: 'Voir mon affectation pédagogique' });
      await expect(readonlyLink).toBeVisible();
      await expect(readonlyLink).toHaveAttribute('href', '/dashboard/profil-pedagogique');
      await expect(page.getByText('Modifier le profil')).not.toBeVisible();

      // Aucune carte de création de compte ou CTA public
      await expect(page.getByText('Ton espace L1 Santé')).not.toBeVisible();
      await expect(page.getByRole('link', { name: 'Créer mon compte gratuit' })).not.toBeVisible();
    } finally {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test('6. Captures responsive desktop 1440px, tablet 768px et mobile 375px', async ({ page }) => {
    // Desktop 1440
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/sante');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: `${ARTIFACT_DIR}/health-landing-desktop-1440.png`,
      fullPage: true,
    });

    // Tablet 768
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/sante');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: `${ARTIFACT_DIR}/health-landing-tablet-768.png`,
      fullPage: true,
    });

    // Mobile 375
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/sante');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: `${ARTIFACT_DIR}/health-landing-mobile-375.png`,
      fullPage: true,
    });
  });
});
