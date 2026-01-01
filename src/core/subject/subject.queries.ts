import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { Subject } from "@prisma/client";

type SubjectQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchSubjects(
    options: SubjectQueryOptions = {}
): Promise<Subject[]> {
    return await prisma.subject.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchSubjectsOptions(
    options: SubjectQueryOptions = {}
): Promise<Option[]> {
    const subjects = await prisma.subject.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                longDescription: "asc",
            }
        ]
    });

    const optionsList = subjects.map((subject) => {
        return {
            value: subject.id,
            label: subject.longDescription,
        }
    });

    return optionsList;
}

export async function fetchSubjectById(id: string): Promise<Subject | null> {
    if (!/^[a-f0-9]{24}$/i.test(id)) {
        return null;
    }

    return await prisma.subject.findUnique({
        where: {
            id,
        }
    });
}
