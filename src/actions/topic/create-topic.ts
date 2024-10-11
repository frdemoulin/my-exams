"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import { createTopicSchema } from "@/lib/validation";
import { CreateTopicErrors } from "@/types/topic";

export const createTopic = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createTopicSchema.safeParse(values);

    if (result.success) {
        const { longDescription, shortDescription } = result.data;

        // create topic in database
        await prisma.topic.create({
            data: {
                longDescription,
                shortDescription
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
