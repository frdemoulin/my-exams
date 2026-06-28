import Link from "next/link";
import { TabItem, Tabs } from "flowbite-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contentVerticalLabels } from "@/core/chapter/chapter.constants";
import {
  HealthFormOptions,
  HealthRecord,
  HealthTeachingElementChapterAssignmentSummary,
  healthCourseUnitCoverageStatusLabels,
} from "@/core/health";
import { formatDate, formatDateTime } from "@/lib/utils";

import {
  healthCoverageStatusBadgeVariant,
  healthTabsTheme,
} from "./health-tabs.constants";
import { HealthDetail } from "./health-detail";

type TeachingElementDetailTabsProps = {
  record: HealthRecord;
  options: HealthFormOptions;
  chapterAssignments: HealthTeachingElementChapterAssignmentSummary[];
};

type AssignmentGroup = {
  key: string;
  label: string;
  order: number;
  assignments: HealthTeachingElementChapterAssignmentSummary[];
};

function groupAssignments(
  assignments: HealthTeachingElementChapterAssignmentSummary[]
): AssignmentGroup[] {
  const groupedAssignments = new Map<string, AssignmentGroup>();

  for (const assignment of [...assignments].sort((left, right) => {
    const byGroup =
      (left.displayGroupOrder ?? Number.MAX_SAFE_INTEGER) -
      (right.displayGroupOrder ?? Number.MAX_SAFE_INTEGER);
    if (byGroup !== 0) return byGroup;
    if (left.order !== right.order) return left.order - right.order;
    return left.chapterTitle.localeCompare(right.chapterTitle, "fr", {
      sensitivity: "base",
      numeric: true,
    });
  })) {
    const key = assignment.displayGroupKey?.trim() || "__ungrouped__";
    const label = assignment.displayGroupLabel?.trim() || "Autres chapitres";
    const order = assignment.displayGroupOrder ?? Number.MAX_SAFE_INTEGER;
    const group = groupedAssignments.get(key);

    if (group) {
      group.assignments.push(assignment);
      continue;
    }

    groupedAssignments.set(key, {
      key,
      label,
      order,
      assignments: [assignment],
    });
  }

  return [...groupedAssignments.values()].sort((left, right) => {
    if (left.order !== right.order) return left.order - right.order;
    return left.label.localeCompare(right.label, "fr", {
      sensitivity: "base",
      numeric: true,
    });
  });
}

export function TeachingElementDetailTabs({
  record,
  options,
  chapterAssignments,
}: TeachingElementDetailTabsProps) {
  const groupedAssignments = groupAssignments(chapterAssignments);

  return (
    <Tabs variant="underline" className="mt-6" theme={healthTabsTheme}>
      <TabItem active title="Informations générales">
        <HealthDetail entity="teaching-elements" record={record} options={options} />
      </TabItem>
      <TabItem
        title={
          <span className="inline-flex items-center gap-2">
            <span>Chapitres</span>
            <Badge variant="outline">{chapterAssignments.length}</Badge>
          </span>
        }
      >
        <Card>
          <CardHeader>
            <CardTitle>Chapitres associés</CardTitle>
            <CardDescription>
              Ces chapitres servent de support aux colles rattachées à cet EC via le
              contexte « EC santé ».
            </CardDescription>
          </CardHeader>
          <CardContent>
            {chapterAssignments.length > 0 ? (
              <div className="space-y-6">
                {groupedAssignments.map((group) => (
                  <section key={group.key} className="space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold text-heading">{group.label}</h3>
                    </div>
                    {group.assignments.map((assignment) => {
                      const effectiveTitle =
                        assignment.titleOverride?.trim() || assignment.chapterTitle;
                      const hasTitleOverride =
                        Boolean(assignment.titleOverride?.trim()) &&
                        assignment.titleOverride?.trim() !== assignment.chapterTitle;

                      return (
                        <div
                          key={assignment.id}
                          className="rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <Link
                              href={`/admin/chapters/${assignment.chapterId}`}
                              className="font-semibold text-heading hover:text-fg-brand"
                            >
                              {effectiveTitle}
                            </Link>
                            <Badge variant="secondary">
                              {assignment.questionCount} question
                              {assignment.questionCount > 1 ? "s" : ""}
                            </Badge>
                            <Badge
                              variant={
                                healthCoverageStatusBadgeVariant[assignment.coverageStatus] ??
                                "secondary"
                              }
                            >
                              {
                                healthCourseUnitCoverageStatusLabels[assignment.coverageStatus]
                              }
                            </Badge>
                            <Badge variant={assignment.isPublished ? "default" : "outline"}>
                              {assignment.isPublished ? "Publié" : "Brouillon"}
                            </Badge>
                            <Badge variant={assignment.isActive ? "default" : "secondary"}>
                              {assignment.isActive ? "Actif" : "Inactif"}
                            </Badge>
                            {!assignment.chapterIsPublished ? (
                              <Badge variant="outline">Chapitre brouillon</Badge>
                            ) : null}
                            {!assignment.chapterIsActive ? (
                              <Badge variant="secondary">Chapitre inactif</Badge>
                            ) : null}
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <span>{assignment.subjectTitle}</span>
                            <span>
                              {contentVerticalLabels[
                                assignment.chapterVertical as keyof typeof contentVerticalLabels
                              ] ?? assignment.chapterVertical}
                            </span>
                            <span>Ordre {assignment.order}</span>
                            <span>{assignment.chapterSlug}</span>
                          </div>
                          {hasTitleOverride ? (
                            <p className="mt-2 text-sm text-body">
                              Chapitre source : {assignment.chapterTitle}
                            </p>
                          ) : null}
                          {assignment.sourceLabel || assignment.sourceUrl || assignment.sourceCheckedAt ? (
                            <div className="mt-2 text-xs text-muted-foreground">
                              {assignment.sourceLabel ? <span>{assignment.sourceLabel}</span> : null}
                              {assignment.sourceUrl ? (
                                <span className={assignment.sourceLabel ? "ml-2" : ""}>
                                  {assignment.sourceUrl}
                                </span>
                              ) : null}
                              {assignment.sourceCheckedAt ? (
                                <span
                                  className={
                                    assignment.sourceLabel || assignment.sourceUrl ? "ml-2" : ""
                                  }
                                >
                                  Vérifiée le {formatDate(new Date(assignment.sourceCheckedAt))}
                                </span>
                              ) : null}
                            </div>
                          ) : null}
                          <div className="mt-3 flex items-center justify-between gap-3">
                            <span className="text-xs text-muted-foreground">
                              Modifié le {formatDateTime(new Date(assignment.updatedAt))}
                            </span>
                            <Link
                              href={`/admin/chapters/${assignment.chapterId}`}
                              className="text-sm font-medium text-fg-brand hover:underline"
                            >
                              Voir le chapitre
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Aucun chapitre associé"
                description="Aucun chapitre n'est encore rattaché à cet EC via le contexte EC santé."
              />
            )}
          </CardContent>
        </Card>
      </TabItem>
    </Tabs>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-base border border-default bg-background px-4 py-8 text-center">
      <div className="text-sm font-semibold text-heading">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
