import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchTopics, fetchTopicsWithIncludes } from "@/core/topic";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.topic');
    return { title: t('actions.list') };
}

const TopicsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const topics = await fetchTopicsWithIncludes();
    const t = await getTranslations('entities.topic');

    return (
        <div className="w-full p-6">
            <TableTitle
                title={t('actions.list')}
                buttonId="addTopicButton"
                buttonLabel={t('actions.add')}
                buttonPath="topics/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={topics}
                />
            </div>
        </div>
    )
}

export default TopicsPage;