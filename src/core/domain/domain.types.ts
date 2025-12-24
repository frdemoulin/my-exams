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
    }
} satisfies Prisma.DomainInclude;

export type DomainData = Prisma.DomainGetPayload<{
    include: typeof domainDataInclude
}>;
