"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/auth";
import prisma from "@/lib/db/prisma";
import { setToastCookie } from "@/lib/toast";
import {
    HealthBlockSchema,
    HealthCourseUnitSchema,
    HealthEntity,
    HealthInstitutionSchema,
    HealthPathwaySchema,
    HealthProgramSchema,
    HealthProgramVersionSchema,
    healthEntityLabels,
} from "./health.schemas";

const text = (formData: FormData, key: string) => String(formData.get(key) ?? "").trim();
const optional = (formData: FormData, key: string) => text(formData, key) || undefined;
const bool = (formData: FormData, key: string, fallback = false) => {
    const values = formData.getAll(key);
    return values.length === 0 ? fallback : values.some((value) => value === "true");
};
const optionalInt = (formData: FormData, key: string) => {
    const value = text(formData, key);
    return value ? Number(value) : undefined;
};
const parseDate = (formData: FormData, key: string) => {
    const value = text(formData, key);
    return value ? new Date(`${value}T12:00:00.000Z`) : undefined;
};
const strings = (formData: FormData, key: string) =>
    Array.from(new Set(formData.getAll(key).map(String).map((value) => value.trim()).filter(Boolean)));

const assertAdmin = async () => {
    const session = await auth();
    if ((session?.user as { role?: string } | undefined)?.role !== "ADMIN") {
        throw new Error("Accès administrateur requis.");
    }
};

const parseInput = (entity: HealthEntity, formData: FormData) => {
    switch (entity) {
        case "institutions":
            return HealthInstitutionSchema.parse({
                name: text(formData, "name"),
                shortName: optional(formData, "shortName"),
                slug: text(formData, "slug"),
                uaiCode: optional(formData, "uaiCode"),
                city: optional(formData, "city"),
                academy: optional(formData, "academy"),
                region: optional(formData, "region"),
                department: optional(formData, "department"),
                websiteUrl: optional(formData, "websiteUrl"),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished", true),
            });
        case "programs":
            return HealthProgramSchema.parse({
                type: text(formData, "type"),
                code: text(formData, "code"),
                label: text(formData, "label"),
                description: optional(formData, "description"),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished", true),
            });
        case "program-versions":
            return HealthProgramVersionSchema.parse({
                institutionId: text(formData, "institutionId"),
                programId: text(formData, "programId"),
                label: text(formData, "label"),
                slug: text(formData, "slug"),
                academicYear: text(formData, "academicYear"),
                studyLevel: text(formData, "studyLevel"),
                sourceUrl: optional(formData, "sourceUrl"),
                sourceLabel: optional(formData, "sourceLabel"),
                sourceCheckedAt: parseDate(formData, "sourceCheckedAt"),
                notes: optional(formData, "notes"),
                isCurrent: bool(formData, "isCurrent"),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished"),
            });
        case "pathways":
            return HealthPathwaySchema.parse({
                programVersionId: text(formData, "programVersionId"),
                name: text(formData, "name"),
                slug: text(formData, "slug"),
                campus: optional(formData, "campus"),
                parcoursupCode: optional(formData, "parcoursupCode"),
                sourceUrl: optional(formData, "sourceUrl"),
                description: optional(formData, "description"),
                order: Number(text(formData, "order") || 0),
                isDefault: bool(formData, "isDefault"),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished"),
            });
        case "blocks":
            return HealthBlockSchema.parse({
                programVersionId: text(formData, "programVersionId"),
                pathwayId: optional(formData, "pathwayId"),
                type: text(formData, "type"),
                title: text(formData, "title"),
                slug: text(formData, "slug"),
                description: optional(formData, "description"),
                ects: optionalInt(formData, "ects"),
                order: Number(text(formData, "order") || 0),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished"),
            });
        case "course-units":
            return HealthCourseUnitSchema.parse({
                programVersionId: text(formData, "programVersionId"),
                pathwayId: optional(formData, "pathwayId"),
                blockId: text(formData, "blockId"),
                code: optional(formData, "code"),
                title: text(formData, "title"),
                shortTitle: optional(formData, "shortTitle"),
                slug: text(formData, "slug"),
                description: optional(formData, "description"),
                semester: optionalInt(formData, "semester"),
                ects: optionalInt(formData, "ects"),
                order: Number(text(formData, "order") || 0),
                isCommonToAllPathways: bool(formData, "isCommonToAllPathways"),
                isHealthAccessRelevant: bool(formData, "isHealthAccessRelevant", true),
                themeIds: strings(formData, "themeIds"),
                isActive: bool(formData, "isActive", true),
                isPublished: bool(formData, "isPublished"),
            });
    }
};

