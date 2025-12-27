import { z } from "zod";
import { Prisma } from "@prisma/client";
import { createDomainSchema } from "@/lib/validation";

export type CreateDomainValues = z.infer<typeof createDomainSchema>;
export type CreateDomainErrors = z.inferFormattedError<typeof createDomainSchema>;

export const domainDataInclude = {
    subject: {
        select: {
            id: true,
            longDescription: true,
        }
    },
    _count: {
        select: {
            themes: true,
        },
    },
    scopes: {
        include: {
            diploma: {
                select: {
                    id: true,
                    longDescription: true,
                },
            },
            grade: {
                select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                },
            },
            division: {
                select: {
                    id: true,
                    longDescription: true,
                },
            },
            teaching: {
                select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                    grade: {
                        select: {
                            id: true,
                            shortDescription: true,
                        },
                    },
                },
            },
            curriculum: {
                select: {
                    id: true,
                    longDescription: true,
                    isActive: true,
                },
            },
        },
    },
} satisfies Prisma.DomainInclude;

export type DomainData = Prisma.DomainGetPayload<{
    include: typeof domainDataInclude
}>;
