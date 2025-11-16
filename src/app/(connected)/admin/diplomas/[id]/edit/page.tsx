import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DiplomaForm } from "../../_components/diploma-form";
import { fetchDiplomaById } from "@/db/queries/diploma";
import { updateDiploma } from "@/actions/diploma/edit-diploma";

export const metadata: Metadata = {
    title: "Édition d'un diplôme",
}

interface DiplomaEditProps {
    params: {
        id: string;
    };
}

const EditDiplomaPage = async ({ params }: DiplomaEditProps) => {
    const { id } = params;

    const diploma = await fetchDiplomaById(id);

    if (!diploma) {
        notFound();
    }

    const updateDiplomaAction = updateDiploma.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;un diplôme</h1>
            </div>
            <div>
                <DiplomaForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: diploma.longDescription ?? "",
                        shortDescription: diploma.shortDescription ?? "",
                    }}
                    formAction={updateDiplomaAction}
                />
            </div>
        </div>
    )
}

export default EditDiplomaPage;