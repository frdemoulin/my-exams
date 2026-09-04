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

test.describe.serial("Santé — Colle C01 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C01, QRPL badge & non-duplication Q19", async ({ page }) => {
    // 1. Démarrer la colle C01
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" }).first();
    await expect(c01Row).toBeVisible();
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 15000 });

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Assertions sur le bloc d'accroche C01
    await expect(page.getByRole("heading", { name: "C01 — Chimie — Fondamentaux" })).toBeVisible();
    await expect(page.getByText("Chimie générale · Ch. 1 à 4")).toBeVisible();
    await expect(
      page.getByText(
        "Éléments chimiques et classification · Liaisons et électronégativité · Orbitales moléculaires · Forces intermoléculaires"
      )
    ).toBeVisible();
    await expect(page.getByText("20 questions", { exact: true })).toBeVisible();
    await expect(page.getByText("30 min", { exact: true })).toBeVisible();
    await expect(page.getByText("Notation UNESS", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Consignes" })).not.toBeVisible();

    // Capture C01 mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-intro-mobile-375.png") });
    await page.setViewportSize({ width: 1280, height: 800 });

    // Capture 1: Q1 desktop (contexte partagé + nucléides)
    await expect(page.getByText("Données communes aux questions 1 et 2")).toBeVisible();
    await expect(page.getByTestId("shared-question-group-panel").getByText("Isotopes du chlore")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-q01-desktop.png") });

    // Q1 answer A, C, D
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q2 desktop
    await expect(page.getByText("Combien de neutrons contient le noyau de")).toBeVisible();
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-q02-desktop.png") });
    await page.getByTestId("health-mock-exam-short-answer-input").fill("20");

    // Jump to Q17
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    if (await scrollRightBtn.isVisible()) {
      await scrollRightBtn.click();
    }
    const q17Tile = page.getByTestId("health-mock-exam-nav-17");
    await expect(q17Tile).toBeVisible();
    await q17Tile.click();

    // Capture 2: Q17 avec badge + tuile QRPL
    await expect(page.getByText("Données communes aux questions 17 à 19")).toBeVisible();
    await expect(page.getByText(/Classification périodique/)).toBeVisible();
    await expect(page.getByTestId("question-format-badge")).toContainText("QRPL");
    await expect(q17Tile).toContainText("QRPL");
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-q17-desktop.png") });

    // Q17 answer 5 choices
    await expect(page.getByTestId("health-mock-exam-choice-0")).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await page.getByTestId("health-mock-exam-choice-4").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q18
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    // Test de non-duplication du média pour Q19 :
    // Le titre et l'énoncé commun restent visibles, mais l'image du sharedMedia n'est pas rendue deux fois
    await expect(page.getByText("Données communes aux questions 17 à 19")).toBeVisible();
    await expect(page.getByText("Classification périodique", { exact: true })).toBeVisible();
    await expect(page.getByText("La classification périodique simplifiée ci-dessous")).toBeVisible();
    
    // Vérification de la présence unique du SVG interactif QZONE (1 seul SVG/img de classification dans le DOM)
    const classificationImages = page.locator("img[src*='periodic-table-linked-q17-q19.svg']");
    await expect(classificationImages).toHaveCount(1);

    // Capture 3: Q19 desktop sans duplication du tableau
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-q19-desktop.png") });

    // Click on Fluor cell inside SVG (normalized x=0.8875, y=0.4308)
    const hotspotContainer = page.getByTestId("hotspot-question-surface");
    const box = await hotspotContainer.boundingBox();
    if (box) {
      const targetX = box.x + box.width * 0.8875;
      const targetY = box.y + box.height * 0.4308;
      await page.mouse.click(targetX, targetY);
    }

    // Capture 4: Q19 mobile 375 px sans duplication
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-q19-mobile-375.png") });

    // Restore desktop size and capture passation desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-passation-desktop.png") });

    // Finish exam
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\//, { timeout: 15000 });

    // Capture Bilan desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-bilan-desktop.png") });

    // Capture Bilan mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-bilan-mobile-375.png") });
    await page.setViewportSize({ width: 1280, height: 800 });

    // Vérifier l'unicité de l'action Voir la correction détaillée dans l'en-tête
    const seeCorrectionBtn = page.getByRole("link", { name: "Voir la correction détaillée" });
    await expect(seeCorrectionBtn).toHaveCount(1);
    await expect(seeCorrectionBtn).toBeVisible();

    // Go to detailed correction
    await seeCorrectionBtn.click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\/.*\/correction/, { timeout: 15000 });

    // Vérifier la présence et la structure du composant canonique de navigation en correction
    const correctionNav = page.getByTestId("health-mock-exam-correction-nav");
    await expect(correctionNav).toBeVisible();
    await expect(correctionNav.getByText("Questions", { exact: true })).toBeVisible();
    await expect(correctionNav.getByText(/Question 1 sur 20/)).toBeVisible();

    // Vérifier numéro + format sur les tuiles visibles
    await expect(page.getByTestId("health-mock-exam-correction-nav-1").getByText("1")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-correction-nav-1").getByText("QRM")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-correction-nav-2").getByText("2")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-correction-nav-2").getByText("QROC")).toBeVisible();

    // Vérifier la légende de correction
    await expect(correctionNav.getByText("Question en cours")).toBeVisible();
    await expect(correctionNav.getByText("Plein crédit")).toBeVisible();
    await expect(correctionNav.getByText("Crédit partiel")).toBeVisible();
    await expect(correctionNav.getByText("Incorrecte")).toBeVisible();
    await expect(correctionNav.getByText("Non répondue")).toBeVisible();

    // Capture correction desktop
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-correction-desktop.png") });
    await page.screenshot({ path: path.join(process.cwd(), "tmp", "c01-q01-correction-katex-after.png") });

    // Capture correction mobile 375 px
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c01-correction-mobile-375.png") });
    await page.setViewportSize({ width: 1280, height: 800 });

    // Copy screenshots to artifacts directory
    const screenshotFiles = [
      "c01-q01-desktop.png",
      "c01-q02-desktop.png",
      "c01-q17-desktop.png",
      "c01-q19-desktop.png",
      "c01-q19-mobile-375.png",
      "c01-passation-desktop.png",
      "c01-bilan-desktop.png",
      "c01-bilan-mobile-375.png",
      "c01-correction-desktop.png",
      "c01-correction-mobile-375.png",
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
