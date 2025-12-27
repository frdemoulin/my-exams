import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchSubjects } from "@/core/subject";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.subject');
    return { title: t('actions.list') };
}

const SubjectsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in");
    }

    const subjects = await fetchSubjects({ includeInactive: true });
    const t = await getTranslations('entities.subject');

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title={t('actions.list')}
                    columns={columns}
                    data={subjects}
                />
            </div>
        </div>
    )
}

export default SubjectsPage;
