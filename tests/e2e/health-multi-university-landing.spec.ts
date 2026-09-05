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
    
    // Absence de la carte latérale et de ses éléments
    await expect(page.getByRole('heading', { level: 2, name: 'Ton espace L1 Santé' })).not.toBeVisible();
    await expect(page.getByText('Accès gratuit')).not.toBeVisible();
    await expect(page.getByRole('link', { name: /Déjà un compte \? Se connecter/i })).not.toBeVisible();

    // CTAs dans la colonne gauche
    const primaryCta = page.getByRole('link', { name: 'Créer mon compte gratuit' });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '/log-in?callbackUrl=%2Fsante');

    const secondaryCta = page.getByRole('link', { name: 'Découvrir les fonctionnalités' });
    await expect(secondaryCta).toBeVisible();
    await expect(secondaryCta).toHaveAttribute('href', '#fonctionnalites');

    // Note d'accès discrète sous les CTAs
    await expect(
      page.getByText(
        'Compte gratuit requis pour accéder aux quiz, colles, examens blancs et à ta progression.'
      )
    ).toBeVisible();

    // Grande illustration d'univers à droite (Stethoscope)
    const illustrationContainer = page.getByTestId('hero-universe-illustration');
    await expect(illustrationContainer).toBeVisible();

    // Section Fonctionnalités (5 cartes)
    const healthFeatures = page.locator('#fonctionnalites');
    await expect(healthFeatures).toBeVisible();
    await expect(healthFeatures.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      healthFeatures.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour réussir' })
    ).toBeVisible();
    await expect(
      healthFeatures.getByText(
        'Une boîte à outils complète pour consolider tes connaissances et progresser tout au long du semestre.'
      )
    ).toBeVisible();
    await expect(healthFeatures.getByRole('heading', { level: 3, name: 'Quiz & entraînements' })).toBeVisible();
    await expect(healthFeatures.getByRole('heading', { level: 3, name: 'Corrections détaillées' })).toBeVisible();
    await expect(healthFeatures.getByRole('heading', { level: 3, name: 'Colles' })).toBeVisible();
    await expect(healthFeatures.getByRole('heading', { level: 3, name: 'Examens blancs' })).toBeVisible();
    await expect(healthFeatures.getByRole('heading', { level: 3, name: 'Suivi de progression' })).toBeVisible();

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

    // 2.4. Page d'une colle
    const colleRes = await request.get('/sante/ue/test-course-unit-id/colles/test-colle', {
      maxRedirects: 0,
    });
    expect(colleRes.status()).toBe(307);
    expect(colleRes.headers()['location']).toBe(
      '/log-in?callbackUrl=%2Fsante%2Fue%2Ftest-course-unit-id%2Fcolles%2Ftest-colle'
    );

    // 2.5. Page d'un examen blanc
    const mockExamRes = await request.get(
      '/sante/ue/test-course-unit-id/examens-blancs/test-mock-exam',
      { maxRedirects: 0 }
    );
    expect(mockExamRes.status()).toBe(307);
    expect(mockExamRes.headers()['location']).toBe(
      '/log-in?callbackUrl=%2Fsante%2Fue%2Ftest-course-unit-id%2Fexamens-blancs%2Ftest-mock-exam'
    );
  });

  test('3. Authentifié sans Enrollment : /sante redirige vers /onboarding', async ({
    page,
    context,
  }) => {
    const user = await prisma.user.create({
      data: {
        email: `health-no-enrollment-${Date.now()}@example.com`,
        roles: 'USER',
      },
    });

    const sessionToken = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: user.id,
          role: 'USER',
          email: user.email!,
        },
      })
    );

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
      await page.waitForURL('**/onboarding?callbackUrl=%2Fsante');
      expect(page.url()).toContain('/onboarding?callbackUrl=%2Fsante');
    } finally {
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test('4. Authentifié avec Enrollment SECONDARY : accès refusé, redirection vers son univers', async ({
    page,
    context,
  }) => {
    const user = await prisma.user.create({
      data: {
        email: `health-secondary-user-${Date.now()}@example.com`,
        roles: 'USER',
      },
    });

    const activeYear = await prisma.academicYear.findFirstOrThrow({
      where: { startsAt: { lte: new Date() }, endsAt: { gte: new Date() } },
      select: { id: true },
    });

    const terminaleGrade = await prisma.grade.findFirstOrThrow({
      where: { shortDescription: 'Tle' },
      select: { id: true },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: 'SECONDARY',
        secondaryGradeId: terminaleGrade.id,
        createdBy: 'SELF_ONBOARDING',
      },
    });

    const sessionToken = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: user.id,
          role: 'USER',
          email: user.email!,
        },
      })
    );

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
      await page.waitForURL('**/lycee');
      expect(page.url()).toContain('/lycee');
    } finally {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.deleteMany({
        where: { id: user.id },
      });
    }
  });

  test('5. Authentifié avec Enrollment HEALTH : affiche le tableau de bord Santé étudiant', async ({
    page,
    context,
  }) => {
    const user = await prisma.user.create({
      data: {
        email: `health-student-${Date.now()}@example.com`,
        roles: 'USER',
      },
    });

    const activeYear = await prisma.academicYear.findFirstOrThrow({
      where: { startsAt: { lte: new Date() }, endsAt: { gte: new Date() } },
      select: { id: true },
    });

    const activeProgramVersion = await prisma.healthProgramVersion.findFirstOrThrow({
      where: { isActive: true },
      select: { id: true },
    });

    await prisma.userAcademicEnrollment.create({
      data: {
        userId: user.id,
        academicYearId: activeYear.id,
        audience: 'HEALTH',
        healthProgramVersionId: activeProgramVersion.id,
        createdBy: 'SELF_ONBOARDING',
      },
    });

    const sessionToken = await encodeAppSessionToken(
      buildAppSessionTokenPayload({
        actor: {
          id: user.id,
          role: 'USER',
          email: user.email!,
        },
      })
    );

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
      await expect(
        page.getByRole('heading', { level: 1, name: 'Mon espace Santé' })
      ).toBeVisible();
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

  test('7. Symétrie structurelle et captures 1440px des 3 univers (Collège, Lycée, Santé)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // 7.1. Collège
    await page.goto('/college');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('section').first().getByText('6e · 5e · 4e · 3e')).toBeVisible();
    await expect(page.locator('section').first().getByText('Brevet', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 1, name: 'Progresse au Collège, chapitre après chapitre' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Créer mon compte gratuit' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Découvrir les fonctionnalités' })).toBeVisible();
    await expect(
      page.getByText('Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression.')
    ).toBeVisible();
    await expect(page.getByTestId('hero-universe-illustration')).toBeVisible();
    const collegeFeatures = page.locator('section').filter({ hasText: 'Tout ce dont tu as besoin pour progresser' });
    await expect(collegeFeatures.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      collegeFeatures.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour progresser' })
    ).toBeVisible();
    await page.screenshot({
      path: `${ARTIFACT_DIR}/college-desktop-1440.png`,
      fullPage: true,
    });

    // 7.2. Lycée
    await page.goto('/lycee');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('section').first().getByText('Seconde · Première · Terminale')).toBeVisible();
    await expect(page.locator('section').first().getByText('Bac Général & Technologique')).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 1, name: 'Progresse au Lycée, chapitre après chapitre' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Créer mon compte gratuit' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Découvrir les fonctionnalités' })).toBeVisible();
    await expect(
      page.getByText('Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression.')
    ).toBeVisible();
    await expect(page.getByTestId('hero-universe-illustration')).toBeVisible();
    const lyceeFeatures = page.locator('section').filter({ hasText: 'Tout ce dont tu as besoin pour progresser' });
    await expect(lyceeFeatures.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      lyceeFeatures.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour progresser' })
    ).toBeVisible();
    await page.screenshot({
      path: `${ARTIFACT_DIR}/lycee-desktop-1440.png`,
      fullPage: true,
    });

    // 7.3. Santé
    await page.goto('/sante');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('section').first().getByText('L1 Santé', { exact: true })).toBeVisible();
    await expect(page.locator('section').first().getByText('Entraînement universitaire en Santé')).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 1, name: 'Entraîne-toi pour réussir ta L1 Santé' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Créer mon compte gratuit' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Découvrir les fonctionnalités' })).toBeVisible();
    await expect(
      page.getByText(
        'Compte gratuit requis pour accéder aux quiz, colles, examens blancs et à ta progression.'
      )
    ).toBeVisible();
    await expect(page.getByTestId('hero-universe-illustration')).toBeVisible();
    const santeFeatures = page.locator('#fonctionnalites');
    await expect(santeFeatures.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      santeFeatures.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour réussir' })
    ).toBeVisible();
    await page.screenshot({
      path: `${ARTIFACT_DIR}/health-landing-desktop-1440.png`,
      fullPage: true,
    });
  });
});
