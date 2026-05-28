import { Metadata } from "next";

import { fetchThemeById } from "@/core/theme";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
    title: "Détails du thème"
}

interface ThemeDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const ThemeDetailPage = async ({ params }: ThemeDetailPageProps) => {
    const { id } = await params;

    const theme = await fetchThemeById(id);
    const domainLabels = (theme?.domains ?? [])
        .map((domain) => domain.longDescription)
        .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));
    const chapterLabels = (theme?.chapters ?? [])
        .map((chapter) => chapter.title)
        .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));
    
    return (
        <div>
            <AdminPageHeading title="Détails du thème" className="mb-4" />
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Titre : {theme?.title ?? "Aucun"}</p>
                <p>Titre court : {theme?.shortTitle ?? "Aucun"}</p>
                <p>Domaines associés : {domainLabels.length > 0 ? domainLabels.join(", ") : "Aucun"}</p>
                <p>Chapitres associés : {chapterLabels.length > 0 ? chapterLabels.join(", ") : "Aucun"}</p>
            </div>
        </div>
    )
}

export default ThemeDetailPage;
