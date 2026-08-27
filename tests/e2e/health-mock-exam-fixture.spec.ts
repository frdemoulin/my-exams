import { expect, test } from "@playwright/test";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { seedHealthMockExamFixture } from "../../scripts/seed-health-mock-exam-fixture";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

type HealthMockExamFixture = Awaited<ReturnType<typeof seedHealthMockExamFixture>>;

let fixture: HealthMockExamFixture;

test.describe.serial("Santé - fixture examen blanc UNESS", () => {
  test.use({ storageState: authFile });

  test.beforeAll(async () => {
    fixture = await seedHealthMockExamFixture(prisma);
  });

  test("un étudiant peut terminer un examen blanc mixte QRU/QRM/QRP/QROC", async ({
    page,
  }) => {
    await page.goto(`${appBaseUrl}/sante/ue/${fixture.courseUnitId}?ec=synthese`);

    await expect(page.getByRole("heading", { name: "Examens blancs" })).toBeVisible();
    await expect(page.getByRole("heading", { name: fixture.examTitle })).toBeVisible();

    await page
      .locator('section[aria-labelledby="health-mock-exams-heading"]')
      .getByRole("button", { name: /Démarrer|Reprendre|Recommencer/ })
      .click();
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    await expect(page.getByText("QRU — Question à réponse unique", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez une seule proposition.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRM — Question à réponses multiples", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez une ou plusieurs propositions.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-2").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRP — Question à nombre de réponses précisé", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez exactement 2 propositions.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await page.getByTestId("health-mock-exam-choice-3").click();
    await expect(page.getByTestId("health-mock-exam-choice-0")).toBeDisabled();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QROC — Question ouverte à rédaction courte", { exact: true })).toBeVisible();
    await expect(page.getByText("Saisissez votre réponse.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-short-answer-input").fill("3");
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QZONE — Question à zone à pointer", { exact: true })).toBeVisible();
    await expect(page.getByText("Pointez la zone demandée sur le support.", { exact: true })).toBeVisible();
    const surface = page.locator('[data-testid="hotspot-question-surface"]');
    await expect(surface).toBeVisible();
    const box = await surface.boundingBox();
    if (box) {
      await surface.click({
        position: {
          x: box.width * 0.5,
          y: box.height * 0.72,
        },
      });
    }
    await expect(page.getByText(/Zone sélectionnée :/)).toBeVisible();

    await page.getByRole("button", { name: "Terminer l'examen blanc" }).first().click();
    await page.getByRole("button", { name: "Terminer et voir les résultats" }).click();

    await expect(page).toHaveURL(/\/examens-blancs\/fixture-uness-mixte\/resultats\//, { timeout: 15000 });
    await expect(page.getByRole("heading", { name: "Correction détaillée" })).toBeVisible();
    await expect(page.getByText("Barème : QRM par discordance · QRP/QRPL par réponses justes")).toBeVisible();
    await expect(page.getByText(/5 \/ 5/).first()).toBeVisible();
    await expect(page.getByText("Plein crédit", { exact: true })).toBeVisible();
    await expect(page.getByText("À revoir").first()).toBeVisible();
    await expect(page.getByText("Durée").first()).toBeVisible();
    await expect(page.getByRole("button", { name: /Toutes \(5\)/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Correctes/ })).toBeVisible();
    await expect(page.getByText("100%").first()).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-short-answer-result")).toContainText("3");
    await expect(page.getByText("QROC — Question ouverte à rédaction courte", { exact: true })).toBeVisible();
    await expect(page.getByText("QZONE — Question à zone à pointer", { exact: true })).toBeVisible();
    await expect(page.getByText("Zone correcte !")).toBeVisible();
  });
});
