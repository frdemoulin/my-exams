import { z } from "zod";

import { createExaminationCenterSchema } from "@/lib/validation";

export type CreateExaminationCenterValues = z.infer<typeof createExaminationCenterSchema>;
export type CreateExaminationCenterErrors = z.inferFormattedError<typeof createExaminationCenterSchema>;
