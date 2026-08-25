'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TabItem, Tabs } from 'flowbite-react';
import { ArrowRight, BarChart3, Clock3, FileCheck2, Info } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HealthMockExamActionButton } from '@/components/health/HealthMockExamActionButton';
import { HealthColleCard } from '@/components/health/HealthColleCard';
import { HealthColleStartDialog } from '@/components/health/HealthColleStartDialog';
import { HEALTH_COLLES_UE14_V1, type HealthColleV1 } from '@/core/health-colle';
import type { HealthStudentCourseUnitDetail } from '@/core/health';
import { cn } from '@/lib/utils';

const healthTabsTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'text-sm font-medium text-center text-body border-b border-default',
    variant: {
      underline: 'flex flex-wrap -mb-px pr-0 sm:pr-48',
    },
    tabitem: {
      base: 'inline-block p-4 border-b border-transparent rounded-t-base focus:outline-none disabled:cursor-not-allowed disabled:text-body/50',
      variant: {
        underline: {
          base: '',
          active: {
            on: 'text-fg-brand border-b border-brand rounded-t-base',
            off: 'text-body hover:text-fg-brand hover:border-brand',
          },
        },
      },
      icon: 'mr-2 h-5 w-5',
    },
  },
  tabitemcontainer: {
    base: '',
    variant: {
      underline: '',
    },
  },
  tabpanel: 'pt-6',
} as const;

type HealthCourseUnitTabsProps = {
  courseUnit: HealthStudentCourseUnitDetail;
  activeTeachingElementId?: string | null;
};

const getChapterHref = (courseUnitId: string, chapterSlug: string) =>
  `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}`;

