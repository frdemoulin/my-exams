import {
  EnrichmentInput,
  LlmAnalysisResult,
  ExamPaperSplitInput,
  ExamPaperSplitResult,
  ExerciseType,
} from './enrichment.types';
import OpenAI from 'openai';

/**
 * Interface d'analyse LLM (stub).
 * But : générer titre, résumé, mots-clés, difficulté, durée, thèmes.
 * À implémenter avec une API (OpenAI/Claude) ou un modèle local.
 */
export interface LlmAnalyzerService {
  analyze(input: EnrichmentInput & { statement: string }): Promise<LlmAnalysisResult>;
}

export interface ExamPaperSplitterService {
  split(input: ExamPaperSplitInput): Promise<ExamPaperSplitResult>;
}

const normalizeForDetection = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();

const detectExerciseTypeFromStatement = (statement: string): ExerciseType | null => {
  const normalized = normalizeForDetection(statement);
  if (!normalized) return null;

  const qcmRegex =
    /\bqcm\b|choix multiples?|questionnaire (?:a|à) choix multiples|multiple choice/;
  const trueFalseRegex =
    /\b(vrai\s*\/\s*faux|vrai ou faux|vrai-faux|v\/f|vf)\b|(?:cocher|indiquer)\s+(?:v|f)\b/;

  if (qcmRegex.test(normalized)) return 'QCM';
  if (trueFalseRegex.test(normalized)) return 'TRUE_FALSE';
  return null;
};

const ensureSummaryMentionsType = (
  summary: string | null,
  exerciseType: ExerciseType | null | undefined
) => {
  if (!summary) return summary;
  if (exerciseType !== 'QCM' && exerciseType !== 'TRUE_FALSE') return summary;

  const normalized = normalizeForDetection(summary);
  const alreadyMentionsQcm = /\bqcm\b/.test(normalized);
  const alreadyMentionsTrueFalse = /\b(vrai\s*\/\s*faux|vrai ou faux|vrai-faux|v\/f|vf)\b/.test(
    normalized
  );

  if (exerciseType === 'QCM' && alreadyMentionsQcm) return summary;
  if (exerciseType === 'TRUE_FALSE' && alreadyMentionsTrueFalse) return summary;

  const suffix = exerciseType === 'QCM' ? ' Format QCM.' : ' Format vrai/faux.';
  return `${summary.trim()}${summary.trim().endsWith('.') ? '' : '.'}${suffix}`.replace('..', '.');
};

/**
 * Implémentation mock (aucun appel externe).
 */
export class MockLlmAnalyzerService implements LlmAnalyzerService {
  async analyze(input: EnrichmentInput & { statement: string }): Promise<LlmAnalysisResult> {
    const detectedType = detectExerciseTypeFromStatement(input.statement);
    const resolvedType = detectedType ?? 'NORMAL';
    // Exemple très basique à remplacer par un vrai prompt LLM
    return {
      title: input.statement.slice(0, 60) || 'Exercice sans titre',
      summary: ensureSummaryMentionsType(
        'Résumé simulé de l’exercice (remplacer par la sortie LLM).',
        resolvedType
      ),
      keywords: ['exercice', 'simulation'],
      estimatedDuration: 20,
      estimatedDifficulty: 3,
      themeIds: [],
      exerciseType: resolvedType,
    };
  }
}

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

export class MockExamPaperSplitterService implements ExamPaperSplitterService {
  async split(input: ExamPaperSplitInput): Promise<ExamPaperSplitResult> {
    const starts: Array<{ pageNumber: number; exerciseNumber?: number; points?: number | null }> =
      [];

    for (const page of input.pages) {
      const text = page.text ?? '';
      const regex =
        /\bEXERCICE\s+([0-9]+|[IVX]+)\b(?:[\s\S]{0,40}?(\d{1,3})\s*points?\b)?/gi;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(text)) !== null) {
        const rawNumber = match[1];
        const number = /^\d+$/.test(rawNumber)
          ? Number(rawNumber)
          : parseRomanNumeral(rawNumber);
        const rawPoints = match[2];
        const parsedPoints = rawPoints ? Number(rawPoints) : null;
        const points =
          parsedPoints && Number.isFinite(parsedPoints) && parsedPoints > 0 && parsedPoints <= 100
            ? parsedPoints
            : null;
        starts.push({
          pageNumber: page.pageNumber,
          exerciseNumber: number ?? undefined,
          points,
        });
      }
    }

    if (starts.length === 0) {
      return {
        exercises: [
          {
            exerciseNumber: 1,
            label: 'Exercice 1',
            pageStart: 1,
            pageEnd: input.pages.length || 1,
            confidence: 0.2,
          },
        ],
      };
    }

    const sortedStarts = starts.sort((a, b) =>
      a.pageNumber === b.pageNumber
        ? (a.exerciseNumber ?? 0) - (b.exerciseNumber ?? 0)
        : a.pageNumber - b.pageNumber
    );

    const exercises = sortedStarts.map((start, idx) => {
      const exerciseNumber = start.exerciseNumber ?? idx + 1;
      const next = sortedStarts[idx + 1];
      const pageEnd = next
        ? Math.max(start.pageNumber, next.pageNumber - (next.pageNumber > start.pageNumber ? 1 : 0))
        : input.pages.length;

      return {
        exerciseNumber,
        label: `Exercice ${exerciseNumber}`,
        pageStart: start.pageNumber,
        pageEnd,
        points: start.points ?? null,
        confidence: 0.25,
      };
    });

    return { exercises };
  }
}

