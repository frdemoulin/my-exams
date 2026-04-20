import { Metadata } from "next";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchChapterById, fetchQuizQuestions } from "@/core/chapter";

interface TrainingQuizQuestionsPageProps {
  searchParams: Promise<{
    chapterId?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Questions QCM",
};

export default async function TrainingQuizQuestionsPage({ searchParams }: TrainingQuizQuestionsPageProps) {
  const { chapterId } = await searchParams;
  const [questions, chapter] = await Promise.all([
    fetchQuizQuestions({ chapterId }),
    chapterId ? fetchChapterById(chapterId) : Promise.resolve(null),
  ]);

  const addHref = chapterId
    ? `/admin/training/quiz-questions/add?chapterId=${chapterId}`
    : "/admin/training/quiz-questions/add";

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable
          title="Questions QCM"
          description="Administre les questions d'entraînement, avec ou sans filtre sur un QCM précis."
          columns={columns}
          data={questions}
          addHref={addHref}
          filterLabel={chapter?.title}
        />
      </div>
    </div>
  );
}