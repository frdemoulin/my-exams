"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createDomainSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateDomainErrors } from "./domain.types";

export const createDomain = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const parsedValues = {
        ...values,
        order: values.order ? parseInt(values.order as string, 10) : undefined,
        discipline: values.discipline || undefined,
    };

    const result = createDomainSchema.safeParse(parsedValues);

    if (result.success) {
        const { longDescription, shortDescription, subjectId, order, discipline } = result.data;

        try {
            await prisma.domain.create({
                data: {
                    longDescription,
                    shortDescription,
                    subjectId,
                    order: order ?? null,
                    discipline: discipline ?? null,
                },
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new Error('Un domaine avec ces descriptions existe déjà');
            }
            throw error;
        }
    } else {
        const errors: CreateDomainErrors = result.error.format();
        console.error('Error creating domain: ', errors);
        throw errors;
    }

    revalidatePath("/admin/domains");
    await setCrudSuccessToast("domain", "created");
    redirect("/admin/domains");
}

export const updateDomain = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const parsedValues = {
        ...values,
        order: values.order ? parseInt(values.order as string, 10) : undefined,
        discipline: values.discipline || undefined,
    };

    const result = createDomainSchema.safeParse(parsedValues);

    if (result.success) {
        const { longDescription, shortDescription, subjectId, order, discipline } = result.data;

        try {
            await prisma.domain.update({
                where: { id },
                data: {
                    longDescription,
                    shortDescription,
                    subjectId,
                    order: order ?? null,
                    discipline: discipline ?? null,
                },
            });

            revalidatePath('/admin/domains');
        } catch (error) {
            console.error('Error updating domain: ', error);
            throw error;
        }
        
        await setCrudSuccessToast("domain", "updated");
        redirect('/admin/domains');
    } else {
        const errors = result.error.format();
        console.error('Invalid domain data: ', errors);
        throw errors;
    }
}

export const deleteDomain = async (id: string) => {
    try {
        await prisma.domain.delete({
            where: { id },
        });
    } catch (error) {
        console.log('Error deleting domain: ', error);
        throw error;
    }

    revalidatePath("/admin/domains");
    await setCrudSuccessToast("domain", "deleted");
    redirect("/admin/domains");
}
