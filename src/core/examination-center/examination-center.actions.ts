"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createExaminationCenterSchema } from "@/lib/validation";
import { CreateExaminationCenterErrors } from "./examination-center.types";

export const createExaminationCenter = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createExaminationCenterSchema.safeParse(values);

    if (result.success) {
        const { description } = result.data;

        // create examination center in database
        try {
            await prisma.examinationCenter.create({
                data: {
                    description
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un centre d\'examen avec cette description existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateExaminationCenterErrors = result.error.format();

        console.error('Error creating examination center: ', errors);

        throw errors;
    }

    // on redirige vers la liste des centres d'examens
    revalidatePath("/admin/examination-centers");
    redirect("/admin/examination-centers");
}

export const updateExaminationCenter = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createExaminationCenterSchema.safeParse(values);

    if (result.success) {
        const { description } = result.data;

        try {
            await prisma.examinationCenter.update({
                where: {
                    id
                },
                data: {
                    description
                }
            });

            revalidatePath('/admin/examination-centers');
        } catch (error) {
            console.error('Error updating examination center: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/examination-centers');
    } else {
        const errors = result.error.format();
        console.error('Invalid examination center data: ', errors);
        throw errors;
    }
}

export const deleteExaminationCenter = async (id: string) => {
    try {
        await prisma.examinationCenter.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting examination center: ', error);

        throw error;
    }

    revalidatePath("/admin/examination-centers");
    redirect("/admin/examination-centers");
}
