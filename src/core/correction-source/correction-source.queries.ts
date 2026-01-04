import prisma from "@/lib/db/prisma";
import { CorrectionSource } from "@prisma/client";

type CorrectionSourceQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchCorrectionSources(
    options: CorrectionSourceQueryOptions = {}
): Promise<CorrectionSource[]> {
    return await prisma.correctionSource.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                label: "asc",
            },
        ],
    });
}

export async function fetchCorrectionSourceById(
    id: string
): Promise<CorrectionSource | null> {
    return await prisma.correctionSource.findUnique({
        where: {
            id,
        },
    });
}
