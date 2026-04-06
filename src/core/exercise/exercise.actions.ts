'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/db/prisma';
import { ExerciseType } from '@prisma/client';
import {
  extractPdfTextByPages,
  extractPdfTextByPageRanges,
  MockOcrService,
  PdfParseOcrService,
  MockExamPaperSplitterService,
  MockLlmAnalyzerService,
  OpenAiExamPaperSplitterService,
  OpenAiLlmAnalyzerService,
} from '@/core/enrichment';
import { createExerciseSchema, updateExerciseSchema, type CreateExerciseInput, type UpdateExerciseInput } from './exercise.types';

type EnrichmentTarget = {
  id: string;
  examPaperId: string;
  statement: string | null;
  exerciseUrl: string | null;
  points: number | null;
  pageStart: number | null;
  pageEnd: number | null;
  themeIds: string[];
  exerciseType: string | null;
  corrections: Array<{
    url: string;
    type: string;
    quality: number | null;
    source: string;
  }>;
  examPaper: {
    subjectUrl: string | null;
    label: string | null;
    totalDuration: number | null;
    totalPoints: number | null;
    corrections: Array<{
      url: string;
      type: string;
      quality: number | null;
      source: string;
    }>;
    teaching: {
      longDescription: string | null;
      shortDescription: string | null;
      subject: {
        id: string;
        longDescription: string | null;
        shortDescription: string | null;
      } | null;
    } | null;
  };
};

type EnrichmentContext = {
  ocr: MockOcrService | PdfParseOcrService;
  llm: MockLlmAnalyzerService | OpenAiLlmAnalyzerService;
  useMockOcr: boolean;
  useMockLlm: boolean;
  useTesseractFallback: boolean;
  minLengthForValidText: number;
  availableThemes: Array<{
    id: string;
    label: string;
    domainLabel: string | null;
    aliases: string[];
    subjectId: string;
  }>;
  themeIdSet: Set<string>;
  themeAliasToIds: Map<string, string[]>;
  textCache: Map<string, string>;
};

const normalizeThemeKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const addThemeAlias = (map: Map<string, string[]>, alias: string | null | undefined, themeId: string) => {
  if (!alias) return;
  const normalized = normalizeThemeKey(alias);
  if (!normalized) return;
  const existing = map.get(normalized) ?? [];
  if (!existing.includes(themeId)) {
    existing.push(themeId);
    map.set(normalized, existing);
  }
};

const THEME_ALIAS_RULES: Array<{
  matchers: string[];
  aliases: string[];
}> = [
  {
    matchers: ['oxydo', 'redox'],
    aliases: [
      'oxydoreduction',
      'oxydo reduction',
      'redox',
      'reaction electrochimique',
      'electrochimie',
      'anode',
      'cathode',
      'electrode',
      'electrolyte',
      'pile',
      'pile a combustible',
      'demi equation electronique',
    ],
  },
  {
    matchers: ['transformations chimiques'],
    aliases: [
      'transformation chimique',
      'equation de reaction',
      'equation bilan',
      'catalyseur',
      'catalyse',
      'reformage',
      'vaporeformage',
    ],
  },
  {
    matchers: ['avancement'],
    aliases: [
      'stoechiometrie',
      'quantite de matiere',
      'mole',
      'reactif limitant',
      'proportions stoechiometriques',
    ],
  },
  {
    matchers: ['tension electrique'],
    aliases: ['difference de potentiel', 'tension a vide', 'voltage'],
  },
  {
    matchers: ['energie electrique'],
    aliases: ['capacite electrique', 'charge electrique', 'energie stockee'],
  },
];

const expandThemeAliases = (aliases: string[]) => {
  const expanded = new Set(
    aliases
      .map((alias) => alias?.trim())
      .filter((alias): alias is string => Boolean(alias))
  );
  const normalizedBlob = normalizeThemeKey(Array.from(expanded).join(' '));

  for (const rule of THEME_ALIAS_RULES) {
    if (rule.matchers.some((matcher) => normalizedBlob.includes(matcher))) {
      rule.aliases.forEach((alias) => expanded.add(alias));
    }
  }

  return Array.from(expanded);
};

const countOccurrences = (haystack: string, needle: string) => {
  if (!haystack || !needle) return 0;

  let count = 0;
  let cursor = 0;
  while (cursor < haystack.length) {
    const foundIndex = haystack.indexOf(needle, cursor);
    if (foundIndex === -1) break;
    count += 1;
    cursor = foundIndex + Math.max(needle.length, 1);
  }

  return count;
};

const buildThemeFocusText = (statementText: string, correctionText: string | null) => {
  const focusedLines: string[] = [];
  const statementLines = statementText.split('\n');
  let insideDataBlock = false;

  for (const rawLine of statementLines) {
    const line = rawLine.trim();
    if (!line) continue;

    const normalized = normalizeThemeKey(line);
    if (normalized.startsWith('donnees') || normalized.startsWith('donnee')) {
      insideDataBlock = true;
      continue;
    }

    if (/^q\d+\b/i.test(line)) {
      insideDataBlock = false;
      focusedLines.push(line);
      continue;
    }

    if (
      /^exercice\s+\d+/i.test(line) ||
      /^partie\s+\d+/i.test(line) ||
      /^objectif/i.test(line)
    ) {
      focusedLines.push(line);
      continue;
    }

    if (insideDataBlock) {
      continue;
    }

    if (line.length <= 240) {
      focusedLines.push(line);
    }
  }

  if (correctionText?.trim()) {
    focusedLines.push(correctionText.trim());
  }

  return focusedLines.join('\n');
};

