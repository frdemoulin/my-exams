import { expect, test } from "@playwright/test";

import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.describe.serial("Santé — Colle UE14 C01 Chimie Fondamentaux (exécutable)", () => {
  test.use({ storageState: authFile });

  test("un étudiant peut démarrer, exécuter et remettre la colle C01 avec correction UNESS", async ({
    page,
  }) => {
    await page.goto(`${appBaseUrl}/sante/ue/ue14-biochimie-biologie-cellulaire-chimie?ec=evaluations`);

    await expect(page.getByRole("heading", { name: "Colles", exact: true })).toBeVisible();

    // Vérifier l'éligibilité des cartes : C01 a le bouton Démarrer, C02 a Bientôt disponible
    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(c01Row).toBeVisible();
    await expect(c01Row.getByRole("button", { name: "Démarrer" })).toBeVisible();

    const c02Row = page.locator("tr").filter({ hasText: "Chimie organique" });
    await expect(c02Row).toBeVisible();
    await expect(c02Row.getByRole("button", { name: "Bientôt disponible" })).toBeDisabled();

    // 1. Ouvrir la fiche de préparation C01
    await c01Row.getByRole("button", { name: "Démarrer" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog.getByRole("heading", { name: "Chimie — Fondamentaux", exact: false })).toBeVisible();
    await expect(dialog.getByText("20 questions", { exact: false })).toBeVisible();
    await expect(dialog.getByText("30 min", { exact: false })).toBeVisible();

    // 2. Démarrer réellement la colle
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // 3. Répondre à Q1 (QRM)
    await expect(page.getByText("QRM — Question à réponses multiples", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-2").click();

    // Marquer "À revoir"
    await page.getByRole("button", { name: "À revoir" }).click();

    // Naviguer vers Suivante
    await page.getByRole("button", { name: "Suivante" }).click();

    // Q2 (QROC)
    await expect(page.getByText("QROC — Question ouverte à rédaction courte", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("20");

    // Naviguer librement vers la fin ou soumettre
    await page.getByRole("button", { name: /Remettre la colle|Soumettre l'examen/ }).first().click();
    await page.getByRole("button", { name: /Confirmer la remise|Confirmer la soumission/ }).click();

    // 4. Vérifier la redirection vers la page de résultats
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\//, { timeout: 15000 });
    await expect(page.getByRole("heading", { name: "Correction détaillée" })).toBeVisible();
    await expect(page.getByText("Chimie — Fondamentaux").first()).toBeVisible();
  });
});
