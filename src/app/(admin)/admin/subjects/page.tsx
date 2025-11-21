import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
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
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const subjects = await fetchSubjects();
    const t = await getTranslations('entities.subject');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addSubjectButton"
                buttonLabel={t('actions.add')}
                buttonPath="subjects/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={subjects}
                />
            </div>
        </div>
    )
}

export default SubjectsPage;