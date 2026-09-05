import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs";
import prisma from "@/lib/db/prisma";
import {
  buildAppSessionTokenPayload,
  encodeAppSessionToken,
} from "../helpers/session-fixture";

const screenshotDir = path.resolve(process.cwd(), "tmp/screenshots");
const artifactDir = "/Users/frdemoulin/.gemini/antigravity-ide/brain/17f66413-cf89-49b2-bac4-f81073f218ec";

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

test.beforeAll(() => {
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }
});

function copyToArtifact(fileName: string) {
  const src = path.join(screenshotDir, fileName);
  const dest = path.join(artifactDir, fileName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

test.describe.serial("Captures et assertions responsives de l'onboarding", () => {
  let userCookies: any[] = [];
  let testUserId: string | null = null;

  test.beforeAll(async () => {
    const email = `onboarding-captures-${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: {
        email,
        name: "Onboarding Capture User",
        roles: "USER",
      },
    });
    testUserId = user.id;

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
    userCookies = [
      {
        name: "authjs.session-token",
        value: sessionToken,
        domain: url.hostname,
        path: "/",
      },
    ];
  });

  test.afterAll(async () => {
    if (testUserId) {
      await prisma.userAcademicEnrollment.deleteMany({ where: { userId: testUserId } });
      await prisma.user.deleteMany({ where: { id: testUserId } });
    }
  });

  test("1. Onboarding Étape 1 desktop 1440px — 3 cartes sur 1 ligne", async ({ page, context }) => {
    await context.addCookies(userCookies);
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.goto("/onboarding");
    await page.waitForLoadState("networkidle");

    // Vérifier titre et badge
    await expect(page.getByText("Affectation annuelle")).toBeVisible();
    await expect(page.getByText("Quelle est votre situation pour l'année")).toBeVisible();

    const collegeBtn = page.getByRole("button", { name: /Collège/i });
    const lyceeBtn = page.getByRole("button", { name: /Lycée/i });
    const santeBtn = page.getByRole("button", { name: /Santé/i });

    await expect(collegeBtn).toBeVisible();
    await expect(lyceeBtn).toBeVisible();
    await expect(santeBtn).toBeVisible();

    // Vérifier l'alignement sur une seule ligne à 1440px (même position Y)
    const collegeBox = await collegeBtn.boundingBox();
    const lyceeBox = await lyceeBtn.boundingBox();
    const santeBox = await santeBtn.boundingBox();

    expect(collegeBox).not.toBeNull();
    expect(lyceeBox).not.toBeNull();
    expect(santeBox).not.toBeNull();

    // À 1440px, les trois cartes sont alignées horizontalement
    expect(Math.abs(collegeBox!.y - lyceeBox!.y)).toBeLessThan(5);
    expect(Math.abs(lyceeBox!.y - santeBox!.y)).toBeLessThan(5);

    // Capture d'écran 1440px
    const screenshotPath = path.join(screenshotDir, "onboarding-desktop-1440.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    copyToArtifact("onboarding-desktop-1440.png");
  });

  test("2. Onboarding Étape 1 tablette 768px — 2 colonnes sans écrasement", async ({ page, context }) => {
    await context.addCookies(userCookies);
    await page.setViewportSize({ width: 768, height: 1024 });

    await page.goto("/onboarding");
    await page.waitForLoadState("networkidle");

    const collegeBtn = page.getByRole("button", { name: /Collège/i });
    const lyceeBtn = page.getByRole("button", { name: /Lycée/i });
    const santeBtn = page.getByRole("button", { name: /Santé/i });

    await expect(collegeBtn).toBeVisible();
    await expect(lyceeBtn).toBeVisible();
    await expect(santeBtn).toBeVisible();

    const collegeBox = await collegeBtn.boundingBox();
    const lyceeBox = await lyceeBtn.boundingBox();
    const santeBox = await santeBtn.boundingBox();

    // À 768px (md), Collège et Lycée sont sur la ligne 1, Santé en dessous (pleine largeur ou 2e ligne)
    expect(Math.abs(collegeBox!.y - lyceeBox!.y)).toBeLessThan(5);
    expect(santeBox!.y).toBeGreaterThan(collegeBox!.y);

    // Capture d'écran 768px
    const screenshotPath = path.join(screenshotDir, "onboarding-tablet-768.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    copyToArtifact("onboarding-tablet-768.png");
  });

  test("3. Onboarding Étape 1 mobile 375px — 1 colonne, sans scroll horizontal", async ({ page, context }) => {
    await context.addCookies(userCookies);
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto("/onboarding");
    await page.waitForLoadState("networkidle");

    const collegeBtn = page.getByRole("button", { name: /Collège/i });
    const lyceeBtn = page.getByRole("button", { name: /Lycée/i });
    const santeBtn = page.getByRole("button", { name: /Santé/i });

    await expect(collegeBtn).toBeVisible();
    await expect(lyceeBtn).toBeVisible();
    await expect(santeBtn).toBeVisible();

    const collegeBox = await collegeBtn.boundingBox();
    const lyceeBox = await lyceeBtn.boundingBox();
    const santeBox = await santeBtn.boundingBox();

    // À 375px, les cartes sont empilées verticalement
    expect(lyceeBox!.y).toBeGreaterThan(collegeBox!.y);
    expect(santeBox!.y).toBeGreaterThan(lyceeBox!.y);

    // Vérifier l'absence de débordement horizontal
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Capture d'écran 375px
    const screenshotPath = path.join(screenshotDir, "onboarding-mobile-375.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    copyToArtifact("onboarding-mobile-375.png");
  });
});
