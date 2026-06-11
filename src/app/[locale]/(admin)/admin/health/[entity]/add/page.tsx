import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/shared/admin-page-heading";
import { fetchHealthFormOptions, healthEntityLabels, isHealthEntity } from "@/core/health";
import { HealthForm } from "../../_components/health-form";

export default async function AddHealthEntityPage({ params }: { params: Promise<{ entity: string }> }) {
    const { entity } = await params;
    if (!isHealthEntity(entity)) notFound();
    const options = await fetchHealthFormOptions();

    return (
        <div className="w-full p-6">
            <AdminPageHeading title={`Ajouter ${healthEntityLabels[entity].indefinite}`} className="mb-6" />
            <HealthForm entity={entity} options={options} />
        </div>
    );
}
