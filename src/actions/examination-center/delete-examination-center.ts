"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteExaminationCenter = async (id: string) => {
    try {
        await prisma.examinationCenter.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting examination center: ', error);

        throw error;
    }

    revalidatePath("/admin/examination-centers");
    redirect("/admin/examination-centers");
}
