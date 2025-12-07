import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Scissors, Pencil } from "lucide-react";

import { fetchExamPaperById } from "@/core/exam-paper";
import getSession from "@/lib/auth/get-session";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppBreadcrumb } from "@/components/shared/app-breadcrumb";
import { DeleteExerciseButton } from "./_components/delete-exercise-button";
import { DeleteAllExercisesButton } from "./_components/delete-all-exercises-button";
import prisma from "@/lib/db/prisma";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const t = await getTranslations('entities.examPaper');
    return { title: t('actions.view') };
}

const ViewExamPaperPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect(`/api/auth/signin?callbackUrl=/admin/exam-papers/${id}`);
    }

    const examPaper = await fetchExamPaperById(id);

    if (!examPaper) {
        redirect("/admin/exam-papers");
    }

    // Récupérer les exercices de ce sujet
    const exercises = await prisma.exercise.findMany({
        where: { examPaperId: id },
        orderBy: { exerciseNumber: 'asc' },
    });

    // Récupérer tous les thèmes référencés
    const themeIds = [...new Set(exercises.flatMap(ex => ex.themeIds))];
    const themes = themeIds.length > 0 
        ? await prisma.theme.findMany({
            where: { id: { in: themeIds } },
        })
        : [];

    // Mapper les thèmes aux exercices
    const exercisesWithThemes = exercises.map(exercise => ({
        ...exercise,
        themes: themes.filter(theme => exercise.themeIds.includes(theme.id)),
    }));

    const t = await getTranslations('entities.examPaper');
    const sourceLabel = (() => {
        switch (examPaper.source as any) {
            case 'APMEP':
                return 'APMEP';
            case 'LABOLYCEE':
                return 'LaboLycée';
            case 'AUTRE':
                return 'Autre source';
            case 'OFFICIEL':
            default:
                return 'Officiel';
        }
    })();

    return (
        <div className="w-full p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg font-semibold md:text-2xl">{t('actions.view')}</h1>
                <div className="flex items-center gap-2">
                    <Link href={`/admin/exam-papers/${id}/edit`}>
                        <Button variant="secondary" size="icon" aria-label="Éditer le sujet">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href={`/admin/exam-papers/${id}/split`}>
                        <Button>
                            <Scissors className="mr-2 h-4 w-4" />
                            Découper en exercices ({exercisesWithThemes.length})
                        </Button>
                    </Link>
                </div>
            </div>
            <Card>
                <CardHeader className="mb-2">
                    <CardTitle>Informations du sujet</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {examPaper.label && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground">Label</h3>
                                <p className="text-sm">{examPaper.label}</p>
                            </div>
                        )}
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">ID</h3>
                            <p className="text-sm font-mono break-all">{examPaper.id}</p>
                        </div>
                        {examPaper.sessionYear && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground">Année</h3>
                                <p className="text-sm">{examPaper.sessionYear}</p>
                            </div>
                        )}
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Diplôme</h3>
                            <p className="text-sm">{examPaper.diploma.longDescription}</p>
                        </div>
                        {examPaper.division && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground">Filière</h3>
                                <p className="text-sm">{examPaper.division.longDescription}</p>
                            </div>
                        )}
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Niveau</h3>
                            <p className="text-sm">{examPaper.grade.shortDescription}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Enseignement</h3>
                            <p className="text-sm">{examPaper.teaching.longDescription}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Programme</h3>
                            <p className="text-sm">{examPaper.curriculum.shortDescription || examPaper.curriculum.longDescription}</p>
                        </div>
                        {examPaper.examinationCenters && examPaper.examinationCenters.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground">Centre d&apos;examen</h3>
                                <p className="text-sm">
                                    {examPaper.examinationCenters.map((center) => center.description).join(', ')}
                                </p>
                            </div>
                        )}
                        {examPaper.subjectUrl && (
                            <div className="col-span-2 md:col-span-3 space-y-1">
                                <h3 className="text-sm font-semibold text-muted-foreground">Sujet (PDF)</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                    <a 
                                        href={examPaper.subjectUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm text-fg-brand hover:underline break-all"
                                    >
                                        Ouvrir le PDF
                                    </a>
                                    <Badge variant="outline">{sourceLabel}</Badge>
                                    {examPaper.sourceUrl && (
                                        <a
                                            href={examPaper.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-muted-foreground hover:underline"
                                        >
                                            Voir la source
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground break-all">{examPaper.subjectUrl}</p>
                            </div>
                        )}
                        {examPaper.correctionUrl && (
                            <div className="col-span-2 md:col-span-3">
                                <h3 className="text-sm font-semibold text-muted-foreground">Corrigé (URL)</h3>
                                <a 
                                    href={examPaper.correctionUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-fg-brand hover:underline break-all"
                                >
                                    {examPaper.correctionUrl}
                                </a>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Liste des exercices */}
            {exercisesWithThemes.length > 0 && (
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">
                            {exercisesWithThemes.length} exercice{exercisesWithThemes.length > 1 ? 's' : ''}
                        </h2>
                        <DeleteAllExercisesButton examPaperId={id} exerciseCount={exercisesWithThemes.length} />
                    </div>
                    <div className="space-y-4">
                        {exercisesWithThemes.map((exercise) => (
                            <Card key={exercise.id}>
                                <CardHeader>
                                    <div className="flex items-baseline justify-between">
                                        <div className="flex gap-4">
                                            <CardTitle className="text-base">
                                                {(() => {
                                                    const baseTitle = `Exercice ${exercise.exerciseNumber}`;
                                                    const labelPart =
                                                        exercise.label &&
                                                        !exercise.label.trim().toLowerCase().startsWith(baseTitle.toLowerCase())
                                                            ? ` - ${exercise.label}`
                                                            : '';
                                                    return `${baseTitle}${labelPart}`;
                                                })()}
                                            </CardTitle>
                                            <div className="flex gap-2">
                                                {exercise.points && (
                                                    <Badge variant="points">{exercise.points} pts</Badge>
                                                )}
                                                {exercise.estimatedDuration && (
                                                    <Badge variant="duration">{exercise.estimatedDuration} min</Badge>
                                                )}
                                                {exercise.estimatedDifficulty && (
                                                    <Badge variant="difficulty">Difficulté {exercise.estimatedDifficulty}/5</Badge>
                                                )}
                                                <Badge
                                                    variant={
                                                        exercise.enrichmentStatus === 'completed'
                                                            ? 'default'
                                                            : exercise.enrichmentStatus === 'failed'
                                                                ? 'destructive'
                                                                : 'secondary'
                                                    }
                                                >
                                                    {exercise.enrichmentStatus === 'completed' && 'Enrichi'}
                                                    {exercise.enrichmentStatus === 'pending' && 'En attente'}
                                                    {exercise.enrichmentStatus === 'failed' && 'Échec'}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <Link href={`/admin/exercises/${exercise.id}/edit`}>
                                                <Button variant="ghost" size="sm">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteExerciseButton 
                                                exerciseId={exercise.id} 
                                                exerciseNumber={exercise.exerciseNumber}
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {exercise.title && (
                                        <div>
                                            <h4 className="font-medium text-sm">Titre</h4>
                                            <p className="text-sm text-muted-foreground">{exercise.title}</p>
                                        </div>
                                    )}
                                    {exercise.statement && (
                                        <div className="space-y-2">
                                            <h4 className="font-medium text-sm">Énoncé</h4>
                                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{exercise.statement}</p>
                                        </div>
                                    )}
                                    {exercise.themes.length > 0 && (
                                        <div>
                                            <h4 className="font-medium text-sm mb-1">Thèmes</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {exercise.themes.map((theme) => (
                                                    <Badge key={theme.id} variant="outline">
                                                        {theme.longDescription}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewExamPaperPage;
