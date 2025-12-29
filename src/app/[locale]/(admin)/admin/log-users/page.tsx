import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";

export const metadata: Metadata = {
  title: "Journal de connexion",
};

const LogUsersPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
  }

  const logs = await prisma.authLog.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable title="Journal de connexion" columns={columns} data={logs} />
      </div>
    </div>
  );
};

export default LogUsersPage;
