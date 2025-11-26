import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchThemes, fetchThemesWithIncludes } from "@/core/theme";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.theme');
    return { title: t('actions.list') };
}

const ThemesPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const themes = await fetchThemesWithIncludes();
    const t = await getTranslations('entities.theme');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addThemeButton"
                buttonLabel={t('actions.add')}
                buttonPath="themes/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={themes}
                />
            </div>
        </div>
    )
}

export default ThemesPage;