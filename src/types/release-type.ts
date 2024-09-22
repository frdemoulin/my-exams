import { z } from "zod";

import { createReleaseTypeSchema } from "@/lib/validation";

export type CreateReleaseTypeValues = z.infer<typeof createReleaseTypeSchema>;
export type CreateReleaseTypeErrors = z.inferFormattedError<typeof createReleaseTypeSchema>;