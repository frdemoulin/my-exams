import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { auth } from "@/lib/auth/auth";
import { buildCanonicalUrl } from "@/lib/seo";
import prisma from "@/lib/db/prisma";

const canonical = buildCanonicalUrl("/dashboard");

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Tableau de bord My Exams (bêta).",
  alternates: canonical ? { canonical } : undefined,
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/log-in");
  }

  const role = (session.user as any).role;
  const email = session.user.email?.toLowerCase() ?? null;
  const allowlist = process.env.DASHBOARD_BETA_EMAILS?.split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean) ?? [];
  const isAllowed = role === "ADMIN" || (email ? allowlist.includes(email) : false);

  if (!isAllowed) {
    notFound();
  }

  const recentExercises = await prisma.userExerciseHistory.findMany({
    where: { userId: session.user.id },
    orderBy: { lastViewedAt: "desc" },
    take: 5,
    select: {
      lastViewedAt: true,
      exercise: {
        select: {
          id: true,
          title: true,
          label: true,
          exerciseNumber: true,
          examPaper: {
            select: {
              label: true,
              sessionYear: true,
              diplomaId: true,
              teaching: {
                select: {
                  subject: {
                    select: {
                      id: true,
                      longDescription: true,
                      shortDescription: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const exerciseHistory = recentExercises
    .filter((entry) => entry.exercise)
    .map((entry) => {
      const subject = entry.exercise.examPaper?.teaching?.subject;
      const subjectLabel =
        subject?.longDescription || subject?.shortDescription || "";
      const examPaperLabel = entry.exercise.examPaper?.label || "";
      const sessionYear = entry.exercise.examPaper?.sessionYear;
      const returnTo =
        subject && sessionYear && entry.exercise.examPaper?.diplomaId
          ? `/diplomes/${entry.exercise.examPaper.diplomaId}/matieres/${subject.id}/sessions/${sessionYear}`
          : null;
      const href = returnTo
        ? `/exercices/${entry.exercise.id}?returnTo=${encodeURIComponent(returnTo)}`
        : `/exercices/${entry.exercise.id}`;
      const title =
        entry.exercise.title ||
        entry.exercise.label ||
        `Exercice ${entry.exercise.exerciseNumber}`;
      const contextParts = [subjectLabel, examPaperLabel, sessionYear ? `Session ${sessionYear}` : ""]
        .filter(Boolean);
      return {
        href,
        title,
        context: contextParts.join(" · "),
        lastViewedAt: entry.lastViewedAt,
      };
    });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Bêta privée
            </p>
            <h1 className="text-2xl font-semibold text-heading">Tableau de bord</h1>
            <p className="text-sm text-muted-foreground">
              Zone en construction. Le contenu sera enrichi au fil des itérations.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Exercices consultés
              </p>
              {exerciseHistory.length > 0 ? (
                <ul className="space-y-3 text-sm">
                  {exerciseHistory.map((entry) => (
                    <li key={entry.href} className="space-y-1">
                      <a
                        className="font-semibold text-heading hover:underline"
                        href={entry.href}
                      >
                        {entry.title}
                      </a>
                      {entry.context ? (
                        <p className="text-xs text-muted-foreground">{entry.context}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Pas encore d&apos;exercice consulté.
                </p>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
            Accès réservé aux comptes autorisés.
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default DashboardPage;
