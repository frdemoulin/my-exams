import { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuizQuestionForm } from "@/app/[locale]/(admin)/admin/chapters/_components/quiz-question-form";
import { ChapterBreadcrumbOverride } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-breadcrumb-override";
import { fetchChapterById } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

interface AddChapterQuestionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Ajouter une question QCM",
};

export default async function AddChapterQuestionPage({ params }: AddChapterQuestionPageProps) {
  const { id } = await params;
  const chapter = await fetchChapterById(id);

  if (!chapter) {
    notFound();
  }

  const nextOrder = (chapter.quizQuestions.at(-1)?.order ?? 0) + 1;

  return (
    <div className="w-full p-6 space-y-6">
      <ChapterBreadcrumbOverride
        items={[
          { label: "Chapitres", href: "/admin/chapters" },
          { label: chapter.title, href: `/admin/chapters/${chapter.id}` },
          { label: "Questions", href: `/admin/chapters/${chapter.id}` },
          { label: "Ajouter" },
        ]}
      />
      <AdminPageHeading
        title="Ajouter une question QCM"
        description={`Tu ajoutes une question au chapitre ${chapter.title}.`}
      />
      <QuizQuestionForm
        crudMode="add"
        chapterId={chapter.id}
        cancelHref={`/admin/chapters/${chapter.id}`}
        initialData={{
          difficulty: "EASY",
          question: "",
          choices: ["", "", "", ""],
          correctChoiceIndex: 0,
          explanation: "",
          order: nextOrder,
          isPublished: false,
        }}
      />
    </div>
  );
}