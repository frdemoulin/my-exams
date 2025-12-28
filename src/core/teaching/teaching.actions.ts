"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { setCrudSuccessToast } from "@/lib/toast";
import { createTeachingSchema, CreateTeachingErrors } from "./teaching.types";

type DeleteTeachingOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

export const createTeaching = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createTeachingSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, gradeId, subjectId } = result.data;

        try {
            await prisma.teaching.create({
                data: {
                    longDescription,
                    shortDescription: shortDescription || null,
                    gradeId,
                    subjectId,
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un enseignement avec ce nom existe déjà pour ce niveau');
            }
            throw error;
        }
    } else {
        const errors: CreateTeachingErrors = result.error.flatten();
        console.error('Error creating teaching: ', errors);
        throw errors;
    }

    revalidatePath("/admin/teachings");
    await setCrudSuccessToast("teaching", "created");
    redirect("/admin/teachings");
}

export const updateTeaching = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createTeachingSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, gradeId, subjectId } = result.data;

        try {
            await prisma.teaching.update({
                where: { id },
                data: {
                    longDescription,
                    shortDescription: shortDescription || null,
                    gradeId,
                    subjectId,
                }
            });

            revalidatePath('/admin/teachings');
        } catch (error) {
            console.error('Error updating teaching: ', error);
            throw error;
        }
        
        await setCrudSuccessToast("teaching", "updated");
        redirect('/admin/teachings');
    } else {
        const errors = result.error.flatten();
        console.error('Invalid teaching data: ', errors);
        throw errors;
    }
}

export const deleteTeaching = async (id: string, options?: DeleteTeachingOptions) => {
    try {
        await prisma.teaching.delete({
            where: { id }
        });
    } catch (error) {
        console.log('Error deleting teaching: ', error);
        throw error;
    }

    const paths = new Set(["/admin/teachings", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("teaching", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/teachings");
    }
}
