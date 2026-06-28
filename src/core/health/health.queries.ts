import prisma from "@/lib/db/prisma";
import {
    HealthEntity,
    healthCourseUnitCoverageStatusLabels,
    healthEntityLabels,
} from "./health.schemas";
import { HealthAdminRow, HealthFormOptions, HealthRecord } from "./health.types";

const row = (
    value: Omit<HealthAdminRow, "searchText" | "updatedAt"> & { updatedAt: Date }
): HealthAdminRow => ({
    ...value,
    searchText: [value.primary, value.secondary, ...value.details].join(" ").toLocaleLowerCase("fr"),
    updatedAt: value.updatedAt.toISOString(),
});

export async function fetchHealthAdminRows(entity: HealthEntity): Promise<HealthAdminRow[]> {
    switch (entity) {
        case "institutions": {
            const records = await prisma.healthInstitution.findMany({
                include: { _count: { select: { programVersions: true } } },
                orderBy: { name: "asc" },
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.name,
                    secondary: [item.shortName, item.city, item.uaiCode].filter(Boolean).join(" · "),
                    details: [
                        item.academy ? `Académie : ${item.academy}` : "",
                        item.region ? `Région : ${item.region}` : "",
                        item.department ? `Département : ${item.department}` : "",
                        `${item._count.programVersions} maquette(s)`,
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "programs": {
            const records = await prisma.healthProgram.findMany({
                include: { _count: { select: { versions: true } } },
                orderBy: { label: "asc" },
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.label,
                    secondary: `${item.code} · ${item.type}`,
                    details: [`${item._count.versions} maquette(s)`],
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "program-versions": {
            const records = await prisma.healthProgramVersion.findMany({
                include: { institution: true, program: true },
                orderBy: [{ academicYear: "desc" }, { label: "asc" }],
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.label,
                    secondary: `${item.institution.shortName ?? item.institution.name} · ${item.program.code}`,
                    details: [
                        `${item.academicYear} · ${item.studyLevel}`,
                        item.isCurrent ? "Maquette courante" : "",
                        item.sourceLabel ?? item.sourceUrl ?? "",
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "pathways": {
            const records = await prisma.healthPathway.findMany({
                include: { programVersion: { include: { institution: true } } },
                orderBy: [{ order: "asc" }, { name: "asc" }],
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.name,
                    secondary: `${item.programVersion.institution.shortName ?? item.programVersion.institution.name} · ${item.programVersion.label}`,
                    details: [
                        item.campus ? `Campus : ${item.campus}` : "",
                        item.parcoursupCode ? `Parcoursup : ${item.parcoursupCode}` : "",
                        item.isDefault ? "Parcours par défaut" : "",
                        `Ordre : ${item.order}`,
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "blocks": {
            const records = await prisma.healthBlock.findMany({
                include: { programVersion: true, pathway: true },
                orderBy: [{ order: "asc" }, { title: "asc" }],
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.title,
                    secondary: `${item.type} · ${item.programVersion.label}`,
                    details: [
                        item.pathway?.name ?? "Commun à la maquette",
                        item.ects != null ? `${item.ects} ECTS` : "",
                        `Ordre : ${item.order}`,
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "course-units": {
            const records = await prisma.healthCourseUnit.findMany({
                include: { programVersion: true, pathway: true, block: true, themes: true },
                orderBy: [{ order: "asc" }, { title: "asc" }],
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.title,
                    secondary: [item.code, item.block.title, item.programVersion.label].filter(Boolean).join(" · "),
                    details: [
                        item.pathway?.name ?? "Commune à la maquette",
                        `Couverture : ${healthCourseUnitCoverageStatusLabels[item.coverageStatus ?? "STRUCTURE_ONLY"]}`,
                        item.sourceLabel ? `Source : ${item.sourceLabel}` : item.sourceUrl ?? "",
                        item.sourceCheckedAt ? `Source vérifiée le : ${item.sourceCheckedAt.toISOString().slice(0, 10)}` : "",
                        item.semester != null ? `Semestre ${item.semester}` : "",
                        item.ects != null ? `${item.ects} ECTS` : "",
                        item.themes.length ? `Thèmes : ${item.themes.map((theme) => theme.shortTitle ?? theme.title).join(", ")}` : "Aucun thème",
                        `Ordre : ${item.order}`,
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
        case "teaching-elements": {
            const records = await prisma.healthTeachingElement.findMany({
                include: {
                    courseUnit: {
                        include: {
                            programVersion: {
                                include: { institution: true },
                            },
                            block: true,
                        },
                    },
                    themes: true,
                },
                orderBy: [{ order: "asc" }, { title: "asc" }],
            });
            return records.map((item) =>
                row({
                    id: item.id,
                    primary: item.title,
                    secondary: [
                        item.code,
                        item.courseUnit.code,
                        item.courseUnit.title,
                    ]
                        .filter(Boolean)
                        .join(" · "),
                    details: [
                        item.courseUnit.programVersion.label,
                        item.courseUnit.block.title,
                        `Couverture : ${healthCourseUnitCoverageStatusLabels[item.coverageStatus ?? "STRUCTURE_ONLY"]}`,
                        item.themes.length
                            ? `Thèmes : ${item.themes.map((theme) => theme.shortTitle ?? theme.title).join(", ")}`
                            : "Aucun thème",
                        `Ordre : ${item.order}`,
                    ].filter(Boolean),
                    isActive: item.isActive,
                    isPublished: item.isPublished,
                    updatedAt: item.updatedAt,
                })
            );
        }
    }
}

export type HealthProgramVersionPathwaySummary = {
    id: string;
    name: string;
    slug: string;
    campus: string | null;
    parcoursupCode: string | null;
    description: string | null;
    order: number;
    isDefault: boolean;
    isActive: boolean;
    isPublished: boolean;
    blockCount: number;
    courseUnitCount: number;
};

export type HealthProgramVersionCourseUnitSummary = {
    id: string;
    title: string;
    shortTitle: string | null;
    code: string | null;
    slug: string;
    description: string | null;
    semester: number | null;
    ects: number | null;
    order: number;
    isCommonToAllPathways: boolean;
    isHealthAccessRelevant: boolean;
    coverageStatus: keyof typeof healthCourseUnitCoverageStatusLabels;
    sourceLabel: string | null;
    sourceUrl: string | null;
    sourceCheckedAt: string | null;
    pathwayName: string | null;
    pathwaySlug: string | null;
    themes: { id: string; title: string; shortTitle: string | null }[];
    teachingElements: {
        id: string;
        title: string;
        shortTitle: string | null;
        code: string | null;
        slug: string;
        order: number;
        isActive: boolean;
        isPublished: boolean;
    }[];
};

export type HealthCourseUnitTeachingElementSummary = {
    id: string;
    title: string;
    shortTitle: string | null;
    code: string | null;
    slug: string;
    description: string | null;
    order: number;
    coverageStatus: keyof typeof healthCourseUnitCoverageStatusLabels;
    sourceLabel: string | null;
    sourceUrl: string | null;
    sourceCheckedAt: string | null;
    isActive: boolean;
    isPublished: boolean;
    themes: { id: string; title: string; shortTitle: string | null }[];
};

export type HealthTeachingElementChapterAssignmentSummary = {
    id: string;
    chapterId: string;
    chapterTitle: string;
    chapterShortTitle: string | null;
    chapterSlug: string;
    chapterVertical: string;
    chapterIsActive: boolean;
    chapterIsPublished: boolean;
    subjectTitle: string;
    titleOverride: string | null;
    shortTitleOverride: string | null;
    displayGroupKey: string | null;
    displayGroupLabel: string | null;
    displayGroupOrder: number | null;
    order: number;
    coverageStatus: keyof typeof healthCourseUnitCoverageStatusLabels;
    sourceLabel: string | null;
    sourceUrl: string | null;
    sourceCheckedAt: string | null;
    isActive: boolean;
    isPublished: boolean;
    questionCount: number;
    updatedAt: string;
};

export type HealthProgramVersionBlockSummary = {
    id: string;
    title: string;
    slug: string;
    type: string;
    description: string | null;
    ects: number | null;
    order: number;
    isActive: boolean;
    isPublished: boolean;
    pathwayName: string | null;
    courseUnits: HealthProgramVersionCourseUnitSummary[];
};

export async function fetchHealthRecord(entity: HealthEntity, id: string): Promise<HealthRecord | null> {
    if (!/^[a-f0-9]{24}$/i.test(id)) return null;

    switch (entity) {
        case "institutions":
            return prisma.healthInstitution.findUnique({ where: { id } });
        case "programs":
            return prisma.healthProgram.findUnique({ where: { id } });
        case "program-versions": {
            const item = await prisma.healthProgramVersion.findUnique({ where: { id } });
            return item
                ? { ...item, sourceCheckedAt: item.sourceCheckedAt?.toISOString().slice(0, 10) ?? "" }
                : null;
        }
        case "pathways":
            return prisma.healthPathway.findUnique({ where: { id } });
        case "blocks":
            return prisma.healthBlock.findUnique({ where: { id } });
        case "course-units":
            {
                const item = await prisma.healthCourseUnit.findUnique({ where: { id } });
                return item
                    ? {
                          ...item,
                          sourceCheckedAt: item.sourceCheckedAt?.toISOString().slice(0, 10) ?? "",
                      }
                    : null;
            }
        case "teaching-elements": {
            const item = await prisma.healthTeachingElement.findUnique({ where: { id } });
            return item
                ? {
                      ...item,
                      sourceCheckedAt: item.sourceCheckedAt?.toISOString().slice(0, 10) ?? "",
                  }
                : null;
        }
    }
}

export async function fetchHealthProgramVersionPathways(
    programVersionId: string,
): Promise<HealthProgramVersionPathwaySummary[]> {
    const records = await prisma.healthPathway.findMany({
        where: { programVersionId },
        include: { _count: { select: { blocks: true, courseUnits: true } } },
        orderBy: [{ order: "asc" }, { name: "asc" }],
    });

    return records.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        campus: item.campus ?? null,
        parcoursupCode: item.parcoursupCode ?? null,
        description: item.description ?? null,
        order: item.order,
        isDefault: item.isDefault,
        isActive: item.isActive,
        isPublished: item.isPublished,
        blockCount: item._count.blocks,
        courseUnitCount: item._count.courseUnits,
    }));
}

export async function fetchHealthProgramVersionBlocks(
    programVersionId: string,
): Promise<HealthProgramVersionBlockSummary[]> {
    const records = await prisma.healthBlock.findMany({
        where: { programVersionId, type: "HEALTH" },
        include: {
            pathway: true,
            courseUnits: {
                include: {
                    pathway: true,
                    themes: true,
                    teachingElements: {
                        orderBy: [{ order: "asc" }, { title: "asc" }],
                    },
                },
                orderBy: [{ order: "asc" }, { title: "asc" }],
            },
        },
        orderBy: [{ order: "asc" }, { title: "asc" }],
    });

    return records.map((item) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        type: item.type,
        description: item.description ?? null,
        ects: item.ects ?? null,
        order: item.order,
        isActive: item.isActive,
        isPublished: item.isPublished,
        pathwayName: item.pathway?.name ?? null,
        courseUnits: item.courseUnits.map((courseUnit) => ({
            id: courseUnit.id,
            title: courseUnit.title,
            shortTitle: courseUnit.shortTitle ?? null,
            code: courseUnit.code ?? null,
            slug: courseUnit.slug,
            description: courseUnit.description ?? null,
            semester: courseUnit.semester ?? null,
            ects: courseUnit.ects ?? null,
            order: courseUnit.order,
            isCommonToAllPathways: courseUnit.isCommonToAllPathways,
            isHealthAccessRelevant: courseUnit.isHealthAccessRelevant,
            coverageStatus: courseUnit.coverageStatus ?? "STRUCTURE_ONLY",
            sourceLabel: courseUnit.sourceLabel ?? null,
            sourceUrl: courseUnit.sourceUrl ?? null,
            sourceCheckedAt: courseUnit.sourceCheckedAt?.toISOString().slice(0, 10) ?? null,
            pathwayName: courseUnit.pathway?.name ?? null,
            pathwaySlug: courseUnit.pathway?.slug ?? null,
            themes: courseUnit.themes.map((theme) => ({
                id: theme.id,
                title: theme.title,
                shortTitle: theme.shortTitle ?? null,
            })),
            teachingElements: courseUnit.teachingElements.map((teachingElement) => ({
                id: teachingElement.id,
                title: teachingElement.title,
                shortTitle: teachingElement.shortTitle ?? null,
                code: teachingElement.code ?? null,
                slug: teachingElement.slug,
                order: teachingElement.order,
                isActive: teachingElement.isActive,
                isPublished: teachingElement.isPublished,
            })),
        })),
    }));
}

export async function fetchHealthCourseUnitTeachingElements(
    courseUnitId: string,
): Promise<HealthCourseUnitTeachingElementSummary[]> {
    if (!/^[a-f0-9]{24}$/i.test(courseUnitId)) return [];

    const records = await prisma.healthTeachingElement.findMany({
        where: { courseUnitId },
        include: { themes: true },
        orderBy: [{ order: "asc" }, { title: "asc" }],
    });

    return records.map((item) => ({
        id: item.id,
        title: item.title,
        shortTitle: item.shortTitle ?? null,
        code: item.code ?? null,
        slug: item.slug,
        description: item.description ?? null,
        order: item.order,
        coverageStatus: item.coverageStatus ?? "STRUCTURE_ONLY",
        sourceLabel: item.sourceLabel ?? null,
        sourceUrl: item.sourceUrl ?? null,
        sourceCheckedAt: item.sourceCheckedAt?.toISOString().slice(0, 10) ?? null,
        isActive: item.isActive,
        isPublished: item.isPublished,
        themes: item.themes.map((theme) => ({
            id: theme.id,
            title: theme.title,
            shortTitle: theme.shortTitle ?? null,
        })),
    }));
}

export async function fetchHealthTeachingElementChapterAssignments(
    teachingElementId: string,
): Promise<HealthTeachingElementChapterAssignmentSummary[]> {
    if (!/^[a-f0-9]{24}$/i.test(teachingElementId)) return [];

    const records = await prisma.chapterAssignment.findMany({
        where: {
            contextType: "HEALTH_TEACHING_ELEMENT",
            contextId: teachingElementId,
        },
        include: {
            chapter: {
                select: {
                    id: true,
                    title: true,
                    shortTitle: true,
                    slug: true,
                    vertical: true,
                    isActive: true,
                    isPublished: true,
                    subject: {
                        select: {
                            longDescription: true,
                            shortDescription: true,
                        },
                    },
                    _count: {
                        select: {
                            quizQuestions: true,
                        },
                    },
                },
            },
        },
        orderBy: [{ displayGroupOrder: "asc" }, { order: "asc" }, { updatedAt: "desc" }],
    });

    return records.map((item) => ({
        id: item.id,
        chapterId: item.chapter.id,
        chapterTitle: item.chapter.title,
        chapterShortTitle: item.chapter.shortTitle ?? null,
        chapterSlug: item.chapter.slug,
        chapterVertical: item.chapter.vertical,
        chapterIsActive: item.chapter.isActive,
        chapterIsPublished: item.chapter.isPublished,
        subjectTitle: item.chapter.subject.longDescription ?? item.chapter.subject.shortDescription,
        titleOverride: item.titleOverride ?? null,
        shortTitleOverride: item.shortTitleOverride ?? null,
        displayGroupKey: item.displayGroupKey ?? null,
        displayGroupLabel: item.displayGroupLabel ?? null,
        displayGroupOrder: item.displayGroupOrder ?? null,
        order: item.order,
        coverageStatus: item.coverageStatus ?? "STRUCTURE_ONLY",
        sourceLabel: item.sourceLabel ?? null,
        sourceUrl: item.sourceUrl ?? null,
        sourceCheckedAt: item.sourceCheckedAt?.toISOString().slice(0, 10) ?? null,
        isActive: item.isActive,
        isPublished: item.isPublished,
        questionCount: item.chapter._count.quizQuestions,
        updatedAt: item.updatedAt.toISOString(),
    }));
}

export async function fetchHealthFormOptions(): Promise<HealthFormOptions> {
    const [institutions, programs, versions, pathways, blocks, courseUnits, themes] = await Promise.all([
        prisma.healthInstitution.findMany({ orderBy: { name: "asc" } }),
        prisma.healthProgram.findMany({ orderBy: { label: "asc" } }),
        prisma.healthProgramVersion.findMany({
            include: { institution: true, program: true },
            orderBy: [{ academicYear: "desc" }, { label: "asc" }],
        }),
        prisma.healthPathway.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] }),
        prisma.healthBlock.findMany({ orderBy: [{ order: "asc" }, { title: "asc" }] }),
        prisma.healthCourseUnit.findMany({
            include: {
                programVersion: {
                    include: {
                        institution: true,
                    },
                },
                block: true,
            },
            orderBy: [{ order: "asc" }, { title: "asc" }],
        }),
        prisma.theme.findMany({ orderBy: { title: "asc" } }),
    ]);

    return {
        institutions: institutions.map((item) => ({ value: item.id, label: item.name })),
        programs: programs.map((item) => ({ value: item.id, label: `${item.code} - ${item.label}` })),
        programVersions: versions.map((item) => ({
            value: item.id,
            label: `${item.institution.shortName ?? item.institution.name} - ${item.label} (${item.program.code})`,
        })),
        pathways: pathways.map((item) => ({
            value: item.id,
            label: item.name,
            programVersionId: item.programVersionId,
        })),
        blocks: blocks.map((item) => ({
            value: item.id,
            label: `${item.title} (${item.type})`,
            programVersionId: item.programVersionId,
            pathwayId: item.pathwayId ?? undefined,
        })),
        courseUnits: courseUnits.map((item) => ({
            value: item.id,
            label: [
                item.programVersion.institution.shortName ?? item.programVersion.institution.name,
                item.programVersion.label,
                item.block.title,
                item.code ?? "UE",
                item.title,
            ].join(" — "),
            programVersionId: item.programVersionId,
            pathwayId: item.pathwayId ?? undefined,
            blockId: item.blockId,
        })),
        themes: themes.map((item) => ({ value: item.id, label: item.shortTitle ?? item.title })),
    };
}

export const getHealthEntityConfig = (entity: HealthEntity) => ({
    entity,
    ...healthEntityLabels[entity],
});
