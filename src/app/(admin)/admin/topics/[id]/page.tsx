import { Metadata } from "next";

import { fetchTopicById } from "@/core/topic";

export const metadata: Metadata = {
    title: "Détails du thème"
}

interface TopicDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const TopicDetailPage = async ({ params }: TopicDetailPageProps) => {
    const { id } = await params;

    const topic = await fetchTopicById(id);
    
    return (
        <div>
            <h1>Détails du thème</h1>
            <p>Description courte : {topic?.shortDescription}</p>
            <p>Description longue : {topic?.longDescription}</p>
        </div>
    )
}

export default TopicDetailPage;