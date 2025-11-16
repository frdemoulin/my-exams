"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { createDiplomaSchema } from '@/lib/validation';

export const updateDiploma = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDiplomaSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.diploma.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/diplomas');
        } catch (error) {
            console.error('Error updating diploma: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/diplomas');
    } else {
        const errors = result.error.format();
        console.error('Invalid diploma data: ', errors);
        throw errors;
    }
}