import type { HealthCourseUnitCoverageStatus, PrismaClient } from "@prisma/client";

import fixture from "./data/health-teaching-elements-reims-ue14.json";

type SeedTeachingElement = {
    institutionNameContains?: string | null;
    programVersionSlug: string;
    courseUnitSlug: string;
    code?: string | null;
    title: string;
    shortTitle?: string | null;
    slug: string;
    description?: string | null;
    order: number;
    coverageStatus?: HealthCourseUnitCoverageStatus;
    isActive?: boolean;
    isPublished?: boolean;
    themeSuggestions?: string[];
    sourceUrl?: string | null;
    sourceLabel?: string | null;
    sourceCheckedAt?: string | null;
};

type SeedFixture = {
    metadata?: {
        label?: string;
    };
    teachingElements?: SeedTeachingElement[];
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

const uniqueById = <T extends { id: string }>(values: T[]) => {
    const seen = new Map<string, T>();
    for (const value of values) {
        if (!seen.has(value.id)) seen.set(value.id, value);
    }
    return [...seen.values()];
};

const resolveInstitution = async (prisma: PrismaClient, entry: SeedTeachingElement) => {
    if (!entry.institutionNameContains) {
        console.warn(`⚠️  Aucun critère de résolution d'établissement pour l'EC "${entry.slug}", entrée ignorée.`);
        return null;
    }

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
        console.warn(`⚠️  Établissement introuvable pour "${entry.institutionNameContains}" (EC ${entry.slug}), entrée ignorée.`);
        return null;
    }

    console.warn(`⚠️  Résolution ambiguë de l'établissement pour "${entry.institutionNameContains}" (EC ${entry.slug}), entrée ignorée.`);
    return null;
};

const buildThemeCatalog = (themes: { id: string; title: string; shortTitle: string | null; slug?: string | null }[]) =>
    themes.map((theme) => ({
        ...theme,
        keys: [
            theme.slug,
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

        const matches = uniqueById(
            themes.filter((theme) => theme.keys.includes(normalizedSuggestion))
        );

        if (matches.length === 1) {
            resolvedIds.add(matches[0].id);
            continue;
        }

        console.warn(`Thème non résolu pour ${contextLabel} : ${suggestion}`);
    }

    return [...resolvedIds];
};

const dateFromIso = (value?: string | null) =>
    value ? new Date(`${value}T12:00:00.000Z`) : undefined;

export async function seedHealthTeachingElements(prisma: PrismaClient) {
    const payload = fixture as SeedFixture;
    const teachingElements = payload.teachingElements ?? [];

    if (teachingElements.length === 0) return;

    console.log(`Seeding health teaching elements (${teachingElements.length} EC)...`);

    const themes = buildThemeCatalog(
        await prisma.theme.findMany({
            select: { id: true, title: true, shortTitle: true },
            orderBy: { title: "asc" },
        })
    );

    for (const entry of teachingElements) {
        const institution = await resolveInstitution(prisma, entry);
        if (!institution) continue;

        const version = await prisma.healthProgramVersion.findUnique({
            where: {
                institutionId_slug: {
                    institutionId: institution.id,
                    slug: entry.programVersionSlug,
                },
            },
        });

        if (!version) {
            console.warn(`⚠️  Maquette introuvable pour "${entry.programVersionSlug}" (EC ${entry.slug}), entrée ignorée.`);
            continue;
        }

        const courseUnit = await prisma.healthCourseUnit.findFirst({
            where: {
                programVersionId: version.id,
                slug: entry.courseUnitSlug,
            },
        });

        if (!courseUnit) {
            console.warn(`⚠️  UE introuvable pour "${entry.courseUnitSlug}" (EC ${entry.slug}), entrée ignorée.`);
            continue;
        }

        const themeIds = resolveThemeIds(
            entry.themeSuggestions,
            themes,
            `EC ${entry.title}`
        );

        const data = {
            courseUnitId: courseUnit.id,
            code: entry.code ?? undefined,
            title: entry.title,
            shortTitle: entry.shortTitle ?? undefined,
            slug: entry.slug,
            description: entry.description ?? undefined,
            order: entry.order,
            coverageStatus: entry.coverageStatus ?? "STRUCTURE_ONLY",
            sourceUrl: entry.sourceUrl ?? undefined,
            sourceLabel: entry.sourceLabel ?? undefined,
            sourceCheckedAt: dateFromIso(entry.sourceCheckedAt),
            themeIds,
            isActive: entry.isActive ?? true,
            isPublished: entry.isPublished ?? false,
        };

        const existingTeachingElement = await prisma.healthTeachingElement.findFirst({
            where: {
                courseUnitId: courseUnit.id,
                slug: entry.slug,
            },
        });

        if (existingTeachingElement) {
            await prisma.healthTeachingElement.update({
                where: { id: existingTeachingElement.id },
                data,
            });
            continue;
        }

        await prisma.healthTeachingElement.create({ data });
    }

    console.log("✅ Fixtures des EC santé appliquées.");
}
