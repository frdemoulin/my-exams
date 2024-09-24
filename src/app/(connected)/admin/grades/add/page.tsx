import { Metadata } from "next";
import { GradeForm } from "../_components/grade-form";
import { createGrade } from "@/actions/grade/create-grade";

export const metadata: Metadata = {
    title: "Ajout d'un niveau",
}

const AddGradePage = () => {
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;un niveau</h1>
            </div>
            <div>
                <GradeForm
                    crudMode="add"
                    formAction={createGrade}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddGradePage;