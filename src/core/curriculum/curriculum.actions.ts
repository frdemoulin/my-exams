"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";

import prisma from "@/lib/db/prisma";
import { createCurriculumSchema, CreateCurriculumErrors } from "./curriculum.types";

export async function createCurriculum(
    _prevState: CreateCurriculumErrors,
    formData: FormData
): Promise<CreateCurriculumErrors> {
    try {
        // Parse form data
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const startYear = parseInt(formData.get("startYear") as string);
        const endYear = formData.get("endYear") ? parseInt(formData.get("endYear") as string) : undefined;
        const startMonth = formData.get("startMonth") ? parseInt(formData.get("startMonth") as string) : undefined;
        const endMonth = formData.get("endMonth") ? parseInt(formData.get("endMonth") as string) : undefined;
        const isActive = formData.get("isActive") === "true";
        
        // Parse teachingIds (can be multiple)
        const teachingIds: string[] = [];
        formData.forEach((value, key) => {
            if (key === "teachingIds") {
                teachingIds.push(value as string);
            }
        });

        // Validate with Zod
        const validatedData = createCurriculumSchema.parse({
            name,
            description,
            startYear,
            endYear,
            startMonth,
            endMonth,
            teachingIds,
            isActive,
        });

        // Create curriculum
        await prisma.curriculum.create({
            data: {
                name: validatedData.name,
                description: validatedData.description,
                startYear: validatedData.startYear,
                endYear: validatedData.endYear,
                startMonth: validatedData.startMonth,
                endMonth: validatedData.endMonth,
                teachingIds: validatedData.teachingIds,
                isActive: validatedData.isActive,
            },
        });

        revalidatePath("/admin/curriculums");
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                const zodError = error as unknown as {
                    errors: Array<{ path: string[]; message: string }>;
                };
                return zodError.errors.reduce(
                    (acc, curr) => {
                        const key = curr.path[0] as keyof CreateCurriculumErrors;
                        if (!acc[key]) {
                            acc[key] = [];
                        }
                        acc[key]?.push(curr.message);
                        return acc;
                    },
                    {} as CreateCurriculumErrors
                );
            }

            return {
                _form: [error.message || "Une erreur est survenue"],
            };
        }

        return {
            _form: ["Une erreur inconnue est survenue"],
        };
    }

    redirect("/admin/curriculums");
}

export async function updateCurriculum(
    _prevState: CreateCurriculumErrors,
    formData: FormData
): Promise<CreateCurriculumErrors> {
    try {
        const id = formData.get("id") as string;
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const startYear = parseInt(formData.get("startYear") as string);
        const endYear = formData.get("endYear") ? parseInt(formData.get("endYear") as string) : undefined;
        const startMonth = formData.get("startMonth") ? parseInt(formData.get("startMonth") as string) : undefined;
        const endMonth = formData.get("endMonth") ? parseInt(formData.get("endMonth") as string) : undefined;
        const isActive = formData.get("isActive") === "true";

        // Parse teachingIds
        const teachingIds: string[] = [];
        formData.forEach((value, key) => {
            if (key === "teachingIds") {
                teachingIds.push(value as string);
            }
        });

        // Validate
        const validatedData = createCurriculumSchema.parse({
            name,
            description,
            startYear,
            endYear,
            startMonth,
            endMonth,
            teachingIds,
            isActive,
        });

        // Update curriculum
        await prisma.curriculum.update({
            where: { id },
            data: {
                name: validatedData.name,
                description: validatedData.description,
                startYear: validatedData.startYear,
                endYear: validatedData.endYear,
                startMonth: validatedData.startMonth,
                endMonth: validatedData.endMonth,
                teachingIds: validatedData.teachingIds,
                isActive: validatedData.isActive,
            },
        });

        revalidatePath("/admin/curriculums");
        revalidatePath(`/admin/curriculums/${id}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                const zodError = error as unknown as {
                    errors: Array<{ path: string[]; message: string }>;
                };
                return zodError.errors.reduce(
                    (acc, curr) => {
                        const key = curr.path[0] as keyof CreateCurriculumErrors;
                        if (!acc[key]) {
                            acc[key] = [];
                        }
                        acc[key]?.push(curr.message);
                        return acc;
                    },
                    {} as CreateCurriculumErrors
                );
            }

            return {
                _form: [error.message || "Une erreur est survenue"],
            };
        }

        return {
            _form: ["Une erreur inconnue est survenue"],
        };
    }

    redirect("/admin/curriculums");
}

export async function deleteCurriculum(id: string): Promise<void> {
    try {
        // Check if curriculum is used by exam papers
        const examPaperCount = await prisma.examPaper.count({
            where: { curriculumId: id },
        });

        if (examPaperCount > 0) {
            throw new Error(
                `Impossible de supprimer ce programme : ${examPaperCount} sujets d'annales y sont liés`
            );
        }

        await prisma.curriculum.delete({
            where: { id },
        });

        revalidatePath("/admin/curriculums");
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Une erreur est survenue lors de la suppression");
    }
}
