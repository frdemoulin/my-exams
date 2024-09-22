import type { ReleaseType } from "@prisma/client";
import prisma from "@/lib/db";

export async function fetchReleaseTypes(): Promise<ReleaseType[]> {
    return await prisma.releaseType.findMany({
        orderBy: [
            {
                id: 'asc',
            }
        ]
    });
}

export async function fetchReleaseTypesOrderedByDescription(): Promise<ReleaseType[]> {
    return await prisma.releaseType.findMany({
        orderBy: [
            {
                description: 'asc',
            }
        ]
    });
}

export async function fetchReleaseTypeById(id: string): Promise<ReleaseType | null> {
    const releaseType = await prisma.releaseType.findFirst({
        where: {
            id
        }
    });

    if (!releaseType) {
        return null;
    }

    return releaseType;
}
