"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createTopicSchema } from "@/lib/validation";
import { CreateTopicErrors, CreateTopicValues } from "./topic.types";

export const createTopic = async (values: CreateTopicValues) => {
    const result = createTopicSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription, subjects } = result.data;

        // create topic in database
        try {
            await prisma.topic.create({
                data: {
                    longDescription,
                    shortDescription,
                    subjects: {
                        connect: subjects.map((subject) => ({ id: subject.value }))
                    }
                }
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un thème avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateTopicErrors = result.error.format();

        console.error('Error creating topic: ', errors);

        throw errors;
    }

    // on redirige vers la liste des filières
    revalidatePath("/admin/topics");
    redirect("/admin/topics");
}

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
        } catch (error) {
            console.error('Error updating topic: ', error);
            throw error;
        }
        
        // redirect doit être en dehors du try/catch pour ne pas être intercepté comme une erreur
        redirect('/admin/topics');
    } else {
        const errors = result.error.format();
        console.error('Invalid topic data: ', errors);
        throw errors;
    }
}

export const deleteTopic = async (id: string) => {
    try {
        await prisma.topic.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting topic: ', error);

        throw error;
    }

    revalidatePath("/admin/topics");
    redirect("/admin/topics");
}
