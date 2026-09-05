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
const artifactsDir = process.env.ARTIFACTS_DIR ?? "";

test.describe.serial("Santé — Colle C09 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C09, QZONE Q24 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C09
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c09Row = page.locator("tr").filter({ hasText: "Biologie cellulaire — Cellule intégrée" });
    await expect(c09Row).toBeVisible();
    await openHealthColleStartDialog(page, c09Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c09/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Q1 (Group 1: Mitochondrie et chaîne respiratoire)
    await expect(page.getByText("Données communes aux questions 1 à 3")).toBeVisible();
    await expect(page.getByText("Mitochondrie et chaîne respiratoire")).toBeVisible();
    await expect(page.locator("img[src*='mitochondrial-chain-linked']")).toBeVisible();

    // Capture 1: Q1 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q01-desktop.png") });

    // Q1 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q2 desktop
    await expect(page.getByText("Quel accepteur terminal reçoit les électrons au terme de la chaîne respiratoire, au niveau du complexe IV ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q02-desktop.png") });

    // Q2 answer: dioxygène
    await page.getByTestId("health-mock-exam-short-answer-input").fill("dioxygène");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q3 desktop
    await expect(page.getByText("Parmi les propositions suivantes sur les complexes représentés, laquelle est exacte ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q03-desktop.png") });

    // Q3 answer: Choice A
    await page.getByTestId("health-mock-exam-choice-0").click();

    // Jump to Q22 (Group 2: Une cellule, deux états fonctionnels)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q22Tile = page.getByTestId("health-mock-exam-nav-22");
      if (await q22Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-22").click();

    // Q22 (Group 2: Une cellule, deux états fonctionnels QRM)
    await expect(page.getByText("Données communes aux questions 22 à 24")).toBeVisible();
    await expect(page.getByText("Une cellule, deux états fonctionnels")).toBeVisible();
    await expect(page.getByAltText("Deux panneaux montrant une cellule sécrétrice en interphase avec ses principaux compartiments et une cellule de même lignée en métaphase avec son fuseau mitotique.")).toBeVisible();

    // Capture 4: Q22 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q22-desktop.png") });

    // Q22 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q23 desktop
    await expect(page.getByText("La cellule du panneau A augmente simultanément sa synthèse de protéines sécrétées")).toBeVisible();

    // Capture 5: Q23 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q23-desktop.png") });

    // Q23 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q24 (QZONE) avant selection
    await expect(page.getByText("Sur le panneau B, sélectionnez la zone où les chromosomes sont alignés dans le plan équatorial de la cellule.")).toBeVisible();

    // Non-duplication test on Q24:
    const integratedCellStatesImages = page.locator("img[src*='integrated-cell-states-linked-q22-q24.svg']");
    await expect(integratedCellStatesImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 6: Q24 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q24-avant-selection.png") });

    // Click on target equatorial chromosome alignment (normalized x=0.7458, y=0.5429)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.7458;
      const targetY = box.y + box.height * 0.5429;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 7: Q24 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q24-apres-selection.png") });

    // Capture 9: Q24 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q24-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c09\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c09\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q24 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.getByTestId("health-mock-exam-correction-nav-24");
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.getByTestId("health-mock-exam-correction-nav-24").click();

    // Capture 8: Q24 correction
    await expect(page.getByText("Question 24", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c09-q24-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c09-q01-desktop.png",
      "c09-q02-desktop.png",
      "c09-q03-desktop.png",
      "c09-q22-desktop.png",
      "c09-q23-desktop.png",
      "c09-q24-avant-selection.png",
      "c09-q24-apres-selection.png",
      "c09-q24-correction.png",
      "c09-q24-mobile-375.png",
    ];

    // Save main closure screenshot for the TeX pass report
    const closureSrc = path.join(screenshotsTmpDir, "c09-q02-desktop.png");
    const closureDest = path.join(process.cwd(), "tmp", "c09-katex-after.png");
    if (fs.existsSync(closureSrc)) {
      fs.copyFileSync(closureSrc, closureDest);
    }


    if (artifactsDir && fs.existsSync(artifactsDir)) {
      for (const file of screenshotFiles) {
        const src = path.join(screenshotsTmpDir, file);
        const dest = path.join(artifactsDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      }
    }
  });
});

