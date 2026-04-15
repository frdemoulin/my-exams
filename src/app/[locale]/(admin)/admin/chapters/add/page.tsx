import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ChapterForm } from "../_components/chapter-form";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchDomainsOptions } from "@/core/domain";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.chapter");
  return { title: t("actions.add") };
}

export default async function AddChapterPage() {
  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const domains = await fetchDomainsOptions({ includeInactive: true });
  const t = await getTranslations("entities.chapter");

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="mb-6 text-lg font-semibold md:text-2xl">{t("actions.add")}</h1>
      </div>
      <ChapterForm
        crudMode="add"
        initialData={{
          title: "",
          slug: "",
          level: "terminale",
          order: undefined,
          subjectId: "",
          domainIds: [],
          isActive: true,
          isPublished: false,
        }}
        subjects={subjects}
        domains={domains}
      />
    </div>
  );
}