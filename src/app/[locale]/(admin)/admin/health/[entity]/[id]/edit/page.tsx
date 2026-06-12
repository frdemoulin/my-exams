import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { fetchHealthFormOptions, fetchHealthRecord, healthEntityLabels, isHealthEntity } from "@/core/health";
import { HealthForm } from "../../../_components/health-form";

export default async function EditHealthEntityPage({
    params,
}: {
    params: Promise<{ entity: string; id: string }>;
}) {
    const { entity, id } = await params;
    if (!isHealthEntity(entity)) notFound();
    const [record, options] = await Promise.all([fetchHealthRecord(entity, id), fetchHealthFormOptions()]);
    if (!record) notFound();

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={`Modifier ${healthEntityLabels[entity].definite}`} className="mb-6" />
            <HealthForm entity={entity} record={record} options={options} />
        </div>
    );
}
