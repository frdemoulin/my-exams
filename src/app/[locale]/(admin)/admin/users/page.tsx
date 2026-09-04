import { Metadata } from "next";
import { redirect } from "next/navigation";
import { fetchUsersForAdmin } from "@/core/user";
import getSession from "@/lib/auth/get-session";
import { UserListTable } from "./_components/user-list-table";
import { AdminPageHeading } from "@/components/shared/admin-page-heading";

export const metadata: Metadata = {
  title: "Gestion des utilisateurs et affectations",
};

interface UsersPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
    pageSize?: string;
  }>;
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const { q, page, pageSize } = await searchParams;

  const result = await fetchUsersForAdmin({
    search: q,
    page,
    pageSize,
  });

  return (
    <div className="w-full space-y-6 p-6">
      <AdminPageHeading
        title="Gestion des comptes et affectations"
        description="Consultez les utilisateurs et administrez leurs affectations pédagogiques annuelles."
      />
      <UserListTable
        users={result.users}
        totalCount={result.totalCount}
        page={result.page}
        pageSize={result.pageSize}
        totalPages={result.totalPages}
        activeYearCode={result.activeYearCode}
        currentSearch={q || ""}
      />
    </div>
  );
};

export default UsersPage;
