import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChapterBreadcrumbOverride } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-breadcrumb-override";
import { ChapterAssignmentForm } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-assignment-form";
import {
  fetchChapterAssignmentById,
  fetchChapterAssignmentFormOptions,
  fetchChapterById,
} from "@/core/chapter";

interface EditChapterAssignmentPageProps {
  params: Promise<{
    id: string;
    assignmentId: string;
  }>;
}

export const metadata: Metadata = {
  title: "Éditer un rattachement",
};

export default async function EditChapterAssignmentPage({
  params,
}: EditChapterAssignmentPageProps) {
  const { id, assignmentId } = await params;
  const [chapter, assignment, options] = await Promise.all([
    fetchChapterById(id),
    fetchChapterAssignmentById(assignmentId),
    fetchChapterAssignmentFormOptions(),
  ]);

  if (!chapter || !assignment || assignment.chapterId !== chapter.id) {
    notFound();
  }

  return (
    <div className="w-full p-6">
      <ChapterBreadcrumbOverride
        items={[
          { label: "Chapitres", href: "/admin/chapters" },
          { label: chapter.title, href: `/admin/chapters/${chapter.id}` },
          { label: "Rattachements", href: `/admin/chapters/${chapter.id}` },
          { label: "Modifier" },
        ]}
      />
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">Éditer un rattachement</h1>
      </div>
      <ChapterAssignmentForm
        crudMode="edit"
        initialData={{
          id: assignment.id,
          chapterId: chapter.id,
          vertical: assignment.vertical,
          contextType: assignment.contextType,
          contextId: assignment.contextId,
          titleOverride: assignment.titleOverride ?? "",
          shortTitleOverride: assignment.shortTitleOverride ?? "",
          slugOverride: assignment.slugOverride ?? "",
          descriptionOverride: assignment.descriptionOverride ?? "",
          order: assignment.order,
          coverageStatus: assignment.coverageStatus,
          sourceUrl: assignment.sourceUrl ?? "",
          sourceLabel: assignment.sourceLabel ?? "",
          sourceCheckedAt: assignment.sourceCheckedAt?.toISOString().slice(0, 10) ?? "",
          isActive: assignment.isActive,
          isPublished: assignment.isPublished,
        }}
        subjects={options.subjects}
        healthCourseUnits={options.healthCourseUnits}
      />
    </div>
  );
}
