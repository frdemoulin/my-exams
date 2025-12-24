import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DomainForm } from "../_components/domain-form";
import { fetchSubjectsOptions } from "@/core/subject";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.domain");
  return { title: t("actions.add") };
}

const AddDomainPage = async () => {
  const subjects = await fetchSubjectsOptions();
  const t = await getTranslations("entities.domain");

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl mb-6">
          {t("actions.add")}
        </h1>
      </div>
      <div>
        <DomainForm
          crudMode="add"
          initialData={{
            shortDescription: "",
            longDescription: "",
            subjectId: undefined,
            order: undefined,
            discipline: undefined,
          }}
          subjects={subjects}
        />
      </div>
    </div>
  );
};

export default AddDomainPage;
