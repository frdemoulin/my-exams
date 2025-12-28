import { Metadata } from "next";
import { redirect } from "next/navigation";

import { fetchCurriculumById } from "@/core/curriculum";
import CurriculumForm from "../../_components/curriculum-form";
import getSession from "@/lib/auth/get-session";
import { fetchTeachingsOptions } from "@/core/teaching/teaching.queries";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.curriculum');
    return { title: t('actions.edit') };
}

interface EditCurriculumPageProps {
    params: Promise<{
        id: string;
    }>;
}

const EditCurriculumPage = async ({ params }: EditCurriculumPageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums");
    }

    const { id } = await params;
    const curriculum = await fetchCurriculumById(id);

    if (!curriculum) {
        redirect("/admin/curriculums");
    }

    const teachings = await fetchTeachingsOptions({ includeInactive: true });
    const t = await getTranslations('entities.curriculum');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <CurriculumForm
                    crudMode="edit"
                    initialData={{
                        id: curriculum.id,
                        longDescription: curriculum.longDescription,
                        shortDescription: curriculum.shortDescription ?? undefined,
                        startDate: curriculum.startDate,
                        endDate: curriculum.endDate ?? undefined,
                        teachingIds: curriculum.teachingIds,
                        isActive: curriculum.isActive,
                    }}
                    teachings={teachings}
                />
            </div>
        </div>
    );
};

export default EditCurriculumPage;
