"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createDiplomaSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateDiplomaErrors } from "./diploma.types";

type DeleteDiplomaOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

export const createDiploma = async (formData: FormData) => {
    const longDescription = formData.get("longDescription") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const isActiveValue = formData.get("isActive");
    const isActive = isActiveValue == null ? true : isActiveValue === "true";

    const result = createDiplomaSchema.safeParse({
        longDescription,
        shortDescription,
        isActive,
    });

    if (result.success) {
        const { longDescription, shortDescription, isActive } = result.data;

        // create diploma in database
        try {
            await prisma.diploma.create({
                data: {
                    longDescription,
                    shortDescription,
                    isActive,
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un diplôme avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateDiplomaErrors = result.error.format();

        console.error('Error creating diploma: ', errors);

        throw errors;
    }

    // on redirige vers la liste des diplômes
    revalidatePath("/admin/diplomas");
    await setCrudSuccessToast("diploma", "created");
    redirect("/admin/diplomas");
}

export const updateDiploma = async (id: string | undefined, formData: FormData) => {
    const longDescription = formData.get("longDescription") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const isActiveValue = formData.get("isActive");
    const isActive = isActiveValue == null ? true : isActiveValue === "true";

    const result = createDiplomaSchema.safeParse({
        longDescription,
        shortDescription,
        isActive,
    });

    if (result.success) {
        const { longDescription, shortDescription, isActive } = result.data;

        try {
            await prisma.diploma.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription,
                    isActive,
                }
            });

            revalidatePath('/admin/diplomas');
        } catch (error) {
            console.error('Error updating diploma: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        await setCrudSuccessToast("diploma", "updated");
        redirect('/admin/diplomas');
    } else {
        const errors = result.error.format();
        console.error('Invalid diploma data: ', errors);
        throw errors;
    }
}

export const deleteDiploma = async (id: string, options?: DeleteDiplomaOptions) => {
    try {
        await prisma.diploma.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting diploma: ', error);

        throw error;
    }

    const paths = new Set(["/admin/diplomas", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("diploma", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/diplomas");
    }
}
