import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeForm } from "../_components/theme-form";
import { fetchDomainsOptions } from "@/core/domain";
import { fetchChapterOptions } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.theme');
    return { title: t('actions.add') };
}

interface AddThemePageProps {
    searchParams?: Promise<{
        domainId?: string;
        returnTo?: string;
    }>;
}

const AddThemePage = async ({ searchParams }: AddThemePageProps) => {
    const [domainsOptions, chapterOptions] = await Promise.all([
        fetchDomainsOptions({ includeInactive: true }),
        fetchChapterOptions(),
    ]);
    const t = await getTranslations('entities.theme');
    const resolvedSearchParams = searchParams ? await searchParams : undefined;
    const domainId = typeof resolvedSearchParams?.domainId === "string"
        ? resolvedSearchParams.domainId
        : undefined;
    const returnTo = typeof resolvedSearchParams?.returnTo === "string"
        ? resolvedSearchParams.returnTo
        : "/admin/themes";

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={t('actions.add')} className="mb-6" />
            <div>
                <ThemeForm
                    crudMode="add"
                    initialData={{
                        title: "",
                        shortTitle: "",
                        domainIds: domainId ? [domainId] : [],
                        chapterIds: [],
                    }}
                    domainOptions={domainsOptions}
                    chapterOptions={chapterOptions}
                    cancelHref={returnTo}
                    submitRedirectTo={returnTo}
                    revalidatePaths={[returnTo]}
                />
            </div>
        </div>
    )
}

export default AddThemePage;
