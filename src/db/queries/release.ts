import type { Release } from "@prisma/client";
import prisma from "@/lib/db";
import { ReleaseWithArtistAndReleaseType } from "@/types/release";

export async function fetchReleases(): Promise<ReleaseWithArtistAndReleaseType[]> {
    return await prisma.release.findMany({
        include: {
            artist: true,
            releaseType: true,
        },
        orderBy: [
            {
                id: "asc",
            },
        ],
    });
}

export async function fetchReleaseById(id: string): Promise<ReleaseWithArtistAndReleaseType> {
    return await prisma.release.findUniqueOrThrow({
        where: {
            id
        },
        include: {
            artist: true,
            releaseType: true,
        },
    });
}
