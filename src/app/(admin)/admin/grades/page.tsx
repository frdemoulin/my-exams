import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchGrades } from "@/core/grade";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.grade');
    return { title: t('actions.list') };
}

const GradesPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const grades = await fetchGrades();
    const t = await getTranslations('entities.grade');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addGradeButton"
                buttonLabel={t('actions.add')}
                buttonPath="grades/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={grades}
                />
            </div>
        </div>
    )
}

export default GradesPage;