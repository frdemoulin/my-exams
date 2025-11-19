import { Metadata } from "next";
import { SubjectForm } from "../_components/subject-form";
import { createSubject } from "@/core/subject";

export const metadata: Metadata = {
    title: "Ajout d'une matière",
}

const AddSubjectPage = () => {
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;une matière</h1>
            </div>
            <div>
                <SubjectForm
                    crudMode="add"
                    formAction={createSubject}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddSubjectPage;