import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DivisionForm } from "../_components/division-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.division');
    return { title: t('actions.add') };
}

const AddDivisionPage = async () => {
    const t = await getTranslations('entities.division');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
            </div>
            <div>
                <DivisionForm
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

export default AddDivisionPage;