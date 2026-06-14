import { expect, test } from "@playwright/test";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const healthAuthFile =
  process.env.E2E_HEALTH_AUTH_STATE ?? "playwright/.auth/health-admin.json";
const healthBaseUrl =
  process.env.E2E_HEALTH_BASE_URL ??
  `http://sante.lvh.me:${process.env.E2E_PORT ?? "3000"}`;

async function startGoogleSignIn(page: import("@playwright/test").Page) {
  const googleButton = page.getByRole("button", {
    name: "Se connecter avec Google",
  });

  test.skip(
    (await googleButton.count()) === 0,
    "Le provider Google n'est pas configuré dans cet environnement.",
  );

  await page.route("https://accounts.google.com/**", (route) => route.abort());
  const oauthRequestPromise = page.waitForRequest(
    (request) => request.url().startsWith("https://accounts.google.com/"),
  );

  await googleButton.click();
  return oauthRequestPromise;
}

test.describe("Admin - Référentiel santé", () => {
  test.use({ storageState: authFile });

  const sections = [
    ["institutions", "Liste des établissements"],
    ["programs", "Liste des programmes"],
    ["program-versions", "Liste des maquettes"],
    ["pathways", "Liste des parcours"],
    ["blocks", "Liste des blocs"],
    ["course-units", "Liste des UE"],
  ] as const;

  for (const [path, title] of sections) {
    test(`la section ${title} est accessible`, async ({ page }) => {
      const response = await page.goto(`/admin/health/${path}`);

      expect(response?.ok()).toBeTruthy();
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
      await expect(page.getByRole("link", { name: /^Ajouter /i })).toBeVisible();
    });
  }

  test("la liste et la fiche détail reprennent les conventions du BO", async ({ page }) => {
    await page.goto("/admin/health/institutions");

    await expect(page.getByRole("button", { name: "Exporter XLSX" })).toBeVisible();
    await expect(page.getByPlaceholder("Rechercher un établissement...")).toBeVisible();
    await expect(page.getByRole("combobox")).toHaveCount(2);
    await expect(page.getByRole("columnheader", { name: "NOM" })).toBeVisible();

    await page.getByRole("row").nth(1).click();

    await expect(page.getByRole("link", { name: "Retour" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Éditer établissement" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Informations générales" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Publication" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Suivi" })).toBeVisible();
  });

  test("toute l'entrée du menu d'actions est cliquable", async ({ page }) => {
    await page.goto("/admin/health/institutions");

    const actionMenuButton = page
      .getByRole("button", { name: "Ouvrir le menu" })
      .first();

    await expect(actionMenuButton).toBeVisible();
    await actionMenuButton.click();
    const viewLink = page.getByRole("link", { name: "Voir" });
    const viewEntry = viewLink.locator("..");
    const [linkBox, entryBox] = await Promise.all([
      viewLink.boundingBox(),
      viewEntry.boundingBox(),
    ]);

    expect(linkBox).not.toBeNull();
    expect(entryBox).not.toBeNull();
    expect(linkBox!.width).toBeGreaterThanOrEqual(entryBox!.width - 1);
    expect(linkBox!.height).toBeGreaterThanOrEqual(entryBox!.height - 1);

    await page.mouse.click(linkBox!.x + linkBox!.width - 4, linkBox!.y + linkBox!.height / 2);
    await expect(page).toHaveURL(/\/admin\/health\/institutions\/[a-f0-9]{24}$/i);
  });

  test("le formulaire d'ajout reprend les conventions du BO", async ({ page }) => {
    await page.goto("/admin/health/institutions/add");

    await expect(page.getByRole("heading", { name: "Ajouter un établissement" })).toBeVisible();
    await expect(page.getByText("Établissement actif", { exact: true })).toBeVisible();
    await expect(page.getByText("Établissement publié", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Annuler" })).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});

test("le référentiel santé redirige un utilisateur non authentifié", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("/admin/health/institutions");

  await expect(page).toHaveURL(/\/log-in/);
  await context.close();
});

test.describe("Admin - Sous-domaine santé", () => {
  test("la connexion est accessible depuis le sous-domaine", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`${healthBaseUrl}/log-in?callbackUrl=/admin`);

    await expect(page).toHaveURL(new RegExp(`^${healthBaseUrl}/log-in`));
    await expect(
      page.getByRole("heading", { name: "Connexion à l'application" }),
    ).toBeVisible();
    await context.close();
  });

  test("le BO redirige vers la connexion du sous-domaine", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`${healthBaseUrl}/admin/health/institutions`);

    await expect(page).toHaveURL(new RegExp(`^${healthBaseUrl}/log-in`));
    await context.close();
  });

  test("Google conserve le callback OAuth localhost autorisé", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`${healthBaseUrl}/log-in?callbackUrl=/admin`);
    const oauthRequest = await startGoogleSignIn(page);
    const redirectUri = new URL(oauthRequest.url()).searchParams.get("redirect_uri");
    const oauthCookies = await context.cookies(healthBaseUrl);

    expect(redirectUri).toBe("http://localhost:3000/api/auth/callback/google");
    expect(
      oauthCookies
        .filter((cookie) => /authjs\.(state|pkce)/.test(cookie.name))
        .every((cookie) => cookie.domain === "sante.lvh.me"),
    ).toBeTruthy();
    await context.close();
  });

  test("Auth.js reconnaît le callback public du sous-domaine", async ({ request }) => {
    const response = await request.get(`${healthBaseUrl}/api/auth/providers`);
    const providers = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(providers.google?.callbackUrl).toBe(
      `${healthBaseUrl}/api/auth/callback/google`,
    );
  });
});

test.describe("Authentification localhost", () => {
  test("les cookies OAuth restent valides pour localhost", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("/log-in");
    const oauthRequest = await startGoogleSignIn(page);
    const redirectUri = new URL(oauthRequest.url()).searchParams.get("redirect_uri");
    const oauthCookies = await context.cookies("http://localhost:3000");

    expect(redirectUri).toBe("http://localhost:3000/api/auth/callback/google");
    expect(
      oauthCookies
        .filter((cookie) => /authjs\.(state|pkce)/.test(cookie.name))
        .every((cookie) => cookie.domain === "localhost"),
    ).toBeTruthy();
    await context.close();
  });
});

test.describe("Admin - Session santé", () => {
  test.use({ storageState: healthAuthFile });

  test("une session du sous-domaine accède au BO santé", async ({ page }) => {
    const response = await page.goto(`${healthBaseUrl}/admin/health/institutions`);

    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { name: /Liste des établissements/i }),
    ).toBeVisible();
  });
});