const THEME_TOKEN_STOPWORDS = new Set([
  'avec',
  'dans',
  'pour',
  'entre',
  'cette',
  'cet',
  'plus',
  'moins',
  'dune',
  'dun',
  'tres',
  'leurs',
  'leur',
  'theme',
  'point',
  'points',
  'etude',
]);

const scoreThemeCandidate = (
  sourceText: string,
  theme: {
    label: string;
    aliases: string[];
    domainLabel: string | null;
  }
) => {
  const normalizedText = normalizeThemeKey(sourceText);
  if (!normalizedText) return 0;

  const aliases = Array.from(
    new Set(
      [theme.label, ...theme.aliases]
        .map((alias) => alias?.trim())
        .filter((alias): alias is string => Boolean(alias))
    )
  );

  let bestScore = 0;

  for (const alias of aliases) {
    const normalizedAlias = normalizeThemeKey(alias);
    if (!normalizedAlias || normalizedAlias.length < 4) continue;

    let score = 0;
    const exactHits = countOccurrences(normalizedText, normalizedAlias);
    if (exactHits > 0) {
      score += Math.min(4, exactHits) * 40;
      if (normalizedAlias.includes(' ')) {
        score += 8;
      }
    }

    const tokens = normalizedAlias
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length >= 5 && !THEME_TOKEN_STOPWORDS.has(token));
    const tokenHits = new Set(tokens.filter((token) => normalizedText.includes(token)));
    score += tokenHits.size * 4;
    if (tokenHits.size >= 2) {
      score += 6;
    }

    if (score > bestScore) bestScore = score;
  }

  if (
    theme.domainLabel &&
    normalizedText.includes(normalizeThemeKey(theme.domainLabel))
  ) {
    bestScore += 1;
  }

  return bestScore;
};

type RankedThemeCandidate<
  T extends {
    id: string;
    label: string;
    aliases: string[];
    domainLabel: string | null;
  }
> = {
  theme: T;
  score: number;
};

const rankThemeCandidates = <
  T extends {
    id: string;
    label: string;
    aliases: string[];
    domainLabel: string | null;
  }
>(
  sourceText: string,
  themes: T[]
) => {
  return themes
    .map((theme) => ({
      theme,
      score: scoreThemeCandidate(sourceText, theme),
    }))
    .filter((entry) => entry.score >= 2)
    .sort((a, b) => b.score - a.score);
};

const buildThemeShortlist = <
  T extends {
    id: string;
    label: string;
    aliases: string[];
    domainLabel: string | null;
  }
>(
  ranked: RankedThemeCandidate<T>[],
  themes: T[],
  limit = 18
) => {
  if (ranked.length === 0) {
    return themes;
  }

  return ranked.slice(0, limit).map((entry) => entry.theme);
};

const isPhysicsSubject = (labels: Array<string | null | undefined>) => {
  return labels.some((label) => {
    if (!label) return false;
    const normalized = normalizeScanText(label);
    return (
      normalized.includes('physique') ||
      normalized.includes('physique-chimie') ||
      normalized.includes('sciences physiques')
    );
  });
};

const roundDuration = (minutes: number) => {
  if (!Number.isFinite(minutes) || minutes <= 0) return null;
  return Math.max(5, Math.round(minutes / 5) * 5);
};

const resolveMinutesPerPoint = (target: EnrichmentTarget) => {
  const totalDuration = target.examPaper.totalDuration;
  const totalPoints = target.examPaper.totalPoints;
  if (totalDuration && totalPoints && totalPoints > 0) {
    return totalDuration / totalPoints;
  }

  const subjectLabels = [
    target.examPaper.teaching?.longDescription,
    target.examPaper.teaching?.shortDescription,
    target.examPaper.teaching?.subject?.longDescription,
    target.examPaper.teaching?.subject?.shortDescription,
  ];

  if (isMathSubject(subjectLabels)) return 12;
  if (isPhysicsSubject(subjectLabels)) return 10.5;
  return null;
};

const resolveEstimatedDuration = (
  target: EnrichmentTarget,
  llmDuration: number | null | undefined
) => {
  const minutesPerPoint = resolveMinutesPerPoint(target);
  if (minutesPerPoint && target.points && target.points > 0) {
    return roundDuration(target.points * minutesPerPoint);
  }

  if (typeof llmDuration === 'number' && Number.isFinite(llmDuration) && llmDuration > 0) {
    return roundDuration(llmDuration);
  }

  return null;
};

const resolveThemeIds = (
  llmResult: { themeIds?: string[]; themeLabels?: string[] },
  allowedThemeIds: Set<string>,
  allowedThemeAliasToIds: Map<string, string[]>
) => {
  const resolved = new Set<string>();

  const register = (value: string | null | undefined) => {
    if (!value) return;
    if (allowedThemeIds.has(value)) {
      resolved.add(value);
      return;
    }

    const matches = allowedThemeAliasToIds.get(normalizeThemeKey(value)) ?? [];
    matches.forEach((id) => resolved.add(id));
  };

  (llmResult.themeIds ?? []).forEach(register);
  (llmResult.themeLabels ?? []).forEach(register);

  return Array.from(resolved);
};

const buildSubjectLabel = (target: EnrichmentTarget) => {
  const parts = [
    target.examPaper.teaching?.longDescription,
    target.examPaper.teaching?.subject?.longDescription,
    target.examPaper.label,
  ].filter(Boolean);
  return parts.join(' | ') || null;
};

