import { notFound, redirect } from "next/navigation";

import { HealthMockExamSession } from "@/components/health/HealthMockExamSession";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { fetchHealthMockExamTakingState } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

type PageProps = {
  params: Promise<{ courseUnitId: string; examSlug: string }>;
};

export const dynamic = "force-dynamic";

export default async function HealthMockExamPage({ params }: PageProps) {
  const { courseUnitId, examSlug } = await params;
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);
  const href = `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}`;

  if (!userId) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(href)}`);
  }

  const state = await fetchHealthMockExamTakingState({
    courseUnitId,
    examSlug,
    userId,
  });

  if (state.kind === "missing") {
    redirect(`/sante/ue/${courseUnitId}?ec=synthese`);
  }

  if (state.kind === "completed") {
    redirect(`${href}/resultats/${state.attemptId}`);
  }

  if (state.kind !== "in-progress") {
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
            { label: "UE", href: `/sante/ue/${courseUnitId}?ec=synthese` },
            { label: state.passage.title },
          ]}
        />
        <HealthMockExamSession
          courseUnitId={courseUnitId}
          examSlug={examSlug}
          passage={state.passage}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
