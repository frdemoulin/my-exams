import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { ExamPaperForm } from "../../_components/exam-paper-form";
import { fetchExamPaperById } from "@/core/exam-paper";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";
import { fetchCorrectionSources } from "@/core/correction-source";

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
    const [diplomas, divisions, grades, teachings, curriculums, examinationCenters, sources] = await Promise.all([
        prisma.diploma.findMany({
            where: { isActive: { not: false } },
            orderBy: { longDescription: 'asc' },
        }),
        prisma.division.findMany({
            where: { isActive: { not: false } },
            orderBy: { longDescription: 'asc' },
        }),
        prisma.grade.findMany({ orderBy: { shortDescription: 'asc' } }),
        prisma.teaching.findMany({
            where: { isActive: { not: false } },
            orderBy: { longDescription: 'asc' },
        }),
        prisma.curriculum.findMany({
            where: { isActive: { not: false } },
            orderBy: { longDescription: 'asc' },
        }),
        prisma.examinationCenter.findMany({
            where: { isActive: { not: false } },
            orderBy: { description: 'asc' },
        }),
        fetchCorrectionSources({ includeInactive: true }),
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
                        examMonth: examPaper.examMonth ?? 1,
                        examYear: examPaper.examYear ?? examPaper.sessionYear,
                        source: examPaper.source,
                        sourceUrl: examPaper.sourceUrl || undefined,
                        diplomaId: examPaper.diplomaId,
                        divisionId: examPaper.divisionId,
                        gradeId: examPaper.gradeId,
                        teachingId: examPaper.teachingId,
                        curriculumId: examPaper.curriculumId || "",
                        examinationCenterIds: examPaper.examinationCenterIds,
                        domainIds: examPaper.domainIds,
                        themeIds: examPaper.themeIds,
                        subjectUrl: examPaper.subjectUrl || undefined,
                    }}
                    diplomas={diplomas}
                    divisions={divisions}
                    grades={grades}
                    teachings={teachings}
                    curriculums={curriculums}
                    examinationCenters={examinationCenters}
                    sources={sources}
                />
            </div>
        </div>
    );
}

export default EditExamPaperPage;
