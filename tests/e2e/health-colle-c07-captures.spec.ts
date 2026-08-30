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

test.describe.serial("Santé — Colle C07 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C07, QROC numériques Q6/Q11, QZONE Q24 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C07
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c07Row = page.locator("tr").filter({ hasText: "Chimie — Fonctions et réactivité" });
    await expect(c07Row).toBeVisible();
    await openHealthColleStartDialog(page, c07Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c07/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Q6 QROC numérique test (Answer: 3)
    await page.getByTestId("health-mock-exam-nav-6").click();
    await expect(page.getByText("Combien de substituants carbonés sont directement liés au carbone portant le groupe hydroxyle dans un alcool tertiaire ?")).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("3");

    // Scroll nav right to find Q11
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q11Tile = page.getByTestId("health-mock-exam-nav-11");
      if (await q11Tile.isVisible()) break;
      await scrollRightBtn.click();
    }

    // Q11 QROC numérique test (Answer: 2)
    await page.getByTestId("health-mock-exam-nav-11").click();
    await expect(page.getByText("Combien d’atomes d’oxygène comporte le groupe fonctionnel d’un ester simple de type R–C(=O)–O–R′ ?")).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("2");

    // Scroll nav right to find Q12
    while (await scrollRightBtn.isVisible()) {
      const q12Tile = page.getByTestId("health-mock-exam-nav-12");
      if (await q12Tile.isVisible()) break;
      await scrollRightBtn.click();
    }

    // Jump to Q12 (Group 1: Réactivité du groupe carbonyle)
    await page.getByTestId("health-mock-exam-nav-12").click();

    // Q12 (Group 1: Réactivité du groupe carbonyle)
    await expect(page.getByText("Données communes aux questions 12 à 14")).toBeVisible();
    await expect(page.getByText("Réactivité du groupe carbonyle")).toBeVisible();
    await expect(page.getByAltText("Trois schémas réactionnels montrant la réduction d’un aldéhyde, l’addition d’un organomagnésien sur une cétone et la carboxylation d’un organomagnésien par le dioxyde de carbone.")).toBeVisible();

    // Capture 1: Q12 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q12-desktop.png") });

    // Q12 answer: Choice C (Un alcool primaire)
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q13 desktop
    await expect(page.getByText("À partir des transformations B et C, sélectionnez exactement les deux affirmations correctes.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q13-desktop.png") });

    // Q13 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q14 desktop
    await expect(page.getByText("En vous appuyant sur les substrats carbonylés A et B et sur leur réactivité")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q14-desktop.png") });

    // Q14 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();

    // Jump to Q24 (Group 2: QZONE Dérivés d'acide et centres réactifs)
    while (await scrollRightBtn.isVisible()) {
      const q24Tile = page.getByTestId("health-mock-exam-nav-24");
      if (await q24Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-24").click();

    // Q24 avant selection
    await expect(page.getByText("Sur la molécule A, sélectionnez le carbone carbonylé de la fonction ester.")).toBeVisible();

    // Non-duplication test on Q24:
    const acylDerivativesImages = page.locator("img[src*='acyl-derivatives-linked-q24-q25.svg']");
    await expect(acylDerivativesImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 4: Q24 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q24-avant-selection.png") });

    // Click on target Carbonyl Carbon of A (normalized x=0.2250, y=0.2857)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.2250;
      const targetY = box.y + box.height * 0.2857;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 5: Q24 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q24-apres-selection.png") });

    // Capture 8: Q24 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q24-mobile-375.png") });

    // Restore desktop size and go to Q25
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q25 (Group 2: Dérivés d'acide QRM)
    await expect(page.getByText("En vous appuyant sur les structures A à D, quelles propositions permettent de prévoir correctement leur réactivité ?")).toBeVisible();

    // Capture 7: Q25 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q25-desktop.png") });

    // Q25 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();

    // Capture 9: Q25 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q25-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c07\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c07\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q24 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.getByTestId("health-mock-exam-correction-nav-24");
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.getByTestId("health-mock-exam-correction-nav-24").click();

    // Capture 6: Q24 correction
    await expect(page.getByText("Question 24", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c07-q24-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c07-q12-desktop.png",
      "c07-q13-desktop.png",
      "c07-q14-desktop.png",
      "c07-q24-avant-selection.png",
      "c07-q24-apres-selection.png",
      "c07-q24-correction.png",
      "c07-q25-desktop.png",
      "c07-q24-mobile-375.png",
      "c07-q25-mobile-375.png",
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
