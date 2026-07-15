'use client';

import Link from 'next/link';
import { TabItem, Tabs } from 'flowbite-react';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export function HealthCourseUnitTabs({
  courseUnit,
  activeTeachingElementId,
}: HealthCourseUnitTabsProps) {
  return (
    <Tabs variant="underline" theme={healthTabsTheme}>
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
                .map((group) => (
                  <Card
                    key={group.label}
                    className="rounded-3xl border-border bg-card hover:bg-card"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <CardTitle className="text-lg text-heading">{group.label}</CardTitle>
                        <Badge variant="outline">
                          {group.chapters.length} chapitre
                          {group.chapters.length > 1 ? 's' : ''}
                        </Badge>
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
                ))
            ) : (
              <p className="text-sm text-muted-foreground">
                Aucun chapitre n&apos;est encore rattaché à cet EC.
              </p>
            )}
          </div>
        </TabItem>
      ))}

      <TabItem
        active={courseUnit.teachingElements.length === 0}
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

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl border-border bg-card hover:bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-heading">Colles UE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cette zone accueillera les colles couvrant l&apos;ensemble de l&apos;UE.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border bg-card hover:bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-heading">Examens blancs UE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cette zone accueillera les examens blancs transversaux à l&apos;UE.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border bg-card hover:bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-heading">Annales UE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cette zone accueillera les annales et sujets couvrant toute l&apos;UE.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabItem>
    </Tabs>
  );
}
