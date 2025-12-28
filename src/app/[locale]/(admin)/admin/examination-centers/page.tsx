import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchExaminationCenters } from "@/core/examination-center";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examinationCenter');
    return { title: t('actions.list') };
}

const ExaminationCentersPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in");
    }

    const examinationCenters = await fetchExaminationCenters({ includeInactive: true });
    const t = await getTranslations('entities.examinationCenter');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={examinationCenters}
                />
            </div>
        </div>
    )
}

export default ExaminationCentersPage;
