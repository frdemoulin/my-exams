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

test.describe.serial("Santé — Colle C03 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C03, QZONE Q19 et non-duplication du média", async ({ page }) => {
    // 1. Démarrer la colle C03
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c03Row = page.locator("tr").filter({ hasText: "Architecture cellulaire" });
    await expect(c03Row).toBeVisible();
    await openHealthColleStartDialog(page, c03Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c03/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Capture 1: Q1 desktop (contexte partagé étude cellules épithéliales)
    await expect(page.getByText("Données communes aux questions 1 à 3")).toBeVisible();
    await expect(page.getByText("Étude de cellules épithéliales")).toBeVisible();
    await expect(page.getByText("Un laboratoire étudie des cellules épithéliales obtenues après dissociation")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q01-desktop.png") });

    // Q1 answer A, B, C
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 2: Q2 desktop (QROC culture secondaire)
    await expect(page.getByText("Après confluence, ces cellules sont décollées puis repiquées une première fois")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q02-desktop.png") });
    await page.getByTestId("health-mock-exam-short-answer-input").fill("culture secondaire");
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 3: Q3 desktop (QRU jonctions serrées)
    await expect(page.getByText("Après différenciation, les cellules présentent des domaines membranaires apical et basolatéral distincts")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q03-desktop.png") });
    await page.getByTestId("health-mock-exam-choice-0").click(); // Choice A

    // Jump to Q17
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    if (await scrollRightBtn.isVisible()) {
      await scrollRightBtn.click();
    }
    const q17Tile = page.getByTestId("health-mock-exam-nav-17");
    await q17Tile.click();

    // Capture 4: Q17 desktop
    await expect(page.getByText("Données communes aux questions 17 à 19")).toBeVisible();
    await expect(page.getByTestId("shared-question-group-panel").getByText("Entérocyte polarisé")).toBeVisible();
    await expect(page.getByAltText("Schéma d’un entérocyte polarisé avec microvillosités apicales, membranes apicale et basolatérale, jonction apico-latérale et agrandissement d’une microvillosité.")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q17-desktop.png") });

    // Q17 answer A, B
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Capture 5: Q18 desktop
    await expect(page.getByText("Cet entérocyte absorbe du glucose depuis la lumière intestinale")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q18-desktop.png") });

    // Q18 answer A, B, C, E
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-4").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q19 avant sélection
    await expect(page.getByText("Sur l’agrandissement d’une microvillosité apicale, sélectionnez le faisceau de filaments d’actine")).toBeVisible();

    // Non-duplication test on Q19:
    const enterocyteImages = page.locator("img[src*='enterocyte-linked-q17-q19.svg']");
    await expect(enterocyteImages).toHaveCount(1); // Only 1 interactive QZONE SVG

    // Capture 6: Q19 avant sélection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q19-avant-selection.png") });

    // Click on target actin bundle center inside microvillus inset (normalized x=0.7708, y=0.5143)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.7708;
      const targetY = box.y + box.height * 0.5143;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 7: Q19 après sélection
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q19-apres-selection.png") });

    // Capture 9: Q19 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q19-mobile-375.png") });

    // Restore desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c03\/resultats\//, { timeout: 15000 });

    // Go to detailed correction
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c03\/resultats\/.*\/correction/, { timeout: 15000 });

    // Navigate to Q19 in correction view
    const corrNextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await corrNextBlockBtn.isVisible()) {
      const tile = page.getByTestId("health-mock-exam-correction-nav-19");
      if (await tile.isVisible()) break;
      await corrNextBlockBtn.click();
    }
    await page.getByTestId("health-mock-exam-correction-nav-19").click();

    // Capture 8: Q19 correction
    await expect(page.getByText("Question 19", { exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c03-q19-correction.png") });
    await page.screenshot({ path: path.join(process.cwd(), "tmp", "c03-katex-after.png") });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c03-q01-desktop.png",
      "c03-q02-desktop.png",
      "c03-q03-desktop.png",
      "c03-q17-desktop.png",
      "c03-q18-desktop.png",
      "c03-q19-avant-selection.png",
      "c03-q19-apres-selection.png",
      "c03-q19-correction.png",
      "c03-q19-mobile-375.png",
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

