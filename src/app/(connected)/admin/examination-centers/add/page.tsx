import { Metadata } from "next";
import { ExaminationCenterForm } from "../_components/examination-center-form";
import { createExaminationCenter } from "@/actions/examination-center/create-examination-center";

export const metadata: Metadata = {
    title: "Ajout d'un centre d'examen",
}

const AddExaminationCenterPage = () => {
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;un centre d&apos;examen</h1>
            </div>
            <div>
                <ExaminationCenterForm
                    crudMode="add"
                    formAction={createExaminationCenter}
                    initialData={{
                        description: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddExaminationCenterPage;