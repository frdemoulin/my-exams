import { Metadata } from "next";
import { redirect } from "next/navigation";

import { updateTeaching, fetchTeachingById } from "@/core/teaching";
import { TeachingForm } from "../../_components/teaching-form";
import getSession from "@/lib/auth/get-session";
import { fetchGradesOptions } from "@/core/grade";
import { fetchSubjectsOptions } from "@/core/subject";

export const metadata: Metadata = {
    title: "Éditer un enseignement",
};

interface EditCoursePageProps {
    params: Promise<{
        id: string;
    }>;
}

const EditCoursePage = async ({ params }: EditCoursePageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/teachings");
    }

    const { id } = await params;
    const course = await fetchTeachingById(id);

    if (!course) {
        redirect("/admin/teachings");
    }

    const grades = await fetchGradesOptions();
    const subjects = await fetchSubjectsOptions();

    return (
        <div className="w-full p-6">
            <h1 className="text-2xl font-semibold mb-6">Éditer l'enseignement</h1>
            <TeachingForm
                crudMode="edit"
                formAction={updateTeaching}
                initialData={{
                    id: course.id,
                    name: course.name,
                    shortName: course.shortName,
                    gradeId: course.gradeId,
                    subjectId: course.subjectId,
                }}
                grades={grades}
                subjects={subjects}
            />
        </div>
    );
};

export default EditCoursePage;
