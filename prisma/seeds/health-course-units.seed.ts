import type { HealthCourseUnitCoverageStatus } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

import fixture from "./data/health-course-units-reims-strasbourg.json";

type SeedHealthBlock = {
    institutionUaiCode?: string | null;
    institutionNameContains?: string | null;
    programVersionSlug?: string | null;
    pathwaySlug: string | null;
    type: "HEALTH" | "DISCIPLINARY" | "TRANSVERSAL" | "SPECIALTY" | "OTHER";
    title: string;
    slug: string;
    description?: string | null;
    ects?: number | null;
    order: number;
    isActive?: boolean;
    isPublished?: boolean;
};

type SeedHealthCourseUnit = {
    institutionUaiCode?: string | null;
    institutionNameContains?: string | null;
    programVersionSlug?: string | null;
    pathwaySlug: string | null;
    blockSlug: string;
    code?: string | null;
    title: string;
    shortTitle?: string | null;
    slug: string;
    description?: string | null;
    semester?: number | null;
    ects?: number | null;
    order: number;
    isCommonToAllPathways?: boolean;
    isHealthAccessRelevant?: boolean;
    isActive?: boolean;
    isPublished?: boolean;
    themeSuggestions?: string[];
    sourceUrl?: string | null;
    sourceLabel?: string | null;
    sourceCheckedAt?: string | null;
};

type SeedTheme = {
    id: string;
    title: string;
    shortTitle: string | null;
};

type SeedFixture = {
    metadata?: {
        label?: string;
        sourceCheckedAt?: string;
    };
    blocks?: SeedHealthBlock[];
    courseUnits?: SeedHealthCourseUnit[];
};

const normalizeSeedText = (value: string) =>
    value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’']/g, " ")
        .replace(/[^a-z0-9]+/gi, " ")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

const dateFromIso = (value?: string | null) =>
    value ? new Date(`${value}T12:00:00.000Z`) : undefined;

const uniqueById = <T extends { id: string }>(values: T[]) => {
    const seen = new Map<string, T>();
    for (const value of values) {
        if (!seen.has(value.id)) seen.set(value.id, value);
    }
    return [...seen.values()];
};

const buildThemeCatalog = (themes: SeedTheme[]) =>
    themes.map((theme) => ({
        ...theme,
        keys: [
            theme.title,
            theme.shortTitle,
        ]
            .filter((value): value is string => Boolean(value))
            .map((value) => normalizeSeedText(value)),
    }));

const resolveThemeIds = (
    suggestions: string[] | undefined,
    themes: ReturnType<typeof buildThemeCatalog>,
    contextLabel: string
) => {
    const resolvedIds = new Set<string>();

    for (const suggestion of suggestions ?? []) {
        const normalizedSuggestion = normalizeSeedText(suggestion);
        if (!normalizedSuggestion) continue;

        const exactMatches = themes.filter((theme) => theme.keys.includes(normalizedSuggestion));
        const fuzzyMatches =
            exactMatches.length > 0
                ? exactMatches
                : themes.filter((theme) =>
                      theme.keys.some(
                          (key) => key.includes(normalizedSuggestion) || normalizedSuggestion.includes(key)
                      )
                  );

        const uniqueMatches = uniqueById(fuzzyMatches);
        if (uniqueMatches.length === 1) {
            resolvedIds.add(uniqueMatches[0].id);
            continue;
        }

        console.warn(`Thème non résolu pour ${contextLabel} : ${suggestion}`);
    }

    return [...resolvedIds];
};

const resolveInstitution = async (prisma: PrismaClient, entry: SeedHealthBlock | SeedHealthCourseUnit) => {
    if (entry.institutionUaiCode) {
        const institution = await prisma.healthInstitution.findFirst({
            where: { uaiCode: entry.institutionUaiCode },
        });
        if (!institution) {
            throw new Error(
                `Établissement introuvable pour UAI ${entry.institutionUaiCode} (bloc/UE: ${entry.slug})`
            );
        }
        return institution;
    }

    if (entry.institutionNameContains) {
        const institutions = await prisma.healthInstitution.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: entry.institutionNameContains,
                            mode: "insensitive",
                        },
                    },
                    {
                        shortName: {
                            contains: entry.institutionNameContains,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            orderBy: { name: "asc" },
        });

        if (institutions.length === 1) return institutions[0];
        if (institutions.length === 0) {
            throw new Error(
                `Établissement introuvable pour "${entry.institutionNameContains}" (bloc/UE: ${entry.slug})`
            );
        }

        throw new Error(
            `Résolution ambiguë de l'établissement pour "${entry.institutionNameContains}" (bloc/UE: ${entry.slug})`
        );
    }

    throw new Error(`Aucun critère de résolution d'établissement pour le bloc/UE "${entry.slug}"`);
};

const resolveProgramVersion = async (
    prisma: PrismaClient,
    institutionId: string,
    programVersionSlug: string,
    contextLabel: string
) => {
    const version = await prisma.healthProgramVersion.findUnique({
        where: {
            institutionId_slug: {
                institutionId,
                slug: programVersionSlug,
            },
        },
    });

    if (!version) {
        throw new Error(`Maquette introuvable pour ${contextLabel} (${programVersionSlug})`);
    }

    return version;
};

const resolvePathway = async (
    prisma: PrismaClient,
    programVersionId: string,
    pathwaySlug: string | null,
    contextLabel: string
) => {
    if (!pathwaySlug) return null;

    const pathway = await prisma.healthPathway.findFirst({
        where: {
            programVersionId,
            slug: pathwaySlug,
        },
    });

    if (!pathway) {
        throw new Error(`Parcours introuvable pour ${contextLabel} (${pathwaySlug})`);
    }

    return pathway;
};

