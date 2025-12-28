import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  pending: { label: "En attente", variant: "secondary" },
  completed: { label: "Enrichi", variant: "default" },
  failed: { label: "Échec", variant: "destructive" },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const t = await getTranslations("entities.exercise");
  return { title: t("actions.view") };
}

const ExerciseDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect(`/api/auth/signin?callbackUrl=/admin/exercises/${id}`);
  }

  const exercise = await prisma.exercise.findUnique({
    where: { id },
    include: {
      examPaper: {
        include: {
          diploma: true,
          division: true,
          grade: true,
          teaching: {
            include: {
              subject: true,
              grade: true,
            },
          },
        },
      },
    },
  });

  if (!exercise) {
    redirect("/admin/exercises");
  }

  const themes = exercise.themeIds.length
    ? await prisma.theme.findMany({
        where: { id: { in: exercise.themeIds } },
        select: { id: true, shortDescription: true, longDescription: true },
      })
    : [];

  const status = statusLabels[exercise.enrichmentStatus] ?? {
    label: exercise.enrichmentStatus,
    variant: "secondary",
  };

  return (
    <div className="w-full p-6 space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">
            {exercise.label || `Exercice ${exercise.exerciseNumber}`}
          </h1>
          <p className="text-sm text-muted-foreground">
            Sujet : {exercise.examPaper.label} • Session {exercise.examPaper.sessionYear}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="secondary">
            <Link href={`/admin/exam-papers/${exercise.examPaperId}`}>Voir le sujet</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={`/admin/exercises/${exercise.id}/edit`}>Éditer</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Statut IA</h3>
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Type</h3>
            <p className="text-sm">{exercise.exerciseType ?? "—"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Points</h3>
            <p className="text-sm">{exercise.points ?? "—"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Pages</h3>
            <p className="text-sm">
              {exercise.pageStart && exercise.pageEnd
                ? `${exercise.pageStart} -> ${exercise.pageEnd}`
                : "—"}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Matière</h3>
            <p className="text-sm">
              {exercise.examPaper.teaching.subject.shortDescription ||
                exercise.examPaper.teaching.subject.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Enseignement</h3>
            <p className="text-sm">
              {exercise.examPaper.teaching.shortDescription ||
                exercise.examPaper.teaching.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Niveau</h3>
            <p className="text-sm">{exercise.examPaper.teaching.grade.shortDescription}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Diplôme</h3>
            <p className="text-sm">{exercise.examPaper.diploma.longDescription}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Dernière mise à jour</h3>
            <p className="text-sm">{formatDateTime(exercise.updatedAt)}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contenu enrichi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Titre</h3>
            <p className="text-sm">{exercise.title ?? "—"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Résumé</h3>
            <p className="text-sm whitespace-pre-line">{exercise.summary ?? "—"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Durée estimée</h3>
            <p className="text-sm">
              {exercise.estimatedDuration ? `${exercise.estimatedDuration} min` : "—"}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Difficulté estimée</h3>
            <p className="text-sm">{exercise.estimatedDifficulty ?? "—"}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Thèmes</h3>
            <p className="text-sm">
              {themes.length > 0
                ? themes
                    .map((theme) => theme.shortDescription || theme.longDescription)
                    .join(", ")
                : "—"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExerciseDetailPage;
