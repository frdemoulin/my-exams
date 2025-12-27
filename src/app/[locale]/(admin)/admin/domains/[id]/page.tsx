import { Metadata } from "next";
import { fetchDomainById } from "@/core/domain";
import { fetchThemesByDomainId } from "@/core/theme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DomainThemeForm } from "./_components/domain-theme-form";
import { DomainThemesTable } from "./_components/domain-themes-table";
import { DomainScopesForm } from "./_components/domain-scopes-form";
import { fetchDiplomasOptions } from "@/core/diploma";
import { fetchDivisionsOptions } from "@/core/division";
import { fetchGradesOptions } from "@/core/grade";
import { fetchTeachingsOptions } from "@/core/teaching";
import { fetchCurriculumsOptions } from "@/core/curriculum";

export const metadata: Metadata = {
  title: "Détails du domaine",
};

interface DomainDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const disciplineLabels: Record<string, string> = {
  PHYSIQUE: "Physique",
  CHIMIE: "Chimie",
  TRANSVERSAL: "Transversal",
};

const DomainDetailPage = async ({ params }: DomainDetailPageProps) => {
  const { id } = await params;

  const domain = await fetchDomainById(id);
  const themes = await fetchThemesByDomainId(id);
  const diplomas = await fetchDiplomasOptions({ includeInactive: true });
  const grades = await fetchGradesOptions();
  const divisions = await fetchDivisionsOptions();
  const teachings = await fetchTeachingsOptions();
  const curriculums = await fetchCurriculumsOptions();

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Détails du domaine</h1>
      <Card className="mt-4">
        <CardHeader className="mb-2">
          <CardTitle>Informations du domaine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Description courte
              </h3>
              <p className="text-sm">{domain?.shortDescription ?? "—"}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Description longue
              </h3>
              <p className="text-sm">{domain?.longDescription ?? "—"}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Matière
              </h3>
              <p className="text-sm">{domain?.subject?.longDescription ?? "N/A"}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Discipline
              </h3>
              <p className="text-sm">
                {domain?.discipline ? disciplineLabels[domain.discipline] : "—"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Ordre
              </h3>
              <p className="text-sm">{domain?.order ?? "—"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-6">
        {domain ? (
          <DomainScopesForm
            domainId={domain.id}
            scopes={domain.scopes?.map((scope) => ({
              diplomaId: scope.diplomaId ?? null,
              gradeId: scope.gradeId ?? null,
              divisionId: scope.divisionId ?? null,
              teachingId: scope.teachingId ?? null,
              curriculumId: scope.curriculumId ?? null,
              labelOverride: scope.labelOverride ?? "",
              order: scope.order ?? null,
              isActive: scope.isActive ?? true,
            })) ?? []}
            diplomas={diplomas}
            grades={grades}
            divisions={divisions}
            teachings={teachings}
            curriculums={curriculums}
          />
        ) : null}
        {domain ? (
          <DomainThemeForm
            domainId={domain.id}
            domainLabel={domain.longDescription}
          />
        ) : null}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Thèmes associés ({themes.length})
          </h2>
        </div>
        <DomainThemesTable domainId={id} themes={themes} />
      </div>
    </div>
  );
};

export default DomainDetailPage;
