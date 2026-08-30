import { expect, test } from "@playwright/test";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { openHealthColleStartDialog } from "./health-colle-actions";

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

    // Vérifier l'éligibilité des cartes : C01 et C02
    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(c01Row).toBeVisible();
    await expect(c01Row.getByRole("button", { name: /Démarrer|Autres actions pour cette colle/ }).first()).toBeVisible();

    const c02Row = page.locator("tr").filter({ hasText: "Biochimie — Glucides" });
    await expect(c02Row).toBeVisible();
    await expect(c02Row.getByRole("button", { name: /Démarrer|Autres actions pour cette colle/ }).first()).toBeVisible();

    // 1. Ouvrir la fiche de préparation C01
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await expect(dialog.getByRole("heading", { name: "Chimie — Fondamentaux", exact: false })).toBeVisible();
    await expect(dialog.getByText("20 questions", { exact: false })).toBeVisible();
    await expect(dialog.getByText("30 min", { exact: false })).toBeVisible();

    // 2. Démarrer réellement la colle
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 30000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 30000 });

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
    await page.getByRole("button", { name: /Terminer la colle|Terminer l'examen/ }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    // 4. Vérifier la redirection vers la page de résultats (Bilan)
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\//, { timeout: 15000 });
    await expect(page.getByText("BILAN DE LA COLLE")).toBeVisible();
    await expect(page.getByText("Plein crédit", { exact: true })).toBeVisible();
    await expect(page.getByText("À revoir").first()).toBeVisible();
    await expect(page.getByText("Bilan pédagogique")).toBeVisible();

    // 5. Cliquer pour voir la correction détaillée
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\/.*\/correction/, { timeout: 15000 });
    await expect(page.getByRole("button", { name: /Toutes/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /À revoir/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Plein crédit/ })).toBeVisible();
  });
});
