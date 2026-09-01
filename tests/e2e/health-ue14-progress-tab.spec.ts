import { test, expect, type Page } from "@playwright/test";

const appBaseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000";
const courseUnitId = "6a2c2b111af36bd83ac27ec2";

async function expectNoHorizontalOverflow(page: Page) {
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  expect(hasOverflow).toBe(false);
}

test.describe("Santé — Onglet Progression UE14", () => {
  test("un étudiant peut consulter le tableau de bord de progression sur desktop et mobile", async ({
    page,
  }) => {
    // 1. Navigation directe via URL ?ec=progression
    await page.goto(`${appBaseUrl}/sante/ue/${courseUnitId}?ec=progression`);

    const progressTab = page.getByRole("tab", { name: /Progression/i });
    await expect(progressTab).toBeVisible();

    // 2. Titre et vue d'ensemble
    await expect(page.getByRole("heading", { name: /Vue d’ensemble/i })).toBeVisible();

    // Vérifier l'absence d'un score moyen global UE
    await expect(page.getByText(/Score global UE/i)).toHaveCount(0);

    // 3. 3 KPI d'avancement
    await expect(page.getByTestId("kpi-training-count")).toBeVisible();
    await expect(page.getByTestId("kpi-colles-count")).toBeVisible();
    await expect(page.getByTestId("kpi-mock-exams-count")).toBeVisible();

    // 4. Section Entraînement par EC
    await expect(page.getByRole("heading", { name: "Entraînement" })).toBeVisible();
    await expect(page.getByTestId("progress-ec-chimie")).toBeVisible();
    await expect(page.getByTestId("progress-ec-biochimie")).toBeVisible();
    await expect(page.getByTestId("progress-ec-biologie cellulaire")).toBeVisible();

    // 5. Section Colles & Section EB
    await expect(page.getByRole("heading", { name: "Colles" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Examens blancs" })).toBeVisible();

    // Capture d'écran Desktop
    await page.screenshot({
      path: "tmp/2026-09-01-progress-tab-desktop.png",
      fullPage: true,
    });

    // 6. Test Responsive Mobile (375 px)
    await page.setViewportSize({ width: 375, height: 812 });
    await expectNoHorizontalOverflow(page);

    await expect(page.getByTestId("progress-ec-chimie")).toBeVisible();

    // Capture d'écran Mobile
    await page.screenshot({
      path: "tmp/2026-09-01-progress-tab-mobile.png",
      fullPage: true,
    });
  });
});
