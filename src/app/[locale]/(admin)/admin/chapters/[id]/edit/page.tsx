import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { ChapterForm } from "../../_components/chapter-form";
import { ChapterBreadcrumbOverride } from "../../_components/chapter-breadcrumb-override";
import { fetchChapterById } from "@/core/chapter";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchDomainsOptions } from "@/core/domain";

interface EditChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.chapter");
  return { title: t("actions.edit") };
}

export default async function EditChapterPage({ params }: EditChapterPageProps) {
  const { id } = await params;
  const [chapter, subjects, domains, t] = await Promise.all([
    fetchChapterById(id),
    fetchSubjectsOptions({ includeInactive: true }),
    fetchDomainsOptions({ includeInactive: true }),
    getTranslations("entities.chapter"),
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
          { label: "Modifier" },
        ]}
      />
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">{t("actions.edit")}</h1>
      </div>
      <ChapterForm
        crudMode="edit"
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
    </div>
  );
}