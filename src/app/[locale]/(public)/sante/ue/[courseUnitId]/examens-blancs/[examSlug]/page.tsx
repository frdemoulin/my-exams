import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { HealthEvaluationIntroHeader } from "@/components/health/HealthEvaluationIntroHeader";
import { HealthMockExamSession } from "@/components/health/HealthMockExamSession";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { Button } from "@/components/ui/button";
import { fetchHealthMockExamTakingState } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import { assertUserCanAccessHealthCourseUnit } from "@/lib/auth/assert-pedagogical-access";

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

  try {
    await assertUserCanAccessHealthCourseUnit({
      userId,
      courseUnitId,
    });
  } catch {
    redirect('/dashboard');
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

  const passage = state.passage;
  const courseUnitHref = `/sante/ue/${courseUnitId}`;
  const evaluationsHref = `${courseUnitHref}?ec=synthese`;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Santé", href: "/sante" },
            { label: "UE", href: evaluationsHref },
            { label: passage.title },
          ]}
        />
        <section className="space-y-4">
          <Button asChild variant="outline" size="sm" className="w-fit gap-2">
            <Link href={evaluationsHref}>
              <ChevronLeft className="h-4 w-4" />
              Retour aux évaluations
            </Link>
          </Button>

          <HealthEvaluationIntroHeader passage={passage} />

          <HealthMockExamSession
            courseUnitId={courseUnitId}
            examSlug={examSlug}
            passage={passage}
            resultsHref={`${href}/resultats/${passage.attemptId}`}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
