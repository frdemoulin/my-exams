import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CorrectionSourceForm } from "../_components/correction-source-form";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("entities.correctionSource");
    return { title: t("actions.add") };
}

const AddCorrectionSourcePage = async () => {
    const t = await getTranslations("entities.correctionSource");

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t("actions.add")} className="mb-6" />
            <div>
                <CorrectionSourceForm
                    crudMode="add"
                    initialData={{
                        label: "",
                        isActive: true,
                    }}
                />
            </div>
        </div>
    );
};

export default AddCorrectionSourcePage;
