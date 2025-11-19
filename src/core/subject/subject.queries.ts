import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
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

export async function fetchSubjectsOptions(): Promise<Option[]> {
    const subjects = await prisma.subject.findMany({
        orderBy: [
            {
                longDescription: "asc",
            }
        ]
    });

    const options = subjects.map((subject) => {
        return {
            value: subject.id,
            label: subject.longDescription,
        }
    });

    return options;
}

export async function fetchSubjectById(id: string): Promise<Subject | null> {
    return await prisma.subject.findUnique({
        where: {
            id,
        }
    });
}
