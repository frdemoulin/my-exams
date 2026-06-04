import { Metadata } from "next";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { notFound } from "next/navigation";

import { fetchThemeById } from "@/core/theme";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    if (!theme) notFound();

    const domainLabels = (theme?.domains ?? [])
        .map((domain) => domain.longDescription)
        .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));
    const chapterLabels = (theme?.chapters ?? [])
        .map((chapter) => chapter.title)
        .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));
    
    return (
        <div className="w-full p-6">
            <AdminPageHeading
                title={`Détail du thème ${theme.title}`}
                description="Consulte les informations du thème et ses rattachements pédagogiques."
                actions={
                    <>
                        <Button asChild variant="outline">
                            <Link href="/admin/themes">Retour</Link>
                        </Button>
                        <Button asChild variant="warning" size="icon" aria-label="Éditer le thème">
                            <Link href={`/admin/themes/${theme.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                            </Link>
                        </Button>
                    </>
                }
            />

            <div className="mt-6 grid gap-4">
                <Card>
                    <CardHeader className="mb-2">
                        <CardTitle>Informations du thème</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <Info label="Titre" value={theme.title} />
                            <Info label="Titre court" value={theme.shortTitle ?? "—"} />
                            <Info label="Domaines associés" value={String(domainLabels.length)} />
                            <Info label="Chapitres associés" value={String(chapterLabels.length)} />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="mb-2">
                        <CardTitle>Relations pédagogiques</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-muted-foreground">Domaines</h3>
                            {theme.domains.length === 0 ? (
                                <p className="text-sm text-muted-foreground">Aucun domaine associé.</p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {theme.domains.map((domain) => (
                                        <Link key={domain.id} href={`/admin/domains/${domain.id}`}>
                                            <Badge variant="outline" className="hover:bg-muted">
                                                {domain.longDescription}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-muted-foreground">Chapitres</h3>
                            {theme.chapters.length === 0 ? (
                                <p className="text-sm text-muted-foreground">Aucun chapitre associé.</p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {theme.chapters.map((chapter) => (
                                        <Link key={chapter.id} href={`/admin/chapters/${chapter.id}`}>
                                            <Badge variant="outline" className="hover:bg-muted">
                                                {chapter.title}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const Info = ({ label, value }: { label: string; value: string }) => (
    <div>
        <h3 className="text-sm font-semibold text-muted-foreground">{label}</h3>
        <p className="text-sm">{value}</p>
    </div>
);

export default ThemeDetailPage;
