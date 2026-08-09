'use client';

import Link from 'next/link';
import { TabItem, Tabs } from 'flowbite-react';
import { ArrowRight, BarChart3, Clock3, FileCheck2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HealthMockExamActionButton } from '@/components/health/HealthMockExamActionButton';
import type { HealthStudentCourseUnitDetail } from '@/core/health';

const healthTabsTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'text-sm font-medium text-center text-body border-b border-default',
    variant: {
      underline: 'flex flex-wrap -mb-px',
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

const formatTeachingElementLabel = (
  teachingElement: HealthStudentCourseUnitDetail['teachingElements'][number],
) =>
  teachingElement.code
    ? `${teachingElement.code} · ${teachingElement.shortTitle ?? teachingElement.title}`
    : (teachingElement.shortTitle ?? teachingElement.title);

const getChapterHref = (courseUnitId: string, chapterSlug: string) =>
  `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}`;

const getMockExamResultsHref = (courseUnitId: string, examSlug: string, attemptId: string) =>
  `/sante/ue/${courseUnitId}/examens-blancs/${examSlug}/resultats/${attemptId}`;

export function HealthCourseUnitTabs({
  courseUnit,
  activeTeachingElementId,
}: HealthCourseUnitTabsProps) {
  return (
    <Tabs applyTheme="replace" variant="underline" theme={healthTabsTheme}>
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
                            <Badge variant="outline">{quizCount} QCM</Badge>
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
                                    {chapter.sectionCount > 1 ? 's' : ''} · {chapter.quizCount} QCM
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
        active={
          activeTeachingElementId
            ? activeTeachingElementId === 'synthese'
            : courseUnit.teachingElements.length === 0
        }
        title={
          <span className="inline-flex items-center gap-2">
            <span>Synthèse</span>
            <Badge variant="outline">{courseUnit.teachingElements.length} EC</Badge>
          </span>
        }
      >
        <div className="space-y-6">
          <Card className="rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-heading">Vue d&apos;ensemble de l&apos;UE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courseUnit.teachingElements.length > 0 ? (
                <ul className="space-y-3 text-sm">
                  {courseUnit.teachingElements.map((teachingElement) => (
                    <li key={teachingElement.id} className="text-muted-foreground">
                      <span className="font-medium text-heading">
                        {formatTeachingElementLabel(teachingElement)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Aucun EC publié pour cette UE pour le moment.
                </p>
              )}
            </CardContent>
          </Card>

          <section className="space-y-5" aria-labelledby="health-mock-exams-heading">
            <div className="space-y-1">
              <h2 id="health-mock-exams-heading" className="text-xl font-semibold text-heading">
                Examens blancs
              </h2>
              <p className="text-sm text-muted-foreground">
                Évaluez-vous sur l&apos;ensemble des enseignements constitutifs de l&apos;UE,
                dans des conditions proches de l&apos;examen.
              </p>
            </div>

            <Card className="rounded-base border-brand/25 bg-brand-soft/10 hover:bg-brand-soft/10">
              <CardHeader className="gap-3">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">
                      S&apos;entraîner à l&apos;interface d&apos;examen
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Mini-parcours de 3 à 5 minutes pour pratiquer les gestes du mode examen et
                      reconnaître les formats UNESS QRU, QRM, QRP et QROC.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                      5 min
                    </Badge>
                    <Badge variant="outline" className="gap-1.5">
                      <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                      5 étapes
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Rejouable librement, sans tentative d&apos;examen et sans impact sur les statistiques.
                </p>
                <Button asChild>
                  <Link href="/sante/interface-examen">
                    Découvrir le mode examen
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {courseUnit.mockExams.length > 0 ? (
              <div className="space-y-4">
                {courseUnit.mockExams.map((exam) => (
                  <Card key={exam.id} className="rounded-base bg-card hover:bg-card">
                    <CardHeader className="gap-3">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{exam.title}</CardTitle>
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
                    </CardHeader>
                    <CardContent className="space-y-5">
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

                      <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-border p-6 text-sm text-muted-foreground">
                Aucun examen blanc n&apos;est disponible pour le moment.
              </div>
            )}
          </section>
        </div>
      </TabItem>
    </Tabs>
  );
}
