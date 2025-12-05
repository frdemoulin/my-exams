/**
 * Script de découpage d'un ExamPaper en plusieurs Exercises.
 * Squelette (heuristique simple) :
 * 1) Charge un ExamPaper (via ID passé en argument) avec son PDF (subjectUrl).
 * 2) Récupère le texte du PDF (OCR texte via pdf-parse déjà en place).
 * 3) Découpe le texte en blocs par "Exercice X" ou "Partie X" (regex basique).
 * 4) Crée les Exercise correspondants (exerciseNumber, label, statement).
 *
 * À améliorer :
 * - heuristiques plus robustes (détection d'entêtes, "Exercice n", "Partie A/B", etc.)
 * - support des PDF scannés (fallback Tesseract)
 * - mode dry-run (log sans écrire)
 */

import { PrismaClient } from '@prisma/client';
import { PdfParseOcrService } from '@/core/enrichment';

const prisma = new PrismaClient();
const useTesseractFallback = process.env.USE_TESSERACT_FALLBACK === 'true';
const ocr = new PdfParseOcrService({
  minLengthForValidText: 200,
  enableTesseractFallback: useTesseractFallback,
});

function parseArgs() {
  const examPaperId = process.env.EXAM_PAPER_ID || process.argv[2];
  if (!examPaperId) {
    throw new Error('EXAM_PAPER_ID requis (env ou arg)');
  }
  const dryRun = process.env.DRY_RUN === 'true';
  return { examPaperId, dryRun };
}

type ParsedBlock = { label: string; statement: string; exerciseNumber: number; points?: number | null };

function splitExercises(text: string, maxPoints: number): ParsedBlock[] {
  const normalizeLabel = (label: string, fallbackNumber: number) => {
    const numMatch = label.match(/exerc(?:ice|o)\s*(\d+)/i)?.[1];
    let num = numMatch;

    // Heuristique : certains PDF collent "EXERCICE16" pour "Exercice 1 (6 points)"
    if (num && num.length > 1) {
      const first = num[0];
      const tail = num.slice(1);
      const tailNum = parseInt(tail, 10);
      if (!Number.isNaN(tailNum) && tailNum <= 30) {
        num = first; // on garde uniquement le premier chiffre comme numéro d'exercice
      }
    }

    const parsed = num ? parseInt(num, 10) : fallbackNumber;
    return `Exercice ${parsed || fallbackNumber}`;
  };

  const extractPoints = (chunk: string, exerciseNumber: number) => {
    // On cherche un motif "Exercice X ... <n> points" en cherchant le premier nombre suivi de "points"
    // On cherche un motif "Exercice X ... <n> points" en cherchant le premier nombre suivi de "points"
    // Pour éviter la concaténation numéro + points (ex: EXERCICE16 points pour 1 exercice / 6 points)
    // on limite la capture aux 1-2 chiffres précédant "points"
    const match = chunk.match(/(\d{1,2})\s*points?/i);
    if (!match) return null;
    const raw = match[1];
    let pts = parseInt(raw, 10);

    // Heuristique pour "EXERCICE16 points" => Ex 1, 6 points
    const exStr = String(exerciseNumber);
    if (raw.startsWith(exStr) && raw.length > exStr.length) {
      const tail = raw.slice(exStr.length);
      const tailNum = parseInt(tail, 10);
      if (Number.isFinite(tailNum) && tailNum > 0 && tailNum <= maxPoints) {
        return tailNum;
      }
    }

    // Si nombre raisonnable, on retourne tel quel
    if (Number.isFinite(pts) && pts > 0 && pts <= maxPoints) {
      return pts;
    }

    return null;
  };

  /**
   * Heuristique ligne par ligne :
   * - détecte les en-têtes d'exercice ("Exercice 1", "EXERCICE 2", "Exo 3")
   * - les sous-sections ("Partie A/B", "QUESTION 1") sont rattachées AU MÊME exercice
   *   pour éviter de splitter un exercice en plusieurs (cas du sujet Amérique du Nord 2025).
   */
  const exerciseHeaderRegex = /^(exercice|exo)\s+\d+|^EXERCICE\s+\d+/i;
  const subSectionRegex = /^Partie\s+[A-Z]|^QUESTION\s+\d+/i;

  // Normalisation minimale (espaces insécables, retours chariot)
  const normalized = text.replace(/\u00a0/g, ' ').replace(/\r/g, '\n');

  // Détection globale sur le texte pour éviter de rater des entêtes collés ou sans saut de ligne
  let matches = [...normalized.matchAll(/(?:^|\n)[ \t]*(exercice|exo)\s*\d+/gi)];

  // Fallback : si une seule occurrence trouvée, élargir la recherche
  if (matches.length <= 1) {
    matches = [...normalized.matchAll(/exercice\s*\d+/gi)];
  }

  const blocks: ParsedBlock[] = [];

  if (matches.length === 0) {
    // fallback : un seul exercice avec tout le texte
    return [
      {
        label: 'Exercice 1',
        statement: normalized,
        exerciseNumber: 1,
        points: extractPoints(normalized, 1),
      }
    ];
  }

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const start = match.index ?? 0;
    const end = i < matches.length - 1 ? (matches[i + 1].index ?? text.length) : text.length;
    const rawLabel = match[0].trim();

    const chunk = normalized
      .slice(start, end)
      .trim()
      .split('\n')
      .map(line => {
        const t = line.trim();
        if (subSectionRegex.test(t)) {
          return `\n\n${t}\n`;
        }
        return t;
      })
      .join('\n')
      .trim();

    if (chunk.length === 0) continue;

    const exerciseNumber = i + 1;

    blocks.push({
      label: normalizeLabel(rawLabel, exerciseNumber),
      statement: chunk,
      exerciseNumber,
      points: extractPoints(chunk, exerciseNumber),
    });
  }

  if (blocks.length === 0) {
    blocks.push({
      label: 'Exercice 1',
      statement: normalized,
      exerciseNumber: 1,
      points: extractPoints(normalized, 1),
    });
  }

  if (blocks.length === 0) {
    blocks.push({
      label: 'Exercice 1',
      statement: text,
      exerciseNumber: 1,
    });
  }

  return blocks;
}