const isPdfCorrection = (correction: { url: string; type: string }) => {
  return correction.type === 'pdf' || /\.pdf(?:$|[?#])/i.test(correction.url);
};

const pickCorrectionForEnrichment = (target: EnrichmentTarget) => {
  const preferred = [...target.corrections]
    .sort((a, b) => (b.quality ?? 0) - (a.quality ?? 0))
    .find(isPdfCorrection);
  if (preferred) return preferred;

  return [...target.examPaper.corrections]
    .sort((a, b) => (b.quality ?? 0) - (a.quality ?? 0))
    .find(isPdfCorrection) ?? null;
};

const clipContextText = (text: string, maxChars = 9000) => {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxChars) return cleaned;
  const head = Math.floor(maxChars * 0.7);
  const tail = maxChars - head - 5;
  return `${cleaned.slice(0, head)} ... ${cleaned.slice(-tail)}`;
};

const buildEnrichmentContext = async (): Promise<EnrichmentContext> => {
  const useMockOcr = process.env.USE_MOCK_OCR === 'true';
  const useTesseractFallback = process.env.USE_TESSERACT_FALLBACK === 'true';
  const useMockLlm =
    (process.env.USE_MOCK_LLM !== 'false' && !process.env.OPENAI_API_KEY) ||
    process.env.USE_MOCK_LLM === 'true';
  const minLengthForValidText = 200;

  const ocr = useMockOcr
    ? new MockOcrService()
    : new PdfParseOcrService({
        minLengthForValidText,
        enableTesseractFallback: useTesseractFallback,
      });
  const llm = useMockLlm ? new MockLlmAnalyzerService() : new OpenAiLlmAnalyzerService();

  const themes = await prisma.theme.findMany({
    select: {
      id: true,
      title: true,
      shortTitle: true,
      shortDescription: true,
      longDescription: true,
      domain: {
        select: {
          subjectId: true,
          longDescription: true,
          shortDescription: true,
        },
      },
    },
  });

  const themeAliasToIds = new Map<string, string[]>();
  const availableThemes = themes.map((t) => {
    const domainLabel = t.domain.shortDescription || t.domain.longDescription || null;
    const aliases = expandThemeAliases([
      t.title,
      t.shortTitle,
      t.shortDescription,
      t.longDescription,
    ].filter((value): value is string => Boolean(value?.trim())));

    aliases.forEach((alias) => addThemeAlias(themeAliasToIds, alias, t.id));

    return {
      id: t.id,
      label: t.title || t.shortTitle || t.shortDescription || t.id,
      domainLabel,
      aliases,
      subjectId: t.domain.subjectId,
    };
  });

  return {
    ocr,
    llm,
    useMockOcr,
    useMockLlm,
    useTesseractFallback,
    minLengthForValidText,
    themeIdSet: new Set(themes.map((t) => t.id)),
    availableThemes,
    themeAliasToIds,
    textCache: new Map<string, string>(),
  };
};

const enrichExerciseRecord = async (ex: EnrichmentTarget, context: EnrichmentContext) => {
  const statementText = ex.statement?.trim();
  let ocrText = statementText;

  if (!ocrText) {
    const hasPageRange =
      typeof ex.pageStart === 'number' &&
      typeof ex.pageEnd === 'number' &&
      ex.pageStart > 0 &&
      ex.pageEnd > 0;

    if (!ex.exerciseUrl && ex.examPaper.subjectUrl && hasPageRange) {
      const [rangeText] = await extractPdfTextByPageRanges({
        pdfUrl: ex.examPaper.subjectUrl,
        pageRanges: [{ pageStart: ex.pageStart as number, pageEnd: ex.pageEnd as number }],
        minLengthForValidText: context.minLengthForValidText,
        enableTesseractFallback: context.useTesseractFallback,
      });

      if (!rangeText?.trim()) {
        throw new Error(
          `Aucun texte extrait pour les pages ${ex.pageStart}-${ex.pageEnd}`
        );
      }

      ocrText = rangeText;
    } else {
      ocrText = (
        await context.ocr.extract({
          exerciseId: ex.id,
          exerciseUrl: ex.exerciseUrl ?? undefined,
          statementUrl: ex.examPaper.subjectUrl ?? undefined,
        })
      ).text;
    }
  }

  let correctionText: string | null = null;
  const correction = pickCorrectionForEnrichment(ex);
  const subjectId = ex.examPaper.teaching?.subject?.id ?? null;
  const scopedThemes =
    subjectId
      ? context.availableThemes.filter((theme) => theme.subjectId === subjectId)
      : context.availableThemes;
  const baseThemes = scopedThemes.length > 0 ? scopedThemes : context.availableThemes;

  if (correction?.url) {
    const cached = context.textCache.get(correction.url);
    if (cached) {
      correctionText = cached;
    } else {
      try {
        const extracted = await context.ocr.extract({
          exerciseId: ex.id,
          exerciseUrl: correction.url,
        });
        if (extracted.text?.trim()) {
          correctionText = clipContextText(extracted.text);
          context.textCache.set(correction.url, correctionText);
        }
      } catch (error) {
        console.warn('Unable to extract correction text for enrichment:', ex.id, correction.url, error);
      }
    }
  }

  const themeSourceText = buildThemeFocusText(ocrText, correctionText);
  const rankedThemes = rankThemeCandidates(themeSourceText, baseThemes);
  const effectiveThemes = buildThemeShortlist(rankedThemes, baseThemes);
  const allowedThemeIds = new Set(effectiveThemes.map((theme) => theme.id));
  const allowedThemeAliasToIds = new Map<string, string[]>();

  effectiveThemes.forEach((theme) => {
    addThemeAlias(allowedThemeAliasToIds, theme.label, theme.id);
    addThemeAlias(allowedThemeAliasToIds, theme.domainLabel, theme.id);
    theme.aliases.forEach((alias) => addThemeAlias(allowedThemeAliasToIds, alias, theme.id));
  });

  const llmResult = await context.llm.analyze({
    exerciseId: ex.id,
    statement: ocrText,
    correctionText,
    exercisePoints: ex.points,
    examTotalDuration: ex.examPaper.totalDuration,
    examTotalPoints: ex.examPaper.totalPoints,
    subjectLabel: buildSubjectLabel(ex),
    availableThemes: effectiveThemes,
  });

  const filteredThemes = resolveThemeIds(llmResult, allowedThemeIds, allowedThemeAliasToIds);
  const heuristicFallbackThemeIds = rankedThemes
    .filter((entry) => entry.score >= 8)
    .slice(0, 3)
    .map((entry) => entry.theme.id);

  const mergedThemes =
    filteredThemes.length > 0
      ? filteredThemes.slice(0, 5)
      : heuristicFallbackThemeIds.length > 0
        ? heuristicFallbackThemeIds
        : ex.themeIds.slice(0, 5);

  const resolvedExerciseType: ExerciseType =
    llmResult.exerciseType && llmResult.exerciseType !== 'NORMAL'
      ? (llmResult.exerciseType as ExerciseType)
      : (ex.exerciseType as ExerciseType) ?? (llmResult.exerciseType as ExerciseType) ?? 'NORMAL';
  const summaryWithType = ensureSummaryMentionsType(
    llmResult.summary ?? null,
    resolvedExerciseType
  );

  await prisma.exercise.update({
    where: { id: ex.id },
    data: {
      statement: statementText ? ex.statement : ocrText,
      title: llmResult.title ?? null,
      summary: summaryWithType,
      keywords: llmResult.keywords ?? [],
      estimatedDuration: resolveEstimatedDuration(ex, llmResult.estimatedDuration),
      estimatedDifficulty: llmResult.estimatedDifficulty ?? null,
      themeIds: mergedThemes,
      exerciseType: resolvedExerciseType,
      enrichmentStatus: 'completed',
      enrichedAt: new Date(),
    },
  });
};

type SplitExerciseSuggestion = {
  exerciseNumber: number;
  label: string | null;
  pageStart: number | null;
  pageEnd: number | null;
  points?: number | null;
  estimatedDuration?: number | null;
  confidence?: number | null;
  flags?: string[];
};

const buildPageSnippet = (text: string, head = 900, tail = 900) => {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= head + tail + 40) {
    return cleaned;
  }
  return `${cleaned.slice(0, head)} ... ${cleaned.slice(-tail)}`;
};

