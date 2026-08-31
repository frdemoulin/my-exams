import { expect, test, type Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

const tmpDir = path.join(process.cwd(), "tmp");
const ue14CourseUnitSlug = "ue14-biochimie-biologie-cellulaire-chimie";

async function goToQuestionNumber(page: Page, targetOrder: number) {
  const nextBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la droite" });
  const prevBlockBtn = page.getByRole("button", { name: "Faire défiler les questions vers la gauche" });

  let attempts = 0;
  while (!(await page.getByTestId(`health-mock-exam-nav-${targetOrder}`).isVisible()) && attempts < 15) {
    if (await nextBlockBtn.isEnabled()) {
      await nextBlockBtn.click();
    } else if (await prevBlockBtn.isEnabled()) {
      await prevBlockBtn.click();
    }
    attempts++;
  }

  const tile = page.getByTestId(`health-mock-exam-nav-${targetOrder}`);
  await expect(tile).toBeVisible({ timeout: 10000 });
  await tile.click();
}

test.describe.serial("Santé — Examen blanc UE14 EB02 E2E & Recette Visuelle", () => {
  test.use({ storageState: authFile });

  test.beforeAll(() => {
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }
  });

  test("Parcours complet EB02 : Intro, Passation 100Q, QZONE, Groupes liés, Sécurité, Bilan et Correction", async ({
    page,
  }) => {
    // 1. Accès à la page UE14 Evaluations / Synthèse
    await page.goto(`${appBaseUrl}/sante/ue/${ue14CourseUnitSlug}?ec=synthese`);
    await page.setViewportSize({ width: 1280, height: 800 });

    const examCard = page.locator("div.rounded-xl").filter({ hasText: "Examen blanc UE14 — EB02" }).first();
    await expect(examCard).toBeVisible({ timeout: 15000 });
    await expect(examCard.getByText("100 questions")).toBeVisible();
    await expect(examCard.getByText(/2 h 30|150 min/)).toBeVisible();

    // Capture 1: tmp/eb02-intro.png
    await page.screenshot({ path: path.join(tmpDir, "eb02-intro.png") });

    // Démarrer l'examen
    const startButton = examCard.getByRole("button", { name: /Démarrer|Reprendre|Recommencer/i });
    await expect(startButton).toBeVisible();
    await startButton.click();

    // Si dialog de confirmation apparaît
    const dialog = page.getByRole("dialog");
    if (await dialog.isVisible()) {
      await dialog.getByRole("button", { name: /Démarrer|Commencer/i }).click();
    }

    await expect(page).toHaveURL(
      /\/sante\/ue\/.*\/examens-blancs\/eb02/,
      { timeout: 20000 }
    );
    await expect(page.getByTestId("health-mock-exam-taking")).toBeVisible();

    // 2. Q1 — Chimie (Capture 2: tmp/eb02-chimie-question.png)
    await expect(page.getByText("Chimie", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("On considère l’ion", { exact: false })).toBeVisible();
    await expect(page.getByTestId("health-mock-exam-choice-0")).toBeVisible();
    await page.screenshot({ path: path.join(tmpDir, "eb02-chimie-question.png") });

    // Répondre à Q1
    await page.getByTestId("health-mock-exam-choice-0").click();

    // 3. Navigation vers Q9 — QZONE (Capture 5: tmp/eb02-qzone.png)
    await goToQuestionNumber(page, 9);
    await expect(page.getByText("Sur la formule du propanenitrile")).toBeVisible();
    await expect(page.getByText("QZONE — Question à zone à pointer")).toBeVisible();

    const hotspotSurface = page.locator('[data-testid="hotspot-question-surface"]');
    await expect(hotspotSurface).toBeVisible();
    const box = await hotspotSurface.boundingBox();
    if (box) {
      // Target nitrile carbon is around x=0.68, y=0.5
      await hotspotSurface.click({
        position: {
          x: box.width * 0.68,
          y: box.height * 0.5,
        },
      });
    }
    await page.screenshot({ path: path.join(tmpDir, "eb02-qzone.png") });

    // 4. Navigation vers Q54..Q56 — G2 Biochimie Groupe Lié (Capture 3: tmp/eb02-biochimie-linked-group.png)
    await goToQuestionNumber(page, 54);
    await expect(page.getByText("Biochimie", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("Données communes", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("Michaelis–Menten", { exact: false })).toBeVisible();
    await page.screenshot({ path: path.join(tmpDir, "eb02-biochimie-linked-group.png") });

    // 5. Navigation vers Q72..Q74 — G3 Biocell Question (Capture 4: tmp/eb02-biocell-question.png)
    await goToQuestionNumber(page, 72);
    await expect(page.getByText("Biologie cellulaire", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("Endocytose du LDL", { exact: false }).first()).toBeVisible();
    await page.screenshot({ path: path.join(tmpDir, "eb02-biocell-question.png") });

    // 6. Navigation vers Q100 (dernière question)
    await goToQuestionNumber(page, 100);
    await expect(page.getByText("Question 100 / 100", { exact: false })).toBeVisible();

    // 7. Terminer l'examen
    const finishButton = page.getByRole("button", { name: "Terminer l'examen blanc" }).first();
    await expect(finishButton).toBeVisible();
    await finishButton.click();

    const confirmButton = page.getByRole("button", { name: "Terminer et voir les résultats" });
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();

    // 8. Bilan des résultats (Capture 6: tmp/eb02-results.png)
    await expect(page).toHaveURL(
      /\/sante\/ue\/.*\/examens-blancs\/eb02\/resultats\//,
      { timeout: 20000 }
    );
    await expect(page.getByText("BILAN DE L'EXAMEN BLANC")).toBeVisible();
    await expect(page.getByText(/100/).first()).toBeVisible();
    await expect(page.getByText("Chimie").first()).toBeVisible();
    await expect(page.getByText("Biochimie").first()).toBeVisible();
    await expect(page.getByText("Biologie cellulaire").first()).toBeVisible();
    await page.screenshot({ path: path.join(tmpDir, "eb02-results.png") });

    // 9. Correction détaillée (Capture 7: tmp/eb02-correction.png)
    const viewCorrectionLink = page.getByRole("link", { name: /correction détaillée/i });
    await expect(viewCorrectionLink).toBeVisible();
    await viewCorrectionLink.click();

    await expect(page).toHaveURL(
      /\/sante\/ue\/.*\/examens-blancs\/eb02\/resultats\/.*\/correction/,
      { timeout: 20000 }
    );
    await expect(page.getByTestId("health-mock-exam-correction")).toBeVisible();
    await expect(page.getByRole("button", { name: /Toutes/i })).toBeVisible();
    await page.screenshot({ path: path.join(tmpDir, "eb02-correction.png") });
  });
});
