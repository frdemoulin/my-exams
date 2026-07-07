import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HealthEntity,
  HealthFormOptions,
  HealthRecord,
  healthCourseUnitCoverageStatusLabels,
  healthQuizAnswerFormatLabels,
} from "@/core/health";
import { formatDateTime } from "@/lib/utils";
import type { Option } from "@/types/option";

type DetailField = {
  key: string;
  label: string;
  option?: keyof HealthFormOptions;
  optionList?: keyof HealthFormOptions;
  type?: "date" | "external-link" | "boolean" | "multiline" | "coverage-status" | "quiz-answer-format";
};

const fieldsByEntity: Record<HealthEntity, DetailField[]> = {
  institutions: [
    { key: "name", label: "Nom" },
    { key: "shortName", label: "Nom court" },
    { key: "slug", label: "Slug" },
    { key: "uaiCode", label: "Code UAI" },
    { key: "city", label: "Ville" },
    { key: "academy", label: "Académie" },
    { key: "region", label: "Région" },
    { key: "department", label: "Département" },
    { key: "websiteUrl", label: "Site web", type: "external-link" },
  ],
  programs: [
    { key: "label", label: "Libellé" },
    { key: "code", label: "Code" },
    { key: "type", label: "Type" },
    { key: "description", label: "Description", type: "multiline" },
  ],
  "program-versions": [
    { key: "label", label: "Libellé" },
    { key: "institutionId", label: "Établissement", option: "institutions" },
    { key: "programId", label: "Programme", option: "programs" },
    { key: "slug", label: "Slug" },
    { key: "academicYear", label: "Année universitaire" },
    { key: "studyLevel", label: "Niveau" },
    { key: "sourceLabel", label: "Libellé de la source" },
    { key: "sourceUrl", label: "Source", type: "external-link" },
    { key: "sourceCheckedAt", label: "Source vérifiée le", type: "date" },
    { key: "isCurrent", label: "Maquette courante", type: "boolean" },
    { key: "notes", label: "Notes", type: "multiline" },
  ],
  pathways: [
    { key: "name", label: "Nom" },
    { key: "programVersionId", label: "Maquette", option: "programVersions" },
    { key: "slug", label: "Slug" },
    { key: "campus", label: "Campus" },
    { key: "parcoursupCode", label: "Code Parcoursup" },
    { key: "sourceUrl", label: "Fiche Parcoursup", type: "external-link" },
    { key: "order", label: "Ordre" },
    { key: "isDefault", label: "Parcours par défaut", type: "boolean" },
    { key: "description", label: "Description", type: "multiline" },
  ],
  blocks: [
    { key: "title", label: "Titre" },
    { key: "programVersionId", label: "Maquette", option: "programVersions" },
    { key: "pathwayId", label: "Parcours", option: "pathways" },
    { key: "type", label: "Type" },
    { key: "slug", label: "Slug" },
    { key: "ects", label: "ECTS" },
    { key: "order", label: "Ordre" },
    { key: "description", label: "Description", type: "multiline" },
  ],
  "course-units": [
    { key: "title", label: "Titre" },
    { key: "shortTitle", label: "Titre court" },
    { key: "code", label: "Code" },
    { key: "programVersionId", label: "Maquette", option: "programVersions" },
    { key: "pathwayId", label: "Parcours", option: "pathways" },
    { key: "blockId", label: "Bloc", option: "blocks" },
    { key: "slug", label: "Slug" },
    { key: "semester", label: "Semestre" },
    { key: "ects", label: "ECTS" },
    { key: "order", label: "Ordre" },
    { key: "sourceLabel", label: "Libellé de la source" },
    { key: "sourceUrl", label: "Source", type: "external-link" },
    { key: "sourceCheckedAt", label: "Source vérifiée le", type: "date" },
    {
      key: "isCommonToAllPathways",
      label: "Commune à tous les parcours",
      type: "boolean",
    },
    {
      key: "isHealthAccessRelevant",
      label: "Pertinente pour l'accès santé",
      type: "boolean",
    },
    { key: "coverageStatus", label: "Niveau de couverture", type: "coverage-status" },
    { key: "themeIds", label: "Thèmes associés", optionList: "themes" },
    { key: "description", label: "Description", type: "multiline" },
  ],
  "teaching-elements": [
    { key: "title", label: "Titre" },
    { key: "shortTitle", label: "Titre court" },
    { key: "code", label: "Code" },
    { key: "courseUnitId", label: "UE", option: "courseUnits" },
    { key: "slug", label: "Slug" },
    { key: "order", label: "Ordre" },
    { key: "quizAnswerFormatDefault", label: "Format de réponse QCM par défaut", type: "quiz-answer-format" },
    { key: "sourceLabel", label: "Libellé de la source" },
    { key: "sourceUrl", label: "Source", type: "external-link" },
    { key: "sourceCheckedAt", label: "Source vérifiée le", type: "date" },
    { key: "coverageStatus", label: "Niveau de couverture", type: "coverage-status" },
    { key: "themeIds", label: "Thèmes associés", optionList: "themes" },
    { key: "description", label: "Description", type: "multiline" },
  ],
};

