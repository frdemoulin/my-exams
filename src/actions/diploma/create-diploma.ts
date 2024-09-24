"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createDiplomaSchema } from "@/lib/validation";
import { CreateDiplomaErrors } from "@/types/diploma";

export const createDiploma = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDiplomaSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create diploma in database
        await prisma.diploma.create({
            data: {
                longDescription,
                shortDescription
            }
        });
    } else {
        const errors: CreateDiplomaErrors = result.error.format();

        console.error('Error creating diploma: ', errors);

        throw errors;
    }

    // on redirige vers la liste des diplômes
    revalidatePath("/admin/diplomas");
    redirect("/admin/diplomas");
}
