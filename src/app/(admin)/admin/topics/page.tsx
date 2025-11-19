import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchTopics, fetchTopicsWithIncludes } from "@/core/topic";
import getSession from "@/lib/auth/get-session";

export const metadata: Metadata = {
    title: "Liste des thèmes",
}

const TopicsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const topics = await fetchTopicsWithIncludes();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des thèmes"
                buttonId="addTopicButton"
                buttonLabel="Ajouter un thème"
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