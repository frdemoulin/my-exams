import { expect, test } from "@playwright/test";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

test.describe("Impersonation admin", () => {
  test.describe.configure({ mode: "serial" });
  test.use({ storageState: authFile });

  test("un administrateur peut basculer sur un utilisateur et revenir sans redirection /log-in", async ({
    page,
    request,
  }) => {
    // 1. Récupération d'un utilisateur démo à impersoner depuis l'API admin
    const usersResponse = await request.get("/api/admin/impersonation/users");
    expect(usersResponse.ok()).toBeTruthy();

    const usersData = (await usersResponse.json()) as {
      users?: Array<{ id: string; label: string; secondaryLabel: string | null; role: string }>;
    };
    const targetUser = usersData.users?.find((u) => u.role !== "ADMIN");

    test.skip(!targetUser, "Aucun utilisateur démo disponible pour l'impersonation.");
    if (!targetUser) return;

    // 2. Démarrage de l'impersonation
    const startResponse = await request.post("/api/admin/impersonation/start", {
      headers: {
        origin: "http://localhost:3000",
      },
      data: {
        userId: targetUser.id,
        reason: "Test Playwright E2E impersonation support",
      },
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
    const stopResponse = await request.post("/api/admin/impersonation/stop", {
      headers: {
        origin: "http://localhost:3000",
      },
    });
    expect(stopResponse.ok()).toBeTruthy();

    const updatedCookies = await request.storageState();
    await page.context().addCookies(updatedCookies.cookies);

    // 5. Confirmation du retour admin authentifié sans redirection vers /log-in
    await page.goto("/admin");
    await expect(page).not.toHaveURL(/\/log-in/);
    await expect(page.locator("body")).toBeVisible();
  });

  test("un administrateur peut basculer directement sur les 3 comptes demo sans motif avec redirection vers leur univers", async ({
    page,
    request,
  }) => {
    const usersResponse = await request.get("/api/admin/impersonation/users");
    expect(usersResponse.ok()).toBeTruthy();

    const usersData = (await usersResponse.json()) as {
      users?: Array<{ id: string; label: string; secondaryLabel: string | null; role: string }>;
    };

    const demoCollege = usersData.users?.find(
      (u) => u.secondaryLabel === "demo-college@my-exams.local" || u.label.includes("demo-college")
    );
    const demoLycee = usersData.users?.find(
      (u) => u.secondaryLabel === "demo-lycee@my-exams.local" || u.label.includes("demo-lycee")
    );
    const demoSante = usersData.users?.find(
      (u) => u.secondaryLabel === "demo-sante@my-exams.local" || u.label.includes("demo-sante")
    );

    expect(demoCollege).toBeDefined();
    expect(demoLycee).toBeDefined();
    expect(demoSante).toBeDefined();

    // 1. Switch vers demo-college sans reason
    const startCollege = await request.post("/api/admin/impersonation/start", {
      headers: { origin: "http://localhost:3000" },
      data: { userId: demoCollege!.id },
    });
    expect(startCollege.ok()).toBeTruthy();
    const dataCollege = await startCollege.json();
    expect(dataCollege.success).toBe(true);
    expect(dataCollege.redirectTo).toBe("/college");

    await request.post("/api/admin/impersonation/stop", {
      headers: { origin: "http://localhost:3000" },
    });

    // 2. Switch vers demo-lycee sans reason
    const startLycee = await request.post("/api/admin/impersonation/start", {
      headers: { origin: "http://localhost:3000" },
      data: { userId: demoLycee!.id },
    });
    expect(startLycee.ok()).toBeTruthy();
    const dataLycee = await startLycee.json();
    expect(dataLycee.success).toBe(true);
    expect(dataLycee.redirectTo).toBe("/lycee");

    await request.post("/api/admin/impersonation/stop", {
      headers: { origin: "http://localhost:3000" },
    });

    // 3. Switch vers demo-sante sans reason
    const startSante = await request.post("/api/admin/impersonation/start", {
      headers: { origin: "http://localhost:3000" },
      data: { userId: demoSante!.id },
    });
    expect(startSante.ok()).toBeTruthy();
    const dataSante = await startSante.json();
    expect(dataSante.success).toBe(true);
    expect(dataSante.redirectTo).toBe("/sante");

    await request.post("/api/admin/impersonation/stop", {
      headers: { origin: "http://localhost:3000" },
    });
  });

  test("un administrateur ne peut pas basculer sur un utilisateur ordinaire sans motif", async ({
    request,
  }) => {
    const usersResponse = await request.get("/api/admin/impersonation/users");
    expect(usersResponse.ok()).toBeTruthy();

    const usersData = (await usersResponse.json()) as {
      users?: Array<{ id: string; label: string; secondaryLabel: string | null; role: string }>;
    };

    const ordinaryUser = usersData.users?.find(
      (u) =>
        u.role === "USER" &&
        !u.secondaryLabel?.includes("demo-") &&
        !u.label.includes("demo-")
    );

    if (!ordinaryUser) {
      test.skip(!ordinaryUser, "Aucun utilisateur ordinaire non-demo disponible.");
      return;
    }

    const startWithoutReason = await request.post("/api/admin/impersonation/start", {
      headers: { origin: "http://localhost:3000" },
      data: { userId: ordinaryUser.id },
    });
    expect(startWithoutReason.status()).toBe(400);
    const data = await startWithoutReason.json();
    expect(data.error).toContain("Un motif de support valide");
  });
});
