import { z } from "zod";

import { createTopicSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export type CreateTopicValues = z.infer<typeof createTopicSchema>;
export type CreateTopicErrors = z.inferFormattedError<typeof createTopicSchema>;

export const topicDataInclude = {
    subjects: {
        select: {
            id: true,
            longDescription: true,
        }
    }
} satisfies Prisma.TopicInclude;

export type TopicData = Prisma.TopicGetPayload<{
    include: typeof topicDataInclude
}>;