const getMockExamResultsHref = (courseUnitId: string, examSlug: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}`;

export function HealthCourseUnitTabs({
  courseUnit,
  activeTeachingElementId,
}: HealthCourseUnitTabsProps) {
  const [selectedColleForStart, setSelectedColleForStart] = useState<HealthColleV1 | null>(null);

  const evaluationsTabIndex = courseUnit.teachingElements.length;
  const initialTabIndex = (() => {
    if (activeTeachingElementId === 'evaluations' || activeTeachingElementId === 'synthese') {
      return evaluationsTabIndex;
    }
    if (activeTeachingElementId) {
      const idx = courseUnit.teachingElements.findIndex((te) => te.id === activeTeachingElementId);
      if (idx !== -1) return idx;
    }
    return 0;
  })();

  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialTabIndex);

  return (
    <>
      <div className="relative">
        {activeTabIndex === evaluationsTabIndex ? (
          <div className="flex justify-end sm:absolute sm:right-0 sm:top-2 sm:z-10 pb-2 sm:pb-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs font-medium bg-card">
                  <Info className="h-4 w-4 text-fg-brand" aria-hidden="true" />
                  <span>Aide aux évaluations</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80 p-3.5 space-y-3 shadow-lg z-50">
                <div className="space-y-1">
                  <h4 className="font-semibold text-heading text-xs tracking-wide uppercase">
                    Aide aux évaluations
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Guide d’interface et règles de notation UNESS pour vos épreuves.
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-default">
                  <div className="p-2.5 rounded-xl border border-default bg-neutral-secondary-soft space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-heading">Découvrir le mode évaluation</span>
                      <Badge variant="outline" className="text-[10px]">5 min</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Prenez en main le chronomètre, la navigation et la remise d’une épreuve.
                    </p>
                    <Button asChild size="sm" variant="outline" className="w-full h-7 text-xs gap-1.5">
                      <Link href="/sante/interface-examen">
                        Découvrir
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>

                  <div className="p-2.5 rounded-xl border border-default bg-neutral-secondary-soft space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-heading">Formats & notation</span>
                      <Badge variant="outline" className="text-[10px]">UNESS</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Découvrez les formats QRU, QRM, QRP, QROC, QZONE et les discordances UNESS.
                    </p>
                    <Button asChild size="sm" variant="outline" className="w-full h-7 text-xs gap-1.5">
                      <Link href="/sante/evaluations/comprendre">
                        Formats et notation
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : null}

        <Tabs
          applyTheme="replace"
          variant="underline"
          theme={healthTabsTheme}
          onActiveTabChange={(index) => setActiveTabIndex(index)}
        >
        {courseUnit.teachingElements.map((teachingElement) => (
          <TabItem
            key={teachingElement.id}
            active={
              activeTeachingElementId
                ? activeTeachingElementId === teachingElement.id
                : courseUnit.teachingElements[0]?.id === teachingElement.id
            }
            title={teachingElement.code ?? teachingElement.shortTitle ?? teachingElement.title}
          >
            <div className="space-y-4">
              {teachingElement.chapters.length > 0 ? (
                Object.values(
                  teachingElement.chapters.reduce<
                    Record<
                      string,
                      {
                        label: string;
                        order: number;
                        chapters: typeof teachingElement.chapters;
                      }
                    >
                  >((groups, chapter) => {
                    const key = chapter.displayGroupKey ?? 'default';
                    const label = chapter.displayGroupLabel ?? 'Chapitres';
                    const order = chapter.displayGroupOrder ?? Number.MAX_SAFE_INTEGER;

                    if (!groups[key]) {
                      groups[key] = {
                        label,
                        order,
                        chapters: [],
                      };
                    }

                    groups[key].chapters.push(chapter);
                    return groups;
                  }, {})
                )
                  .sort((left, right) => left.order - right.order)
                  .map((group) => {
                    const chapterCount = group.chapters.length;
                    const quizCount = group.chapters.reduce(
                      (total, chapter) => total + chapter.quizCount,
                      0,
                    );
                    const questionCount = group.chapters.reduce(
                      (total, chapter) => total + chapter.questionCount,
                      0,
                    );

                    return (
                      <Card
                        key={group.label}
                        className="rounded-3xl border-border bg-card hover:bg-card"
                      >
                        <CardHeader>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <CardTitle className="text-lg text-heading">{group.label}</CardTitle>
                            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                              <Badge variant="outline">
                                {chapterCount} chapitre
                                {chapterCount > 1 ? 's' : ''}
                              </Badge>
                              <Badge variant="outline">{quizCount} quiz</Badge>
                              <Badge variant="outline">
                                {questionCount} question
                                {questionCount > 1 ? 's' : ''}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="relative overflow-x-auto rounded-lg border border-default">
                            <table className="w-full text-left text-sm text-body rtl:text-right">
                              <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                                <tr>
                                  <th className="w-20 px-5 py-4 font-medium">#</th>
                                  <th className="px-5 py-4 font-medium">CHAPITRE</th>
                                  <th className="px-5 py-4 font-medium">CONTENU</th>
                                  <th className="px-5 py-4 text-center font-medium">ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                {group.chapters.map((chapter, index) => (
                                  <tr
                                    key={chapter.id}
                                    className="border-b border-default bg-card transition-colors last:border-b-0 hover:bg-neutral-secondary-soft"
                                  >
                                    <td className="px-5 py-4 align-middle font-medium text-heading">
                                      {index + 1}
                                    </td>
                                    <td className="px-5 py-4 align-middle">
                                      <Link
                                        href={getChapterHref(courseUnit.id, chapter.slug)}
                                        className="font-medium text-heading hover:text-fg-brand"
                                      >
                                        {chapter.title}
                                      </Link>
                                    </td>
                                    <td className="px-5 py-4 align-middle text-muted-foreground">
                                      {chapter.sectionCount} section
                                      {chapter.sectionCount > 1 ? 's' : ''} · {chapter.quizCount} quiz
                                    </td>
                                    <td className="px-5 py-4 text-center align-middle">
                                      <Button asChild size="sm" className="gap-2">
                                        <Link href={getChapterHref(courseUnit.id, chapter.slug)}>
                                          Voir
                                          <ArrowRight className="h-4 w-4" />
                                        </Link>
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
              ) : (
                <p className="text-sm text-muted-foreground">
                  Aucun chapitre n&apos;est encore rattaché à cet EC.
                </p>
              )}
            </div>
          </TabItem>
        ))}

        <TabItem
          active={activeTabIndex === evaluationsTabIndex}
          title={
            <span className="inline-flex items-center gap-2">
              <span className="hidden sm:inline-block h-3.5 w-px bg-border mr-0.5" aria-hidden="true" />
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 -my-1 border transition-all duration-200 shadow-2xs",
                  activeTabIndex === evaluationsTabIndex
                    ? "bg-brand-soft/30 border-brand/40 text-fg-brand font-semibold ring-1 ring-brand/20"
                    : "bg-brand-soft/10 border-brand/20 text-fg-brand hover:bg-brand-soft/20 font-medium"
                )}
              >
                <FileCheck2 className="h-3.5 w-3.5 text-fg-brand" aria-hidden="true" />
                <span>Évaluations</span>
                <span className="inline-flex items-center justify-center rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white leading-none">
                  {HEALTH_COLLES_UE14_V1.length}
                </span>
              </span>
            </span>
          }
        >
          <div className="space-y-4">
            {/* Section 1: Colles */}
            <section aria-labelledby="health-colles-heading">
              <Card className="rounded-3xl border-border bg-card hover:bg-card">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle id="health-colles-heading" className="text-lg text-heading">
                        Colles
                      </CardTitle>
                      <Badge variant="outline">{HEALTH_COLLES_UE14_V1.length} colles</Badge>
                      <Badge variant="outline">Notation UNESS</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto rounded-lg border border-default">
                    <table className="w-full text-left text-sm text-body rtl:text-right">
                      <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                        <tr>
                          <th className="w-20 px-5 py-4 font-medium">#</th>
                          <th className="px-5 py-4 font-medium">COLLE</th>
                          <th className="px-5 py-4 font-medium">CONTENU</th>
                          <th className="px-5 py-4 text-center font-medium">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {HEALTH_COLLES_UE14_V1.map((colle, index) => (
                          <tr
                            key={colle.id}
                            className="border-b border-default bg-card transition-colors last:border-b-0 hover:bg-neutral-secondary-soft"
                          >
                            <td className="px-5 py-4 align-middle font-medium text-heading">
                              {index + 1}
                            </td>
                            <td className="px-5 py-4 align-middle">
                                <div className="space-y-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-medium text-heading">
                                      {colle.title}
                                    </span>
                                    {colle.badgeLabel ? (
                                      <Badge variant="outline">{colle.badgeLabel}</Badge>
                                    ) : null}
                                    {colle.ecCode ? (
                                      <Badge variant="secondary" className="text-xs">
                                        {colle.ecCode}
                                      </Badge>
                                    ) : null}
                                  </div>
                                  <p className="text-xs italic text-body">
                                    {colle.scopeLine}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {colle.contentLine}
                                  </p>
                                </div>
                            </td>
                            <td className="px-5 py-4 align-middle text-muted-foreground whitespace-nowrap">
                              {colle.questionCount} questions · {colle.durationLabel}
                            </td>
                            <td className="px-5 py-4 text-center align-middle">
                              {colle.id === 'c01' ? (
                                <Button
                                  size="sm"
                                  className="gap-2"
                                  onClick={() => setSelectedColleForStart(colle)}
                                >
                                  Démarrer
                                  <ArrowRight className="h-4 w-4" />
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  disabled
                                  aria-disabled="true"
                                >
                                  Bientôt disponible
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Examens blancs */}
            <section aria-labelledby="health-mock-exams-heading">
              <Card className="rounded-3xl border-border bg-card hover:bg-card">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle id="health-mock-exams-heading" className="text-lg text-heading">
                        Examens blancs
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Simulez l&apos;épreuve complète dans les conditions du semestre.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <Badge variant="outline">Conditions réelles</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseUnit.mockExams.length > 0 ? (
                    <div className="space-y-3">
                    {courseUnit.mockExams.map((exam) => (
                      <div key={exam.id} className="rounded-xl border border-default bg-card p-4 space-y-4">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div className="space-y-1">
                            <h3 className="font-medium text-heading text-base">{exam.title}</h3>
                            {exam.description ? (
                              <p className="text-sm text-muted-foreground">{exam.description}</p>
                            ) : null}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="gap-1.5">
                              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                              {exam.durationMinutes === 150 ? '2 h 30' : `${exam.durationMinutes} min`}
                            </Badge>
                            <Badge variant="outline" className="gap-1.5">
                              <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                              {exam.questionCount} questions
                            </Badge>
                          </div>
                        </div>

                        <ul className="grid gap-2 text-sm text-body sm:grid-cols-3">
                          {exam.sections.map((section) => (
                            <li key={section.teachingElementId} className="border-l-2 border-brand/30 pl-3">
                              <span className="font-medium text-heading">{section.title}</span>
                              <span className="block text-muted-foreground">
                                Questions {section.firstQuestion} à {section.lastQuestion}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col gap-3 border-t border-default pt-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="text-sm text-muted-foreground">
                            {exam.currentAttemptId ? (
                              <span>Une tentative est en cours.</span>
                            ) : exam.attemptCount > 0 ? (
                              <span className="inline-flex items-center gap-1.5">
                                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                                {exam.attemptCount} tentative{exam.attemptCount > 1 ? 's' : ''} · meilleur résultat{' '}
                                {exam.bestPercentage}%
                              </span>
                            ) : (
                              <span>Aucune tentative pour le moment.</span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            {exam.latestSubmittedAttemptId ? (
                              <Button asChild variant="outline" size="sm">
                                <Link
                                  href={getMockExamResultsHref(
                                    courseUnit.id,
                                    exam.slug,
                                    exam.latestSubmittedAttemptId,
                                  )}
                                >
                                  Voir les résultats
                                </Link>
                              </Button>
                            ) : null}
                            <HealthMockExamActionButton
                              courseUnitId={courseUnit.id}
                              examSlug={exam.slug}
                              hasCurrentAttempt={Boolean(exam.currentAttemptId)}
                              hasPreviousAttempt={exam.attemptCount > 0}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-default p-6 text-center text-sm text-muted-foreground">
                    Les examens blancs seront disponibles prochainement.
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>
        </TabItem>
      </Tabs>
    </div>

      <HealthColleStartDialog
        colle={selectedColleForStart}
        courseUnitSlug={courseUnit.id}
        open={Boolean(selectedColleForStart)}
        onOpenChange={(open) => {
          if (!open) setSelectedColleForStart(null);
        }}
      />
    </>
  );
}
