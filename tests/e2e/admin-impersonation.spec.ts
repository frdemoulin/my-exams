import { expect, test } from "@playwright/test";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

test.describe("Impersonation admin", () => {
  test.use({ storageState: authFile });

  test("un administrateur peut basculer sur un utilisateur et revenir sans redirection /log-in", async ({
    page,
    request,
  }) => {
    // 1. Récupération d'un utilisateur démo à impersoner depuis l'API admin
    const usersResponse = await request.get("/api/admin/impersonation/users");
    expect(usersResponse.ok()).toBeTruthy();

    const usersData = (await usersResponse.json()) as { users?: Array<{ id: string; email: string; name: string }> };
    const targetUser = usersData.users?.[0];

    test.skip(!targetUser, "Aucun utilisateur démo disponible pour l'impersonation.");
    if (!targetUser) return;

    // 2. Démarrage de l'impersonation
    const startResponse = await request.post("/api/admin/impersonation/start", {
      data: { userId: targetUser.id },
    });

    expect(startResponse.ok()).toBeTruthy();
    const startData = (await startResponse.json()) as { success: boolean; redirectTo: string };
    expect(startData.success).toBe(true);

    // Copy cookies returned by request context onto page context if needed
    const cookies = await request.storageState();
    await page.context().addCookies(cookies.cookies);

    // 3. Navigation vers le dashboard pour vérifier la session impersonée sans redirection vers /log-in
    await page.goto("/dashboard");
    await expect(page).not.toHaveURL(/\/log-in/);
    await expect(page.locator("body")).toBeVisible();

    // 4. Arrêt de l'impersonation
    const stopResponse = await request.post("/api/admin/impersonation/stop");
    expect(stopResponse.ok()).toBeTruthy();

    const updatedCookies = await request.storageState();
    await page.context().addCookies(updatedCookies.cookies);

    // 5. Confirmation du retour admin authentifié sans redirection vers /log-in
    await page.goto("/admin");
    await expect(page).not.toHaveURL(/\/log-in/);
    await expect(page.locator("body")).toBeVisible();
  });
});
