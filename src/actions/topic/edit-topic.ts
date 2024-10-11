"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { createTopicSchema } from '@/lib/validation';

export const updateTopic = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createTopicSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        try {
            await prisma.topic.update({
                where: {
                    id
                },
                data: {
                    longDescription,
                    shortDescription
                }
            });

            revalidatePath('/admin/topics');
            redirect('/admin/topics');
        } catch (error) {
            console.error('Error updating topic: ', error);
            throw error;
        }
    } else {
        const errors = result.error.format();
        console.error('Invalid topic data: ', errors);
        throw errors;
    }
}