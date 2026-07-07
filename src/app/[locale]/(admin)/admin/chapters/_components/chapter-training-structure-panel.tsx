"use client";

import Link from "next/link";

import type { ChapterDetail } from "@/core/chapter";
import { getTrainingQuizStageLabel } from "@/core/training/training-stage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ChapterTrainingStructurePanelProps = {
  chapterId: string;
  sections: ChapterDetail["sections"];
};

function countQuizQuestions(
  quiz: ChapterDetail["sections"][number]["quizzes"][number]
) {
  return quiz.questionLinks.length;
}

function countSectionQuestions(section: ChapterDetail["sections"][number]) {
  return section.quizzes.reduce(
    (total, quiz) => total + countQuizQuestions(quiz),
    0
  );
}

export function ChapterTrainingStructurePanel({
  chapterId,
  sections,
}: ChapterTrainingStructurePanelProps) {
  const totalQuizCount = sections.reduce(
    (total, section) => total + section.quizzes.length,
    0
  );
  const totalQuestionCount = sections.reduce(
    (total, section) => total + countSectionQuestions(section),
    0
  );

  if (sections.length === 0) {
    return (
      <div className="space-y-4">
        <div className="rounded-base border border-dashed border-default bg-background p-5">
          <h2 className="text-base font-semibold text-heading">
            Aucune section structurée
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Ce chapitre n&apos;expose encore aucune section ni série de QCM. La
            structuration s&apos;administre via l&apos;éditeur de structure pédagogique.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={`/admin/training/qcms/${chapterId}/edit`}>
                Structurer le chapitre
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`/admin/training/quiz-questions?chapterId=${chapterId}`}>
                Gérer les questions du chapitre
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-heading">
            Structure pédagogique du chapitre
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Les sections structurent le chapitre et portent les séries de QCM
            d&apos;entraînement.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`/admin/training/qcms/${chapterId}/edit`}>
              Éditer la structure
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/admin/training/quiz-questions?chapterId=${chapterId}`}>
              Gérer les questions
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{sections.length} sections</Badge>
        <Badge variant="outline">{totalQuizCount} séries de QCM</Badge>
        <Badge variant="outline">{totalQuestionCount} questions liées</Badge>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <section
            key={section.id}
            className="rounded-base border border-default bg-background p-4"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-heading">
                    {section.order}. {section.title}
                  </h3>
                  <Badge variant="secondary">
                    {section.kind === "SYNTHESIS" ? "Synthèse" : "Thème"}
                  </Badge>
                  <Badge variant={section.isPublished ? "default" : "outline"}>
                    {section.isPublished ? "Publié" : "Brouillon"}
                  </Badge>
                </div>
                {section.description ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span>{section.quizzes.length} séries</span>
                  <span>{countSectionQuestions(section)} questions</span>
                  <span>{section.themeIds.length} thèmes associés</span>
                </div>
              </div>
            </div>

            {section.quizzes.length > 0 ? (
              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                {section.quizzes.map((quiz) => {
                  const stageLabel = getTrainingQuizStageLabel(quiz.stage);
                  const questionCount = countQuizQuestions(quiz);

                  return (
                    <div
                      key={quiz.id}
                      className="rounded-base border border-default bg-neutral-primary-soft p-3"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-sm font-medium text-heading">
                          {quiz.order}. {quiz.title}
                        </div>
                        <Badge variant={quiz.isPublished ? "default" : "outline"}>
                          {quiz.isPublished ? "Publié" : "Brouillon"}
                        </Badge>
                        {stageLabel ? (
                          <Badge variant="outline">{stageLabel}</Badge>
                        ) : null}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{questionCount} questions</span>
                        <span>{quiz.questionGroups.length} blocs liés</span>
                        <span>{quiz.slug}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Aucune série de QCM associée à cette section pour l&apos;instant.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
