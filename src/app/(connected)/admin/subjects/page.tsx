import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchSubjects } from "@/db/queries/subject";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
    title: "Liste des matières",
}

const SubjectsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const subjects = await fetchSubjects();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des matières"
                buttonId="addSubjectButton"
                buttonLabel="Ajouter une matière"
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