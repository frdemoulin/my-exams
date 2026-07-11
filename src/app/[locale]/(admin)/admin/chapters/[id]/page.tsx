import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil } from "lucide-react";

import { fetchChapterById, fetchChapterQuizQuestionExportRows } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChapterAssignmentsTable } from "../_components/chapter-assignments-table";
import { ChapterDetailTabs } from "../_components/chapter-detail-tabs";
import { ChapterQuizQuestionsExportButton } from "../_components/chapter-quiz-questions-export-button";
import { ChapterQuestionsTable } from "../_components/chapter-questions-table";
import { ChapterTrainingStructurePanel } from "../_components/chapter-training-structure-panel";
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

const formatDownloadTimestamp = (date: Date) => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}-${hours}${minutes}${seconds}`;
};

export default async function ChapterDetailPage({ params }: ChapterDetailPageProps) {
  const { id } = await params;
  const [chapter, quizQuestionExportRows] = await Promise.all([
    fetchChapterById(id),
    fetchChapterQuizQuestionExportRows(id),
  ]);

  if (!chapter) {
    notFound();
  }

  const publishedQuestionCount = chapter.quizQuestions.filter((question) => question.isPublished).length;
  const trainingSectionCount = chapter.sections.length;
  const trainingQuizCount = chapter.sections.reduce(
    (total, section) => total + section.quizzes.length,
    0
  );
  const chapterQuizQuestionsExportHref = `/api/admin/chapters/${chapter.id}/quiz-questions-export?v=${chapter.updatedAt.getTime()}`;
  const chapterQuizQuestionsExportFallbackFilename = `chapitre-${chapter.slug}-questions-qcm-${formatDownloadTimestamp(new Date())}.xlsx`;

  return (
    <div className="w-full p-6">
      <AdminPageHeading
        title={chapter.title}
        description="Consulte les informations principales du chapitre et gère sa structure pédagogique, ses rattachements et ses questions QCM."
        actions={
          <>
            <Button asChild variant="outline">
              <Link href="/admin/chapters">Retour</Link>
            </Button>
            <ChapterQuizQuestionsExportButton
              disabled={quizQuestionExportRows.length === 0}
              fallbackFilename={chapterQuizQuestionsExportFallbackFilename}
              href={chapterQuizQuestionsExportHref}
            />
            <Button asChild variant="outline">
              <Link href={`/admin/training/qcms/${chapter.id}/edit`}>Structure QCM</Link>
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
                    <h3 className="text-sm font-semibold text-muted-foreground">
                      Structure pédagogique
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{trainingSectionCount} sections</Badge>
                      <Badge variant="outline">{trainingQuizCount} séries QCM</Badge>
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
            id: "structure",
            label: "Structure QCM",
            badge: trainingSectionCount,
            content: (
              <ChapterTrainingStructurePanel
                chapterId={chapter.id}
                sections={chapter.sections}
              />
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
