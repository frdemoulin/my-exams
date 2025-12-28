"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";

import prisma from "@/lib/db/prisma";
import { setCrudSuccessToast } from "@/lib/toast";
import { createCurriculumSchema, CreateCurriculumErrors } from "./curriculum.types";

export async function createCurriculum(
    _prevState: CreateCurriculumErrors,
    formData: FormData
): Promise<CreateCurriculumErrors> {
    try {
        // Parse form data
        const longDescription = formData.get("longDescription") as string;
        const shortDescription = formData.get("shortDescription") as string;
        const startDateStr = formData.get("startDate") as string;
        const endDateStr = formData.get("endDate") as string;
        const isActive = formData.get("isActive") === "true";
        
        // Parse dates
        const startDate = startDateStr ? new Date(startDateStr) : undefined;
        const endDate = endDateStr ? new Date(endDateStr) : undefined;
        
        // Parse teachingIds (can be multiple)
        const teachingIds: string[] = [];
        formData.forEach((value, key) => {
            if (key === "teachingIds") {
                teachingIds.push(value as string);
            }
        });

        // Validate with Zod
        const validatedData = createCurriculumSchema.parse({
            longDescription,
            shortDescription,
            startDate,
            endDate,
            teachingIds,
            isActive,
        });

        // Create curriculum
        await prisma.curriculum.create({
            data: {
                longDescription: validatedData.longDescription,
                shortDescription: validatedData.shortDescription,
                startDate: validatedData.startDate,
                endDate: validatedData.endDate,
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

    await setCrudSuccessToast("curriculum", "created");
    redirect("/admin/curriculums");
}

export async function updateCurriculum(
    _prevState: CreateCurriculumErrors,
    formData: FormData
): Promise<CreateCurriculumErrors> {
    try {
        const id = formData.get("id") as string;
        const longDescription = formData.get("longDescription") as string;
        const shortDescription = formData.get("shortDescription") as string;
        const startDateStr = formData.get("startDate") as string;
        const endDateStr = formData.get("endDate") as string;
        const isActive = formData.get("isActive") === "true";

        // Parse dates
        const startDate = startDateStr ? new Date(startDateStr) : undefined;
        const endDate = endDateStr ? new Date(endDateStr) : undefined;

        // Parse teachingIds
        const teachingIds: string[] = [];
        formData.forEach((value, key) => {
            if (key === "teachingIds") {
                teachingIds.push(value as string);
            }
        });

        // Validate
        const validatedData = createCurriculumSchema.parse({
            longDescription,
            shortDescription,
            startDate,
            endDate,
            teachingIds,
            isActive,
        });

        // Update curriculum
        await prisma.curriculum.update({
            where: { id },
            data: {
                longDescription: validatedData.longDescription,
                shortDescription: validatedData.shortDescription,
                startDate: validatedData.startDate,
                endDate: validatedData.endDate,
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

    await setCrudSuccessToast("curriculum", "updated");
    redirect("/admin/curriculums");
}

type DeleteCurriculumOptions = {
    skipSuccessToast?: boolean;
    revalidatePaths?: string[];
};

export async function deleteCurriculum(
    id: string,
    options?: DeleteCurriculumOptions
): Promise<void> {
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

        if (!options?.skipSuccessToast) {
            await setCrudSuccessToast("curriculum", "deleted");
        }
        const paths = new Set(["/admin/curriculums", ...(options?.revalidatePaths ?? [])]);
        paths.forEach((path) => revalidatePath(path));
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Une erreur est survenue lors de la suppression");
    }
}
