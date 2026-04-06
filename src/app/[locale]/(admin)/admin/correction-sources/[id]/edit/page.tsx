import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CorrectionSourceForm } from "../../_components/correction-source-form";
import { fetchCorrectionSourceById } from "@/core/correction-source";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("entities.correctionSource");
    return { title: t("actions.edit") };
}

interface CorrectionSourceEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditCorrectionSourcePage = async ({ params }: CorrectionSourceEditProps) => {
    const { id } = await params;

    const correctionSource = await fetchCorrectionSourceById(id);
    const t = await getTranslations("entities.correctionSource");

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t("actions.edit")} className="mb-6" />
            <div>
                <CorrectionSourceForm
                    crudMode="edit"
                    initialData={{
                        id,
                        label: correctionSource?.label ?? "",
                        isActive: correctionSource?.isActive ?? true,
                    }}
                />
            </div>
        </div>
    );
};

export default EditCorrectionSourcePage;
