import { z } from "zod";

import { createExamPaperSchema } from "@/lib/validation";

export type CreateExamPaperValues = z.infer<typeof createExamPaperSchema>;
export type CreateExamPaperErrors = z.inferFormattedError<typeof createExamPaperSchema>;
