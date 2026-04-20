import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChapterForm } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-form";
import { TrainingStructureForm } from "@/app/[locale]/(admin)/admin/training/qcms/_components/training-structure-form";
import { fetchChapterById } from "@/core/chapter";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchDomainsOptions } from "@/core/domain";
import { fetchThemesByDomainId } from "@/core/theme";

function truncateQuestion(value: string, maxLength = 96) {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1)}…`;
}

const difficultyLabels = {
  EASY: "Facile",
  MEDIUM: "Moyen",
  HARD: "Difficile",
} as const;

interface EditTrainingQcmPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Éditer un QCM",
};

export default async function EditTrainingQcmPage({ params }: EditTrainingQcmPageProps) {
  const { id } = await params;
  const [chapter, subjects, domains] = await Promise.all([
    fetchChapterById(id),
    fetchSubjectsOptions({ includeInactive: true }),
    fetchDomainsOptions({ includeInactive: true }),
  ]);

  if (!chapter) {
    notFound();
  }

  const themesByDomain = await Promise.all(chapter.domainIds.map((domainId) => fetchThemesByDomainId(domainId)));
  const themeOptions = Array.from(
    new Map(
      themesByDomain
        .flat()
        .map((theme) => [
          theme.id,
          {
            value: theme.id,
            label: theme.title,
            description: theme.description ?? undefined,
          },
        ])
    ).values()
  ).sort((left, right) => left.label.localeCompare(right.label, "fr", { sensitivity: "base" }));

  const questionOptions = chapter.quizQuestions.map((question) => ({
    value: question.id,
    label: `#${question.order} · ${truncateQuestion(question.question)}`,
    description: `${difficultyLabels[question.difficulty]}${question.isPublished ? "" : " · brouillon"}`,
  }));

  const buildQuizItems = (quiz: (typeof chapter.sections)[number]["quizzes"][number]) => {
    const standaloneItems = quiz.questionLinks
      .filter((link) => !link.groupId)
      .map((link) => ({
        sortOrder: link.order,
        item: {
          type: "QUESTION" as const,
          questionId: link.questionId,
        },
      }));

    const groupItems = quiz.questionGroups.map((group) => ({
      sortOrder: group.questionLinks[0]?.order ?? group.order,
      item: {
        type: "GROUP" as const,
        title: group.title ?? "",
        sharedStatement: group.sharedStatement,
        questionIds: group.questionLinks.map((link) => link.questionId),
      },
    }));

    return [...standaloneItems, ...groupItems]
      .sort((left, right) => left.sortOrder - right.sortOrder)
      .map((entry, index) => ({
        ...entry.item,
        order: index + 1,
      }));
  };

  const initialTrainingStructure = {
    sections: chapter.sections.map((section) => ({
      title: section.title,
      description: section.description ?? "",
      kind: section.kind,
      themeIds: section.themeIds,
      order: section.order,
      isPublished: section.isPublished,
      quizzes: section.quizzes.map((quiz) => ({
        title: quiz.title,
        slug: quiz.slug,
        description: quiz.description ?? "",
        order: quiz.order,
        isPublished: quiz.isPublished,
        quizItems: buildQuizItems(quiz),
      })),
    })),
  };

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">Éditer un QCM</h1>
      </div>
      <ChapterForm
        crudMode="edit"
        entityLabel="QCM"
        cancelHref="/admin/training/qcms"
        redirectTo="/admin/training/qcms"
        revalidatePaths={["/admin/training/qcms", "/admin/training/quiz-questions"]}
        initialData={{
          id: chapter.id,
          title: chapter.title,
          slug: chapter.slug,
          level: chapter.level,
          order: chapter.order,
          subjectId: chapter.subjectId,
          domainIds: chapter.domainIds,
          isActive: chapter.isActive ?? true,
          isPublished: chapter.isPublished,
        }}
        subjects={subjects}
        domains={domains}
      />

      <div className="mt-8">
        <TrainingStructureForm
          chapterId={chapter.id}
          initialData={initialTrainingStructure}
          questionOptions={questionOptions}
          themeOptions={themeOptions}
          questionManagementHref={`/admin/training/quiz-questions?chapterId=${chapter.id}`}
        />
      </div>
    </div>
  );
}