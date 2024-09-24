"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteSubject = async (id: string) => {
    try {
        await prisma.subject.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting subject: ', error);

        throw error;
    }

    revalidatePath("/admin/subjects");
    redirect("/admin/subjects");
}
