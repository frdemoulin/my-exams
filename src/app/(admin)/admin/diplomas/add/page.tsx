import { Metadata } from "next";
import { DiplomaForm } from "../_components/diploma-form";
import { createDiploma } from "@/core/diploma";

export const metadata: Metadata = {
    title: "Ajout d'un diplôme",
}

const AddDiplomaPage = () => {
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;un diplôme</h1>
            </div>
            <div>
                <DiplomaForm
                    crudMode="add"
                    formAction={createDiploma}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddDiplomaPage;