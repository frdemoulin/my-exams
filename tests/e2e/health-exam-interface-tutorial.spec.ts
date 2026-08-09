import { expect, test } from "@playwright/test";

test.describe("Santé - tutoriel interface examen", () => {
  test("un étudiant découvre les formats UNESS et le récapitulatif sans tentative persistée", async ({
    page,
  }) => {
    await page.goto("/sante/interface-examen");

    await expect(
      page.getByRole("heading", { name: "S'entraîner à l'interface d'examen" }),
    ).toBeVisible();
    await expect(page.getByText("Tutoriel d'interface", { exact: true })).toBeVisible();

    await expect(page.getByText("QRU — Question à réponse unique", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez une seule proposition.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("laissez cette question sans réponse", { exact: false })).toBeVisible();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRM — Question à réponses multiples", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez toutes les propositions exactes.", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Marquer à revoir" }).click();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRP — Question à nombre de réponses précisé", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez exactement 2 propositions.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await expect(page.getByTestId("health-mock-exam-choice-2")).toBeDisabled();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QROC — Question ouverte à rédaction courte", { exact: true })).toBeVisible();
    await expect(page.getByText("Saisissez une réponse numérique courte, en chiffres.", { exact: true })).toBeVisible();
    await expect(page.getByText("Répondez en chiffres, par exemple 4 et non quatre.", { exact: false })).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("4");

    await page.getByRole("button", { name: "Terminer le tutoriel" }).click();
    await page.getByRole("button", { name: "Voir le récapitulatif" }).click();

    await expect(page.getByRole("heading", { name: "Récapitulatif pédagogique" })).toBeVisible();
    await expect(page.getByText("4/5 questions répondues", { exact: true })).toBeVisible();
    await expect(page.getByText("1 sans réponse", { exact: true })).toBeVisible();
    await expect(page.getByText("1 à revoir", { exact: true })).toBeVisible();
    await expect(page.getByText("Fin du tutoriel d'interface", { exact: true })).toBeVisible();
  });
});
