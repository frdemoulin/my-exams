import { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuizQuestionForm } from "@/app/[locale]/(admin)/admin/chapters/_components/quiz-question-form";
import { fetchQuizQuestionById, fetchQuizQuestionChapterOptions } from "@/core/chapter";

interface EditTrainingQuizQuestionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Éditer une question QCM",
};

export default async function EditTrainingQuizQuestionPage({ params }: EditTrainingQuizQuestionPageProps) {
  const { id } = await params;
  const [question, chapterOptions] = await Promise.all([
    fetchQuizQuestionById(id),
    fetchQuizQuestionChapterOptions(),
  ]);

  if (!question) {
    notFound();
  }

  return (
    <div className="w-full p-6 space-y-6">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">Éditer une question QCM</h1>
      </div>
      <QuizQuestionForm
        crudMode="edit"
        cancelHref="/admin/training/quiz-questions"
        chapterOptions={chapterOptions}
        redirectTo="/admin/training/quiz-questions"
        revalidatePaths={["/admin/training/qcms", "/admin/training/quiz-questions"]}
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