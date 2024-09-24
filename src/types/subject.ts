import { z } from "zod";

import { createSubjectSchema } from "@/lib/validation";

export type CreateSubjectValues = z.infer<typeof createSubjectSchema>;
export type CreateSubjectErrors = z.inferFormattedError<typeof createSubjectSchema>;