export class OpenAiExamPaperSplitterService implements ExamPaperSplitterService {
  private client: OpenAI;
  private model: string;

  constructor(options?: { apiKey?: string; model?: string }) {
    const apiKey = options?.apiKey ?? process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY manquante');
    }
    this.client = new OpenAI({ apiKey });
    this.model = options?.model ?? process.env.LLM_MODEL ?? 'gpt-4o-mini';
  }

  async split(input: ExamPaperSplitInput): Promise<ExamPaperSplitResult> {
    const pagesList = input.pages
      .map((page) => `Page ${page.pageNumber}:\n${page.text}`)
      .join('\n\n');
    const expectedCount = input.expectedExerciseCount;

    const prompt = `
Tu es un assistant pédagogique. À partir d'extraits de pages d'un sujet officiel, tu dois détecter les exercices distincts.
L'objectif est de proposer un découpage fiable avec les pages de début et de fin, et un score de confiance.
${expectedCount ? `Nombre d'exercices attendu (indication seulement) : ${expectedCount}.` : ''}
Les pages fournies vont de 1 à ${input.pages.length}. Ne propose pas de pages en dehors de cet intervalle.
Retourne uniquement un JSON au format suivant :
{
  "exercises": [
    {
      "exerciseNumber": number, // entier > 0, utilise la numérotation du sujet si possible
      "label": string | null, // ex: "Exercice 1", null si inconnu
      "pageStart": number, // page de début (1-indexée)
      "pageEnd": number, // page de fin (>= pageStart)
      "points": number | null, // points si explicitement indiqués (ex: "5 points"), sinon null
      "confidence": number // entre 0 et 1
    }
  ]
}
Règles :
- Ne retourne aucun texte hors JSON.
- Les exercices doivent être listés dans l'ordre du sujet.
- Si la numérotation n'est pas explicite, propose 1, 2, 3...
- Si une page contient la fin d'un exercice et le début du suivant, pageStart/pageEnd peuvent être identiques.
- Ne devine pas les points si le barème n'est pas explicitement indiqué.
- Utilise un score de confiance bas si tu hésites.
    `;

    const completion = await this.client.chat.completions.create({
      model: this.model,
      temperature: 0.2,
      max_tokens: 400,
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: pagesList },
      ],
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content ?? '{}';
    try {
      const json = JSON.parse(content);
      return {
        exercises: Array.isArray(json.exercises) ? json.exercises : [],
      };
    } catch (error) {
      console.error('Erreur de parsing JSON split LLM, contenu brut:', content, error);
      return { exercises: [] };
    }
  }
}

/**
 * Implémentation OpenAI (chat completions) pour générer les métadonnées.
 * Nécessite OPENAI_API_KEY définie.
 */
export class OpenAiLlmAnalyzerService implements LlmAnalyzerService {
  private client: OpenAI;
  private model: string;

  constructor(options?: { apiKey?: string; model?: string }) {
    const apiKey = options?.apiKey ?? process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY manquante');
    }
    this.client = new OpenAI({ apiKey });
    this.model = options?.model ?? process.env.LLM_MODEL ?? 'gpt-4o-mini';
  }

  async analyze(input: EnrichmentInput & { statement: string }): Promise<LlmAnalysisResult> {
    const themes = input.availableThemes ?? [];
    const themesList = themes
      .map((t) => `- ${t.id} : ${t.label}`)
      .join('\n');

    const prompt = `
Tu es un assistant pédagogique. À partir de l’énoncé d’un exercice d’annales, tu génères des métadonnées structurées.
Objectif du résumé : donner envie de travailler l’exercice sans dévoiler la méthode ni les théorèmes à utiliser.
Le résumé ne doit pas mentionner l’épreuve, la matière, la session ou le diplôme.
À la place, il doit préciser le contexte ou les objets mathématiques concrets (ex: groupes sanguins, modèle de croissance, tirages, fonctions, suites).
Donne une réponse JSON strictement conforme au schéma suivant :
{
  "title": string | null,
  "summary": string | null,
  "keywords": string[], // 5 à 10 mots-clés courts, en minuscules
  "estimatedDuration": number | null, // minutes, entier
  "estimatedDifficulty": number | null, // entier 1-5
  "themeIds": string[], // IDs pris dans la liste ci-dessous, sinon []
  "exerciseType": "NORMAL" | "QCM" | "TRUE_FALSE" | "OTHER" // type d'exercice
}
Règles :
- Pas de texte en dehors du JSON.
- "title" doit être concis (<100 chars).
- "summary" 2-3 phrases max (280 caractères max), ton simple, factuel et pédagogique.
- Ne pas répéter le contexte "bac/épreuve/matière".
- Ne pas révéler de théorème, formule ou méthode précise.
- Ne pas donner la solution ni des étapes de résolution.
- Rédige le résumé dans un style descriptif neutre.
- N’utilise ni forme impérative, ni injonction, ni pronom personnel (tu, vous, nous).
- Varie la tournure d’ouverture d’un résumé à l’autre.
- Ne commence jamais par "Cet exercice" ou "L'exercice".
- Privilégie une ouverture centrée sur le contexte/objet.
- Choisis une des ouvertures suivantes et varie d’un exercice à l’autre (évite de répéter la même structure) :
  - "Groupes sanguins et ...", "Fonctions et ...", "Suites et ...", "Géométrie et ..."
  - "Modélisation de ...", "Étude de ...", "Analyse de ..."
  - "Problème autour de ...", "Mise en situation autour de ..."
  - "Cas pratique sur ...", "Scénario appliqué à ..."
  - "Une situation portant sur ...", "Une étude portant sur ..."
- "estimatedDifficulty" : 1=très facile, 5=très difficile.
- "exerciseType" : utilise "QCM" si l'exercice est un choix multiple, "TRUE_FALSE" si vrai/faux, "OTHER" si format atypique, sinon "NORMAL".
- Si ce n’est pas explicite, retourne "NORMAL".
- Si "exerciseType" vaut "QCM" ou "TRUE_FALSE", mentionne-le explicitement dans le résumé (ex: "Format QCM", "Série de vrai/faux").
- Si l’exercice porte sur une fonction logarithme, exponentielle ou trigonométrique, précise explicitement le type de fonction dans le résumé.
- Si tu n’es pas sûr, renvoie null plutôt qu’une valeur inventée.
Liste des thèmes autorisés (id : label) :
${themesList}
    `;

    const completion = await this.client.chat.completions.create({
      model: this.model,
      temperature: 0.3,
      max_tokens: 300,
      messages: [
        { role: 'system', content: prompt },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `ÉNONCÉ:\n${input.statement}\n\nINDICE FORMAT (à confirmer) : ${detectExerciseTypeFromStatement(input.statement) ?? 'NORMAL'}`,
            },
          ],
        },
      ],
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content ?? '{}';
    let parsed: LlmAnalysisResult = {
      title: null,
      summary: null,
      keywords: [],
      estimatedDuration: null,
      estimatedDifficulty: null,
      themeIds: [],
      exerciseType: null,
    };

    try {
      const json = JSON.parse(content);
      const rawExerciseType =
        typeof json.exerciseType === 'string' ? json.exerciseType.toUpperCase() : null;
      const allowedTypes: ExerciseType[] = ['NORMAL', 'QCM', 'TRUE_FALSE', 'OTHER'];
      const exerciseType = rawExerciseType && allowedTypes.includes(rawExerciseType as ExerciseType)
        ? (rawExerciseType as ExerciseType)
        : null;
      const hintedType = detectExerciseTypeFromStatement(input.statement);
      const resolvedExerciseType =
        exerciseType && exerciseType !== 'NORMAL'
          ? exerciseType
          : hintedType ?? exerciseType;

      parsed = {
        title: json.title ?? null,
        summary: ensureSummaryMentionsType(json.summary ?? null, resolvedExerciseType),
        keywords: Array.isArray(json.keywords) ? json.keywords : [],
        estimatedDuration: Number.isFinite(json.estimatedDuration)
          ? Number(json.estimatedDuration)
          : null,
        estimatedDifficulty: Number.isFinite(json.estimatedDifficulty)
          ? Number(json.estimatedDifficulty)
          : null,
        themeIds: Array.isArray(json.themeIds) ? json.themeIds : [],
        exerciseType: resolvedExerciseType ?? null,
      };
    } catch (err) {
      console.error('Erreur de parsing JSON LLM, contenu brut:', content, err);
    }

    return parsed;
  }
}