const coercePositiveInt = (value: unknown): number | null => {
  const numberValue = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numberValue)) return null;
  const intValue = Math.trunc(numberValue);
  return intValue > 0 ? intValue : null;
};

const parseRomanNumeral = (value: string): number | null => {
  const roman = value.toUpperCase();
  const map: Record<string, number> = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  };
  return map[roman] ?? null;
};

const parseExerciseNumber = (value: string): number | null => {
  if (/^\d+$/.test(value)) {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  return parseRomanNumeral(value);
};

const extractPointsByExercise = (pageTexts: string[]) => {
  const pointsByExercise = new Map<number, number>();
  const regex =
    /\bEXERCICE\s+([0-9]+|[IVX]+)\b(?:[\s\S]{0,40}?(\d{1,3})\s*points?\b)?/gi;

  for (const text of pageTexts) {
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const exerciseNumber = parseExerciseNumber(match[1]);
      if (!exerciseNumber || pointsByExercise.has(exerciseNumber)) continue;

      const points = coercePositiveInt(match[2]);
      if (points && points <= 100) {
        pointsByExercise.set(exerciseNumber, points);
      }
    }
  }

  return pointsByExercise;
};

const normalizeScanText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();

const ensureSummaryMentionsType = (summary: string | null, exerciseType: string | null) => {
  if (!summary) return summary;
  if (exerciseType !== 'QCM' && exerciseType !== 'TRUE_FALSE') return summary;

  const normalized = normalizeScanText(summary);
  const mentionsQcm = /\bqcm\b/.test(normalized);
  const mentionsTrueFalse = /\b(vrai\s*\/\s*faux|vrai ou faux|vrai-faux|v\/f|vf)\b/.test(normalized);

  if (exerciseType === 'QCM' && mentionsQcm) return summary;
  if (exerciseType === 'TRUE_FALSE' && mentionsTrueFalse) return summary;

  const suffix = exerciseType === 'QCM' ? ' Format QCM.' : ' Format vrai/faux.';
  const trimmed = summary.trim();
  const base = trimmed.endsWith('.') ? trimmed : `${trimmed}.`;
  return `${base}${suffix}`.replace('..', '.');
};

const parseExamPaperTotals = (text: string) => {
  const normalized = normalizeScanText(text);
  let totalDurationMinutes: number | null = null;
  let totalPoints: number | null = null;

  const durationMatch = normalized.match(
    /duree[^0-9]{0,40}(\d{1,2})\s*(?:h|heures?|heure)\s*([0-5]?\d)?\s*(?:min|minutes)?/
  );

  if (durationMatch) {
    const hours = coercePositiveInt(durationMatch[1]);
    const minutes = durationMatch[2] ? coercePositiveInt(durationMatch[2]) : 0;
    if (hours) {
      totalDurationMinutes = hours * 60 + (minutes ?? 0);
    }
  }

  const pointsMatch =
    normalized.match(/(?:sur|\/)\s*([0-9]{1,3})\s*points?\b/) ??
    normalized.match(/notee?\s*sur\s*([0-9]{1,3})\b/);

  if (pointsMatch) {
    const points = coercePositiveInt(pointsMatch[1]);
    if (points && points <= 100) {
      totalPoints = points;
    }
  }

  return { totalDurationMinutes, totalPoints };
};

