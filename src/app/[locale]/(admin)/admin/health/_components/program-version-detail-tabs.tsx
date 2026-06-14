import { Tabs, TabItem } from "flowbite-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    HealthFormOptions,
    HealthProgramVersionBlockSummary,
    HealthProgramVersionPathwaySummary,
    HealthRecord,
    healthCourseUnitCoverageStatusLabels,
} from "@/core/health";
import { formatDateTime } from "@/lib/utils";

import { HealthDetail } from "./health-detail";

type ProgramVersionDetailTabsProps = {
    record: HealthRecord;
    options: HealthFormOptions;
    pathways: HealthProgramVersionPathwaySummary[];
    blocks: HealthProgramVersionBlockSummary[];
};

const coverageStatusVariant: Record<string, "default" | "outline" | "secondary"> = {
    STRUCTURE_ONLY: "secondary",
    THEMES_MAPPED: "outline",
    QUESTIONS_AVAILABLE: "default",
    READY: "default",
};

const programVersionTabsTheme = {
    base: "flex flex-col gap-2",
    tablist: {
        base: "text-sm font-medium text-center text-body border-b border-default",
        variant: {
            underline: "flex flex-wrap -mb-px",
        },
        tabitem: {
            base: "inline-block p-4 border-b border-transparent rounded-t-base focus:outline-none disabled:cursor-not-allowed disabled:text-body/50",
            variant: {
                underline: {
                    base: "",
                    active: {
                        on: "text-fg-brand border-b border-brand rounded-t-base",
                        off: "text-body hover:text-fg-brand hover:border-brand",
                    },
                },
            },
            icon: "mr-2 h-5 w-5",
        },
    },
    tabitemcontainer: {
        base: "",
        variant: {
            underline: "",
        },
    },
    tabpanel: "pt-6",
};

