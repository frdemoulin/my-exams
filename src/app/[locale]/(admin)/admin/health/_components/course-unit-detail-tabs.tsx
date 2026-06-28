"use client";

import Link from "next/link";
import { TabItem, Tabs } from "flowbite-react";

import { AddButton } from "@/components/shared/add-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    HealthCourseUnitTeachingElementSummary,
    HealthFormOptions,
    HealthRecord,
    healthCourseUnitCoverageStatusLabels,
} from "@/core/health";

import { healthCoverageStatusBadgeVariant, healthTabsTheme } from "./health-tabs.constants";
import { HealthDetail } from "./health-detail";

type CourseUnitDetailTabsProps = {
    courseUnitId: string;
    record: HealthRecord;
    options: HealthFormOptions;
    teachingElements: HealthCourseUnitTeachingElementSummary[];
};

export function CourseUnitDetailTabs({
    courseUnitId,
    record,
    options,
    teachingElements,
}: CourseUnitDetailTabsProps) {
    return (
        <Tabs variant="underline" className="mt-6" theme={healthTabsTheme}>
            <TabItem active title="Informations générales">
                <HealthDetail entity="course-units" record={record} options={options} />
            </TabItem>
            <TabItem
                title={
                    <span className="inline-flex items-center gap-2">
                        <span>Éléments constitutifs</span>
                        <Badge variant="outline">{teachingElements.length}</Badge>
                    </span>
                }
            >
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between gap-4">
                        <div>
                            <CardTitle>Éléments constitutifs</CardTitle>
                        </div>
                        <AddButton href={`/admin/health/teaching-elements/add?courseUnitId=${courseUnitId}`}>
                            Ajouter un EC à cette UE
                        </AddButton>
                    </CardHeader>
                    <CardContent>
                        {teachingElements.length > 0 ? (
                            <div className="space-y-3">
                                {teachingElements.map((teachingElement, index) => {
                                    const displayOrder = teachingElement.order > 0 ? teachingElement.order : index + 1;

                                    return (
                                        <div
                                            key={teachingElement.id}
                                            className="rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs"
                                        >
                                            <div className="flex flex-wrap items-center gap-2">
                                                <Link
                                                    href={`/admin/health/teaching-elements/${teachingElement.id}`}
                                                    className="font-semibold text-heading hover:text-fg-brand"
                                                >
                                                    {`EC${displayOrder} - ${teachingElement.title}`}
                                                </Link>
                                                {teachingElement.code ? (
                                                    <span className="text-sm text-muted-foreground">
                                                        {teachingElement.code}
                                                    </span>
                                                ) : null}
                                                <Badge
                                                    variant={
                                                        healthCoverageStatusBadgeVariant[teachingElement.coverageStatus] ??
                                                        "secondary"
                                                    }
                                                >
                                                    {healthCourseUnitCoverageStatusLabels[teachingElement.coverageStatus]}
                                                </Badge>
                                                <Badge variant={teachingElement.isPublished ? "default" : "outline"}>
                                                    {teachingElement.isPublished ? "Publié" : "Brouillon"}
                                                </Badge>
                                                <Badge variant="secondary">
                                                    {teachingElement.themes.length} thème
                                                    {teachingElement.themes.length > 1 ? "s" : ""}
                                                </Badge>
                                                <Badge variant={teachingElement.isActive ? "default" : "secondary"}>
                                                    {teachingElement.isActive ? "Actif" : "Inactif"}
                                                </Badge>
                                            </div>
                                            {teachingElement.description ? (
                                                <p className="mt-2 text-sm text-body">{teachingElement.description}</p>
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Aucun élément constitutif n&apos;est encore rattaché à cette UE.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </TabItem>
        </Tabs>
    );
}
