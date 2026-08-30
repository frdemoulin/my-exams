import type { Locator, Page } from "@playwright/test";

export async function openHealthColleStartDialog(page: Page, row: Locator) {
  const directStart = row.getByRole("button", { name: "Démarrer" }).first();

  if (await directStart.isVisible().catch(() => false)) {
    await directStart.click();
    return;
  }

  await row
    .getByRole("button", { name: /Autres actions pour cette colle/i })
    .first()
    .click();
  await page.getByRole("menuitem", { name: "Recommencer la colle" }).click();
}
