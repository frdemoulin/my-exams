import { expect, test } from "@playwright/test";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "../helpers/session-fixture";
import { getAdminSessionExpiresAt } from "@/lib/auth/session-cookie";
import { getActiveAcademicYear } from "@/core/academic-year";

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.describe.serial("P1C — Administration des comptes et rectification des affectations", () => {
  const createdUserIds: string[] = [];

  const createAdminSession = async (prefix: string) => {
    const email = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@example.com`;
    const admin = await prisma.user.create({
      data: {
        email,
        name: `Admin ${prefix}`,
        roles: "ADMIN",
      },
    });
    createdUserIds.push(admin.id);

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: admin.id,
        role: "ADMIN",
        email: admin.email,
        name: admin.name ?? undefined,
      },
      adminExpiresAt: getAdminSessionExpiresAt(),
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

    return { admin, cookies };
  };

  const createUserSession = async (prefix: string) => {
    const email = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@example.com`;
    const user = await prisma.user.create({
      data: {
        email,
        name: `User ${prefix}`,
        roles: "USER",
      },
    });
    createdUserIds.push(user.id);

    const sessionPayload = buildAppSessionTokenPayload({
      actor: {
        id: user.id,
        role: "USER",
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
      await prisma.userAcademicEnrollmentCorrection.deleteMany({
        where: {
          enrollment: {
            userId: { in: createdUserIds },
          },
        },
      });
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: { in: createdUserIds } },
      });
      await prisma.user.deleteMany({
        where: { id: { in: createdUserIds } },
      });
    }
  });

  test("1. Contrôle d'accès : un utilisateur non-admin ne peut pas accéder à /admin/users", async ({
    page,
    context,
  }) => {
    const { cookies } = await createUserSession("non-admin");
    await context.addCookies(cookies);

    await page.goto("/admin/users");
    // L'utilisateur doit être bloqué ou redirigé vers /log-in ou l'accueil
    await expect(page).not.toHaveURL(/\/admin\/users$/);
  });

  test("2. Consultation de la liste des utilisateurs par l'administrateur", async ({
    page,
    context,
  }) => {
    const { admin, cookies: adminCookies } = await createAdminSession("super-admin");
    const { user: managedUser } = await createUserSession("target-managed");

    await context.addCookies(adminCookies);

    await page.goto("/admin/users");
    await expect(page).toHaveURL(/\/admin\/users/);

    // Titre de page
    await expect(page.getByRole("heading", { name: "Gestion des comptes" })).toBeVisible();

    // Recherche de l'utilisateur par nom ou email
    const searchInput = page.getByPlaceholder(/Rechercher par nom ou email/i);
    await expect(searchInput).toBeVisible();
    await searchInput.fill(managedUser.name!);
    await page.keyboard.press("Enter");

    // L'utilisateur doit apparaître dans les résultats
    const userRow = page.locator("tr", { hasText: managedUser.email! });
    await expect(userRow).toBeVisible();
    await expect(userRow.getByText("Onboarding requis")).toBeVisible();
  });

  test("3. Création administrative d'une affectation pour un utilisateur non affecté", async ({
    page,
    context,
  }) => {
    const { cookies: adminCookies, admin } = await createAdminSession("creator-admin");
    const { user: freshUser } = await createUserSession("fresh-user");

    await context.addCookies(adminCookies);

    // Naviguer sur la fiche de l'utilisateur
    await page.goto(`/admin/users/${freshUser.id}`);

    await expect(page.getByText("Aucune affectation active")).toBeVisible();
    const createBtn = page.getByRole("button", { name: /Créer l'affectation/i });
    await expect(createBtn).toBeVisible();
    await createBtn.click();

    // La boîte de dialogue s'ouvre
    await expect(page.getByRole("heading", { name: /Créer l'affectation/i })).toBeVisible();

    // Choisir Secondaire
    await page.getByRole("button", { name: /Secondaire/i }).click();

    // Résoudre le grade cible (ex: Première ou autre disponible)
    const targetGrade =
      (await prisma.grade.findFirst({ where: { shortDescription: "1ère" } })) ??
      (await prisma.grade.findFirst());

    const gradeSelect = page.locator("#gradeSelectCreate");
    await gradeSelect.selectOption(targetGrade!.id);

    // Étape de vérification
    await page.getByRole("button", { name: /Vérifier et confirmer/i }).click();

    // Confirmer la création
    await expect(page.getByText("Confirmer la création")).toBeVisible();
    await page.getByRole("button", { name: /Confirmer la création/i }).click();

    // Attendre la fin de l'action serveur (fermeture de la modale et disparition du placeholder vide)
    await expect(page.getByRole("dialog")).not.toBeVisible({ timeout: 15000 });
    await expect(page.getByText("Aucune affectation active")).not.toBeVisible({ timeout: 15000 });

    // L'affectation doit être enregistrée et visible sur la fiche
    await expect(page.getByText("ADMIN").first()).toBeVisible();

    // Vérification BDD
    const enrollment = await prisma.userAcademicEnrollment.findFirst({
      where: { userId: freshUser.id },
    });
    expect(enrollment).not.toBeNull();
    expect(enrollment?.createdBy).toBe("ADMIN");
    expect(enrollment?.createdByActorId).toBe(admin.id);
  });

  test("4. Rectification administrative d'une affectation active avec CAS et motif", async ({
    page,
    context,
  }) => {
    const { cookies: adminCookies, admin } = await createAdminSession("corrector-admin");
    const { user: assignedUser } = await createUserSession("enrolled-user");

    // Créer une affectation initiale en Terminale
    const activeYear = await getActiveAcademicYear();
    const tleGrade = await prisma.grade.findFirst({ where: { shortDescription: "Tle" } });
    const otherGrade = await prisma.grade.findFirst({ where: { shortDescription: "1re" } });
    const targetLabel = otherGrade!.longDescription || otherGrade!.shortDescription;

    const initialEnrollment = await prisma.userAcademicEnrollment.create({
      data: {
        userId: assignedUser.id,
        academicYearId: activeYear!.id,
        audience: "SECONDARY",
        secondaryGradeId: tleGrade!.id,
        secondaryTeachingIds: [],
        createdBy: "SELF_ONBOARDING",
        lockedAt: new Date(),
      },
    });

    await context.addCookies(adminCookies);

    // Naviguer sur la fiche
    await page.goto(`/admin/users/${assignedUser.id}`);

    await expect(page.getByText("Tle").first()).toBeVisible();
    const correctBtn = page.getByRole("button", { name: /Corriger l'affectation/i });
    await expect(correctBtn).toBeVisible();
    await correctBtn.click();

    // Modale de rectification
    await expect(page.getByRole("heading", { name: /Rectifier l'affectation/i })).toBeVisible();

    // Sélectionner un autre niveau
    const gradeSelect = page.locator("#gradeSelect");
    await gradeSelect.selectOption(otherGrade!.id);

    // Saisir un motif obligatoire (> 5 chars)
    const reasonInput = page.locator("#reasonInput");
    await reasonInput.fill("Erreur d'onboarding signalée par ticket support #1092");

    // Bouton de confirmation
    await page.getByRole("button", { name: /Vérifier et confirmer/i }).click();

    // Étape de confirmation
    await expect(page.getByText("Nouvelle affectation :")).toBeVisible();
    await page.getByRole("button", { name: /Confirmer la correction/i }).click();

    // Attendre la fin de l'action serveur (fermeture de la modale)
    await expect(page.getByRole("dialog")).not.toBeVisible({ timeout: 15000 });

    // Succès et rechargement : la carte active affiche le nouveau grade (1re)
    await expect(page.getByText("1re").first()).toBeVisible();

    // Vérifier que le journal des rectifications affiche l'entrée avec le snapshot lisible
    await expect(page.getByText("Journal des rectifications")).toBeVisible();
    await expect(page.getByText("Erreur d'onboarding signalée par ticket support #1092")).toBeVisible();
    await expect(page.getByRole("cell", { name: "Terminale" })).toBeVisible();
    await expect(page.getByRole("cell", { name: "Première" })).toBeVisible();

    // Vérification BDD
    const updatedEnrollment = await prisma.userAcademicEnrollment.findUnique({
      where: { id: initialEnrollment.id },
    });
    expect(updatedEnrollment?.secondaryGradeId).not.toBe(tleGrade!.id);

    const correction = await prisma.userAcademicEnrollmentCorrection.findFirst({
      where: { enrollmentId: initialEnrollment.id },
    });
    expect(correction).not.toBeNull();
    expect(correction?.actorAdminId).toBe(admin.id);
    expect(correction?.reason).toBe("Erreur d'onboarding signalée par ticket support #1092");
  });
});
