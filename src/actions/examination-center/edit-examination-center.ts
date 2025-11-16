"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { createExaminationCenterSchema } from '@/lib/validation';

export const updateExaminationCenter = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createExaminationCenterSchema.safeParse(values);

    if (result.success) {
        const { description } = result.data;

        try {
            await prisma.examinationCenter.update({
                where: {
                    id
                },
                data: {
                    description
                }
            });

            revalidatePath('/admin/examination-centers');
        } catch (error) {
            console.error('Error updating examination center: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/examination-centers');
    } else {
        const errors = result.error.format();
        console.error('Invalid examination center data: ', errors);
        throw errors;
    }
}