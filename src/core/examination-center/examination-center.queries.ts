import prisma from "@/lib/db/prisma";
import { ExaminationCenter } from "@prisma/client";

type ExaminationCenterQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchExaminationCenters(
    options: ExaminationCenterQueryOptions = {}
): Promise<ExaminationCenter[]> {
    return await prisma.examinationCenter.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                description: "asc",
            }
        ]
    });
}

export async function fetchExaminationCenterById(id: string): Promise<ExaminationCenter | null> {
    return await prisma.examinationCenter.findUnique({
        where: {
            id,
        }
    });
}
