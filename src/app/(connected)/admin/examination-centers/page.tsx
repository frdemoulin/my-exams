import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchExaminationCenters } from "@/db/queries/examination-center";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
    title: "Liste des centres d'examens",
}

const UsersPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const examinationCenters = await fetchExaminationCenters();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des centres d'examens"
                buttonId="addExaminationCenterButton"
                buttonLabel="Ajouter un centre d'examen"
                buttonPath="examination-centers/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={examinationCenters}
                />
            </div>
        </div>
    )
}

export default UsersPage;