import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const screenshotDir = path.resolve(process.cwd(), 'tmp/screenshots');
const artifactDir = '/Users/frdemoulin/.gemini/antigravity-ide/brain/17f66413-cf89-49b2-bac4-f81073f218ec';

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

test.describe('Repositionnement éditorial Collège & Lycée', () => {
  test('1. Home — Vérification des cartes Collège et Lycée', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Assurer thème clair pour captures
    const html = page.locator('html');
    await html.evaluate((el) => {
      el.classList.remove('dark');
      el.classList.add('light');
    });

    // Capture Home desktop 1440
    const homeScreenshot = 'home-desktop-1440.png';
    await page.screenshot({ path: path.join(screenshotDir, homeScreenshot), fullPage: true });
    copyToArtifact(homeScreenshot);

    // Carte Collège
    const collegeCard = page.locator('.grid.md\\:grid-cols-3 > div').filter({ hasText: 'Collège' }).first();
    await expect(collegeCard).toBeVisible();
    await expect(collegeCard.getByText('6e • 5e • 4e • 3e')).toBeVisible();

    const collegeBadges = collegeCard.locator('.flex.flex-wrap.gap-1\\.5 > div');
    await expect(collegeBadges.nth(0)).toHaveText('Quiz / entraînements');
    await expect(collegeBadges.nth(1)).toHaveText('Corrections');
    await expect(collegeBadges.nth(2)).toHaveText('Annales du Brevet');

    await expect(collegeCard.getByText(/Quiz et entraînements par chapitre de la 6e à la 3e/)).toBeVisible();
    const collegeCta = collegeCard.getByRole('link', { name: /Découvrir le Collège/i });
    await expect(collegeCta).toHaveAttribute('href', '/college');

    // Carte Lycée
    const lyceeCard = page.locator('.grid.md\\:grid-cols-3 > div').filter({ hasText: 'Lycée' }).first();
    await expect(lyceeCard).toBeVisible();
    await expect(lyceeCard.getByText('Seconde • Première • Terminale')).toBeVisible();

    const lyceeBadges = lyceeCard.locator('.flex.flex-wrap.gap-1\\.5 > div');
    await expect(lyceeBadges.nth(0)).toHaveText('Quiz / entraînements');
    await expect(lyceeBadges.nth(1)).toHaveText('Corrections');
    await expect(lyceeBadges.nth(2)).toHaveText('Annales du Bac');

    await expect(lyceeCard.getByText(/Quiz et entraînements par chapitre de la Seconde à la Terminale/)).toBeVisible();
    const lyceeCta = lyceeCard.getByRole('link', { name: /Découvrir le Lycée/i });
    await expect(lyceeCta).toHaveAttribute('href', '/lycee');
  });

  test('2. Page Lycée — Hero, fonctionnalités, ordre DOM et responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/lycee');
    await page.waitForLoadState('networkidle');

    // Titre SEO
    await expect(page).toHaveTitle(/Lycée — Quiz, entraînements et annales du Baccalauréat/);

    // Hero badges
    await expect(page.getByText('Seconde · Première · Terminale')).toBeVisible();
    await expect(page.getByText('Bac Général & Technologique')).toBeVisible();

    // H1
    await expect(page.getByRole('heading', { level: 1, name: 'Progresse au Lycée, chapitre après chapitre' })).toBeVisible();

    // Sous-titre
    await expect(page.getByText(/De la Seconde à la Terminale, entraîne-toi avec des quiz par chapitre/)).toBeVisible();

    // CTA principal harmonisé
    const primaryCta = page.getByRole('link', { name: 'Créer mon compte gratuit' });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '/log-in?callbackUrl=%2Flycee');

    // CTA secondaire fonctionnalités
    const secondaryCta = page.getByRole('link', { name: 'Découvrir les fonctionnalités' });
    await expect(secondaryCta).toBeVisible();
    await expect(secondaryCta).toHaveAttribute('href', '#fonctionnalites');

    // Note d'accès
    await expect(
      page.getByText('Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression.')
    ).toBeVisible();

    // Fonctionnalités Lycée - ordre et contenu
    const featuresSection = page.locator('section').filter({ hasText: 'Tout ce dont tu as besoin pour progresser' });
    await expect(featuresSection.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      featuresSection.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour progresser' })
    ).toBeVisible();
    await expect(
      featuresSection.getByText(
        'Des outils complémentaires pour progresser de la Seconde à la Terminale et préparer progressivement le Bac.'
      )
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Fonctionnalités Lycée' })).not.toBeVisible();

    const featureCards = featuresSection.locator('.grid > div');
    await expect(featureCards).toHaveCount(3);

    // Carte 1 : Quiz & Entraînements
    await expect(featureCards.nth(0).getByRole('heading', { level: 3 })).toHaveText('Quiz & Entraînements par chapitre');
    await expect(featureCards.nth(0).getByText(/Quiz interactifs de la Seconde à la Terminale/)).toBeVisible();
    await expect(featureCards.nth(0).getByRole('link', { name: /Accéder aux entraînements/i })).toHaveAttribute('href', '/entrainement');

    // Carte 2 : Corrections détaillées
    await expect(featureCards.nth(1).getByRole('heading', { level: 3 })).toHaveText('Corrections détaillées');
    await expect(featureCards.nth(1).getByText(/Retrouve des résolutions détaillées et des explications étape par étape/)).toBeVisible();
    await expect(featureCards.nth(1).getByRole('link', { name: /Consulter les corrections/i })).toHaveAttribute('href', '/annales');

    // Carte 3 : Annales officielles du Bac
    await expect(featureCards.nth(2).getByRole('heading', { level: 3 })).toHaveText('Annales officielles du Bac');
    await expect(featureCards.nth(2).getByText(/En Première et Terminale, entraîne-toi sur des sujets officiels du Bac/)).toBeVisible();
    await expect(featureCards.nth(2).getByRole('link', { name: /Explorer les annales/i })).toHaveAttribute('href', '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral');

    // Capture desktop 1440
    const lyceeDesktopScreenshot = 'lycee-desktop-1440.png';
    await page.screenshot({ path: path.join(screenshotDir, lyceeDesktopScreenshot), fullPage: true });
    copyToArtifact(lyceeDesktopScreenshot);

    // Mobile 375px
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(300);
    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(hasHorizontalOverflow).toBe(false);

    const lyceeMobileScreenshot = 'lycee-mobile-375.png';
    await page.screenshot({ path: path.join(screenshotDir, lyceeMobileScreenshot), fullPage: true });
    copyToArtifact(lyceeMobileScreenshot);
  });

  test('3. Page Collège — Hero, fonctionnalités, ordre DOM et responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/college');
    await page.waitForLoadState('networkidle');

    // Titre SEO
    await expect(page).toHaveTitle(/Collège — Quiz, entraînements et annales du Brevet/);

    // Hero badges
    await expect(page.getByText('6e · 5e · 4e · 3e')).toBeVisible();
    await expect(page.getByText('Brevet', { exact: true })).toBeVisible();

    // H1
    await expect(page.getByRole('heading', { level: 1, name: 'Progresse au Collège, chapitre après chapitre' })).toBeVisible();

    // Sous-titre
    await expect(page.getByText(/De la 6e à la 3e, entraîne-toi avec des quiz par chapitre/)).toBeVisible();

    // CTA principal harmonisé
    const primaryCta = page.getByRole('link', { name: 'Créer mon compte gratuit' });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '/log-in?callbackUrl=%2Fcollege');

    // CTA secondaire fonctionnalités
    const secondaryCta = page.getByRole('link', { name: 'Découvrir les fonctionnalités' });
    await expect(secondaryCta).toBeVisible();
    await expect(secondaryCta).toHaveAttribute('href', '#fonctionnalites');

    // Note d'accès
    await expect(
      page.getByText('Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression.')
    ).toBeVisible();

    // Fonctionnalités Collège - ordre et contenu
    const featuresSection = page.locator('section').filter({ hasText: 'Tout ce dont tu as besoin pour progresser' });
    await expect(featuresSection.getByText('Fonctionnalités')).toBeVisible();
    await expect(
      featuresSection.getByRole('heading', { level: 2, name: 'Tout ce dont tu as besoin pour progresser' })
    ).toBeVisible();
    await expect(
      featuresSection.getByText(
        'Des outils complémentaires pour consolider tes connaissances de la 6e à la 3e et préparer progressivement le Brevet.'
      )
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Fonctionnalités Collège' })).not.toBeVisible();

    const featureCards = featuresSection.locator('.grid > div');
    await expect(featureCards).toHaveCount(3);

    // Carte 1 : Quiz & Entraînements
    await expect(featureCards.nth(0).getByRole('heading', { level: 3 })).toHaveText('Quiz & Entraînements par chapitre');
    await expect(featureCards.nth(0).getByText(/Quiz interactifs de la 6e à la 3e/)).toBeVisible();
    await expect(featureCards.nth(0).getByRole('link', { name: /Accéder aux entraînements/i })).toHaveAttribute('href', '/entrainement');

    // Carte 2 : Corrections détaillées
    await expect(featureCards.nth(1).getByRole('heading', { level: 3 })).toHaveText('Corrections détaillées');
    await expect(featureCards.nth(1).getByText(/Retrouve des résolutions détaillées et des explications étape par étape/)).toBeVisible();
    await expect(featureCards.nth(1).getByRole('link', { name: /Consulter les corrections/i })).toHaveAttribute('href', '/annales');

    // Carte 3 : Annales officielles du Brevet
    await expect(featureCards.nth(2).getByRole('heading', { level: 3 })).toHaveText('Annales officielles du Brevet');
    await expect(featureCards.nth(2).getByText(/En 3e, entraîne-toi sur des sujets officiels du Brevet/)).toBeVisible();
    await expect(featureCards.nth(2).getByRole('link', { name: /Explorer les annales/i })).toHaveAttribute('href', '/annales?diploma=Brevet+des+coll%C3%A8ges');

    // Capture desktop 1440
    const collegeDesktopScreenshot = 'college-desktop-1440.png';
    await page.screenshot({ path: path.join(screenshotDir, collegeDesktopScreenshot), fullPage: true });
    copyToArtifact(collegeDesktopScreenshot);

    // Mobile 375px
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(300);
    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(hasHorizontalOverflow).toBe(false);

    const collegeMobileScreenshot = 'college-mobile-375.png';
    await page.screenshot({ path: path.join(screenshotDir, collegeMobileScreenshot), fullPage: true });
    copyToArtifact(collegeMobileScreenshot);
  });
});
