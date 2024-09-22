import prisma from "@/lib/db";
import { Diploma } from "@prisma/client";

export async function fetchDiplomas(): Promise<Diploma[]> {
    return await prisma.diploma.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDiplomaById(id: string): Promise<Diploma | null> {
    return await prisma.diploma.findUnique({
        where: {
            id,
        }
    });
}