const assertRelations = async (entity: HealthEntity, input: ReturnType<typeof parseInput>) => {
    if (entity === "blocks") {
        const block = input as Prisma.HealthBlockUncheckedCreateInput;
        if (block.pathwayId) {
            const pathway = await prisma.healthPathway.findUnique({ where: { id: block.pathwayId } });
            if (!pathway || pathway.programVersionId !== block.programVersionId) {
                throw new Error("Le parcours sélectionné n'appartient pas à cette maquette.");
            }
        }
    }

    if (entity === "course-units") {
        const unit = input as Prisma.HealthCourseUnitUncheckedCreateInput;
        const [block, pathway, themeCount] = await Promise.all([
            prisma.healthBlock.findUnique({ where: { id: unit.blockId } }),
            unit.pathwayId ? prisma.healthPathway.findUnique({ where: { id: unit.pathwayId } }) : null,
            prisma.theme.count({ where: { id: { in: unit.themeIds as string[] } } }),
        ]);
        if (!block || block.programVersionId !== unit.programVersionId) {
            throw new Error("Le bloc sélectionné n'appartient pas à cette maquette.");
        }
        if (block.pathwayId && block.pathwayId !== unit.pathwayId) {
            throw new Error("Une UE rattachée à un bloc de parcours doit utiliser ce même parcours.");
        }
        if (unit.pathwayId && (!pathway || pathway.programVersionId !== unit.programVersionId)) {
            throw new Error("Le parcours sélectionné n'appartient pas à cette maquette.");
        }
        if (themeCount !== (unit.themeIds as string[]).length) {
            throw new Error("Un ou plusieurs thèmes sélectionnés n'existent plus.");
        }
    }
};

const setCurrentVersion = async (input: Prisma.HealthProgramVersionUncheckedCreateInput, savedId: string) => {
    if (!input.isCurrent) return;
    await prisma.healthProgramVersion.updateMany({
        where: {
            institutionId: input.institutionId,
            programId: input.programId,
            studyLevel: input.studyLevel,
            id: { not: savedId },
        },
        data: { isCurrent: false },
    });
};

const setDefaultPathway = async (input: Prisma.HealthPathwayUncheckedCreateInput, savedId: string) => {
    if (!input.isDefault) return;
    await prisma.healthPathway.updateMany({
        where: {
            programVersionId: input.programVersionId,
            id: { not: savedId },
        },
        data: { isDefault: false },
    });
};

const write = async (entity: HealthEntity, input: ReturnType<typeof parseInput>, id?: string) => {
    await assertRelations(entity, input);
    switch (entity) {
        case "institutions":
            return id
                ? prisma.healthInstitution.update({ where: { id }, data: input as Prisma.HealthInstitutionUpdateInput })
                : prisma.healthInstitution.create({ data: input as Prisma.HealthInstitutionCreateInput });
        case "programs":
            return id
                ? prisma.healthProgram.update({ where: { id }, data: input as Prisma.HealthProgramUpdateInput })
                : prisma.healthProgram.create({ data: input as Prisma.HealthProgramCreateInput });
        case "program-versions": {
            const data = input as Prisma.HealthProgramVersionUncheckedCreateInput;
            const version = await (id
                ? prisma.healthProgramVersion.update({ where: { id }, data })
                : prisma.healthProgramVersion.create({ data }));
            await setCurrentVersion(data, version.id);
            return version;
        }
        case "pathways": {
            const data = input as Prisma.HealthPathwayUncheckedCreateInput;
            const pathway = await (id
                ? prisma.healthPathway.update({ where: { id }, data })
                : prisma.healthPathway.create({ data }));
            await setDefaultPathway(data, pathway.id);
            return pathway;
        }
        case "blocks":
            return id
                ? prisma.healthBlock.update({ where: { id }, data: input as Prisma.HealthBlockUncheckedUpdateInput })
                : prisma.healthBlock.create({ data: input as Prisma.HealthBlockUncheckedCreateInput });
        case "course-units": {
            const {
                programVersionId,
                pathwayId,
                blockId,
                themeIds,
                ...scalars
            } = input as Prisma.HealthCourseUnitUncheckedCreateInput;
            const themes = { set: (themeIds as string[]).map((themeId) => ({ id: themeId })) };

            if (id) {
                return prisma.healthCourseUnit.update({
                    where: { id },
                    data: {
                        ...scalars,
                        programVersion: { connect: { id: programVersionId } },
                        pathway: pathwayId ? { connect: { id: pathwayId } } : { disconnect: true },
                        block: { connect: { id: blockId } },
                        themes,
                    },
                });
            }

            return prisma.healthCourseUnit.create({
                data: {
                    ...scalars,
                    programVersion: { connect: { id: programVersionId } },
                    ...(pathwayId ? { pathway: { connect: { id: pathwayId } } } : {}),
                    block: { connect: { id: blockId } },
                    themes: { connect: (themeIds as string[]).map((themeId) => ({ id: themeId })) },
                },
            });
        }
    }
};

export async function saveHealthEntity(entity: HealthEntity, formData: FormData, id?: string) {
    await assertAdmin();
    try {
        await write(entity, parseInput(entity, formData), id);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new Error(`Un ${healthEntityLabels[entity].singular} utilise déjà cette valeur unique.`);
        }
        throw error;
    }

    revalidatePath(`/admin/health/${entity}`);
    await setToastCookie(
        "success",
        `${healthEntityLabels[entity].singular} ${id ? "modifié" : "créé"} avec succès`
    );
    redirect(`/admin/health/${entity}`);
}

export async function deleteHealthEntity(entity: HealthEntity, id: string) {
    await assertAdmin();
    switch (entity) {
        case "institutions":
            await prisma.healthInstitution.delete({ where: { id } });
            break;
        case "programs":
            await prisma.healthProgram.delete({ where: { id } });
            break;
        case "program-versions":
            await prisma.healthProgramVersion.delete({ where: { id } });
            break;
        case "pathways":
            await prisma.healthPathway.delete({ where: { id } });
            break;
        case "blocks":
            await prisma.healthBlock.delete({ where: { id } });
            break;
        case "course-units":
            await prisma.healthCourseUnit.delete({ where: { id } });
            break;
    }
    revalidatePath(`/admin/health/${entity}`);
}
