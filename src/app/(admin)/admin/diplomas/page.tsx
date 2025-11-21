import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchDiplomas } from "@/core/diploma";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.diploma');
    return {
        title: t('actions.list'),
    };
}

const DiplomasPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const diplomas = await fetchDiplomas();
    const t = await getTranslations('entities.diploma');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addDiplomaButton"
                buttonLabel={t('actions.add')}
                buttonPath="diplomas/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={diplomas}
                />
            </div>
        </div>
    )
}

export default DiplomasPage;