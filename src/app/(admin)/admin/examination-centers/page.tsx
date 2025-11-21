import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
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
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const examinationCenters = await fetchExaminationCenters();
    const t = await getTranslations('entities.examinationCenter');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addExaminationCenterButton"
                buttonLabel={t('actions.add')}
                buttonPath="examination-centers/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={examinationCenters}
                />
            </div>
        </div>
    )
}

export default ExaminationCentersPage;