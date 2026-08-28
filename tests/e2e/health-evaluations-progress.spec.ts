import { test, expect, type Locator } from "@playwright/test";

import { openHealthColleStartDialog } from "./health-colle-actions";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

async function expectNoHorizontalOverflow(locator: Locator) {
  const dimensions = await locator.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

async function expectNoPageHorizontalOverflow(page: import("@playwright/test").Page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  expect(dimensions.bodyScrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

async function expectInsideViewport(locator: Locator, viewportWidth: number) {
  const box = await locator.boundingBox();

  expect(box).not.toBeNull();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(viewportWidth);
}

test.describe("Santé — Bilan pédagogique, Correction détaillée et Suivi des évaluations", () => {
  test.use({ storageState: authFile });

  test("cycle complet : passation colle, bilan pédagogique, correction détaillée et suivi onglet évaluations", async ({
    page,
  }) => {
    const courseUnitId = "6a2c2b111af36bd83ac27ec2";

    // 1. Visiter l'onglet Évaluations
    await page.goto(`/sante/ue/${courseUnitId}?ec=evaluations`);
    await page.waitForLoadState("networkidle");

    // Vérifier la présence du bloc Colles et de la colle C01
    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(c01Row).toBeVisible();

    // 2. Démarrer la colle C01
    await openHealthColleStartDialog(page, c01Row);
    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();
    await page.waitForSelector('[data-testid="health-mock-exam-taking"]');

    // Répondre à la Q1
    const choicesQ1 = page.locator("button.w-full.text-left");
    if ((await choicesQ1.count()) > 1) {
      await choicesQ1.nth(0).click();
      await choicesQ1.nth(1).click();
    }

    // Terminer la colle
    await page.getByRole("button", { name: "Terminer la colle" }).click();
    const modal = page.getByRole("alertdialog");
    await modal.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    // 3. Arrivée sur la Page 1 : Bilan
    await page.waitForURL(new RegExp(`/sante/ue/${courseUnitId}/colles/c01/resultats/[a-f0-9]+$`));
    await page.waitForSelector('[data-testid="health-mock-exam-results"]');

    // Vérifier les 4 métriques du bilan
    await expect(page.getByText("BILAN DE LA COLLE")).toBeVisible();
    await expect(page.getByText("Plein crédit", { exact: true })).toBeVisible();
    await expect(page.getByText("À revoir", { exact: true })).toBeVisible();
    await expect(page.getByText("Bilan pédagogique")).toBeVisible();

    // Vérifier le bouton "Voir la correction détaillée"
    const seeCorrectionBtn = page.getByRole("link", { name: "Voir la correction détaillée" });
    await expect(seeCorrectionBtn).toBeVisible();
    await seeCorrectionBtn.click();

    // 4. Arrivée sur la Page 2 : Correction détaillée
    await page.waitForURL(new RegExp(`/sante/ue/${courseUnitId}/colles/c01/resultats/[a-f0-9]+/correction`));
    await page.waitForSelector('[data-testid="health-mock-exam-correction"]');

    // Vérifier les filtres de correction
    await expect(page.getByRole("button", { name: /Toutes \(\d+\)/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /À revoir \(\d+\)/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Plein crédit \(\d+\)/ })).toBeVisible();

    // Vérifier la navigation question par question
    await expect(page.getByText("Question 1 sur")).toBeVisible();
    await expect(page.getByRole("button", { name: "Question suivante" })).toBeVisible();
    await page.getByRole("button", { name: "Question suivante" }).click();
    await expect(page.getByText("Question 2 sur")).toBeVisible();

    // 5. Retour aux évaluations
    await page.goto(`/sante/ue/${courseUnitId}?ec=evaluations`);
    await page.waitForLoadState("networkidle");

    // Vérifier que la colle C01 a le statut réalisé
    const updatedC01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(updatedC01Row).toBeVisible();
    await expect(updatedC01Row.getByText("Dernière :")).toBeVisible();

    const actionCell = updatedC01Row.locator("td").nth(3);
    await expect(actionCell.getByRole("link", { name: "Bilan" })).toBeVisible();
    await expect(actionCell.getByRole("link", { name: "Correction" })).toHaveCount(0);
    await expect(actionCell.getByRole("button", { name: "Recommencer" })).toHaveCount(0);
    await expect(actionCell.getByRole("button", { name: "Historique" })).toHaveCount(0);

    const overflowMenuButton = actionCell.getByRole("button", {
      name: "Autres actions pour cette colle C01",
    });
    await expect(overflowMenuButton).toBeVisible();
    await overflowMenuButton.click();
    await expect(page.getByRole("menuitem", { name: "Voir la correction" })).toBeVisible();
    const restartMenuItem = page.getByRole("menuitem", { name: "Recommencer la colle" });
    await expect(restartMenuItem).toBeVisible();
    await expect(page.getByRole("menuitem", { name: "Bilan" })).toHaveCount(0);
    await restartMenuItem.click();

    const restartDialog = page.getByRole("dialog");
    await restartDialog.getByRole("button", { name: "Démarrer la colle" }).click();
    await page.waitForSelector('[data-testid="health-mock-exam-taking"]');
    await page.getByRole("button", { name: "Terminer la colle" }).click();
    await page
      .getByRole("alertdialog")
      .getByRole("button", { name: "Terminer et voir les résultats" })
      .click();
    await page.waitForURL(new RegExp(`/sante/ue/${courseUnitId}/colles/c01/resultats/[a-f0-9]+$`));

    await page.goto(`/sante/ue/${courseUnitId}?ec=evaluations`);
    await page.waitForLoadState("networkidle");
    const historyC01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    const attemptsButton = historyC01Row.getByRole("button", {
      name: /Voir les \d+ tentatives de C01/,
    });
    await expect(attemptsButton).toBeVisible();
    await attemptsButton.click();
    await expect(page.getByRole("dialog", { name: "Historique des tentatives" })).toBeVisible();
    await page.getByRole("button", { name: "Fermer" }).click();

    const desktopActionCell = historyC01Row.getByTestId("health-colle-actions-c01-desktop");
    await expect(page.getByRole("columnheader", { name: "ACTION" })).toBeVisible();
    await expect(desktopActionCell.getByRole("link", { name: "Bilan" })).toBeVisible();
    await expect(
      desktopActionCell.getByRole("button", { name: "Autres actions pour cette colle C01" }),
    ).toBeVisible();
    await expect(historyC01Row.getByTestId("health-colle-actions-c01-mobile")).toBeHidden();

    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`/sante/ue/${courseUnitId}?ec=evaluations`);
    await page.waitForLoadState("networkidle");
    await expectNoHorizontalOverflow(page.getByTestId("health-colles-table-scroll"));
    await expect(page.getByRole("columnheader", { name: "ACTION" })).toBeVisible();
    const tabletC01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(
      tabletC01Row.getByTestId("health-colle-actions-c01-desktop").getByRole("link", {
        name: "Bilan",
      }),
    ).toBeVisible();
    await expect(tabletC01Row.getByTestId("health-colle-actions-c01-mobile")).toBeHidden();

    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`/sante/ue/${courseUnitId}?ec=evaluations`);
    await page.waitForLoadState("networkidle");
    await expectNoHorizontalOverflow(page.getByTestId("health-colles-table-scroll"));
    await expectNoPageHorizontalOverflow(page);
    await expect(page.getByRole("columnheader", { name: "ACTION" })).toHaveCount(0);
    const mobileC01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    const mobileColleCell = mobileC01Row.locator("td").nth(1);
    const mobileCellWidths = await mobileColleCell.evaluate((cell) => {
      const row = cell.closest("tr");
      return {
        cellWidth: cell.getBoundingClientRect().width,
        rowWidth: row?.getBoundingClientRect().width ?? 0,
      };
    });
    expect(mobileCellWidths.cellWidth).toBeGreaterThanOrEqual(mobileCellWidths.rowWidth - 1);

    const mobileActions = mobileC01Row.getByTestId("health-colle-actions-c01-mobile");
    await expect(mobileC01Row.getByTestId("health-colle-actions-c01-desktop")).toBeHidden();
    await expect(mobileActions.getByRole("link", { name: "Bilan" })).toBeVisible();
    await expect(
      mobileActions.getByRole("button", { name: "Autres actions pour cette colle C01" }),
    ).toBeVisible();

    const latestBadge = mobileC01Row.getByText(/^Dernière :/);
    const bestBadge = mobileC01Row.getByText(/^Meilleur :/);
    await expect(latestBadge).toBeVisible();
    await expect(bestBadge).toBeVisible();
    await expectNoHorizontalOverflow(latestBadge);
    await expectNoHorizontalOverflow(bestBadge);

    const bilanBox = await mobileActions.getByRole("link", { name: "Bilan" }).boundingBox();
    const menuButton = mobileActions.getByRole("button", {
      name: "Autres actions pour cette colle C01",
    });
    const menuButtonBox = await menuButton.boundingBox();
    expect(bilanBox).not.toBeNull();
    expect(menuButtonBox).not.toBeNull();
    expect(Math.abs(bilanBox!.y - menuButtonBox!.y)).toBeLessThanOrEqual(2);

    await page.screenshot({
      path: "tmp/2026-08-28-health-colles-actions-mobile-closed.png",
      fullPage: true,
    });
    await menuButton.click();
    const menu = page.getByRole("menu");
    await expect(menu.getByRole("menuitem", { name: "Voir la correction" })).toBeVisible();
    await expect(menu.getByRole("menuitem", { name: "Recommencer la colle" })).toBeVisible();
    await expectInsideViewport(menu, 375);
    await page.screenshot({
      path: "tmp/2026-08-28-health-colles-actions-mobile-open.png",
      fullPage: true,
    });
    await page.keyboard.press("Escape");

    const mobileStartRow = page
      .locator("tr")
      .filter({ has: page.getByRole("button", { name: "Démarrer" }) })
      .first();
    await expect(mobileStartRow).toBeVisible();
    const mobileStartActions = mobileStartRow.getByTestId(/health-colle-actions-.*-mobile/);
    await expect(mobileStartActions.getByRole("button", { name: "Démarrer" })).toBeVisible();
    await expect(mobileStartRow.getByTestId(/health-colle-actions-.*-desktop/)).toBeHidden();
    await page.screenshot({
      path: "tmp/2026-08-28-health-colles-actions-mobile-unstarted.png",
      fullPage: true,
    });
  });
});
