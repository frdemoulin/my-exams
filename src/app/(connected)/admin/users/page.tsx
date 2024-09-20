import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchUsers } from "@/db/queries/user";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
    title: "Liste des utilisateurs",
}

const UsersPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/users");
    }

    const users = await fetchUsers();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des utilisateurs"
                buttonId="addUserButton"
                buttonLabel="Ajouter un utilisateur"
                buttonPath="users/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={users}
                />
            </div>
        </div>
    )
}

export default UsersPage;