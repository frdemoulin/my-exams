"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createExaminationCenterSchema } from "@/lib/validation";
import { CreateExaminationCenterErrors } from "@/types/examination-center";

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
