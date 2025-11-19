import { Metadata } from "next";
import { TopicForm } from "../_components/topic-form";
import { createTopic } from "@/core/topic";
import { fetchSubjectsOptions } from "@/core/subject";

export const metadata: Metadata = {
    title: "Ajout d'un thème",
}

const AddTopicPage = async () => {
    const subjectsOptions = await fetchSubjectsOptions();

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">Ajout d&apos;un thème</h1>
            </div>
            <div>
                <TopicForm
                    crudMode="add"
                    formAction={createTopic}
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                        subjectsSelectedOptions: undefined,
                    }}
                    options={subjectsOptions}
                />
            </div>
        </div>
    )
}

export default AddTopicPage;