export function getHealthRecordTitle(
  entity: HealthEntity,
  record: HealthRecord,
) {
  const titleKey: Record<HealthEntity, string> = {
    institutions: "name",
    programs: "label",
    "program-versions": "label",
    pathways: "name",
    blocks: "title",
    "course-units": "title",
    "teaching-elements": "title",
  };

  return String(record[titleKey[entity]] ?? "");
}

export function HealthDetail({
  entity,
  record,
  options,
}: {
  entity: HealthEntity;
  record: HealthRecord;
  options: HealthFormOptions;
}) {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {fieldsByEntity[entity].map((field) => (
              <Info
                key={field.key}
                label={field.label}
                value={renderValue(field, record[field.key], options)}
                wide={field.type === "multiline" || field.optionList !== undefined}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Publication</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant={record.isActive ? "default" : "secondary"}>
              {record.isActive ? "Actif" : "Inactif"}
            </Badge>
            <Badge variant={record.isPublished ? "default" : "outline"}>
              {record.isPublished ? "Publié" : "Brouillon"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suivi</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Info label="Créé le" value={formatRecordDate(record.createdAt)} />
            <Info label="Modifié le" value={formatRecordDate(record.updatedAt)} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function renderValue(
  field: DetailField,
  value: HealthRecord[string],
  options: HealthFormOptions,
) {
  if (field.option) {
    return findOptionLabel(options[field.option], value);
  }

  if (field.optionList) {
    const ids = Array.isArray(value) ? value : [];
    if (ids.length === 0) return "—";
    return (
      <div className="flex flex-wrap gap-2">
        {ids.map((id) => (
          <Badge key={id} variant="outline">
            {findOptionLabel(options[field.optionList!], id)}
          </Badge>
        ))}
      </div>
    );
  }

  if (field.type === "boolean") {
    return (
      <Badge variant={value ? "default" : "secondary"}>
        {value ? "Oui" : "Non"}
      </Badge>
    );
  }

  if (field.type === "coverage-status") {
    const status = typeof value === "string" && value ? value : "STRUCTURE_ONLY";
    const variant =
      status === "STRUCTURE_ONLY"
        ? "secondary"
        : status === "THEMES_MAPPED"
          ? "outline"
          : "default";

    return (
      <Badge variant={variant}>
        {healthCourseUnitCoverageStatusLabels[status as keyof typeof healthCourseUnitCoverageStatusLabels] ?? status}
      </Badge>
    );
  }

  if (field.type === "quiz-answer-format") {
    const format = typeof value === "string" && value ? value : "SINGLE";

    return (
      <Badge variant={format === "MULTIPLE" ? "outline" : "secondary"}>
        {healthQuizAnswerFormatLabels[format as keyof typeof healthQuizAnswerFormatLabels] ?? format}
      </Badge>
    );
  }

  if (field.type === "date") {
    return formatRecordDate(value);
  }

  if (field.type === "external-link" && typeof value === "string" && value) {
    return (
      <Link
        href={value}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-fg-brand hover:underline"
      >
        {value}
        <ExternalLink className="h-3.5 w-3.5" />
      </Link>
    );
  }

  return value === null || value === undefined || value === ""
    ? "—"
    : String(value);
}

function findOptionLabel(
  options: Option[] | (Option & Record<string, unknown>)[],
  value: HealthRecord[string],
) {
  if (typeof value !== "string" || !value) return "—";
  return options.find((option) => option.value === value)?.label ?? value;
}

function formatRecordDate(value: HealthRecord[string]) {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(String(value));
  return Number.isNaN(date.getTime()) ? String(value) : formatDateTime(date);
}

function Info({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2" : undefined}>
      <h3 className="text-sm font-semibold text-muted-foreground">{label}</h3>
      <div className="mt-1 whitespace-pre-wrap break-words text-sm">{value}</div>
    </div>
  );
}
