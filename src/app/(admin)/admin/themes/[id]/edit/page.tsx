import { Metadata } from "next";

import { ThemeForm } from "../../_components/theme-form";
import { fetchThemeById } from "@/core/theme";
import { updateTheme } from "@/core/theme";
import { fetchChaptersOptions } from "@/core/chapter";

export const metadata: Metadata = {
    title: "Édition d'un thème",
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

    const updateThemeAction = updateTheme.bind(null, id);

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="my-4 text-2xl font-bold text-blue-700">Édition d&apos;un thème</h1>
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
                    formAction={updateThemeAction}
                />
            </div>
        </div>
    )
}

export default EditThemePage;