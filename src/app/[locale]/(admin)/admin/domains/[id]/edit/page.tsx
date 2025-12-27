import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DomainForm } from "../../_components/domain-form";
import { fetchDomainById } from "@/core/domain";
import { fetchDiplomasOptions } from "@/core/diploma";
import { fetchDivisionsOptions } from "@/core/division";
import { fetchGradesOptions } from "@/core/grade";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchTeachingsOptions } from "@/core/teaching";
import { fetchCurriculumsOptions } from "@/core/curriculum";

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
  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const diplomas = await fetchDiplomasOptions({ includeInactive: true });
  const grades = await fetchGradesOptions();
  const divisions = await fetchDivisionsOptions();
  const teachings = await fetchTeachingsOptions();
  const curriculums = await fetchCurriculumsOptions();
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
            scopes: domain?.scopes?.map((scope) => ({
              diplomaId: scope.diplomaId ?? null,
              gradeId: scope.gradeId ?? null,
              divisionId: scope.divisionId ?? null,
              teachingId: scope.teachingId ?? null,
              curriculumId: scope.curriculumId ?? null,
              labelOverride: scope.labelOverride ?? "",
              order: scope.order ?? null,
              isActive: scope.isActive ?? true,
            })),
          }}
          subjects={subjects}
          diplomas={diplomas}
          grades={grades}
          divisions={divisions}
          teachings={teachings}
          curriculums={curriculums}
        />
      </div>
    </div>
  );
};

export default EditDomainPage;
