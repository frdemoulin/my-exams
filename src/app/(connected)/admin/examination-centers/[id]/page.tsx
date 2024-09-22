import { Metadata } from "next";

import { fetchArtistById } from "@/db/queries/artist";
import { Release } from "@prisma/client";
import { ArtistWithReleases } from "@/types/artist";

export const metadata: Metadata = {
    title: "Détails de l'artiste"
}

interface ArtistDetailPageProps {
    params: {
        id: string;
    }
}

const ArtistDetailPage = async ({ params }: ArtistDetailPageProps) => {
    const { id } = params;

    const artist = await fetchArtistById(id);
    
    return (
        <div>
            <h1>Détails de l'artiste</h1>
            <p>Nom : {artist?.name}</p>
            <p>Nom court : {artist?.shortName}</p>
            {artist && artist.releases.map((release: Release) => (
                <ul key={release.id}>
                    <li>Titre de la sortie : {release.title}</li>
                    <li>Année de sortie : {release.releaseDate.getFullYear()}</li>
                </ul>
            ))}
        </div>
    )
}

export default ArtistDetailPage;