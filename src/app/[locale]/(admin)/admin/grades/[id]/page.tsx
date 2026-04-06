import { Metadata } from "next";

import { fetchGradeById } from "@/core/grade";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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
            <AdminPageHeading title="Détails du niveau" className="mb-4" />
            <p>Description courte : {grade?.shortDescription}</p>
            <p>Description longue : {grade?.longDescription}</p>
        </div>
    )
}

export default GradeDetailPage;
