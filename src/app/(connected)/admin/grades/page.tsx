import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchGrades } from "@/db/queries/grade";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
    title: "Liste des niveaux scolaires",
}

const GradesPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const grades = await fetchGrades();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des niveaux scolaires"
                buttonId="addGradeButton"
                buttonLabel="Ajouter un niveau"
                buttonPath="grades/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={grades}
                />
            </div>
        </div>
    )
}

export default GradesPage;