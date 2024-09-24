"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteDivision = async (id: string) => {
    try {
        await prisma.division.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.log('Error deleting division: ', error);

        throw error;
    }

    revalidatePath("/admin/divisions");
    redirect("/admin/divisions");
}
