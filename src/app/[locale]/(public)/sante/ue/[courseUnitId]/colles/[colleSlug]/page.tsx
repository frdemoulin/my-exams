import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { HealthEvaluationIntroHeader } from "@/components/health/HealthEvaluationIntroHeader";
import { HealthMockExamSession } from "@/components/health/HealthMockExamSession";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { Button } from "@/components/ui/button";
import { getHealthColleBySlug } from "@/core/health-colle";
import { fetchHealthMockExamTakingState } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import { assertUserCanAccessHealthCourseUnit } from "@/lib/auth/assert-pedagogical-access";
import { handlePedagogicalPageAccessError } from "@/core/academic-enrollment";

type PageProps = {
  params: Promise<{ courseUnitId: string; colleSlug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { colleSlug } = await params;
  return {
    title: `Colle ${colleSlug.toUpperCase()} — Santé`,
  };
}

export default async function HealthCollePage({ params }: PageProps) {
  const { courseUnitId, colleSlug } = await params;
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);
  const href = `/sante/ue/${courseUnitId}/colles/${colleSlug}`;

  if (!userId) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(href)}`);
  }

  try {
    await assertUserCanAccessHealthCourseUnit({
      userId,
      courseUnitId,
    });
  } catch (err) {
    handlePedagogicalPageAccessError(err, href);
  }


  const state = await fetchHealthMockExamTakingState({
    courseUnitId,
    examSlug: colleSlug,
    userId,
  });

  if (state.kind === "missing") {
    redirect(`/sante/ue/${courseUnitId}?ec=evaluations`);
  }

  if (state.kind === "completed") {
    redirect(`${href}/resultats/${state.attemptId}`);
  }

  if (state.kind !== "in-progress") {
    notFound();
  }

  const passage = state.passage;
  const colle = getHealthColleBySlug(colleSlug);
  const courseUnitLabel = passage.courseUnit?.code
    ? `${passage.courseUnit.code} · ${passage.courseUnit.title}`
    : passage.courseUnit?.title ?? "UE";
  const courseUnitHref = `/sante/ue/${courseUnitId}`;
  const evaluationsHref = `${courseUnitHref}?ec=evaluations`;
  const colleCode = colle?.code ?? (passage.slug ? passage.slug.toUpperCase() : "COLLE");
  const colleHeading = colle ? `${colle.code} — ${colle.title}` : `${colleCode} — ${passage.title}`;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Santé", href: "/sante" },
            { label: courseUnitLabel, href: courseUnitHref },
            { label: "Évaluations", href: evaluationsHref },
            { label: colleHeading },
          ]}
        />

        <section className="space-y-4">
          <Button asChild variant="outline" size="sm" className="w-fit gap-2">
            <Link href={evaluationsHref}>
              <ChevronLeft className="h-4 w-4" />
              Retour aux évaluations
            </Link>
          </Button>

          <HealthEvaluationIntroHeader passage={passage} colle={colle} />

          <HealthMockExamSession
            courseUnitId={courseUnitId}
            examSlug={colleSlug}
            passage={passage}
            resultsHref={`/sante/ue/${courseUnitId}/colles/${colleSlug}/resultats/${passage.attemptId}`}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
