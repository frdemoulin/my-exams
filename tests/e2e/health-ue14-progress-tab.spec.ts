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
  test("cycle complet : navigation inter-onglets, popover d'aide, accès direct, dark mode et responsive 375px", async ({
    page,
  }) => {
    // 1. Navigation initiale sur l'UE (onglet par défaut: Chimie)
    await page.goto(`${appBaseUrl}/sante/ue/${courseUnitId}`);

    const chimieTab = page.getByRole("tab", { name: /^Chimie$/i });
    const progressionTab = page.getByRole("tab", { name: /Progression/i });
    const evaluationsTab = page.getByRole("tab", { name: /Évaluations/i });

    await expect(chimieTab).toBeVisible();
    await expect(progressionTab).toBeVisible();
    await expect(evaluationsTab).toBeVisible();

    // L'aide aux évaluations ne doit pas être visible sur l'onglet Chimie
    await expect(page.getByRole("button", { name: "Aide aux évaluations" })).toHaveCount(0);

    // 2. Clic utilisateur sur l'onglet Progression
    await progressionTab.click();
    await expect(page.getByRole("heading", { name: /Vue d’ensemble — Progression UE/i })).toBeVisible();

    // L'aide aux évaluations doit rester absente dans l'onglet Progression
    await expect(page.getByRole("button", { name: "Aide aux évaluations" })).toHaveCount(0);

    // 3. Clic vers l'onglet Évaluations
    await evaluationsTab.click();
    await expect(page.getByRole("heading", { name: "Colles", exact: true })).toBeVisible();

    // L'aide aux évaluations doit être visible UNIQUEMENT sur l'onglet Évaluations
    const helpButton = page.getByRole("button", { name: "Aide aux évaluations" });
    await expect(helpButton).toBeVisible();

    // 4. Retour vers l'onglet Progression
    await progressionTab.click();
    await expect(page.getByRole("heading", { name: /Vue d’ensemble — Progression UE/i })).toBeVisible();
    await expect(page.getByRole("button", { name: "Aide aux évaluations" })).toHaveCount(0);

    // 5. Authentification test et accès direct via URL ?ec=progression
    if (process.env.E2E_TEST_LOGIN_SECRET) {
      await page.request.post(`${appBaseUrl}/api/test-login`, {
        headers: {
          "x-e2e-test-login": process.env.E2E_TEST_LOGIN_SECRET,
          "Content-Type": "application/json",
        },
        data: { email: "admin-e2e@example.com" },
      });
    }

    await page.goto(`${appBaseUrl}/sante/ue/${courseUnitId}?ec=progression`);
    await expect(page.getByRole("heading", { name: /Vue d’ensemble — Progression UE/i })).toBeVisible();

    // Vérifier l'absence d'un score moyen global UE
    await expect(page.getByText(/Score global UE/i)).toHaveCount(0);

    // 3 KPI d'avancement
    await expect(page.getByTestId("kpi-training-count")).toBeVisible();
    await expect(page.getByTestId("kpi-colles-count")).toBeVisible();
    await expect(page.getByTestId("kpi-mock-exams-count")).toBeVisible();

    // Section Progression des quiz avec les 3 EC
    await expect(page.getByRole("heading", { name: "Progression des quiz" })).toBeVisible();
    await expect(page.getByTestId("progress-ec-chimie")).toBeVisible();
    await expect(page.getByTestId("progress-ec-biochimie")).toBeVisible();
    await expect(page.getByTestId("progress-ec-biologie cellulaire")).toBeVisible();

    // Section Maîtrise par thème
    await expect(page.getByRole("heading", { name: "Maîtrise par thème" })).toBeVisible();
    await expect(page.getByTestId("health-theme-progress-section")).toBeVisible();
    await expect(page.getByTestId("theme-filter-all")).toBeVisible();

    // Tester les filtres EC de maîtrise par thème
    const chimieThemeFilter = page.getByRole("button", { name: /^Chimie$/i });
    if (await chimieThemeFilter.count() > 0) {
      await chimieThemeFilter.first().click();
    }
    const allThemeFilter = page.getByTestId("theme-filter-all");
    await allThemeFilter.click();

    // Section Colles & Section EB
    await expect(page.getByRole("heading", { name: "Colles", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Examens blancs", exact: true })).toBeVisible();

    // Capture d'écran Desktop (Light Mode)
    await page.screenshot({
      path: "tmp/2026-09-02-progress-tab-desktop.png",
      fullPage: true,
    });

    // 6. Test Dark Mode réel
    await page.evaluate(() => {
      document.documentElement.classList.add("dark");
    });
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expect(page.getByRole("heading", { name: /Vue d’ensemble — Progression UE/i })).toBeVisible();
    await expect(page.getByTestId("progress-ec-chimie")).toBeVisible();
    await expect(page.getByTestId("health-theme-progress-section")).toBeVisible();

    // Capture d'écran Desktop (Dark Mode)
    await page.screenshot({
      path: "tmp/2026-09-02-progress-tab-dark.png",
      fullPage: true,
    });

    // Restaurer le mode clair pour le test mobile
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
    });

    // 7. Test Responsive Mobile (375 px)
    await page.setViewportSize({ width: 375, height: 812 });
    await expectNoHorizontalOverflow(page);
    await expect(page.getByTestId("progress-ec-chimie")).toBeVisible();
    await expect(page.getByTestId("health-theme-progress-section")).toBeVisible();

    // Capture d'écran Mobile
    await page.screenshot({
      path: "tmp/2026-09-02-progress-tab-mobile.png",
      fullPage: true,
    });
  });
});
