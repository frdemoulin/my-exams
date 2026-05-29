import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { fetchSubdomainsWithIncludes } from "@/core/subdomain";
import { fetchSubjectsOptions } from "@/core/subject";
import { fetchDomainsOptions } from "@/core/domain";
import getSession from "@/lib/auth/get-session";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.subdomain");
  return { title: t("actions.list") };
}

const SubdomainsPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const subdomains = await fetchSubdomainsWithIncludes({ includeInactive: true });
  const subjects = await fetchSubjectsOptions({ includeInactive: true });
  const domains = await fetchDomainsOptions({ includeInactive: true });
  const t = await getTranslations("entities.subdomain");

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable
          title={t("actions.list")}
          columns={columns}
          data={subdomains}
          subjects={subjects}
          domains={domains}
        />
      </div>
    </div>
  );
};

export default SubdomainsPage;
