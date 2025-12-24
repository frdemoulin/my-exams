import { Metadata } from "next";

import { fetchDomainById } from "@/core/domain";

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

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Détails du domaine</h1>
      <p>Description courte : {domain?.shortDescription}</p>
      <p>Description longue : {domain?.longDescription}</p>
      <p>Matière : {domain?.subject?.longDescription ?? "N/A"}</p>
      <p>
        Discipline :{" "}
        {domain?.discipline ? disciplineLabels[domain.discipline] : "—"}
      </p>
      <p>Ordre : {domain?.order ?? "—"}</p>
    </div>
  );
};

export default DomainDetailPage;
