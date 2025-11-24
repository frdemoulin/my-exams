import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DivisionForm } from "../../_components/division-form";
import { fetchDivisionById } from "@/core/division";

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
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">{t('actions.edit')}</h1>
            </div>
            <div>
                <DivisionForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: division?.longDescription ?? "",
                        shortDescription: division?.shortDescription ?? "",
                    }}
                />
            </div>
        </div>
    )
}

export default EditDivisionPage;