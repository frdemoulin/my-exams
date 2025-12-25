"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createThemeSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateThemeErrors, CreateThemeValues } from "./theme.types";

type CreateThemeOptions = {
    redirectTo?: string;
    revalidatePaths?: string[];
};

export const createTheme = async (formData: FormData, options?: CreateThemeOptions) => {
    const values = Object.fromEntries(formData.entries());
    
    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, domainId } = result.data;

        // create theme in database
        try {
            await prisma.theme.create({
                data: {
                    longDescription,
                    shortDescription,
                    domainId
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un thème avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateThemeErrors = result.error.format();

        console.error('Error creating theme: ', errors);

        throw errors;
    }

    const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    await setCrudSuccessToast("theme", "created");
    redirect(options?.redirectTo ?? "/admin/themes");
}

type UpdateThemeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
};

export const updateTheme = async (
    id: string | undefined,
    formData: FormData,
    options?: UpdateThemeOptions
) => {
    const values = Object.fromEntries(formData.entries());

    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, domainId } = result.data;

        try {
            await prisma.theme.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription,
                    domainId
                }
            });

            const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
            paths.forEach((path) => revalidatePath(path));
            await setCrudSuccessToast("theme", "updated");
            if (options?.redirectTo !== null) {
                redirect(options?.redirectTo ?? "/admin/themes");
            }
        } catch (error) {
            console.error('Error updating theme: ', error);
            throw error;
        }
    } else {
        const errors = result.error.format();
        console.error('Invalid theme data: ', errors);
        throw errors;
    }
}

type DeleteThemeOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
};

export const deleteTheme = async (id: string, options?: DeleteThemeOptions) => {
    try {
        await prisma.theme.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting theme: ', error);

        throw error;
    }

    const paths = new Set(["/admin/themes", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    await setCrudSuccessToast("theme", "deleted");
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/themes");
    }
}
