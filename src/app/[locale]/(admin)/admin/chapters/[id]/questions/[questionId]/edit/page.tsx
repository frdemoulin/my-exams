import { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuizQuestionForm } from "@/app/[locale]/(admin)/admin/chapters/_components/quiz-question-form";
import { ChapterBreadcrumbOverride } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-breadcrumb-override";
import { fetchChapterById, fetchQuizQuestionById } from "@/core/chapter";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

interface EditChapterQuestionPageProps {
  params: Promise<{
    id: string;
    questionId: string;
  }>;
}

export const metadata: Metadata = {
  title: "Éditer une question QCM",
};

export default async function EditChapterQuestionPage({ params }: EditChapterQuestionPageProps) {
  const { id, questionId } = await params;
  const [chapter, question] = await Promise.all([
    fetchChapterById(id),
    fetchQuizQuestionById(questionId),
  ]);

  if (!chapter || !question || question.chapterId !== chapter.id) {
    notFound();
  }

  return (
    <div className="w-full p-6 space-y-6">
      <ChapterBreadcrumbOverride
        items={[
          { label: "Chapitres", href: "/admin/chapters" },
          { label: chapter.title, href: `/admin/chapters/${chapter.id}` },
          { label: "Questions", href: `/admin/chapters/${chapter.id}` },
          { label: "Modifier" },
        ]}
      />
      <AdminPageHeading
        title="Éditer une question QCM"
        description={`Tu modifies une question du chapitre ${chapter.title}.`}
      />
      <QuizQuestionForm
        crudMode="edit"
        cancelHref={`/admin/chapters/${chapter.id}`}
        initialData={{
          id: question.id,
          chapterId: question.chapterId,
          difficulty: question.difficulty,
          question: question.question,
          choices: question.choices,
          correctChoiceIndex: question.correctChoiceIndex,
          explanation: question.explanation,
          order: question.order,
          isPublished: question.isPublished,
        }}
      />
    </div>
  );
}