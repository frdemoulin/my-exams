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

    return (
        <div className="w-full p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg font-semibold md:text-2xl">{t('actions.view')}</h1>
                <Link href={`/admin/exam-papers/${id}/split`}>
                    <Button>
                        <Scissors className="mr-2 h-4 w-4" />
                        Découper en exercices ({exercisesWithThemes.length})
                    </Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
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
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground">Filière</h3>
                            <p className="text-sm">{examPaper.division.longDescription}</p>
                        </div>
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
                        {examPaper.examinationCenter && (
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground">Centre d'examen</h3>
                                <p className="text-sm">{examPaper.examinationCenter.description}</p>
                            </div>
                        )}
                        {examPaper.pdfUrl && (
                            <div className="col-span-2 md:col-span-3">
                                <h3 className="text-sm font-semibold text-muted-foreground">PDF</h3>
                                <a 
                                    href={examPaper.pdfUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline break-all"
                                >
                                    {examPaper.pdfUrl}
                                </a>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Liste des exercices */}
            {exercisesWithThemes.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Exercices ({exercisesWithThemes.length})</h2>
                    <div className="space-y-4">
                        {exercisesWithThemes.map((exercise) => (
                            <Card key={exercise.id}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <CardTitle className="text-base">
                                            Exercice {exercise.exerciseNumber}
                                            {exercise.label && ` - ${exercise.label}`}
                                        </CardTitle>
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
                                    <div className="flex gap-2 text-sm font-normal mt-2">
                                        {exercise.points && (
                                            <Badge variant="points">{exercise.points} pts</Badge>
                                        )}
                                        {exercise.estimatedDuration && (
                                            <Badge variant="duration">{exercise.estimatedDuration} min</Badge>
                                        )}
                                        {exercise.estimatedDifficulty && (
                                            <Badge variant="difficulty">Difficulté {exercise.estimatedDifficulty}/5</Badge>
                                        )}
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
                                        <div>
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
