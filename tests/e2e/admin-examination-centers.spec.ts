import { expect, test } from "@playwright/test";
import prisma from "../../src/lib/db/prisma";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

test.use({ storageState: authFile });

test.describe("Admin - Centres d'examen", () => {
  test("suppression -> toast traduit visible", async ({ page }) => {
    const description = `Centre E2E ${Date.now()}`;
    await prisma.examinationCenter.create({ data: { description } });

    await page.goto("/admin/examination-centers");

    await expect(page).toHaveURL(/examination-centers/, { timeout: 15000 });
    await expect(page.getByRole("heading", { name: /centres d'examen/i })).toBeVisible({ timeout: 10000 });

    // Trouve la ligne du centre créé pour ce test
    const row = page.getByRole("row", { name: description });
    await expect(row).toBeVisible({ timeout: 15000 });

    await row.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("menuitem", { name: "Supprimer" }).click();

    const dialog = page.getByRole("alertdialog");
    await expect(dialog).toBeVisible({ timeout: 10000 });

    const confirmButton = dialog.getByRole("button", { name: "Supprimer" });
    await expect(confirmButton).toBeVisible();

    await Promise.all([
      confirmButton.click(),
      page.waitForURL(/examination-centers/, { timeout: 20000 }),
    ]);

    const toast = page.getByText(/Centre d'examen supprim/i);
    await expect(toast).toBeVisible({ timeout: 20000 });
    await expect(page.getByText(description)).not.toBeVisible({ timeout: 20000 });
  });
});
