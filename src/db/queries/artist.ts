import type { Artist } from "@prisma/client";
import prisma from "@/lib/db";
import { ArtistWithReleases } from "@/types/artist";

export async function fetchArtists(): Promise<Artist[]> {
    return await prisma.artist.findMany({
        include: {
            releases: true,
        },
        orderBy: [
            {
                id: 'asc',
            }
        ]
    });
}

export async function fetchArtistsOrderedByName(): Promise<Artist[]> {
    return await prisma.artist.findMany({
        include: {
            releases: true,
        },
        orderBy: [
            {
                name: 'asc',
            }
        ]
    });
}

export async function fetchArtistById(id: string): Promise<ArtistWithReleases | null> {
    const artist = await prisma.artist.findFirst({
        include: {
            releases: true,
        },
        where: {
            id
        }
    });

    if (!artist) {
        return null;
    }

    return artist;
}
