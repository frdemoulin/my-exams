import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchDiplomas } from "@/core/diploma";
import getSession from "@/lib/auth/get-session";

export const metadata: Metadata = {
    title: "Liste des diplômes",
}

const DiplomasPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const diplomas = await fetchDiplomas();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des diplômes"
                buttonId="addDiplomaButton"
                buttonLabel="Ajouter un diplôme"
                buttonPath="diplomas/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={diplomas}
                />
            </div>
        </div>
    )
}

export default DiplomasPage;