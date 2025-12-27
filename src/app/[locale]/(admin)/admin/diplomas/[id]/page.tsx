import { Metadata } from "next";

import { fetchDiplomaById } from "@/core/diploma";

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
            <h1 className="text-lg font-semibold md:text-2xl">Détails du diplôme</h1>
            <p>Description courte : {diploma?.shortDescription}</p>
            <p>Description longue : {diploma?.longDescription}</p>
            <p>Statut : {diploma?.isActive ? "Actif" : "Inactif"}</p>
        </div>
    )
}

export default DiplomaDetailPage;
