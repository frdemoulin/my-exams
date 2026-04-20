import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { GradeForm } from "../../_components/grade-form";
import { fetchGradeById } from "@/core/grade";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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
            <AdminPageHeading title={t('actions.edit')} className="mb-6" />
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
