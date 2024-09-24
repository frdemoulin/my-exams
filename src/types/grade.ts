import { z } from "zod";

import { createGradeSchema } from "@/lib/validation";

export type CreateGradeValues = z.infer<typeof createGradeSchema>;
export type CreateGradeErrors = z.inferFormattedError<typeof createGradeSchema>;
