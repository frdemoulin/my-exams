import { z } from "zod";
import { Prisma } from "@prisma/client";

export const chapterDataInclude = {
    subject: {
        select: {
            id: true,
            longDescription: true,
        }
    }
} satisfies Prisma.ChapterInclude;

export type ChapterData = Prisma.ChapterGetPayload<{
    include: typeof chapterDataInclude
}>;
