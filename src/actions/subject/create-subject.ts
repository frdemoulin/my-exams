"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createSubjectSchema } from "@/lib/validation";
import { CreateSubjectErrors } from "@/types/subject";

export const createSubject = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createSubjectSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create subject in database
        try {
            await prisma.subject.create({
                data: {
                    longDescription,
                    shortDescription
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Une matière avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateSubjectErrors = result.error.format();

        console.error('Error creating subject: ', errors);

        throw errors;
    }

    // on redirige vers la liste des matières
    revalidatePath("/admin/subjects");
    redirect("/admin/subjects");
}
