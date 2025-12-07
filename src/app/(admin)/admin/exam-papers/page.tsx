import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchExamPapers } from "@/core/exam-paper";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examPaper');
    return { title: t('actions.list') };
}

const ExamPapersPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/exam-papers");
    }

    const examPapers = await fetchExamPapers();
    const t = await getTranslations('entities.examPaper');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={examPapers}
                />
            </div>
        </div>
    )
}

export default ExamPapersPage;
