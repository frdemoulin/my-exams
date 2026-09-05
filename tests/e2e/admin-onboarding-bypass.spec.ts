import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "../helpers/session-fixture";

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.describe.serial("Bypass Onboarding pour le rôle ADMIN et guards de navigation", () => {
  const createdUserIds: string[] = [];

  const createSession = async (prefix: string, role: "ADMIN" | "USER") => {
    const email = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@example.com`;
    const user = await prisma.user.create({
      data: {
        email,
        name: `Test ${prefix}`,
        roles: role,
      },
    });
    createdUserIds.push(user.id);

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role,
        email: user.email,
        name: user.name ?? undefined,
      },
    });
    const sessionToken = await encodeAppSessionToken(sessionPayload, { secure: false });

    const url = new URL(appBaseUrl);
    const cookies = [
      {
        name: "authjs.session-token",
        value: sessionToken,
        domain: url.hostname,
        path: "/",
      },
    ];

    return { user, cookies };
  };

  test.afterAll(async () => {
    if (createdUserIds.length > 0) {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: { in: createdUserIds } },
      });
      await prisma.user.deleteMany({
        where: { id: { in: createdUserIds } },
      });
    }
  });

  test("1. ADMIN sans enrollment : accès direct /onboarding redirige vers /admin", async ({
    page,
    context,
  }) => {
    const { cookies } = await createSession("admin-bypass-onboarding", "ADMIN");
    await context.addCookies(cookies);

    await page.goto("/onboarding");
    await expect(page).toHaveURL(/\/admin/);
  });

  test("2. ADMIN sans enrollment : accès direct /dashboard redirige vers /admin", async ({
    page,
    context,
  }) => {
    const { cookies } = await createSession("admin-bypass-dashboard", "ADMIN");
    await context.addCookies(cookies);

    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/admin/);
  });

  test("3. ADMIN sans enrollment : accès direct /dashboard/profil-pedagogique redirige vers /admin", async ({
    page,
    context,
  }) => {
    const { cookies } = await createSession("admin-bypass-profil", "ADMIN");
    await context.addCookies(cookies);

    await page.goto("/dashboard/profil-pedagogique");
    await expect(page).toHaveURL(/\/admin/);
  });

  test("4. ADMIN sans enrollment : visite /sante donne accès à la landing sans redirection ni contenu étudiant", async ({
    page,
    context,
  }) => {
    const { user, cookies } = await createSession("admin-bypass-sante", "ADMIN");
    await context.addCookies(cookies);

    await page.goto("/sante");

    // L'ADMIN reste sur /sante (pas de redirection /onboarding ou /admin)
    await expect(page).toHaveURL(/\/sante$/);

    // La landing Santé de présentation est affichée avec le Hero
    await expect(page.getByText("Entraîne-toi pour réussir ta L1 Santé")).toBeVisible();

    // Aucune table d'UE étudiante ou "Mon espace Santé" n'est affichée
    await expect(page.getByText("Mon espace Santé")).not.toBeVisible();
    await expect(page.getByText("UE disponibles")).not.toBeVisible();

    // Absence du CTA 'Créer mon compte gratuit' pour l'ADMIN connecté
    await expect(page.getByRole("link", { name: /Créer mon compte gratuit/i })).not.toBeVisible();

    // Présence du CTA 'Retour à l'administration'
    await expect(page.getByRole("link", { name: /Retour à l'administration/i })).toBeVisible();

    // Aucun Enrollment créé en base de données pour l'ADMIN
    const enrollmentCount = await prisma.userAcademicEnrollment.count({
      where: { userId: user.id },
    });
    expect(enrollmentCount).toBe(0);
  });

  test("4bis. Visiteur anonyme : visite /sante affiche la landing publique avec 'Créer mon compte gratuit'", async ({
    page,
  }) => {
    await page.goto("/sante");
    await expect(page).toHaveURL(/\/sante$/);
    await expect(page.getByText("Entraîne-toi pour réussir ta L1 Santé")).toBeVisible();
    await expect(page.getByRole("link", { name: /Créer mon compte gratuit/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Retour à l'administration/i })).not.toBeVisible();
  });

  test("5. USER sans enrollment : accès direct /dashboard redirige vers /onboarding", async ({
    page,
    context,
  }) => {
    const { cookies } = await createSession("user-needs-onboarding", "USER");
    await context.addCookies(cookies);

    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/onboarding/);

    // Le formulaire d'onboarding s'affiche
    await expect(page.getByText("Quelle est votre situation pour l'année")).toBeVisible();
    await expect(page.getByRole("button", { name: /Collège/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Lycée/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Santé/i })).toBeVisible();
  });
});
