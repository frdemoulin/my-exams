import { expect, test } from "@playwright/test";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { openHealthColleStartDialog } from "./health-colle-actions";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.describe.serial("Santé — Navigation paginée et terminaison des épreuves (colles & examens blancs)", () => {
  test.use({ storageState: authFile });

  test("une colle de 20 questions affiche la pagination 1-10 puis 11-20 sur desktop et la terminaison avec modale décomptée", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await page.goto(`${appBaseUrl}/sante/ue/6a2c2b111af36bd83ac27ec2?ec=evaluations`);

    await expect(page.getByRole("heading", { name: "Colles", exact: true })).toBeVisible();

    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await expect(c01Row).toBeVisible();
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: "Démarrer la colle" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 15000 });

    // 1. Sur desktop (1280px par défaut), vérifier que les nav-items 1 à 10 sont affichés
    await expect(page.getByTestId("health-mock-exam-nav-1")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-10")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-11")).not.toBeVisible();

    // Chevrons : Gauche désactivé, Droite actif
    const leftChevron = page.getByRole("button", { name: "Faire défiler les questions vers la gauche" });
    const rightChevron = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });

    await expect(leftChevron).toBeDisabled();
    await expect(rightChevron).toBeEnabled();

    // Clic chevron droit -> passe au bloc 11-20
    await rightChevron.click();
    await expect(page.getByTestId("health-mock-exam-nav-11")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-20")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-1")).not.toBeVisible();

    await expect(leftChevron).toBeEnabled();
    await expect(rightChevron).toBeDisabled();

    // Clic chevron gauche -> retour au bloc 1-10
    await leftChevron.click();
    await expect(page.getByTestId("health-mock-exam-nav-1")).toBeVisible();

    // 2. Passage automatique de bloc Q10 -> Q11 via le bouton "Suivante"
    // Répondre à Q1
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByRole("button", { name: "À revoir" }).click();

    // Naviguer directement vers Q10 via clic
    await page.getByTestId("health-mock-exam-nav-10").click();
    await expect(page.getByTestId("health-mock-exam-question-counter")).toContainText("Question 10 / 20");

    // Clic "Suivante" depuis Q10 -> doit basculer automatiquement sur le bloc 11-20
    await page.getByRole("button", { name: "Suivante" }).click();
    await expect(page.getByTestId("health-mock-exam-question-counter")).toContainText("Question 11 / 20");
    await expect(page.getByTestId("health-mock-exam-nav-11")).toBeVisible();

    // 3. Test de la modale de terminaison ("Terminer la colle")
    await expect(page.getByRole("button", { name: "Remettre la colle" })).not.toBeVisible();

    const terminateBtn = page.getByRole("button", { name: "Terminer la colle" });
    await expect(terminateBtn).toBeVisible();
    await terminateBtn.click();

    const confirmModal = page.getByRole("alertdialog");
    await expect(confirmModal.getByRole("heading", { name: "Terminer la colle ?" })).toBeVisible();

    // Vérifier la présence du décompte : 19 sans réponse et 1 marquée à revoir
    await expect(confirmModal.getByText("Il reste 19 questions sans réponse et 1 question marquée à revoir.")).toBeVisible();

    // Action d'annulation : Continuer la colle (ferme la modale sans soumettre)
    await confirmModal.getByRole("button", { name: "Continuer la colle" }).click();
    await expect(confirmModal).not.toBeVisible();
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // Réouvrir et valider définitivement la soumission
    await terminateBtn.click();
    await confirmModal.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01\/resultats\//, { timeout: 15000 });
    await expect(page.getByText("BILAN DE LA COLLE")).toBeVisible();
  });

  test("sur mobile (375px), la barre affiche 5 questions par bloc sans débordement horizontal", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    await page.goto(`${appBaseUrl}/sante/ue/6a2c2b111af36bd83ac27ec2?ec=evaluations`);

    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: /Démarrer|Reprendre/ }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 15000 });

    // Compteur supérieur format compact
    await expect(page.getByText(/Répondues : \d+\/20/)).toBeVisible();

    // Bloc 1 sur mobile : Q1-Q5
    await expect(page.getByTestId("health-mock-exam-nav-1")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-5")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-6")).not.toBeVisible();

    const rightChevron = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
    await rightChevron.click();

    // Bloc 2 sur mobile : Q6-Q10
    await expect(page.getByTestId("health-mock-exam-nav-6")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-10")).toBeVisible();
  });

  test("sur tablette (768px), la barre affiche 8 questions par bloc", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${appBaseUrl}/sante/ue/6a2c2b111af36bd83ac27ec2?ec=evaluations`);

    const c01Row = page.locator("tr").filter({ hasText: "Chimie — Fondamentaux" });
    await openHealthColleStartDialog(page, c01Row);

    const dialog = page.getByRole("dialog");
    await dialog.getByRole("button", { name: /Démarrer|Reprendre/ }).click();

    await expect(page).toHaveURL(/\/sante\/ue\/.*\/colles\/c01/, { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible({ timeout: 15000 });

    // Bloc 1 sur tablette : Q1-Q8
    await expect(page.getByTestId("health-mock-exam-nav-1")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-8")).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-nav-9")).not.toBeVisible();
  });
});
