import { Metadata } from "next";

import { fetchThemeById } from "@/core/theme";

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
    
    return (
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Détails du thème</h1>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Titre : {theme?.title ?? "Aucun"}</p>
                <p>Description courte : {theme?.shortDescription ?? "Aucune"}</p>
                <p>Description longue : {theme?.longDescription ?? "Aucune"}</p>
            </div>
            <div className="mt-4 rounded-lg border border-border bg-card p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Description (guidage admin)</p>
                <p className="mt-1 text-base text-foreground">
                    {theme?.description ? theme.description : "Pas encore de description détaillée pour ce thème."}
                </p>
            </div>
        </div>
    )
}

export default ThemeDetailPage;
