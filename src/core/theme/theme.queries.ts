import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { ThemeData } from "./theme.types";
import { Theme } from "@prisma/client";

export async function fetchThemes(): Promise<Theme[]> {
    return await prisma.theme.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchThemesWithIncludes(): Promise<ThemeData[]> {
    return await prisma.theme.findMany({
        include: {
            chapter: {
                select: {
                    id: true,
                    longDescription: true,
                },
            }
        },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchThemeById(id: string): Promise<ThemeData | null> {
    return await prisma.theme.findUnique({
        where: {
            id,
        },
        include: {
            chapter: {
                select: {
                    id: true,
                    longDescription: true,
                },
            }
        },
    });
}

export async function fetchChapterOptionsByThemeId(id: string): Promise<Option[] | null> {
    const theme = await prisma.theme.findUnique({
        where: {
            id,
        },
        include: {
            chapter: {
                select: {
                    longDescription: true,
                },
            }
        },
    });

    if (!theme || !theme.chapter) {
        return null;
    }

    return [{
        value: theme.chapter.longDescription,
        label: theme.chapter.longDescription,
    }];
}