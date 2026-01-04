"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createCorrectionSourceSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateCorrectionSourceErrors } from "./correction-source.types";

type DeleteCorrectionSourceOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

export const createCorrectionSource = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const isActiveValue = values.isActive;
    const isActive =
        typeof isActiveValue === "boolean"
            ? isActiveValue
            : isActiveValue == null
                ? true
                : String(isActiveValue) === "true";

    const result = createCorrectionSourceSchema.safeParse({
        ...values,
        isActive,
    });

    if (result.success) {
        const { label, isActive } = result.data;

        try {
            await prisma.correctionSource.create({
                data: {
                    label,
                    isActive,
                },
            });
        } catch (error: any) {
            if (error.code === "P2002") {
                throw new Error("Une source de correction avec ce label existe déjà");
            }
            throw error;
        }
    } else {
        const errors: CreateCorrectionSourceErrors = result.error.format();
        console.error("Error creating correction source: ", errors);
        throw errors;
    }

    revalidatePath("/admin/correction-sources");
    await setCrudSuccessToast("correctionSource", "created");
    redirect("/admin/correction-sources");
};

export const updateCorrectionSource = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());
    const isActiveValue = values.isActive;
    const isActive =
        typeof isActiveValue === "boolean"
            ? isActiveValue
            : isActiveValue == null
                ? true
                : String(isActiveValue) === "true";

    const result = createCorrectionSourceSchema.safeParse({
        ...values,
        isActive,
    });

    if (result.success) {
        const { label, isActive } = result.data;

        try {
            await prisma.correctionSource.update({
                where: {
                    id,
                },
                data: {
                    label,
                    isActive,
                },
            });

            revalidatePath("/admin/correction-sources");
        } catch (error) {
            console.error("Error updating correction source: ", error);
            throw error;
        }

        await setCrudSuccessToast("correctionSource", "updated");
        redirect("/admin/correction-sources");
    } else {
        const errors = result.error.format();
        console.error("Invalid correction source data: ", errors);
        throw errors;
    }
};

export const deleteCorrectionSource = async (
    id: string,
    options?: DeleteCorrectionSourceOptions
) => {
    try {
        await prisma.correctionSource.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        console.log("Error deleting correction source: ", error);
        throw error;
    }

    const paths = new Set(["/admin/correction-sources", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("correctionSource", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/correction-sources");
    }
};
