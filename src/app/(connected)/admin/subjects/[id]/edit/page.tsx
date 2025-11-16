import { Metadata } from "next";

import { SubjectForm } from "../../_components/subject-form";
import { fetchSubjectById } from "@/db/queries/subject";
import { updateSubject } from "@/actions/subject/edit-subject";

export const metadata: Metadata = {
    title: "Édition d'une filière",
}

interface SubjectEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditSubjectPage = async ({ params }: SubjectEditProps) => {
    const { id } = await params;

    const subject = await fetchSubjectById(id);

    const updateSubjectAction = updateSubject.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;une filière</h1>
            </div>
            <div>
                <SubjectForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: subject?.longDescription ?? "",
                        shortDescription: subject?.shortDescription ?? "",
                    }}
                    formAction={updateSubjectAction}
                />
            </div>
        </div>
    )
}

export default EditSubjectPage;