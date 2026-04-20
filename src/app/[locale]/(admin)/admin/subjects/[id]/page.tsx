import { Metadata } from "next";

import { fetchSubjectById } from "@/core/subject";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
    title: "Détails de la filière"
}

interface SubjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const SubjectDetailPage = async ({ params }: SubjectDetailPageProps) => {
    const { id } = await params;

    const subject = await fetchSubjectById(id);
    
    return (
        <div>
            <AdminPageHeading title="Détails de la matière" className="mb-4" />
            <p>Description courte : {subject?.shortDescription}</p>
            <p>Description longue : {subject?.longDescription}</p>
            <p>Statut : {subject?.isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default SubjectDetailPage;