const isMathSubject = (labels: Array<string | null | undefined>) => {
  return labels.some((label) => {
    if (!label) return false;
    const normalized = normalizeScanText(label);
    return normalized.includes('math');
  });
};

const normalizeSplitSuggestions = (
  rawExercises: Array<Partial<SplitExerciseSuggestion>>,
  pageCount: number
): SplitExerciseSuggestion[] => {
  return rawExercises.map((exercise, index) => {
    const exerciseNumber = coercePositiveInt(exercise.exerciseNumber) ?? index + 1;
    const pageStart = coercePositiveInt(exercise.pageStart);
    const pageEnd = coercePositiveInt(exercise.pageEnd);
    const points = coercePositiveInt(exercise.points);
    const estimatedDuration = coercePositiveInt(exercise.estimatedDuration);
    const label =
      typeof exercise.label === 'string' && exercise.label.trim().length
        ? exercise.label.trim()
        : `Exercice ${exerciseNumber}`;
    const confidence =
      typeof exercise.confidence === 'number' && exercise.confidence >= 0 && exercise.confidence <= 1
        ? exercise.confidence
        : null;

    return {
      exerciseNumber,
      label,
      pageStart: pageStart && pageStart <= pageCount ? pageStart : pageStart,
      pageEnd: pageEnd && pageEnd <= pageCount ? pageEnd : pageEnd,
      points,
      estimatedDuration,
      confidence,
    };
  });
};

const applySplitSanityChecks = (
  exercises: SplitExerciseSuggestion[],
  pageTexts: string[],
  options: {
    expectedExerciseCount?: number | null;
    truncated: boolean;
    minChars: number;
    totalPoints?: number | null;
    minutesPerPoint?: number | null;
  }
) => {
  const flags: string[] = [];
  const pageCount = pageTexts.length;
  const numberCount = new Map<number, number>();

  for (const exercise of exercises) {
    numberCount.set(
      exercise.exerciseNumber,
      (numberCount.get(exercise.exerciseNumber) ?? 0) + 1
    );
  }

  for (const exercise of exercises) {
    const exerciseFlags: string[] = [];
    if (!exercise.pageStart) {
      exerciseFlags.push('pageStart manquant ou invalide');
    }
    if (!exercise.pageEnd) {
      exerciseFlags.push('pageEnd manquant ou invalide');
    }
    if (exercise.pageStart && exercise.pageEnd && exercise.pageEnd < exercise.pageStart) {
      exerciseFlags.push('pageEnd < pageStart');
    }
    if (exercise.pageStart && exercise.pageStart > pageCount) {
      exerciseFlags.push(`pageStart dépasse le nombre de pages (${pageCount})`);
    }
    if (exercise.pageEnd && exercise.pageEnd > pageCount) {
      exerciseFlags.push(`pageEnd dépasse le nombre de pages (${pageCount})`);
    }
    if (numberCount.get(exercise.exerciseNumber) && numberCount.get(exercise.exerciseNumber)! > 1) {
      exerciseFlags.push(`numéro d'exercice dupliqué (${exercise.exerciseNumber})`);
    }
    if (exercise.pageStart && exercise.pageEnd && exercise.pageEnd >= exercise.pageStart) {
      const text = pageTexts.slice(exercise.pageStart - 1, exercise.pageEnd).join('\n');
      if (text.trim().length < options.minChars) {
        exerciseFlags.push(`texte trop court (< ${options.minChars} caractères)`);
      }
    }
    if (options.minutesPerPoint && !exercise.points) {
      exerciseFlags.push('points manquants (durée non estimée)');
    }
    if (options.minutesPerPoint && exercise.points && !exercise.estimatedDuration) {
      exerciseFlags.push('durée estimée manquante');
    }

    if (exerciseFlags.length > 0) {
      exercise.flags = exerciseFlags;
    }
  }

  if (options.truncated) {
    flags.push('Analyse IA limitée : certaines pages n\'ont pas été analysées.');
  }
  if (options.expectedExerciseCount && exercises.length !== options.expectedExerciseCount) {
    flags.push(
      `Nombre d'exercices détecté (${exercises.length}) différent du nombre existant (${options.expectedExerciseCount}).`
    );
  }
  if (options.totalPoints) {
    const pointsValues = exercises
      .map((exercise) => exercise.points)
      .filter((value): value is number => typeof value === 'number');
    const missingPoints = exercises.length - pointsValues.length;
    if (pointsValues.length === 0) {
      flags.push(`Aucun barème détecté (total attendu ${options.totalPoints}).`);
    } else if (missingPoints > 0) {
      flags.push(
        `Points manquants pour ${missingPoints} exercice(s) (total attendu ${options.totalPoints}).`
      );
    } else {
      const sum = pointsValues.reduce((acc, value) => acc + value, 0);
      if (sum !== options.totalPoints) {
        flags.push(
          `Somme des points détectés (${sum}) différente du total (${options.totalPoints}).`
        );
      }
    }
  }

  return { exercises, flags };
};

/**
 * Créer un nouvel exercice
 */
