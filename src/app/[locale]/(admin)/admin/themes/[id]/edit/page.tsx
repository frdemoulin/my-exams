import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ThemeForm } from "../../_components/theme-form";
import { fetchThemeById } from "@/core/theme";
import { fetchChaptersOptions } from "@/core/chapter";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.theme');
    return { title: t('actions.edit') };
}

interface ThemeEditProps {
    params: Promise<{
        id: string;
    }>;
}

const EditThemePage = async ({ params }: ThemeEditProps) => {
    const { id } = await params;

    const theme = await fetchThemeById(id);
    
    const chaptersOptions = await fetchChaptersOptions();
    const t = await getTranslations('entities.theme');

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.edit')}</h1>
            </div>
            <div>
                <ThemeForm
                    crudMode="edit"
                    initialData={{
                        id,
                        longDescription: theme?.longDescription ?? "",
                        shortDescription: theme?.shortDescription ?? "",
                        chapterId: theme?.chapterId,
                    }}
                    options={chaptersOptions}
                />
            </div>
        </div>
    )
}

export default EditThemePage;