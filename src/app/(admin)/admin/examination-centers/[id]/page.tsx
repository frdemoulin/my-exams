import { Metadata } from "next";

import { fetchExaminationCenterById } from "@/core/examination-center";

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

    const exminationCenter = await fetchExaminationCenterById(id);
    
    return (
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Détails du centre d&apos;examen</h1>
            <p>Description : {exminationCenter?.description}</p>
        </div>
    )
}

export default ExaminationCenterDetailPage;