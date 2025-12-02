export type EnrichmentStatus = 'pending' | 'completed' | 'failed';

export interface OcrResult {
  text: string; // contenu OCRisé complet
}

export interface LlmAnalysisResult {
  title?: string | null;
  summary?: string | null;
  keywords?: string[];
  estimatedDuration?: number | null;
  estimatedDifficulty?: number | null;
  themeIds?: string[];
}

export interface EnrichmentInput {
  exerciseId: string;
  statementUrl?: string | null;
  exerciseUrl?: string | null;
  availableThemes?: {
    id: string;
    label: string;
  }[];
}

export interface EnrichmentPayload {
  ocr: OcrResult;
  llm: LlmAnalysisResult;
}
