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

test.describe.serial("Santé — Colle C02 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C02, QZONE Q19 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C02
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c02Row = page.locator("tr").filter({ hasText: "Biochimie — Glucides" });
    await expect(c02Row).toBeVisible();
    await openHealthColleStartDialog(page, c02Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c02/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Capture 1: Q1 desktop (contexte partagé D-glucose)
    await expect(page.getByText("Données communes aux questions 1 à 3")).toBeVisible();
    await expect(page.getByTestId("shared-question-group-panel").getByText("Autour du D-glucose")).toBeVisible();
    await expect(page.getByAltText("Comparaison des projections de Fischer du D-mannose, du D-glucose et du D-galactose, avec deux transformations du D-glucose conduisant aux produits A et B.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q01-desktop.png") });

    // Q1 answer A, B, E
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-4").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q2 desktop (QROC sorbitol)
    await expect(page.getByText("Quel est le nom du produit A obtenu par réduction")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q02-desktop.png") });
    await page.getByTestId("health-mock-exam-short-answer-input").fill("sorbitol");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q3 desktop (QRU produit B - glucuronique)
    await expect(page.getByText("Le produit B résulte de l’oxydation sélective de l’alcool primaire")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q03-desktop.png") });
    await page.getByTestId("health-mock-exam-choice-1").click(); // Choice B

    // Jump to Q17
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    if (await scrollRightBtn.isVisible()) {
      await scrollRightBtn.click();
    }
    const q17Tile = page.getByTestId("health-mock-exam-nav-17");
    await q17Tile.click();

    // Capture 4: Q17 desktop
    await expect(page.getByText("Données communes aux questions 17 à 19")).toBeVisible();
    await expect(page.getByText("Diholosides et pouvoir réducteur")).toBeVisible();
    await expect(page.getByAltText("Représentations cycliques simplifiées du lactose et du saccharose montrant leurs deux résidus osidiques et leur liaison glycosidique.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q17-desktop.png") });

    // Q17 answer A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 5: Q18 desktop
    await expect(page.getByText("En vous appuyant sur les représentations du lactose et du saccharose")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q18-desktop.png") });

    // Q18 answer A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q19 avant sélection
    await expect(page.getByText("Sur la représentation du lactose, sélectionnez le carbone anomérique du résidu de glucose resté libre")).toBeVisible();
    
    // Non-duplication test on Q19:
    // Group title and statement are visible, but the static image sharedMedia is NOT rendered twice
    const diholosideImages = page.locator("img[src*='diholosides-reducing-linked-q17-q19.svg']");
    await expect(diholosideImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 6: Q19 avant sélection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q19-avant-selection.png") });

    // Click on target free C1 carbon of glucose in lactose (normalized x=0.4417, y=0.5231)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.4417;
      const targetY = box.y + box.height * 0.5231;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 7: Q19 après sélection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q19-apres-selection.png") });

    // Capture 9: Q19 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q19-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c02\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c02\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q19 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Bloc de questions suivant" });
    if (await corrNextBlockBtn.isVisible()) {
      await corrNextBlockBtn.click();
    }
    const q19CorrTile = page.locator('button[aria-label="Question 19"]');
    await q19CorrTile.click();

    // Capture 8: Q19 correction
    await expect(page.getByText("Question 19", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c02-q19-correction.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c02-q01-desktop.png",
      "c02-q02-desktop.png",
      "c02-q03-desktop.png",
      "c02-q17-desktop.png",
      "c02-q18-desktop.png",
      "c02-q19-avant-selection.png",
      "c02-q19-apres-selection.png",
      "c02-q19-correction.png",
      "c02-q19-mobile-375.png",
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

