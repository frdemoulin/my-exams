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
    await expect(page.getByText("Sélectionnez une ou plusieurs propositions.", { exact: true })).toBeVisible();
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
    await expect(page.getByText("Saisissez votre réponse.", { exact: true })).toBeVisible();
    await expect(page.getByText("Répondez en chiffres, par exemple 4 et non quatre.", { exact: false })).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("4");
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(
      page
        .getByTestId("question-format-badge")
        .filter({ hasText: "QZONE — Question à zone à pointer" })
        .first(),
    ).toBeVisible();
    await expect(page.getByText("Pointez la zone demandée sur le support.", { exact: true })).toBeVisible();
    const hotspotSurface = page.getByTestId("hotspot-question-surface");
    const hotspotBox = await hotspotSurface.boundingBox();

    if (!hotspotBox) {
      throw new Error("La surface interactive QZONE est introuvable.");
    }

    await hotspotSurface.click({
      position: {
        x: hotspotBox.width / 2,
        y: hotspotBox.height / 2,
      },
    });

    await page.getByRole("button", { name: "Terminer le tutoriel" }).click();
    await page.getByRole("button", { name: "Voir le récapitulatif" }).click();

    await expect(page.getByRole("heading", { name: "Récapitulatif pédagogique" })).toBeVisible();
    await expect(page.getByText("5/6 questions répondues", { exact: true })).toBeVisible();
    await expect(page.getByText("1 sans réponse", { exact: true })).toBeVisible();
    await expect(page.getByText("1 à revoir", { exact: true })).toBeVisible();
    await expect(page.getByText("Fin du tutoriel d'interface", { exact: true })).toBeVisible();
  });

  test("un étudiant peut consulter le guide 'Comprendre les évaluations'", async ({ page }) => {
    await page.goto("/sante/evaluations/comprendre");

    await expect(
      page.getByRole("heading", { name: "Guide des formats de questions et de la notation UNESS" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "1. Les 6 formats de questions" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "2. La notation UNESS & le principe de discordance" }),
    ).toBeVisible();
    await expect(page.getByText("QRU", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("QRM", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("QRP", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("QRPL", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("QROC", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("QZONE", { exact: true }).first()).toBeVisible();
  });
});
