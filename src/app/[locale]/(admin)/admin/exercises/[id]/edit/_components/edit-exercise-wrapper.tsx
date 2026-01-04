'use client';

import { useEffect } from 'react';
import { useBreadcrumbOverride } from '@/components/shared/auto-breadcrumb';
import EditExerciseForm from './edit-exercise-form';
import { Exercise, ExamPaper, Diploma, Division, Grade, Teaching, Subject } from '@prisma/client';
import { normalizeExamPaperLabel } from '@/lib/utils';

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

interface EditExerciseWrapperProps {
  exercise: ExerciseWithRelations;
  themes: Array<{ value: string; label: string }>;
}

export default function EditExerciseWrapper({ exercise, themes }: EditExerciseWrapperProps) {
  const { setOverride } = useBreadcrumbOverride();
  const examPaperId = exercise.examPaperId;
  const exerciseNumber = exercise.exerciseNumber;
  const normalizedLabel =
    normalizeExamPaperLabel(exercise.examPaper.label) ?? exercise.examPaper.label;

  useEffect(() => {
    setOverride({
      items: [
        { label: 'Sujets d&apos;examen', href: '/admin/exam-papers' },
        { label: normalizedLabel || 'Sujet', href: `/admin/exam-papers/${examPaperId}` },
        { label: `Exercice ${exerciseNumber}`, href: `/admin/exam-papers/${examPaperId}` },
        { label: 'Édition' },
      ]
    });

    // Cleanup: retirer l'override quand le composant se démonte
    return () => setOverride(null);
  }, [examPaperId, exerciseNumber, normalizedLabel, setOverride]);

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h1 className="text-lg font-semibold md:text-2xl">
          Modifier l&apos;exercice {exercise.exerciseNumber}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sujet : {normalizedLabel || `${exercise.examPaper.diploma.shortDescription} ${exercise.examPaper.sessionYear}`}
        </p>
      </div>

      <EditExerciseForm exercise={exercise} themes={themes} />
    </div>
  );
}
