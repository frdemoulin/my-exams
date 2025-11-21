"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createGradeSchema } from "@/lib/validation";
import { CreateGradeErrors } from "./grade.types";

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
        redirect('/admin/grades');
    } else {
        const errors = result.error.format();
        console.error('Invalid grade data: ', errors);
        throw errors;
    }
}

export const deleteGrade = async (id: string) => {
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

    revalidatePath("/admin/grades");
    redirect("/admin/grades");
}
