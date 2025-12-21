'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MultiSelect } from '@/components/ui/multi-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ConfirmDeleteDialog } from '@/components/shared/confirm-delete-dialog';
import {
  previewExerciseStatements,
  replaceExercisesByExamPaper,
  suggestExerciseSplitByExamPaper,
  type CreateExerciseInput,
  type ExerciseType,
} from '@/core/exercise';
import { Theme } from '@prisma/client';
import toast from 'react-hot-toast';

const EXERCISE_TYPE_OPTIONS: Array<{ value: ExerciseType; label: string }> = [
  { value: 'NORMAL', label: 'Normal' },
  { value: 'QCM', label: 'QCM' },
  { value: 'TRUE_FALSE', label: 'Vrai / Faux' },
  { value: 'OTHER', label: 'Autre' },
];

interface ExerciseFormData {
  exerciseNumber: number;
  label: string;
  points?: number;
  pageStart?: number;
  pageEnd?: number;
  exerciseType: ExerciseType;
  title?: string;
  statement?: string;
  themeIds: string[];
  estimatedDuration?: number;
  estimatedDifficulty?: number;
  confidence?: number | null;
  flags?: string[];
}

interface SplitExercisesFormProps {
  examPaperId: string;
  examPaperLabel: string;
  existingExercises: Array<{ exerciseNumber: number; label?: string | null }>;
  availableThemes: Theme[];
  subjectUrl?: string | null;
}

