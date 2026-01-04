import { z } from "zod";

import { createCorrectionSourceSchema } from "@/lib/validation";

export type CreateCorrectionSourceValues = z.infer<typeof createCorrectionSourceSchema>;
export type CreateCorrectionSourceErrors = z.inferFormattedError<typeof createCorrectionSourceSchema>;
