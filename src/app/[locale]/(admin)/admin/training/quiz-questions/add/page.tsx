import { Metadata } from "next";

import { QuizQuestionForm } from "@/app/[locale]/(admin)/admin/chapters/_components/quiz-question-form";
import { fetchQuizQuestionChapterOptions } from "@/core/chapter";

interface AddTrainingQuizQuestionPageProps {
  searchParams: Promise<{
    chapterId?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Ajouter une question QCM",
};

export default async function AddTrainingQuizQuestionPage({ searchParams }: AddTrainingQuizQuestionPageProps) {
  const { chapterId } = await searchParams;
  const chapterOptions = await fetchQuizQuestionChapterOptions();
  const initialChapterId = chapterOptions.some((option) => option.value === chapterId) ? chapterId ?? "" : "";
  const cancelHref = initialChapterId
    ? `/admin/training/quiz-questions?chapterId=${initialChapterId}`
    : "/admin/training/quiz-questions";

  return (
    <div className="w-full p-6 space-y-6">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">Ajouter une question QCM</h1>
      </div>
      <QuizQuestionForm
        crudMode="add"
        cancelHref={cancelHref}
        chapterOptions={chapterOptions}
        redirectTo="/admin/training/quiz-questions"
        revalidatePaths={["/admin/training/qcms", "/admin/training/quiz-questions"]}
        initialData={{
          chapterId: initialChapterId,
          difficulty: "EASY",
          question: "",
          choices: ["", "", "", ""],
          correctChoiceIndex: 0,
          explanation: "",
          order: 1,
          isPublished: false,
        }}
      />
    </div>
  );
}