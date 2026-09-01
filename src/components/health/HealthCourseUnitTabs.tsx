'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TabItem, Tabs } from 'flowbite-react';
import { ArrowRight, FileCheck2, Info, Loader2, MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HealthColleStartDialog } from '@/components/health/HealthColleStartDialog';
import { HealthColleHistoryModal } from '@/components/health/HealthColleHistoryModal';
import { actionMenuContent, actionMenuItem, actionMenuTrigger } from '@/components/shared/table-action-menu';
import { HEALTH_COLLES_UE14_V1, type HealthColleV1 } from '@/core/health-colle';
import type { HealthStudentCourseUnitDetail } from '@/core/health';
import type {
  HealthCourseUnitEvaluationsProgress,
  HealthColleProgressItem,
  HealthMockExamSummary,
} from '@/core/health-mock-exam/health-mock-exam.types';
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
  evaluationsProgress?: HealthCourseUnitEvaluationsProgress | null;
};

const getChapterHref = (courseUnitId: string, chapterSlug: string) =>
  `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}`;

const getMockExamResultsHref = (courseUnitId: string, examSlug: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}`;

const getMockExamCorrectionHref = (courseUnitId: string, examSlug: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}/correction`;

const getColleResultsHref = (courseUnitId: string, colleId: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/colles/${colleId}/resultats/${attemptId}`;

const getColleCorrectionHref = (courseUnitId: string, colleId: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/colles/${colleId}/resultats/${attemptId}/correction`;

function formatScore(score: number): string {
  if (Number.isInteger(score)) {
    return score.toString();
  }
  return score.toFixed(2).replace('.', ',');
}

function formatDurationMinutes(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} h`;
  }
  return `${hours} h ${String(remainingMinutes).padStart(2, '0')}`;
}

function formatElapsedTime(elapsedSeconds: number) {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function HealthCourseUnitTabs({
  courseUnit,
  activeTeachingElementId,
  evaluationsProgress,
}: HealthCourseUnitTabsProps) {
  const router = useRouter();
  const [startingExamSlug, setStartingExamSlug] = useState<string | null>(null);
  const [selectedColleForStart, setSelectedColleForStart] = useState<HealthColleV1 | null>(null);
  const [historyModalData, setHistoryModalData] = useState<{
    colle: HealthColleV1;
    progress: HealthColleProgressItem;
  } | null>(null);

  const handleStartExam = async (examSlug: string) => {
    setStartingExamSlug(examSlug);
    const callbackUrl = `/sante/ue/${courseUnit.id}/examens-blancs/${examSlug}`;

    try {
      const response = await fetch(
        `/api/health/mock-exams/${courseUnit.id}/${encodeURIComponent(examSlug)}/attempt`,
        { method: 'POST' },
      );

      if (response.status === 401) {
        router.push(`/log-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        return;
      }

      if (!response.ok) {
        throw new Error("Impossible de démarrer l'examen blanc.");
      }

      router.push(callbackUrl);
    } catch {
      setStartingExamSlug(null);
    }
  };

  const renderExamActions = (exam: HealthMockExamSummary) => {
    const isStarting = startingExamSlug === exam.slug;
    const hasInProgress = Boolean(exam.currentAttemptId);
    const hasCompleted = exam.attemptCount > 0 && Boolean(exam.latestSubmittedAttemptId);

    if (hasInProgress) {
      return (
        <Button
          size="sm"
          className="gap-2"
          disabled={isStarting}
          onClick={() => void handleStartExam(exam.slug)}
        >
          {isStarting ? "Ouverture..." : "Reprendre"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      );
    }

    if (hasCompleted && exam.latestSubmittedAttemptId) {
      const resultsHref = getMockExamResultsHref(
        courseUnit.id,
        exam.slug,
        exam.latestSubmittedAttemptId,
      );
      const correctionHref = getMockExamCorrectionHref(
        courseUnit.id,
        exam.slug,
        exam.latestSubmittedAttemptId,
      );

      return (
        <div className="inline-flex items-center justify-center gap-1.5">
          <Button asChild size="sm" variant="default" className="h-8 px-3 text-xs">
            <Link href={resultsHref}>Bilan</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  actionMenuTrigger,
                  "h-8 w-8 border border-default bg-card text-muted-foreground hover:bg-neutral-secondary-soft hover:text-heading",
                )}
                aria-label={`Autres actions pour ${exam.title}`}
              >
                <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              collisionPadding={12}
              className={cn(actionMenuContent, "min-w-48")}
            >
              <DropdownMenuItem className={actionMenuItem}>
                <Link href={correctionHref}>Voir la correction</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="-mx-2 my-1 bg-border" />
              <DropdownMenuItem
                className={actionMenuItem}
                onSelect={() => {
                  window.setTimeout(() => void handleStartExam(exam.slug), 0);
                }}
              >
                Recommencer l&apos;examen
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }

    return (
      <Button
        size="sm"
        className="gap-2"
        disabled={isStarting}
        onClick={() => void handleStartExam(exam.slug)}
      >
        {isStarting ? "Ouverture..." : "Démarrer"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    );
  };

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
              <span className="inline-flex items-center gap-1.5 font-medium">
                <FileCheck2
                  className={cn(
                    "h-3.5 w-3.5",
                    activeTabIndex === evaluationsTabIndex ? "text-fg-brand" : "text-muted-foreground"
                  )}
                  aria-hidden="true"
                />
                <span>Évaluations</span>
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                    activeTabIndex === evaluationsTabIndex
                      ? "bg-brand text-white"
                      : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                  )}
                >
                  {HEALTH_COLLES_UE14_V1.length}
                </span>
              </span>
            </span>
          }
        >
          <div className="space-y-4">
            {/* Section 1: Colles */}
            <section aria-labelledby="health-colles-heading" className="space-y-4">
              {/* Global Evaluations Summary Banner */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Colles réalisées
                  </p>
                  <p className="mt-1 text-2xl font-bold text-heading">
                    {evaluationsProgress?.completedCollesCount ?? 0} / {evaluationsProgress?.totalCollesCount ?? HEALTH_COLLES_UE14_V1.length}
                  </p>
                  <p className="text-xs text-muted-foreground">au moins 1 tentative terminée</p>
                </Card>

                <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Score moyen
                  </p>
                  <p className="mt-1 text-2xl font-bold text-heading">
                    {evaluationsProgress?.averageScorePercentage !== null && evaluationsProgress?.averageScorePercentage !== undefined
                      ? `${evaluationsProgress.averageScorePercentage} %`
                      : "—"}
                  </p>
                  <p className="text-xs text-muted-foreground">sur vos meilleures tentatives</p>
                </Card>

                <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Meilleur résultat
                  </p>
                  <p className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {evaluationsProgress?.bestScorePercentage !== null && evaluationsProgress?.bestScorePercentage !== undefined
                      ? `${evaluationsProgress.bestScorePercentage} %`
                      : "—"}
                  </p>
                  <p className="text-xs text-muted-foreground">toutes colles confondues</p>
                </Card>
              </div>

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
                  <div
                    className="relative overflow-x-auto rounded-lg border border-default"
                    data-testid="health-colles-table-scroll"
                  >
                    <table className="w-full text-left text-sm text-body rtl:text-right">
                      <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                        <tr>
                          <th className="w-16 px-4 py-4 font-medium max-sm:hidden">#</th>
                          <th className="w-full px-3 py-4 font-medium sm:w-auto sm:px-4">COLLE</th>
                          <th className="px-4 py-4 font-medium max-sm:hidden">CONTENU</th>
                          <th className="w-40 px-4 py-4 text-center font-medium max-sm:hidden">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {HEALTH_COLLES_UE14_V1.map((colle, index) => {
                          const progress =
                            evaluationsProgress?.colles[colle.id] ||
                            evaluationsProgress?.colles[colle.code.toLowerCase()];
                          const hasAttempts = progress && progress.attemptCount > 0;
                          const latest = progress?.latestAttempt;
                          const best = progress?.bestAttempt;
                          const attemptCountLabel = progress
                            ? `${progress.attemptCount} tentative${progress.attemptCount > 1 ? 's' : ''}`
                            : null;
                          const latestResultsHref = latest
                            ? getColleResultsHref(courseUnit.id, colle.id, latest.id)
                            : null;
                          const latestCorrectionHref = latest
                            ? getColleCorrectionHref(courseUnit.id, colle.id, latest.id)
                            : null;
                          const renderColleActions = () =>
                            hasAttempts && latestResultsHref && latestCorrectionHref ? (
                              <div className="inline-flex items-center justify-center gap-1.5">
                                <Button asChild size="sm" variant="default" className="h-8 px-3 text-xs">
                                  <Link href={latestResultsHref}>
                                    Bilan
                                  </Link>
                                </Button>

                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <button
                                      type="button"
                                      className={cn(
                                        actionMenuTrigger,
                                        "h-8 w-8 border border-default bg-card text-muted-foreground hover:bg-neutral-secondary-soft hover:text-heading"
                                      )}
                                      aria-label={`Autres actions pour cette colle ${colle.code}`}
                                    >
                                      <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent
                                    align="end"
                                    collisionPadding={12}
                                    className={cn(actionMenuContent, "min-w-44")}
                                  >
                                    <DropdownMenuItem className={actionMenuItem}>
                                      <Link href={latestCorrectionHref}>Voir la correction</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="-mx-2 my-1 bg-border" />
                                    <DropdownMenuItem
                                      className={actionMenuItem}
                                      onSelect={() => {
                                        window.setTimeout(() => setSelectedColleForStart(colle), 0);
                                      }}
                                    >
                                      Recommencer la colle
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            ) : (
                              <Button
                                size="sm"
                                className="gap-2"
                                onClick={() => setSelectedColleForStart(colle)}
                              >
                                Démarrer
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            );

                          return (
                            <tr
                              key={colle.id}
                              className="border-b border-default bg-card transition-colors last:border-b-0 hover:bg-neutral-secondary-soft"
                            >
                              <td className="px-4 py-4 align-middle font-medium text-heading max-sm:hidden">
                                {index + 1}
                              </td>
                              <td className="w-full px-3 py-4 align-middle sm:w-auto sm:px-4">
                                <div className="space-y-1.5">
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
                                  <p className="text-xs text-muted-foreground sm:hidden">
                                    {colle.questionCount} questions · {colle.durationLabel}
                                  </p>

                                  {/* Stats attempt badges if performed */}
                                  {hasAttempts && latest ? (
                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                      <Badge
                                        variant="outline"
                                        className={cn(
                                          "text-xs font-semibold",
                                          latest.percentage >= 80
                                            ? "border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                                            : latest.percentage < 60
                                              ? "border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                                              : "border-brand/40 bg-brand-soft/20 text-heading"
                                        )}
                                      >
                                        Dernière : {formatScore(latest.score)} / {latest.maxScore} ({latest.percentage} %)
                                      </Badge>

                                      {progress.attemptCount > 1 && best ? (
                                        <Badge
                                          variant="outline"
                                          className="text-xs font-medium text-muted-foreground"
                                        >
                                          Meilleur : {formatScore(best.score)} / {best.maxScore} ({best.percentage} %)
                                        </Badge>
                                      ) : null}

                                      {progress.attemptCount > 1 ? (
                                        <button
                                          type="button"
                                          className="rounded-sm text-[11px] font-medium text-fg-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                                          aria-label={`Voir les ${attemptCountLabel} de ${colle.code}`}
                                          onClick={() => setHistoryModalData({ colle, progress })}
                                        >
                                          {attemptCountLabel}
                                        </button>
                                      ) : (
                                        <span className="text-[11px] text-muted-foreground">
                                          {attemptCountLabel}
                                        </span>
                                      )}
                                    </div>
                                  ) : null}

                                  <div
                                    className="flex items-center gap-1.5 pt-2 sm:hidden"
                                    data-testid={`health-colle-actions-${colle.code.toLowerCase()}-mobile`}
                                  >
                                    {renderColleActions()}
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4 align-middle text-muted-foreground whitespace-nowrap max-sm:hidden">
                                {colle.questionCount} questions · {colle.durationLabel}
                              </td>
                              <td
                                className="px-4 py-4 text-center align-middle max-sm:hidden"
                                data-testid={`health-colle-actions-${colle.code.toLowerCase()}-desktop`}
                              >
                                {renderColleActions()}
                              </td>
                            </tr>
                          );
                        })}
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
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle id="health-mock-exams-heading" className="text-lg text-heading">
                        Examens blancs
                      </CardTitle>
                      <Badge variant="outline">
                        {courseUnit.mockExams.length} examen{courseUnit.mockExams.length > 1 ? 's' : ''}
                      </Badge>
                      <Badge variant="outline">Conditions réelles</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Simulez l&apos;épreuve complète dans les conditions du semestre.
                  </p>
                </CardHeader>
                <CardContent>
                  {courseUnit.mockExams.length > 0 ? (
                    <div
                      className="relative overflow-x-auto rounded-lg border border-default"
                      data-testid="health-mock-exams-table-scroll"
                    >
                      <table className="w-full text-left text-sm text-body rtl:text-right">
                        <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                          <tr>
                            <th className="w-16 px-4 py-4 font-medium max-sm:hidden">#</th>
                            <th className="w-full px-3 py-4 font-medium sm:w-auto sm:px-4">EXAMEN BLANC</th>
                            <th className="px-4 py-4 font-medium max-sm:hidden">CONTENU</th>
                            <th className="w-40 px-4 py-4 text-center font-medium max-sm:hidden">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courseUnit.mockExams.map((exam) => {
                            const hasCompleted = exam.attemptCount > 0 && Boolean(exam.latestSubmittedAttemptId);
                            const hasInProgress = Boolean(exam.currentAttemptId);
                            const latestScore = exam.latestScore;
                            const latestMaxScore = exam.latestMaxScore ?? exam.questionCount;
                            const latestPercentage = exam.latestPercentage ?? 0;
                            const bestScore = exam.bestScore;
                            const bestMaxScore = exam.bestMaxScore ?? exam.questionCount;
                            const bestPercentage = exam.bestPercentage ?? 0;
                            const attemptCountLabel = `${exam.attemptCount} tentative${exam.attemptCount > 1 ? 's' : ''}`;

                            return (
                              <tr
                                key={exam.id}
                                data-testid={`health-mock-exam-row-${exam.slug}`}
                                className="border-b border-default bg-card transition-colors last:border-b-0 hover:bg-neutral-secondary-soft"
                              >
                                <td className="px-4 py-4 align-middle font-medium text-heading max-sm:hidden">
                                  {exam.order}
                                </td>
                                <td className="w-full px-3 py-4 align-middle sm:w-auto sm:px-4">
                                  <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-medium text-heading">
                                        {exam.title}
                                      </span>
                                      <Badge variant="secondary" className="text-xs">
                                        {courseUnit.code || "UE14"}
                                      </Badge>
                                    </div>
                                    <p className="text-xs italic text-body">
                                      {courseUnit.code || "UE14"} · Épreuve complète
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {exam.sections
                                        .map((section) => `${section.title} Q${section.firstQuestion}–${section.lastQuestion}`)
                                        .join(' · ')}
                                    </p>
                                    <p className="text-xs text-muted-foreground sm:hidden">
                                      {exam.questionCount} questions · {formatDurationMinutes(exam.durationMinutes)}
                                    </p>

                                    {/* In-progress attempt indication */}
                                    {hasInProgress ? (
                                      <p className="text-xs text-muted-foreground pt-1">
                                        Une tentative est en cours.
                                      </p>
                                    ) : null}

                                    {/* Historical completed attempt badges */}
                                    {hasCompleted && latestScore !== null && latestScore !== undefined ? (
                                      <div className="flex flex-wrap items-center gap-2 pt-1">
                                        <Badge
                                          variant="outline"
                                          className={cn(
                                            "text-xs font-semibold",
                                            latestPercentage >= 80
                                              ? "border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                                              : latestPercentage < 60
                                                ? "border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                                                : "border-brand/40 bg-brand-soft/20 text-heading"
                                          )}
                                        >
                                          Dernière : {formatScore(latestScore)} / {latestMaxScore} ({latestPercentage} %)
                                        </Badge>

                                        {exam.attemptCount > 1 && bestScore !== null && bestScore !== undefined ? (
                                          <Badge
                                            variant="outline"
                                            className="text-xs font-medium text-muted-foreground"
                                          >
                                            Meilleur : {formatScore(bestScore)} / {bestMaxScore} ({bestPercentage} %)
                                          </Badge>
                                        ) : null}

                                        <span className="text-[11px] text-muted-foreground">
                                          {attemptCountLabel}
                                        </span>
                                      </div>
                                    ) : !hasInProgress ? (
                                      <p className="text-xs text-muted-foreground pt-1">
                                        Aucune tentative pour le moment.
                                      </p>
                                    ) : null}

                                    <div
                                      className="flex items-center gap-1.5 pt-2 sm:hidden"
                                      data-testid={`health-mock-exam-actions-${exam.slug}-mobile`}
                                    >
                                      {renderExamActions(exam)}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-4 align-middle text-muted-foreground whitespace-nowrap max-sm:hidden">
                                  {exam.questionCount} questions · {formatDurationMinutes(exam.durationMinutes)}
                                </td>
                                <td
                                  className="px-4 py-4 text-center align-middle max-sm:hidden"
                                  data-testid={`health-mock-exam-actions-${exam.slug}-desktop`}
                                >
                                  {renderExamActions(exam)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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

      <HealthColleHistoryModal
        isOpen={Boolean(historyModalData)}
        onClose={() => setHistoryModalData(null)}
        colleTitle={historyModalData?.colle.title ?? ''}
        courseUnitId={courseUnit.id}
        progressItem={historyModalData?.progress ?? null}
        onRestart={() => {
          if (historyModalData) {
            setSelectedColleForStart(historyModalData.colle);
          }
        }}
      />
    </>
  );
}
