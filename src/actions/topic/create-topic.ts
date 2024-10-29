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
        await prisma.topic.create({
            data: {
                longDescription,
                shortDescription,
                subjects: {
                    connect: subjects.map((subject) => ({ id: subject.value }))
                }
            }
        });
    } else {
        const errors: CreateTopicErrors = result.error.format();

        console.error('Error creating topic: ', errors);

        throw errors;
    }

    // on redirige vers la liste des filières
    revalidatePath("/admin/topics");
    redirect("/admin/topics");
}
