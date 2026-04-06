import { Metadata } from "next";

import { fetchDiplomaById } from "@/core/diploma";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
    title: "Détails du diplôme"
}

interface DiplomaDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const DiplomaDetailPage = async ({ params }: DiplomaDetailPageProps) => {
    const { id } = await params;

    const diploma = await fetchDiplomaById(id);
    
    return (
        <div>
            <AdminPageHeading title="Détails du diplôme" className="mb-4" />
            <p>Description courte : {diploma?.shortDescription}</p>
            <p>Description longue : {diploma?.longDescription}</p>
            <p>Statut : {diploma?.isActive ? "Actif" : "Inactif"}</p>
        </div>
    )
}

export default DiplomaDetailPage;
