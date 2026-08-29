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

test.describe.serial("Santé — Colle C08 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C08, QZONE Q24 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C08
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c08Row = page.locator("tr").filter({ hasText: "Biochimie — Acides aminés et protéines" });
    await expect(c08Row).toBeVisible();
    await openHealthColleStartDialog(page, c08Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c08/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Q1 (Group 1: Acides aminés et liaison peptidique)
    await expect(page.getByText("Données communes aux questions 1 à 3")).toBeVisible();
    await expect(page.getByText("Acides aminés et liaison peptidique")).toBeVisible();
    await expect(page.getByAltText("Structures zwitterioniques de la cystéine A et de la glycine B, puis schéma du dipeptide A–B mettant en évidence son squelette sans nommer la liaison peptidique.")).toBeVisible();

    // Capture 1: Q1 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q01-desktop.png") });

    // Q1 answer: A, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q2 desktop
    await expect(page.getByText("Quel est l’acide aminé A, dont la chaîne latérale est –CH2–SH ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q02-desktop.png") });

    // Q2 answer: cystéine
    await page.getByTestId("health-mock-exam-short-answer-input").fill("cystéine");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q3 desktop
    await expect(page.getByText("Dans le dipeptide A–B, quelle propriété explique directement la faible liberté de rotation autour de la liaison C–N du motif C(=O)–NH ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q03-desktop.png") });

    // Q3 answer: Choice A
    await page.getByTestId("health-mock-exam-choice-0").click();

    // Jump to Q22 (Group 2: Chaînes latérales et conformation)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q22Tile = page.getByTestId("health-mock-exam-nav-22");
      if (await q22Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-22").click();

    // Q22 (Group 2: Chaînes latérales et conformation QRM)
    await expect(page.getByText("Données communes aux questions 22 à 24")).toBeVisible();
    await expect(page.getByText("Chaînes latérales et conformation")).toBeVisible();
    await expect(page.getByAltText("Segment peptidique Tyr–His–Asp à pH 7,4 avec extrémités N- et C-terminales, accompagné d’une représentation schématique d’une protéine native et d’une forme dénaturée.")).toBeVisible();

    // Capture 4: Q22 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q22-desktop.png") });

    // Q22 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q23 desktop
    await expect(page.getByText("La protéine représentée subit une modification importante de pH et de température.")).toBeVisible();

    // Capture 5: Q23 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q23-desktop.png") });

    // Q23 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q24 (QZONE) avant selection
    await expect(page.getByText("Sur le segment Tyr–His–Asp, sélectionnez le groupement carboxylate porté par la chaîne latérale de l’aspartate")).toBeVisible();

    // Non-duplication test on Q24:
    const peptideIonizationImages = page.locator("img[src*='peptide-ionization-linked-q22-q24.svg']");
    await expect(peptideIonizationImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 6: Q24 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q24-avant-selection.png") });

    // Click on target Asp side chain carboxylate (normalized x=0.5583, y=0.2000)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.5583;
      const targetY = box.y + box.height * 0.2000;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 7: Q24 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q24-apres-selection.png") });

    // Capture 9: Q24 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q24-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c08\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c08\/resultats\/.*\/correction/, { timeout: 15000 });

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
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c08-q24-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c08-q01-desktop.png",
      "c08-q02-desktop.png",
      "c08-q03-desktop.png",
      "c08-q22-desktop.png",
      "c08-q23-desktop.png",
      "c08-q24-avant-selection.png",
      "c08-q24-apres-selection.png",
      "c08-q24-correction.png",
      "c08-q24-mobile-375.png",
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

