import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

import { fetchCurriculumsWithCourseCount } from "@/core/curriculum";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { TableTitle } from "@/components/shared/table-title";

export const metadata: Metadata = {
    title: "Programmes",
};

const CurriculumsPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums");
    }

    const curriculums = await fetchCurriculumsWithCourseCount();

    return (
        <div className="w-full p-6">
            <TableTitle
                title="Programmes scolaires"
                buttonId="add-curriculum"
                buttonLabel="Ajouter un programme"
                buttonPath="/admin/curriculums/add"
            />
            <DataTable columns={columns} data={curriculums} />
        </div>
    );
};

export default CurriculumsPage;
