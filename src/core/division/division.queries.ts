import prisma from "@/lib/db/prisma";
import { Division } from "@prisma/client";
import { Option } from "@/types/option";

type DivisionQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchDivisions(
    options: DivisionQueryOptions = {}
): Promise<Division[]> {
    return await prisma.division.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDivisionsOptions(
    options: DivisionQueryOptions = {}
): Promise<Option[]> {
    const divisions = await prisma.division.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
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
