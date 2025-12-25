import prisma from "@/lib/db/prisma";
import { Division } from "@prisma/client";
import { Option } from "@/types/option";

export async function fetchDivisions(): Promise<Division[]> {
    return await prisma.division.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDivisionsOptions(): Promise<Option[]> {
    const divisions = await prisma.division.findMany({
        orderBy: [
            {
                longDescription: "asc",
            }
        ]
    });

    return divisions.map((division) => ({
        value: division.id,
        label: division.longDescription,
    }));
}

export async function fetchDivisionById(id: string): Promise<Division | null> {
    return await prisma.division.findUnique({
        where: {
            id,
        }
    });
}
