import prisma from "@/lib/db/prisma";
import type { Curriculum } from "@prisma/client";
import type { CurriculumWithTeachingCount, CurriculumWithTeachings } from "./curriculum.types";

export async function fetchCurriculums(): Promise<Curriculum[]> {
    return await prisma.curriculum.findMany({
        orderBy: [
            { isActive: "desc" },
            { startYear: "desc" },
        ],
    });
}

export async function fetchCurriculumsWithCourseCount(): Promise<CurriculumWithTeachingCount[]> {
    const curriculums = await prisma.curriculum.findMany({
        orderBy: [
            { isActive: "desc" },
            { startYear: "desc" },
        ],
    });

    return await Promise.all(
        curriculums.map(async (curriculum) => {
            const teachingCount = curriculum.teachingIds.length;
            return {
                ...curriculum,
                _count: {
                    teachings: teachingCount,
                },
            };
        })
    );
}

export async function fetchCurriculumById(id: string): Promise<CurriculumWithTeachings | null> {
    const curriculum = await prisma.curriculum.findUnique({
        where: { id },
    });

    if (!curriculum) return null;

    // Fetch all teachings associated with this curriculum
    const teachings = await prisma.teaching.findMany({
        where: {
            id: { in: curriculum.teachingIds },
        },
        include: {
            grade: {
                select: {
                    id: true,
                    shortDescription: true,
                },
            },
            subject: {
                select: {
                    id: true,
                    shortDescription: true,
                },
            },
        },
        orderBy: [
            { grade: { shortDescription: "asc" } },
            { subject: { shortDescription: "asc" } },
        ],
    });

    return {
        ...curriculum,
        teachings,
    };
}

export async function fetchActiveCurriculums(): Promise<Curriculum[]> {
    return await prisma.curriculum.findMany({
        where: { isActive: true },
        orderBy: { startYear: "desc" },
    });
}
