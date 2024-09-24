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
        await prisma.grade.create({
            data: {
                longDescription,
                shortDescription
            }
        });
    } else {
        const errors: CreateGradeErrors = result.error.format();

        console.error('Error creating grade: ', errors);

        throw errors;
    }

    // on redirige vers la liste des niveaux scolaires
    revalidatePath("/admin/grades");
    redirect("/admin/grades");
}
