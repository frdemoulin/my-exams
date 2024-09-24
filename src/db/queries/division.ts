import prisma from "@/lib/db";
import { Division } from "@prisma/client";

export async function fetchDivisions(): Promise<Division[]> {
    return await prisma.division.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDivisionById(id: string): Promise<Division | null> {
    return await prisma.division.findUnique({
        where: {
            id,
        }
    });
}
