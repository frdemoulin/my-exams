import { z } from "zod";

import { createThemeSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export type CreateThemeValues = z.infer<typeof createThemeSchema>;
export type CreateThemeErrors = z.inferFormattedError<typeof createThemeSchema>;

export const themeDataInclude = {
    chapter: {
        select: {
            id: true,
            longDescription: true,
        }
    }
} satisfies Prisma.ThemeInclude;

export type ThemeData = Prisma.ThemeGetPayload<{
    include: typeof themeDataInclude
}>;