import { Metadata } from "next";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchChapters } from "@/core/chapter";

export const metadata: Metadata = {
  title: "Quiz d'entraînement",
};

export default async function TrainingQcmsPage() {
  const chapters = await fetchChapters({ includeInactive: true });

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable title="Quiz d'entraînement" columns={columns} data={chapters} />
      </div>
    </div>
  );
}
