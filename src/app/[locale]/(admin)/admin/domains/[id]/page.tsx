import { Metadata } from "next";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { fetchDomainById } from "@/core/domain";
import { fetchThemesByDomainId } from "@/core/theme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DomainThemesTable } from "./_components/domain-themes-table";
import { DomainScopesForm } from "./_components/domain-scopes-form";
import { DomainDetailTabs } from "./_components/domain-detail-tabs";
import { fetchDiplomasOptions } from "@/core/diploma";
import { fetchDivisionsOptions } from "@/core/division";
import { fetchGradesOptions } from "@/core/grade";
import { fetchTeachingsOptions } from "@/core/teaching";
import { fetchCurriculumsOptions } from "@/core/curriculum";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

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
  const divisions = await fetchDivisionsOptions({ includeInactive: true });
  const teachings = await fetchTeachingsOptions({ includeInactive: true });
  const curriculums = await fetchCurriculumsOptions();

  return (
    <div>
      <AdminPageHeading
        title={
          domain?.longDescription
            ? `Détail du domaine ${domain.longDescription}`
            : "Détail du domaine"
        }
        description="Consulte les informations du domaine, sa portée pédagogique et les thèmes qui lui sont rattachés."
        actions={
          domain ? (
            <>
            <Button asChild variant="outline">
              <Link href="/admin/domains">Retour</Link>
            </Button>
            <Button asChild variant="warning" size="icon" aria-label="Éditer le domaine">
              <Link href={`/admin/domains/${domain.id}/edit`}>
                <Pencil className="h-4 w-4" />
              </Link>
            </Button>
            </>
          ) : null
        }
      />
      <DomainDetailTabs
        defaultTab="overview"
        tabs={[
          {
            id: "overview",
            label: "Aperçu",
            content: (
              <Card>
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
                      <p className="text-sm">
                        {domain?.subject?.longDescription ?? "N/A"}
                      </p>
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
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">
                        Statut
                      </h3>
                      <p className="text-sm">{domain?.isActive ? "Actif" : "Inactif"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ),
          },
          {
            id: "scope",
            label: "Portée",
            badge: domain?.scopes?.length ?? 0,
            content: domain ? (
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
            ) : null,
          },
          {
            id: "themes",
            label: "Thèmes",
            badge: themes.length,
            content: (
              <DomainThemesTable
                domainId={id}
                themes={themes}
                addHref={
                  domain
                    ? `/admin/themes/add?domainId=${domain.id}&returnTo=/admin/domains/${domain.id}`
                    : undefined
                }
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default DomainDetailPage;
