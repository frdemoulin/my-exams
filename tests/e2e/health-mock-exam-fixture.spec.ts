import { expect, test } from "@playwright/test";

import { loadProjectEnv } from "../../scripts/lib/load-env";
import { seedHealthMockExamFixture } from "../../scripts/seed-health-mock-exam-fixture";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "../../src/lib/auth/session-cookie";

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

type HealthMockExamFixture = Awaited<ReturnType<typeof seedHealthMockExamFixture>>;

let fixture: HealthMockExamFixture;
let fixtureUserId: string;
let fixtureUserEmail = "fixture-test-student@example.com";

test.describe.serial("Santé - fixture examen blanc UNESS", () => {
  test.beforeAll(async () => {
    fixture = await seedHealthMockExamFixture(prisma);
    const activeYear = await prisma.academicYear.findFirst({
      where: {
        startsAt: { lte: new Date() },
        endsAt: { gt: new Date() },
      },
    });

    const fixtureUser = await prisma.user.upsert({
      where: { email: fixtureUserEmail },
      update: {},
      create: {
        email: fixtureUserEmail,
        name: "Fixture Test Student",
      },
    });
    fixtureUserId = fixtureUser.id;

    if (activeYear) {
      await prisma.userAcademicEnrollment.upsert({
        where: {
          userId_academicYearId: {
            userId: fixtureUser.id,
            academicYearId: activeYear.id,
          },
        },
        update: {
          audience: "HEALTH",
          healthProgramVersionId: fixture.programVersionId,
          healthPathwayId: null,
        },
        create: {
          userId: fixtureUser.id,
          academicYearId: activeYear.id,
          audience: "HEALTH",
          healthProgramVersionId: fixture.programVersionId,
          healthPathwayId: null,
          createdBy: "ADMIN",
        },
      });
    }
  });

  test.beforeEach(async ({ context }) => {
    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: fixtureUserId,
        role: "USER",
        email: fixtureUserEmail,
        name: "Fixture Test Student",
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });
    const url = new URL(appBaseUrl);
    await context.addCookies([
      {
        name: "authjs.session-token",
        value: sessionToken,
        domain: url.hostname,
        path: "/",
      },
    ]);
  });

  test("un étudiant peut terminer un examen blanc mixte QRU/QRM/QRP/QROC", async ({
    page,
  }) => {
    await page.goto(`${appBaseUrl}/sante/ue/${fixture.courseUnitId}?ec=synthese`);

    await expect(page.getByRole("heading", { name: "Examens blancs" })).toBeVisible();
    const fixtureRow = page.getByTestId(`health-mock-exam-row-${fixture.examSlug}`);
    await expect(fixtureRow).toBeVisible();
    await expect(fixtureRow.getByText(fixture.examTitle)).toBeVisible();

    await fixtureRow
      .getByRole("button", { name: /Démarrer|Reprendre|Recommencer/ })
      .click();
    await expect(page).toHaveURL(new RegExp(`/sante/ue/${fixture.courseUnitId}/examens-blancs/${fixture.examSlug}`), { timeout: 15000 });
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    await expect(page.getByText("QRU — Question à réponse unique", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez une seule proposition.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRM — Question à réponses multiples", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez une ou plusieurs propositions.", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Suivante" }).click();

    await expect(page.getByText("QRP — Question à nombre de réponses précisé", { exact: true })).toBeVisible();
    await expect(page.getByText("Sélectionnez exactement 2 propositions.", { exact: true })).toBeVisible();
    await page.getByTestId("health-mock-exam-choice-0").click();
    await page.getByTestId("health-mock-exam-choice-1").click();
    await expect(page.getByTestId("health-mock-exam-choice-3")).toBeDisabled();
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
    await expect(page.getByText("BILAN DE L'EXAMEN BLANC")).toBeVisible();
    await expect(page.getByText(/\/ 5/).first()).toBeVisible();
    await expect(page.getByText("Plein crédit", { exact: true })).toBeVisible();
    await expect(page.getByText("À revoir").first()).toBeVisible();
    await expect(page.getByText("Durée").first()).toBeVisible();
    await expect(page.getByText(fixture.themeLabel, { exact: true })).toBeVisible();
    await expect(page.getByText("3 questions · 1,5 / 3 pt", { exact: true })).toBeVisible();
    await expect(page.getByText("50 %", { exact: true })).toBeVisible();
    await expect(page.getByText(/theme:/i)).toHaveCount(0);

    // Cliquer pour voir la correction détaillée
    await page.getByRole("link", { name: "Voir la correction détaillée" }).click();
    await expect(page).toHaveURL(/\/examens-blancs\/fixture-uness-mixte\/resultats\/.*\/correction/, { timeout: 15000 });
    await expect(page.getByRole("button", { name: /Toutes \(5\)/ })).toBeVisible();
    await expect(page.getByRole("button", { name: /Plein crédit/ })).toBeVisible();
  });
});
