import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchDivisions } from "@/core/division";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.division');
    return { title: t('actions.list') };
}

const DivisionsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const divisions = await fetchDivisions();
    const t = await getTranslations('entities.division');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addDivisionButton"
                buttonLabel={t('actions.add')}
                buttonPath="divisions/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={divisions}
                />
            </div>
        </div>
    )
}

export default DivisionsPage;