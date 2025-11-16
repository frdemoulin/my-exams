import { Metadata } from "next";

import { fetchSubjectById } from "@/db/queries/subject";

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
            <h1>Détails de la filière</h1>
            <p>Description courte : {subject?.shortDescription}</p>
            <p>Description longue : {subject?.longDescription}</p>
        </div>
    )
}

export default SubjectDetailPage;