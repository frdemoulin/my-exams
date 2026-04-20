import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DiplomaForm } from "../_components/diploma-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
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
