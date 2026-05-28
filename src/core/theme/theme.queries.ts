import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { ThemeData } from "./theme.types";
import { Theme } from "@prisma/client";

const themeInclude = {
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
        },
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
    },
} as const;

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
        include: themeInclude,
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
            domainIds: {
                has: domainId,
            },
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
        include: themeInclude,
    });
}

export async function fetchDomainOptionsByThemeId(id: string): Promise<Option[] | null> {
    const theme = await prisma.theme.findUnique({
        where: {
            id,
        },
        include: {
            domains: {
                select: {
                    id: true,
                    longDescription: true,
                },
            },
        },
    });

    if (!theme || theme.domains.length === 0) {
        return null;
    }

    return theme.domains
        .map((domain) => ({
            value: domain.id,
            label: domain.longDescription,
        }))
        .sort((left, right) => left.label.localeCompare(right.label, "fr", { sensitivity: "base" }));
}
