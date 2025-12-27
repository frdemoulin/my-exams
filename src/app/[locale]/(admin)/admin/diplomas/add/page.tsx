import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DiplomaForm } from "../_components/diploma-form";

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
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.add')}</h1>
            </div>
            <div>
                <DiplomaForm
                    crudMode="add"
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                        isActive: true,
                    }}
                />
            </div>
        </div>
    )
}

export default AddDiplomaPage;
