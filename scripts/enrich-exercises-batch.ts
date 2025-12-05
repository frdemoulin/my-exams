/**
 * Script batch d'enrichissement (mock, sans appels externes).
 * Étapes :
 * 1) Récupère les exercices pending (limités).
 * 2) OCR mock -> texte.
 * 3) Analyse LLM mock -> métadonnées.
 * 4) Met à jour l'exercice (statement, summary, keywords, estimatedDuration, estimatedDifficulty, themeIds, enrichmentStatus).
 *
 * À adapter avec de vraies implémentations OCR/LLM et un contrôle d'erreurs robuste.
 */

import { PrismaClient } from '@prisma/client';
import {
  MockOcrService,
  MockLlmAnalyzerService,
  PdfParseOcrService,
  OpenAiLlmAnalyzerService,
} from '@/core/enrichment';

const prisma = new PrismaClient();
// Switch mock / réel via variables d'environnement
const useMockOcr = process.env.USE_MOCK_OCR === 'true';
const useTesseractFallback = process.env.USE_TESSERACT_FALLBACK === 'true';
const ocr = useMockOcr
  ? new MockOcrService()
  : new PdfParseOcrService({
      minLengthForValidText: 200,
      enableTesseractFallback: useTesseractFallback,
    });
const useMockLlm = process.env.USE_MOCK_LLM !== 'false' && !process.env.OPENAI_API_KEY ? true : process.env.USE_MOCK_LLM === 'true';
const llm = useMockLlm
  ? new MockLlmAnalyzerService()
  : new OpenAiLlmAnalyzerService();

async function run() {
  const limit = Number(process.env.ENRICH_LIMIT ?? 5);

  console.log(`Use mock OCR: ${useMockOcr} | Use mock LLM: ${useMockLlm} | Limit: ${limit}`);

  const themes = await prisma.theme.findMany({
    select: {
      id: true,
      shortDescription: true,
      longDescription: true,
    },
  });

  const pending = await prisma.exercise.findMany({
    where: { enrichmentStatus: 'pending' },
    take: limit,
    select: {
      id: true,
      exerciseUrl: true,
      statement: true,
      examPaper: {
        select: { subjectUrl: true, label: true },
      },
    },
  });

  if (pending.length === 0) {
    console.log("Aucun exercice en attente d'enrichissement (pending).");
    return;
  }

  for (const ex of pending) {
    try {
      console.log(`Enrichissement exercice ${ex.id} (${ex.examPaper.label || 'sans label'})...`);

      const ocrResult = await ocr.extract({
        exerciseId: ex.id,
        exerciseUrl: ex.exerciseUrl ?? undefined,
        statementUrl: ex.examPaper.subjectUrl ?? undefined,
      });

      const llmResult = await llm.analyze({
        exerciseId: ex.id,
        statement: ex.statement ?? ocrResult.text,
        availableThemes: themes.map((t) => ({
          id: t.id,
          label: t.shortDescription || t.longDescription || t.id,
        })),
      });

      const themeIdSet = new Set(themes.map((t) => t.id));
      const filteredThemes = (llmResult.themeIds ?? []).filter((id) => themeIdSet.has(id));

      await prisma.exercise.update({
        where: { id: ex.id },
        data: {
          statement: ex.statement ?? ocrResult.text,
          title: llmResult.title ?? null,
          summary: llmResult.summary ?? null,
          keywords: llmResult.keywords ?? [],
          estimatedDuration: llmResult.estimatedDuration ?? null,
          estimatedDifficulty: llmResult.estimatedDifficulty ?? null,
          themeIds: filteredThemes,
          enrichmentStatus: 'completed',
          enrichedAt: new Date(),
        },
      });

      console.log(`✅ Exercice ${ex.id} enrichi (durée: ${llmResult.estimatedDuration ?? 'n/a'} min, difficulté: ${llmResult.estimatedDifficulty ?? 'n/a'})`);
    } catch (err) {
      console.error(`❌ Erreur sur ${ex.id}`, err);
      await prisma.exercise.update({
        where: { id: ex.id },
        data: { enrichmentStatus: 'failed' },
      });
    }
  }
}

run()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
