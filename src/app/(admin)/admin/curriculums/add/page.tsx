import { Metadata } from "next";
import { redirect } from "next/navigation";

import CurriculumForm from "../_components/curriculum-form";
import getSession from "@/lib/auth/get-session";
import { fetchTeachingsOptions } from "@/core/teaching/teaching.queries";

export const metadata: Metadata = {
    title: "Ajouter un programme",
};

const AddCurriculumPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums/add");
    }

    const teachings = await fetchTeachingsOptions();

    return (
        <div className="w-full p-6">
            <h1 className="text-lg font-semibold md:text-2xl mb-6">Ajouter un programme</h1>
            <CurriculumForm
                crudMode="add"
                initialData={{}}
                teachings={teachings}
            />
        </div>
    );
};

export default AddCurriculumPage;
