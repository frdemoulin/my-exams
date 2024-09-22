"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteDiploma = async (id: string) => {
    try {
        await prisma.diploma.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting diploma: ', error);

        throw error;
    }

    revalidatePath("/admin/diplomas");
    redirect("/admin/diplomas");
}
