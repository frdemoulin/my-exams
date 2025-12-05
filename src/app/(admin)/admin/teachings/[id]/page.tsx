import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

import { fetchTeachingById } from "@/core/teaching";
import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Détails de l'enseignement",
};

interface TeachingPageProps {
    params: Promise<{
        id: string;
    }>;
}

const TeachingPage = async ({ params }: TeachingPageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/teachings");
    }

    const { id } = await params;
    const teaching = await fetchTeachingById(id);

    if (!teaching) {
        redirect("/admin/teachings");
    }

    return (
        <div className="w-full p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-semibold md:text-2xl">Détails de l&apos;enseignement</h1>
                <div className="space-x-2">
                    <Button asChild variant="outline">
                        <Link href="/admin/teachings">Retour</Link>
                    </Button>
                    <Button asChild>
                        <Link href={`/admin/teachings/${teaching.id}/edit`}>Éditer</Link>
                    </Button>
                </div>
            </div>

            <div className="bg-card rounded-lg border p-6 space-y-4">
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Nom de l&apos;enseignement</label>
                    <p className="text-lg">{teaching.longDescription}</p>
                </div>

                {teaching.shortDescription && (
                    <div>
                        <label className="text-sm font-medium text-muted-foreground">Nom court</label>
                        <p className="text-lg">{teaching.shortDescription}</p>
                    </div>
                )}

                <div>
                    <label className="text-sm font-medium text-muted-foreground">Niveau</label>
                    <p className="text-lg">{teaching.grade.shortDescription} - {teaching.grade.longDescription}</p>
                </div>

                <div>
                    <label className="text-sm font-medium text-muted-foreground">Matière</label>
                    <p className="text-lg">{teaching.subject.longDescription}</p>
                </div>

                <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <label className="text-muted-foreground">Date de création</label>
                            <p>{formatDateTime(teaching.createdAt)}</p>
                        </div>
                        <div>
                            <label className="text-muted-foreground">Dernière modification</label>
                            <p>{formatDateTime(teaching.updatedAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingPage;
