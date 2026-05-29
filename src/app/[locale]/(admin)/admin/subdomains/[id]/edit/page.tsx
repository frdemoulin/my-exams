import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { fetchSubdomainById } from "@/core/subdomain";
import { fetchSubjectsOptions } from "@/core/subject";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

import { SubdomainForm } from "../../_components/subdomain-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.subdomain");
  return { title: t("actions.edit") };
}

interface EditSubdomainPageProps {
  params: Promise<{ id: string }>;
}

const EditSubdomainPage = async ({ params }: EditSubdomainPageProps) => {
  const { id } = await params;
  const subdomain = await fetchSubdomainById(id);
  if (!subdomain) notFound();

  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const domainsRaw = await prisma.domain.findMany({
    orderBy: [{ order: "asc" }, { longDescription: "asc" }],
    select: { id: true, longDescription: true, subjectId: true, isActive: true },
  });
  const domains = domainsRaw
    .filter((d) => d.isActive || d.id === subdomain.domainId)
    .map((d) => ({ value: d.id, label: d.longDescription, subjectId: d.subjectId }));

  const t = await getTranslations("entities.subdomain");

  return (
    <div className="w-full p-6">
      <AdminPageHeading title={t("actions.edit")} className="mb-6" />
      <div>
        <SubdomainForm
          crudMode="edit"
          initialData={{
            id,
            title: subdomain.title,
            shortTitle: subdomain.shortTitle ?? "",
            slug: subdomain.slug,
            description: subdomain.description ?? "",
            order: subdomain.order ?? undefined,
            subjectId: subdomain.subjectId,
            domainId: subdomain.domainId,
            isActive: subdomain.isActive,
          }}
          subjects={subjects}
          domains={domains}
        />
      </div>
    </div>
  );
};

export default EditSubdomainPage;
