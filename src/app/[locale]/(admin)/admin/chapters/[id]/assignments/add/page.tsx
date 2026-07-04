import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChapterBreadcrumbOverride } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-breadcrumb-override";
import { ChapterAssignmentForm } from "@/app/[locale]/(admin)/admin/chapters/_components/chapter-assignment-form";
import {
  fetchChapterAssignmentFormOptions,
  fetchChapterById,
} from "@/core/chapter";

interface AddChapterAssignmentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Ajouter un rattachement" };
}

export default async function AddChapterAssignmentPage({ params }: AddChapterAssignmentPageProps) {
  const { id } = await params;
  const [chapter, options] = await Promise.all([
    fetchChapterById(id),
    fetchChapterAssignmentFormOptions(),
  ]);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="w-full p-6">
      <ChapterBreadcrumbOverride
        items={[
          { label: "Chapitres", href: "/admin/chapters" },
          { label: chapter.title, href: `/admin/chapters/${chapter.id}` },
          { label: "Rattachements", href: `/admin/chapters/${chapter.id}` },
          { label: "Ajouter" },
        ]}
      />
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">Ajouter un rattachement</h1>
      </div>
      <ChapterAssignmentForm
        crudMode="add"
        initialData={{
          chapterId: chapter.id,
          vertical: chapter.vertical,
          contextType: "SUBJECT",
          contextId: chapter.subjectId,
          order: chapter.order,
          coverageStatus: chapter.coverageStatus,
          isActive: true,
          isPublished: true,
        }}
        subjects={options.subjects}
        healthCourseUnits={options.healthCourseUnits}
        healthTeachingElements={options.healthTeachingElements}
      />
    </div>
  );
}
