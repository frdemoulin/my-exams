import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DivisionForm } from "../_components/division-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.division');
    return { title: t('actions.add') };
}

const AddDivisionPage = async () => {
    const t = await getTranslations('entities.division');
    
    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
            <div>
                <DivisionForm
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

export default AddDivisionPage;
