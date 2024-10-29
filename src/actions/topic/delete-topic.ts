"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
