import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SubjectForm } from "../_components/subject-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.subject');
    return { title: t('actions.add') };
}

const AddSubjectPage = async () => {
    const t = await getTranslations('entities.subject');
    
    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
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
