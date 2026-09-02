'use client';

import { BarChart3, CheckCircle2, FileCheck2, GraduationCap, Target, Trophy } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HealthThemeProgressSection } from './HealthThemeProgressSection';
import type { HealthCourseUnitProgressSummary } from '@/core/health/health-progress.types';

type HealthCourseUnitProgressTabProps = {
  progress: HealthCourseUnitProgressSummary;
};

export function HealthCourseUnitProgressTab({ progress }: HealthCourseUnitProgressTabProps) {
  const { overview, training, colles, mockExams } = progress;

  return (
    <div className="space-y-6">
      {/* 1. Vue d'ensemble (Overview KPIs) */}
      <section aria-labelledby="health-progress-overview-heading" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 id="health-progress-overview-heading" className="text-lg font-bold text-heading">
            Vue d’ensemble — Progression UE
          </h3>
          <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
            Avancement volumétrique
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* KPI Progression des quiz */}
          <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold uppercase tracking-wider">Progression des quiz</span>
              <GraduationCap className="h-4 w-4 text-fg-brand" aria-hidden="true" />
            </div>
            <p className="mt-2 text-2xl font-bold text-heading" data-testid="kpi-training-count">
              {overview.trainingQuizzes.completed} / {overview.trainingQuizzes.total}
            </p>
            <p className="text-xs text-muted-foreground">quiz réalisés ({overview.trainingQuizzes.percentage} %)</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-1.5 rounded-full bg-brand"
                style={{ width: `${Math.min(100, overview.trainingQuizzes.percentage)}%` }}
              />
            </div>
          </Card>

          {/* KPI Colles */}
          <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold uppercase tracking-wider">Colles</span>
              <FileCheck2 className="h-4 w-4 text-fg-brand" aria-hidden="true" />
            </div>
            <p className="mt-2 text-2xl font-bold text-heading" data-testid="kpi-colles-count">
              {overview.colles.completed} / {overview.colles.total}
            </p>
            <p className="text-xs text-muted-foreground">colles effectuées ({overview.colles.percentage} %)</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-1.5 rounded-full bg-brand"
                style={{ width: `${Math.min(100, overview.colles.percentage)}%` }}
              />
            </div>
          </Card>

          {/* KPI Examens blancs */}
          <Card className="rounded-2xl border-border bg-card p-4 shadow-xs">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold uppercase tracking-wider">Examens blancs</span>
              <Trophy className="h-4 w-4 text-fg-brand" aria-hidden="true" />
            </div>
            <p className="mt-2 text-2xl font-bold text-heading" data-testid="kpi-mock-exams-count">
              {overview.mockExams.completed} / {overview.mockExams.total}
            </p>
            <p className="text-xs text-muted-foreground">examens réalisés ({overview.mockExams.percentage} %)</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-1.5 rounded-full bg-brand"
                style={{ width: `${Math.min(100, overview.mockExams.percentage)}%` }}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* 2. Section Entraînement par EC */}
      <section aria-labelledby="health-progress-training-heading">
        <Card className="rounded-3xl border-border bg-card">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle id="health-progress-training-heading" className="text-lg text-heading">
                  Progression des quiz
                </CardTitle>
                <Badge variant="outline">{training.byTeachingElement.length} matières</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {training.byTeachingElement.map((ec) => (
                <div
                  key={ec.teachingElementId}
                  className="rounded-2xl border border-default bg-neutral-secondary-soft p-4 space-y-3"
                  data-testid={`progress-ec-${ec.code.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-heading">{ec.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {ec.code}
                    </Badge>
                  </div>

                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Quiz réalisés :</span>
                      <span className="font-semibold text-heading">
                        {ec.completedQuizzes} / {ec.totalQuizzes} ({ec.completionPercentage} %)
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
                      <div
                        className="h-1.5 rounded-full bg-brand"
                        style={{ width: `${Math.min(100, ec.completionPercentage)}%` }}
                      />
                    </div>

                    <div className="flex justify-between pt-1">
                      <span>Quiz maîtrisés :</span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        {ec.masteredQuizzes} / {ec.totalQuizzes} ({ec.masteryPercentage} %)
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
                      <div
                        className="h-1.5 rounded-full bg-emerald-500"
                        style={{ width: `${Math.min(100, ec.masteryPercentage)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Section Maîtrise par thème */}
      <HealthThemeProgressSection themeProgress={progress.themeProgress} />

      {/* 4. Section Colles */}
      <section aria-labelledby="health-progress-colles-heading">
        <Card className="rounded-3xl border-border bg-card">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle id="health-progress-colles-heading" className="text-lg text-heading">
                  Colles
                </CardTitle>
                <Badge variant="outline">{colles.completedCount} / {colles.totalCount} réalisées</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Badge variant="outline" className="border-brand/40 bg-brand-soft/20 text-heading">
                  Moyenne : {colles.averageScorePercentage !== null ? `${colles.averageScorePercentage} %` : '—'}
                </Badge>
                <Badge variant="outline" className="border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                  Meilleur : {colles.bestScorePercentage !== null ? `${colles.bestScorePercentage} %` : '—'}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto rounded-lg border border-default" data-testid="health-colles-progress-table-scroll">
              <table className="w-full text-left text-sm text-body rtl:text-right">
                <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="w-20 px-4 py-3 font-medium">COLLE</th>
                    <th className="px-4 py-3 font-medium">STATUT & TENTATIVES</th>
                    <th className="px-4 py-3 font-medium text-center">DERNIÈRE NOTE</th>
                    <th className="px-4 py-3 font-medium text-center">MEILLEURE NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  {colles.colleResults.map((c) => (
                    <tr
                      key={c.colleId}
                      className="border-b border-default transition-colors hover:bg-neutral-secondary-soft/50"
                      data-testid={`progress-colle-row-${c.code.toLowerCase()}`}
                    >
                      <td className="px-4 py-3.5 font-bold text-heading">{c.code}</td>
                      <td className="px-4 py-3.5 text-xs text-muted-foreground">
                        {c.attemptCount > 0 ? (
                          <span className="inline-flex items-center gap-1.5 text-heading font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                            {c.attemptCount} tentative{c.attemptCount > 1 ? 's' : ''}
                          </span>
                        ) : (
                          <span>Aucune tentative</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center font-medium">
                        {c.latestPercentage !== null ? `${c.latestPercentage} %` : '—'}
                      </td>
                      <td className="px-4 py-3.5 text-center font-bold text-emerald-700 dark:text-emerald-400">
                        {c.bestPercentage !== null ? `${c.bestPercentage} %` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 5. Section Examens blancs */}
      <section aria-labelledby="health-progress-mock-exams-heading">
        <Card className="rounded-3xl border-border bg-card">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle id="health-progress-mock-exams-heading" className="text-lg text-heading">
                  Examens blancs
                </CardTitle>
                <Badge variant="outline">{mockExams.completedCount} / {mockExams.totalCount} réalisés</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Badge variant="outline" className="border-brand/40 bg-brand-soft/20 text-heading">
                  Moyenne : {mockExams.averageScorePercentage !== null ? `${mockExams.averageScorePercentage} %` : '—'}
                </Badge>
                <Badge variant="outline" className="border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                  Meilleur : {mockExams.bestScorePercentage !== null ? `${mockExams.bestScorePercentage} %` : '—'}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto rounded-lg border border-default" data-testid="health-mock-exams-progress-table-scroll">
              <table className="w-full text-left text-sm text-body rtl:text-right">
                <thead className="bg-neutral-secondary-soft text-sm uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="w-32 px-4 py-3 font-medium">EXAMEN BLANC</th>
                    <th className="px-4 py-3 font-medium">TENTATIVES</th>
                    <th className="px-4 py-3 font-medium text-center">DERNIÈRE NOTE</th>
                    <th className="px-4 py-3 font-medium text-center">MEILLEURE NOTE</th>
                    <th className="px-4 py-3 font-medium max-sm:hidden">RÉSULTATS PAR EC (SUR MEILLEURE TENTATIVE)</th>
                  </tr>
                </thead>
                <tbody>
                  {mockExams.examResults.map((exam) => (
                    <tr
                      key={exam.examId}
                      className="border-b border-default transition-colors hover:bg-neutral-secondary-soft/50"
                      data-testid={`progress-mock-exam-row-${exam.slug}`}
                    >
                      <td className="px-4 py-3.5 font-bold text-heading">{exam.title}</td>
                      <td className="px-4 py-3.5 text-xs text-muted-foreground">
                        {exam.attemptCount > 0 ? (
                          <span className="inline-flex items-center gap-1.5 text-heading font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                            {exam.attemptCount} tentative{exam.attemptCount > 1 ? 's' : ''}
                          </span>
                        ) : (
                          <span>Aucune tentative</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center font-medium">
                        {exam.latestPercentage !== null ? `${exam.latestPercentage} %` : '—'}
                      </td>
                      <td className="px-4 py-3.5 text-center font-bold text-emerald-700 dark:text-emerald-400">
                        {exam.bestPercentage !== null ? `${exam.bestPercentage} %` : '—'}
                      </td>
                      <td className="px-4 py-3.5 max-sm:hidden">
                        {exam.bySection.length > 0 && exam.bestPercentage !== null ? (
                          <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            {exam.bySection.map((sec) => (
                              <Badge key={sec.sectionId} variant="outline" className="text-[11px]">
                                {sec.code} : {sec.percentageOnBestAttempt !== null ? `${sec.percentageOnBestAttempt} %` : '—'}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
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
    </div>
  );
}
