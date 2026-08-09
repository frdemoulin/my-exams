import { Metadata } from "next";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchChapterById, fetchQuizQuestions } from "@/core/chapter";
import {
  getQuestionFormatAdminLabel,
  questionFormatCodes,
} from "@/core/questions/question-format";
import { normalizePersistedQuestionFormat } from "@/core/questions/question-persistence";

interface TrainingQuizQuestionsPageProps {
  searchParams: Promise<{
    chapterId?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Questions d'entraînement",
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
  const usedQuestionFormats = new Set(
    questions.map((question) => normalizePersistedQuestionFormat(question))
  );
  const formatFilterOptions = questionFormatCodes
    .filter((format) => usedQuestionFormats.has(format))
    .map((format) => getQuestionFormatAdminLabel(format));

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable
          title="Questions d'entraînement"
          description="Administre les questions, avec ou sans filtre sur une série précise ou un format UNESS."
          columns={columns}
          data={questions}
          addHref={addHref}
          filterLabel={chapter?.title}
          formatFilterOptions={formatFilterOptions}
        />
      </div>
    </div>
  );
}
