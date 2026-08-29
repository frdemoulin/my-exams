import { expect, test } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { openHealthColleStartDialog } from "./health-colle-actions";

loadProjectEnv();

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

const screenshotsTmpDir = path.join(process.cwd(), "tmp", "screenshots");
const artifactsDir = "/Users/frdemoulin/.gemini/antigravity/brain/0fd9632c-605e-45de-a4db-cdd05f613f7a";

test.describe.serial("Santé — Colle C05 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C05, QZONE Q24 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C05
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c05Row = page.locator("tr").filter({ hasText: "Biochimie — Lipides" });
    await expect(c05Row).toBeVisible();
    await openHealthColleStartDialog(page, c05Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c05/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Jump to Q10 (QROC numeric 16)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q10Tile = page.getByTestId("health-mock-exam-nav-10");
      if (await q10Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-10").click();
    await expect(page.getByText("L’acide palmitique est noté 16:0")).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("16");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q11 (Group 1: Glycérophospholipide et phospholipases)
    await expect(page.getByText("Données communes — Glycérophospholipide et phospholipases")).toBeVisible();
    await expect(page.getByAltText("Schémas comparatifs d’un glycérophospholipide A et d’un triacylglycérol B, avec repérage sn-1, sn-2 et sn-3 du glycérol et une tête polaire X sur la molécule A.")).toBeVisible();
    
    // Capture 1: Q11 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q11-desktop.png") });

    // Q11 answer: Choice C (Choline)
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q12 desktop
    await expect(page.getByText("En comparant les molécules A et B")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q12-desktop.png") });

    // Q12 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q13 desktop
    await expect(page.getByText("En vous appuyant sur l’organisation de la molécule A, sélectionnez exactement les deux associations enzyme–site de coupure correctes")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q13-desktop.png") });

    // Q13 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 4: Q14 desktop
    await expect(page.getByText("À propos de la molécule A, de son organisation membranaire et de la signalisation phospholipidique")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q14-desktop.png") });

    // Q14 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();

    // Jump to Q23 (Group 2: Trois architectures lipidiques)
    while (await scrollRightBtn.isVisible()) {
      const q23Tile = page.getByTestId("health-mock-exam-nav-23");
      if (await q23Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-23").click();

    // Capture 5: Q23 desktop
    await expect(page.getByText("Données communes — Trois architectures lipidiques")).toBeVisible();
    await expect(page.getByAltText("Comparaison de trois structures lipidiques A, B et C représentant un glycérophospholipide, un céramide et un stérol, sans légende donnant leur nom.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q23-desktop.png") });

    // Q23 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q24 avant selection
    await expect(page.getByText("Sur la molécule A, sélectionnez le groupement phosphate du glycérophospholipide")).toBeVisible();

    // Non-duplication test on Q24:
    const lipidImages = page.locator("img[src*='lipid-families-linked-q23-q24.svg']");
    await expect(lipidImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 6: Q24 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q24-avant-selection.png") });

    // Click on target Phosphate of Molecule A (normalized x=0.1500, y=0.5200)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.15;
      const targetY = box.y + box.height * 0.52;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 7: Q24 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q24-apres-selection.png") });

    // Capture 9: Q24 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q24-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c05\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c05\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q24 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Bloc de questions suivant" });
    while (await corrNextBlockBtn.isVisible()) {
      const q24CorrTile = page.locator('button[aria-label="Question 24"]');
      if (await q24CorrTile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    const q24CorrTile = page.locator('button[aria-label="Question 24"]');
    await q24CorrTile.click();

    // Capture 8: Q24 correction
    await expect(page.getByText("Question 24", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c05-q24-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c05-q11-desktop.png",
      "c05-q12-desktop.png",
      "c05-q13-desktop.png",
      "c05-q14-desktop.png",
      "c05-q23-desktop.png",
      "c05-q24-avant-selection.png",
      "c05-q24-apres-selection.png",
      "c05-q24-correction.png",
      "c05-q24-mobile-375.png",
    ];

    for (const file of screenshotFiles) {
      const src = path.join(screenshotsTmpDir, file);
      const dest = path.join(artifactsDir, file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    }
  });
});