export function ProgramVersionDetailTabs({
    record,
    options,
    pathways,
    blocks,
}: ProgramVersionDetailTabsProps) {
    const totalCourseUnits = blocks.reduce((total, block) => total + block.courseUnits.length, 0);

    return (
        <Tabs variant="underline" className="mt-6" theme={programVersionTabsTheme}>
            <TabItem active title="Informations générales">
                <HealthDetail entity="program-versions" record={record} options={options} />
            </TabItem>
            <TabItem
                title={
                    <span className="inline-flex items-center gap-2">
                        <span>Parcours</span>
                        <Badge variant="outline">{pathways.length}</Badge>
                    </span>
                }
            >
                <div className="grid gap-4">
                    {pathways.length > 0 ? (
                        pathways.map((pathway) => (
                            <Card key={pathway.id}>
                                <CardHeader className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <CardTitle>{pathway.name}</CardTitle>
                                        {pathway.isDefault ? <Badge variant="default">Parcours par défaut</Badge> : null}
                                        <Badge variant={pathway.isPublished ? "default" : "secondary"}>
                                            {pathway.isPublished ? "Publié" : "Brouillon"}
                                        </Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                        <span>{pathway.slug}</span>
                                        <span>Ordre {pathway.order}</span>
                                        {pathway.campus ? <span>{pathway.campus}</span> : null}
                                        {pathway.parcoursupCode ? <span>Parcoursup {pathway.parcoursupCode}</span> : null}
                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-3 md:grid-cols-3">
                                    <Meta label="Blocs" value={String(pathway.blockCount)} />
                                    <Meta label="UE" value={String(pathway.courseUnitCount)} />
                                    <Meta label="Statut" value={pathway.isActive ? "Actif" : "Inactif"} />
                                    <div className="md:col-span-3">
                                        <p className="text-sm text-body">
                                            {pathway.description ?? "Aucune description renseignée."}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <EmptyState title="Aucun parcours" description="Cette maquette n'a pas encore de parcours rattaché." />
                    )}
                </div>
            </TabItem>
            <TabItem
                title={
                    <span className="inline-flex items-center gap-2">
                        <span>UE Santé</span>
                        <Badge variant="outline">{totalCourseUnits}</Badge>
                    </span>
                }
            >
                <div className="grid gap-4">
                    {blocks.length > 0 ? (
                        blocks.map((block) => (
                            <Card key={block.id}>
                                <CardHeader className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <CardTitle>{block.title}</CardTitle>
                                        <Badge variant={block.isPublished ? "default" : "secondary"}>
                                            {block.isPublished ? "Publié" : "Brouillon"}
                                        </Badge>
                                        <Badge variant={block.isActive ? "default" : "secondary"}>
                                            {block.isActive ? "Actif" : "Inactif"}
                                        </Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                        <span>{block.slug}</span>
                                        <span>Ordre {block.order}</span>
                                        {block.ects != null ? <span>{block.ects} ECTS</span> : null}
                                        {block.pathwayName ? <span>{block.pathwayName}</span> : <span>Commun à la maquette</span>}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {block.description ? (
                                        <p className="text-sm text-body">{block.description}</p>
                                    ) : null}
                                    <div className="grid gap-3">
                                        {block.courseUnits.map((courseUnit) => (
                                            <div
                                                key={courseUnit.id}
                                                className="rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs"
                                            >
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <div className="font-semibold text-heading">{courseUnit.title}</div>
                                                    {courseUnit.shortTitle ? (
                                                        <span className="text-sm text-muted-foreground">
                                                            {courseUnit.shortTitle}
                                                        </span>
                                                    ) : null}
                                                    <Badge
                                                        variant={
                                                            coverageStatusVariant[courseUnit.coverageStatus] ?? "secondary"
                                                        }
                                                    >
                                                        {healthCourseUnitCoverageStatusLabels[courseUnit.coverageStatus]}
                                                    </Badge>
                                                    {courseUnit.isCommonToAllPathways ? (
                                                        <Badge variant="default">Commune à tous les parcours</Badge>
                                                    ) : null}
                                                    {courseUnit.isHealthAccessRelevant ? (
                                                        <Badge variant="default">Accès santé</Badge>
                                                    ) : null}
                                                </div>
                                                <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                                                    {courseUnit.code ? <span>{courseUnit.code}</span> : null}
                                                    {courseUnit.pathwayName ? <span>{courseUnit.pathwayName}</span> : null}
                                                    {courseUnit.semester != null ? <span>Semestre {courseUnit.semester}</span> : null}
                                                    {courseUnit.ects != null ? <span>{courseUnit.ects} ECTS</span> : null}
                                                    <span>Ordre {courseUnit.order}</span>
                                                    <span>{courseUnit.teachingElements.length} EC</span>
                                                </div>
                                                {courseUnit.description ? (
                                                    <p className="mt-2 text-sm text-body">{courseUnit.description}</p>
                                                ) : null}
                                                {courseUnit.teachingElements.length > 0 ? (
                                                    <div className="mt-3 space-y-2">
                                                        {courseUnit.teachingElements.map((teachingElement) => (
                                                            <div
                                                                key={teachingElement.id}
                                                                className="rounded-base border border-default bg-background p-3"
                                                            >
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <span className="font-medium text-heading">
                                                                        {teachingElement.title}
                                                                    </span>
                                                                    {teachingElement.code ? (
                                                                        <span className="text-sm text-muted-foreground">
                                                                            {teachingElement.code}
                                                                        </span>
                                                                    ) : null}
                                                                    <Badge
                                                                        variant={
                                                                            teachingElement.isPublished
                                                                                ? "default"
                                                                                : "secondary"
                                                                        }
                                                                    >
                                                                        {teachingElement.isPublished ? "Publié" : "Brouillon"}
                                                                    </Badge>
                                                                </div>
                                                                <div className="mt-1 text-sm text-muted-foreground">
                                                                    Ordre {teachingElement.order}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : null}
                                                {courseUnit.themes.length > 0 ? (
                                                    <div className="mt-3 flex flex-wrap gap-2">
                                                        {courseUnit.themes.map((theme) => (
                                                            <Badge key={theme.id} color="gray">
                                                                {theme.shortTitle ?? theme.title}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                ) : null}
                                                <div className="mt-3 text-xs text-muted-foreground">
                                                    {courseUnit.sourceLabel ? <span>{courseUnit.sourceLabel}</span> : null}
                                                    {courseUnit.sourceUrl ? <span className="ml-2">{courseUnit.sourceUrl}</span> : null}
                                                    {courseUnit.sourceCheckedAt ? (
                                                        <span className="ml-2">
                                                            Vérifiée le {formatDateTime(new Date(courseUnit.sourceCheckedAt))}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <EmptyState
                            title="Aucune UE Santé"
                            description="Aucune UE n'est encore rattachée au bloc Santé de cette maquette."
                        />
                    )}
                </div>
            </TabItem>
        </Tabs>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-base border border-default bg-background p-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
            <div className="mt-1 text-sm font-semibold text-heading">{value}</div>
        </div>
    );
}

function EmptyState({ title, description }: { title: string; description: string }) {
    return (
        <Card>
            <CardContent className="py-8 text-center">
                <div className="text-sm font-semibold text-heading">{title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
