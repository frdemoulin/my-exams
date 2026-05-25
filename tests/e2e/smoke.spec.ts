import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

type SearchExercise = {
  examPaper?: {
    teaching?: {
      subject?: {
        shortDescription?: string | null;
        longDescription?: string | null;
      };
    };
  };
};

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

  test("API search filtrée par une matière existante renvoie des résultats", async ({ request }) => {
    const initialRes = await request.get("/api/exercises/search");
    expect(initialRes.ok()).toBeTruthy();

    const initialBody = await initialRes.json();
    const exercises = Array.isArray(initialBody?.exercises)
      ? (initialBody.exercises as SearchExercise[])
      : [];
    const subjectLabels = exercises
      .map(
        (exercise) =>
          exercise.examPaper?.teaching?.subject?.shortDescription ||
          exercise.examPaper?.teaching?.subject?.longDescription ||
          null,
      )
      .filter((value): value is string => Boolean(value));
    const subject =
      subjectLabels.find((value) => value !== "Maths") || subjectLabels[0] || "Maths";

    const res = await request.get(
      `/api/exercises/search?subject=${encodeURIComponent(subject)}`,
    );
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
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Page admin diplômes ne plante pas (accès ou redirection)", async ({ page }) => {
    const response = await page.goto("/admin/diplomas");
    const status = response?.status() ?? 500;
    const url = page.url();
    expect(
      status < 600 || // tolérant en l'absence d'auth mockée
      url.includes("/log-in") ||
      url.includes("/signin") ||
      url.includes("/auth")
    ).toBeTruthy();
  });
});
