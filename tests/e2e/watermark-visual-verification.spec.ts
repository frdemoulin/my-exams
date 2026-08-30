import { expect, test } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { openHealthColleStartDialog } from "./health-colle-actions";

loadProjectEnv();

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

const screenshotsDir = path.join(process.cwd(), "tmp", "screenshots", "watermark");

test.describe("Watermark Visual Verification", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
  });

  test("Vérification visuelle complète du watermark sur cartes, dark/light, QZONE, mobile et popover", async ({ page }) => {
    // 1. Démarrer la colle C01
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" }).first();
    await expect(c01Row).toBeVisible();
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 15000 });

    // Desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });

    // 1. Passation avec Popover Code couleur ouvert
    const colorLegendTrigger = page.getByTestId("health-evaluation-color-legend-trigger");
    if (await colorLegendTrigger.isVisible()) {
      await colorLegendTrigger.click();
      const colorLegendContent = page.getByTestId("health-evaluation-color-legend-content");
      await expect(colorLegendContent).toBeVisible();
      // Capture Popover Code couleur ouvert au-dessus du watermark
      await page.screenshot({ path: path.join(screenshotsDir, "01-passation-popover-open.png") });
      // Fermer le popover
      await colorLegendTrigger.click();
    }

    // 2. Question avec QZONE (Q19 de C01)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    if (await scrollRightBtn.isVisible()) {
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-19").click();
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    await expect(hotspotContainer).toBeVisible();
    await hotspotContainer.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(screenshotsDir, "02-question-qzone-desktop.png") });

    // 3. Mobile 375 px sur QZONE
    await page.setViewportSize({ width: 375, height: 667 });
    await hotspotContainer.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(screenshotsDir, "03-qzone-mobile-375.png") });
    await page.setViewportSize({ width: 1280, height: 800 });

    // 4. Terminer la colle pour atteindre le Bilan et la Correction
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\//, { timeout: 15000 });
    const seeCorrectionBtn = page.getByRole("link", { name: "Voir la correction détaillée" });
    await expect(seeCorrectionBtn).toBeVisible();
    await seeCorrectionBtn.click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\/.*\/correction/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-correction")).toBeVisible();

    // 5. Correction C01 Light
    await page.screenshot({ path: path.join(screenshotsDir, "04-correction-c01-light.png") });

    // 5b. Correction C01 avec Popover Code Couleur ouvert
    const correctionColorLegendTrigger = page.getByTestId("health-evaluation-color-legend-trigger");
    if (await correctionColorLegendTrigger.isVisible()) {
      await correctionColorLegendTrigger.click();
      await expect(page.getByTestId("health-evaluation-color-legend-content")).toBeVisible();
      await page.screenshot({ path: path.join(screenshotsDir, "05-correction-popover-open.png") });
      await correctionColorLegendTrigger.click();
    }

    // 6. Correction C01 Mobile 375 px Light
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsDir, "06-correction-c01-mobile-light.png") });
    await page.setViewportSize({ width: 1280, height: 800 });

    // 7. Basculer en mode Dark via le ThemeToggle dans le header
    const themeBtn = page.getByRole("button", { name: "Changer le thème" }).first();
    if (await themeBtn.isVisible()) {
      await themeBtn.click();
      await page.waitForTimeout(400);
    }

    await expect(page.getByTestId("health-mock-exam-correction")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsDir, "07-correction-c01-dark.png") });

    // 8. Correction C01 Mobile 375 px Dark
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsDir, "08-correction-c01-mobile-dark.png") });
  });
});
