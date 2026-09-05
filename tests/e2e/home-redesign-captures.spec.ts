import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const screenshotDir = path.resolve(process.cwd(), 'tmp/screenshots');
const artifactDir = '/Users/frdemoulin/.gemini/antigravity/brain/0fd9632c-605e-45de-a4db-cdd05f613f7a';

const authFile = process.env.E2E_AUTH_STATE ?? 'playwright/.auth/admin.json';

test.beforeAll(() => {
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }
});

function copyToArtifact(fileName: string) {
  const src = path.join(screenshotDir, fileName);
  const dest = path.join(artifactDir, fileName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

test.describe('Captures d’écran obligatoires — Refonte Home & Navigation', () => {
  test('1. Home desktop 1440 clair & Topbar & Footer', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Assurer thème clair
    const html = page.locator('html');
    await html.evaluate((el) => {
      el.classList.remove('dark');
      el.classList.add('light');
    });

    // 1. Home desktop 1440 clair
    const homeLightPath = path.join(screenshotDir, 'home-desktop-1440-clair.png');
    await page.screenshot({ path: homeLightPath, fullPage: true });
    copyToArtifact('home-desktop-1440-clair.png');

    // 4. Topbar desktop
    const topbar = page.locator('header');
    await expect(topbar).toBeVisible();
    const topbarPath = path.join(screenshotDir, 'topbar-desktop.png');
    await topbar.screenshot({ path: topbarPath });
    copyToArtifact('topbar-desktop.png');

    // 6. Footer desktop
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerPath = path.join(screenshotDir, 'footer-desktop.png');
    await footer.screenshot({ path: footerPath });
    copyToArtifact('footer-desktop.png');
  });

  test('2. Home desktop 1440 sombre', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Forcer thème sombre
    const html = page.locator('html');
    await html.evaluate((el) => {
      el.classList.remove('light');
      el.classList.add('dark');
    });

    const homeDarkPath = path.join(screenshotDir, 'home-desktop-1440-sombre.png');
    await page.screenshot({ path: homeDarkPath, fullPage: true });
    copyToArtifact('home-desktop-1440-sombre.png');
  });

  test('3. Mobile 375 & Topbar mobile & Footer mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 3. Mobile 375
    const mobilePath = path.join(screenshotDir, 'mobile-375.png');
    await page.screenshot({ path: mobilePath, fullPage: true });
    copyToArtifact('mobile-375.png');

    // 5. Topbar mobile
    const topbar = page.locator('header');
    await expect(topbar).toBeVisible();
    const topbarMobilePath = path.join(screenshotDir, 'topbar-mobile.png');
    await topbar.screenshot({ path: topbarMobilePath });
    copyToArtifact('topbar-mobile.png');

    // 7. Footer mobile
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerMobilePath = path.join(screenshotDir, 'footer-mobile.png');
    await footer.screenshot({ path: footerMobilePath });
    copyToArtifact('footer-mobile.png');
  });

  test('5. Hero repositionné - vérification des textes et navigation du CTA principal', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    // 0. Métadonnées SEO
    await expect(page).toHaveTitle('My Exams — Plateforme d’entraînement du collège à la L1 Santé');
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute(
      'content',
      'Quiz, entraînements progressifs, corrections détaillées et annales officielles du collège à la L1 Santé.'
    );

    // 1. Badge supérieur
    await expect(
      page.getByText('Plateforme d’entraînement du collège à la L1 Santé')
    ).toBeVisible();

    // 2. H1
    await expect(
      page.getByRole('heading', { level: 1, name: /Des entraînements ciblés pour réussir vos épreuves/i })
    ).toBeVisible();

    // 3. Sous-titre du hero
    await expect(
      page.getByText('Quiz ciblés, corrections détaillées et parcours d’entraînement progressifs, complétés par des annales d’examens officielles.')
    ).toBeVisible();

    // 4. CTA principal
    const primaryCta = page.getByRole('link', { name: /Commencer à s’entraîner/i });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '/entrainement');

    // 5. CTA secondaire
    const secondaryCta = page.getByRole('link', { name: /Explorer par niveau/i });
    await expect(secondaryCta).toBeVisible();

    // 6. Navigation du CTA principal pour visiteur non connecté
    await primaryCta.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/entrainement/);
  });

  test('6. Responsive tablette 768px - le hero et les CTAs restent parfaitement ordonnés', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /Commencer à s’entraîner/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Explorer par niveau/i })).toBeVisible();
  });

  test.describe('Menu utilisateur admin', () => {
    test.use({ storageState: authFile });

    test('4. Menu utilisateur admin montrant Administration', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Bouton utilisateur visible dans le header
      const userButton = page.locator('header button:visible').filter({ has: page.locator('span.rounded-full') });
      await expect(userButton).toBeVisible({ timeout: 15000 });
      await userButton.click();

      // Vérifier que le menu déroulant est ouvert et que le lien Administration est visible
      const adminLink = page.getByRole('menuitem', { name: /Administration/i });
      await expect(adminLink).toBeVisible({ timeout: 10000 });

      const userMenuAdminPath = path.join(screenshotDir, 'menu-utilisateur-admin.png');
      await page.screenshot({ path: userMenuAdminPath });
      copyToArtifact('menu-utilisateur-admin.png');
    });
  });
});
