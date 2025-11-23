import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

import { fetchCurriculumById } from "@/core/curriculum";
import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Détails du programme",
};

interface CurriculumPageProps {
    params: Promise<{
        id: string;
    }>;
}

const CurriculumPage = async ({ params }: CurriculumPageProps) => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/admin/curriculums");
    }

    const { id } = await params;
    const curriculum = await fetchCurriculumById(id);

    if (!curriculum) {
        redirect("/admin/curriculums");
    }

    const startPeriod = curriculum.startMonth
        ? `${curriculum.startMonth}/${curriculum.startYear}`
        : curriculum.startYear;
    const endPeriod = curriculum.endYear
        ? curriculum.endMonth
            ? `${curriculum.endMonth}/${curriculum.endYear}`
            : curriculum.endYear
        : "—";

    return (
        <div className="w-full p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Détails du programme</h1>
                <div className="flex gap-2">
                    <Button asChild>
                        <Link href={`/admin/curriculums/${curriculum.id}/edit`}>Éditer</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/admin/curriculums">Retour</Link>
                    </Button>
                </div>
            </div>

            <div className="space-y-6 rounded-lg border p-6">
                {/* Name and Status */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Nom</p>
                        <p className="text-lg font-semibold">{curriculum.name}</p>
                    </div>
                    <Badge variant={curriculum.isActive ? "default" : "secondary"}>
                        {curriculum.isActive ? "Actif" : "Inactif"}
                    </Badge>
                </div>

                {/* Description */}
                {curriculum.description && (
                    <div>
                        <p className="text-sm text-muted-foreground">Description</p>
                        <p className="mt-1">{curriculum.description}</p>
                    </div>
                )}

                {/* Period */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">Période de début</p>
                        <p className="mt-1">{startPeriod}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Période de fin</p>
                        <p className="mt-1">{endPeriod}</p>
                    </div>
                </div>

                {/* Associated Courses */}
                <div>
                    <p className="text-sm text-muted-foreground mb-3">
                        Enseignements associés ({curriculum.teachings.length})
                    </p>
                    <div className="space-y-2">
                        {curriculum.teachings.map((teaching) => (
                            <div
                                key={teaching.id}
                                className="flex items-center gap-2 p-2 bg-muted rounded"
                            >
                                <Badge variant="outline">{teaching.grade.shortDescription}</Badge>
                                <span className="font-medium">{teaching.name}</span>
                                <span className="text-sm text-muted-foreground">
                                    ({teaching.subject.shortDescription})
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Metadata */}
                <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-muted-foreground">Créé le</p>
                            <p>{formatDateTime(curriculum.createdAt)}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Modifié le</p>
                            <p>{formatDateTime(curriculum.updatedAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumPage;
