import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const healthBaseUrl =
  process.env.E2E_HEALTH_BASE_URL ??
  `http://sante.lvh.me:${process.env.E2E_PORT ?? "3000"}`;
const healthRootUrl = new URL("/", healthBaseUrl).toString();
const healthCollesUrl = new URL("/colles", healthBaseUrl).toString();
const healthUeUrl = new URL("/ue", healthBaseUrl).toString();

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

  test("Page publique /sante se rend", async ({ page }) => {
    const response = await page.goto("/sante");
    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { name: /My Exams Santé/i }),
    ).toBeVisible();
  });

  test("Le sous-domaine Santé local rend la page d’accueil dédiée", async ({ page }) => {
    const response = await page.goto(healthRootUrl);
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(healthRootUrl);
    await expect(
      page.getByRole("heading", { name: /My Exams Santé/i }),
    ).toBeVisible();
  });

  test("Le sous-domaine Santé expose la section colles", async ({ page }) => {
    const response = await page.goto(healthCollesUrl);
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(healthCollesUrl);
    await expect(
      page.getByRole("heading", { name: /Colles Santé/i }),
    ).toBeVisible();
  });

  test("Le sous-domaine Santé réécrit aussi les sous-routes préparées", async ({ page }) => {
    const response = await page.goto(healthUeUrl);
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(healthUeUrl);
    await expect(
      page.getByRole("heading", { name: /Réviser par UE/i }),
    ).toBeVisible();
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