async function run() {
  const { examPaperId, dryRun } = parseArgs();

  const examPaper = await prisma.examPaper.findUnique({
    where: { id: examPaperId },
    select: {
      id: true,
      label: true,
      sessionYear: true,
      subjectUrl: true,
      totalDuration: true,
      totalPoints: true,
      diploma: { select: { longDescription: true } },
    },
  });

  if (!examPaper) {
    throw new Error(`ExamPaper introuvable: ${examPaperId}`);
  }
  if (!examPaper.subjectUrl) {
    throw new Error('ExamPaper sans subjectUrl (PDF) - impossible de splitter');
  }

  console.log(`Découpage ExamPaper ${examPaper.label} (${examPaper.sessionYear})...`);

  // OCR texte via pdf-parse
  const { text } = await ocr.extract({
    exerciseId: '', // non utilisé ici
    statementUrl: examPaper.subjectUrl,
  });

  console.log(`Texte extrait : ${text.length} caractères`);

  const isBac = examPaper.diploma?.longDescription?.toLowerCase().includes('baccalauréat');
  const defaultMaxPoints = isBac ? 10 : 20;
  const maxPoints = examPaper.totalPoints ? Math.min(examPaper.totalPoints, defaultMaxPoints) : defaultMaxPoints;
  const blocks = splitExercises(text, maxPoints);
  console.log(`Blocs détectés : ${blocks.length}`);
  blocks.forEach((b) => {
    const preview = b.statement.slice(0, 120).replace(/\s+/g, ' ').trim();
    const pointsLabel = b.points ? ` • ${b.points} pts` : '';
    console.log(`📑 ${b.label}${pointsLabel} — ${preview}${b.statement.length > 120 ? '…' : ''}`);
  });

  if (dryRun) {
    console.log(`Dry run : ${blocks.length} exercice(s) seraient créés. Aucune écriture en base.`);
    return;
  }

  const computeDuration = (pts: number | null | undefined) => {
    if (!pts || pts <= 0) return null;
    if (examPaper.totalDuration && examPaper.totalPoints && examPaper.totalPoints > 0) {
      return Math.round((examPaper.totalDuration * pts) / examPaper.totalPoints);
    }
    // fallback Bac spé : 12 min/point
    return Math.round(pts * 12);
  };

  for (const block of blocks) {
    await prisma.exercise.create({
      data: {
        examPaperId: examPaper.id,
        exerciseNumber: block.exerciseNumber,
        label: block.label,
        statement: block.statement,
        points: block.points ?? null,
        estimatedDuration: computeDuration(block.points),
        enrichmentStatus: 'completed',
        themeIds: [],
        keywords: [],
      },
    });
    console.log(`✅ Exercise ${block.exerciseNumber} créé : ${block.label}`);
  }
}

run()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
