import { Metadata } from "next";

import { fetchTopicById } from "@/db/queries/topic";

export const metadata: Metadata = {
    title: "Détails du thème"
}

interface TopicDetailPageProps {
    params: {
        id: string;
    }
}

const TopicDetailPage = async ({ params }: TopicDetailPageProps) => {
    const { id } = params;

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