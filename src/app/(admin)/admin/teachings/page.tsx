import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TableTitle } from "@/components/shared/table-title";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchTeachings } from "@/core/teaching";
import getSession from "@/lib/auth/get-session";

export const metadata: Metadata = {
    title: "Liste des enseignements",
};

const CoursesPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/teachings");
    }

    const teachings = await fetchTeachings();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Liste des enseignements"
                buttonId="addTeachingButton"
                buttonLabel="Ajouter un enseignement"
                buttonPath="courses/add"
            />
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={teachings}
                />
            </div>
        </div>
    )
}

export default CoursesPage;
