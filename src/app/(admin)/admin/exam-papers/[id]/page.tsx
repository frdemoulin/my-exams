import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { fetchExamPaperById } from "@/core/exam-paper";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const t = await getTranslations('entities.examPaper');
    return { title: t('actions.view') };
}

const ViewExamPaperPage = async ({ params }: { params: { id: string } }) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect(`/api/auth/signin?callbackUrl=/admin/exam-papers/${params.id}`);
    }

    const examPaper = await fetchExamPaperById(params.id);

    if (!examPaper) {
        redirect("/admin/exam-papers");
    }

    const t = await getTranslations('entities.examPaper');

    return (
        <div className="w-full p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg font-semibold md:text-2xl">{t('actions.view')}</h1>
            </div>
            <div className="space-y-4">
                {examPaper.label && (
                    <div>
                        <h3 className="font-semibold">Label</h3>
                        <p className="text-muted-foreground">{examPaper.label}</p>
                    </div>
                )}
                {examPaper.sessionYear && (
                    <div>
                        <h3 className="font-semibold">Année de session</h3>
                        <p className="text-muted-foreground">{examPaper.sessionYear}</p>
                    </div>
                )}
                <div>
                    <h3 className="font-semibold">Diplôme</h3>
                    <p className="text-muted-foreground">{examPaper.diploma.longDescription}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Filière</h3>
                    <p className="text-muted-foreground">{examPaper.division.longDescription}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Niveau scolaire</h3>
                    <p className="text-muted-foreground">{examPaper.grade.shortDescription}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Enseignement</h3>
                    <p className="text-muted-foreground">{examPaper.teaching.longDescription}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Programme</h3>
                    <p className="text-muted-foreground">{examPaper.curriculum.shortDescription || examPaper.curriculum.longDescription}</p>
                </div>
                {examPaper.examinationCenter && (
                    <div>
                        <h3 className="font-semibold">Centre d'examen</h3>
                        <p className="text-muted-foreground">{examPaper.examinationCenter.description}</p>
                    </div>
                )}
                {examPaper.pdfUrl && (
                    <div>
                        <h3 className="font-semibold">URL du PDF</h3>
                        <a 
                            href={examPaper.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {examPaper.pdfUrl}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewExamPaperPage;
