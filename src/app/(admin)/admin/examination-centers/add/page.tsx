import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExaminationCenterForm } from "../_components/examination-center-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examinationCenter');
    return { title: t('actions.add') };
}

const AddExaminationCenterPage = async () => {
    const t = await getTranslations('entities.examinationCenter');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.add')}</h1>
            </div>
            <div>
                <ExaminationCenterForm
                    crudMode="add"
                    initialData={{
                        description: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddExaminationCenterPage;