import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GradeForm } from "../_components/grade-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.grade');
    return { title: t('actions.add') };
}

const AddGradePage = async () => {
    const t = await getTranslations('entities.grade');
    
    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
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
