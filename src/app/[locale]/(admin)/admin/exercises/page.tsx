import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("entities.exercise");
  return { title: t("actions.list") };
}

const ExercisesPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/log-in");
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

  const t = await getTranslations("entities.exercise");

  return (
    <div className="w-full p-6">
      <div className="container mx-auto">
        <DataTable title={t("actions.list")} columns={columns} data={exercises} />
      </div>
    </div>
  );
};

export default ExercisesPage;
