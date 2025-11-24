"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { createExamPaperSchema } from "@/lib/validation";
import { setCrudSuccessToast } from "@/lib/toast";
import { CreateExamPaperErrors } from "./exam-paper.types";

export const createExamPaper = async (formData: FormData) => {
    const values = Object.fromEntries(formData.entries());

    // Convert chapterIds, themeIds and examinationCenterIds from comma-separated strings to arrays
    const parsedValues = {
        ...values,
        sessionYear: values.sessionYear ? parseInt(values.sessionYear as string) : undefined,
        examinationCenterIds: values.examinationCenterIds ? (values.examinationCenterIds as string).split(',').filter(Boolean) : [],
        chapterIds: values.chapterIds ? (values.chapterIds as string).split(',').filter(Boolean) : [],
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
                    diplomaId: data.diplomaId,
                    divisionId: data.divisionId,
                    gradeId: data.gradeId,
                    teachingId: data.teachingId,
                    curriculumId: data.curriculumId,
                    examinationCenterIds: data.examinationCenterIds || [],
                    chapterIds: data.chapterIds || [],
                    themeIds: data.themeIds || [],
                    subjectUrl: data.subjectUrl,
                    correctionUrl: data.correctionUrl,
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
        examinationCenterIds: values.examinationCenterIds ? (values.examinationCenterIds as string).split(',').filter(Boolean) : [],
        chapterIds: values.chapterIds ? (values.chapterIds as string).split(',').filter(Boolean) : [],
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
                    diplomaId: data.diplomaId,
                    divisionId: data.divisionId,
                    gradeId: data.gradeId,
                    teachingId: data.teachingId,
                    curriculumId: data.curriculumId,
                    examinationCenterIds: data.examinationCenterIds || [],
                    chapterIds: data.chapterIds || [],
                    themeIds: data.themeIds || [],
                    subjectUrl: data.subjectUrl,
                    correctionUrl: data.correctionUrl,
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

export const deleteExamPaper = async (id: string) => {
    try {
        await prisma.examPaper.delete({
            where: { id }
        });
    } catch (error) {
        console.log('Error deleting exam paper: ', error);
        throw error;
    }

    revalidatePath("/admin/exam-papers");
    await setCrudSuccessToast("examPaper", "deleted");
    redirect("/admin/exam-papers");
}
