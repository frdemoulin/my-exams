import { Metadata } from "next";
import { redirect } from "next/navigation";

import CurriculumForm from "../_components/curriculum-form";
import getSession from "@/lib/auth/get-session";
import { fetchTeachingsOptions } from "@/core/teaching/teaching.queries";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
    title: "Ajouter un programme",
};

const AddCurriculumPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums/add");
    }

    const teachings = await fetchTeachingsOptions({ includeInactive: true });

    return (
        <div className="w-full p-6">
            <AdminPageHeading title="Ajouter un programme" className="mb-6" />
            <CurriculumForm
                crudMode="add"
                initialData={{}}
                teachings={teachings}
            />
        </div>
    );
};

export default AddCurriculumPage;
