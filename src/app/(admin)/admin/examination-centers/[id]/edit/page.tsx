import { Metadata } from "next";

import { ExaminationCenterForm } from "../../_components/examination-center-form";
import { fetchExaminationCenterById } from "@/core/examination-center";
import { updateExaminationCenter } from "@/core/examination-center";

export const metadata: Metadata = {
    title: "Édition d'un centre d'examen",
}

interface ExaminationCenterEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditExaminationCenterPage = async ({ params }: ExaminationCenterEditProps) => {
    const { id } = await params;

    const examinationCenter = await fetchExaminationCenterById(id);

    const updateExaminationCenterAction = updateExaminationCenter.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;un centre d&apos;examen</h1>
            </div>
            <div>
                <ExaminationCenterForm
                    crudMode="edit"
                    initialData={{
                        id,
                        description: examinationCenter?.description ?? "",
                    }}
                    formAction={updateExaminationCenterAction}
                />
            </div>
        </div>
    )
}

export default EditExaminationCenterPage;