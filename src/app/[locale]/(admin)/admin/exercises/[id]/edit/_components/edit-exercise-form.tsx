'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MultiSelect } from '@/components/ui/multi-select';
import { updateExercise, deleteExercise } from '@/core/exercise';
import { Exercise, ExamPaper, Diploma, Division, Grade, Teaching, Subject } from '@prisma/client';
import toast from 'react-hot-toast';

type ExerciseWithRelations = Exercise & {
  examPaper: ExamPaper & {
    diploma: Diploma;
    division: Division | null;
    grade: Grade;
    teaching: Teaching & {
      subject: Subject;
      grade: Grade;
    };
  };
};

interface EditExerciseFormProps {
  exercise: ExerciseWithRelations;
  themes: Array<{ value: string; label: string }>;
}

export default function EditExerciseForm({ exercise, themes }: EditExerciseFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [formData, setFormData] = useState({
    exerciseNumber: exercise.exerciseNumber,
    label: exercise.label || '',
    points: exercise.points || undefined,
    pageStart: exercise.pageStart || undefined,
    pageEnd: exercise.pageEnd || undefined,
    title: exercise.title || '',
    statement: exercise.statement || '',
    themeIds: exercise.themeIds,
    estimatedDuration: exercise.estimatedDuration || undefined,
    estimatedDifficulty: exercise.estimatedDifficulty || 3,
    exerciseUrl: exercise.exerciseUrl || '',
    correctionUrl: exercise.correctionUrl || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await updateExercise({
        id: exercise.id,
        exerciseNumber: formData.exerciseNumber,
        label: formData.label || undefined,
        points: formData.points,
        pageStart: formData.pageStart,
        pageEnd: formData.pageEnd,
        title: formData.title || undefined,
        statement: formData.statement || undefined,
        themeIds: formData.themeIds,
        estimatedDuration: formData.estimatedDuration,
        estimatedDifficulty: formData.estimatedDifficulty,
        exerciseUrl: formData.exerciseUrl || undefined,
        correctionUrl: formData.correctionUrl || undefined,
      });

      if (result.success) {
        toast.success('Exercice mis à jour avec succès');
        router.push(`/admin/exam-papers/${exercise.examPaperId}`);
      } else {
        toast.error(result.error || 'Erreur lors de la mise à jour');
      }
    } catch (error) {
      console.error('Error updating exercise:', error);
      toast.error('Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet exercice ?')) {
      return;
    }

    setIsDeleting(true);

    try {
      const result = await deleteExercise(exercise.id);

      if (result.success) {
        toast.success('Exercice supprimé avec succès');
        router.push(`/admin/exam-papers/${exercise.examPaperId}`);
      } else {
        toast.error(result.error || 'Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Error deleting exercise:', error);
      toast.error('Une erreur est survenue');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informations de base</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="exerciseNumber">
                Numéro <span className="text-fg-danger">*</span>
              </Label>
              <Input
                id="exerciseNumber"
                type="number"
                min="1"
                value={formData.exerciseNumber}
                onChange={(e) =>
                  setFormData({ ...formData, exerciseNumber: parseInt(e.target.value) || 1 })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                placeholder="Exercice 1, Partie A..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pageStart">Page debut</Label>
              <Input
                id="pageStart"
                type="number"
                min="1"
                value={formData.pageStart || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pageStart: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                placeholder="1"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pageEnd">Page fin</Label>
              <Input
                id="pageEnd"
                type="number"
                min="1"
                value={formData.pageEnd || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pageEnd: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                placeholder="3"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="points">Points</Label>
              <Input
                id="points"
                type="number"
                value={formData.points || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    points: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                placeholder="6"
                min={1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Durée (min)</Label>
              <Input
                id="duration"
                type="number"
                value={formData.estimatedDuration || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimatedDuration: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                placeholder="25"
                min={1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulté: {formData.estimatedDifficulty}/5</Label>
              <input
                id="difficulty"
                type="range"
                value={formData.estimatedDifficulty}
                onChange={(e) =>
                  setFormData({ ...formData, estimatedDifficulty: parseInt(e.target.value) })
                }
                min={1}
                max={5}
                className="w-full h-2 rounded-base bg-neutral-secondary-soft accent-brand"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Titre de l&apos;exercice</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Titrage acide-base d&apos;un vinaigre"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="statement">Énoncé</Label>
            <Textarea
              id="statement"
              value={formData.statement}
              onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
              placeholder="Énoncé complet de l&apos;exercice..."
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label>Thèmes</Label>
            <MultiSelect
              options={themes}
              selected={formData.themeIds}
              onChange={(themeIds) => setFormData({ ...formData, themeIds })}
              placeholder="Sélectionner des thèmes..."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>URLs (optionnel)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="exerciseUrl">URL de l&apos;exercice</Label>
            <Input
              id="exerciseUrl"
              type="url"
              value={formData.exerciseUrl}
              onChange={(e) => setFormData({ ...formData, exerciseUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="correctionUrl">URL de la correction</Label>
            <Input
              id="correctionUrl"
              type="url"
              value={formData.correctionUrl}
              onChange={(e) => setFormData({ ...formData, correctionUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="destructive"
          onClick={handleDelete}
          disabled={isDeleting || isSubmitting}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          {isDeleting ? 'Suppression...' : 'Supprimer'}
        </Button>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isSubmitting || isDeleting}
          >
            Annuler
          </Button>
          <Button type="submit" disabled={isSubmitting || isDeleting}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </div>
      </div>
    </form>
  );
}
