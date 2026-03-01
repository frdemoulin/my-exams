import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DataTable } from "./_components/data-table";
import { columns, type AuthLogListItem } from "./_components/columns";
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
    select: {
      id: true,
      userId: true,
      action: true,
      provider: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  const userIds = Array.from(new Set(logs.map((log) => log.userId)));
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  const usersById = new Map(users.map((user) => [user.id, user]));
  const logsWithUsers: AuthLogListItem[] = logs.flatMap((log) => {
    const user = usersById.get(log.userId);
    if (!user) {
      return [];
    }
    return [
      {
        ...log,
        user,
      },
    ];
  });

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable
          title="Journal de connexion"
          columns={columns}
          data={logsWithUsers}
        />
      </div>
    </div>
  );
};

export default LogUsersPage;
