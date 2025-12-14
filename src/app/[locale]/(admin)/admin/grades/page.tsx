import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

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
        redirect("/log-in");
    }

    const grades = await fetchGrades();
    const t = await getTranslations('entities.grade');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={grades}
                />
            </div>
        </div>
    )
}

export default GradesPage;
