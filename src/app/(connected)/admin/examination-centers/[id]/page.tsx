import { Metadata } from "next";

import { fetchExaminationCenterById } from "@/db/queries/examination-center";

export const metadata: Metadata = {
    title: "Détails du centre d'examen"
}

interface ExaminationCenterDetailPageProps {
    params: {
        id: string;
    }
}

const ExaminationCenterDetailPage = async ({ params }: ExaminationCenterDetailPageProps) => {
    const { id } = params;

    const exminationCenter = await fetchExaminationCenterById(id);
    
    return (
        <div>
            <h1>Détails du centre d&apos;examen</h1>
            <p>Description : {exminationCenter?.description}</p>
        </div>
    )
}

export default ExaminationCenterDetailPage;