import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExaminationCenterForm } from "../_components/examination-center-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examinationCenter');
    return { title: t('actions.add') };
}

const AddExaminationCenterPage = async () => {
    const t = await getTranslations('entities.examinationCenter');
    
    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
            <div>
                <ExaminationCenterForm
                    crudMode="add"
                    initialData={{
                        description: "",
                        isActive: true,
                    }}
                />
            </div>
        </div>
    )
}

export default AddExaminationCenterPage;