export async function createExercise(data: CreateExerciseInput) {
  try {
    // Validation
    const validated = createExerciseSchema.parse(data);

    // Vérifier que l'ExamPaper existe
    const examPaper = await prisma.examPaper.findUnique({
      where: { id: validated.examPaperId },
    });

    if (!examPaper) {
      return {
        success: false,
        error: "Le sujet d'examen n'existe pas",
      };
    }

    // Vérifier que le numéro d'exercice n'existe pas déjà
    const existingExercise = await prisma.exercise.findUnique({
      where: {
        examPaperId_exerciseNumber: {
          examPaperId: validated.examPaperId,
          exerciseNumber: validated.exerciseNumber,
        },
      },
    });

    if (existingExercise) {
      return {
        success: false,
        error: `Un exercice avec le numéro ${validated.exerciseNumber} existe déjà pour ce sujet`,
      };
    }

    // Créer l'exercice
    const exercise = await prisma.exercise.create({
      data: {
        examPaperId: validated.examPaperId,
        exerciseNumber: validated.exerciseNumber,
        label: validated.label,
        points: validated.points,
        pageStart: validated.pageStart,
        pageEnd: validated.pageEnd,
        exerciseType: validated.exerciseType ?? 'NORMAL',
        title: validated.title,
        statement: validated.statement,
        themeIds: validated.themeIds,
        exerciseUrl: validated.exerciseUrl || undefined,
        estimatedDuration: validated.estimatedDuration,
        estimatedDifficulty: validated.estimatedDifficulty,
        summary: validated.summary,
        keywords: validated.keywords,
        enrichmentStatus: 'pending',
      },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${validated.examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
      data: exercise,
    };
  } catch (error) {
    console.error('Error creating exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la création',
    };
  }
}

/**
 * Mettre à jour un exercice existant
 */
export async function updateExercise(data: UpdateExerciseInput) {
  try {
    // Validation
    const validated = updateExerciseSchema.parse(data);
    const { id, ...updateData } = validated;

    // Vérifier que l'exercice existe
    const existing = await prisma.exercise.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        success: false,
        error: "L'exercice n'existe pas",
      };
    }

    // Si on change le numéro, vérifier qu'il n'existe pas déjà
    if (updateData.exerciseNumber && updateData.exerciseNumber !== existing.exerciseNumber) {
      const duplicate = await prisma.exercise.findUnique({
        where: {
          examPaperId_exerciseNumber: {
            examPaperId: existing.examPaperId,
            exerciseNumber: updateData.exerciseNumber,
          },
        },
      });

      if (duplicate) {
        return {
          success: false,
          error: `Un exercice avec le numéro ${updateData.exerciseNumber} existe déjà`,
        };
      }
    }

    // Mettre à jour
    const exercise = await prisma.exercise.update({
      where: { id },
      data: {
        ...updateData,
        exerciseUrl: updateData.exerciseUrl || undefined,
      },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${existing.examPaperId}`);
    revalidatePath(`/exercices/${id}`);
    revalidatePath('/');

    return {
      success: true,
      data: exercise,
    };
  } catch (error) {
    console.error('Error updating exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour',
    };
  }
}

/**
 * Supprimer un exercice
 */
export async function deleteExercise(id: string) {
  try {
    const exercise = await prisma.exercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      return {
        success: false,
        error: "L'exercice n'existe pas",
      };
    }

    await prisma.exercise.delete({
      where: { id },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${exercise.examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting exercise:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la suppression',
    };
  }
}

/**
 * Créer plusieurs exercices d'un coup (pour découpage d'un sujet)
 */
export async function createMultipleExercises(exercises: CreateExerciseInput[]) {
  try {
    const results = [];
    const errors = [];

    for (const exerciseData of exercises) {
      const result = await createExercise(exerciseData);
      if (result.success) {
        results.push(result.data);
      } else {
        errors.push({
          exerciseNumber: exerciseData.exerciseNumber,
          error: result.error,
        });
      }
    }

    return {
      success: errors.length === 0,
      created: results.length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    console.error('Error creating multiple exercises:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la création multiple',
    };
  }
}

export async function replaceExercisesByExamPaper(
  examPaperId: string,
  exercises: CreateExerciseInput[]
) {
  try {
    if (!examPaperId) {
      return { success: false, error: "L'identifiant du sujet est requis" };
    }

    if (exercises.length === 0) {
      return { success: false, error: 'Aucun exercice a creer' };
    }

    const examPaper = await prisma.examPaper.findUnique({
      where: { id: examPaperId },
      select: { id: true },
    });

    if (!examPaper) {
      return { success: false, error: "Le sujet d'examen n'existe pas" };
    }

    const parsed = createExerciseSchema.array().parse(exercises);

    const mismatched = parsed.find((ex) => ex.examPaperId !== examPaperId);
    if (mismatched) {
      return {
        success: false,
        error: "Les exercices doivent appartenir au meme sujet",
      };
    }

    const seen = new Set<number>();
    for (const ex of parsed) {
      if (seen.has(ex.exerciseNumber)) {
        return {
          success: false,
          error: `Numero d'exercice duplique: ${ex.exerciseNumber}`,
        };
      }
      seen.add(ex.exerciseNumber);
    }

    await prisma.$transaction(async (tx) => {
      await tx.exercise.deleteMany({ where: { examPaperId } });
      await tx.exercise.createMany({
        data: parsed.map((ex) => ({
          examPaperId,
          exerciseNumber: ex.exerciseNumber,
          label: ex.label,
          points: ex.points,
          pageStart: ex.pageStart,
          pageEnd: ex.pageEnd,
          exerciseType: ex.exerciseType ?? 'NORMAL',
          title: ex.title,
          statement: ex.statement,
          themeIds: ex.themeIds,
          exerciseUrl: ex.exerciseUrl || undefined,
          estimatedDuration: ex.estimatedDuration,
          estimatedDifficulty: ex.estimatedDifficulty,
          summary: ex.summary,
          keywords: ex.keywords,
          enrichmentStatus: 'pending',
        })),
      });
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${examPaperId}`);
    revalidatePath(`/sujets/${examPaperId}`);
    revalidatePath('/');

    return { success: true, created: parsed.length };
  } catch (error) {
    console.error('Error replacing exercises:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors du remplacement',
    };
  }
}

export async function previewExerciseStatements(input: {
  examPaperId: string;
  ranges: Array<{
    exerciseNumber: number;
    pageStart: number;
    pageEnd: number;
  }>;
}) {
  try {
    if (!input.examPaperId) {
      return { success: false, error: "L'identifiant du sujet est requis" };
    }

    if (!input.ranges.length) {
      return { success: false, error: 'Aucune plage de pages a traiter' };
    }

    const examPaper = await prisma.examPaper.findUnique({
      where: { id: input.examPaperId },
      select: { subjectUrl: true },
    });

    if (!examPaper?.subjectUrl) {
      return { success: false, error: 'Sujet sans PDF (subjectUrl manquant)' };
    }

    const useTesseractFallback = process.env.USE_TESSERACT_FALLBACK === 'true';

    const statements = await extractPdfTextByPageRanges({
      pdfUrl: examPaper.subjectUrl,
      pageRanges: input.ranges.map((r) => ({
        pageStart: r.pageStart,
        pageEnd: r.pageEnd,
      })),
      enableTesseractFallback: useTesseractFallback,
      minLengthForValidText: 200,
    });

    return {
      success: true,
      items: input.ranges.map((range, idx) => ({
        exerciseNumber: range.exerciseNumber,
        statement: statements[idx] ?? '',
      })),
    };
  } catch (error) {
    console.error('Error previewing statements:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la previsualisation',
    };
  }
}

/**
 * Proposer un pré-découpage des exercices d'un sujet via IA.
 */
export async function suggestExerciseSplitByExamPaper(
  examPaperId: string,
  options?: { maxPages?: number; expectedExerciseCount?: number }
) {
  try {
    if (!examPaperId) {
      return { success: false, error: "L'identifiant du sujet est requis" };
    }

    const examPaper = await prisma.examPaper.findUnique({
      where: { id: examPaperId },
      select: {
        id: true,
        subjectUrl: true,
        teaching: {
          select: {
            longDescription: true,
            shortDescription: true,
            subject: {
              select: {
                longDescription: true,
                shortDescription: true,
              },
            },
          },
        },
      },
    });

    if (!examPaper?.subjectUrl) {
      return { success: false, error: 'Sujet sans PDF (subjectUrl manquant)' };
    }

    const useMockLlm =
      (process.env.USE_MOCK_LLM !== 'false' && !process.env.OPENAI_API_KEY) ||
      process.env.USE_MOCK_LLM === 'true';
    const useTesseractFallback = process.env.USE_TESSERACT_FALLBACK === 'true';
    const minLengthForValidText = 200;
    const maxPages = options?.maxPages ?? 12;

    const pageTexts = await extractPdfTextByPages({
      pdfUrl: examPaper.subjectUrl,
      minLengthForValidText,
      enableTesseractFallback: useTesseractFallback,
    });

    if (pageTexts.length === 0) {
      return { success: false, error: 'Aucun texte extrait du PDF' };
    }

    const subjectLabels = [
      examPaper.teaching?.longDescription,
      examPaper.teaching?.shortDescription,
      examPaper.teaching?.subject?.longDescription,
      examPaper.teaching?.subject?.shortDescription,
    ];
    const mathSubject = isMathSubject(subjectLabels);
    const totalsText = pageTexts.slice(0, 2).join('\n');
    const totals = parseExamPaperTotals(totalsText);
    const canUseMathFallback = mathSubject && (!totals.totalPoints || totals.totalPoints === 20);
    const effectiveTotalPoints = totals.totalPoints ?? (canUseMathFallback ? 20 : null);
    let minutesPerPoint: number | null = null;
    let usedDefaultMinutesPerPoint = false;
    let usedDefaultTotalPoints = false;

    if (totals.totalDurationMinutes && totals.totalPoints) {
      minutesPerPoint = totals.totalDurationMinutes / totals.totalPoints;
    } else if (canUseMathFallback) {
      minutesPerPoint = 12;
      usedDefaultMinutesPerPoint = true;
    }

    if (!totals.totalPoints && canUseMathFallback) {
      usedDefaultTotalPoints = true;
    }

    const pointsByExercise = extractPointsByExercise(pageTexts);

    const truncated = pageTexts.length > maxPages;
    const pages = (useMockLlm ? pageTexts : pageTexts.slice(0, maxPages)).map((text, idx) => ({
      pageNumber: idx + 1,
      text: useMockLlm ? text : buildPageSnippet(text),
    }));

    const splitter = useMockLlm
      ? new MockExamPaperSplitterService()
      : new OpenAiExamPaperSplitterService();

    const splitResult = await splitter.split({
      pages,
      expectedExerciseCount: options?.expectedExerciseCount ?? null,
    });

    const normalized = normalizeSplitSuggestions(splitResult.exercises ?? [], pageTexts.length)
      .sort((a, b) =>
        a.pageStart && b.pageStart ? a.pageStart - b.pageStart : a.exerciseNumber - b.exerciseNumber
      );

    if (normalized.length === 0) {
      return { success: false, error: "L'IA n'a détecté aucun exercice." };
    }

    const withPoints = normalized.map((exercise) => {
      const points = exercise.points ?? pointsByExercise.get(exercise.exerciseNumber) ?? null;
      return { ...exercise, points };
    });

    const withDurations = withPoints.map((exercise) => {
      const estimatedDuration =
        exercise.estimatedDuration ??
        (minutesPerPoint && exercise.points
          ? Math.round(exercise.points * minutesPerPoint)
          : null);
      return { ...exercise, estimatedDuration };
    });

    const { exercises, flags } = applySplitSanityChecks(withDurations, pageTexts, {
      expectedExerciseCount: options?.expectedExerciseCount ?? null,
      truncated,
      minChars: minLengthForValidText,
      totalPoints: effectiveTotalPoints,
      minutesPerPoint,
    });

    if (usedDefaultMinutesPerPoint) {
      flags.push('Durée estimée avec 12 min/point (mathématiques).');
    }
    if (usedDefaultTotalPoints) {
      flags.push('Total de points supposé à 20 (mathématiques).');
    }

    return {
      success: true,
      exercises,
      flags: flags.length ? flags : undefined,
      usedMockLlm: useMockLlm,
    };
  } catch (error) {
    console.error('Error suggesting exercise split:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur lors de l'analyse IA",
    };
  }
}

/**
 * Enrichir un exercice spécifique (même déjà enrichi).
 */
export async function enrichExerciseById(exerciseId: string) {
  try {
    if (!exerciseId) {
      return { success: false, error: "L'identifiant de l'exercice est requis" };
    }

    const context = await buildEnrichmentContext();

    const exercise = await prisma.exercise.findUnique({
      where: { id: exerciseId },
      select: {
        id: true,
        examPaperId: true,
        statement: true,
        exerciseUrl: true,
        points: true,
        pageStart: true,
        pageEnd: true,
        themeIds: true,
        exerciseType: true,
        corrections: {
          select: {
            url: true,
            type: true,
            quality: true,
            source: true,
          },
          orderBy: {
            quality: 'desc',
          },
        },
        examPaper: {
          select: {
            subjectUrl: true,
            label: true,
            totalDuration: true,
            totalPoints: true,
            corrections: {
              select: {
                url: true,
                type: true,
                quality: true,
                source: true,
              },
              orderBy: {
                quality: 'desc',
              },
            },
            teaching: {
              select: {
                longDescription: true,
                shortDescription: true,
                subject: {
                  select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!exercise) {
      return { success: false, error: "L'exercice n'existe pas" };
    }

    await enrichExerciseRecord(exercise, context);

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${exercise.examPaperId}`);
    revalidatePath(`/exercices/${exerciseId}`);
    revalidatePath(`/sujets/${exercise.examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
      usedMockOcr: context.useMockOcr,
      usedMockLlm: context.useMockLlm,
    };
  } catch (error) {
    console.error('Error enriching exercise:', exerciseId, error);
    try {
      await prisma.exercise.update({
        where: { id: exerciseId },
        data: { enrichmentStatus: 'failed' },
      });
    } catch (updateError) {
      console.error('Error marking exercise as failed:', exerciseId, updateError);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur lors de l'enrichissement",
    };
  }
}

/**
 * Enrichir les exercices d'un sujet (pending/failed) via OCR + LLM.
 */
export async function enrichExercisesByExamPaper(
  examPaperId: string,
  options?: { limit?: number; includeCompleted?: boolean }
) {
  try {
    if (!examPaperId) {
      return { success: false, error: "L'identifiant du sujet est requis" };
    }

    const limit = options?.limit;
    const includeCompleted = options?.includeCompleted === true;
    const context = await buildEnrichmentContext();

    const targets = await prisma.exercise.findMany({
      where: {
        examPaperId,
        ...(includeCompleted
          ? {}
          : { enrichmentStatus: { in: ['pending', 'failed'] } }),
      },
      take: limit,
      select: {
        id: true,
        examPaperId: true,
        statement: true,
        exerciseUrl: true,
        points: true,
        pageStart: true,
        pageEnd: true,
        themeIds: true,
        exerciseType: true,
        corrections: {
          select: {
            url: true,
            type: true,
            quality: true,
            source: true,
          },
          orderBy: {
            quality: 'desc',
          },
        },
        examPaper: {
          select: {
            subjectUrl: true,
            label: true,
            totalDuration: true,
            totalPoints: true,
            corrections: {
              select: {
                url: true,
                type: true,
                quality: true,
                source: true,
              },
              orderBy: {
                quality: 'desc',
              },
            },
            teaching: {
              select: {
                longDescription: true,
                shortDescription: true,
                subject: {
                  select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (targets.length === 0) {
      return {
        success: true,
        total: 0,
        processed: 0,
        failed: 0,
        usedMockOcr: context.useMockOcr,
        usedMockLlm: context.useMockLlm,
      };
    }

    let processed = 0;
    let failed = 0;
    const failures: Array<{ exerciseId: string; error: string }> = [];

    for (const ex of targets) {
      try {
        await enrichExerciseRecord(ex, context);

        processed += 1;
      } catch (error) {
        console.error('Error enriching exercise:', ex.id, error);
        failed += 1;
        failures.push({
          exerciseId: ex.id,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
        });
        await prisma.exercise.update({
          where: { id: ex.id },
          data: { enrichmentStatus: 'failed' },
        });
      }
    }

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${examPaperId}`);
    revalidatePath(`/sujets/${examPaperId}`);
    revalidatePath('/');

    return {
      success: true,
      total: targets.length,
      processed,
      failed,
      failures: failures.length ? failures : undefined,
      usedMockOcr: context.useMockOcr,
      usedMockLlm: context.useMockLlm,
    };
  } catch (error) {
    console.error('Error enriching exercises by examPaper:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur lors de l'enrichissement",
    };
  }
}

/**
 * Supprimer tous les exercices d'un ExamPaper
 */
export async function deleteExercisesByExamPaper(examPaperId: string) {
  try {
    await prisma.exercise.deleteMany({
      where: { examPaperId },
    });

    revalidatePath('/admin/exam-papers');
    revalidatePath(`/admin/exam-papers/${examPaperId}`);
    revalidatePath(`/sujets/${examPaperId}`);
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Error deleting exercises by examPaperId:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur lors de la suppression des exercices',
    };
  }
}
