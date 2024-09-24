import prisma from "@/lib/db";
import { Subject } from "@prisma/client";

export async function fetchSubjects(): Promise<Subject[]> {
    return await prisma.subject.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchSubjectById(id: string): Promise<Subject | null> {
    return await prisma.subject.findUnique({
        where: {
            id,
        }
    });
}
