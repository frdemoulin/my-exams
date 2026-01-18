import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { ThemeData } from "./theme.types";
import { Theme } from "@prisma/client";

export async function fetchThemes(): Promise<Theme[]> {
    return await prisma.theme.findMany({
        orderBy: [
            {
                title: "asc",
            }
        ]
    });
}

export async function fetchThemesWithIncludes(): Promise<ThemeData[]> {
    return await prisma.theme.findMany({
        include: {
            domain: {
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
                },
            }
        },
        orderBy: [
            {
                title: "asc",
            }
        ]
    });
}

export async function fetchThemesByDomainId(domainId: string): Promise<Theme[]> {
    return await prisma.theme.findMany({
        where: {
            domainId,
        },
        orderBy: [
            {
                title: "asc",
            },
        ],
    });
}

export async function fetchThemeById(id: string): Promise<ThemeData | null> {
    return await prisma.theme.findUnique({
        where: {
            id,
        },
        include: {
            domain: {
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
                },
            }
        },
    });
}

export async function fetchDomainOptionsByThemeId(id: string): Promise<Option[] | null> {
    const theme = await prisma.theme.findUnique({
        where: {
            id,
        },
        include: {
            domain: {
                select: {
                    longDescription: true,
                },
            }
        },
    });

    if (!theme || !theme.domain) {
        return null;
    }

    return [{
        value: theme.domain.longDescription,
        label: theme.domain.longDescription,
    }];
}
