"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createGradeSchema } from "@/lib/validation";
import { CreateGradeErrors } from "@/types/grade";

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
