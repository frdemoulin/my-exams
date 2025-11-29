import { Metadata } from "next";

import { fetchSubjectById } from "@/core/subject";

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
            <h1 className="text-lg font-semibold md:text-2xl">Détails de la matière</h1>
            <p>Description courte : {subject?.shortDescription}</p>
            <p>Description longue : {subject?.longDescription}</p>
        </div>
    )
}

export default SubjectDetailPage;