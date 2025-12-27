import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SubjectForm } from "../_components/subject-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.subject');
    return { title: t('actions.add') };
}

const AddSubjectPage = async () => {
    const t = await getTranslations('entities.subject');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.add')}</h1>
            </div>
            <div>
                <SubjectForm
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

export default AddSubjectPage;
