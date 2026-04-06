import { Metadata } from "next";

import { fetchDivisionById } from "@/core/division";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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
            <AdminPageHeading title="Détails de la filière" className="mb-4" />
            <p>Description courte : {division?.shortDescription}</p>
            <p>Description longue : {division?.longDescription}</p>
            <p>Statut : {division?.isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default DivisionDetailPage;
