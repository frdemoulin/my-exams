import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DiplomaForm } from "../../_components/diploma-form";
import { fetchDiplomaById } from "@/core/diploma";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.diploma');
    return { title: t('actions.edit') };
}

interface DiplomaEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditDiplomaPage = async ({ params }: DiplomaEditProps) => {
    const { id } = await params;

    const diploma = await fetchDiplomaById(id);

    if (!diploma) {
        notFound();
    }

    const t = await getTranslations('entities.diploma');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">{t('actions.edit')}</h1>
            </div>
            <div>
                <DiplomaForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: diploma.longDescription ?? "",
                        shortDescription: diploma.shortDescription ?? "",
                    }}
                />
            </div>
        </div>
    )
}

export default EditDiplomaPage;