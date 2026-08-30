import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

async function main() {
  const tmpDir = path.resolve(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const authStatePath = path.resolve(process.cwd(), "playwright/.auth/admin.json");
  const context = await browser.newContext({
    storageState: fs.existsSync(authStatePath) ? authStatePath : undefined,
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  const courseUnitId = "6a2c2b111af36bd83ac27ec2";

  // 1. Evaluations Tab
  console.log("Capturing evaluations tab...");
  await page.goto(`http://localhost:3000/sante/ue/${courseUnitId}?ec=evaluations`);
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: path.join(tmpDir, "evaluations_onglet_desktop.png"), fullPage: true });

  // 2. Open History Modal if available
  const historyBtn = page.getByRole("button", { name: "Historique" }).first();
  if (await historyBtn.isVisible()) {
    console.log("Capturing history modal...");
    await historyBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(tmpDir, "evaluations_historique_modal_desktop.png") });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  }

  // 3. Find latest attempt Bilan URL
  const bilanLink = page.getByRole("link", { name: "Bilan" }).first();
  let bilanUrl = "";
  if (await bilanLink.isVisible()) {
    bilanUrl = (await bilanLink.getAttribute("href")) || "";
  }

  if (bilanUrl) {
    const fullBilanUrl = `http://localhost:3000${bilanUrl}`;
    console.log("Capturing Bilan desktop:", fullBilanUrl);
    await page.goto(fullBilanUrl);
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: path.join(tmpDir, "bilan_page_desktop.png"), fullPage: true });

    // Mobile Bilan
    console.log("Capturing Bilan mobile 375...");
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: path.join(tmpDir, "bilan_page_mobile_375.png"), fullPage: true });

    // 4. Correction Page
    const correctionUrl = `${fullBilanUrl}/correction`;
    console.log("Capturing Correction mobile 375:", correctionUrl);
    await page.goto(correctionUrl);
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: path.join(tmpDir, "correction_page_mobile_375.png"), fullPage: true });

    console.log("Capturing Correction desktop...");
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.screenshot({ path: path.join(tmpDir, "correction_page_desktop.png"), fullPage: true });
  }

  await browser.close();
  console.log("All screenshots captured successfully in tmp/!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
