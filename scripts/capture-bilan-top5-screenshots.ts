import { PrismaClient } from "@prisma/client";
import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { loadProjectEnv } from "./lib/load-env";
import {
  startOrResumeHealthMockExamAttempt,
  saveHealthMockExamAnswer,
  submitHealthMockExamAttempt,
} from "../src/core/health-mock-exam/health-mock-exam.service";
import { normalizeHealthMockExamQuestion } from "../src/core/health-mock-exam/health-mock-exam.question";

loadProjectEnv();

const prisma = new PrismaClient();

async function main() {
  const tmpDir = path.resolve(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  const courseUnitId = "6a2c2b111af36bd83ac27ec2";
  const userId = "6a146c8b85e9169139bcd88e"; // User E2E Admin

  const createdAttemptIds: string[] = [];

  try {
    console.log("=== 1. Génération des tentatives E2E de fixture ===");

    // Attempt 1: Colle C01 avec 5 Top Points Forts et 5 Top À Retravailler
    const startResult1 = await startOrResumeHealthMockExamAttempt({
      courseUnitId,
      examSlug: "c01",
      userId,
    });

    const attemptId1 = startResult1.attemptId;
    createdAttemptIds.push(attemptId1);
    console.log(`Tentative C01 de fixture créée (ID: ${attemptId1})`);

    // Charger les questions de la tentative 1
    const attemptData1 = await prisma.userHealthMockExamAttempt.findUniqueOrThrow({
      where: { id: attemptId1 },
      include: {
        attemptQuestions: {
          include: {
            question: true,
          },
        },
      },
    });

    // Déterminer les 5 premiers thèmes pour Points Forts (100%) et 5 thèmes suivants pour À Retravailler (0%)
    const themeToQuestionsMap = new Map<string, typeof attemptData1.attemptQuestions>();
    for (const aq of attemptData1.attemptQuestions) {
      for (const tid of aq.question.themeIds) {
        if (!themeToQuestionsMap.has(tid)) {
          themeToQuestionsMap.set(tid, []);
        }
        themeToQuestionsMap.get(tid)!.push(aq);
      }
    }

    const themeIds = Array.from(themeToQuestionsMap.keys());
    console.log(`Thèmes uniques trouvés dans C01: ${themeIds.length}`);

    const strengthThemeIds = new Set(themeIds.slice(0, 5));
    const reviewThemeIds = new Set(themeIds.slice(5, 10));

    // Enregistrer les réponses
    for (const aq of attemptData1.attemptQuestions) {
      const canonicalQuestion = normalizeHealthMockExamQuestion(aq.question);
      const isStrength = aq.question.themeIds.some((id) => strengthThemeIds.has(id));
      const isReview = aq.question.themeIds.some((id) => reviewThemeIds.has(id));

      let selectedChoiceIndexes: number[] = [];
      let responsePayload: unknown = null;

      if (canonicalQuestion.type === "mcq") {
        const correctIndexes = canonicalQuestion.choices
          .map((c, i) => (c.correct ? i : -1))
          .filter((i) => i >= 0);
        const wrongIndex = canonicalQuestion.choices.findIndex((c) => !c.correct);

        if (isStrength) {
          selectedChoiceIndexes = correctIndexes.length > 0 ? correctIndexes : [0];
        } else if (isReview) {
          selectedChoiceIndexes = [wrongIndex >= 0 ? wrongIndex : 0];
        } else {
          selectedChoiceIndexes = correctIndexes.length > 0 ? correctIndexes : [0];
        }
      } else {
        selectedChoiceIndexes = [];
        responsePayload = null;
      }

      await saveHealthMockExamAnswer({
        attemptId: attemptId1,
        attemptQuestionId: aq.id,
        userId,
        selectedChoiceIndexes,
        responsePayload,
        markedForReview: false,
      });
    }

    await submitHealthMockExamAttempt({ attemptId: attemptId1, userId });
    console.log(`Tentative C01 (ID: ${attemptId1}) soumise avec succès.`);

    console.log("=== 2. Captures d'écran avec Playwright ===");
    const browser = await chromium.launch();
    const authStatePath = path.resolve(process.cwd(), "playwright/.auth/admin.json");
    const context = await browser.newContext({
      storageState: fs.existsSync(authStatePath) ? authStatePath : undefined,
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();

    // 1. Page Bilan C01 Desktop (1440px)
    const bilanUrl1 = `http://localhost:3000/sante/ue/${courseUnitId}/colles/c01/resultats/${attemptId1}`;
    console.log(`Capture Desktop Bilan 1440px sur ${bilanUrl1}...`);
    await page.goto(bilanUrl1);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('[data-testid="health-mock-exam-results"]');
    await page.screenshot({ path: path.join(tmpDir, "bilan_c01_desktop_no_consolidation_block.png"), fullPage: true });

    // 2. Page Bilan C01 Mobile (375px)
    console.log("Capture Mobile Bilan 375px...");
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(tmpDir, "bilan_c01_mobile_375.png"), fullPage: true });

    // 3. Page Correction C01 Desktop (1440px) - Légende fermée
    const correctionUrl1 = `http://localhost:3000/sante/ue/${courseUnitId}/colles/c01/resultats/${attemptId1}/correction`;
    console.log(`Capture Desktop Correction 1440px (légende fermée) sur ${correctionUrl1}...`);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(correctionUrl1);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('[data-testid="health-mock-exam-correction"]');
    await page.screenshot({ path: path.join(tmpDir, "correction_c01_desktop_legend_closed.png"), fullPage: true });

    // 4. Page Correction C01 Desktop (1440px) - Légende ouverte
    console.log("Ouverture du Popover Code couleur Desktop...");
    const triggerDesktop = page.getByTestId("health-evaluation-color-legend-trigger").first();
    await triggerDesktop.click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(tmpDir, "correction_c01_desktop_legend_open.png"), fullPage: true });

    // 5. Page Correction C01 Mobile (375px) - Légende ouverte
    console.log("Capture Mobile Correction 375px avec légende ouverte...");
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(300);
    const triggerMobile = page.getByTestId("health-evaluation-color-legend-trigger").first();
    if (await triggerMobile.isVisible()) {
      await triggerMobile.click();
      await page.waitForTimeout(300);
    }
    await page.screenshot({ path: path.join(tmpDir, "correction_c01_mobile_375_legend_open.png"), fullPage: true });

    await browser.close();
    console.log("Toutes les captures d'écran ont été sauvegardées dans tmp/ avec succès.");

  } finally {
    console.log("=== 3. Purge sélective des tentatives E2E générées ===");
    if (createdAttemptIds.length > 0) {
      await prisma.userHealthMockExamAttemptQuestion.deleteMany({
        where: { attemptId: { in: createdAttemptIds } },
      });
      await prisma.userHealthMockExamAttemptSectionResult.deleteMany({
        where: { attemptId: { in: createdAttemptIds } },
      });
      const deleteResult = await prisma.userHealthMockExamAttempt.deleteMany({
        where: { id: { in: createdAttemptIds } },
      });

      console.log(`RÉSULTAT PURGE E2E: ${deleteResult.count} tentative(s) E2E supprimée(s) exactement.`);
    } else {
      console.log("Aucune tentative n'a été créée.");
    }
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("Erreur dans le script de capture E2E:", err);
  process.exit(1);
});
