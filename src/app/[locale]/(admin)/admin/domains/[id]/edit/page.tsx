import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DomainForm } from "../../_components/domain-form";
import { fetchDomainById } from "@/core/domain";
import { fetchSubjectsOptions } from "@/core/subject";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.domain");
  return { title: t("actions.edit") };
}

interface DomainEditProps {
  params: Promise<{
    id: string;
  }>;
}

const EditDomainPage = async ({ params }: DomainEditProps) => {
  const { id } = await params;

  const domain = await fetchDomainById(id);
  const subjects = await fetchSubjectsOptions();
  const t = await getTranslations("entities.domain");

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl mb-6">
          {t("actions.edit")}
        </h1>
      </div>
      <div>
        <DomainForm
          crudMode="edit"
          initialData={{
            id,
            longDescription: domain?.longDescription ?? "",
            shortDescription: domain?.shortDescription ?? "",
            subjectId: domain?.subjectId,
            order: domain?.order ?? undefined,
            discipline: domain?.discipline ?? undefined,
          }}
          subjects={subjects}
        />
      </div>
    </div>
  );
};

export default EditDomainPage;
