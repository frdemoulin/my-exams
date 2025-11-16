"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createDivisionSchema } from "@/lib/validation";
import { CreateDivisionErrors } from "@/types/division";

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
    redirect("/admin/divisions");
}
