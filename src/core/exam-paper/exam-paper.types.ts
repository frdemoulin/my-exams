import { z } from "zod";

import { createExamPaperSchema } from "@/lib/validation";

export type CreateExamPaperValues = z.infer<typeof createExamPaperSchema>;
export type CreateExamPaperErrors = z.inferFormattedError<typeof createExamPaperSchema>;

// Types pour l'enrichissement automatique
export type EnrichmentStatus = "pending" | "completed" | "failed";

export interface ExamPaperEnrichment {
  estimatedDuration?: number; // en minutes
  estimatedDifficulty?: number; // 1-5
  summary?: string;
  enrichmentStatus: EnrichmentStatus;
  enrichedAt?: Date;
}

// Type pour un ExamPaper avec ses corrections
export interface ExamPaperWithCorrections {
  id: string;
  label: string;
  sessionYear: number;
  subjectUrl?: string;
  estimatedDuration?: number;
  estimatedDifficulty?: number;
  summary?: string;
  enrichmentStatus: string;
  corrections: {
    id: string;
    source: string;
    url: string;
    type: string;
    quality?: number;
  }[];
}
