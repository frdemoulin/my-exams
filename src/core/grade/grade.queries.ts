import prisma from "@/lib/db/prisma";
import { Grade } from "@prisma/client";
import { Option } from "@/types/option";

export async function fetchGrades(): Promise<Grade[]> {
    return await prisma.grade.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchGradesOptions(): Promise<Option[]> {
    const grades = await prisma.grade.findMany({
        orderBy: [
            {
                shortDescription: "asc",
            }
        ]
    });

    return grades.map((grade) => ({
        value: grade.id,
        label: `${grade.shortDescription} - ${grade.longDescription}`,
    }));
}

export async function fetchGradeById(id: string): Promise<Grade | null> {
    return await prisma.grade.findUnique({
        where: {
            id,
        }
    });
}
