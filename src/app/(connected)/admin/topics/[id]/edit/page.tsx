import { Metadata } from "next";

import { TopicForm } from "../../_components/topic-form";
import { fetchTopicById } from "@/db/queries/topic";
import { updateTopic } from "@/actions/topic/edit-topic";
import { fetchSubjectsOptions } from "@/db/queries/subject";

export const metadata: Metadata = {
    title: "Édition d'un thème",
}

interface TopicEditProps {
    params: {
        id: string;
    };
}

const EditTopicPage = async ({ params }: TopicEditProps) => {
    const { id } = params;

    const topic = await fetchTopicById(id);

    const subjectsSelectedOptions = topic?.subjects.map((subject) => ({
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