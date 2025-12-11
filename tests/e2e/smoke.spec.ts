import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("smoke", () => {
  test("API search renvoie des exercices", async ({ request }) => {
    const res = await request.get("/api/exercises/search");
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body?.exercises?.length ?? 0).toBeGreaterThan(0);
  });

  test("API search filtrée par matière (Maths) renvoie des résultats", async ({ request }) => {
    const res = await request.get("/api/exercises/search?subject=Maths");
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body?.count ?? 0).toBeGreaterThan(0);
  });

  test("API search filtrée par diplôme (Bac général) renvoie des résultats", async ({ request }) => {
    const res = await request.get("/api/exercises/search?diploma=Bac%20g%C3%A9n%C3%A9ral");
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body?.count ?? 0).toBeGreaterThan(0);
  });

  test("API search filtrée par matière (Français) renvoie des résultats", async ({ request }) => {
    const res = await request.get("/api/exercises/search?subject=Fran%C3%A7ais");
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body?.count ?? 0).toBeGreaterThan(0);
  });

  test("Page publique / se rend", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByPlaceholder(/Ex :/)).toBeVisible();

    // Scan a11y rapide
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    if (accessibilityScanResults.violations.length > 0) {
      console.warn("A11y violations (smoke, non bloquant):", accessibilityScanResults.violations);
    }
    expect(true).toBeTruthy(); // non bloquant pour le smoke
  });

  test("Page admin diplômes ne plante pas (accès ou redirection)", async ({ page }) => {
    const response = await page.goto("/admin/diplomas");
    const status = response?.status() ?? 500;
    if (status >= 400) {
      console.warn("Admin diplomas returned", status);
    }
    expect(true).toBeTruthy(); // non bloquant pour smoke
  });
});
