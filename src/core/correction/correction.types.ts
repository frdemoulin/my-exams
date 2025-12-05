import { z } from "zod";

// Type pour une correction
export interface Correction {
  id: string;
  examPaperId: string;
  source: string; // "APMEP", "LaboLycée", etc.
  url: string;
  type: CorrectionType;
  quality?: number; // 1-5
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CorrectionType = "pdf" | "video" | "html";

// Schema Zod pour créer une correction
export const createCorrectionSchema = z.object({
  examPaperId: z.string().min(1, "L'ID du sujet est requis"),
  source: z.string().min(1, "La source est requise"),
  url: z.string().url("L'URL doit être valide"),
  type: z.enum(["pdf", "video", "html"]).default("pdf"),
  quality: z.number().min(1).max(5).optional(),
  author: z.string().optional(),
});

export type CreateCorrectionValues = z.infer<typeof createCorrectionSchema>;
export type CreateCorrectionErrors = z.inferFormattedError<typeof createCorrectionSchema>;
