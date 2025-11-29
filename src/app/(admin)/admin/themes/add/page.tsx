import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeForm } from "../_components/theme-form";
import { fetchChaptersOptions } from "@/core/chapter";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.theme');
    return { title: t('actions.add') };
}

const AddThemePage = async () => {
    const chaptersOptions = await fetchChaptersOptions();
    const t = await getTranslations('entities.theme');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.add')}</h1>
            </div>
            <div>
                <ThemeForm
                    crudMode="add"
                    initialData={{
                        shortDescription: "",
                        longDescription: "",
                        chapterId: undefined,
                    }}
                    options={chaptersOptions}
                />
            </div>
        </div>
    )
}

export default AddThemePage;