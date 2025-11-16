"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createTopicSchema } from "@/lib/validation";
import { CreateTopicErrors, CreateTopicValues } from "@/types/topic";

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
