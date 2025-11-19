import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchDivisions } from "@/core/division";
import getSession from "@/lib/auth/get-session";

export const metadata: Metadata = {
    title: "Liste des filières",
}

const DivisionsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const divisions = await fetchDivisions();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des filières"
                buttonId="addDivisionButton"
                buttonLabel="Ajouter une filière"
                buttonPath="divisions/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={divisions}
                />
            </div>
        </div>
    )
}

export default DivisionsPage;