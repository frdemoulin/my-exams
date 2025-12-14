import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchUsers } from "@/core/user";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.user');
    return { title: t('actions.list') };
}

const UsersPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in");
    }

    const users = await fetchUsers();
    const t = await getTranslations('entities.user');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={users}
                />
            </div>
        </div>
    )
}

export default UsersPage;
