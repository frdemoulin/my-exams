import { notFound, redirect } from "next/navigation";

import { HealthMockExamResults } from "@/components/health/HealthMockExamResults";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { fetchHealthMockExamResults } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

type PageProps = {
  params: Promise<{ courseUnitId: string; colleSlug: string; attemptId: string }>;
};

export const dynamic = "force-dynamic";

export default async function HealthColleResultsPage({ params }: PageProps) {
  const { courseUnitId, colleSlug, attemptId } = await params;
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);
  const resultHref = `/sante/ue/${courseUnitId}/colles/${colleSlug}/resultats/${attemptId}`;

  if (!userId) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(resultHref)}`);
  }

  const result = await fetchHealthMockExamResults({ attemptId, userId });

  if (!result) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Santé", href: "/sante" },
            { label: result.courseUnitTitle, href: `/sante/ue/${courseUnitId}?ec=synthese` },
            { label: result.title },
            { label: "Résultats" },
          ]}
        />
        <HealthMockExamResults
          result={result}
          restartHref={`/sante/ue/${courseUnitId}/colles/${colleSlug}`}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
