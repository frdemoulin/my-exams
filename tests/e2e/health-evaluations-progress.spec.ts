import { test, expect } from "@playwright/test";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

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
    const startBtn = c01Row.getByRole("button", { name: "Démarrer" }).or(c01Row.getByRole("button", { name: "Recommencer" })).first();
    await startBtn.click();
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
    await expect(updatedC01Row.getByRole("link", { name: "Bilan" })).toBeVisible();
    await expect(updatedC01Row.getByRole("link", { name: "Correction" })).toBeVisible();
    await expect(updatedC01Row.getByRole("button", { name: "Recommencer" })).toBeVisible();
  });
});
