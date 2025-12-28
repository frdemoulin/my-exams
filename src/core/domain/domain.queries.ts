import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { DomainData, domainDataInclude } from "./domain.types";
import { Domain } from "@prisma/client";

type DomainQueryOptions = {
    includeInactive?: boolean;
};

export async function fetchDomains(
    options: DomainQueryOptions = {}
): Promise<Domain[]> {
    return await prisma.domain.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: [
            {
                order: "asc",
            }
        ]
    });
}

export async function fetchDomainsWithIncludes(
    options: DomainQueryOptions = {}
): Promise<DomainData[]> {
    return await prisma.domain.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
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

export async function fetchDomainsOptions(
    options: DomainQueryOptions = {}
): Promise<Option[]> {
    const domains = await prisma.domain.findMany({
        where: options.includeInactive ? undefined : { isActive: true },
        orderBy: {
            order: "asc",
        },
    });

    return domains.map((domain) => ({
        value: domain.id,
        label: domain.longDescription,
    }));
}
