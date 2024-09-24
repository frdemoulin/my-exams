import { Metadata } from "next";

import { fetchGradeById } from "@/db/queries/grade";

export const metadata: Metadata = {
    title: "Détails du diplôme"
}

interface GradeDetailPageProps {
    params: {
        id: string;
    }
}

const GradeDetailPage = async ({ params }: GradeDetailPageProps) => {
    const { id } = params;

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