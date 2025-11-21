import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SubjectForm } from "../_components/subject-form";
import { createSubject } from "@/core/subject";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.subject');
    return { title: t('actions.add') };
}

const AddSubjectPage = async () => {
    const t = await getTranslations('entities.subject');
    
    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
            </div>
            <div>
                <SubjectForm
                    crudMode="add"
                    formAction={createSubject}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                    }}
                />
            </div>
        </div>
    )
}

export default AddSubjectPage;