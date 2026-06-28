import Link from "next/link";
import { Pencil } from "lucide-react";
import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { Button } from "@/components/ui/button";
import {
    fetchHealthCourseUnitTeachingElements,
    fetchHealthFormOptions,
    fetchHealthProgramVersionBlocks,
    fetchHealthProgramVersionPathways,
    fetchHealthRecord,
    fetchHealthTeachingElementChapterAssignments,
    healthEntityLabels,
    isHealthEntity,
} from "@/core/health";
import { CourseUnitDetailTabs } from "../../_components/course-unit-detail-tabs";
import { getHealthRecordTitle, HealthDetail } from "../../_components/health-detail";
import { ProgramVersionDetailTabs } from "../../_components/program-version-detail-tabs";
import { TeachingElementDetailTabs } from "../../_components/teaching-element-detail-tabs";

export default async function HealthEntityDetailPage({
    params,
}: {
    params: Promise<{ entity: string; id: string }>;
}) {
    const { entity, id } = await params;
    if (!isHealthEntity(entity)) notFound();
    const [record, options] = await Promise.all([
        fetchHealthRecord(entity, id),
        fetchHealthFormOptions(),
    ]);
    if (!record) notFound();
    const title = getHealthRecordTitle(entity, record);

    const programVersionTabs =
        entity === "program-versions"
            ? await Promise.all([
                  fetchHealthProgramVersionPathways(id),
                  fetchHealthProgramVersionBlocks(id),
              ])
            : null;
    const teachingElements =
        entity === "course-units"
            ? await fetchHealthCourseUnitTeachingElements(id)
            : null;
    const chapterAssignments =
        entity === "teaching-elements"
            ? await fetchHealthTeachingElementChapterAssignments(id)
            : null;

    return (
        <div className="w-full p-6">
            <AdminPageHeading
                title={title || `Détail du ${healthEntityLabels[entity].singular}`}
                description={`Consulte les informations et les statuts de ${healthEntityLabels[entity].demonstrative} du référentiel santé.`}
                actions={
                    <>
                        <Button asChild variant="outline">
                            <Link href={`/admin/health/${entity}`}>Retour</Link>
                        </Button>
                        <Button asChild variant="warning" size="icon" aria-label={`Éditer ${healthEntityLabels[entity].singular}`}>
                            <Link href={`/admin/health/${entity}/${id}/edit`}>
                                <Pencil className="h-4 w-4" />
                            </Link>
                        </Button>
                    </>
                }
            />
            {entity === "program-versions" && programVersionTabs ? (
                <ProgramVersionDetailTabs
                    record={record}
                    options={options}
                    pathways={programVersionTabs[0]}
                    blocks={programVersionTabs[1]}
                />
            ) : entity === "course-units" && teachingElements ? (
                <CourseUnitDetailTabs
                    courseUnitId={id}
                    record={record}
                    options={options}
                    teachingElements={teachingElements}
                />
            ) : entity === "teaching-elements" && chapterAssignments ? (
                <TeachingElementDetailTabs
                    record={record}
                    options={options}
                    chapterAssignments={chapterAssignments}
                />
            ) : (
                <div className="mt-6">
                    <HealthDetail entity={entity} record={record} options={options} />
                </div>
            )}
        </div>
    );
}
