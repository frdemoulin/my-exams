import prisma from "@/lib/db";
import { ExaminationCenter } from "@prisma/client";

export async function fetchExaminationCenters(): Promise<ExaminationCenter[]> {
    return await prisma.examinationCenter.findMany({
        orderBy: [
            {
                createdAt: "asc",
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
