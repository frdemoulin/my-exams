import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil } from "lucide-react";

import { fetchChapterById } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChapterDetailTabs } from "../_components/chapter-detail-tabs";
import { ChapterQuestionsTable } from "../_components/chapter-questions-table";

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
        description="Consulte les informations principales du chapitre et gère ses questions QCM."
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
                    <h3 className="text-sm font-semibold text-muted-foreground">Matière</h3>
                    <p className="text-sm">{chapter.subject.longDescription}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Slug</h3>
                    <p className="text-sm">{chapter.slug}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Niveau</h3>
                    <p className="text-sm">{chapter.level}</p>
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