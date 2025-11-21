import { Metadata } from "next";

import { DivisionForm } from "../../_components/division-form";
import { fetchDivisionById } from "@/core/division";
import { updateDivision } from "@/core/division";

export const metadata: Metadata = {
    title: "Édition d'une filière",
}

interface DivisionEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditDivisionPage = async ({ params }: DivisionEditProps) => {
    const { id } = await params;

    const division = await fetchDivisionById(id);

    const updateDivisionAction = updateDivision.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;une filière</h1>
            </div>
            <div>
                <DivisionForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: division?.longDescription ?? "",
                        shortDescription: division?.shortDescription ?? "",
                    }}
                    formAction={updateDivisionAction}
                />
            </div>
        </div>
    )
}

export default EditDivisionPage;