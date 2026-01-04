import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CorrectionSourceForm } from "../_components/correction-source-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("entities.correctionSource");
    return { title: t("actions.add") };
}

const AddCorrectionSourcePage = async () => {
    const t = await getTranslations("entities.correctionSource");

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t("actions.add")}</h1>
            </div>
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
