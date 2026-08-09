import { expect, test } from "@playwright/test";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

test.use({ storageState: authFile });

test.describe("Admin - référentiel des formats de questions", () => {
  test("liste les formats de questions en read-only", async ({ page }) => {
    await page.goto("/admin/training/question-formats");

    await expect(
      page.getByRole("heading", { name: "Formats de questions" }),
    ).toBeVisible();
    await expect(page.getByText("QCM est une famille")).toBeVisible();
    await expect(page.getByText("QRU — Réponse unique", { exact: true })).toBeVisible();
    await expect(page.getByText("QRM — Réponses multiples", { exact: true })).toBeVisible();
    await expect(
      page.getByText("QROC — Question ouverte courte", { exact: true }),
    ).toBeVisible();
    await expect(page.getByText("QZONE — Zone à pointer", { exact: true })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Actions" })).toHaveCount(0);
  });
});
