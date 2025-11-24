"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createDivisionSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateDivisionErrors } from "./division.types";

export const createDivision = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDivisionSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create division in database
        try {
            await prisma.division.create({
                data: {
                    longDescription,
                    shortDescription
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Une filière avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateDivisionErrors = result.error.format();

        console.error('Error creating division: ', errors);

        throw errors;
    }

    // on redirige vers la liste des filières
    revalidatePath("/admin/divisions");
    await setCrudSuccessToast("division", "created");
    redirect("/admin/divisions");
}

export const updateDivision = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDivisionSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.division.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/divisions');
        } catch (error) {
            console.error('Error updating division: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        await setCrudSuccessToast("division", "updated");
        redirect('/admin/divisions');
    } else {
        const errors = result.error.format();
        console.error('Invalid division data: ', errors);
        throw errors;
    }
}

export const deleteDivision = async (id: string) => {
    try {
        await prisma.division.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting division: ', error);

        throw error;
    }

    revalidatePath("/admin/divisions");
    await setCrudSuccessToast("division", "deleted");
    redirect("/admin/divisions");
}
