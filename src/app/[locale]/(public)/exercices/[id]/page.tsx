/**
 * Page de détail d'un exercice
 * /exercices/[id]
 */

'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Heart, ChevronLeft } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { AccountContinuityCta } from '@/components/shared/account-continuity-cta';
import { ExerciseMetaLine } from '@/components/exercises/ExerciseMetaLine';
import { ExamPaperDocumentsCard } from '@/components/exam-papers/ExamPaperDocumentsCard';
import { ExamPaperPdfPreview } from '@/components/exam-papers/ExamPaperPdfPreview';
import { ExerciseDomainsCard } from '@/components/exercises/ExerciseDomainsCard';
import Link from 'next/link';
import type { ExerciseWithRelations } from '@/core/exercise';
import { normalizeExamPaperLabel } from '@/lib/utils';

export default function ExerciseDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [exercise, setExercise] = useState<ExerciseWithRelations | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!params?.id) return;

    // Charger les favoris
    try {
      const savedFavorites = localStorage.getItem('exercise-favorites');
      if (savedFavorites) {
        const favorites = new Set(JSON.parse(savedFavorites));
        setIsFavorite(favorites.has(params.id as string));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }

    // Charger l'exercice
    fetch(`/api/exercises/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setExercise(data.exercise);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching exercise:', err);
        setLoading(false);
      });
  }, [params?.id]);

  useEffect(() => {
    if (!exercise || status !== 'authenticated' || !session?.user?.id) return;

    const subjectId = exercise.examPaper?.teaching?.subject?.id ?? null;

    fetch('/api/user-activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        examPaperId: exercise.examPaper?.id ?? null,
        exerciseId: exercise.id,
        subjectId,
        sessionYear: exercise.examPaper?.sessionYear ?? null,
      }),
    }).catch(() => {});
  }, [exercise, session?.user?.id, status]);

  const toggleFavorite = () => {
    if (!exercise) return;

    try {
      const savedFavorites = localStorage.getItem('exercise-favorites');
      const favorites = new Set(savedFavorites ? JSON.parse(savedFavorites) : []);

      if (favorites.has(exercise.id)) {
        favorites.delete(exercise.id);
        setIsFavorite(false);
      } else {
        favorites.add(exercise.id);
        setIsFavorite(true);
      }

      localStorage.setItem('exercise-favorites', JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4" role="status">
            <svg
              aria-hidden="true"
              className="inline h-8 w-8 animate-spin text-gray-200 dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Chargement...</span>
          </div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-5xl">🤷</div>
          <p className="mb-2 text-lg font-medium">Exercice introuvable</p>
          <Button asChild variant="outline">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  const {
    title,
    exerciseNumber,
    label,
    points,
    exerciseType,
    exerciseUrl,
    estimatedDuration,
    estimatedDifficulty,
    summary,
    themes,
    examPaper,
  } = exercise;

  const { label: paperLabel, sessionYear, diploma, teaching, curriculum } = examPaper;
  const subjectId = teaching.subject.id;
  const subjectLabel =
    teaching.subject.longDescription ||
    teaching.subject.shortDescription ||
    teaching.longDescription;
  const teachingBreadcrumbLabel =
    teaching.longDescription && teaching.longDescription !== subjectLabel
      ? teaching.longDescription
      : teaching.shortDescription && teaching.shortDescription !== subjectLabel
        ? teaching.shortDescription
        : null;
  const subjectBreadcrumbLabel = teachingBreadcrumbLabel
    ? `${subjectLabel} (${teachingBreadcrumbLabel})`
    : subjectLabel;
  const fallbackBackHref = subjectId
    ? `/diplomes/${diploma.id}/matieres/${subjectId}/sessions/${sessionYear}`
    : '/diplomes';
  const returnToParam = searchParams.get('returnTo')?.trim() || null;
  const safeReturnTo =
    returnToParam && returnToParam.startsWith('/') && !returnToParam.startsWith('//')
      ? returnToParam
      : null;
  const backHref = safeReturnTo ?? fallbackBackHref;
  const backLabel = (() => {
    if (!safeReturnTo) return 'Retour à la session';
    if (safeReturnTo.startsWith('/sujets/')) return 'Retour au sujet';
    if (safeReturnTo.includes('/sessions/')) return 'Retour à la session';
    if (safeReturnTo.startsWith('/diplomes')) return 'Retour aux diplômes';
    if (safeReturnTo === '/' || safeReturnTo.startsWith('/?')) return 'Retour aux résultats';
    return 'Retour';
  })();
  const examPaperCorrections = examPaper.corrections ?? [];
  const officialStatementUrl = examPaper.subjectUrl ?? null;
  const previewPdfUrl = exerciseUrl || examPaper.subjectUrl || null;
  const displayTitle = title || label || `Exercice ${exerciseNumber}`;
  const normalizedPaperLabel = normalizeExamPaperLabel(paperLabel);
  const paperLabelDisplay = normalizedPaperLabel || paperLabel;
  const traceability = paperLabelDisplay || `Session ${sessionYear}`;
  const domains = Array.from(
    new Map(
      themes
        .filter((theme) => theme.domain)
        .map((theme) => [
          theme.domain!.id,
          {
            id: theme.domain!.id,
            short:
              theme.domain!.shortDescription || theme.domain!.longDescription,
            long: theme.domain!.longDescription,
          },
        ])
    ).values()
  ).sort((a, b) =>
    a.long.localeCompare(b.long, 'fr', { sensitivity: 'base' })
  );
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: <>Dipl&ocirc;mes</>, href: '/diplomes' },
    { label: diploma.longDescription, href: `/diplomes/${diploma.id}` },
    ...(subjectId
      ? [
          {
            label: subjectBreadcrumbLabel,
            href: `/diplomes/${diploma.id}/matieres/${subjectId}`,
          },
          {
            label: `Session ${sessionYear}`,
            href: `/diplomes/${diploma.id}/matieres/${subjectId}/sessions/${sessionYear}`,
          },
        ]
      : []),
    {
      label: paperLabelDisplay || 'Sujet',
      href: `/sujets/${examPaper.id}`,
    },
    { label: displayTitle },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Contenu principal */}
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8">
        <div className="space-y-3">
          <PublicBreadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href={backHref}>
                <ChevronLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* En-tête exercice */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground md:flex-nowrap md:items-center">
              <div className="flex w-full md:ml-auto md:w-auto md:justify-end">
                <ExerciseMetaLine
                  variant="chips"
                  sessionYear={sessionYear}
                  curriculum={curriculum}
                  duration={estimatedDuration}
                  difficulty={estimatedDifficulty}
                  points={points ?? null}
                  exerciseType={exerciseType}
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold leading-tight">{displayTitle}</h1>
                <p className="mt-2 text-muted-foreground">{traceability}</p>
              </div>

              {/* Bouton favoris */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFavorite}
                className="shrink-0"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite ? 'fill-fg-danger text-fg-danger' : 'text-body'
                  }`}
                />
              </Button>
            </div>

            {/* Domaines */}
            <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
              <span className="font-semibold text-muted-foreground">Domaines :</span>
              {domains.length > 0 ? (
                domains.map((domain) => (
                  <Badge key={domain.id} variant="outline" className="gap-1.5 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span className="hidden md:inline">{domain.long}</span>
                    <span className="md:hidden">{domain.short}</span>
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-muted-foreground">Non renseignés</span>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <ExamPaperDocumentsCard
            officialStatementUrl={officialStatementUrl}
            corrections={examPaperCorrections}
          />

          <AccountContinuityCta kind="exercise" />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              {summary && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Résumé</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{summary}</p>
                  </CardContent>
                </Card>
              )}

              <ExamPaperPdfPreview
                pdfUrl={previewPdfUrl}
                fallbackUrl={examPaper.sourceUrl ?? null}
                frameTitle={`Énoncé ${displayTitle}`}
              />
            </div>

            <ExerciseDomainsCard exercise={exercise} />
          </div>
        </div>
      </main>
    </div>
  );
}
