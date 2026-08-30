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

test.describe.serial("Santé — Colle C04 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C04, QZONE Q24 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C04
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c04Row = page.locator("tr").filter({ hasText: "Des atomes aux molécules organiques" });
    await expect(c04Row).toBeVisible();
    await openHealthColleStartDialog(page, c04Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c04/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Assertions sur le bloc d'accroche C04
    await expect(page.getByRole("heading", { name: "C04 — Chimie — Des atomes aux molécules organiques" })).toBeVisible();
    await expect(page.getByText("Chimie générale + Orga · Ch. 1 à 7")).toBeVisible();
    await expect(
      page.getByText(
        "Chimie générale complète (Ch. 1 à 4) · Nomenclature et fonctions · Isomérie et énantiomérie · Hydrocarbures"
      )
    ).toBeVisible();
    await expect(page.getByText("25 questions", { exact: true })).toBeVisible();
    await expect(page.getByText("37 min 30 s", { exact: true })).toBeVisible();
    await expect(page.getByText("Notation UNESS", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Consignes" })).not.toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-intro-desktop.png") });

    // Jump to Q18 (Group 1: Glycine, alanine et chiralité)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q18Tile = page.getByTestId("health-mock-exam-nav-18");
      if (await q18Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-18").click();

    // Capture 1: Q18 desktop
    await expect(page.getByText("Données communes aux questions 18 à 20")).toBeVisible();
    await expect(page.getByText("Glycine, alanine et chiralité")).toBeVisible();
    await expect(page.getByAltText("Comparaison de la glycine et de deux représentations tridimensionnelles de l’alanine.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q18-desktop.png") });

    // Q18 answer: 4
    await page.getByTestId("health-mock-exam-short-answer-input").fill("4");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q19 desktop
    await expect(page.getByText("À propos des deux représentations A et B de l’alanine")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q19-desktop.png") });

    // Q19 answer: A, B, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q20 desktop
    await expect(page.getByText("D’après le schéma, pourquoi la glycine ne possède-t-elle pas de centre stéréogène classique")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q20-desktop.png") });

    // Q20 answer: Choice E
    await page.getByTestId("health-mock-exam-choice-4").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 4: Q21 desktop (Group 2: Quatre hydrocarbures à six carbones)
    await expect(page.getByText("Données communes aux questions 21 à 24")).toBeVisible();
    await expect(page.getByText("Quatre hydrocarbures à six carbones")).toBeVisible();
    await expect(page.getByAltText("Quatre représentations topologiques d’hydrocarbures à six atomes de carbone, notées A à D.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q21-desktop.png") });

    // Q21 answer: A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 5: Q22 desktop
    await expect(page.getByText("La molécule C comporte une double liaison carbone–carbone")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q22-desktop.png") });

    // Q22 answer: A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 6: Q23 desktop
    await expect(page.getByText("Quel est le nom de la molécule B ?")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q23-desktop.png") });

    // Q23 answer: cyclohexane
    await page.getByTestId("health-mock-exam-short-answer-input").fill("cyclohexane");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q24 avant clic
    await expect(page.getByText("Sur la molécule C, sélectionnez la double liaison carbone–carbone")).toBeVisible();

    // Non-duplication test on Q24:
    const hydroImages = page.locator("img[src*='hydrocarbons-c6-linked-q21-q24.svg']");
    await expect(hydroImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 7: Q24 avant clic
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q24-avant-selection.png") });

    // Click on target C=C double bond in Molecule C (normalized x=0.2333, y=0.7286)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.2333;
      const targetY = box.y + box.height * 0.7286;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 8: Q24 après clic
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q24-apres-selection.png") });

    // Capture 10: Q24 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q24-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c04\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c04\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q24 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.getByTestId("health-mock-exam-correction-nav-24");
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.getByTestId("health-mock-exam-correction-nav-24").click();

    // Capture 9: Q24 correction
    await expect(page.getByText("Question 24", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c04-q24-correction.png") });
    await page.screenshot({ path: path.join(process.cwd(), "tmp", "c04-katex-after.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c04-q18-desktop.png",
      "c04-q19-desktop.png",
      "c04-q20-desktop.png",
      "c04-q21-desktop.png",
      "c04-q22-desktop.png",
      "c04-q23-desktop.png",
      "c04-q24-avant-selection.png",
      "c04-q24-apres-selection.png",
      "c04-q24-correction.png",
      "c04-q24-mobile-375.png",
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

