import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExaminationCenterForm } from "../_components/examination-center-form";
import { createExaminationCenter } from "@/core/examination-center";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examinationCenter');
    return { title: t('actions.add') };
}

const AddExaminationCenterPage = async () => {
    const t = await getTranslations('entities.examinationCenter');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
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