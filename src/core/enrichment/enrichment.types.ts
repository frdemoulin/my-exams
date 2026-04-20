export type EnrichmentStatus = 'pending' | 'completed' | 'failed';
export type ExerciseType = 'NORMAL' | 'QCM' | 'TRUE_FALSE' | 'OTHER';

export interface AvailableThemeOption {
  id: string;
  label: string;
  domainLabel?: string | null;
  aliases?: string[];
}

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
  themeLabels?: string[];
  exerciseType?: ExerciseType | null;
}

export interface EnrichmentInput {
  exerciseId: string;
  statementUrl?: string | null;
  exerciseUrl?: string | null;
  correctionText?: string | null;
  exercisePoints?: number | null;
  examTotalDuration?: number | null;
  examTotalPoints?: number | null;
  subjectLabel?: string | null;
  availableThemes?: AvailableThemeOption[];
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
