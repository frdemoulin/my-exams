import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TopicForm } from "../_components/topic-form";
import { createTopic } from "@/core/topic";
import { fetchSubjectsOptions } from "@/core/subject";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.topic');
    return { title: t('actions.add') };
}

const AddTopicPage = async () => {
    const subjectsOptions = await fetchSubjectsOptions();
    const t = await getTranslations('entities.topic');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
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