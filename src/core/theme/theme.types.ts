import { z } from "zod";

import { createThemeSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export type CreateThemeValues = z.infer<typeof createThemeSchema>;
export type CreateThemeErrors = z.inferFormattedError<typeof createThemeSchema>;

export const themeDataInclude = {
    domains: {
        select: {
            id: true,
            longDescription: true,
            subject: {
                select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                },
            },
        }
    },
    chapters: {
        select: {
            id: true,
            title: true,
            slug: true,
            subject: {
                select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                },
            },
        },
    }
} satisfies Prisma.ThemeInclude;

export type ThemeData = Prisma.ThemeGetPayload<{
    include: typeof themeDataInclude
}>;
