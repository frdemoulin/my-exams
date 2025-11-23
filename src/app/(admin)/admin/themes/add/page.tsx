import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeForm } from "../_components/theme-form";
import { createTheme } from "@/core/theme";
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
                <h1 className="text-2xl font-bold text-blue-700 my-4">{t('actions.add')}</h1>
            </div>
            <div>
                <ThemeForm
                    crudMode="add"
                    formAction={createTheme}
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