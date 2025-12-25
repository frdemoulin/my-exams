import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { DomainData, domainDataInclude } from "./domain.types";
import { Domain } from "@prisma/client";

export async function fetchDomains(): Promise<Domain[]> {
    return await prisma.domain.findMany({
        orderBy: [
            {
                order: "asc",
            }
        ]
    });
}

export async function fetchDomainsWithIncludes(): Promise<DomainData[]> {
    return await prisma.domain.findMany({
        include: domainDataInclude,
        orderBy: [
            {
                order: "asc",
            }
        ]
    });
}

export async function fetchDomainById(id: string): Promise<DomainData | null> {
    return await prisma.domain.findUnique({
        where: {
            id,
        },
        include: domainDataInclude,
    });
}

export async function fetchDomainsOptions(): Promise<Option[]> {
    const domains = await prisma.domain.findMany({
        orderBy: {
            order: "asc",
        },
    });

    return domains.map((domain) => ({
        value: domain.id,
        label: domain.longDescription,
    }));
}
