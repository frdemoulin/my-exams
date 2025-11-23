import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { ChapterData } from "./chapter.types";
import { Chapter } from "@prisma/client";

export async function fetchChapters(): Promise<Chapter[]> {
    return await prisma.chapter.findMany({
        orderBy: [
            {
                order: "asc",
            }
        ]
    });
}

export async function fetchChaptersWithIncludes(): Promise<ChapterData[]> {
    return await prisma.chapter.findMany({
        include: {
            subject: {
                select: {
                    id: true,
                    longDescription: true,
                },
            }
        },
        orderBy: [
            {
                order: "asc",
            }
        ]
    });
}

export async function fetchChapterById(id: string): Promise<ChapterData | null> {
    return await prisma.chapter.findUnique({
        where: {
            id,
        },
        include: {
            subject: {
                select: {
                    id: true,
                    longDescription: true,
                },
            }
        },
    });
}

export async function fetchChaptersOptions(): Promise<Option[]> {
    const chapters = await prisma.chapter.findMany({
        orderBy: {
            order: "asc",
        },
    });

    return chapters.map((chapter) => ({
        value: chapter.id,
        label: chapter.longDescription,
    }));
}
