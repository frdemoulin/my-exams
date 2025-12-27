"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createSubjectSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateSubjectErrors } from "./subject.types";

export const createSubject = async (formData: FormData) => {
    const longDescription = formData.get("longDescription") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const isActiveValue = formData.get("isActive");
    const isActive = isActiveValue == null ? true : isActiveValue === "true";

    const result = createSubjectSchema.safeParse({
        longDescription,
        shortDescription,
        isActive,
    });

    if (result.success) {
        const { longDescription, shortDescription, isActive } = result.data;

        // create subject in database
        try {
            await prisma.subject.create({
                data: {
                    longDescription,
                    shortDescription,
                    isActive,
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
    await setCrudSuccessToast("subject", "created");
    redirect("/admin/subjects");
}

export const updateSubject = async (id: string | undefined, formData: FormData) => {
    const longDescription = formData.get("longDescription") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const isActiveValue = formData.get("isActive");
    const isActive = isActiveValue == null ? true : isActiveValue === "true";

    const result = createSubjectSchema.safeParse({
        longDescription,
        shortDescription,
        isActive,
    });

    if (result.success) {
        const { longDescription, shortDescription, isActive } = result.data;

        try {
            await prisma.subject.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription,
                    isActive,
                }
            });

            revalidatePath('/admin/subjects');
        } catch (error) {
            console.error('Error updating subject: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        await setCrudSuccessToast("subject", "updated");
        redirect('/admin/subjects');
    } else {
        const errors = result.error.format();
        console.error('Invalid subject data: ', errors);
        throw errors;
    }
}

export const deleteSubject = async (id: string) => {
    try {
        await prisma.subject.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting subject: ', error);

        throw error;
    }

    revalidatePath("/admin/subjects");
    await setCrudSuccessToast("subject", "deleted");
    redirect("/admin/subjects");
}
