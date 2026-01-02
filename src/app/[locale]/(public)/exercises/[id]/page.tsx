/**
 * Page de détail d'un exercice
 * /exercises/[id]
 */

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Heart, Clock, ExternalLink, ChevronLeft, Download } from 'lucide-react';
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
import Link from 'next/link';
import type { ExerciseWithRelations } from '@/core/exercise';
import { getInternalOrigin, isExternalUrl } from '@/lib/utils';

function DifficultyDots({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`h-2 w-2 rounded-full ${
            dot <= value ? 'bg-brand' : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );
}

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
    statement,
    exerciseUrl,
    correctionUrl,
    estimatedDuration,
    estimatedDifficulty,
    summary,
    themes,
    corrections,
    keywords,
    examPaper,
  } = exercise;

  const { label: paperLabel, sessionYear, diploma, teaching } = examPaper;
  const statementText = statement?.trim() ?? '';
  const statementUrl = exerciseUrl || examPaper.subjectUrl || null;
  const primaryCorrectionUrl = correctionUrl || corrections[0]?.url || null;
  const correctionFallback =
    correctionUrl && !corrections.some((item) => item.url === correctionUrl)
      ? correctionUrl
      : null;
  const internalOrigin = getInternalOrigin();
  const statementUrlIsExternal = isExternalUrl(statementUrl, internalOrigin);
  const primaryCorrectionIsExternal = isExternalUrl(primaryCorrectionUrl, internalOrigin);

  const displayTitle = title || label || `Exercice ${exerciseNumber}`;
  const traceability = `${paperLabel} ${sessionYear}`;
  const formatExerciseType = (value?: string | null) => {
    if (!value || value === 'NORMAL') return null;
    if (value === 'QCM') return 'QCM';
    if (value === 'TRUE_FALSE') return 'Vrai/Faux';
    if (value === 'OTHER') return 'Autre';
    return value;
  };

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Contenu principal */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour
          </Button>
        </div>
        <div className="space-y-6">
          {/* En-tête exercice */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold leading-tight">{displayTitle}</h1>
                <p className="mt-2 text-muted-foreground">{traceability}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {points && (
                    <Badge variant="secondary">
                      {points} point{points > 1 ? 's' : ''}
                    </Badge>
                  )}
                  {formatExerciseType(exerciseType) && (
                    <Badge variant="outline">{formatExerciseType(exerciseType)}</Badge>
                  )}
                </div>
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

            {/* Hiérarchie pédagogique */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{diploma.shortDescription}</span>
              <span>›</span>
              <span>{teaching.subject.shortDescription}</span>
              <span>›</span>
              <span>{teaching.grade.shortDescription}</span>
            </div>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-4">
              {estimatedDuration && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {estimatedDuration >= 60
                      ? `${Math.floor(estimatedDuration / 60)}h${
                          estimatedDuration % 60 > 0
                            ? ` ${estimatedDuration % 60}min`
                            : ''
                        }`
                      : `${estimatedDuration}min`}
                  </span>
                </div>
              )}
              {estimatedDifficulty && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Difficulté :</span>
                  <DifficultyDots value={estimatedDifficulty} />
                </div>
              )}
            </div>

            {/* Thèmes */}
            {themes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <Badge key={theme.id} variant="secondary">
                    {theme.shortDescription || theme.longDescription}
                  </Badge>
                ))}
              </div>
            )}

            {/* Mots-clés */}
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            )}
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

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Accès rapide
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#enonce">Énoncé</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#corrections">Corrections</a>
              </Button>
            </div>
          </div>

          {/* Actions principales */}
          {(statementUrl || primaryCorrectionUrl) && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Documents
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {statementUrl && (
                  <Button size="lg" className="w-full" asChild>
                    <a href={statementUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger l&apos;énoncé
                      {statementUrlIsExternal && (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                )}
                {primaryCorrectionUrl && (
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href={primaryCorrectionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir la correction
                      {primaryCorrectionIsExternal && (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}

          <Card id="enonce">
            <CardHeader>
              <CardTitle className="text-lg">Énoncé</CardTitle>
            </CardHeader>
            <CardContent>
              {statementText ? (
                <div className="whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
                  {statementText}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Énoncé non disponible pour le moment.
                  {statementUrl ? ' Utilise le PDF ci-dessus.' : ''}
                </p>
              )}
            </CardContent>
          </Card>

          <Card id="corrections">
            <CardHeader>
              <CardTitle className="text-lg">Corrections</CardTitle>
              {corrections.length > 0 && (
                <CardDescription>
                  {corrections.length} correction{corrections.length > 1 ? 's' : ''}{' '}
                  disponible{corrections.length > 1 ? 's' : ''}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {corrections.length > 0 ? (
                <div className="space-y-3">
                  {corrections.map((correction) => (
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
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {correction.type}
                          </Badge>
                          {correction.quality && (
                            <div className="flex gap-0.5">
                              {[...Array(correction.quality)].map((_, i) => (
                                <span key={i} className="text-yellow-500">
                                  ⭐
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <a
                          href={correction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isExternalUrl(correction.url, internalOrigin) && (
                            <ExternalLink className="h-4 w-4" />
                          )}
                        </a>
                      </Button>
                    </div>
                  ))}
                  {correctionFallback && (
                    <a
                      href={correctionFallback}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm text-fg-brand hover:border-brand/50"
                    >
                      <span>Corrigé externe</span>
                      {isExternalUrl(correctionFallback, internalOrigin) && (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  )}
                </div>
              ) : correctionFallback ? (
                <a
                  href={correctionFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm text-fg-brand hover:border-brand/50"
                >
                  <span>Corrigé externe</span>
                  {isExternalUrl(correctionFallback, internalOrigin) && (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Aucune correction disponible pour le moment.
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
