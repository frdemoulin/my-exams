import { Metadata } from "next";

import { TopicForm } from "../../_components/topic-form";
import { fetchTopicById } from "@/core/topic";
import { updateTopic } from "@/core/topic";
import { fetchSubjectsOptions } from "@/core/subject";

export const metadata: Metadata = {
    title: "Édition d'un thème",
}

interface TopicEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditTopicPage = async ({ params }: TopicEditProps) => {
    const { id } = await params;

    const topic = await fetchTopicById(id);

    const subjectsSelectedOptions = topic?.subjects.map((subject: any) => ({
        label: subject.longDescription,
        value: subject.id,
    }));
    
    const subjectsOptions = await fetchSubjectsOptions();

    const updateTopicAction = updateTopic.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;un thème</h1>
            </div>
            <div>
                <TopicForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: topic?.longDescription ?? "",
                        shortDescription: topic?.shortDescription ?? "",
                        subjectsSelectedOptions: subjectsSelectedOptions,
                    }}
                    options={subjectsOptions}
                    formAction={updateTopicAction}
                />
            </div>
        </div>
    )
}

export default EditTopicPage;