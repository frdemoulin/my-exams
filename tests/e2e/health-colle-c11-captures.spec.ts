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

test.describe.serial("Santé — Colle C11 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C11, QZONE Q29 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C11
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c11Row = page.getByRole("row", { name: /11.*Biochimie/ });
    await expect(c11Row).toBeVisible();
    await openHealthColleStartDialog(page, c11Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c11/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Assertions sur le bloc d'accroche C11
    await expect(page.getByRole("heading", { name: "C11 — Biochimie — Colle cumulative EC" })).toBeVisible();
    await expect(page.getByText("Toute la Biochimie · cumulative")).toBeVisible();
    await expect(page.getByText("Glucides · Lipides · Protéines · Enzymologie (15 chapitres)")).toBeVisible();
    await expect(page.getByText("30 questions", { exact: true })).toBeVisible();
    await expect(page.getByText("45 min", { exact: true })).toBeVisible();
    await expect(page.getByText("Notation UNESS", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Consignes" })).not.toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-intro-desktop.png") });

    // Jump to Q5 (Group 1: Lipides membranaires et médiateurs)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q5Tile = page.getByTestId("health-mock-exam-nav-5");
      if (await q5Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-5").click();

    // Q5 desktop
    await expect(page.getByText("Données communes aux questions 5 à 8")).toBeVisible();
    await expect(page.getByText("Lipides membranaires et médiateurs")).toBeVisible();
    await expect(page.getByAltText("Schéma intégratif montrant deux acides gras notés L et A, un glycérophospholipide P portant A en sn-2, une structure de céramide C et une structure de cholestérol S accompagnée de sa forme estérifiée.")).toBeVisible();

    // Capture 1: Q5 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q05-desktop.png") });

    // Q5 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q6 desktop (QROC)
    await expect(page.getByText("Quel est le nom générique de la classe lipidique à laquelle appartient la molécule P, hydrolysée en position sn-2 par la phospholipase A2 ?")).toBeVisible();
    
    // Capture 2: Q6 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q06-desktop.png") });

    // Q6 answer: glycérophospholipide
    await page.getByTestId("health-mock-exam-short-answer-input").fill("glycérophospholipide");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q7 desktop (QRU)
    await expect(page.getByText("Quelle proposition décrit correctement la molécule C représentée sur le schéma ?")).toBeVisible();

    // Capture 3: Q7 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q07-desktop.png") });

    // Q7 answer: B (position B)
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q8 desktop (QRP)
    await expect(page.getByText("En comparant S et S’, sélectionnez exactement les deux propositions correctes.")).toBeVisible();

    // Capture 4: Q8 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q08-desktop.png") });

    // Q8 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();

    // Jump to Q26 (Group 2: Cinétique enzymatique expérimentale)
    while (await scrollRightBtn.isVisible()) {
      const q26Tile = page.getByTestId("health-mock-exam-nav-26");
      if (await q26Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-26").click();

    // Q26 (Group 2 QRM)
    await expect(page.getByText("Données communes aux questions 26 à 29")).toBeVisible();
    await expect(page.getByText("Cinétique enzymatique expérimentale")).toBeVisible();
    await expect(page.getByAltText("Étude de cinétique enzymatique avec une courbe d’absorbance en fonction du temps et plusieurs droites de Lineweaver-Burk obtenues avec ou sans inhibiteurs.")).toBeVisible();

    // Capture 5: Q26 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q26-desktop.png") });

    // Q26 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q27 desktop
    await expect(page.getByText("Le panneau A correspond à un suivi spectrophotométrique de la réaction. Quelles propositions sont exactes ?")).toBeVisible();

    // Capture 6: Q27 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q27-desktop.png") });

    // Q27 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q28 desktop
    await expect(page.getByText("En comparant les droites X, Y et Z au témoin du panneau B, quelles propositions sont exactes ?")).toBeVisible();

    // Capture 7: Q28 desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q28-desktop.png") });

    // Q28 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q29 (QZONE) avant selection
    await expect(page.getByText("Sur le panneau B, sélectionnez sur l’axe des abscisses l’intersection de la droite Témoin correspondant à −1/Km.")).toBeVisible();

    // Non-duplication test on Q29:
    const enzymeKineticsImages = page.locator("img[src*='enzyme-kinetics-linked-q26-q29.svg']");
    await expect(enzymeKineticsImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 8: Q29 avant selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q29-avant-selection.png") });

    // Click on target Témoin x-intercept (normalized x=0.6417, y=0.6842)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.6417;
      const targetY = box.y + box.height * 0.6842;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 9: Q29 après selection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q29-apres-selection.png") });

    // Capture 11: Q29 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q29-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c11\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c11\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q29 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.getByTestId("health-mock-exam-correction-nav-29");
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.getByTestId("health-mock-exam-correction-nav-29").click();

    // Capture 10: Q29 correction
    await expect(page.getByText("Question 29", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c11-q29-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c11-q05-desktop.png",
      "c11-q06-desktop.png",
      "c11-q07-desktop.png",
      "c11-q08-desktop.png",
      "c11-q26-desktop.png",
      "c11-q27-desktop.png",
      "c11-q28-desktop.png",
      "c11-q29-avant-selection.png",
      "c11-q29-apres-selection.png",
      "c11-q29-correction.png",
      "c11-q29-mobile-375.png",
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

