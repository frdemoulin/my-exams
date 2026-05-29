import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import prisma from "@/lib/db/prisma";
import { fetchSubjectsOptions } from "@/core/subject";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

import { SubdomainForm } from "../_components/subdomain-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.subdomain");
  return { title: t("actions.add") };
}

const AddSubdomainPage = async () => {
  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const domainsRaw = await prisma.domain.findMany({
    where: { isActive: true },
    orderBy: [{ order: "asc" }, { longDescription: "asc" }],
    select: { id: true, longDescription: true, subjectId: true },
  });
  const domains = domainsRaw.map((d) => ({
    value: d.id,
    label: d.longDescription,
    subjectId: d.subjectId,
  }));

  const t = await getTranslations("entities.subdomain");

  return (
    <div className="w-full p-6">
      <AdminPageHeading title={t("actions.add")} className="mb-6" />
      <div>
        <SubdomainForm
          crudMode="add"
          initialData={{
            title: "",
            shortTitle: "",
            slug: "",
            description: "",
            order: undefined,
            subjectId: undefined,
            domainId: undefined,
            isActive: true,
          }}
          subjects={subjects}
          domains={domains}
        />
      </div>
    </div>
  );
};

export default AddSubdomainPage;
