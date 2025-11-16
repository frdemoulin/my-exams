"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { createDivisionSchema } from '@/lib/validation';

export const updateDivision = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createDivisionSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.division.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/divisions');
        } catch (error) {
            console.error('Error updating division: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/divisions');
    } else {
        const errors = result.error.format();
        console.error('Invalid division data: ', errors);
        throw errors;
    }
}