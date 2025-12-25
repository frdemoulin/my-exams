import prisma from "@/lib/db/prisma";
import { Diploma } from "@prisma/client";
import { Option } from "@/types/option";

export async function fetchDiplomas(): Promise<Diploma[]> {
    return await prisma.diploma.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchDiplomasOptions(): Promise<Option[]> {
    const diplomas = await prisma.diploma.findMany({
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
