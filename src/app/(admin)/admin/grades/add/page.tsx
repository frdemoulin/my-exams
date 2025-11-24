import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GradeForm } from "../_components/grade-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.grade');
    return { title: t('actions.add') };
}

const AddGradePage = async () => {
    const t = await getTranslations('entities.grade');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
            </div>
            <div>
                <GradeForm
                    crudMode="add"
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