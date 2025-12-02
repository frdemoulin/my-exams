import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { ExamPaperForm } from "../../_components/exam-paper-form";
import { fetchExamPaperById } from "@/core/exam-paper";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examPaper');
    return { title: t('actions.edit') };
}

const EditExamPaperPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect(`/api/auth/signin?callbackUrl=/admin/exam-papers/${id}/edit`);
    }

    const examPaper = await fetchExamPaperById(id);

    if (!examPaper) {
        redirect("/admin/exam-papers");
    }

    // Fetch all necessary data for selects
    const [diplomas, divisions, grades, teachings, curriculums, examinationCenters] = await Promise.all([
        prisma.diploma.findMany({ orderBy: { longDescription: 'asc' } }),
        prisma.division.findMany({ orderBy: { longDescription: 'asc' } }),
        prisma.grade.findMany({ orderBy: { shortDescription: 'asc' } }),
        prisma.teaching.findMany({ orderBy: { longDescription: 'asc' } }),
        prisma.curriculum.findMany({ orderBy: { longDescription: 'asc' } }),
        prisma.examinationCenter.findMany({ orderBy: { description: 'asc' } }),
    ]);

    const t = await getTranslations('entities.examPaper');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <ExamPaperForm
                    crudMode="edit"
                    initialData={{
                        id: examPaper.id,
                        label: examPaper.label || undefined,
                        sessionYear: examPaper.sessionYear,
                        sessionDay: examPaper.sessionDay || undefined,
                        examDay: examPaper.examDay,
                        examMonth: examPaper.examMonth,
                        examYear: examPaper.examYear,
                        diplomaId: examPaper.diplomaId,
                        divisionId: examPaper.divisionId,
                        gradeId: examPaper.gradeId,
                        teachingId: examPaper.teachingId,
                        curriculumId: examPaper.curriculumId,
                        examinationCenterIds: examPaper.examinationCenterIds,
                        chapterIds: examPaper.chapterIds,
                        themeIds: examPaper.themeIds,
                        subjectUrl: examPaper.subjectUrl || undefined,
                        correctionUrl: examPaper.correctionUrl || undefined,
                    }}
                    diplomas={diplomas}
                    divisions={divisions}
                    grades={grades}
                    teachings={teachings}
                    curriculums={curriculums}
                    examinationCenters={examinationCenters}
                />
            </div>
        </div>
    );
}

export default EditExamPaperPage;
