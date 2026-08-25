import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { HealthMockExamSession } from "@/components/health/HealthMockExamSession";
import { PublicBreadcrumb } from "@/components/shared/public-breadcrumb";
import { PublicHeader } from "@/components/shared/public-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchHealthMockExamTakingState } from "@/core/health-mock-exam/health-mock-exam.service";
import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";

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
  const courseUnitLabel = passage.courseUnit?.code
    ? `${passage.courseUnit.code} · ${passage.courseUnit.title}`
    : passage.courseUnit?.title ?? "UE";
  const courseUnitHref = `/sante/ue/${courseUnitId}`;
  const evaluationsHref = `${courseUnitHref}?ec=evaluations`;
  const colleCode = passage.slug ? passage.slug.toUpperCase() : "COLLE";
  const colleHeading = `${colleCode} — ${passage.title}`;

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

          <Card className="rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader>
              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-heading">{colleHeading}</CardTitle>
                    {passage.description ? (
                      <p className="text-sm text-muted-foreground">{passage.description}</p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-start gap-2 sm:justify-end">
                    <Badge variant="outline" className="w-fit">
                      {passage.sections[0]?.title ?? "Évaluation"}
                    </Badge>
                    <Badge variant="secondary" className="w-fit">
                      {passage.questionCount} questions
                    </Badge>
                    <Badge variant="outline" className="font-semibold text-fg-brand border-brand/30">
                      Notation UNESS
                    </Badge>
                  </div>
                </div>

                <div className="rounded-xl border border-default bg-neutral-secondary-soft p-4 text-xs text-muted-foreground space-y-1.5">
                  <p className="font-semibold text-heading text-sm">Consignes</p>
                  <p className="text-body">
                    {passage.instructions ||
                      `Cette colle comporte ${passage.questionCount} questions de différents formats. La consigne propre à chaque question est indiquée au moment où elle s'affiche. Navigation libre pendant l'épreuve avec barème UNESS.`}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

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
