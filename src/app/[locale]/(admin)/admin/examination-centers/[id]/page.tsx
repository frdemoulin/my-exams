import { Metadata } from "next";

import { fetchExaminationCenterById } from "@/core/examination-center";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
    title: "Détails du centre d'examen"
}

interface ExaminationCenterDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const ExaminationCenterDetailPage = async ({ params }: ExaminationCenterDetailPageProps) => {
    const { id } = await params;

    const examinationCenter = await fetchExaminationCenterById(id);
    
    return (
        <div>
            <AdminPageHeading title="Détails du centre d'examen" className="mb-4" />
            <p>Description : {examinationCenter?.description}</p>
            <p>Statut : {examinationCenter?.isActive ? "Actif" : "Inactif"}</p>
        </div>
    )
}

export default ExaminationCenterDetailPage;
