import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";
import type { FullConfig } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

import {
  AUTH_SESSION_COOKIE_NAME_SECURE,
  AUTH_SESSION_COOKIE_NAME_INSECURE,
} from "../../src/lib/auth/session-cookie";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export default async function globalSetup(_config: FullConfig) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Sécurité critique : les tests E2E ne peuvent pas être exécutés sur la base de production.");
  }

  if (process.env.E2E_RESET_DB === "true") {
    execSync("npm run db:reset", { stdio: "inherit" });
  }

  const authStatePath = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
  const healthAuthStatePath =
    process.env.E2E_HEALTH_AUTH_STATE ?? "playwright/.auth/health-admin.json";
  const email = process.env.E2E_TEST_EMAIL ?? "admin-e2e@example.com";
  const name = process.env.E2E_TEST_NAME ?? "E2E Admin";
  const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:3000";
  const healthBaseURL =
    process.env.E2E_HEALTH_BASE_URL ??
    `http://sante.lvh.me:${process.env.E2E_PORT ?? "3000"}`;
  const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim();

  process.env.NEXTAUTH_URL = baseURL;

  await fs.mkdir(path.dirname(authStatePath), { recursive: true });

  // 1. Création / mise à jour de l'utilisateur E2E
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        roles: "ADMIN",
      },
    });
  } else if (user.roles !== "ADMIN" || user.name !== name) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        name,
        roles: "ADMIN",
      },
    });
  }

  // 1b. Création / mise à jour de l'utilisateur étudiant E2E (cible autonome pour impersonation)
  const studentEmail = "student-e2e@example.com";
  let studentUser = await prisma.user.findUnique({ where: { email: studentEmail } });
  if (!studentUser) {
    studentUser = await prisma.user.create({
      data: {
        email: studentEmail,
        name: "Étudiant E2E",
        roles: "USER",
      },
    });
  } else if (studentUser.roles !== "USER") {
    studentUser = await prisma.user.update({
      where: { id: studentUser.id },
      data: { roles: "USER" },
    });
  }

  // 2. Affectation pédagogique E2E autonome (URCA 2026-2027)
  const academicYear2026 = await prisma.academicYear.findUnique({
    where: { code: "2026-2027" },
  });

  if (academicYear2026) {
    const urcaInstitution = await prisma.healthInstitution.findFirst({
      where: {
        OR: [
          { uaiCode: "0511296G" },
          { slug: "universite-de-reims-champagne-ardenne" },
        ],
      },
    });

    if (urcaInstitution) {
      const urcaVersion2026 = await prisma.healthProgramVersion.findUnique({
        where: {
          institutionId_slug: {
            institutionId: urcaInstitution.id,
            slug: "las-sps-2026-2027",
          },
        },
      });

      const salsaPathway = urcaVersion2026
        ? await prisma.healthPathway.findUnique({
            where: {
              programVersionId_slug: {
                programVersionId: urcaVersion2026.id,
                slug: "sciences-appliquees-a-la-sante-salsa",
              },
            },
          })
        : null;

      if (urcaVersion2026) {
        await prisma.userAcademicEnrollment.upsert({
          where: {
            userId_academicYearId: {
              userId: user.id,
              academicYearId: academicYear2026.id,
            },
          },
          update: {
            audience: "HEALTH",
            healthProgramVersionId: urcaVersion2026.id,
            healthPathwayId: salsaPathway?.id ?? null,
            lockedAt: new Date("2026-09-01T08:00:00.000Z"),
            createdBy: "ADMIN",
          },
          create: {
            userId: user.id,
            academicYearId: academicYear2026.id,
            audience: "HEALTH",
            healthProgramVersionId: urcaVersion2026.id,
            healthPathwayId: salsaPathway?.id ?? null,
            lockedAt: new Date("2026-09-01T08:00:00.000Z"),
            createdBy: "ADMIN",
          },
        });

        await prisma.userAcademicEnrollment.upsert({
          where: {
            userId_academicYearId: {
              userId: studentUser.id,
              academicYearId: academicYear2026.id,
            },
          },
          update: {
            audience: "HEALTH",
            healthProgramVersionId: urcaVersion2026.id,
            healthPathwayId: salsaPathway?.id ?? null,
            lockedAt: new Date("2026-09-01T08:00:00.000Z"),
            createdBy: "ADMIN",
          },
          create: {
            userId: studentUser.id,
            academicYearId: academicYear2026.id,
            audience: "HEALTH",
            healthProgramVersionId: urcaVersion2026.id,
            healthPathwayId: salsaPathway?.id ?? null,
            lockedAt: new Date("2026-09-01T08:00:00.000Z"),
            createdBy: "ADMIN",
          },
        });
      }
    }
  }

  // 3. Création d'une Session DB réelle pour l'utilisateur E2E
  const sessionToken = crypto.randomUUID();
  const sessionExpires = new Date(Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000);

  // Nettoyage préalable des anciennes sessions E2E pour éviter l'accumulation
  try {
    await prisma.session.deleteMany({
      where: { userId: user.id },
    });
  } catch {
    // Non bloquant si collision temporaire avec dev server
  }

  await prisma.session.create({
    data: {
      sessionToken,
      userId: user.id,
      expires: sessionExpires,
    },
  });

  // 4. Écriture de l'état d'authentification pour Playwright
  async function writeStorageState(
    filePath: string,
    urlValue: string,
    cookieDomain?: string
  ) {
    const url = new URL(urlValue);
    const secure = url.protocol === "https:";
    const cookieName = secure
      ? AUTH_SESSION_COOKIE_NAME_SECURE
      : AUTH_SESSION_COOKIE_NAME_INSECURE;

    const cookieBase = {
      name: cookieName,
      value: sessionToken,
      domain: cookieDomain || url.hostname,
      path: "/",
      httpOnly: true,
      secure,
      sameSite: "Lax" as const,
      expires: Math.floor(sessionExpires.getTime() / 1000),
    };

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(
      filePath,
      JSON.stringify({ cookies: [cookieBase], origins: [] }, null, 2),
      "utf8"
    );
  }

  await Promise.all([
    writeStorageState(authStatePath, baseURL),
    writeStorageState(healthAuthStatePath, healthBaseURL, sharedCookieDomain),
  ]);
}
