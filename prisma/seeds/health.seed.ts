import {
    HealthBlockType,
    HealthProgramType,
    HealthStudyLevel,
    PrismaClient,
} from "@prisma/client";

import blockFixture from "./data/health-blocks.json";
import fixture from "./data/health-parcoursup-2025.json";

const slugify = (value: string, maxLength = 160) =>
    value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, maxLength)
        .replace(/-+$/g, "");

const canonicalInstitutionName = (name: string) =>
    name.replace(/\s+\([^()]*(?:\d{2,3}|arrondissement)[^()]*\)$/i, "").trim();

const programDefinitions = {
    PASS: {
        type: HealthProgramType.PASS,
        code: "PASS",
        label: "Parcours d'accès spécifique santé (PASS)",
        description:
            "Première année universitaire avec une majeure santé et une option hors santé, " +
            "recensée à partir des offres Parcoursup.",
    },
    LAS: {
        type: HealthProgramType.LAS,
        code: "LAS",
        label: "Licence avec accès santé (L.AS)",
        description:
            "Licence disciplinaire proposant un accès aux études de santé, recensée à partir des offres Parcoursup.",
    },
} as const;

const versionNotes = (
    uaiCode: string,
    sourceUaiCodes: string[],
    type: keyof typeof programDefinitions
) =>
    [
        `Référentiel généré depuis la cartographie officielle Parcoursup, session ${fixture.metadata.sourceSession}.`,
        `Code UAI de l'université santé : ${uaiCode}.`,
        `Codes UAI des établissements et campus proposant les parcours : ${sourceUaiCodes.join(", ")}.`,
        `Cette maquette recense les offres de candidature ${type} publiées sur Parcoursup.`,
        "Elle ne décrit pas les blocs, UE ou ECTS locaux, qui doivent être ajoutés uniquement depuis une source universitaire vérifiée.",
    ].join("\n");

const pathwayDescription = (
    sourceInstitutionName: string,
    sourceUaiCode: string,
    mentions: string[]
) =>
    [
        `Établissement dispensant la licence : ${sourceInstitutionName} (${sourceUaiCode}).`,
        mentions.length > 0
            ? `Mentions ou spécialités indiquées par Parcoursup :\n${mentions.map((mention) => `- ${mention}`).join("\n")}`
            : "Aucune mention ou spécialité complémentaire n'est indiquée dans la cartographie Parcoursup.",
    ].join("\n\n");

type SeedHealthBlock = {
    programVersionSlug: string;
    pathwaySlug: string | null;
    type: HealthBlockType;
    title: string;
    slug: string;
    description?: string | null;
    ects?: number | null;
    order: number;
    isActive?: boolean;
    isPublished?: boolean;
};

const seedHealthBlocks = async (prisma: PrismaClient) => {
    const healthBlocks = (blockFixture as { healthBlocks?: SeedHealthBlock[] }).healthBlocks ?? [];
    if (healthBlocks.length === 0) return;

    for (const blockFixtureEntry of healthBlocks) {
        const version = await prisma.healthProgramVersion.findFirst({
            where: { slug: blockFixtureEntry.programVersionSlug },
        });
        if (!version) {
            console.warn(
                `⚠️  Maquette santé introuvable pour le bloc "${blockFixtureEntry.slug}" ` +
                    `(version ${blockFixtureEntry.programVersionSlug}), bloc ignoré.`
            );
            continue;
        }

        const pathway = blockFixtureEntry.pathwaySlug
            ? await prisma.healthPathway.findFirst({
                  where: {
                      programVersionId: version.id,
                      slug: blockFixtureEntry.pathwaySlug,
                  },
              })
            : null;
        if (blockFixtureEntry.pathwaySlug && !pathway) {
            console.warn(
                `⚠️  Parcours santé introuvable pour le bloc "${blockFixtureEntry.slug}" ` +
                    `(parcours ${blockFixtureEntry.pathwaySlug}), bloc ignoré.`
            );
            continue;
        }

        const data = {
            programVersionId: version.id,
            pathwayId: pathway?.id ?? null,
            type: blockFixtureEntry.type,
            title: blockFixtureEntry.title,
            slug: blockFixtureEntry.slug,
            description: blockFixtureEntry.description ?? undefined,
            ects: blockFixtureEntry.ects ?? undefined,
            order: blockFixtureEntry.order,
            isActive: blockFixtureEntry.isActive ?? true,
            isPublished: blockFixtureEntry.isPublished ?? false,
        };

        const existingBlock = await prisma.healthBlock.findFirst({
            where: {
                programVersionId: version.id,
                pathwayId: pathway?.id ?? null,
                slug: blockFixtureEntry.slug,
            },
        });

        if (existingBlock) {
            await prisma.healthBlock.update({
                where: { id: existingBlock.id },
                data,
            });
        } else {
            await prisma.healthBlock.create({ data });
        }
    }
};

