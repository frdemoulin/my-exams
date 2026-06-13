import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil } from "lucide-react";

import { fetchChapterById } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChapterAssignmentsTable } from "../_components/chapter-assignments-table";
import { ChapterDetailTabs } from "../_components/chapter-detail-tabs";
import { ChapterQuestionsTable } from "../_components/chapter-questions-table";
import {
  contentVerticalLabels,
  getChapterLevelLabel,
} from "@/core/chapter/chapter.constants";
import { healthCourseUnitCoverageStatusLabels } from "@/core/health/health.schemas";

interface ChapterDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Détail du chapitre",
};

export default async function ChapterDetailPage({ params }: ChapterDetailPageProps) {
  const { id } = await params;
  const chapter = await fetchChapterById(id);

  if (!chapter) {
    notFound();
  }

  const publishedQuestionCount = chapter.quizQuestions.filter((question) => question.isPublished).length;

  return (
    <div className="w-full p-6">
      <AdminPageHeading
        title={chapter.title}
        description="Consulte les informations principales du chapitre et gère ses rattachements et ses questions QCM."
        actions={
          <>
            <Button asChild variant="outline">
              <Link href="/admin/chapters">Retour</Link>
            </Button>
            <Button asChild variant="warning" size="icon" aria-label="Éditer le chapitre">
              <Link href={`/admin/chapters/${chapter.id}/edit`}>
                <Pencil className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />

      <ChapterDetailTabs
        defaultTab="overview"
        tabs={[
          {
            id: "overview",
            label: "Aperçu",
            content: (
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <h2 className="text-heading text-2xl font-semibold tracking-tight">
                    Informations du chapitre
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Verticale</h3>
                    <p className="text-sm">
                      {contentVerticalLabels[chapter.vertical] ?? chapter.vertical}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Matière</h3>
                    <p className="text-sm">{chapter.subject.longDescription}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Titre court</h3>
                    <p className="text-sm">{chapter.shortTitle ?? "—"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Slug</h3>
                    <p className="text-sm">{chapter.slug}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-semibold text-muted-foreground">Description</h3>
                    <p className="text-sm whitespace-pre-line">
                      {chapter.description ?? "—"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Niveau hérité</h3>
                    <p className="text-sm">{getChapterLevelLabel(chapter.level)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Ordre</h3>
                    <p className="text-sm">{chapter.order}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Statut métier</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={chapter.isActive !== false ? "default" : "secondary"}>
                        {chapter.isActive !== false ? "Actif" : "Inactif"}
                      </Badge>
                      <Badge variant={chapter.isPublished ? "default" : "outline"}>
                        {chapter.isPublished ? "Publié" : "Brouillon"}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Questions</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{chapter.quizQuestions.length} total</Badge>
                      <Badge variant="outline">{publishedQuestionCount} publiées</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Couverture</h3>
                    <Badge variant="outline">
                      {healthCourseUnitCoverageStatusLabels[chapter.coverageStatus] ??
                        chapter.coverageStatus}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Rattachements</h3>
                    <Badge variant="secondary">{chapter.assignments.length}</Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Source</h3>
                    <p className="text-sm">{chapter.sourceLabel ?? chapter.sourceUrl ?? "—"}</p>
                    {chapter.sourceCheckedAt ? (
                      <p className="text-xs text-muted-foreground">
                        Vérifiée le {chapter.sourceCheckedAt.toISOString().slice(0, 10)}
                      </p>
                    ) : null}
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-semibold text-muted-foreground">Domaines associés</h3>
                    {chapter.domains.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {chapter.domains.map((domain) => (
                          <Badge key={domain.id} variant={domain.isActive ? "secondary" : "outline"}>
                            {domain.longDescription}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm">—</p>
                    )}
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: "assignments",
            label: "Rattachements",
            badge: chapter.assignments.length,
            content: (
              <ChapterAssignmentsTable
                chapterId={chapter.id}
                assignments={chapter.assignments}
                addHref={`/admin/chapters/${chapter.id}/assignments/add`}
              />
            ),
          },
          {
            id: "questions",
            label: "Questions",
            badge: chapter.quizQuestions.length,
            content: (
              <ChapterQuestionsTable
                chapterId={chapter.id}
                questions={chapter.quizQuestions}
                addHref={`/admin/chapters/${chapter.id}/questions/add`}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
