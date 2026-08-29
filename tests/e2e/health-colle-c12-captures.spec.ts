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

test.describe.serial("Santé — Colle C12 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C12, QZONE Q16/Q43 et non-duplication des médias", async ({ page }) => {
    // 1. Démarrer la colle C12
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c12Row = page.getByRole("row", { name: /12.*Grande colle/ });
    await expect(c12Row).toBeVisible();
    await openHealthColleStartDialog(page, c12Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c12/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Jump to Q13 (Group 1: Molécule polyfonctionnelle et transformations)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q13Tile = page.getByTestId("health-mock-exam-nav-13");
      if (await q13Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-13").click();

    // Q13 desktop (QRU)
    await expect(page.getByText("Données communes — Molécule polyfonctionnelle et transformations")).toBeVisible();
    await expect(page.getByAltText("Molécule polyfonctionnelle M portant un acide carboxylique, une cétone et une amine, accompagnée de plusieurs transformations simples entre alcool, aldéhyde, acide carboxylique et cétone.")).toBeVisible();

    // Capture 1: Q13 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q13-desktop.png") });

    // Q13 answer: C (index 2)
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q14 desktop (QRM)
    await expect(page.getByText("À propos de la fonction acide carboxylique portée par M et de sa base conjuguée, quelles propositions sont exactes ?")).toBeVisible();

    // Capture 2: Q14 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q14-desktop.png") });

    // Q14 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q15 desktop (QRM)
    await expect(page.getByText("En analysant les quatre transformations du panneau B, quelles propositions sont exactes ?")).toBeVisible();

    // Capture 3: Q15 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q15-desktop.png") });

    // Q15 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q16 (QZONE) avant selection
    await expect(page.getByText("Sur la molécule M du panneau A, sélectionnez l’oxygène du carbonyle de la fonction cétone, et non l’un des oxygènes de la fonction acide carboxylique.")).toBeVisible();

    // Non-duplication test on Q16:
    const polyfunctionalImages = page.locator("img[src*='polyfunctional-reactivity-linked-q13-q16.svg']");
    await expect(polyfunctionalImages).toHaveCount(1);

    // Capture 4: Q16 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q16-avant-selection.png") });

    // Click on target ketone carbonyl oxygen (normalized x=0.2667, y=0.3289)
    const hotspotContainer16 = page.getByTestId("hotspot-question-surface");
    const box16 = await hotspotContainer16.boundingBox();
    if (box16) {
      const targetX = box16.x + box16.width * 0.2667;
      const targetY = box16.y + box16.height * 0.3289;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 5: Q16 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q16-apres-selection.png") });

    // Capture 6: Q16 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q16-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Jump to Q40 (Group 2: Noyau et mitochondrie)
    while (await scrollRightBtn.isVisible()) {
      const q40Tile = page.getByTestId("health-mock-exam-nav-40");
      if (await q40Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-40").click();

    // Q40 desktop (QRM Group 2)
    await expect(page.getByText("Données communes — Noyau et mitochondrie")).toBeVisible();
    await expect(page.getByAltText("Schéma d’une cellule eucaryote montrant un noyau avec nucléole, pores, chromatine et lamines, ainsi qu’une mitochondrie à double membrane avec complexe TOM et ADN mitochondrial.")).toBeVisible();

    // Capture 8: Q40 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q40-desktop.png") });

    // Q40 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q41 desktop (QRU)
    await expect(page.getByText("Dans l’agrandissement de la chromatine, quelle proposition décrit correctement l’unité nucléosomique canonique représentée ?")).toBeVisible();

    // Capture 9: Q41 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q41-desktop.png") });

    // Q41 answer: C (index 2)
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q42 desktop (QROC)
    await expect(page.getByText("À quelle grande famille du cytosquelette appartiennent les lamines représentées sous l’enveloppe nucléaire ?")).toBeVisible();

    // Capture 10: Q42 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q42-desktop.png") });

    // Q42 answer: filaments intermédiaires
    await page.getByTestId("health-mock-exam-short-answer-input").fill("filaments intermédiaires");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q43 (QZONE) avant selection
    await expect(page.getByText("Sur l’agrandissement de la mitochondrie, sélectionnez un segment de la membrane interne mitochondriale.")).toBeVisible();

    // Non-duplication test on Q43:
    const nucleusMitoImages = page.locator("img[src*='nucleus-mitochondrion-linked-q40-q43.svg']");
    await expect(nucleusMitoImages).toHaveCount(1);

    // Capture 11: Q43 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q43-avant-selection.png") });

    // Click on target inner mitochondrial membrane (normalized x=0.7333, y=0.8158)
    const hotspotContainer43 = page.getByTestId("hotspot-question-surface");
    const box43 = await hotspotContainer43.boundingBox();
    if (box43) {
      const targetX = box43.x + box43.width * 0.7333;
      const targetY = box43.y + box43.height * 0.8158;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 12: Q43 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q43-apres-selection.png") });

    // Capture 13: Q43 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q43-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c12\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c12\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q16 in correction view
    const q16CorrTile = page.locator('button[aria-label="Question 16"]');
    if (await q16CorrTile.isVisible()) {
      await q16CorrTile.click();
    } else {
      const corrNextBlockBtn = page.getByRole("button", { name: "Bloc de questions suivant" });
      while (await corrNextBlockBtn.isVisible()) {
        const tile = page.locator('button[aria-label="Question 16"]');
        if (await tile.isVisible()) break;
        await corrNextBlockBtn.click();
      }
      await page.locator('button[aria-label="Question 16"]').click();
    }

    // Capture 7: Q16 correction
    await expect(page.getByText("Question 16", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q16-correction.png") });

    // Navigate to Q43 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Bloc de questions suivant" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.locator('button[aria-label="Question 43"]');
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.locator('button[aria-label="Question 43"]').click();

    // Capture 14: Q43 correction
    await expect(page.getByText("Question 43", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c12-q43-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c12-q13-desktop.png",
      "c12-q14-desktop.png",
      "c12-q15-desktop.png",
      "c12-q16-avant-selection.png",
      "c12-q16-apres-selection.png",
      "c12-q16-mobile-375.png",
      "c12-q16-correction.png",
      "c12-q40-desktop.png",
      "c12-q41-desktop.png",
      "c12-q42-desktop.png",
      "c12-q43-avant-selection.png",
      "c12-q43-apres-selection.png",
      "c12-q43-mobile-375.png",
      "c12-q43-correction.png",
    ];

    if (fs.existsSync(artifactsDir)) {
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
