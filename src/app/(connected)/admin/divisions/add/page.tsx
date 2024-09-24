import { Metadata } from "next";
import { DivisionForm } from "../_components/division-form";
import { createDivision } from "@/actions/division/create-division";

export const metadata: Metadata = {
    title: "Ajout d'un filière",
}

const AddDivisionPage = () => {
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;une filière</h1>
            </div>
            <div>
                <DivisionForm
                    crudMode="add"
                    formAction={createDivision}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddDivisionPage;