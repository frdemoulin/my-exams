import prisma from "@/lib/db/prisma";
import { Diploma } from "@prisma/client";
import { Option } from "@/types/option";

type DiplomaQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchDiplomas(
    options: DiplomaQueryOptions = {}
): Promise<Diploma[]> {
    return await prisma.diploma.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDiplomasOptions(
    options: DiplomaQueryOptions = {}
): Promise<Option[]> {
    const diplomas = await prisma.diploma.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                longDescription: "asc",
            }
        ]
    });

    return diplomas.map((diploma) => ({
        value: diploma.id,
        label: diploma.longDescription,
    }));
}

export async function fetchDiplomaById(id: string): Promise<Diploma | null> {
    return await prisma.diploma.findUnique({
        where: {
            id,
        }
    });
}
