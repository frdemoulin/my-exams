"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteGrade = async (id: string) => {
    try {
        await prisma.grade.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting grade: ', error);

        throw error;
    }

    revalidatePath("/admin/grades");
    redirect("/admin/grades");
}
