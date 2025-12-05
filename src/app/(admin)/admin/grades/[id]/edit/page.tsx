import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { GradeForm } from "../../_components/grade-form";
import { fetchGradeById } from "@/core/grade";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.grade');
    return { title: t('actions.edit') };
}

interface GradeEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditGradePage = async ({ params }: GradeEditProps) => {
    const { id } = await params;

    const grade = await fetchGradeById(id);

    if (!grade) {
        notFound();
    }

    const t = await getTranslations('entities.grade');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <GradeForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: grade.longDescription ?? "",
                        shortDescription: grade.shortDescription ?? "",
                    }}
                />
            </div>
        </div>
    )
}

export default EditGradePage;