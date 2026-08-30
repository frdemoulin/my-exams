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
