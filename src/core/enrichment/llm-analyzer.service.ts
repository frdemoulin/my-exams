import { EnrichmentInput, LlmAnalysisResult } from './enrichment.types';
import OpenAI from 'openai';

/**
 * Interface d'analyse LLM (stub).
 * But : générer titre, résumé, mots-clés, difficulté, durée, thèmes.
 * À implémenter avec une API (OpenAI/Claude) ou un modèle local.
 */
export interface LlmAnalyzerService {
  analyze(input: EnrichmentInput & { statement: string }): Promise<LlmAnalysisResult>;
}

/**
 * Implémentation mock (aucun appel externe).
 */
export class MockLlmAnalyzerService implements LlmAnalyzerService {
  async analyze(input: EnrichmentInput & { statement: string }): Promise<LlmAnalysisResult> {
    // Exemple très basique à remplacer par un vrai prompt LLM
    return {
      title: input.statement.slice(0, 60) || 'Exercice sans titre',
      summary: 'Résumé simulé de l’exercice (remplacer par la sortie LLM).',
      keywords: ['exercice', 'simulation'],
      estimatedDuration: 20,
      estimatedDifficulty: 3,
      themeIds: [],
    };
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
Donne une réponse JSON strictement conforme au schéma suivant :
{
  "title": string | null,
  "summary": string | null,
  "keywords": string[], // 5 à 10 mots-clés courts, en minuscules
  "estimatedDuration": number | null, // minutes, entier
  "estimatedDifficulty": number | null, // entier 1-5
  "themeIds": string[] // IDs pris dans la liste ci-dessous, sinon []
}
Règles :
- Pas de texte en dehors du JSON.
- "title" doit être concis (<100 chars).
- "summary" 2-3 phrases max.
- "estimatedDifficulty" : 1=très facile, 5=très difficile.
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
              text: `ÉNONCÉ:\n${input.statement}`,
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
    };

    try {
      const json = JSON.parse(content);
      parsed = {
        title: json.title ?? null,
        summary: json.summary ?? null,
        keywords: Array.isArray(json.keywords) ? json.keywords : [],
        estimatedDuration: Number.isFinite(json.estimatedDuration)
          ? Number(json.estimatedDuration)
          : null,
        estimatedDifficulty: Number.isFinite(json.estimatedDifficulty)
          ? Number(json.estimatedDifficulty)
          : null,
        themeIds: Array.isArray(json.themeIds) ? json.themeIds : [],
      };
    } catch (err) {
      console.error('Erreur de parsing JSON LLM, contenu brut:', content, err);
    }

    return parsed;
  }
}
