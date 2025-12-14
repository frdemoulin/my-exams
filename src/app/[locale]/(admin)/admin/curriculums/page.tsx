import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchCurriculumsWithCourseCount } from "@/core/curriculum";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.curriculum');
    return { title: t('actions.list') };
}

const CurriculumsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums");
    }

    const curriculums = await fetchCurriculumsWithCourseCount();
    const t = await getTranslations('entities.curriculum');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={curriculums}
                />
            </div>
        </div>
    );
};

export default CurriculumsPage;
