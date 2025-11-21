import { z } from "zod";

import { createDivisionSchema } from "@/lib/validation";

export type CreateDivisionValues = z.infer<typeof createDivisionSchema>;
export type CreateDivisionErrors = z.inferFormattedError<typeof createDivisionSchema>;