export function SplitExercisesForm({
  examPaperId,
  examPaperLabel,
  existingExercises,
  availableThemes,
  subjectUrl,
}: SplitExercisesFormProps) {
  const router = useRouter();
  const [exercises, setExercises] = useState<ExerciseFormData[]>([
    { exerciseNumber: 1, label: 'Exercice 1', themeIds: [], exerciseType: 'NORMAL' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [splitWarnings, setSplitWarnings] = useState<string[]>([]);

  const addExercise = () => {
    const nextNumber = Math.max(...exercises.map((e) => e.exerciseNumber), 0) + 1;
    setExercises([
      ...exercises,
      {
        exerciseNumber: nextNumber,
        label: `Exercice ${nextNumber}`,
        themeIds: [],
        exerciseType: 'NORMAL',
      },
    ]);
  };

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const updateExercise = (index: number, field: keyof ExerciseFormData, value: any) => {
    const updated = [...exercises];
    updated[index] = { ...updated[index], [field]: value };
    setExercises(updated);
  };

  const updateThemes = (index: number, themeIds: string[]) => {
    const updated = [...exercises];
    updated[index] = { ...updated[index], themeIds };
    setExercises(updated);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      if (existingExercises.length > 0) {
        const confirmed = confirm(
          'Des exercices existent deja pour ce sujet. Voulez-vous les remplacer ?'
        );
        if (!confirmed) {
          setIsSubmitting(false);
          return;
        }
      }

      // Préparer les données
      const exercisesToCreate: CreateExerciseInput[] = exercises.map((ex) => ({
        examPaperId,
        exerciseNumber: ex.exerciseNumber,
        label: ex.label || undefined,
        points: ex.points,
        pageStart: ex.pageStart,
        pageEnd: ex.pageEnd,
        exerciseType: ex.exerciseType,
        title: ex.title,
        statement: ex.statement,
        themeIds: ex.themeIds,
        estimatedDuration: ex.estimatedDuration,
        estimatedDifficulty: ex.estimatedDifficulty,
        keywords: [],
      }));

      // Créer les exercices
      const result = await replaceExercisesByExamPaper(examPaperId, exercisesToCreate);

      if (result.success) {
        toast.success(`${result.created} exercice(s) créé(s) avec succès`);
        router.push(`/admin/exam-papers/${examPaperId}`);
      } else {
        toast.error(result.error || 'Certains exercices n\'ont pas pu être créés');
      }
    } catch (error) {
      console.error('Error creating exercises:', error);
      toast.error('Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = async () => {
    if (!subjectUrl) {
      toast.error('Sujet sans PDF : impossible de previsualiser');
      return;
    }

    const missingRanges = exercises.filter((ex) => !ex.pageStart || !ex.pageEnd);
    if (missingRanges.length > 0) {
      toast.error(
        `Plages manquantes pour : ${missingRanges.map((ex) => `#${ex.exerciseNumber}`).join(', ')}`
      );
      return;
    }

    setIsPreviewing(true);
    try {
      const result = await previewExerciseStatements({
        examPaperId,
        ranges: exercises.map((ex) => ({
          exerciseNumber: ex.exerciseNumber,
          pageStart: ex.pageStart as number,
          pageEnd: ex.pageEnd as number,
        })),
      });

      if (!result.success) {
        toast.error(result.error || 'Erreur de previsualisation');
        return;
      }

      const statementByExercise = new Map(
        (result.items || []).map((item) => [item.exerciseNumber, item.statement])
      );

      setExercises((prev) =>
        prev.map((ex) => ({
          ...ex,
          statement: statementByExercise.get(ex.exerciseNumber) ?? ex.statement,
        }))
      );

      toast.success('Enonces extraits depuis le PDF');
    } catch (error) {
      console.error('Error previewing statements:', error);
      toast.error('Une erreur est survenue');
    } finally {
      setIsPreviewing(false);
    }
  };

  const handleSuggestSplit = async () => {
    if (!subjectUrl) {
      toast.error('Sujet sans PDF : impossible de pré-découper');
      return;
    }

    setIsSuggesting(true);
    setSplitWarnings([]);
    try {
      const result = await suggestExerciseSplitByExamPaper(examPaperId, {
        expectedExerciseCount: existingExercises.length || undefined,
      });

      if (!result.success) {
        toast.error(result.error || "Erreur lors de l'analyse IA");
        return;
      }

      const suggested = result.exercises.map((exercise) => ({
        exerciseNumber: exercise.exerciseNumber,
        label: exercise.label || `Exercice ${exercise.exerciseNumber}`,
        points: exercise.points ?? undefined,
        pageStart: exercise.pageStart ?? undefined,
        pageEnd: exercise.pageEnd ?? undefined,
        exerciseType: 'NORMAL',
        title: undefined,
        statement: undefined,
        themeIds: [],
        estimatedDuration: exercise.estimatedDuration ?? undefined,
        estimatedDifficulty: undefined,
        confidence: exercise.confidence ?? null,
        flags: exercise.flags ?? [],
      }));

      setExercises(suggested);
      setSplitWarnings(result.flags || []);

      if ((result.flags && result.flags.length > 0) || suggested.some((ex) => ex.flags?.length)) {
        toast('Découpage proposé. Vérifiez les points signalés.', { icon: '⚠️' });
      } else {
        toast.success('Découpage proposé par IA');
      }
    } catch (error) {
      console.error('Error suggesting split:', error);
      toast.error("Erreur lors de l'analyse IA");
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <Card>
        <CardHeader>
          <CardTitle>Découper le sujet en exercices</CardTitle>
          <CardDescription>
            Sujet : <strong>{examPaperLabel}</strong>
            <br />
            Créez les exercices individuels de ce sujet avec leurs métadonnées.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {existingExercises.length > 0 && (
            <div className="rounded-base border border-default bg-neutral-secondary-soft p-4">
              <p className="text-sm font-semibold text-heading">
                ⚠️ Exercices existants : {existingExercises.map((e) => `#${e.exerciseNumber}`).join(', ')}
              </p>
              <p className="text-xs text-body">
                La création remplacera tous les exercices existants.
              </p>
            </div>
          )}
          {!subjectUrl && (
            <div className="rounded-base border border-default bg-neutral-secondary-soft p-4 mt-4">
              <p className="text-sm font-semibold text-heading">
                ⚠️ Aucun PDF disponible (subjectUrl manquant)
              </p>
              <p className="text-xs text-body">
                L&apos;extraction automatique des énoncés est désactivée.
              </p>
            </div>
          )}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handlePreview}
                disabled={isSubmitting || isPreviewing || isSuggesting}
              >
                {isPreviewing ? 'Extraction...' : 'Extraire les énoncés depuis le PDF'}
              </Button>
              <ConfirmDeleteDialog
                onConfirm={handleSuggestSplit}
                title="Pré-découper avec l'IA ?"
                description="L'analyse IA remplacera le formulaire actuel. Aucun exercice en base ne sera modifié."
                confirmLabel="Lancer l'analyse IA"
                confirmLoadingLabel="Analyse..."
                confirmVariant="default"
                trigger={
                  <Button
                    type="button"
                    variant="default"
                    disabled={isSubmitting || isPreviewing || isSuggesting}
                  >
                    {isSuggesting ? 'Analyse...' : "Pré-découper avec l'IA"}
                  </Button>
                }
              />
            </div>
            {splitWarnings.length > 0 && (
              <div className="mt-4 rounded-base border border-default bg-neutral-secondary-soft p-4">
                <p className="text-sm font-semibold text-heading">Points à vérifier</p>
                <ul className="mt-2 list-disc pl-4 text-xs text-muted-foreground">
                  {splitWarnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Liste des exercices à créer */}
      {exercises.map((exercise, index) => (
        <Card key={index}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">
                  Exercice {exercise.exerciseNumber}
                </CardTitle>
                {typeof exercise.confidence === 'number' && (
                  <Badge variant="outline">
                    Confiance IA {Math.round(exercise.confidence * 100)}%
                  </Badge>
                )}
                {exercise.flags && exercise.flags.length > 0 && (
                  <Badge variant="outline">À vérifier</Badge>
                )}
              </div>
              {exercises.length > 1 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeExercise(index)}
                        aria-label="Supprimer l&apos;exercice"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Supprimer l&apos;exercice</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercise.flags && exercise.flags.length > 0 && (
              <div className="rounded-base border border-default bg-neutral-secondary-soft p-3">
                <p className="text-xs font-semibold text-heading">Points à vérifier</p>
                <ul className="mt-1 list-disc pl-4 text-xs text-muted-foreground">
                  {exercise.flags.map((flag) => (
                    <li key={flag}>{flag}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`number-${index}`}>Numéro *</Label>
                <Input
                  id={`number-${index}`}
                  type="number"
                  value={exercise.exerciseNumber}
                  onChange={(e) =>
                    updateExercise(index, 'exerciseNumber', parseInt(e.target.value) || 1)
                  }
                  min={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`label-${index}`}>Label</Label>
                <Input
                  id={`label-${index}`}
                  value={exercise.label}
                  onChange={(e) => updateExercise(index, 'label', e.target.value)}
                  placeholder="Exercice 1, Partie A..."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`pageStart-${index}`}>Page debut</Label>
                <Input
                  id={`pageStart-${index}`}
                  type="number"
                  value={exercise.pageStart || ''}
                  onChange={(e) =>
                    updateExercise(
                      index,
                      'pageStart',
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  placeholder="1"
                  min={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`pageEnd-${index}`}>Page fin</Label>
                <Input
                  id={`pageEnd-${index}`}
                  type="number"
                  value={exercise.pageEnd || ''}
                  onChange={(e) =>
                    updateExercise(
                      index,
                      'pageEnd',
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  placeholder="3"
                  min={1}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`type-${index}`}>Type d&apos;exercice</Label>
                <Select
                  value={exercise.exerciseType}
                  onValueChange={(value) =>
                    updateExercise(index, 'exerciseType', value as ExerciseType)
                  }
                >
                  <SelectTrigger id={`type-${index}`}>
                    <SelectValue placeholder="Normal" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXERCISE_TYPE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`points-${index}`}>Points</Label>
                <Input
                  id={`points-${index}`}
                  type="number"
                  value={exercise.points || ''}
                  onChange={(e) =>
                    updateExercise(
                      index,
                      'points',
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  placeholder="6"
                  min={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`duration-${index}`}>Durée (min)</Label>
                <Input
                  id={`duration-${index}`}
                  type="number"
                  value={exercise.estimatedDuration || ''}
                  onChange={(e) =>
                    updateExercise(
                      index,
                      'estimatedDuration',
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  placeholder="25"
                  min={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`difficulty-${index}`}>
                  Difficulté: {exercise.estimatedDifficulty || 3}/5
                </Label>
                <input
                  id={`difficulty-${index}`}
                  type="range"
                  value={exercise.estimatedDifficulty || 3}
                  onChange={(e) =>
                    updateExercise(index, 'estimatedDifficulty', parseInt(e.target.value))
                  }
                  min={1}
                  max={5}
                  className="w-full h-2 rounded-base bg-neutral-secondary-soft accent-brand"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`title-${index}`}>Titre de l&apos;exercice</Label>
              <Input
                id={`title-${index}`}
                value={exercise.title || ''}
                onChange={(e) => updateExercise(index, 'title', e.target.value)}
                placeholder="Titrage acide-base d&apos;un vinaigre"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`statement-${index}`}>Énoncé (optionnel)</Label>
              <textarea
                id={`statement-${index}`}
                value={exercise.statement || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateExercise(index, 'statement', e.target.value)}
                placeholder="Collez l&apos;énoncé complet ici..."
                rows={3}
                className="flex min-h-[60px] w-full rounded-base border border-default bg-neutral-primary-soft px-3 py-2 text-sm text-body placeholder:text-body/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`themes-${index}`}>Thèmes</Label>
              <MultiSelect
                options={availableThemes.map((theme) => ({
                  value: theme.id,
                  label: theme.longDescription,
                }))}
                selected={exercise.themeIds}
                onChange={(themeIds) => updateThemes(index, themeIds)}
                placeholder="Sélectionner les thèmes..."
                searchPlaceholder="Rechercher un thème..."
                emptyText="Aucun thème trouvé."
              />
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Actions */}
      <div className="flex justify-between">
        <Button variant="success" onClick={addExercise} disabled={isSubmitting}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un exercice
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => router.push(`/admin/exam-papers/${examPaperId}`)}
            disabled={isSubmitting || isSuggesting}
          >
            Annuler
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || isSuggesting || exercises.length === 0}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Création...' : `Créer ${exercises.length} exercice(s)`}
          </Button>
        </div>
      </div>
    </div>
  );
}
