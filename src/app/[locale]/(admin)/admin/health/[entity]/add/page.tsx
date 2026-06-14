import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { fetchHealthFormOptions, healthEntityLabels, isHealthEntity } from "@/core/health";
import { HealthForm } from "../../_components/health-form";

export default async function AddHealthEntityPage({
    params,
    searchParams,
}: {
    params: Promise<{ entity: string }>;
    searchParams?: Promise<{ courseUnitId?: string }>;
}) {
    const { entity } = await params;
    if (!isHealthEntity(entity)) notFound();
    const options = await fetchHealthFormOptions();
    const resolvedSearchParams = searchParams ? await searchParams : undefined;
    const initialRecord =
        entity === "teaching-elements"
            ? { courseUnitId: resolvedSearchParams?.courseUnitId ?? "" }
            : undefined;

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={`Ajouter ${healthEntityLabels[entity].indefinite}`} className="mb-6" />
            <HealthForm entity={entity} options={options} record={initialRecord} />
        </div>
    );
}
