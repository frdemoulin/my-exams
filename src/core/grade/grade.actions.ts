"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createGradeSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateGradeErrors } from "./grade.types";

type DeleteGradeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

export const createGrade = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createGradeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create grade in database
        try {
            await prisma.grade.create({
                data: {
                    longDescription,
                    shortDescription
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un niveau avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateGradeErrors = result.error.format();

        console.error('Error creating grade: ', errors);

        throw errors;
    }

    // on redirige vers la liste des niveaux scolaires
    revalidatePath("/admin/grades");
    await setCrudSuccessToast("grade", "created");
    redirect("/admin/grades");
}

export const updateGrade = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createGradeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.grade.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/grades');
        } catch (error) {
            console.error('Error updating grade: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        await setCrudSuccessToast("grade", "updated");
        redirect('/admin/grades');
    } else {
        const errors = result.error.format();
        console.error('Invalid grade data: ', errors);
        throw errors;
    }
}

export const deleteGrade = async (id: string, options?: DeleteGradeOptions) => {
    try {
        await prisma.grade.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting grade: ', error);

        throw error;
    }

    const paths = new Set(["/admin/grades", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("grade", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/grades");
    }
}
