"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createThemeSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateThemeErrors, CreateThemeValues } from "./theme.types";

export const createTheme = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    
    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, chapterId } = result.data;

        // create theme in database
        try {
            await prisma.theme.create({
                data: {
                    longDescription,
                    shortDescription,
                    chapterId
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

    revalidatePath("/admin/themes");
    await setCrudSuccessToast("theme", "created");
    redirect("/admin/themes");
}

export const updateTheme = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createThemeSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, chapterId } = result.data;

        try {
            await prisma.theme.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription,
                    chapterId
                }
            });

            revalidatePath('/admin/themes');
            await setCrudSuccessToast("theme", "updated");
            redirect('/admin/themes');
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

export const deleteTheme = async (id: string) => {
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

    revalidatePath("/admin/themes");
    await setCrudSuccessToast("theme", "deleted");
    redirect("/admin/themes");
}
