import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.resolve(process.cwd(), "tmp/screenshots");
const artifactDir = "/Users/frdemoulin/.gemini/antigravity-ide/brain/7187ab89-d040-41f0-bd84-108794941765";

test.beforeAll(() => {
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }
});

function copyToArtifact(fileName: string) {
  const src = path.join(screenshotDir, fileName);
  const dest = path.join(artifactDir, fileName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

test.describe("Captures d'écran — Écran de connexion", () => {
  test("1. Login desktop 1280x800", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/log-in");
    await page.waitForLoadState("networkidle");

    await expect(
      page.getByRole("heading", { name: "Connexion à My Exams" })
    ).toBeVisible();
    await expect(page.getByText("Pourquoi se connecter ?")).toBeVisible();
    await expect(
      page.getByText("un compte My Exams gratuit est automatiquement créé")
    ).toBeVisible();

    const desktopPath = path.join(screenshotDir, "login-desktop-1280x800.png");
    await page.screenshot({ path: desktopPath, fullPage: true });
    copyToArtifact("login-desktop-1280x800.png");
  });

  test("2. Login mobile 375x667", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/log-in");
    await page.waitForLoadState("networkidle");

    await expect(
      page.getByRole("heading", { name: "Connexion à My Exams" })
    ).toBeVisible();
    await expect(page.getByText("Pourquoi se connecter ?")).toBeVisible();
    await expect(
      page.getByText("un compte My Exams gratuit est automatiquement créé")
    ).toBeVisible();

    const mobilePath = path.join(screenshotDir, "login-mobile-375x667.png");
    await page.screenshot({ path: mobilePath, fullPage: true });
    copyToArtifact("login-mobile-375x667.png");
  });
});
