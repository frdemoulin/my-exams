import { notFound, redirect } from "next/navigation";

import { HealthMockExamCorrectionView } from "@/components/health/HealthMockExamCorrectionView";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { fetchHealthMockExamResults } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

type PageProps = {
  params: Promise<{ courseUnitId: string; examSlug: string; attemptId: string }>;
};

export const dynamic = "force-dynamic";

export default async function HealthMockExamCorrectionPage({ params }: PageProps) {
  const { courseUnitId, examSlug, attemptId } = await params;
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);
  const correctionHref = `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}/correction`;

  if (!userId) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(correctionHref)}`);
  }

  const result = await fetchHealthMockExamResults({ attemptId, userId });

  if (!result || result.courseUnitId !== courseUnitId || result.slug !== examSlug) {
    notFound();
  }

  const courseUnitHref = `/sante/ue/${courseUnitId}?ec=synthese`;
  const bilanHref = `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}`;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Santé", href: "/sante" },
            { label: result.courseUnitTitle, href: courseUnitHref },
            { label: result.title, href: bilanHref },
            { label: "Correction détaillée" },
          ]}
        />
        <HealthMockExamCorrectionView
          result={result}
          bilanHref={bilanHref}
          restartHref={`/sante/ue/${courseUnitId}/examens-blancs/${examSlug}`}
          isColle={false}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
