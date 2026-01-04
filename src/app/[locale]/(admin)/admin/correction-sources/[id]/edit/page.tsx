import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CorrectionSourceForm } from "../../_components/correction-source-form";
import { fetchCorrectionSourceById } from "@/core/correction-source";

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
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t("actions.edit")}</h1>
            </div>
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
