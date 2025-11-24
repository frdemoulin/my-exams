import { Metadata } from "next";
import { redirect } from "next/navigation";

import { TeachingForm } from "../_components/teaching-form";
import getSession from "@/lib/auth/get-session";
import { fetchGradesOptions } from "@/core/grade";
import { fetchSubjectsOptions } from "@/core/subject";

export const metadata: Metadata = {
    title: "Ajouter un enseignement",
};

const AddCoursePage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/teachings/add");
    }

    const grades = await fetchGradesOptions();
    const subjects = await fetchSubjectsOptions();

    return (
        <div className="w-full p-6">
            <h1 className="text-2xl font-semibold mb-6">Ajouter un enseignement</h1>
            <TeachingForm
                crudMode="add"
                initialData={{
                    name: "",
                    shortName: "",
                    gradeId: "",
                    subjectId: "",
                }}
                grades={grades}
                subjects={subjects}
            />
        </div>
    );
};

export default AddCoursePage;
