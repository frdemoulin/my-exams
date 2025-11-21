import prisma from "@/lib/db/prisma";
import { Grade } from "@prisma/client";

export async function fetchGrades(): Promise<Grade[]> {
    return await prisma.grade.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchGradeById(id: string): Promise<Grade | null> {
    return await prisma.grade.findUnique({
        where: {
            id,
        }
    });
}
