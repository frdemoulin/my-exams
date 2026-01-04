"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createExamPaperSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateExamPaperErrors } from "./exam-paper.types";

type DeleteExamPaperOptions = {
    redirectTo?: string | null;
    revalidatePaths?: string[];
    skipSuccessToast?: boolean;
};

const normalizeExamPaperSource = (value: unknown): string => {
    if (typeof value !== "string") return "Officiel";
    const trimmed = value.trim();
    if (!trimmed) return "Officiel";
    switch (trimmed) {
        case "OFFICIEL":
            return "Officiel";
        case "APMEP":
            return "APMEP";
        case "LABOLYCEE":
            return "LaboLycée";
        case "AUTRE":
            return "Autre";
        default:
            return trimmed;
    }
};

export const createExamPaper = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    // Convert domainIds, themeIds and examinationCenterIds from comma-separated strings to arrays
    const parsedValues = {
        ...values,
        sessionYear: values.sessionYear ? parseInt(values.sessionYear as string) : undefined,
        examDay: values.examDay ? parseInt(values.examDay as string) : undefined,
        examMonth: values.examMonth ? parseInt(values.examMonth as string) : undefined,
        examYear: values.examYear ? parseInt(values.examYear as string) : undefined,
        source: normalizeExamPaperSource(values.source),
        sourceUrl: values.sourceUrl || undefined,
        examinationCenterIds: values.examinationCenterIds ? (values.examinationCenterIds as string).split(',').filter(Boolean) : [],
        domainIds: values.domainIds ? (values.domainIds as string).split(',').filter(Boolean) : [],
        themeIds: values.themeIds ? (values.themeIds as string).split(',').filter(Boolean) : [],
    };

    const result = createExamPaperSchema.safeParse(parsedValues);

    if (result.success) {
        const data = result.data;

        try {
            await prisma.examPaper.create({
                data: {
                    label: data.label,
                    sessionYear: data.sessionYear,
                    sessionDay: data.sessionDay || null,
                    source: data.source,
                    sourceUrl: data.sourceUrl || null,
                    examDay: data.examDay ?? null,
                    examMonth: data.examMonth ?? null,
                    examYear: data.examYear ?? null,
                    diplomaId: data.diplomaId,
                    divisionId: data.divisionId || null,
                    gradeId: data.gradeId,
                    teachingId: data.teachingId,
                    curriculumId: data.curriculumId,
                    examinationCenterIds: data.examinationCenterIds || [],
                    domainIds: data.domainIds || [],
                    themeIds: data.themeIds || [],
                    subjectUrl: data.subjectUrl,
                }
            });
        } catch (error: any) {
            console.error('Error creating exam paper:', error);
            throw error;
        }
    } else {
        const errors: CreateExamPaperErrors = result.error.format();
        console.error('Error creating exam paper: ', errors);
        throw errors;
    }

    revalidatePath("/admin/exam-papers");
    await setCrudSuccessToast("examPaper", "created");
    redirect("/admin/exam-papers");
}

export const updateExamPaper = async (id: string | undefined, formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    // Convert arrays from comma-separated strings
    const parsedValues = {
        ...values,
        sessionYear: values.sessionYear ? parseInt(values.sessionYear as string) : undefined,
        examDay: values.examDay ? parseInt(values.examDay as string) : undefined,
        examMonth: values.examMonth ? parseInt(values.examMonth as string) : undefined,
        examYear: values.examYear ? parseInt(values.examYear as string) : undefined,
        source: normalizeExamPaperSource(values.source),
        sourceUrl: values.sourceUrl || undefined,
        examinationCenterIds: values.examinationCenterIds ? (values.examinationCenterIds as string).split(',').filter(Boolean) : [],
        domainIds: values.domainIds ? (values.domainIds as string).split(',').filter(Boolean) : [],
        themeIds: values.themeIds ? (values.themeIds as string).split(',').filter(Boolean) : [],
    };

    const result = createExamPaperSchema.safeParse(parsedValues);

    if (result.success) {
        const data = result.data;

        try {
            await prisma.examPaper.update({
                where: { id },
                data: {
                    label: data.label,
                    sessionYear: data.sessionYear,
                    sessionDay: data.sessionDay || null,
                    source: data.source,
                    sourceUrl: data.sourceUrl || null,
                    examDay: data.examDay ?? null,
                    examMonth: data.examMonth ?? null,
                    examYear: data.examYear ?? null,
                    diplomaId: data.diplomaId,
                    divisionId: data.divisionId || null,
                    gradeId: data.gradeId,
                    teachingId: data.teachingId,
                    curriculumId: data.curriculumId,
                    examinationCenterIds: data.examinationCenterIds || [],
                    domainIds: data.domainIds || [],
                    themeIds: data.themeIds || [],
                    subjectUrl: data.subjectUrl,
                }
            });

            revalidatePath('/admin/exam-papers');
        } catch (error) {
            console.error('Error updating exam paper: ', error);
            throw error;
        }
        
        await setCrudSuccessToast("examPaper", "updated");
        redirect('/admin/exam-papers');
    } else {
        const errors = result.error.format();
        console.error('Invalid exam paper data: ', errors);
        throw errors;
    }
}

export const deleteExamPaper = async (id: string, options?: DeleteExamPaperOptions) => {
    try {
        await prisma.examPaper.delete({
            where: { id }
        });
    } catch (error) {
        console.log('Error deleting exam paper: ', error);
        throw error;
    }

    const paths = new Set(["/admin/exam-papers", ...(options?.revalidatePaths ?? [])]);
    paths.forEach((path) => revalidatePath(path));
    if (!options?.skipSuccessToast) {
        await setCrudSuccessToast("examPaper", "deleted");
    }
    if (options?.redirectTo !== null) {
        redirect(options?.redirectTo ?? "/admin/exam-papers");
    }
}
