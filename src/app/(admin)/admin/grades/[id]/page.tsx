import { Metadata } from "next";

import { fetchGradeById } from "@/core/grade";

export const metadata: Metadata = {
    title: "Détails du diplôme"
}

interface GradeDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const GradeDetailPage = async ({ params }: GradeDetailPageProps) => {
    const { id } = await params;

    const grade = await fetchGradeById(id);
    
    return (
        <div>
            <h1>Détails du diplôme</h1>
            <p>Description courte : {grade?.shortDescription}</p>
            <p>Description longue : {grade?.longDescription}</p>
        </div>
    )
}

export default GradeDetailPage;