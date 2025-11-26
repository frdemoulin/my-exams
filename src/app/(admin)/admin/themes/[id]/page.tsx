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
            <h1>Détails du thème</h1>
            <p>Description courte : {theme?.shortDescription}</p>
            <p>Description longue : {theme?.longDescription}</p>
        </div>
    )
}

export default ThemeDetailPage;