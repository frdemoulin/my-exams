"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createDiplomaSchema } from "@/lib/validation";
import { CreateDiplomaErrors } from "./diploma.types";

export const createDiploma = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDiplomaSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create diploma in database
        try {
            await prisma.diploma.create({
                data: {
                    longDescription,
                    shortDescription
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
    redirect("/admin/diplomas");
}

export const updateDiploma = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDiplomaSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.diploma.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/diplomas');
        } catch (error) {
            console.error('Error updating diploma: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/diplomas');
    } else {
        const errors = result.error.format();
        console.error('Invalid diploma data: ', errors);
        throw errors;
    }
}

export const deleteDiploma = async (id: string) => {
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

    revalidatePath("/admin/diplomas");
    redirect("/admin/diplomas");
}
