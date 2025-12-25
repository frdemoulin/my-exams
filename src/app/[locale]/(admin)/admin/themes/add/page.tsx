import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeForm } from "../_components/theme-form";
import { fetchDomainsOptions } from "@/core/domain";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.theme');
    return { title: t('actions.add') };
}

interface AddThemePageProps {
    searchParams?: {
        domainId?: string;
    };
}

const AddThemePage = async ({ searchParams }: AddThemePageProps) => {
    const domainsOptions = await fetchDomainsOptions();
    const t = await getTranslations('entities.theme');
    const domainId = typeof searchParams?.domainId === "string" ? searchParams.domainId : undefined;

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
                        domainId,
                    }}
                    options={domainsOptions}
                />
            </div>
        </div>
    )
}

export default AddThemePage;
