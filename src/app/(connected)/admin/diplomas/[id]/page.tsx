import { Metadata } from "next";

import { fetchDiplomaById } from "@/db/queries/diploma";

export const metadata: Metadata = {
    title: "Détails du diplôme"
}

interface DiplomaDetailPageProps {
    params: {
        id: string;
    }
}

const DiplomaDetailPage = async ({ params }: DiplomaDetailPageProps) => {
    const { id } = params;

    const diploma = await fetchDiplomaById(id);
    
    return (
        <div>
            <h1>Détails du diplôme</h1>
            <p>Description courte : {diploma?.shortDescription}</p>
            <p>Description longue : {diploma?.longDescription}</p>
        </div>
    )
}

export default DiplomaDetailPage;