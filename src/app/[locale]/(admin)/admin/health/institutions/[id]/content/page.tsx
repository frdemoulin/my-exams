import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Button } from "@/components/ui/button";
import { fetchHealthInstitutionContentWorkspace } from "@/core/health";

import { HealthInstitutionContentWorkspace } from "./workspace";

export const metadata: Metadata = {
  title: "Pilotage contenu santé",
};

export default async function HealthInstitutionContentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workspace = await fetchHealthInstitutionContentWorkspace(id);

  if (!workspace) {
    notFound();
  }

  const institutionLabel = workspace.institution.shortName ?? workspace.institution.name;

  return (
    <div className="w-full p-6">
      <AdminPageHeading
        title={`${institutionLabel} · Contenu santé`}
        description={`Pilotage des QCM par maquette, parcours, UE, EC et chapitre pour l'année ${workspace.currentAcademicYear}.`}
        actions={
          <>
            <Button asChild variant="outline">
              <Link href={`/admin/health/institutions/${workspace.institution.id}`}>Établissement</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/health/institutions">Retour</Link>
            </Button>
          </>
        }
      />

      <HealthInstitutionContentWorkspace workspace={workspace} />
    </div>
  );
}
