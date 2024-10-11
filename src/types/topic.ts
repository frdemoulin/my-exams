import { z } from "zod";

import { createTopicSchema } from "@/lib/validation";

export type CreateTopicValues = z.infer<typeof createTopicSchema>;
export type CreateTopicErrors = z.inferFormattedError<typeof createTopicSchema>;
