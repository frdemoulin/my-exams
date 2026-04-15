import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchChapters } from "@/core/chapter";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.chapter");
  return { title: t("actions.list") };
}

export default async function ChaptersPage() {
  const chapters = await fetchChapters({ includeInactive: true });
  const t = await getTranslations("entities.chapter");

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable title={t("actions.list")} columns={columns} data={chapters} />
      </div>
    </div>
  );
}