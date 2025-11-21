import { Metadata } from "next";
import { notFound } from "next/navigation";

import { GradeForm } from "../../_components/grade-form";
import { fetchGradeById } from "@/core/grade";
import { updateGrade } from "@/core/grade";

export const metadata: Metadata = {
    title: "Édition d'un diplôme",
}

interface GradeEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditGradePage = async ({ params }: GradeEditProps) => {
    const { id } = await params;

    const grade = await fetchGradeById(id);

    if (!grade) {
        notFound();
    }

    const updateGradeAction = updateGrade.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;un diplôme</h1>
            </div>
            <div>
                <GradeForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: grade.longDescription ?? "",
                        shortDescription: grade.shortDescription ?? "",
                    }}
                    formAction={updateGradeAction}
                />
            </div>
        </div>
    )
}

export default EditGradePage;