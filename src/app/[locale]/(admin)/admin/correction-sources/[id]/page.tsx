import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { fetchCorrectionSourceById } from "@/core/correction-source";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("entities.correctionSource");
    return { title: t("actions.view") };
}

interface CorrectionSourceDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const CorrectionSourceDetailPage = async ({ params }: CorrectionSourceDetailPageProps) => {
    const { id } = await params;

    const correctionSource = await fetchCorrectionSourceById(id);

    return (
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Détails de la source de correction</h1>
            <p>Nom : {correctionSource?.label}</p>
            <p>Statut : {correctionSource?.isActive ? "Actif" : "Inactif"}</p>
        </div>
    );
};

export default CorrectionSourceDetailPage;
