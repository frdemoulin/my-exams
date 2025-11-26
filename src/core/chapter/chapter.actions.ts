"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";

export const createChapter = async (values: any) => {
    // TODO: implement chapter creation
    throw new Error("Not implemented");
}

export const updateChapter = async (id: string | undefined, formData: FormData) => {
    // TODO: implement chapter update
    throw new Error("Not implemented");
}

export const deleteChapter = async (id: string) => {
    // TODO: implement chapter deletion
    throw new Error("Not implemented");
}
