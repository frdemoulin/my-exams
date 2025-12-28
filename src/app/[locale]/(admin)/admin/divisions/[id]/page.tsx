import { Metadata } from "next";

import { fetchDivisionById } from "@/core/division";

export const metadata: Metadata = {
    title: "Détails de la filière"
}

interface DivisionDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const DivisionDetailPage = async ({ params }: DivisionDetailPageProps) => {
    const { id } = await params;

    const division = await fetchDivisionById(id);
    
    return (
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Détails de la filière</h1>
            <p>Description courte : {division?.shortDescription}</p>
            <p>Description longue : {division?.longDescription}</p>
            <p>Statut : {division?.isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default DivisionDetailPage;
