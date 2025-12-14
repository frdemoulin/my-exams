import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { fetchCurriculumById } from "@/core/curriculum";
import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('entities.curriculum');
    return { title: t('actions.view') };
}

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

    const t = await getTranslations('entities.curriculum');
    const common = await getTranslations('common');

    const startPeriod = new Date(curriculum.startDate).toLocaleDateString('fr-FR', { 
        month: 'long', 
        year: 'numeric' 
    });
    const endPeriod = curriculum.endDate
        ? new Date(curriculum.endDate).toLocaleDateString('fr-FR', { 
            month: 'long', 
            year: 'numeric' 
          })
        : "—";

    return (
        <div className="w-full p-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl mb-6">{t('actions.view')}</h1>
            </div>
            <div className="mb-6 flex items-center justify-end">
                <div className="flex gap-2">
                    <Button asChild>
                        <Link href={`/admin/curriculums/${curriculum.id}/edit`}>{common('edit')}</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/admin/curriculums">{common('back')}</Link>
                    </Button>
                </div>
            </div>

            <div className="space-y-6 rounded-lg border p-6">
                {/* Name and Status */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Nom</p>
                        <p className="text-lg font-semibold">{curriculum.longDescription}</p>
                    </div>
                    <Badge variant={curriculum.isActive ? "default" : "secondary"}>
                        {curriculum.isActive ? "Actif" : "Inactif"}
                    </Badge>
                </div>

                {/* Description */}
                {curriculum.shortDescription && (
                    <div>
                        <p className="text-sm text-muted-foreground">Description</p>
                        <p className="mt-1">{curriculum.shortDescription}</p>
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
                                <span className="font-medium">{teaching.longDescription}</span>
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
