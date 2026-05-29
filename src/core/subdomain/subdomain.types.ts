import { z } from "zod";
import { Prisma } from "@prisma/client";
import { createSubdomainSchema } from "@/lib/validation";

export type CreateSubdomainValues = z.infer<typeof createSubdomainSchema>;
export type CreateSubdomainErrors = z.inferFormattedError<typeof createSubdomainSchema>;

export const subdomainDataInclude = {
    subject: {
        select: {
            id: true,
            longDescription: true,
            shortDescription: true,
        },
    },
    domain: {
        select: {
            id: true,
            longDescription: true,
            shortDescription: true,
            subjectId: true,
        },
    },
    _count: {
        select: {
            themes: true,
        },
    },
} satisfies Prisma.SubdomainInclude;

export type SubdomainData = Prisma.SubdomainGetPayload<{
    include: typeof subdomainDataInclude;
}>;
