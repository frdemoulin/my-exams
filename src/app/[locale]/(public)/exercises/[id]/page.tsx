/**
 * Page de détail d'un exercice
 * /exercises/[id]
 */

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Heart, ExternalLink, ChevronLeft, Info } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { ExerciseMetaLine } from '@/components/exercises/ExerciseMetaLine';
import Link from 'next/link';
import type { ExerciseWithRelations } from '@/core/exercise';
import { getInternalOrigin, isExternalUrl } from '@/lib/utils';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [exercise, setExercise] = useState<ExerciseWithRelations | null>(null);
  const [otherExercises, setOtherExercises] = useState<ExerciseWithRelations[]>([]);
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
          setOtherExercises(data.otherExercises || []);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching exercise:', err);
        setLoading(false);
      });
  }, [params?.id]);

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
          <div className="mb-4 text-4xl">⏳</div>
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
    corrections: exerciseCorrections,
    examPaper,
  } = exercise;

  const { label: paperLabel, sessionYear, diploma, teaching, curriculum } = examPaper;
  const statementUrl = exerciseUrl || examPaper.subjectUrl || null;
  const examPaperCorrections = examPaper.corrections ?? [];
  const mergedCorrections = (() => {
    const items = [...(exerciseCorrections ?? []), ...examPaperCorrections];
    const seen = new Set<string>();
    return items.filter((item) => {
      const key = `${item.source}::${item.url}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();
  const internalOrigin = getInternalOrigin();
  const statementUrlIsExternal = isExternalUrl(statementUrl, internalOrigin);
  const officialStatementUrl = statementUrl ?? examPaper.sourceUrl ?? null;
  const officialStatementIsExternal = isExternalUrl(officialStatementUrl, internalOrigin);
  const formatCorrectionType = (value?: string | null) => {
    if (!value) return 'PDF';
    const normalized = value.trim().toLowerCase();
    if (normalized === 'pdf') return 'PDF';
    if (normalized === 'video') return 'Vidéo';
    if (normalized === 'html') return 'Page web';
    return value.toUpperCase();
  };
  const displayTitle = title || label || `Exercice ${exerciseNumber}`;
  const traceability = paperLabel || `Session ${sessionYear}`;
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

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Contenu principal */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                router.back();
                return;
              }
              router.push('/');
            }}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour
          </Button>
        </div>
        <div className="space-y-6">
          {/* En-tête exercice */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground md:flex-nowrap md:items-center">
              <div className="flex flex-wrap items-center gap-1">
                <span>{diploma.shortDescription}</span>
                <span>&gt;</span>
                <span>{teaching.subject.shortDescription}</span>
                <span>&gt;</span>
                <span>{teaching.grade.shortDescription}</span>
              </div>
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

          {/* Résumé */}
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

          <Card id="corrections">
            <CardHeader>
              <CardTitle className="text-lg">Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                {officialStatementUrl ? (
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">Sujet officiel (PDF)</p>
                      <span className="inline-flex items-start gap-1 text-xs text-muted-foreground">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                          <Info className="h-3 w-3" aria-hidden="true" />
                        </span>
                        <span className="hidden md:inline">
                          Document officiel d&apos;examen, diffus&eacute; &agrave; l&apos;identique
                          (non modifi&eacute;). Source institutionnelle : autorit&eacute;
                          acad&eacute;mique / minist&egrave;re comp&eacute;tent.
                        </span>
                        <span className="md:hidden">
                          Sujet officiel d&apos;examen – document original non modifi&eacute;.
                        </span>
                      </span>
                    </div>
                    <Button size="sm" asChild>
                      <a
                        href={officialStatementUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ouvrir le sujet (PDF)
                        {officialStatementIsExternal && (
                          <ExternalLink className="ml-2 h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Sujet officiel non disponible pour le moment.
                  </p>
                )}
              </div>
              <div className="space-y-3">
                {mergedCorrections.length > 0 ? (
                  <div className="space-y-3">
                    {mergedCorrections.map((correction, index) => {
                      const isLastCorrection = index === mergedCorrections.length - 1;
                      return (
                        <div
                          key={correction.id}
                          className="flex items-center justify-between rounded-lg border border-border p-3"
                        >
                          <div className="flex-1">
                            <p className="font-medium">{correction.source}</p>
                            {correction.author && (
                              <p className="text-sm text-muted-foreground">
                                Par {correction.author}
                              </p>
                            )}
                            {correction.quality && (
                              <div className="mt-1 flex gap-0.5">
                                {[...Array(correction.quality)].map((_, i) => (
                                  <span key={i} className="text-yellow-500">
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            )}
                            {isLastCorrection && (
                              <div className="mt-2 inline-flex items-start gap-1 text-xs text-muted-foreground">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                                  <Info className="h-3 w-3" aria-hidden="true" />
                                </span>
                                <span>
                                  H&eacute;bergement et diffusion des corrections par leurs
                                  &eacute;diteurs respectifs. Aucun h&eacute;bergement par My
                                  Exams.
                                </span>
                              </div>
                            )}
                          </div>
                          <Button size="sm" variant="success" asChild>
                            <a
                              href={correction.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Corrigé {correction.source} ({formatCorrectionType(correction.type)})
                              {isExternalUrl(correction.url, internalOrigin) && (
                                <ExternalLink className="ml-2 h-4 w-4" />
                              )}
                            </a>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Aucun corrig&eacute; r&eacute;f&eacute;renc&eacute; pour ce sujet.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card id="enonce">
            <CardHeader>
              <CardTitle className="text-lg">Énoncé</CardTitle>
            </CardHeader>
            <CardContent>
              {statementUrl ? (
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <iframe
                    title={`Énoncé ${displayTitle}`}
                    src={statementUrl}
                    className="h-[70dvh] min-h-[70vh] w-full md:h-[100dvh] md:min-h-[100vh]"
                  />
                </div>
              ) : examPaper.sourceUrl ? (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Énoncé non disponible en PDF.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={examPaper.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Consulter la source externe
                      {isExternalUrl(examPaper.sourceUrl, internalOrigin) && (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Énoncé non disponible pour le moment.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Autres exercices du même sujet */}
          {otherExercises.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Autres exercices de ce sujet
                </CardTitle>
                <CardDescription>
                  {otherExercises.length} exercice{otherExercises.length > 1 ? 's' : ''}{' '}
                  du même sujet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {otherExercises.map((ex) => (
                    <Link key={ex.id} href={`/exercises/${ex.id}`}>
                      <div className="rounded-lg border border-border p-3 transition-colors hover:bg-muted">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium">
                              {ex.title || ex.label || `Exercice ${ex.exerciseNumber}`}
                            </p>
                            {ex.points && (
                              <p className="text-sm text-muted-foreground">
                                {ex.points} point{ex.points > 1 ? 's' : ''}
                              </p>
                            )}
                          </div>
                          <ChevronLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
