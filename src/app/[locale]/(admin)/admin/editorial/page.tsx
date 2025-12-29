import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";

export const metadata: Metadata = {
  title: "Contrôle éditorial",
};

const EditorialPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in?callbackUrl=/admin/editorial");
  }

  const exercises = await prisma.exercise.findMany({
    include: {
      examPaper: {
        select: {
          id: true,
          label: true,
          sessionYear: true,
          teaching: {
            select: {
              longDescription: true,
              shortDescription: true,
              grade: {
                select: {
                  shortDescription: true,
                },
              },
              subject: {
                select: {
                  shortDescription: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable title="Contrôle éditorial" columns={columns} data={exercises} />
      </div>
    </div>
  );
};

export default EditorialPage;