const upsertBlock = async (
    prisma: PrismaClient,
    entry: SeedHealthBlock,
    versionId: string,
    pathwayId: string | null
) => {
    const data = {
        programVersionId: versionId,
        pathwayId,
        type: entry.type,
        title: entry.title,
        slug: entry.slug,
        description: entry.description ?? undefined,
        ects: entry.ects ?? undefined,
        order: entry.order,
        isActive: entry.isActive ?? true,
        isPublished: entry.isPublished ?? false,
    };

    const existingBlock = await prisma.healthBlock.findFirst({
        where: {
            programVersionId: versionId,
            pathwayId,
            slug: entry.slug,
        },
    });

    if (existingBlock) {
        return prisma.healthBlock.update({
            where: { id: existingBlock.id },
            data,
        });
    }

    return prisma.healthBlock.create({ data });
};

const upsertCourseUnit = async (
    prisma: PrismaClient,
    entry: SeedHealthCourseUnit,
    versionId: string,
    pathwayId: string | null,
    blockId: string,
    themeIds: string[]
) => {
    const coverageStatus: HealthCourseUnitCoverageStatus =
        themeIds.length > 0 ? "THEMES_MAPPED" : "STRUCTURE_ONLY";
    const data = {
        programVersionId: versionId,
        pathwayId,
        blockId,
        code: entry.code ?? undefined,
        title: entry.title,
        shortTitle: entry.shortTitle ?? undefined,
        slug: entry.slug,
        description: entry.description ?? undefined,
        semester: entry.semester ?? undefined,
        ects: entry.ects ?? undefined,
        order: entry.order,
        isCommonToAllPathways: entry.isCommonToAllPathways ?? false,
        isHealthAccessRelevant: entry.isHealthAccessRelevant ?? true,
        coverageStatus,
        sourceUrl: entry.sourceUrl ?? undefined,
        sourceLabel: entry.sourceLabel ?? undefined,
        sourceCheckedAt: dateFromIso(entry.sourceCheckedAt),
        themeIds,
        isActive: entry.isActive ?? true,
        isPublished: entry.isPublished ?? false,
    };

    const existingCourseUnit = await prisma.healthCourseUnit.findFirst({
        where: {
            programVersionId: versionId,
            pathwayId,
            slug: entry.slug,
        },
    });

    if (existingCourseUnit) {
        return prisma.healthCourseUnit.update({
            where: { id: existingCourseUnit.id },
            data,
        });
    }

    return prisma.healthCourseUnit.create({ data });
};

export async function seedHealthCourseUnits(prisma: PrismaClient) {
    const payload = fixture as SeedFixture;
    const blocks = payload.blocks ?? [];
    const courseUnits = payload.courseUnits ?? [];

    if (blocks.length === 0 && courseUnits.length === 0) return;

    console.log(
        `Seeding health course units (${blocks.length} blocks, ${courseUnits.length} UE)...`
    );

    const themes = buildThemeCatalog(
        await prisma.theme.findMany({
            select: { id: true, title: true, shortTitle: true },
            orderBy: { title: "asc" },
        })
    );

    const blockByKey = new Map<string, { id: string }>();

    for (const blockEntry of blocks) {
        const institution = await resolveInstitution(prisma, blockEntry);
        const programVersionSlug = blockEntry.programVersionSlug ?? "las-2025-2026";
        const version = await resolveProgramVersion(
            prisma,
            institution.id,
            programVersionSlug,
            `${institution.name} / bloc ${blockEntry.slug}`
        );
        const pathway = await resolvePathway(
            prisma,
            version.id,
            blockEntry.pathwaySlug,
            `${institution.name} / bloc ${blockEntry.slug}`
        );

        const block = await upsertBlock(prisma, blockEntry, version.id, pathway?.id ?? null);
        blockByKey.set(`${version.id}::${pathway?.id ?? "null"}::${blockEntry.slug}`, { id: block.id });
    }

    for (const courseUnitEntry of courseUnits) {
        const institution = await resolveInstitution(prisma, courseUnitEntry);
        const programVersionSlug = courseUnitEntry.programVersionSlug ?? "las-2025-2026";
        const version = await resolveProgramVersion(
            prisma,
            institution.id,
            programVersionSlug,
            `${institution.name} / UE ${courseUnitEntry.code ?? courseUnitEntry.slug}`
        );
        const pathway = await resolvePathway(
            prisma,
            version.id,
            courseUnitEntry.pathwaySlug,
            `${institution.name} / UE ${courseUnitEntry.code ?? courseUnitEntry.slug}`
        );

        const blockKey = `${version.id}::${pathway?.id ?? "null"}::${courseUnitEntry.blockSlug}`;
        const block = blockByKey.get(blockKey);
        if (!block) {
            throw new Error(
                `Bloc introuvable pour ${institution.name} / UE ${courseUnitEntry.code ?? courseUnitEntry.slug} (${courseUnitEntry.blockSlug})`
            );
        }

        const themeIds = resolveThemeIds(
            courseUnitEntry.themeSuggestions,
            themes,
            `${courseUnitEntry.code ?? courseUnitEntry.slug} ${institution.name}`
        );

        await upsertCourseUnit(
            prisma,
            courseUnitEntry,
            version.id,
            pathway?.id ?? null,
            block.id,
            themeIds
        );
    }

    console.log("✅ Fixtures des UE santé appliquées.");
}
