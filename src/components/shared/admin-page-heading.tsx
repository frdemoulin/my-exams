import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AdminPageHeadingProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

const inferDescription = (title: string) => {
  const normalized = title.toLowerCase();

  if (normalized.includes("tableau de bord")) {
    return "Vue d'ensemble des contenus, utilisateurs et sections clés du backoffice.";
  }
  if (normalized.includes("statistiques")) {
    return "Consulte les indicateurs utiles pour suivre l'activité et la qualité des données.";
  }
  if (normalized.startsWith("ajouter")) {
    return "Renseigne les informations nécessaires avant de créer un nouvel élément.";
  }
  if (normalized.includes("édit")) {
    return "Modifie les informations existantes et enregistre les changements de cette fiche.";
  }
  if (normalized.includes("détail") || normalized.includes("détails")) {
    return "Consulte les informations principales, les relations associées et les actions disponibles.";
  }
  if (normalized.includes("découper")) {
    return "Prépare la structuration du sujet pour créer ou ajuster les exercices associés.";
  }
  return "Consulte et administre les informations de cette section du backoffice.";
};

export function AdminPageHeading({
  title,
  description,
  actions,
  className,
}: AdminPageHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3 md:flex-row md:items-start md:justify-between", className)}>
      <div className="space-y-1">
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <p className="text-sm text-muted-foreground">
          {description ?? inferDescription(title)}
        </p>
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
