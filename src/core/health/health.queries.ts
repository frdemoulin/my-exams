import prisma from "@/lib/db/prisma";
import { HealthEntity, healthEntityLabels } from "./health.schemas";
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
    }
}

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
            return prisma.healthCourseUnit.findUnique({ where: { id } });
    }
}

export async function fetchHealthFormOptions(): Promise<HealthFormOptions> {
    const [institutions, programs, versions, pathways, blocks, themes] = await Promise.all([
        prisma.healthInstitution.findMany({ orderBy: { name: "asc" } }),
        prisma.healthProgram.findMany({ orderBy: { label: "asc" } }),
        prisma.healthProgramVersion.findMany({
            include: { institution: true, program: true },
            orderBy: [{ academicYear: "desc" }, { label: "asc" }],
        }),
        prisma.healthPathway.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] }),
        prisma.healthBlock.findMany({ orderBy: [{ order: "asc" }, { title: "asc" }] }),
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
        themes: themes.map((item) => ({ value: item.id, label: item.shortTitle ?? item.title })),
    };
}

export const getHealthEntityConfig = (entity: HealthEntity) => ({
    entity,
    ...healthEntityLabels[entity],
});
