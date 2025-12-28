import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ExaminationCenterForm } from "../../_components/examination-center-form";
import { fetchExaminationCenterById } from "@/core/examination-center";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.examinationCenter');
    return { title: t('actions.edit') };
}

interface ExaminationCenterEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditExaminationCenterPage = async ({ params }: ExaminationCenterEditProps) => {
    const { id } = await params;

    const examinationCenter = await fetchExaminationCenterById(id);

    const t = await getTranslations('entities.examinationCenter');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <ExaminationCenterForm
                    crudMode="edit"
                    initialData={{
                        id,
                        description: examinationCenter?.description ?? "",
                        isActive: examinationCenter?.isActive ?? true,
                    }}
                />
            </div>
        </div>
    )
}

export default EditExaminationCenterPage;
