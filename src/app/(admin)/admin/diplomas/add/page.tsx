import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DiplomaForm } from "../_components/diploma-form";
import { createDiploma } from "@/core/diploma";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.diploma');
    return {
        title: t('actions.add'),
    };
}

const AddDiplomaPage = async () => {
    const t = await getTranslations('entities.diploma');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
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