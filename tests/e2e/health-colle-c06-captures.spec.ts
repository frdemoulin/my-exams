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

test.describe.serial("Santé — Colle C06 Captures & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsTmpDir)) {
      fs.mkdirSync(screenshotsTmpDir, { recursive: true });
    }
  });

  test("recette visuelle complète C06 et rendu TeX", async ({ page }) => {
    // 1. Démarrer la colle C06
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);
    const c06Row = page.locator("tr").filter({ hasText: "Biologie cellulaire — Trafic et compartiments" });
    await expect(c06Row).toBeVisible();
    await openHealthColleStartDialog(page, c06Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c06/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Set viewport 1280px for desktop captures
    await page.setViewportSize({ width: 1280, height: 800 });

    // Navigate to Q04 (COPII / COPI)
    const scrollRightBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    while (await scrollRightBtn.isVisible()) {
      const q4Tile = page.getByTestId("health-mock-exam-nav-4");
      if (await q4Tile.isVisible()) break;
      await scrollRightBtn.click();
    }
    await page.getByTestId("health-mock-exam-nav-4").click();
    await expect(page.getByText("manteau vésiculaire")).toBeVisible();

    // Capture TeX after screenshot
    await page.screenshot({ path: path.join(process.cwd(), "tmp", "c06-katex-after.png") });
    await page.screenshot({ path: path.join(screenshotsTmpDir, "c06-q04-desktop.png") });
  });
});
