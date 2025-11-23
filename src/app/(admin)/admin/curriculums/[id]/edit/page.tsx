import { Metadata } from "next";
import { redirect } from "next/navigation";

import { updateCurriculum, fetchCurriculumById } from "@/core/curriculum";
import CurriculumForm from "../../_components/curriculum-form";
import getSession from "@/lib/auth/get-session";
import { fetchTeachingsOptions } from "@/core/teaching/teaching.queries";

export const metadata: Metadata = {
    title: "Éditer un programme",
};

interface EditCurriculumPageProps {
    params: Promise<{
        id: string;
    }>;
}

const EditCurriculumPage = async ({ params }: EditCurriculumPageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums");
    }

    const { id } = await params;
    const curriculum = await fetchCurriculumById(id);

    if (!curriculum) {
        redirect("/admin/curriculums");
    }

    const teachings = await fetchTeachingsOptions();

    return (
        <div className="w-full p-6">
            <h1 className="text-2xl font-semibold mb-6">Éditer le programme</h1>
            <CurriculumForm
                crudMode="edit"
                formAction={updateCurriculum}
                initialData={{
                    id: curriculum.id,
                    name: curriculum.name,
                    description: curriculum.description ?? undefined,
                    startYear: curriculum.startYear,
                    endYear: curriculum.endYear ?? undefined,
                    startMonth: curriculum.startMonth ?? undefined,
                    endMonth: curriculum.endMonth ?? undefined,
                    teachingIds: curriculum.teachingIds,
                    isActive: curriculum.isActive,
                }}
                teachings={teachings}
            />
        </div>
    );
};

export default EditCurriculumPage;
