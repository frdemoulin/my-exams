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

test.describe.serial("Santé — Colle C10 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C10, QZONE Q29 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C10
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c10Row = page.getByRole("row", { name: /10.*Chimie/ });
    await expect(c10Row).toBeVisible();
    await openHealthColleStartDialog(page, c10Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c10/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Jump to Q10 (Group 1: Alcènes et stéréochimie)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q10Tile = page.getByTestId("health-mock-exam-nav-10");
      if (await q10Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-10").click();

    // Q10 desktop
    await expect(page.getByText("Données communes — Alcènes et stéréochimie")).toBeVisible();
    await expect(page.getByAltText("Deux représentations géométriques A et B du but-2-ène montrant des dispositions différentes des groupes méthyle autour de la double liaison.")).toBeVisible();

    // Capture 1: Q10 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q10-desktop.png") });

    // Q10 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q11 desktop (QROC)
    await expect(page.getByText("Quel est l’état d’hybridation classique de chacun des deux carbones engagés dans la double liaison C=C des molécules A et B ?")).toBeVisible();
    
    // Capture 2: Q11 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q11-desktop.png") });

    // Q11 answer: sp2
    await page.getByTestId("health-mock-exam-short-answer-input").fill("sp2");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q12 desktop (QRU)
    await expect(page.getByText("Dans la molécule A, les substituants de plus haute priorité CIP sur chacun des deux carbones de la double liaison sont situés du même côté. Quel descripteur s’applique ?")).toBeVisible();

    // Capture 3: Q12 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q12-desktop.png") });

    // Q12 answer: C (position C)
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q13 desktop (QRP)
    await expect(page.getByText("À propos des transformations possibles de la double liaison de la molécule A, sélectionnez exactement les deux propositions correctes.")).toBeVisible();

    // Capture 4: Q13 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q13-desktop.png") });

    // Q13 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();

    // Jump to Q27 (Group 2: Réactivité et stéréochimie intégrées)
    while (await scrollRightBtn.isVisible()) {
      const q27Tile = page.getByTestId("health-mock-exam-nav-27");
      if (await q27Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-27").click();

    // Q27 (Group 2 QRM)
    await expect(page.getByText("Données communes — Réactivité et stéréochimie intégrées")).toBeVisible();
    await expect(page.getByAltText("Schéma de transformations reliant propan-1-ol, propanal et acide propanoïque, addition d’un organomagnésien sur la propanone, et structure d’une molécule polyfonctionnelle chirale F.")).toBeVisible();

    // Capture 5: Q27 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q27-desktop.png") });

    // Q27 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q28 desktop
    await expect(page.getByText("À partir des transformations représentées, quelles propositions sont exactes ?")).toBeVisible();

    // Capture 6: Q28 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q28-desktop.png") });

    // Q28 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q29 (QZONE) avant selection
    await expect(page.getByText("Sur la molécule F, sélectionnez le carbone stéréogène.")).toBeVisible();

    // Non-duplication test on Q29:
    const integratedReactivityImages = page.locator("img[src*='integrated-reactivity-linked-q27-q30.svg']");
    await expect(integratedReactivityImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 7: Q29 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q29-avant-selection.png") });

    // Click on target stereogenic carbon of F (normalized x=0.8167, y=0.5395)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.8167;
      const targetY = box.y + box.height * 0.5395;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 8: Q29 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q29-apres-selection.png") });

    // Capture 11: Q29 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q29-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 10: Q30 desktop
    await expect(page.getByText("En analysant la molécule F et les règles de stéréochimie et de nomenclature utilisées dans cette EC, quelles propositions sont exactes ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q30-desktop.png") });

    // Q30 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c10\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c10\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q29 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Bloc de questions suivant" });
    while (await corrNextBlockBtn.isVisible()) {
      const q29CorrTile = page.locator('button[aria-label="Question 29"]');
      if (await q29CorrTile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    const q29CorrTile = page.locator('button[aria-label="Question 29"]');
    await q29CorrTile.click();

    // Capture 9: Q29 correction
    await expect(page.getByText("Question 29", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c10-q29-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c10-q10-desktop.png",
      "c10-q11-desktop.png",
      "c10-q12-desktop.png",
      "c10-q13-desktop.png",
      "c10-q27-desktop.png",
      "c10-q28-desktop.png",
      "c10-q29-avant-selection.png",
      "c10-q29-apres-selection.png",
      "c10-q29-correction.png",
      "c10-q30-desktop.png",
      "c10-q29-mobile-375.png",
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
