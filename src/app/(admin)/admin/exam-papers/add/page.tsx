import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { ExamPaperForm } from "../_components/exam-paper-form";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examPaper');
    return { title: t('actions.add') };
}

const AddExamPaperPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/exam-papers/add");
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
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">{t('actions.add')}</h1>
            </div>
            <div className="mt-4">
                <ExamPaperForm
                    crudMode="add"
                    initialData={{
                        sessionYear: new Date().getFullYear(),
                        diplomaId: "",
                        divisionId: "",
                        gradeId: "",
                        teachingId: "",
                        curriculumId: "",
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

export default AddExamPaperPage;