export async function seedHealth(prisma: PrismaClient) {
    console.log(
        `Seeding health reference data (${fixture.metadata.institutionCount} institutions, ` +
            `${fixture.metadata.offeringCount} Parcoursup offerings)...`
    );

    // Retire le cas URCA minimal de l'ancienne fixture, remplacé par le référentiel national.
    await prisma.healthInstitution.deleteMany({
        where: {
            slug: "universite-reims-champagne-ardenne",
        },
    });
    const legacyProgram = await prisma.healthProgram.findUnique({
        where: { code: "LAS_SPS" },
        include: { _count: { select: { versions: true } } },
    });
    if (
        legacyProgram?.label === "Licence Sciences pour la santé / accès santé" &&
        legacyProgram._count.versions === 0
    ) {
        await prisma.healthProgram.delete({ where: { id: legacyProgram.id } });
    }

    const canonicalUaiCodes = fixture.institutions.map((institution) => institution.uaiCode);
    await prisma.healthInstitution.deleteMany({
        where: {
            uaiCode: {
                in: fixture.metadata.sourceUaiCodes,
                notIn: canonicalUaiCodes,
            },
        },
    });

    const programs = new Map<keyof typeof programDefinitions, { id: string }>();
    for (const [key, definition] of Object.entries(programDefinitions) as [
        keyof typeof programDefinitions,
        (typeof programDefinitions)[keyof typeof programDefinitions],
    ][]) {
        const program = await prisma.healthProgram.upsert({
            where: { code: definition.code },
            update: {
                type: definition.type,
                label: definition.label,
                description: definition.description,
                isActive: true,
                isPublished: true,
            },
            create: {
                ...definition,
                isActive: true,
                isPublished: true,
            },
        });
        programs.set(key, program);
    }

    const sourceCheckedAt = new Date(`${fixture.metadata.sourceCheckedAt}T12:00:00.000Z`);

    for (const institutionFixture of fixture.institutions) {
        const institutionSlug = `${slugify(institutionFixture.name, 145)}-${institutionFixture.uaiCode.toLowerCase()}`;
        const existingInstitution = await prisma.healthInstitution.findFirst({
            where: {
                OR: [
                    { uaiCode: institutionFixture.uaiCode },
                    { slug: institutionSlug },
                    {
                        uaiCode: null,
                        name: canonicalInstitutionName(institutionFixture.name),
                    },
                ],
            },
        });
        const institutionData = {
            name: institutionFixture.name,
            slug: institutionSlug,
            uaiCode: institutionFixture.uaiCode,
            city: institutionFixture.city,
            region: institutionFixture.region,
            department: institutionFixture.department,
            websiteUrl: institutionFixture.websiteUrl,
            isActive: true,
            isPublished: true,
        };
        const institution = existingInstitution
            ? await prisma.healthInstitution.update({
                  where: { id: existingInstitution.id },
                  data: institutionData,
              })
            : await prisma.healthInstitution.create({ data: institutionData });

        for (const type of ["PASS", "LAS"] as const) {
            const offerings = institutionFixture.offerings.filter((offering) => offering.type === type);
            if (offerings.length === 0) continue;

            const program = programs.get(type);
            if (!program) throw new Error(`Programme santé introuvable : ${type}`);

            const versionSlug = `${type.toLowerCase()}-${fixture.metadata.academicYear}`;
            const versionLabel = `${institution.name} - ${type} - ${fixture.metadata.academicYear}`;
            const version = await prisma.healthProgramVersion.upsert({
                where: {
                    institutionId_slug: {
                        institutionId: institution.id,
                        slug: versionSlug,
                    },
                },
                update: {
                    programId: program.id,
                    label: versionLabel,
                    academicYear: fixture.metadata.academicYear,
                    studyLevel: HealthStudyLevel.L1,
                    sourceUrl: fixture.metadata.sourceUrl,
                    sourceLabel: fixture.metadata.sourceTitle,
                    sourceCheckedAt,
                    notes: versionNotes(institutionFixture.uaiCode, institutionFixture.sourceUaiCodes, type),
                    isCurrent: true,
                    isActive: true,
                    isPublished: true,
                },
                create: {
                    institutionId: institution.id,
                    programId: program.id,
                    label: versionLabel,
                    slug: versionSlug,
                    academicYear: fixture.metadata.academicYear,
                    studyLevel: HealthStudyLevel.L1,
                    sourceUrl: fixture.metadata.sourceUrl,
                    sourceLabel: fixture.metadata.sourceTitle,
                    sourceCheckedAt,
                    notes: versionNotes(institutionFixture.uaiCode, institutionFixture.sourceUaiCodes, type),
                    isCurrent: true,
                    isActive: true,
                    isPublished: true,
                },
            });

            for (const [order, offering] of offerings.entries()) {
                const pathwaySlug = `${slugify(offering.name, 150)}-${offering.parcoursupCode}`;
                await prisma.healthPathway.upsert({
                    where: {
                        programVersionId_slug: {
                            programVersionId: version.id,
                            slug: pathwaySlug,
                        },
                    },
                    update: {
                        name: offering.name,
                        campus: offering.campus,
                        parcoursupCode: offering.parcoursupCode,
                        sourceUrl: offering.sourceUrl,
                        description: pathwayDescription(
                            offering.sourceInstitutionName,
                            offering.sourceUaiCode,
                            offering.mentions
                        ),
                        order: order + 1,
                        isDefault: false,
                        isActive: true,
                        isPublished: true,
                    },
                    create: {
                        programVersionId: version.id,
                        name: offering.name,
                        slug: pathwaySlug,
                        campus: offering.campus,
                        parcoursupCode: offering.parcoursupCode,
                        sourceUrl: offering.sourceUrl,
                        description: pathwayDescription(
                            offering.sourceInstitutionName,
                            offering.sourceUaiCode,
                            offering.mentions
                        ),
                        order: order + 1,
                        isDefault: false,
                        isActive: true,
                        isPublished: true,
                    },
                });
            }
        }
    }

    await seedHealthBlocks(prisma);
}
