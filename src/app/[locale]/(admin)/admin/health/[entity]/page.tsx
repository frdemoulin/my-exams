import { notFound } from "next/navigation";

import { fetchHealthAdminRows, isHealthEntity } from "@/core/health";
import { HealthAdminTable } from "../_components/health-admin-table";

export default async function HealthEntityPage({ params }: { params: Promise<{ entity: string }> }) {
    const { entity } = await params;
    if (!isHealthEntity(entity)) notFound();

    const rows = await fetchHealthAdminRows(entity);
    return (
        <div className="w-full p-6">
            <div className="container mx-auto">
                <HealthAdminTable entity={entity} rows={rows} />
            </div>
        </div>
    );
}
