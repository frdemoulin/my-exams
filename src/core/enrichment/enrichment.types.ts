export type EnrichmentStatus = 'pending' | 'completed' | 'failed';
export type ExerciseType = 'NORMAL' | 'QCM' | 'TRUE_FALSE' | 'OTHER';

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
  exerciseType?: ExerciseType | null;
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

export interface ExamPaperPageSnippet {
  pageNumber: number;
  text: string;
}

export interface ExamPaperSplitInput {
  pages: ExamPaperPageSnippet[];
  expectedExerciseCount?: number | null;
}

export interface ExamPaperSplitSuggestion {
  exerciseNumber: number;
  label?: string | null;
  pageStart: number;
  pageEnd: number;
  points?: number | null;
  estimatedDuration?: number | null;
  confidence?: number | null;
}

export interface ExamPaperSplitResult {
  exercises: ExamPaperSplitSuggestion[];
}
