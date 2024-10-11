import { Metadata } from "next";
import { TopicForm } from "../_components/topic-form";
import { createTopic } from "@/actions/topic/create-topic";

export const metadata: Metadata = {
    title: "Ajout d'un thème",
}

const AddTopicPage = () => {
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
                    }}
                />
            </div>
        </div>
    )
}

export default AddTopicPage;