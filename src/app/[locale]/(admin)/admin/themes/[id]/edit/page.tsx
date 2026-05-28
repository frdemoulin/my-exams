import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ThemeForm } from "../../_components/theme-form";
import { fetchThemeById } from "@/core/theme";
import { fetchDomainsOptions } from "@/core/domain";
import { fetchChapterOptions } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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

    const [theme, domainsOptions, chapterOptions] = await Promise.all([
        fetchThemeById(id),
        fetchDomainsOptions({ includeInactive: true }),
        fetchChapterOptions(),
    ]);
    const t = await getTranslations('entities.theme');

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.edit')} className="mb-6" />
            <div>
                <ThemeForm
                    crudMode="edit"
                    initialData={{
                        id,
                        title: theme?.title ?? "",
                        shortTitle: theme?.shortTitle ?? "",
                        domainIds: theme?.domainIds ?? [],
                        chapterIds: theme?.chapterIds ?? [],
                    }}
                    domainOptions={domainsOptions}
                    chapterOptions={chapterOptions}
                />
            </div>
        </div>
    )
}

export default EditThemePage;
