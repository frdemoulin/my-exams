'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MultiSelect } from '@/components/ui/multi-select';
import { createMultipleExercises, type CreateExerciseInput } from '@/core/exercise';
import { Theme } from '@prisma/client';
import toast from 'react-hot-toast';

interface ExerciseFormData {
  exerciseNumber: number;
  label: string;
  points?: number;
  title?: string;
  statement?: string;
  themeIds: string[];
  estimatedDuration?: number;
  estimatedDifficulty?: number;
}

interface SplitExercisesFormProps {
  examPaperId: string;
  examPaperLabel: string;
  existingExercises: Array<{ exerciseNumber: number; label?: string | null }>;
  availableThemes: Theme[];
}

export function SplitExercisesForm({
  examPaperId,
  examPaperLabel,
  existingExercises,
  availableThemes,
}: SplitExercisesFormProps) {
  const router = useRouter();
  const [exercises, setExercises] = useState<ExerciseFormData[]>([
    { exerciseNumber: 1, label: 'Exercice 1', themeIds: [] },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addExercise = () => {
    const nextNumber = Math.max(...exercises.map((e) => e.exerciseNumber), 0) + 1;
    setExercises([
      ...exercises,
      { exerciseNumber: nextNumber, label: `Exercice ${nextNumber}`, themeIds: [] },
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
      // Vérifier qu'aucun numéro n'existe déjà
      const conflicts = exercises.filter((ex) =>
        existingExercises.some((existing) => existing.exerciseNumber === ex.exerciseNumber)
      );

      if (conflicts.length > 0) {
        toast.error(`Les numéros suivants existent déjà : ${conflicts.map((c) => c.exerciseNumber).join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      // Préparer les données
      const exercisesToCreate: CreateExerciseInput[] = exercises.map((ex) => ({
        examPaperId,
        exerciseNumber: ex.exerciseNumber,
        label: ex.label || undefined,
        points: ex.points,
        title: ex.title,
        statement: ex.statement,
        themeIds: ex.themeIds,
        estimatedDuration: ex.estimatedDuration,
        estimatedDifficulty: ex.estimatedDifficulty,
        keywords: [],
      }));

      // Créer les exercices
      const result = await createMultipleExercises(exercisesToCreate);

      if (result.success) {
        toast.success(`${result.created} exercice(s) créé(s) avec succès`);
        router.push(`/admin/exam-papers/${examPaperId}`);
      } else {
        toast.error(
          result.errors
            ? `Erreurs : ${JSON.stringify(result.errors)}`
            : 'Certains exercices n\'ont pas pu être créés'
        );
      }
    } catch (error) {
      console.error('Error creating exercises:', error);
      toast.error('Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
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
            <div className="rounded-md border border-orange-200 bg-orange-50 p-4">
              <p className="text-sm font-medium text-orange-800">
                ⚠️ Exercices existants : {existingExercises.map((e) => `#${e.exerciseNumber}`).join(', ')}
              </p>
              <p className="text-xs text-orange-700">
                Évitez de créer des exercices avec ces numéros.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Liste des exercices à créer */}
      {exercises.map((exercise, index) => (
        <Card key={index}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Exercice {exercise.exerciseNumber}
              </CardTitle>
              {exercises.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExercise(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
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

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`points-${index}`}>Points</Label>
                <Input
                  id={`points-${index}`}
                  type="number"
                  value={exercise.points || ''}
                  onChange={(e) =>
                    updateExercise(index, 'points', e.target.value ? parseInt(e.target.value) : undefined)
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
                    updateExercise(index, 'estimatedDuration', e.target.value ? parseInt(e.target.value) : undefined)
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
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
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
            disabled={isSubmitting}
          >
            Annuler
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting || exercises.length === 0}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Création...' : `Créer ${exercises.length} exercice(s)`}
          </Button>
        </div>
      </div>
    </div>
  );
}
