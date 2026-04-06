import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DivisionForm } from "../../_components/division-form";
import { fetchDivisionById } from "@/core/division";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.division');
    return { title: t('actions.edit') };
}

interface DivisionEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditDivisionPage = async ({ params }: DivisionEditProps) => {
    const { id } = await params;

    const division = await fetchDivisionById(id);

    const t = await getTranslations('entities.division');

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.edit')} className="mb-6" />
            <div>
                <DivisionForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: division?.longDescription ?? "",
                        shortDescription: division?.shortDescription ?? "",
                        isActive: division?.isActive ?? true,
                    }}
                />
            </div>
        </div>
    )
}

export default EditDivisionPage;
