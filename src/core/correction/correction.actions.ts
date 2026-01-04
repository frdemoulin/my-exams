"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db/prisma";
import { createCorrectionSchema } from "./correction.types";
import { CreateCorrectionErrors } from "./correction.types";

type DeleteCorrectionOptions = {
    examPaperId?: string;
    revalidatePaths?: string[];
};

export const createCorrection = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    const result = createCorrectionSchema.safeParse({
        examPaperId: values.examPaperId,
        source: values.source,
        url: values.url,
        type: values.type || "pdf",
        quality: values.quality ? Number(values.quality) : undefined,
        author: values.author,
    });

    if (!result.success) {
        const errors: CreateCorrectionErrors = result.error.format();
        console.error("Invalid correction data: ", errors);
        throw errors;
    }

    const { examPaperId, source, url, type, quality, author } = result.data;

    await prisma.correction.create({
        data: {
            examPaperId,
            source,
            url,
            type,
            quality,
            author,
        },
    });

    revalidatePath(`/admin/exam-papers/${examPaperId}`);
};

export const deleteCorrection = async (id: string, options: DeleteCorrectionOptions = {}) => {
    await prisma.correction.delete({
        where: {
            id,
        },
    });

    const paths = new Set(options.revalidatePaths ?? []);
    if (options.examPaperId) {
        paths.add(`/admin/exam-papers/${options.examPaperId}`);
    }
    paths.forEach((path) => revalidatePath(path));
};
