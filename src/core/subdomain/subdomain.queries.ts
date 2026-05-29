import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import { SubdomainData, subdomainDataInclude } from "./subdomain.types";

type SubdomainQueryOptions = {
    includeInactive?: boolean;
    subjectId?: string;
    domainId?: string;
};

const buildWhere = (options: SubdomainQueryOptions) => {
    const where: Record<string, unknown> = {};
    if (!options.includeInactive) where.isActive = true;
    if (options.subjectId) where.subjectId = options.subjectId;
    if (options.domainId) where.domainId = options.domainId;
    return where;
};

export async function fetchSubdomainsWithIncludes(
    options: SubdomainQueryOptions = {}
): Promise<SubdomainData[]> {
    return prisma.subdomain.findMany({
        where: buildWhere(options),
        include: subdomainDataInclude,
        orderBy: [{ order: "asc" }, { title: "asc" }],
    });
}

export async function fetchSubdomainById(id: string): Promise<SubdomainData | null> {
    return prisma.subdomain.findUnique({
        where: { id },
        include: subdomainDataInclude,
    });
}

export async function fetchSubdomainsOptions(
    options: SubdomainQueryOptions = {}
): Promise<Option[]> {
    const subdomains = await prisma.subdomain.findMany({
        where: buildWhere(options),
        orderBy: [{ order: "asc" }, { title: "asc" }],
        select: { id: true, title: true },
    });

    return subdomains.map((s) => ({ value: s.id, label: s.title }));
}

type SubdomainOptionWithMeta = Option & {
    subjectId: string;
    domainId: string;
};

export async function fetchSubdomainsOptionsWithMeta(
    options: SubdomainQueryOptions = {}
): Promise<SubdomainOptionWithMeta[]> {
    const subdomains = await prisma.subdomain.findMany({
        where: buildWhere(options),
        orderBy: [{ order: "asc" }, { title: "asc" }],
        select: { id: true, title: true, subjectId: true, domainId: true },
    });

    return subdomains.map((s) => ({
        value: s.id,
        label: s.title,
        subjectId: s.subjectId,
        domainId: s.domainId,
    }));
}
