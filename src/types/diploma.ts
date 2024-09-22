import { z } from "zod";

import { createDiplomaSchema } from "@/lib/validation";

export type CreateDiplomaValues = z.infer<typeof createDiplomaSchema>;
export type CreateDiplomaErrors = z.inferFormattedError<typeof createDiplomaSchema>;
