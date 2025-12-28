import { Metadata } from "next";
import { redirect } from "next/navigation";

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

    const teachings = await fetchTeachings({ includeInactive: true });

    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <DataTable
                    title="Liste des enseignements"
                    columns={columns}
                    data={teachings}
                />
            </div>
        </div>
    )
}

export default CoursesPage;
