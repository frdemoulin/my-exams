import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DomainForm } from "../_components/domain-form";
import { fetchDiplomasOptions } from "@/core/diploma";
import { fetchDivisionsOptions } from "@/core/division";
import { fetchGradesOptions } from "@/core/grade";
import { fetchSubjectsOptions } from "@/core/subject";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.domain");
  return { title: t("actions.add") };
}

const AddDomainPage = async () => {
  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const diplomas = await fetchDiplomasOptions();
  const grades = await fetchGradesOptions();
  const divisions = await fetchDivisionsOptions();
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
            scopes: [],
          }}
          subjects={subjects}
          diplomas={diplomas}
          grades={grades}
          divisions={divisions}
        />
      </div>
    </div>
  );
};

export default AddDomainPage;
