import { Search, X } from "lucide-react";
import { AddButton } from "@/components/shared/add-button";
import { InfoTooltip } from "@/components/shared/info-tooltip";

type TableToolbarProps = {
  actions?: React.ReactNode;
  title: string;
  titleTooltip?: string;
  description?: string;
  pageFrom: number;
  pageTo: number;
  totalCount: number;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  addHref?: string;
  addLabel?: string;
  children?: React.ReactNode;
};

export function TableToolbar({
  actions,
  title,
  titleTooltip,
  description,
  pageFrom,
  pageTo,
  totalCount,
  placeholder,
  value,
  onChange,
  addHref,
  addLabel,
  children,
}: TableToolbarProps) {
  const resolvedDescription =
    description ?? "Consulte, filtre et gère les éléments de cette section du backoffice.";
  const resolvedTitleTooltip = titleTooltip ?? inferTitleTooltip(title);

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold leading-tight text-fg-brand md:text-2xl">
              {title}
            </h1>
            {resolvedTitleTooltip ? (
              <InfoTooltip content={resolvedTitleTooltip} label={`En savoir plus sur ${title}`} />
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground">{resolvedDescription}</p>
        </div>
        {actions || (addHref && addLabel) ? (
          <div className="flex flex-wrap items-center gap-2">
            {actions}
            {addHref && addLabel ? (
              <AddButton href={addHref} size="sm">
                {addLabel}
              </AddButton>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="text-sm text-body">
          Affichage <span className="font-semibold text-heading">{pageFrom}</span> à{" "}
          <span className="font-semibold text-heading">{pageTo}</span> sur{" "}
          <span className="font-semibold text-heading">{totalCount}</span> entrées
        </div>

        <div className="flex w-full flex-col gap-2 md:flex-1 md:flex-row md:items-center md:justify-end md:gap-3">
          <div className="relative w-full md:max-w-[50%] md:flex-1">
            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
            <input
              className="h-10 w-full rounded-base border border-default bg-neutral-primary-soft ps-10 pe-9 text-sm text-body placeholder:text-body/70 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  onChange("");
                  event.preventDefault();
                }
              }}
            />
            {value ? (
              <button
                type="button"
                onClick={() => onChange("")}
                className="absolute inset-y-0 end-0 flex items-center pe-3 text-muted-foreground transition-colors hover:text-heading"
                aria-label="Effacer la recherche"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
          {children ? <div className="flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

const normalizeTitle = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();

const inferTitleTooltip = (title: string) => {
  const normalized = normalizeTitle(title);

  if (normalized.includes("tableau de bord")) {
    return "Vue d'ensemble du backoffice, avec les indicateurs et raccourcis les plus utiles.";
  }
  if (normalized.includes("statistiques")) {
    return "Vue d'analyse pour suivre l'activité, les volumes de contenus et les usages.";
  }
  if (normalized.includes("controle editorial")) {
    return "Espace de suivi pour vérifier, corriger et publier les contenus éditoriaux.";
  }
  if (normalized.includes("journal de connexion")) {
    return "Historique des connexions des comptes administrateurs et utilisateurs.";
  }
  if (normalized.includes("qcm")) {
    return "Un QCM regroupe une série de questions d'entraînement ou d'évaluation, avec une correction attendue.";
  }
  if (normalized.includes("question")) {
    return "Une question est un item élémentaire qui peut être rattaché à un chapitre, un quiz ou un sujet.";
  }
  if (normalized.includes("exercice")) {
    return "Un exercice est un contenu d'entraînement exploitable côté étudiant, souvent rattaché à un sujet.";
  }
  if (normalized.includes("sujet")) {
    return "Un sujet d'examen structure une épreuve complète avec ses métadonnées et ses documents associés.";
  }
  if (normalized.includes("diplome")) {
    return "Un diplôme regroupe une filière ou un ensemble d'enseignements servant de base aux annales et contenus associés.";
  }
  if (normalized.includes("matiere")) {
    return "Une matière est le point d'entrée disciplinaire qui sert à organiser les contenus et les sujets d'examen.";
  }
  if (normalized.includes("domaine")) {
    return "Un domaine regroupe plusieurs thèmes proches au sein d'une même matière.";
  }
  if (normalized.includes("theme")) {
    return "Un thème correspond à une notion pédagogique réutilisable pour les exercices, QCM et annales.";
  }
  if (normalized.includes("enseignement")) {
    return "Un enseignement décrit un bloc de contenu pédagogique rattaché à un programme ou à une année.";
  }
  if (normalized.includes("programme") || normalized.includes("curriculum")) {
    return "Un programme définit le cadre pédagogique de référence utilisé pour organiser les contenus.";
  }
  if (normalized.includes("division")) {
    return "Une division sert à organiser des parcours ou des répartitions internes dans le référentiel.";
  }
  if (normalized.includes("centre dexamen") || normalized.includes("centre d examen")) {
    return "Un centre d'examen représente un lieu où une épreuve peut être organisée.";
  }
  if (normalized.includes("source de correction")) {
    return "Une source de correction référence l'éditeur ou l'origine du corrigé associé à un sujet.";
  }
  if (normalized.includes("utilisateur")) {
    return "La liste des utilisateurs permet de suivre les comptes, leurs rôles et leurs droits.";
  }
  if (normalized.includes("maquette")) {
    return "En santé, une maquette correspond à la version locale d'un programme pour une université et une année donnée.";
  }
  if (normalized.includes("parcours")) {
    return "Un parcours désigne une déclinaison locale d'une maquette, souvent associée à une offre Parcoursup.";
  }
  if (normalized.includes("bloc")) {
    return "Un bloc regroupe plusieurs UE selon une logique pédagogique commune dans une maquette.";
  }
  if (normalized.includes("ue")) {
    return "Une UE est une unité d'enseignement exploitable pour les QCM, colles, examens blancs et annales.";
  }
  if (normalized.includes("etablissement")) {
    return "Un établissement représente l'université ou la structure porteuse de l'offre concernée.";
  }

  return "Cette liste rassemble les éléments administrables de la section.";
};
